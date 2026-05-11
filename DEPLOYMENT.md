# 🚀 Deployment Guide

## Pre-Deployment Checklist

Before deploying your portfolio, make sure to:

- [ ] Update all personal information in components
- [ ] Add your CV PDF to `public/` folder
- [ ] Test the website locally (`npm start`)
- [ ] Build the project successfully (`npm run build`)
- [ ] Update meta tags in `public/index.html`
- [ ] Set up EmailJS for contact form (optional)
- [ ] Test on mobile devices
- [ ] Check all links work correctly

## Deployment Options

### 1. Netlify (Recommended - Free & Easy)

**Why Netlify?**
- Free hosting for static sites
- Automatic HTTPS
- Continuous deployment from Git
- Custom domain support
- Fast CDN

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"

3. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Update DNS records as instructed

---

### 2. Vercel (Alternative - Also Free)

**Why Vercel?**
- Optimized for React apps
- Automatic deployments
- Free SSL
- Great performance

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd asif-portfolio
   vercel
   ```

3. **Follow the prompts:**
   - Set up and deploy? Yes
   - Which scope? Your account
   - Link to existing project? No
   - Project name? asif-portfolio
   - Directory? ./
   - Override settings? No

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

---

### 3. GitHub Pages (Free)

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these lines:
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/asif-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to repository settings
   - Pages section
   - Source: gh-pages branch
   - Save

---

### 4. Railway (For Full-Stack Apps)

**Steps:**

1. **Create railway.json**
   ```json
   {
     "build": {
       "builder": "NIXPACKS"
     },
     "deploy": {
       "startCommand": "npm start",
       "restartPolicyType": "ON_FAILURE",
       "restartPolicyMaxRetries": 10
     }
   }
   ```

2. **Deploy**
   - Go to [railway.app](https://railway.app)
   - New Project → Deploy from GitHub
   - Select your repository
   - Railway will auto-detect and deploy

---

### 5. Firebase Hosting

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select: Use an existing project or create new
   - Public directory: `build`
   - Single-page app: Yes
   - GitHub integration: Optional

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

## Environment Variables

If you're using EmailJS or other services requiring API keys:

### Netlify
- Go to Site settings → Environment variables
- Add your variables

### Vercel
```bash
vercel env add
```

### Create `.env` file locally (don't commit!)
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

Update `Contact.js` to use:
```javascript
process.env.REACT_APP_EMAILJS_SERVICE_ID
```

---

## Custom Domain Setup

### Netlify
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records:
   - Type: A
   - Name: @
   - Value: 75.2.60.5
   
   - Type: CNAME
   - Name: www
   - Value: your-site.netlify.app

### Vercel
1. Project settings → Domains
2. Add domain
3. Follow DNS instructions

---

## Performance Optimization

Before deploying:

1. **Optimize Images**
   - Compress images using [TinyPNG](https://tinypng.com)
   - Use WebP format when possible

2. **Code Splitting**
   - Already handled by Create React App

3. **Lazy Loading**
   - Consider lazy loading components:
   ```javascript
   const Projects = React.lazy(() => import('./components/Projects'));
   ```

4. **Analyze Bundle Size**
   ```bash
   npm run build
   npx source-map-explorer 'build/static/js/*.js'
   ```

---

## Post-Deployment

### Test Your Site
- [ ] All pages load correctly
- [ ] Mobile responsiveness
- [ ] Dark/light mode toggle
- [ ] Contact form works
- [ ] All links are functional
- [ ] Images load properly
- [ ] Performance (use Lighthouse)

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics (optional)
- [ ] Test meta tags with [Meta Tags](https://metatags.io)

### Monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Monitor performance with Lighthouse CI

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues (404 on refresh)
Add `_redirects` file in `public/`:
```
/*    /index.html   200
```

### Environment Variables Not Working
- Ensure they start with `REACT_APP_`
- Restart development server after adding

---

## Support

If you encounter issues:
1. Check the build logs
2. Verify all dependencies are installed
3. Test locally first
4. Check platform-specific documentation

---

## Quick Deploy Commands

```bash
# Netlify
netlify deploy --prod

# Vercel
vercel --prod

# GitHub Pages
npm run deploy

# Firebase
firebase deploy
```

---

**Your portfolio is ready to go live! 🎉**

Choose your preferred platform and deploy with confidence.
