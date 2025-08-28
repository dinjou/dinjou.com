@echo off
echo Hugo Installation Script for Windows
echo ===================================
echo.

echo Checking for existing Hugo installation...
hugo version >nul 2>&1
if %errorlevel% equ 0 (
    echo Hugo is already installed!
    hugo version
    echo.
    echo You can now run: hugo server -D
    pause
    exit /b 0
)

echo Hugo not found. Installing...

echo.
echo Method 1: Using Chocolatey (if available)
echo -----------------------------------------
where choco >nul 2>&1
if %errorlevel% equ 0 (
    echo Chocolatey found. Installing Hugo...
    choco install hugo-extended -y
    if %errorlevel% equ 0 (
        echo Hugo installed successfully via Chocolatey!
        hugo version
        echo.
        echo You can now run: hugo server -D
        pause
        exit /b 0
    )
)

echo.
echo Method 2: Using Scoop (if available)
echo ------------------------------------
where scoop >nul 2>&1
if %errorlevel% equ 0 (
    echo Scoop found. Installing Hugo...
    scoop install hugo-extended
    if %errorlevel% equ 0 (
        echo Hugo installed successfully via Scoop!
        hugo version
        echo.
        echo You can now run: hugo server -D
        pause
        exit /b 0
    )
)

echo.
echo Method 3: Manual Download
echo -------------------------
echo Please download Hugo manually:
echo 1. Go to: https://github.com/gohugoio/hugo/releases
echo 2. Download: hugo_extended_windows-amd64.zip
echo 3. Extract to a directory (e.g., C:\hugo)
echo 4. Add the directory to your PATH environment variable
echo.
echo Or use one of these commands in PowerShell:
echo - winget install Hugo.Hugo.Extended
echo - choco install hugo-extended
echo - scoop install hugo-extended
echo.

echo Alternative Development Options:
echo ===============================
echo 1. Use the Python development server: python dev-server.py
echo 2. Use any HTTP server to serve the static/ directory
echo 3. Use GitHub Codespaces for cloud development
echo.

pause
