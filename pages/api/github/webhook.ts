export default async function handler(req, res) {
  console.log('[Webhook] Received', req.method);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, pull_request } = req.body;

    console.log('[Webhook] Action:', action);

    if (!pull_request) {
      console.log('[Webhook] No PR data');
      return res.status(200).json({ ok: true });
    }

    if (action !== 'opened' && action !== 'synchronize') {
      console.log('[Webhook] Ignoring action:', action);
      return res.status(200).json({ ok: true });
    }

    const owner = pull_request.base.repo.owner.login;
    const repo = pull_request.base.repo.name;
    const prNumber = pull_request.number;
    const prTitle = pull_request.title || 'No title';
    const prBody = pull_request.body || 'No description';

    console.log(`[Webhook] Processing ${owner}/${repo}#${prNumber}`);

    // Get the code diff
    let code = '';
    try {
      console.log('[Webhook] Fetching diff...');
      const diffUrl = pull_request.diff_url;
      const diffRes = await fetch(diffUrl);
      code = await diffRes.text();
      console.log(`[Webhook] Got ${code.length} bytes of code`);
    } catch (e) {
      console.error('[Webhook] Error fetching diff:', e);
      code = 'Could not fetch code';
    }

    // Limit code size
    const limitedCode = code.length > 4000 ? code.slice(0, 4000) : code;

    // Call Claude API
    console.log('[Webhook] Calling Claude API...');
    
    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-6',
        max_tokens: 3500,
        messages: [
          {
            role: 'user',
            content: `You are a professional code reviewer. Provide a DETAILED, THOROUGH code review.

**PR Title:** ${prTitle}

**PR Description:** ${prBody}

**Code to Review:**
\`\`\`
${limitedCode}
\`\`\`

PROVIDE A COMPREHENSIVE REVIEW INCLUDING:

1. **Security Issues** - List every security vulnerability found
2. **Performance Issues** - Identify N+1 queries, memory leaks, inefficient code
3. **Code Quality** - Flag bad naming, missing error handling, complexity issues
4. **Best Practices** - Suggest improvements and fixes

Be SPECIFIC and DETAILED. Include code examples. Write at least 500 words.`,
          },
        ],
      }),
    });

    console.log('[Webhook] Claude response:', claudeRes.status);

    const claudeData = await claudeRes.json();
    
    if (!claudeData.content || !claudeData.content[0]) {
      console.error('[Webhook] No Claude response:', claudeData);
      return res.status(500).json({ error: 'No Claude response' });
    }

    const review = claudeData.content[0].text;
    console.log('[Webhook] Got review:', review.length, 'chars');

    // Post to GitHub
    console.log('[Webhook] Posting to GitHub...');

    const body = `## 🤖 Code Review Copilot\n\n${review}`;

    const githubRes = await fetch(
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

    console.log('[Webhook] GitHub response:', githubRes.status);

    if (githubRes.ok) {
      console.log('[Webhook] ✅ SUCCESS');
      return res.status(200).json({ ok: true });
    } else {
      const error = await githubRes.text();
      console.error('[Webhook] GitHub error:', error);
      return res.status(500).json({ error });
    }

  } catch (error) {
    console.error('[Webhook] ERROR:', error);
    return res.status(500).json({ error: String(error) });
  }
}