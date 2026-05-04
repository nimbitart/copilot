# Code Review Copilot - Setup & Deployment Guide

## Prerequisites
- GitHub account
- Anthropic API key (get from https://console.anthropic.com)
- Node.js 18+ installed
- Vercel account (free at vercel.com)
- Git installed

---

## Phase 1: Local Development Setup (Days 1-2)

### Step 1: Install Dependencies
```bash
cd copilot
npm install
```

### Step 2: Create GitHub App

**Important: Do this in your personal GitHub account first for testing**

1. Go to https://github.com/settings/apps/new
2. Fill in:
   - **App name:** `CodeReviewCopilot` (or test name like `CodeReviewCopilot-Dev`)
   - **Homepage URL:** `http://localhost:3000` (we'll update this later)
   - **Webhook URL:** `http://localhost:3000/api/github/webhook`
   - **Webhook secret:** Run this in terminal:
     ```bash
     openssl rand -hex 32
     ```
     Copy the output and paste it here

3. **Permissions (Read & Write):**
   - Repository contents: `Read-only`
   - Pull requests: `Read & write`
   - Issues: `Read & write` (optional)

4. **Subscribe to events:**
   - Check: `Pull request`

5. **Where can this app be installed?**
   - Select: "Only on this account" (for testing)

6. **Generate a private key:**
   - Scroll down and click "Generate a private key"
   - This downloads a `.pem` file
   - Open it with a text editor

### Step 3: Set Environment Variables

Create `.env.local` in the `copilot` folder:

```env
GITHUB_APP_ID=your_app_id_from_step_2
GITHUB_WEBHOOK_SECRET=your_webhook_secret_from_step_2
GITHUB_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n[paste key content here]\n-----END PRIVATE KEY-----"
ANTHROPIC_API_KEY=your_api_key_from_console.anthropic.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

**How to format the private key:**
1. Open the `.pem` file you downloaded
2. Copy ALL the content (including `-----BEGIN PRIVATE KEY-----`)
3. Replace newlines with `\n`
4. Wrap in quotes

Example:
```env
GITHUB_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDM...\n-----END PRIVATE KEY-----"
```

### Step 4: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser. You should see the landing page.

To test the webhook locally, you need a tunnel. Install ngrok (free):
```bash
# Download from https://ngrok.com/download
# Then:
ngrok http 3000
```

This gives you a URL like `https://xxxx-xxx-xxx.ngrok.io`. Update your GitHub App webhook URL to:
```
https://xxxx-xxx-xxx.ngrok.io/api/github/webhook
```

### Step 5: Install App on Test Repo

1. Go to https://github.com/apps/code-review-copilot-dev (or your app name)
2. Click "Install"
3. Select a test repository you own
4. Authorize

### Step 6: Test with a Real PR

1. Go to your test repo on GitHub
2. Create a new branch:
   ```bash
   git checkout -b test-review
   ```

3. Make a small code change (add a new file or modify one)

4. Push and create a PR:
   ```bash
   git add .
   git commit -m "Test PR for copilot"
   git push origin test-review
   ```

5. Open a PR on GitHub
6. **Check the terminal running `npm run dev`** - you should see webhook events
7. Wait 10-20 seconds, refresh the PR page
8. You should see a comment from your bot!

**If it doesn't work:**
- Check the console for errors
- Verify `.env.local` has correct values
- Check GitHub App webhook history in settings (it shows request/response)

---

## Phase 2: Deploy to Vercel (Days 3-4)

### Step 1: Push to GitHub

```bash
cd copilot
git init
git add .
git commit -m "Initial commit: Code Review Copilot"
git remote add origin https://github.com/YOUR_USERNAME/copilot.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Select your `copilot` repository
5. Click "Import"
6. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add all variables from `.env.local`:
     - `GITHUB_APP_ID`
     - `GITHUB_WEBHOOK_SECRET`
     - `GITHUB_PRIVATE_KEY`
     - `ANTHROPIC_API_KEY`
     - `NEXT_PUBLIC_APP_URL` = your Vercel URL (e.g., `https://copilot-abc123.vercel.app`)
7. Click "Deploy"
8. Wait for deployment to complete (2-3 minutes)
9. You get a URL like `https://copilot-abc123.vercel.app`

### Step 3: Update GitHub App

1. Go to https://github.com/settings/apps
2. Click your app
3. Update:
   - **Homepage URL:** `https://copilot-abc123.vercel.app`
   - **Webhook URL:** `https://copilot-abc123.vercel.app/api/github/webhook`
4. Click "Save changes"

### Step 4: Test on Production

1. Go back to your test repo
2. Create another test PR
3. The bot should comment within 10-20 seconds

---

## Phase 3: Make Your App Public (Days 5-6)

Once it's working on your test repo:

### Step 1: Update GitHub App Settings

1. Go to https://github.com/settings/apps
2. Click your app → "Edit"
3. Under "Where can this app be installed?":
   - Change to: "Any account"
4. Scroll down to "Public page" and enable it
5. Save

### Step 2: Create Installation Link

Your public GitHub App URL is:
```
https://github.com/apps/[YOUR_APP_NAME]/installations/new
```

Or you can put an install button on your landing page. Update `pages/index.tsx`:

```tsx
<a href="https://github.com/apps/codereviewcopilot/installations/new">
  Install on GitHub →
</a>
```

(Replace with your actual app name)

### Step 3: Test Installing on Another Repo

1. Go to the public install link
2. Select a different repo
3. Create a PR
4. Verify it works

---

## Phase 4: Launch (Weeks 2-3)

### Before Public Launch Checklist:

- [ ] Test bot on 2-3 different repositories
- [ ] Verify security (webhook signature verification working)
- [ ] Check error handling (try breaking things)
- [ ] Update landing page with accurate info
- [ ] Create a demo video (record your screen creating a PR, showing the comment)
- [ ] Write a tweet announcing the launch

### Launch Channels:

1. **Product Hunt:**
   - Create post with title: "Code Review Copilot – AI code reviews for GitHub PRs"
   - Post on a Friday for maximum visibility
   - Include demo video

2. **Twitter:**
   ```
   Just shipped Code Review Copilot 🚀
   
   An AI bot that automatically reviews your GitHub PRs in seconds.
   
   Checks for:
   • Security issues
   • Performance problems  
   • Code quality
   
   Install free: [link]
   ```

3. **HackerNews:**
   - Post link with title: "Code Review Copilot – Automated AI code reviews for GitHub"

4. **Dev Communities:**
   - Reddit r/webdev
   - Indie Hackers

---

## Troubleshooting

### "Webhook signature verification failed"
- Check `GITHUB_WEBHOOK_SECRET` matches what you set in GitHub App settings
- Make sure it's being passed correctly in `.env.local`

### "JWT could not be verified"
- Private key formatting is wrong
- Make sure you have the full key including `-----BEGIN PRIVATE KEY-----`
- Check for extra spaces or line breaks

### "Installation not found"
- The bot needs to be installed on the repo
- Go to https://github.com/apps/[your-app-name] and install it

### Claude API errors
- Check your API key is correct
- Check you have credits/quota
- Check the API endpoint isn't down (status.anthropic.com)

### No webhook events coming in
- Check GitHub App webhook history (Settings → Webhooks)
- Verify PR event is selected
- Make sure webhook URL is correct

---

## Monitoring

After launch, watch:
- **GitHub App webhook history** - see every request
- **Vercel logs** - see any server errors
  - Go to your Vercel project → Deployments → Logs
- **Claude API usage** - go to https://console.anthropic.com to track costs

---

## Cost Expectations (First Month)

| Item | Quantity | Cost |
|------|----------|------|
| Claude API | 100 reviews | ~$1.00 |
| Vercel hosting | Generous free tier | $0 |
| GitHub | Free | $0 |
| **Total** | | **<$5** |

If you get 1,000 reviews in a month, expect ~$10-15 in Claude costs.

---

## Next Steps After Launch

1. **Week 1-2:** Monitor installs, watch for feedback/issues
2. **Week 3:** Add features based on what users ask for
3. **Month 2:** Add paid tier (pricing page already in code)
4. **Month 3:** Reach $500-1,000 MRR

---

## Questions?

If you get stuck on any step, the most common issues are:
1. Environment variables not set correctly
2. Private key formatting 
3. GitHub App not installed on the test repo
4. Webhook URL not pointing to correct endpoint

Check the GitHub App webhook history to see what's being sent to your server and what errors are returned.
