# Code Review Copilot - Week-by-Week Checklist

## Week 1: Build & Test Locally

### Day 1: Setup
- [ ] Clone/copy all project files to your computer
- [ ] Open terminal in `copilot` directory
- [ ] Run: `npm install`
- [ ] Wait for all dependencies to install (2-3 min)
- [ ] Read SETUP_GUIDE.md Section 1 completely

### Day 2: GitHub App
- [ ] Go to https://github.com/settings/apps/new
- [ ] Fill in app details:
  - App name: `CodeReviewCopilot-Dev` (for testing)
  - Homepage URL: `http://localhost:3000`
  - Webhook URL: `http://localhost:3000/api/github/webhook`
  - Webhook secret: Run `openssl rand -hex 32`, paste result
- [ ] Set permissions (Read & Write):
  - Repository contents: Read-only
  - Pull requests: Read & write
- [ ] Subscribe to: Pull request events
- [ ] Set installation to: "Only on this account"
- [ ] Click "Create GitHub App"
- [ ] Copy the App ID (you'll need it)
- [ ] Generate a private key and save the file
- [ ] Save everything to a safe location

### Day 3: Environment Setup
- [ ] Get Anthropic API key:
  - Go to https://console.anthropic.com
  - Click API Keys
  - Create new key
  - Copy it
- [ ] Open `.env.local` in the copilot folder
- [ ] Fill in all values:
  ```env
  GITHUB_APP_ID=[from GitHub App]
  GITHUB_WEBHOOK_SECRET=[from openssl command]
  GITHUB_PRIVATE_KEY="[full content from .pem file]"
  ANTHROPIC_API_KEY=[from console.anthropic.com]
  NEXT_PUBLIC_APP_URL=http://localhost:3000
  ```
- [ ] Save `.env.local`
- [ ] Double-check no typos (this is the most common issue)

### Day 4: Local Testing
- [ ] Run: `npm run dev`
- [ ] Visit http://localhost:3000 in your browser
- [ ] Verify landing page loads
- [ ] Check terminal for any error messages
- [ ] Go to https://github.com/apps/[your-app-name]
- [ ] Click "Install"
- [ ] Select a test repository you own
- [ ] Click "Install"

### Day 5: Real PR Test
- [ ] Go to your test repository
- [ ] Create a new branch: `git checkout -b test-copilot`
- [ ] Make a small code change (e.g., add a comment or new function)
- [ ] Push: `git add . && git commit -m "Test" && git push origin test-copilot`
- [ ] Go to GitHub and create a PR
- [ ] **Wait 10-20 seconds**
- [ ] Refresh the PR page
- [ ] **CHECK:** Do you see a comment from your bot? ✓
  - If YES: Excellent! Move to next steps.
  - If NO: Check troubleshooting in SETUP_GUIDE.md
    - Look at GitHub App webhook history
    - Check terminal for errors
    - Verify .env.local values

---

## Week 2: Deploy to Vercel

### Day 8: Prepare for Deployment
- [ ] Verify bot works on local machine (from Week 1)
- [ ] Create GitHub repository for this code:
  ```bash
  git init
  git add .
  git commit -m "Initial commit: Code Review Copilot"
  git remote add origin https://github.com/YOUR_USERNAME/copilot.git
  git branch -M main
  git push -u origin main
  ```
- [ ] Go to https://vercel.com
- [ ] Sign in with GitHub

### Day 9: Deploy
- [ ] Click "New Project"
- [ ] Select your `copilot` repository
- [ ] Click "Import"
- [ ] You'll see "Environment Variables" section
- [ ] Add each variable:
  - GITHUB_APP_ID
  - GITHUB_WEBHOOK_SECRET
  - GITHUB_PRIVATE_KEY
  - ANTHROPIC_API_KEY
  - NEXT_PUBLIC_APP_URL = [your Vercel URL, e.g., copilot-abc123.vercel.app]
- [ ] Click "Deploy"
- [ ] Wait for deployment (shows in real-time)
- [ ] When done, you get a URL like: `https://copilot-abc123.vercel.app`
- [ ] Visit that URL and verify landing page loads

### Day 10: Connect to GitHub App
- [ ] Go to https://github.com/settings/apps
- [ ] Click your app
- [ ] Update:
  - Homepage URL: `https://copilot-abc123.vercel.app`
  - Webhook URL: `https://copilot-abc123.vercel.app/api/github/webhook`
- [ ] Click "Save changes"
- [ ] Create another test PR in your test repo
- [ ] **Wait 10-20 seconds**
- [ ] Refresh PR page
- [ ] **CHECK:** Bot comments appear? ✓

---

## Week 3: Go Public

### Day 15: Prepare App for Public
- [ ] Go to https://github.com/settings/apps
- [ ] Click your app
- [ ] Scroll to "Where can this app be installed?"
- [ ] Change from "Only on this account" to "Any account"
- [ ] Enable "Public page"
- [ ] Scroll to bottom and enable "Create public page" if available
- [ ] Save changes
- [ ] Your public install URL is now: `https://github.com/apps/[app-name]/installations/new`

### Day 16: Test Public Installation
- [ ] Go to: `https://github.com/apps/codereviewcopilot` (or your app name)
- [ ] Click "Install"
- [ ] Select a DIFFERENT repository you own (not the test one)
- [ ] Create a PR
- [ ] Verify bot comments

### Day 17: Create Demo Video
- [ ] Open screen recording tool (Loom free, or OBS)
- [ ] Record yourself:
  1. Opening your test repo
  2. Creating a new branch
  3. Making a code change
  4. Opening a PR
  5. Showing the bot's comment appearing automatically
- [ ] Keep it under 2 minutes
- [ ] Save as video
- [ ] Upload to YouTube (unlisted is fine)
- [ ] Get the video link

### Day 18: Landing Page Polish
- [ ] Update `pages/index.tsx`:
  - Replace install links with your actual GitHub app URL
  - Update pricing if needed
  - Add your actual info
- [ ] Run: `npm run build` (test that it builds)
- [ ] Push changes: `git add . && git commit -m "Update for launch" && git push`
- [ ] Vercel auto-deploys
- [ ] Visit your site and verify it looks good

---

## Week 4: Launch! 🚀

### Day 22: Pre-Launch Checklist
- [ ] Bot works on 2+ different repos ✓
- [ ] Landing page updated ✓
- [ ] Demo video recorded ✓
- [ ] GitHub App is public ✓
- [ ] Vercel deployment is live ✓
- [ ] No error messages in Vercel logs ✓

### Day 23: Product Hunt Launch (Friday)
- [ ] Go to https://producthunt.com/posts/new
- [ ] Fill in:
  - **Title:** "Code Review Copilot – AI code reviews for GitHub PRs"
  - **Tagline:** "Automated code reviews with Claude AI"
  - **Description:**
    ```
    Code Review Copilot automatically reviews your pull requests
    and provides instant feedback on security, performance, and
    best practices.
    
    Features:
    - Instant reviews on every PR
    - Security issue detection
    - Performance optimization suggestions
    - Code quality feedback
    - Free to start
    
    Install on any GitHub repo in seconds.
    ```
  - **Video:** Link to your demo video
  - **Gallery:** Screenshot of bot comment on PR
  - **Pricing:** Free tier + Pro at $49/mo
  - **Category:** Developer Tools
- [ ] Click "Publish"
- [ ] Share with your friends/network (get early upvotes!)

### Day 24: Twitter Announcement
- [ ] Post:
  ```
  Just shipped Code Review Copilot 🤖
  
  An AI bot that automatically reviews your GitHub PRs in seconds.
  
  Checks for:
  • Security issues 🔒
  • Performance problems ⚡
  • Code quality 📝
  
  Free to try: [link to install]
  
  [emoji] Also on Product Hunt
  ```
- [ ] Pin this tweet
- [ ] Reply with demo video in a thread

### Day 25: Other Launches
- [ ] Post on HackerNews (Stories section)
- [ ] Post on Indie Hackers
- [ ] Post on relevant Reddit communities (r/webdev, r/learnprogramming, etc.)
- [ ] Share in dev Discord servers you're in
- [ ] Email to dev newsletters if you have contacts

### Day 28: First Week Review
- [ ] How many installs? _____
- [ ] How many PRs reviewed? _____
- [ ] Any bug reports? List them:
- [ ] Any feature requests? List them:
- [ ] Next week priorities:
  1. _______________
  2. _______________
  3. _______________

---

## Troubleshooting Checklist

**If bot doesn't comment:**
- [ ] Check GitHub App webhook history
  - Go to: github.com/settings/apps → Your App → Webhooks → Recent Deliveries
  - Look at request and response
  - If response is 500, check Vercel logs
- [ ] Check Vercel logs
  - Go to vercel.com → Your Project → Deployments → Logs
- [ ] Verify .env.local variables are set correctly
- [ ] Check that bot is installed on the repo

**If you can't deploy:**
- [ ] Make sure all files are committed: `git status`
- [ ] Check that .env.local is NOT committed (should be in .gitignore)
- [ ] Add environment variables in Vercel (see Day 9)
- [ ] Check build logs for errors

**If nobody's installing:**
- [ ] Product Hunt may not be the right audience (try Twitter instead)
- [ ] Your demo video might need improvement (clearer before/after)
- [ ] Landing page might need more detail
- [ ] Consider reaching out directly to dev communities

---

## Success Metrics (First Month)

| Metric | Goal | Status |
|--------|------|--------|
| Installs | 50+ | |
| PRs reviewed | 100+ | |
| Feedback | 5+ reviews | |
| Bug reports | 0-2 | |
| Feature requests | 3+ | |
| Paying customers | 1-2 | |

---

## Timeline Summary

- **Week 1 (Days 1-7):** Build locally, test on GitHub
- **Week 2 (Days 8-14):** Deploy to Vercel, go public
- **Week 3 (Days 15-21):** Polish, demo, prepare launch
- **Week 4 (Days 22-28):** LAUNCH! Monitor feedback

---

## You've Got This! 💪

By the end of 4 weeks, you'll have:
1. ✅ A working AI code review bot
2. ✅ A public GitHub App anyone can install
3. ✅ A landed product with real users
4. ✅ The foundation for a profitable business

Start with Week 1, Day 1. One step at a time.
