#!/usr/bin/env python3
"""
Simple development server for Hugo site
This allows you to view your site locally without installing Hugo
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

class HugoDevServer(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        # Set the static directory as the root
        static_dir = Path(__file__).parent / "static"
        super().__init__(*args, directory=str(static_dir), **kwargs)
    
    def do_GET(self):
        # Handle Hugo-style URLs
        if self.path == "/":
            self.path = "/index.html"
        elif self.path.endswith("/"):
            self.path += "index.html"
        
        # Try to serve from static directory first
        static_path = Path(self.directory) / self.path.lstrip("/")
        if static_path.exists():
            return super().do_GET()
        
        # If not found in static, try to serve a simple HTML page
        if self.path.endswith(".html") or self.path == "/":
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            
            # Create a simple HTML page that shows the site structure
            html = self.generate_dev_page()
            self.wfile.write(html.encode())
        else:
            super().do_GET()
    
    def generate_dev_page(self):
        """Generate a simple development page showing the site structure"""
        content_dir = Path(__file__).parent / "content"
        
        html = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hugo Site - Development Mode</title>
    <link rel="stylesheet" href="/css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=Nunito+Sans:wght@400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Oswald:wght@400&display=swap" rel="stylesheet">
    <script src="/js/scripts.js" defer></script>
    <script>
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
    }
    </script>
</head>
<body class="fade-in">
    <header>
        <div class="header-content">
            <img src="/images/profile.png" alt="Profile Picture" class="circular-photo">
            <h1 class="page-title">Spencer - Personal Blog & Portfolio</h1>
            <div class="header-icons">
                <a href="/contact" class="messages-icon">
                    <img src="/images/message.png" alt="Contact" class="icon">
                </a>
                <button class="theme-toggle" onclick="toggleTheme()">
                    <img src="/images/theme-light-dark.png" alt="Toggle Theme" class="icon">
                </button>
            </div>
        </div>
    </header>

    <main>
        <h2 class="body-text-header">Development Mode</h2>
        <hr>
        <p>This is a development server for your Hugo site. Install Hugo to build the full site.</p>
        
        <h3>Site Structure:</h3>
        <ul>
        """
        
        # List content files
        if content_dir.exists():
            for file_path in content_dir.rglob("*.md"):
                relative_path = file_path.relative_to(content_dir)
                if relative_path.name == "_index.md":
                    page_name = relative_path.parent.name if relative_path.parent.name != "." else "Home"
                    html += f'<li><strong>{page_name}</strong> - {file_path}</li>'
                else:
                    html += f'<li>{relative_path}</li>'
        
        html += """
        </ul>
        
        <h3>Next Steps:</h3>
        <ol>
            <li>Install Hugo: <code>brew install hugo</code> (macOS) or download from <a href="https://gohugo.io/installation/">hugo.io</a></li>
            <li>Run <code>hugo server -D</code> for full Hugo development server</li>
            <li>Edit content in the <code>content/</code> directory</li>
        </ol>
    </main>

    <footer>
        <a href="/" class="prev-button">Home</a>
        <a href="/about/" class="next-button">About</a>
    </footer>
</body>
</html>
        """
        return html

def main():
    PORT = 1313
    
    # Change to the Hugo site directory
    os.chdir(Path(__file__).parent)
    
    print(f"Starting development server at http://localhost:{PORT}")
    print("This is a simple server for development. Install Hugo for full functionality.")
    print("Press Ctrl+C to stop the server.")
    
    try:
        with socketserver.TCPServer(("", PORT), HugoDevServer) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"Port {PORT} is already in use. Try a different port or stop the existing server.")
        else:
            print(f"Error starting server: {e}")

if __name__ == "__main__":
    main()
