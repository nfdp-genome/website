# GitHub Pages Deployment Instructions

## 🚀 Your Site URLs
- **Cloudflare Pages**: https://website.alarawms.workers.dev/
- **GitHub Pages**: https://nfdp-genome.github.io/website/

## 📋 Deployment Setup Complete

### ✅ What's Been Configured
1. ✅ Next.js configured for static export
2. ✅ GitHub Actions workflow created (`.github/workflows/gh-pages.yml`)
3. ✅ Package.json updated with simplified scripts
4. ✅ Server-side features removed (Socket.IO, Prisma, API routes)
5. ✅ `.nojekyll` file added to prevent Jekyll processing

### 🔧 Enable GitHub Pages (One-Time Setup)

**Go to your repository settings:**
1. Navigate to: https://github.com/nfdp-genome/website/settings/pages
2. Under "Source", select: **GitHub Actions**
3. Save the settings

That's it! GitHub Actions will automatically deploy on every push to `master`.

## 📝 Workflow

### Development (master branch)
```bash
# Make your changes
git add .
git commit -m "Your changes"
git push origin master

# GitHub Actions automatically:
# 1. Builds the site
# 2. Exports static files to out/
# 3. Deploys to gh-pages branch
# 4. Site updates at https://nfdp-genome.github.io/website/
```

### Local Development
```bash
# Start development server
npm run dev

# Visit http://localhost:3000
```

### Local Build Test
```bash
# Build and export static site
npm run build

# Static files output to: ./out/
```

## 🌐 URLs in Production

Since your site is deployed to a subdirectory, all URLs use `/website/` prefix:
- Homepage: `https://nfdp-genome.github.io/website/`
- Images: `https://nfdp-genome.github.io/website/_next/static/...`
- Assets: `https://nfdp-genome.github.io/website/logo.svg`

This is automatically handled by `next.config.ts`:
```typescript
basePath: '/website'
assetPrefix: '/website/'
```

## ⚠️ What's Been Removed (Static Export Limitations)

To make the site work on GitHub Pages, the following server-side features were removed:

- ❌ **server.ts** - Custom server (not needed)
- ❌ **Socket.IO** - Real-time features (requires server)
- ❌ **Prisma/Database** - Database connections (requires server)
- ❌ **API Routes** - `src/app/api/` (requires server)

The site is now fully static:
- ✅ All pages work
- ✅ Client-side routing works
- ✅ Styling/Tailwind works
- ✅ React components work
- ✅ Theme toggle works
- ✅ Language toggle works

## 🔄 Future Improvements

If you need server-side features back, consider:

### Option 1: Vercel (Recommended for Next.js)
- Keeps all features (API routes, SSR, etc.)
- Free tier available
- One-click deployment from GitHub
- **Setup**: Connect GitHub repo at https://vercel.com

### Option 2: Cloudflare Pages
- Supports Next.js with Edge Functions
- Free tier available
- Good CDN performance
- Requires some configuration

### Option 3: Add Features Back with External Services
- **Database**: Supabase, Firebase, or PlanetScale
- **Real-time**: Pusher, Ably, or Supabase Realtime
- Keep static site but use external APIs

## 📊 Deployment Status

Check deployment status:
- **Actions Tab**: https://github.com/nfdp-genome/website/actions
- **Pages Settings**: https://github.com/nfdp-genome/website/settings/pages

## 🛠️ Troubleshooting

### Build Fails
1. Check GitHub Actions logs
2. Test locally: `npm run build`
3. Fix errors and push again

### 404 Errors
1. Ensure GitHub Pages source is "GitHub Actions"
2. Wait 1-2 minutes for deployment
3. Clear browser cache
4. Check that `/website` prefix is in URLs

### Styles Not Loading
1. Check browser console for errors
2. Ensure `basePath` is correct in `next.config.ts`
3. Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

## 📞 Need Help?

- GitHub Pages Docs: https://docs.github.com/pages
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- Your Repository: https://github.com/nfdp-genome/website
