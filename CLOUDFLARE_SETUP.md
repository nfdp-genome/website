# Cloudflare Pages Deployment Guide

## 🌐 Dual Deployment Setup

Your website is configured to deploy to **both** platforms:

1. **GitHub Pages**: https://nfdp-genome.github.io/website/
2. **Cloudflare Pages**: https://website.pages.dev (after setup)

## 🚀 Cloudflare Pages Setup (One-Time)

### Step 1: Get Cloudflare API Token

1. Sign up at https://dash.cloudflare.com/ (free account)
2. Go to **My Profile** → **API Tokens**
3. Click **Create Token**
4. Use template: **Edit Cloudflare Workers**
5. Or create custom token with permissions:
   - Account - Cloudflare Pages - Edit
6. Copy the token (you'll only see it once!)

### Step 2: Get Account ID

1. Go to **Workers & Pages** in Cloudflare Dashboard
2. Look at the URL: `https://dash.cloudflare.com/[ACCOUNT_ID]/workers-and-pages`
3. Copy your Account ID from the URL

### Step 3: Add Secrets to GitHub

Go to: https://github.com/nfdp-genome/website/settings/secrets/actions

Add these secrets:
- **Name**: `CLOUDFLARE_API_TOKEN`
  **Value**: Your API token from Step 1

- **Name**: `CLOUDFLARE_ACCOUNT_ID`
  **Value**: Your Account ID from Step 2

### Step 4: Trigger Deployment

```bash
# Push any change to master branch
git commit --allow-empty -m "Trigger Cloudflare deployment"
git push origin master

# Or manually trigger from GitHub Actions tab
```

### Step 5: Wait for Deployment

- Go to: https://github.com/nfdp-genome/website/actions
- Watch "Deploy to Cloudflare Pages" workflow
- When complete, your site will be live!

## 🌟 Your Sites

After setup, you'll have:

| Platform | URL | Use Case |
|----------|-----|----------|
| **Cloudflare Pages** | https://website.pages.dev | **Primary (faster, better)** |
| **GitHub Pages** | https://nfdp-genome.github.io/website/ | Backup/mirror |

## 📊 Comparison

| Feature | GitHub Pages | Cloudflare Pages |
|---------|--------------|------------------|
| Speed | Good | ⚡ **Faster** (global CDN) |
| Build Minutes | 2000/month | ✅ **Unlimited** |
| Bandwidth | 100GB/month | ✅ **Unlimited** |
| Builds | 10 concurrent | ✅ **Faster builds** |
| Deploy Previews | ❌ | ✅ **Yes** |
| Custom Domain | ✅ | ✅ |

## 🔧 How It Works

When you push to `master` branch, GitHub Actions runs **two workflows**:

1. **`.github/workflows/gh-pages.yml`**
   - Builds with `basePath: /website`
   - Deploys to GitHub Pages
   - URL: https://nfdp-genome.github.io/website/

2. **`.github/workflows/cloudflare-pages.yml`**
   - Builds with no basePath
   - Deploys to Cloudflare Pages
   - URL: https://website.pages.dev

The `next.config.ts` detects which platform it's building for:
```typescript
const isCloudflare = process.env.CLOUDFLARE_PAGES === 'true'
basePath: (isProd && !isCloudflare) ? '/website' : ''
```

## 🎯 Adding Custom Domain (Optional)

### For Cloudflare Pages:
1. Go to your Cloudflare Pages project
2. **Custom domains** → **Set up a domain**
3. Add your domain (e.g., `genomics.example.com`)
4. Update DNS as instructed

### For GitHub Pages:
1. Go to: https://github.com/nfdp-genome/website/settings/pages
2. Add custom domain
3. Update DNS with CNAME record

## 🛠️ Troubleshooting

### Workflow Fails with "API Token Invalid"
- Regenerate token in Cloudflare
- Update `CLOUDFLARE_API_TOKEN` secret in GitHub

### Site Shows 404
- Wait 2-3 minutes after deployment
- Check workflow logs for errors
- Verify Account ID is correct

### Build Fails
- Check GitHub Actions logs
- Test locally: `npm run build`
- Ensure all dependencies are in `package.json`

## 📱 Deploy Preview (Cloudflare Only)

Cloudflare Pages automatically creates preview URLs for:
- Pull requests
- Non-master branches

Format: `https://[BRANCH].[PROJECT].pages.dev`

## 🔄 Workflow Files

| File | Purpose |
|------|---------|
| `.github/workflows/gh-pages.yml` | GitHub Pages deployment |
| `.github/workflows/cloudflare-pages.yml` | Cloudflare Pages deployment |
| `next.config.ts` | Detects platform and configures build |

## 💡 Which Site Should I Use?

**Recommendation**: Use **Cloudflare Pages** as your primary site.

**Why?**
- ⚡ Faster global CDN
- 🚀 Unlimited builds and bandwidth
- 🔄 Deploy previews for testing
- 📈 Better analytics
- 🎯 Simpler URLs (no `/website/` prefix)

**Keep GitHub Pages as**:
- Backup mirror
- Alternative for users in certain regions
- Fallback if Cloudflare has issues

## 📞 Need Help?

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **GitHub Actions Logs**: https://github.com/nfdp-genome/website/actions
- **Your Cloudflare Dashboard**: https://dash.cloudflare.com/

## ✅ Checklist

- [ ] Create Cloudflare account
- [ ] Generate API token
- [ ] Get Account ID
- [ ] Add secrets to GitHub
- [ ] Push to master (triggers deployment)
- [ ] Wait for deployment to complete
- [ ] Visit https://website.pages.dev
- [ ] (Optional) Add custom domain
- [ ] Update links to use Cloudflare URL

---

**Current Status**: ✅ Code is ready, waiting for API tokens to be added!
