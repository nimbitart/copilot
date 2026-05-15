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

    // Only process opened/synchronize PRs
    if (action !== 'opened' && action !== 'synchronize') {
      return res.status(200).json({ message: 'Event ignored' });
    }

    if (!pull_request) {
      return res.status(200).json({ message: 'No PR data' });
    }

    const owner = pull_request.base.repo.owner.login;
    const repo = pull_request.base.repo.name;
    const prNumber = pull_request.number;
    const prTitle = pull_request.title;
    const prBody = pull_request.body || '';
    const diffUrl = pull_request.diff_url;

    // Get PR diff
    const diffResponse = await fetch(diffUrl);
    const diff = await diffResponse.text();

    // Call Claude API
    const claudeResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 1024,
        messages: [
          {
            role: 'user',
            content: `Review this GitHub PR and provide feedback on code quality, security, performance, and best practices.\n\nPR Title: ${prTitle}\nPR Body: ${prBody}\n\nCode changes:\n\`\`\`\n${diff}\n\`\`\`\n\nProvide a concise review with specific suggestions.`,
          },
        ],
      }),
    });

    const claudeData = await claudeResponse.json();
    const review = claudeData.content[0]?.text || 'Unable to generate review';

    // Post comment to PR
    const commentResponse = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/issues/${prNumber}/comments`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN || ''}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          body: `## 🤖 Code Review Copilot\n\n${review}`,
        }),
      }
    );

    if (!commentResponse.ok) {
      console.error('Failed to post comment:', await commentResponse.text());
      return res.status(500).json({ error: 'Failed to post comment' });
    }

    return res.status(200).json({ message: 'Review posted successfully' });
  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}