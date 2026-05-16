# Deployment Guide

Complete guide for deploying your professional portfolio website.

## Pre-Deployment Checklist

### ✅ Content Review
- [ ] Review all text content for accuracy
- [ ] Update skills and technologies
- [ ] Verify work experience descriptions
- [ ] Check education details
- [ ] Update contact information placeholders
- [ ] Review all links and ensure they work

### ✅ Technical Validation
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Validate CSS (https://jigsaw.w3.org/css-validator/)
- [ ] Check JavaScript console for errors
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Verify responsive design breakpoints

### ✅ Security Check
- [ ] No sensitive information in code
- [ ] No API keys or credentials
- [ ] No personal email addresses
- [ ] Review SECURITY_AUDIT.md
- [ ] Verify .gitignore is configured

### ✅ Performance
- [ ] Run Lighthouse audit (target: 90+ score)
- [ ] Optimize images (if any)
- [ ] Minify CSS and JS (optional for production)
- [ ] Test page load speed

## Deployment Options

### Option 1: GitHub Pages (Recommended)

**Advantages:**
- Free hosting
- Automatic HTTPS
- Easy deployment
- Version control integration

**Steps:**

1. **Prepare Repository**
   ```bash
   # Remove old git history (if needed)
   rm -rf .git
   
   # Initialize new repository
   git init
   git add .
   git commit -m "Initial commit - Professional portfolio"
   ```

2. **Create GitHub Repository**
   - Go to https://github.com/new
   - Create a new repository (e.g., "portfolio")
   - Don't initialize with README (you already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Click Save

5. **Access Your Site**
   - URL: `https://YOUR_USERNAME.github.io/portfolio/`
   - Wait 2-5 minutes for initial deployment

**Custom Domain (Optional):**
```bash
# Add CNAME file
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

Then configure DNS:
- Add CNAME record: `www` → `YOUR_USERNAME.github.io`
- Add A records for apex domain to GitHub IPs

---

### Option 2: Netlify

**Advantages:**
- Instant deployment
- Automatic HTTPS
- Form handling
- Continuous deployment

**Steps:**

1. **Via Git (Recommended)**
   - Push code to GitHub/GitLab/Bitbucket
   - Go to https://app.netlify.com/
   - Click "New site from Git"
   - Connect repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `portfolio`
   - Click "Deploy site"

2. **Via Drag & Drop**
   - Go to https://app.netlify.com/drop
   - Drag the `portfolio` folder
   - Site deploys instantly

**Custom Domain:**
- Go to Site settings → Domain management
- Add custom domain
- Configure DNS as instructed

---

### Option 3: Vercel

**Advantages:**
- Fast global CDN
- Automatic HTTPS
- Preview deployments
- Analytics

**Steps:**

1. **Deploy from Git**
   - Push code to GitHub
   - Go to https://vercel.com/
   - Click "New Project"
   - Import repository
   - Framework Preset: Other
   - Root Directory: `portfolio`
   - Click "Deploy"

2. **Via CLI**
   ```bash
   npm i -g vercel
   cd portfolio
   vercel
   ```

---

### Option 4: AWS S3 + CloudFront

**Advantages:**
- Highly scalable
- Full control
- Professional setup

**Steps:**

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://your-portfolio-bucket
   ```

2. **Configure for Static Hosting**
   ```bash
   aws s3 website s3://your-portfolio-bucket \
     --index-document index.html \
     --error-document index.html
   ```

3. **Upload Files**
   ```bash
   cd portfolio
   aws s3 sync . s3://your-portfolio-bucket \
     --acl public-read
   ```

4. **Set Up CloudFront** (Optional)
   - Create CloudFront distribution
   - Origin: S3 bucket
   - Enable HTTPS
   - Configure custom domain

---

### Option 5: Azure Static Web Apps

**Steps:**

1. **Via Azure Portal**
   - Go to Azure Portal
   - Create "Static Web App"
   - Connect GitHub repository
   - Build configuration:
     - App location: `/portfolio`
     - Output location: (leave empty)

2. **Via CLI**
   ```bash
   az staticwebapp create \
     --name my-portfolio \
     --resource-group my-rg \
     --source https://github.com/YOUR_USERNAME/portfolio \
     --location "East US 2" \
     --branch main \
     --app-location "/portfolio"
   ```

---

## Post-Deployment

### 1. Verify Deployment

**Check List:**
- [ ] Site loads correctly
- [ ] All sections visible
- [ ] Navigation works
- [ ] Smooth scrolling functions
- [ ] Animations work
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] All links work

**Test URLs:**
```
https://your-site.com/
https://your-site.com/#about
https://your-site.com/#skills
https://your-site.com/#experience
https://your-site.com/#education
https://your-site.com/#contact
```

### 2. Performance Testing

**Run Lighthouse Audit:**
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select categories: Performance, Accessibility, Best Practices, SEO
4. Click "Generate report"

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

**Tools:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### 3. Security Headers

**Add to hosting platform:**

```
# Netlify (_headers file)
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: no-referrer-when-downgrade
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;

# Vercel (vercel.json)
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### 4. SEO Optimization

**Update meta tags in index.html:**
```html
<meta name="description" content="Your actual description">
<meta name="keywords" content="your, relevant, keywords">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://your-site.com/preview.jpg">
<meta property="og:url" content="https://your-site.com">
<meta name="twitter:card" content="summary_large_image">
```

**Create sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-site.com/</loc>
    <lastmod>2026-05-16</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Create robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://your-site.com/sitemap.xml
```

### 5. Analytics (Optional)

**Privacy-Friendly Options:**
- [Plausible](https://plausible.io/) - Privacy-focused
- [Fathom](https://usefathom.com/) - Simple analytics
- [Simple Analytics](https://simpleanalytics.com/) - GDPR compliant

**Add to index.html before `</head>`:**
```html
<!-- Example: Plausible -->
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## Continuous Deployment

### GitHub Actions (Example)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./portfolio
```

## Maintenance

### Regular Updates

**Monthly:**
- [ ] Review content for accuracy
- [ ] Update skills if learned new technologies
- [ ] Check all links still work
- [ ] Review analytics (if enabled)

**Quarterly:**
- [ ] Run security audit
- [ ] Update dependencies (if any added)
- [ ] Performance audit
- [ ] Backup site files

**Annually:**
- [ ] Major content refresh
- [ ] Design updates
- [ ] Technology stack review

### Monitoring

**Set up monitoring for:**
- Site uptime (UptimeRobot, Pingdom)
- SSL certificate expiration
- Domain renewal
- Performance metrics

## Troubleshooting

### Common Issues

**1. Site not loading**
- Check DNS configuration
- Verify deployment status
- Check browser console for errors
- Clear browser cache

**2. Styles not applying**
- Verify CSS file path is correct
- Check for CSS syntax errors
- Clear browser cache
- Check Content-Security-Policy headers

**3. JavaScript not working**
- Check browser console for errors
- Verify JS file path is correct
- Ensure script tag is before `</body>`
- Check for JavaScript syntax errors

**4. Mobile display issues**
- Test on actual devices
- Use browser DevTools device emulation
- Check viewport meta tag
- Review media queries

**5. Slow loading**
- Optimize images
- Enable compression
- Use CDN
- Minify CSS/JS

## Support Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/)
- [Web.dev](https://web.dev/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Netlify Docs](https://docs.netlify.com/)

## Rollback Procedure

If deployment fails:

```bash
# Revert to previous commit
git revert HEAD
git push

# Or reset to specific commit
git reset --hard COMMIT_HASH
git push --force
```

---

**Deployment Complete!** 🎉

Your portfolio is now live and ready to share with potential employers and clients.