#!/bin/bash

# Quick GitHub Setup Script
# Run this after creating the repository on GitHub

echo "🚀 Setting up GitHub remote and pushing..."
echo ""

# Add GitHub remote
echo "📡 Adding GitHub remote..."
git remote add origin https://github.com/samba425/portfolio.git

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Your code is now on GitHub"
echo ""
echo "Next steps:"
echo "1. Go to https://github.com/samba425/portfolio/settings/pages"
echo "2. Under 'Source', select 'main' branch and '/ (root)' folder"
echo "3. Click 'Save'"
echo "4. Wait 1-2 minutes"
echo "5. Visit: https://samba425.github.io/portfolio"
echo ""
