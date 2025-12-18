# 🚀 Deployment Guide

This guide provides comprehensive instructions for deploying the Genomic Facility Website to various platforms.

## 📋 Prerequisites

Before deploying, ensure you have:

- ✅ Node.js 18+ installed
- ✅ Git repository set up
- ✅ Environment variables configured
- ✅ Build process tested locally
- ✅ All dependencies installed

## 🌐 Deployment Options

### 1. Vercel (Recommended)

Vercel provides the best integration with Next.js applications.

#### Setup

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from CLI**
   ```bash
   vercel --prod
   ```

#### Automatic Deployment

1. **Connect GitHub Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables**
   ```
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   DATABASE_URL=your-production-database-url
   NEXTAUTH_SECRET=your-secret-key
   ```

3. **Deploy**
   - Vercel will automatically deploy on push to main branch

#### Custom Domain

1. **Add Custom Domain** in Vercel dashboard
2. **Update DNS Records** as instructed by Vercel
3. **Update Environment Variables** with new domain

### 2. Netlify

#### Setup

1. **Build Configuration**
   ```bash
   # Build Command
   npm run build
   
   # Publish Directory
   out
   
   # Environment Variables
   NEXT_PUBLIC_APP_URL=https://your-domain.netlify.app
   ```

2. **Deploy via Git**
   - Connect your GitHub repository to Netlify
   - Configure build settings
   - Deploy automatically on push

#### Manual Deployment

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Deploy with Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=out
   ```

### 3. Docker Deployment

#### Build Docker Image

```bash
# Build the image
docker build -t genomic-facility .

# Run the container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_APP_URL=http://localhost:3000 \
  -e DATABASE_URL=file:./dev.db \
  genomic-facility
```

#### Docker Compose

```bash
# Start with docker-compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

#### Production Docker

1. **Build and Push to Registry**
   ```bash
   docker build -t your-registry/genomic-facility:latest .
   docker push your-registry/genomic-facility:latest
   ```

2. **Deploy to Production Server**
   ```bash
   docker pull your-registry/genomic-facility:latest
   docker run -d -p 3000:3000 \
     --name genomic-facility \
     --restart unless-stopped \
     your-registry/genomic-facility:latest
   ```

### 4. Traditional VPS Deployment

#### Server Setup

1. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Install PM2**
   ```bash
   npm install -g pm2
   ```

3. **Clone and Build**
   ```bash
   git clone https://github.com/yourusername/genomic-facility-website.git
   cd genomic-facility-website
   npm install
   npm run build
   ```

4. **Start with PM2**
   ```bash
   pm2 start npm --name "genomic-facility" -- start
   pm2 startup
   pm2 save
   ```

#### Nginx Configuration

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔧 Environment Configuration

### Production Environment Variables

Create `.env.production`:

```env
# Application
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Database
DATABASE_URL=your-production-database-url

# Authentication
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-super-secret-key

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=XXXXXX

# API Keys (Optional)
ZAI_API_KEY=your-zai-api-key
```

### Security Considerations

1. **Use HTTPS** in production
2. **Secure environment variables**
3. **Enable security headers**
4. **Regular updates** for dependencies
5. **Monitor for vulnerabilities**

## 📊 Performance Optimization

### Build Optimization

```json
// next.config.js
{
  "compiler": {
    "removeConsole": true
  },
  "swcMinify": true,
  "compress": true
}
```

### Caching Strategy

1. **Static Assets**: Long-term caching
2. **API Responses**: Appropriate cache headers
3. **Database Queries**: Query optimization
4. **CDN**: Global content delivery

### Monitoring

1. **Performance Monitoring**
   - Google Analytics
   - Vercel Analytics
   - Custom monitoring

2. **Error Tracking**
   - Sentry
   - Custom error logging

## 🔄 CI/CD Pipeline

### GitHub Actions

The project includes a comprehensive GitHub Actions workflow:

```yaml
# .github/workflows/deploy.yml
- Tests on every push
- Build verification
- Automatic deployment on main branch
- Docker image building and pushing
```

### Pipeline Stages

1. **Lint & Test**
   ```bash
   npm run lint
   npm run build
   ```

2. **Security Scan**
   ```bash
   npm audit
   ```

3. **Deploy**
   - Vercel deployment
   - Docker image push
   - Health checks

## 🚨 Troubleshooting

### Common Issues

#### Build Failures

1. **Check Node.js version** (requires 18+)
2. **Verify environment variables**
3. **Clear build cache**
   ```bash
   rm -rf .next
   npm run build
   ```

#### Runtime Errors

1. **Check server logs**
2. **Verify database connection**
3. **Validate environment variables**

#### Performance Issues

1. **Analyze bundle size**
2. **Check Core Web Vitals**
3. **Optimize images and assets**

### Debug Mode

Enable debug logging:

```bash
DEBUG=* npm run dev
```

## 📈 Scaling Considerations

### Horizontal Scaling

1. **Load Balancer**: Nginx/HAProxy
2. **Multiple Instances**: PM2 cluster mode
3. **Database**: Read replicas
4. **CDN**: Global distribution

### Vertical Scaling

1. **Increase server resources**
2. **Optimize database queries**
3. **Implement caching strategies**
4. **Monitor resource usage**

## 🔍 Monitoring and Maintenance

### Health Checks

```javascript
// pages/api/health.js
export default function handler(req, res) {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString() 
  });
}
```

### Monitoring Tools

1. **Uptime monitoring**: UptimeRobot
2. **Performance**: Lighthouse CI
3. **Error tracking**: Sentry
4. **Analytics**: Google Analytics

### Backup Strategy

1. **Database backups**: Daily automated
2. **Code backups**: Git version control
3. **Asset backups**: Cloud storage
4. **Configuration backups**: Version control

---

For additional support, please refer to the [main documentation](README.md) or open an issue on GitHub.