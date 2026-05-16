import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, pull_request } = req.body;

    // Only process opened/synchronize events
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

    console.log(`Processing PR: ${owner}/${repo}#${prNumber}`);

    // Get the diff from the PR diff_url
    let diff = '';
    try {
      const diffUrl = pull_request.diff_url;
      const diffResponse = await fetch(diffUrl);
      diff = await diffResponse.text();
      console.log(`Fetched diff: ${diff.length} chars`);
    } catch (e) {
      console.error('Error fetching diff:', e);
      diff = 'Could not fetch code diff';
    }

    // Truncate if too large
    const codeSample = diff.length > 2000 ? diff.substring(0, 2000) + '...' : diff;

    // Build the review prompt
    const reviewPrompt = `You are an expert code reviewer for GitHub pull requests. Review the following PR and provide constructive feedback.

**Pull Request Title:** ${prTitle}

**Pull Request Description:**
${prBody}

**Code Changes (Diff):**
\`\`\`
${codeSample}
\`\`\`

Please provide a detailed code review that includes:

1. **Security Issues** - Any vulnerabilities, SQL injection, hardcoded secrets, authentication problems, etc.
2. **Performance Issues** - Inefficient loops, N+1 queries, unnecessary operations, memory leaks, etc.
3. **Code Quality** - Missing error handling, unclear variable names, overly complex functions, bad practices, etc.
4. **Suggestions** - Specific improvements and fixes the author should consider.

Format your response with clear sections. Be specific with line numbers if possible. Be helpful and constructive.`;

    // Call Claude API
    let claudeReview = '';
    try {
      console.log('Calling Claude API...');
      
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
              content: reviewPrompt,
            },
          ],
        }),
      });

      const claudeData = await claudeRes.json();
      
      if (claudeRes.ok && claudeData.content && claudeData.content[0]) {
        claudeReview = claudeData.content[0].text;
        console.log('Got review from Claude');
      } else {
        console.error('Claude error:', claudeData);
        claudeReview = 'Could not generate review from Claude API';
      }
    } catch (error) {
      console.error('Claude fetch error:', error);
      claudeReview = 'Error contacting Claude API: ' + String(error);
    }

    // Post the review as a GitHub comment
    const commentBody = `## 🤖 Code Review by Copilot

${claudeReview}

---
*Powered by Claude AI • Code Review Copilot*`;

    try {
      console.log('Posting comment to GitHub...');
      
      const githubRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/issues/${prNumber}/comments`,
        {
          method: 'POST',
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
            'User-Agent': 'CodeReviewCopilot',
          },
          body: JSON.stringify({
            body: commentBody,
          }),
        }
      );

      if (!githubRes.ok) {
        const error = await githubRes.text();
        console.error('GitHub error:', githubRes.status, error);
        return res.status(500).json({ 
          error: 'Failed to post GitHub comment',
          status: githubRes.status,
          details: error 
        });
      }

      console.log('✅ Comment posted successfully');
      return res.status(200).json({ message: 'Review posted' });

    } catch (error) {
      console.error('GitHub post error:', error);
      return res.status(500).json({ error: 'Failed to post comment' });
    }

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({ error: String(error) });
  }
}