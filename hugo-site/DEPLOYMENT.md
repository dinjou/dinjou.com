# Deployment Guide

This guide will help you deploy your Hugo site to various platforms.

## Prerequisites

1. **Install Hugo Extended**
   ```bash
   # macOS (using Homebrew)
   brew install hugo
   
   # Windows (using Chocolatey)
   choco install hugo-extended
   
   # Linux (using snap)
   snap install hugo --channel=extended
   ```

2. **Verify Installation**
   ```bash
   hugo version
   ```

## Local Development

1. **Start Development Server**
   ```bash
   cd hugo-site
   hugo server -D
   ```
   
   This will start a local server at `http://localhost:1313`

2. **Build for Production**
   ```bash
   hugo
   ```
   
   This creates a `public/` directory with your static site.

## Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial Hugo site"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Set up GitHub Actions**
   Create `.github/workflows/hugo.yml`:
   ```yaml
   name: Deploy Hugo site to Pages
   
   on:
     push:
       branches: ["main"]
     workflow_dispatch:
   
   permissions:
     contents: read
     pages: write
     id-token: write
   
   concurrency:
     group: "pages"
     cancel-in-progress: false
   
   defaults:
     run:
       shell: bash
   
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Install Hugo CLI
           run: |
             wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb
             sudo apt install ${{ runner.temp }}/hugo.deb
           env:
             HUGO_VERSION: 0.120.4
         
         - name: Checkout
           uses: actions/checkout@v4
           with:
             submodules: recursive
             fetch-depth: 0
         
         - name: Setup Pages
           id: pages
           uses: actions/configure-pages@v4
         
         - name: Build with Hugo
           env:
             HUGO_ENVIRONMENT: production
             HUGO_ENV: production
           run: |
             hugo \
               --gc \
               --minify \
               --baseURL "${{ steps.pages.outputs.base_url }}/"
         
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: ./public
   
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages (created by GitHub Actions)

### Option 2: Netlify

1. **Connect Repository**
   - Sign up/login to Netlify
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure Build Settings**
   - Build command: `hugo`
   - Publish directory: `public`
   - Base directory: `hugo-site` (if your Hugo site is in a subdirectory)

3. **Deploy**
   - Netlify will automatically build and deploy your site
   - You'll get a URL like `https://your-site-name.netlify.app`

### Option 3: Vercel

1. **Import Project**
   - Sign up/login to Vercel
   - Click "New Project"
   - Import your GitHub repository

2. **Configure**
   - Framework Preset: Hugo
   - Build Command: `hugo`
   - Output Directory: `public`
   - Root Directory: `hugo-site` (if applicable)

3. **Deploy**
   - Vercel will automatically detect Hugo and deploy

## Custom Domain Setup

### GitHub Pages
1. Add custom domain in repository Settings > Pages
2. Add CNAME record pointing to `yourusername.github.io`
3. Enable HTTPS (automatic)

### Netlify
1. Go to Site Settings > Domain management
2. Add custom domain
3. Update DNS records as instructed

### Vercel
1. Go to Project Settings > Domains
2. Add custom domain
3. Update DNS records as instructed

## Environment Variables

For production builds, you might want to set these environment variables:

- `HUGO_ENVIRONMENT=production`
- `HUGO_ENV=production`

## Troubleshooting

### Common Issues

1. **Hugo not found**
   - Make sure Hugo Extended is installed
   - Check PATH environment variable

2. **Build errors**
   - Check Hugo version compatibility
   - Verify all required files are present
   - Check for syntax errors in templates

3. **Missing assets**
   - Ensure all images are in `static/images/`
   - Check file paths in templates

### Getting Help

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Forum](https://discourse.gohugo.io/)
- [GitHub Issues](https://github.com/gohugoio/hugo/issues)

## Next Steps

After deployment:

1. **Update Social Links**
   - Edit `config.toml` with your actual social media URLs
   - Update contact information

2. **Add Analytics**
   - Google Analytics
   - Plausible Analytics
   - Or other tracking solutions

3. **SEO Optimization**
   - Add meta descriptions
   - Configure Open Graph tags
   - Submit sitemap to search engines

4. **Content Creation**
   - Start writing blog posts
   - Add project details
   - Update portfolio content
