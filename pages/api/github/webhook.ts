import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify webhook signature
  const signature = req.headers['x-hub-signature-256'] as string;
  const secret = process.env.GITHUB_WEBHOOK_SECRET || '';
  
  if (signature && secret) {
    const hash = crypto
      .createHmac('sha256', secret)
      .update(JSON.stringify(req.body))
      .digest('hex');
    
    const expected = `sha256=${hash}`;
    if (signature !== expected) {
      console.log('Invalid webhook signature');
      return res.status(401).json({ error: 'Invalid signature' });
    }
  }

  try {
    const { action, pull_request } = req.body;

    if (action !== 'opened' && action !== 'synchronize') {
      return res.status(200).json({ message: 'Event ignored' });
    }

    if (!pull_request) {
      return res.status(200).json({ message: 'No PR data' });
    }

    const owner = pull_request.base.repo.owner.login;
    const repo = pull_request.base.repo.name;
    const prNumber = pull_request.number;
    const prTitle = pull_request.title || 'No title';
    const prBody = pull_request.body || 'No description';

    console.log(`[CodeReviewCopilot] Processing PR: ${owner}/${repo}#${prNumber}`);

    // Get diff
    let diff = '';
    try {
      const diffUrl = pull_request.diff_url;
      const diffResponse = await fetch(diffUrl);
      diff = await diffResponse.text();
    } catch (e) {
      console.error('Error fetching diff:', e);
      diff = 'Could not fetch diff';
    }

    const codeSample = diff.length > 2500 ? diff.substring(0, 2500) + '\n...(truncated)' : diff;

    // Generate review from Claude
    let review = '';
    try {
      const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY || '',
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-opus-4-6',
          max_tokens: 2000,
          messages: [
            {
              role: 'user',
              content: `You are Code Review Copilot, an AI code reviewer for GitHub. Review this PR carefully and provide detailed feedback.

**PR Title:** ${prTitle}

**PR Description:** ${prBody}

**Code Changes:**
\`\`\`diff
${codeSample}
\`\`\`

Please provide a comprehensive code review covering:
1. **🔒 Security Issues** - SQL injection, hardcoded secrets, auth problems, etc.
2. **⚡ Performance Issues** - N+1 queries, inefficient loops, memory leaks, etc.
3. **📝 Code Quality** - Error handling, naming, complexity, best practices, etc.
4. **✅ Suggestions** - Specific improvements and fixes.

Be detailed, specific, and constructive.`,
            },
          ],
        }),
      });

      const data = await claudeRes.json();
      if (claudeRes.ok && data.content?.[0]?.text) {
        review = data.content[0].text;
      } else {
        review = 'Could not generate review';
      }
    } catch (error) {
      review = 'Error generating review: ' + String(error);
    }

    // Post comment using GitHub API with personal token
    const comment = `## 🤖 Code Review Copilot

${review}

---
*AI-powered code reviews by Copilot using Claude*`;

    try {
      const commentRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/issues/${prNumber}/comments`,
        {
          method: 'POST',
          headers: {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github.v3+json',
          },
          body: JSON.stringify({ body: comment }),
        }
      );

      if (!commentRes.ok) {
        console.error('Failed to post comment:', commentRes.status);
        return res.status(500).json({ error: 'Failed to post' });
      }

      console.log('[CodeReviewCopilot] ✅ Review posted');
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Comment error:', error);
      return res.status(500).json({ error: String(error) });
    }

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({ error: String(error) });
  }
}