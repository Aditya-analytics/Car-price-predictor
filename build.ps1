# Exit on error
$ErrorActionPreference = "Stop"

# Upgrade pip and build tools
pip install --upgrade pip setuptools wheel

# Install Python dependencies forcing wheels
pip install --only-binary=:all: -r requirements.txt

# Install Node.js dependencies and build frontend
Set-Location frontend
npm install
npm run build
Set-Location ..
