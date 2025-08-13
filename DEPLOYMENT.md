# Deployment Guide

This guide will help you deploy your Personal Website Generator to various hosting platforms.

## 🚀 **Deploying to Vercel (Recommended)**

### **Prerequisites**
- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com))

### **Step 1: Prepare Your Project**

1. **Build the production version:**
   ```bash
   ./build.sh
   ```

2. **Verify the build:**
   ```bash
   ls -la dist/
   ```

### **Step 2: Deploy to Vercel**

#### **Option A: Deploy from GitHub (Recommended)**

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/personal-website-generator.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect it's a Vite project

3. **Configure deployment:**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Your app will be live at `https://your-project.vercel.app`

#### **Option B: Deploy with Vercel CLI**

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

### **Step 3: Custom Domain (Optional)**

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

## 🌐 **Alternative Hosting Options**

### **Netlify**

1. **Build your project:**
   ```bash
   ./build.sh
   ```

2. **Deploy:**
   - Drag and drop the `dist` folder to [netlify.com](https://netlify.com)
   - Or connect your GitHub repository

### **GitHub Pages**

1. **Add GitHub Pages dependency:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### **AWS S3 + CloudFront**

1. **Build your project:**
   ```bash
   ./build.sh
   ```

2. **Upload to S3:**
   - Create an S3 bucket
   - Enable static website hosting
   - Upload contents of `dist` folder

3. **Configure CloudFront:**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom domain

## 🔧 **Environment Configuration**

### **Production Environment Variables**

Create a `.env.production` file:
```env
VITE_APP_TITLE=Personal Website Generator
VITE_APP_VERSION=1.0.0
```

### **Vercel Environment Variables**

In Vercel Dashboard:
1. Go to your project
2. Settings → Environment Variables
3. Add any required variables

## 📱 **Performance Optimization**

### **Build Optimization**

1. **Enable compression:**
   ```bash
   npm install --save-dev vite-plugin-compression
   ```

2. **Update vite.config.ts:**
   ```typescript
   import compression from 'vite-plugin-compression';

   export default defineConfig({
     plugins: [
       react(),
       compression({
         algorithm: 'gzip',
         ext: '.gz'
       })
     ]
   });
   ```

### **Image Optimization**

1. **Install image optimization:**
   ```bash
   npm install --save-dev vite-plugin-imagemin
   ```

2. **Configure in vite.config.ts:**
   ```typescript
   import imagemin from 'vite-plugin-imagemin';

   export default defineConfig({
     plugins: [
       react(),
       imagemin({
         gifsicle: { optimizationLevel: 7 },
         mozjpeg: { quality: 80 },
         pngquant: { quality: [0.65, 0.8] },
         svgo: { plugins: [{ name: 'removeViewBox', active: false }] }
       })
     ]
   });
   ```

## 🚨 **Troubleshooting**

### **Common Issues**

1. **Build fails:**
   - Check Node.js version (should be 16+)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **404 errors on refresh:**
   - Ensure proper rewrite rules in vercel.json
   - Check routing configuration

3. **Assets not loading:**
   - Verify build output directory
   - Check asset paths in index.html

### **Debug Commands**

```bash
# Check build output
ls -la dist/

# Test production build locally
npm run preview

# Check for build errors
npm run build --verbose

# Verify Docker build
docker run --rm -v $(pwd):/app -w /app personal-website-generator npm run build
```

## 📊 **Monitoring & Analytics**

### **Vercel Analytics**

1. **Enable in Vercel Dashboard:**
   - Go to your project
   - Analytics → Enable

2. **View metrics:**
   - Page views
   - Performance
   - User behavior

### **Custom Analytics**

Add Google Analytics or other tracking:
```html
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 **Continuous Deployment**

### **Automatic Deployments**

1. **GitHub Actions:**
   - Create `.github/workflows/deploy.yml`
   - Automate deployment on push to main

2. **Vercel Auto-Deploy:**
   - Enable in project settings
   - Deploys automatically on every push

## 📚 **Additional Resources**

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment](https://create-react-app.dev/docs/deployment/)

---

**Happy Deploying! 🚀**
