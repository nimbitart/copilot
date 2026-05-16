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

    if (action !== 'opened' && action !== 'synchronize') {
      return res.status(200).json({ message: 'ignored' });
    }

    if (!pull_request) return res.status(200).json({ message: 'no pr' });

    const owner = pull_request.base.repo.owner.login;
    const repo = pull_request.base.repo.name;
    const prNumber = pull_request.number;
    const prTitle = pull_request.title;
    const prBody = pull_request.body || '';

    console.log(`Reviewing ${owner}/${repo}#${prNumber}`);

    // Get code diff
    let code = '';
    try {
      const res = await fetch(pull_request.diff_url);
      code = await res.text();
    } catch (e) {
      code = 'Could not fetch code';
    }

    // Limit code size
    if (code.length > 3000) {
      code = code.substring(0, 3000) + '\n... (truncated)';
    }

    // Get detailed review from Claude
    let review = '';
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY || '',
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-opus-4-6',
          max_tokens: 2500,
          messages: [
            {
              role: 'user',
              content: `You are Code Review Copilot. Provide a DETAILED code review for this GitHub PR.

PR Title: ${prTitle}
PR Description: ${prBody}

Code to review:
\`\`\`
${code}
\`\`\`

Provide a THOROUGH review with:

**Security Issues:**
- SQL injection vulnerabilities
- Hardcoded secrets/credentials
- Authentication/authorization problems
- Input validation issues

**Performance Issues:**
- N+1 query problems
- Inefficient loops
- Memory leaks
- String concatenation in loops

**Code Quality:**
- Missing error handling
- Bad naming
- Complex functions
- Missing validation

**Best Practices:**
- Improvements needed
- Specific fixes

Be specific, detailed, and actionable. Include code examples where possible.`,
            },
          ],
        }),
      });

      const data = await response.json();
      if (data.content && data.content[0]) {
        review = data.content[0].text;
      } else {
        review = 'Could not generate review';
      }
    } catch (error) {
      review = 'Error: ' + String(error);
    }

    // Post as comment (this will post as YOUR account, not the bot app)
    const body = `## 🤖 Code Review Copilot\n\n${review}`;

    try {
      const commentRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/issues/${prNumber}/comments`,
        {
          method: 'POST',
          headers: {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ body }),
        }
      );

      if (commentRes.ok) {
        console.log('✅ Review posted');
        return res.status(200).json({ ok: true });
      } else {
        return res.status(500).json({ error: 'Failed to post' });
      }
    } catch (error) {
      return res.status(500).json({ error: String(error) });
    }

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: String(error) });
  }
}