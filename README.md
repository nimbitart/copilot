# Code Review Copilot

AI-powered code reviews for GitHub pull requests using Claude.

## What It Does

When someone opens a PR on your repo, this bot automatically:
- Analyzes the code diff
- Checks for security issues
- Identifies performance problems
- Suggests best practices
- Posts feedback as a PR comment

All in seconds.

## Features

✅ **Instant Reviews** - Feedback appears automatically on new PRs  
✅ **Security Focused** - Detects vulnerabilities and security issues  
✅ **Performance Aware** - Catches inefficiencies and optimization opportunities  
✅ **Best Practices** - Enforces code quality standards  
✅ **Respectful** - Constructive feedback, not harsh criticism  

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Get Your Keys
- **Anthropic API Key:** Get from https://console.anthropic.com
- **GitHub App:** Create at https://github.com/settings/apps/new

### 3. Set Environment Variables
```bash
cp .env.local.example .env.local
# Edit .env.local with your keys
```

### 4. Run Locally
```bash
npm run dev
# Visit http://localhost:3000
```

### 5. Deploy to Vercel
```bash
git push
# Go to vercel.com and import this repo
# Add environment variables
# Deploy
```

### 6. Install on GitHub
Go to https://github.com/apps/code-review-copilot and install.

## Detailed Setup

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for step-by-step instructions.

## Project Structure

```
copilot/
├── pages/
│   ├── api/
│   │   ├── github/
│   │   │   └── webhook.ts      # GitHub webhook handler
│   │   └── health.ts            # Health check
│   ├── index.tsx                # Landing page
│   ├── _app.tsx                 # App layout
│   └── _document.tsx            # Document template
├── styles/
│   └── globals.css              # Tailwind styles
├── .env.local                   # Environment variables
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
└── SETUP_GUIDE.md              # Detailed setup
```

## How It Works

1. **User opens PR** on any repo with the bot installed
2. **GitHub sends webhook** to your server
3. **Bot fetches** the code diff
4. **Claude API analyzes** the changes
5. **Comment posted** with feedback
6. **Logs stored** (optional: for dashboard)

## Environment Variables

```env
GITHUB_APP_ID=...              # GitHub App ID
GITHUB_PRIVATE_KEY=...         # GitHub App private key
GITHUB_WEBHOOK_SECRET=...      # Webhook secret
ANTHROPIC_API_KEY=...          # Claude API key
NEXT_PUBLIC_APP_URL=...        # Your app URL
```

## Cost

- **Claude API:** ~$0.01 per review
- **Vercel:** Free tier (or $20/mo if heavily used)
- **GitHub:** Free

## Pricing (When You Launch)

- **Free:** 5 reviews/month
- **Pro:** $49/month for unlimited reviews + custom rules

## Support & Feedback

- GitHub Issues for bugs
- Twitter for feedback (@your_handle)
- Email for enterprise inquiries

## License

MIT

---

**Built with:**
- [Next.js](https://nextjs.org/) - React framework
- [Claude AI](https://anthropic.com/) - Code review engine
- [GitHub API](https://docs.github.com/en/rest) - Repo integration
- [Vercel](https://vercel.com/) - Hosting

**Made by:** You 🚀
"# test-copilot" 
