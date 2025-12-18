# Cloudflare API Token Setup - Quick Guide

## 📋 Step-by-Step Instructions

### Step 1: Create Cloudflare Account (if you don't have one)

1. Go to: **https://dash.cloudflare.com/sign-up**
2. Sign up with your email (it's free!)
3. Verify your email
4. Login to dashboard

---

### Step 2: Get API Token

1. **Login to Cloudflare**: https://dash.cloudflare.com/
2. Click on your **profile icon** (top right)
3. Select **"My Profile"**
4. Go to **"API Tokens"** tab
5. Click **"Create Token"** button

#### Option A: Use Template (Recommended)
- Find **"Edit Cloudflare Workers"** template
- Click **"Use template"**
- Scroll down and click **"Continue to summary"**
- Click **"Create Token"**
- **COPY THE TOKEN** (you'll only see it once!)

#### Option B: Custom Token
- Click **"Create Custom Token"**
- Give it a name: `GitHub Actions - Website`
- Add permissions:
  - **Account** → **Cloudflare Pages** → **Edit**
- Click **"Continue to summary"**
- Click **"Create Token"**
- **COPY THE TOKEN** (you'll only see it once!)

**Example token format:**
```
AbCdEf123456789_GhIjKlMnOpQrStUvWxYz
```

---

### Step 3: Get Account ID

While still in Cloudflare Dashboard:

1. Click **"Workers & Pages"** in the left sidebar
2. Look at the browser URL, it will look like:
   ```
   https://dash.cloudflare.com/XXXXXXXXXXXXXXXX/workers-and-pages
   ```
3. The **XXXXXXXXXXXXXXXX** part is your Account ID
4. Copy that Account ID

**Example Account ID format:**
```
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

---

### Step 4: Add Secrets to GitHub

1. **Go to your repository secrets page**:
   
   **Direct Link**: https://github.com/nfdp-genome/website/settings/secrets/actions
   
   Or navigate: Repository → Settings → Secrets and variables → Actions

2. **Click "New repository secret"** button

3. **Add First Secret**:
   - **Name**: `CLOUDFLARE_API_TOKEN`
   - **Value**: Paste your API token from Step 2
   - Click **"Add secret"**

4