#!/usr/bin/env bash
# exit on error
set -o errexit

# Upgrade pip and build tools
pip install --upgrade pip setuptools wheel

# Install build dependencies for pandas and numpy
pip install Cython

# Install numpy first (pandas depends on it)
pip install "numpy==1.26.4"

# Install other Python dependencies
pip install Flask==3.0.0 flask-cors==4.0.0 joblib==1.3.2 gunicorn==21.2.0

# Install pandas
pip install "pandas==2.2.0"

# Install scikit-learn and category-encoders
pip install scikit-learn==1.6.1 category-encoders==2.8.1

# Install Node.js dependencies and build frontend
cd frontend
npm install
npm run build
cd ..
