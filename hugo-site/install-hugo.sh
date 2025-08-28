#!/bin/bash

echo "Hugo Installation Script"
echo "========================"
echo ""

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to install Hugo using different methods
install_hugo() {
    echo "Attempting to install Hugo..."
    
    # Method 1: Try using curl and direct download
    if command_exists curl; then
        echo "Method 1: Downloading Hugo directly..."
        HUGO_VERSION="0.120.4"
        DOWNLOAD_URL="https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
        
        if curl -L -o hugo.tar.gz "$DOWNLOAD_URL"; then
            tar -xzf hugo.tar.gz
            chmod +x hugo
            if ./hugo version; then
                echo "✅ Hugo installed successfully!"
                echo "You can now run: ./hugo server -D"
                return 0
            fi
        fi
    fi
    
    # Method 2: Try using wget
    if command_exists wget; then
        echo "Method 2: Using wget..."
        HUGO_VERSION="0.120.4"
        DOWNLOAD_URL="https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
        
        if wget -O hugo.tar.gz "$DOWNLOAD_URL"; then
            tar -xzf hugo.tar.gz
            chmod +x hugo
            if ./hugo version; then
                echo "✅ Hugo installed successfully!"
                echo "You can now run: ./hugo server -D"
                return 0
            fi
        fi
    fi
    
    # Method 3: Try package managers
    if command_exists apt-get; then
        echo "Method 3: Using apt-get..."
        sudo apt-get update
        sudo apt-get install -y hugo
        if hugo version; then
            echo "✅ Hugo installed successfully via apt-get!"
            return 0
        fi
    fi
    
    if command_exists yum; then
        echo "Method 4: Using yum..."
        sudo yum install -y hugo
        if hugo version; then
            echo "✅ Hugo installed successfully via yum!"
            return 0
        fi
    fi
    
    if command_exists pacman; then
        echo "Method 5: Using pacman..."
        sudo pacman -S hugo
        if hugo version; then
            echo "✅ Hugo installed successfully via pacman!"
            return 0
        fi
    fi
    
    echo "❌ All installation methods failed."
    return 1
}

# Function to provide manual installation instructions
manual_install_instructions() {
    echo ""
    echo "Manual Installation Options:"
    echo "============================"
    echo ""
    echo "1. Windows (Recommended for WSL):"
    echo "   - Download Hugo from: https://github.com/gohugoio/hugo/releases"
    echo "   - Extract to a directory in your PATH"
    echo "   - Or use Chocolatey: choco install hugo-extended"
    echo ""
    echo "2. macOS:"
    echo "   - Use Homebrew: brew install hugo"
    echo ""
    echo "3. Linux:"
    echo "   - Use snap: snap install hugo --channel=extended"
    echo "   - Or download from: https://gohugo.io/installation/"
    echo ""
    echo "4. Alternative Development Setup:"
    echo "   - Use the Python development server: python3 dev-server.py"
    echo "   - Or use any HTTP server to serve the static/ directory"
    echo ""
}

# Main execution
echo "Checking current environment..."
echo "WSL: $WSL_DISTRO_NAME"
echo "Architecture: $(uname -m)"
echo ""

# Try to install Hugo
if install_hugo; then
    echo ""
    echo "🎉 Hugo is ready to use!"
    echo "Run './hugo server -D' to start the development server"
else
    echo ""
    echo "⚠️  Automatic installation failed."
    manual_install_instructions
fi

echo ""
echo "For more help, visit: https://gohugo.io/installation/"
