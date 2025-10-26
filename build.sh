#!/usr/bin/env bash
# exit on error
set -o errexit

# Upgrade pip and build tools
pip install --upgrade pip setuptools wheel

# Install Python dependencies
pip install -r requirements.txt

# Install Node.js dependencies and build frontend
cd frontend
npm install
npm run build
cd ..
