#!/bin/bash
# deploy.sh - GitHub Pages deployment script

# Build the project
npm run build

# Navigate to build output directory
cd dist

# Add CNAME file if you have a custom domain (optional)
# echo 'your-domain.com' > CNAME

# Initialize git repository
git init

# Add all files
git add -A

# Commit files
git commit -m "Deploy to GitHub Pages"

# Set up remote (replace with your repository URL)
git remote add origin https://github.com/habibecinar/TravelTrucks.git

# Push to gh-pages branch (force push)
git push -f origin master:gh-pages

# Navigate back to root
cd ..
