#!/bin/bash
# deploy.sh - GitHub Pages deployment script

echo "🏗️  Building project..."
npm run build

echo "📁 Preparing deployment..."
cd dist

# Check if hero.jpg exists
if [ ! -f "hero.jpg" ]; then
    echo "❌ Error: hero.jpg not found in dist folder"
    exit 1
fi

echo "✅ Hero image found: hero.jpg"

# Initialize git repository
git init

# Add all files
git add -A

# Commit files  
git commit -m "Deploy to GitHub Pages - $(date)"

# Set up remote (replace with your repository URL)
git remote add origin https://github.com/habibecinar/TravelTrucks.git 2>/dev/null || git remote set-url origin https://github.com/habibecinar/TravelTrucks.git

# Push to gh-pages branch (force push)
echo "🚀 Deploying to GitHub Pages..."
git push -f origin HEAD:gh-pages

# Navigate back to root
cd ..

echo "✅ Deployment completed!"
echo "🌐 Site will be available at: https://habibecinar.github.io/TravelTrucks/"
