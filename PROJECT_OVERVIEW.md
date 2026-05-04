# Code Review Copilot - Complete Project Files

## Files Created

Your complete project structure:

```
copilot/
├── pages/
│   ├── api/
│   │   ├── github/
│   │   │   └── webhook.ts           ← GitHub webhook handler (CORE)
│   │   └── health.ts                ← Health check endpoint
│   ├── _app.tsx                     ← App layout
│   ├── _document.tsx                ← Document template
│   └── index.tsx                    ← Landing page
│
├── styles/
│   └── globals.css                  ← Tailwind styles
│
├── .env.local                       ← Environment variables (SECRET)
├── .eslintrc.json                   ← ESLint config
├── .gitignore                       ← Git ignore
├── package.json                     ← Dependencies
├── tsconfig.json                    ← TypeScript config
├── tailwind.config.js               ← Tailwind config
├── postcss.config.js                ← PostCSS config
├── next.config.js                   ← Next.js config
├── README.md                        ← Project overview
└── SETUP_GUIDE.md                   ← Step-by-step setup (READ THIS FIRST)
```

## What Each File Does

### Core Logic
- **pages/api/github/webhook.ts** - The brain of the bot. Receives PR events from GitHub, fetches the code diff, sends it to Claude API, and posts a comment.

### Web Interface
- **pages/index.tsx** - Landing page. Shows features, pricing, and install button.
- **pages/_app.tsx** - App layout wrapper.
- **pages/_document.tsx** - HTML document wrapper.

### Configuration
- **package.json** - Lists all npm dependencies.
- **.env.local** - Your API keys and secrets (NEVER commit this to GitHub).
- **tsconfig.json** - TypeScript settings.
- **tailwind.config.js** - Tailwind CSS settings.
- **next.config.js** - Next.js settings.

### Documentation
- **README.md** - Quick overview of the project.
- **SETUP_GUIDE.md** - Detailed step-by-step instructions (START HERE).

---

## Next Steps (In Order)

### Phase 1: Local Development (Days 1-2)
1. Read SETUP_GUIDE.md (Phase 1)
2. Install dependencies: `npm install`
3. Create GitHub App at github.com/settings/apps/new
4. Set environment variables in .env.local
5. Run `npm run dev` and test locally
6. Create a test PR and verify the bot comments

### Phase 2: Deploy to Vercel (Days 3-4)
1. Push code to GitHub: `git push`
2. Go to vercel.com and import the repository
3. Add environment variables to Vercel
4. Deploy
5. Update GitHub App webhook URL to Vercel URL
6. Test on production

### Phase 3: Make Public (Days 5-6)
1. Change GitHub App from "Only on this account" to "Any account"
2. Enable public page
3. Test installing on another repo
4. Record a demo video
5. Create landing page content

### Phase 4: Launch (Weeks 2-3)
1. Post on Product Hunt
2. Tweet announcement
3. Post on HackerNews
4. Share with dev communities
5. Monitor installs and feedback
6. Iterate based on user feedback

---

## Key Files to Understand

### 1. pages/api/github/webhook.ts (Most Important)
This is where the magic happens:
- Verifies GitHub webhook signature
- Generates GitHub JWT token
- Fetches the PR diff from GitHub
- Sends it to Claude API for analysis
- Posts the review as a GitHub comment

Key functions:
- `verifyGitHubWebhook()` - Security check
- `generateGitHubJWT()` - Auth with GitHub
- `getPRDiff()` - Get code changes
- `reviewCode()` - Call Claude API
- `postReviewComment()` - Post feedback

### 2. pages/index.tsx (Landing Page)
Shows:
- What the bot does
- Key features (Security, Performance, Best Practices)
- How it works (3-step process)
- Pricing table
- Install button

### 3. .env.local (Your Secrets)
Never commit this to GitHub. Contains:
- GitHub App ID
- GitHub private key
- GitHub webhook secret
- Anthropic API key

---

## Environment Variables You Need

Before you run anything, get these:

1. **ANTHROPIC_API_KEY**
   - Go to https://console.anthropic.com
   - Click "API Keys"
   - Create new key
   - Copy it

2. **GITHUB_APP_ID**
   - Created when you make the GitHub App
   - Find at: github.com/settings/apps → Your App → App ID

3. **GITHUB_PRIVATE_KEY**
   - Downloaded when you generate private key in GitHub App settings
   - Needs to be reformatted (see SETUP_GUIDE.md)

4. **GITHUB_WEBHOOK_SECRET**
   - You generate this with: `openssl rand -hex 32`
   - Set it in GitHub App settings

---

## Tech Stack

- **Frontend:** React 18 + Next.js 14 + Tailwind CSS
- **Backend:** Node.js + Next.js API routes
- **AI:** Claude API (Anthropic)
- **GitHub:** GitHub App API (Octokit)
- **Hosting:** Vercel
- **Language:** TypeScript

---

## Important Notes

### Security
- Private key is never exposed to frontend
- Webhook signatures are verified
- All secrets in environment variables only
- Never commit .env.local to GitHub

### Performance
- Bot comments within 10-20 seconds
- Skips diffs > 50KB (too large to review)
- Skips draft PRs (not ready yet)
- Rate limiting: 1 review per PR per hour (can be adjusted)

### Cost
- Claude API: ~$0.01-0.10 per PR (depending on size)
- Vercel: Free tier, then $20/mo if heavily used
- GitHub: Free

---

## Common Issues & Solutions

**"npm install fails"**
- Make sure you have Node.js 18+ installed
- Try: `npm cache clean --force` then `npm install`

**"API keys not working"**
- Double-check you copied them exactly
- No extra spaces or quotes
- For private key, see SETUP_GUIDE.md for formatting

**"Bot doesn't comment on PR"**
- Check the GitHub webhook history (Settings → Webhooks → Recent Deliveries)
- Look at the response status code and error message
- Check Vercel logs if deployed

**"Webhook signature verification failed"**
- Make sure GITHUB_WEBHOOK_SECRET matches what's in GitHub App settings
- Check the .env.local file has no typos

---

## Your Success Checklist

- [ ] Read SETUP_GUIDE.md completely
- [ ] Created GitHub App
- [ ] Set all environment variables
- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` and visited localhost:3000
- [ ] Created test PR and saw bot comment
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Updated GitHub App webhook URL to Vercel
- [ ] Made GitHub App public
- [ ] Installed on a test repo
- [ ] Created demo video
- [ ] Launched on Product Hunt / Twitter / HackerNews

---

## Files Summary

Total: **14 files created**
- **Core logic:** 1 file (webhook.ts)
- **Frontend:** 4 files (index.tsx, _app.tsx, _document.tsx, globals.css)
- **Config:** 6 files (package.json, tsconfig.json, etc.)
- **Documentation:** 2 files (README.md, SETUP_GUIDE.md)
- **Utilities:** 1 file (health.ts)

Everything you need to build and launch a profitable GitHub bot.

---

## Ready to Go?

Start with **SETUP_GUIDE.md** - it walks you through everything step by step.

First task: 
1. Copy all these files into a folder on your computer
2. Open SETUP_GUIDE.md
3. Follow "Phase 1: Local Development Setup"

You've got this! 🚀
