#!/usr/bin/env bash
# exit on error
set -o errexit

echo "========== Starting Build Process =========="

# Upgrade pip and build tools
echo "Installing Python dependencies..."
pip install --upgrade pip setuptools wheel

# Install Python dependencies forcing wheels
pip install --only-binary=:all: -r requirements.txt

echo "Python dependencies installed successfully!"

# Install Node.js dependencies and build frontend
echo "Building frontend..."
cd frontend

echo "Installing Node modules..."
npm ci --legacy-peer-deps || npm install --legacy-peer-deps

echo "Running frontend build..."
npm run build

cd ..

echo "Checking if frontend was built..."
if [ -d "frontend/dist" ]; then
  echo "✓ Frontend built successfully!"
  ls -la frontend/dist/
else
  echo "✗ Frontend dist directory not found!"
  exit 1
fi

echo "========== Build Process Complete =========="
