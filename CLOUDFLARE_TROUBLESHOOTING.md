# Cloudflare Pages Deployment Troubleshooting

## 🔧 Common Issues & Solutions

### Issue 1: Build Command Not Found
**Error**: `next: command not found` or `npm run build failed`

**Solution**: Configure build settings in Cloudflare:
1. Go to: Workers & Pages → website → Settings → Builds & deployments
2. Set:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave empty)
   - **Environment variables**: 
     - `NODE_VERSION` = `18`
     - `CLOUDFLARE_PAGES` = `true`

---

### Issue 2: Wrong Output Directory
**Error**: `Directory 'out' not found`

**Solution**: 
The build creates an `out/` directory. Make sure:
- Build output directory in Cloudflare settings is: `out`
- NOT `.next` or `build`

---

### Issue 3: Node Version Error
**Error**: `Node version XX is not supported`

**Solution**:
1. Go to: Workers & Pages → website → Settings → Environment variables
2. Add variable:
   - **Variable name**: `NODE_VERSION`
   - **Value**: `18`
3. Trigger a new deployment

---

### Issue 4: Build Timeout
**Error**: `Build exceeded maximum time`

**Solution**:
Your build might be taking too long. Cloudflare has a 20-minute limit.
- Check if `npm ci` is slow
- Try using `npm install` instead in build settings

---

### Issue 5: Framework Preset Issues
**Error**: Build fails with Next.js errors

**Solution**:
1. Go to: Workers & Pages → website → Settings → Builds & deployments
2. Set **Framework preset**: `None` (not Next.js - we're using static export)
3. Manually set:
   - Build command: `npm run build`
   - Build output: `out`

---

## ✅ Correct Cloudflare Settings

### Build Configuration
```
Framework preset: None
Build command: npm run build
Build output directory: out
Root directory: (leave empty)
```

### Environment Variables
```
NODE_VERSION = 18
CLOUDFLARE_PAGES = true
```

---

## 🔍 How to Check Build Logs

1. Go to: https://dash.cloudflare.com/
2. Click **Workers & Pages**
3. Click on **website** project
4. Click on the failed deployment
5. Click **"View build log"**
6. Copy the error message

---

## 🎯 Two Deployment Methods

You have TWO ways to deploy to Cloudflare:

### Method 1: Direct Git Integration (Recommended - What You Did)
- ✅ Cloudflare automatically builds from GitHub
- ✅ No API tokens needed
- ✅ Simpler setup
- Configure in Cloudflare Dashboard

### Method 2: GitHub Actions (Alternative)
- Uses the workflow: `.github/workflows/cloudflare-pages.yml`
- Requires API tokens as secrets
- More control over build process

**You only need ONE method!** Since you connected directly, you can ignore Method 2.

---

## 🚀 Quick Fix Steps

1. **Go to Cloudflare Dashboard**: https://dash.cloudflare.com/
2. Navigate to: **Workers & Pages** → **website** → **Settings**
3. Click **Builds & deployments**
4. Update settings:
   - Framework preset: `None`
   - Build command: `npm run build`
   - Build output directory: `out`
5. Click **Environment variables** tab
6. Add:
   - `NODE_VERSION` = `18`
   - `CLOUDFLARE_PAGES` = `true`
7. Go back to **Deployments** tab
8. Click **"Retry deployment"** on the failed build

---

## 📞 Still Having Issues?

**Copy the build log error and share it with me!**

To get the error:
1. Cloudflare Dashboard → Workers & Pages → website
2. Click the failed deployment
3. Click "View build log"
4. Scroll to the red error message
5. Copy and share it

I'll help you fix it! 🛠️
