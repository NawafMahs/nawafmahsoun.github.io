# GitHub Pages Deployment Guide

## 🚀 Deployment Overview

This portfolio is automatically deployed to GitHub Pages using a modern CI/CD pipeline with production hardening and quality assurance.

### Deployment URL
- **Production**: https://nawafmahsoun.github.io
- **Branch**: Deploys from `main` or `master` branch
- **Build Output**: `build/client` directory

## 🔄 Automatic Deployment Process

### Trigger Events
- **Push to main/master**: Triggers full build and deploy
- **Pull Request**: Runs build, tests, and Lighthouse audit (no deploy)

### Pipeline Steps
1. **Checkout**: Fetch latest code
2. **Setup**: Install Node.js 19 and dependencies
3. **Quality Checks**: 
   - ESLint linting
   - Unit tests (if present)
   - Build validation
4. **Build**: Create production build with optimizations
5. **Lighthouse Audit**: Performance and accessibility testing (PR only)
6. **Deploy**: Upload to GitHub Pages (main/master only)

## 📊 Quality Gates

### Lighthouse Thresholds
- **Performance**: ≥ 80 (warning)
- **Accessibility**: ≥ 90 (error if below)
- **Best Practices**: ≥ 80 (warning)
- **SEO**: ≥ 80 (warning)

### Build Requirements
- ✅ ESLint passes with 0 warnings
- ✅ Production build completes successfully
- ✅ All assets properly optimized
- ✅ No security vulnerabilities in dependencies

## 🛠️ Manual Deployment

### Prerequisites
```bash
node --version  # Should be >= 19.9.0
npm --version   # Should be >= 9.6.3
```

### Local Build & Deploy
```bash
# Install dependencies
npm ci

# Run quality checks
npm run lint
npm run test

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Emergency Deployment
If automated deployment fails:

```bash
# Build locally
STATIC_BUILD=true npm run build

# Manual deploy using gh-pages
npx gh-pages -d build/client -b gh-pages
```

## 🔧 Configuration

### GitHub Pages Settings
1. Go to repository **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages` / `/ (root)`
4. **Custom domain**: Not configured (uses github.io)

### Required Permissions
The workflow needs these permissions:
- `contents: read` - Read repository content
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - OIDC token for deployment

### Environment Variables
No environment variables required for basic deployment.

For contact form functionality:
- `AWS_ACCESS_KEY_ID` (optional)
- `AWS_SECRET_ACCESS_KEY` (optional)
- `AWS_REGION` (optional)

## 🚨 Troubleshooting

### Common Issues

**Build Fails - Memory Error**
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

**Deployment Fails - Permissions**
- Check repository settings → Actions → General
- Ensure "Read and write permissions" is enabled
- Verify Pages deployment source is correct

**Assets Not Loading**
- Ensure `public/.nojekyll` exists
- Check asset paths are relative
- Verify build output in `build/client`

**Lighthouse Fails**
- Check console for JavaScript errors
- Verify all images have alt text
- Ensure proper heading hierarchy
- Test on mobile viewport

### Debug Commands
```bash
# Check build output
ls -la build/client/

# Test production build locally
npm run start

# Validate HTML
npx html-validate build/client/index.html

# Check bundle size
npx bundlesize
```

## 🔄 Rollback Procedures

### Automatic Rollback
GitHub Pages keeps previous deployments. To rollback:

1. Go to **Actions** tab
2. Find the last successful deployment
3. Click **Re-run jobs** → **Re-run all jobs**

### Manual Rollback
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force-with-lease origin main
```

### Emergency Rollback
```bash
# Deploy previous version manually
git checkout <previous-commit>
npm ci
npm run build
npm run deploy
git checkout main
```

## 📈 Performance Optimization

### Build Optimizations
- **Code Splitting**: Automatic via Vite
- **Asset Optimization**: Images, fonts, and 3D models
- **Tree Shaking**: Remove unused code
- **Minification**: CSS and JavaScript
- **Compression**: Gzip/Brotli via GitHub Pages

### Runtime Optimizations
- **Lazy Loading**: Images and 3D models
- **Preloading**: Critical resources
- **Caching**: Aggressive browser caching
- **CDN**: GitHub Pages global CDN

## 🔒 Security Considerations

### Build Security
- **Dependency Scanning**: Automated via Dependabot
- **Secret Detection**: No secrets in repository
- **HTTPS Enforcement**: Automatic via GitHub Pages
- **Content Security Policy**: Configured in `_headers`

### Runtime Security
- **XSS Protection**: React's built-in protection
- **CSRF Protection**: Not applicable (static site)
- **Secure Headers**: Via `_headers` file
- **Input Validation**: Client-side only

## 📊 Monitoring & Analytics

### Deployment Monitoring
- **GitHub Actions**: Build and deploy status
- **GitHub Pages**: Deployment history
- **Lighthouse CI**: Performance tracking

### Site Monitoring
- **Core Web Vitals**: Monitor via Google Search Console
- **Error Tracking**: Browser console monitoring
- **Performance**: Lighthouse audits in CI

## 🆘 Support

### Getting Help
1. **Check Actions logs** for build errors
2. **Review Lighthouse reports** for performance issues
3. **Check GitHub Pages status** at status.github.com
4. **Create issue** with detailed error information

### Contact
- **Repository**: https://github.com/NawafMahs/nawafmahsoun.github.io
- **Issues**: Use GitHub Issues for bug reports
- **Discussions**: Use GitHub Discussions for questions

---

**Last Updated**: $(date)  
**Version**: 1.0.0