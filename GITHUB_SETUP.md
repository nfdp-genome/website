# 🐙 GitHub Repository Setup Guide

This guide will help you set up your GitHub repository and deploy the Genomic Facility Website.

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Git installed locally
- ✅ Project files committed locally
- ✅ GitHub Personal Access Token (optional)

## 🚀 Step-by-Step Setup

### 1. Create GitHub Repository

1. **Go to GitHub**: [github.com](https://github.com)
2. **Click "New repository"** (+ button in top right)
3. **Repository Settings**:
   - **Repository name**: `genomic-facility-website`
   - **Description**: `Advanced genomic facility website with comprehensive animal breeding services`
   - **Visibility**: Public (or Private if preferred)
   - **Initialize with README**: ❌ (we already have one)
   - **Add .gitignore**: ❌ (we already have one)
   - **Choose license**: ❌ (we already have one)

4. **Click "Create repository"**

### 2. Connect Local Repository to GitHub

#### Option A: Using HTTPS (Recommended)

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/genomic-facility-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Using SSH

```bash
# Add remote repository
git remote add origin git@github.com:YOUR_USERNAME/genomic-facility-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Repository

#### Repository Settings

1. **Go to repository Settings**
2. **Options tab**:
   - **Repository name**: Confirm name
   - **Description**: Add/update description
   - **Website URL**: Add your deployed URL
   - **Topics**: Add relevant tags:
     ```
     nextjs
     typescript
     tailwindcss
     genomics
     bioinformatics
     animal-breeding
     react
     web-development
     ```

#### Branch Protection

1. **Settings → Branches → Add branch protection rule**
2. **Branch name pattern**: `main`
3. **Require pull request reviews before merging**: ✅
4. **Require status checks to pass before merging**: ✅
5. **Require branches to be up to date before merging**: ✅

### 4. Set Up GitHub Pages (Optional)

For documentation hosting:

1. **Settings → Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `main`
4. **Folder**: `/docs`
5. **Save**

### 5. Configure GitHub Secrets

Go to **Settings → Secrets and variables → Actions**:

#### Required Secrets for Deployment

```env
# Vercel Deployment
VERCEL_TOKEN=your_vercel_token
ORG_ID=your_vercel_org_id
PROJECT_ID=your_vercel_project_id

# Docker Deployment
DOCKER_USERNAME=your_docker_username
DOCKER_PASSWORD=your_docker_password

# Application Secrets
NEXT_PUBLIC_APP_URL=https://your-domain.com
DATABASE_URL=your_production_database_url
NEXTAUTH_SECRET=your_super_secret_key

# Optional Services
ZAI_API_KEY=your_zai_api_key
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### 6. Enable GitHub Actions

1. **Actions tab** in your repository
2. **Click "I understand my workflows, go ahead and enable them"**

### 7. Set Up Vercel Integration

#### Automatic Deployment

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/login with GitHub**
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Configure Settings**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

6. **Add Environment Variables**:
   ```
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   NEXTAUTH_SECRET=your_secret_key
   DATABASE_URL=your_database_url
   ```

7. **Click "Deploy"**

#### Custom Domain (Optional)

1. **Vercel Dashboard → Project Settings → Domains**
2. **Add your custom domain**
3. **Update DNS records** as instructed
4. **Update environment variables** with new domain

### 8. Set Up Docker Hub Integration (Optional)

#### Docker Hub Repository

1. **Go to [hub.docker.com](https://hub.docker.com)**
2. **Create new repository**: `genomic-facility`
3. **Connect GitHub account** in Docker Hub settings

#### Automated Builds

1. **Docker Hub → Create → Create Automated Build**
2. **Select GitHub repository**
3. **Configure build settings**:
   - **Dockerfile location**: `/`
   - **Build Context**: `/`
   - **Build Tags**: `latest`, `{branch-name}`

### 9. Configure Webhooks (Optional)

For automated notifications:

1. **Settings → Webhooks → Add webhook**
2. **Payload URL**: Your notification endpoint
3. **Content type**: `application/json`
4. **Events**: Choose which events trigger webhook

### 10. Set Up Issue Templates

Create `.github/ISSUE_TEMPLATE/bug_report.md`:

```markdown
---
name: Bug Report
about: Create a report to help us improve
title: '[BUG] '
labels: bug
assignees: ''
---

**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete your information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Smartphone (please complete your information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.
```

### 11. Set Up Pull Request Template

Create `.github/pull_request_template.md`:

```markdown
## Description
Brief description of changes and motivation.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Cross-browser testing completed

## Checklist:
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published in downstream modules
```

## 🔄 Deployment Workflow

### Automatic Deployment Process

1. **Push to main branch** → Triggers GitHub Actions
2. **GitHub Actions** → Runs tests and builds
3. **Vercel** → Automatically deploys successful builds
4. **Docker Hub** → Builds and pushes Docker image

### Manual Deployment

```bash
# Deploy to Vercel
vercel --prod

# Build and push Docker image
docker build -t yourusername/genomic-facility:latest .
docker push yourusername/genomic-facility:latest
```

## 📊 Repository Analytics

### GitHub Insights

1. **Insights tab** in your repository
2. **Traffic**: View visitors and clones
3. **Commits**: Contribution activity
4. **Code frequency**: Development activity

### External Analytics

1. **Google Analytics**: Track website visitors
2. **Hotjar**: User behavior analysis
3. **Sentry**: Error tracking

## 🔐 Security Best Practices

### Repository Security

1. **Enable two-factor authentication** on your GitHub account
2. **Use strong, unique passwords**
3. **Regularly review access permissions**
4. **Monitor audit logs**

### Code Security

1. **Dependabot alerts**: Enable in Settings
2. **Code scanning**: Enable GitHub Advanced Security
3. **Secret scanning**: Automatic detection of leaked secrets
4. **Regular dependency updates**

## 🚀 Next Steps

After setting up your repository:

1. **Test the deployment** workflow
2. **Monitor the first automated deployment**
3. **Set up monitoring and alerting**
4. **Invite team members** if applicable
5. **Configure project management tools** (Projects, Issues, Milestones)

## 📞 Support

If you encounter issues:

1. **GitHub Documentation**: [docs.github.com](https://docs.github.com)
2. **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
3. **Community Forums**: GitHub Community, Vercel Community
4. **Create an issue** in this repository

---

Your Genomic Facility Website is now ready for collaborative development and automated deployment! 🎉