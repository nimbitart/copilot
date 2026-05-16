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

    if (!pull_request || (action !== 'opened' && action !== 'synchronize')) {
      return res.status(200).json({ ok: true });
    }

    const owner = pull_request.base.repo.owner.login;
    const repo = pull_request.base.repo.name;
    const prNumber = pull_request.number;
    const title = pull_request.title;
    const body = pull_request.body || '';

    // Get code
    let code = '';
    try {
      const r = await fetch(pull_request.diff_url);
      code = await r.text();
      if (code.length > 4000) code = code.slice(0, 4000);
    } catch (e) {
      code = 'Could not get code';
    }

    // Call Claude - FORCE detailed response
    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 3000,
        messages: [{
          role: 'user',
          content: `DETAILED CODE REVIEW - Be THOROUGH and SPECIFIC.

Title: ${title}
Description: ${body}

Code:
\`\`\`
${code}
\`\`\`

MUST INCLUDE:
1. All security issues found (SQL injection, hardcoded secrets, etc)
2. All performance issues (N+1, loops, memory, etc)
3. All code quality issues (error handling, naming, validation, etc)
4. Specific fixes for each issue

WRITE AT LEAST 5-10 PARAGRAPHS. Be detailed.`,
        }],
      }),
    });

    const data = await claudeRes.json();
    const review = data.content?.[0]?.text || 'Could not generate review';

    // Post comment
    const fullComment = `## 🤖 Code Review Copilot\n\n${review}`;

    const postRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/issues/${prNumber}/comments`,
      {
        method: 'POST',
        headers: {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: fullComment }),
      }
    );

    if (postRes.ok) {
      return res.status(200).json({ ok: true });
    } else {
      return res.status(500).json({ error: 'Failed to post' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: String(error) });
  }
}