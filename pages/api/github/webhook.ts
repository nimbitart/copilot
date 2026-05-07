import { createHmac } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Verify GitHub webhook signature
function verifyGitHubWebhook(req: NextApiRequest): boolean {
  const signature = req.headers['x-hub-signature-256'] as string;
  if (!signature) return false;

  const hmac = createHmac(
    'sha256',
    process.env.GITHUB_WEBHOOK_SECRET || ''
  );
  const body = JSON.stringify(req.body);
  hmac.update(body);
  const hash = `sha256=${hmac.digest('hex')}`;

  return hash === signature;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify webhook
  if (!verifyGitHubWebhook(req)) {
    console.log('Webhook signature verification failed');
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const event = req.body;

  // Only handle PR opened/synchronize events
  if (event.action !== 'opened' && event.action !== 'synchronize') {
    return res.status(200).json({ message: 'Event ignored' });
  }

  try {
    const { pull_request: pr, repository } = event;
    
    if (!pr || !repository) {
      return res.status(400).json({ error: 'Invalid webhook payload' });
    }

    const owner = repository.owner.login;
    const repo = repository.name;
    const pullNumber = pr.number;

    console.log(`Processing PR #${pullNumber} in ${owner}/${repo}`);

    // Skip if draft
    if (pr.draft) {
      return res.status(200).json({ message: 'Skipping draft PR' });
    }

    // Simple response for now
    return res.status(200).json({ 
      success: true, 
      message: `PR #${pullNumber} received and logged` 
    });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}