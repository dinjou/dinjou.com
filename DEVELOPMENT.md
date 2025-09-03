# Development Guide

This guide provides multiple options for developing your Hugo site locally.

## Option 1: Install Hugo (Recommended)

### Windows (Recommended for WSL)
1. **Download Hugo manually:**
   - Go to https://github.com/gohugoio/hugo/releases
   - Download `hugo_extended_windows-amd64.zip`
   - Extract to a directory (e.g., `C:\hugo`)
   - Add the directory to your PATH environment variable

2. **Using Chocolatey (if available):**
   ```cmd
   choco install hugo-extended
   ```

3. **Using Scoop (if available):**
   ```cmd
   scoop install hugo-extended
   ```

### macOS
```bash
brew install hugo
```

### Linux
```bash
# Ubuntu/Debian
sudo apt-get install hugo

# CentOS/RHEL
sudo yum install hugo

# Arch Linux
sudo pacman -S hugo

# Using snap
snap install hugo --channel=extended
```

### Verify Installation
```bash
hugo version
```

### Start Development Server
```bash
cd hugo-site
hugo server -D
```

Visit `http://localhost:1313` to see your site.

## Option 2: Alternative Development Servers

### Using Python (if available)
```bash
cd hugo-site
python3 dev-server.py
```

### Using Node.js (if available)
```bash
cd hugo-site/static
npx http-server -p 1313
```

### Using PHP (if available)
```bash
cd hugo-site/static
php -S localhost:1313
```

### Using Ruby (if available)
```bash
cd hugo-site/static
ruby -run -e httpd . -p 1313
```

## Option 3: Manual File Serving

You can also serve the files manually using any web server:

1. **Copy your original static files** to the `static/` directory
2. **Use any HTTP server** to serve the `static/` directory
3. **Edit files directly** in the `content/` directory for content changes

## Option 4: Online Development

### GitHub Codespaces
1. Push your Hugo site to GitHub
2. Open in GitHub Codespaces
3. Install Hugo in the cloud environment
4. Run `hugo server -D --bind 0.0.0.0`

### Gitpod
1. Push your Hugo site to GitHub
2. Open in Gitpod
3. Install Hugo: `sudo snap install hugo --channel=extended`
4. Run `hugo server -D --bind 0.0.0.0`

## Current Status

Your Hugo site is ready with:
- ✅ Complete site structure
- ✅ All content migrated to Markdown
- ✅ Hugo templates created
- ✅ Configuration files set up
- ✅ Sample blog posts created
- ⏳ Hugo installation needed for full functionality

## Quick Start (Once Hugo is Installed)

1. **Start the development server:**
   ```bash
   cd hugo-site
   hugo server -D
   ```

2. **Edit content:**
   - Edit files in `content/` directory
   - Changes will auto-reload in the browser

3. **Add new blog posts:**
   ```bash
   hugo new blog/professional/my-new-post.md
   hugo new blog/personal/my-new-post.md
   hugo new blog/ctf/my-ctf-writeup.md
   ```

4. **Build for production:**
   ```bash
   hugo
   ```

## Troubleshooting

### Hugo not found
- Make sure Hugo is installed and in your PATH
- Try running `hugo version` to verify installation

### Port already in use
- Change the port: `hugo server -D --port 8080`
- Or stop the existing server

### Build errors
- Check Hugo version compatibility
- Verify all required files are present
- Check for syntax errors in templates

### WSL Issues
- Try installing Hugo on Windows and running from WSL
- Or use Windows Terminal/PowerShell instead of WSL
- Consider using GitHub Codespaces for cloud development

## Next Steps

1. **Install Hugo** using one of the methods above
2. **Start the development server**
3. **Begin writing content** in the `content/` directory
4. **Customize the design** by editing templates and CSS
5. **Deploy** when ready (see `DEPLOYMENT.md`)

## Support

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Installation Guide](https://gohugo.io/installation/)
- [Hugo Forum](https://discourse.gohugo.io/)
