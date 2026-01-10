#!/bin/bash

# Deployment script for GitHub Pages
# This script helps you quickly deploy your portfolio to GitHub Pages

echo "🚀 Portfolio Deployment Script"
echo "================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if this is already a git repository
if [ -d .git ]; then
    echo "📦 Git repository detected. Updating..."
    git add .
    echo "📝 Enter commit message (or press Enter for default):"
    read commit_message
    if [ -z "$commit_message" ]; then
        commit_message="Update portfolio - $(date '+%Y-%m-%d %H:%M:%S')"
    fi
    git commit -m "$commit_message"
    git push origin main
    echo "✅ Portfolio updated successfully!"
else
    echo "🆕 Setting up new repository..."
    echo ""
    echo "Please enter your GitHub repository details:"
    echo "Repository URL (e.g., https://github.com/username/repo.git):"
    read repo_url
    
    if [ -z "$repo_url" ]; then
        echo "❌ Repository URL is required!"
        exit 1
    fi
    
    # Initialize git
    git init
    git add .
    git commit -m "Initial commit: Professional portfolio website"
    git branch -M main
    git remote add origin "$repo_url"
    git push -u origin main
    
    echo ""
    echo "✅ Repository initialized and pushed to GitHub!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Go to your GitHub repository"
    echo "2. Click on 'Settings'"
    echo "3. Scroll to 'Pages' section"
    echo "4. Under 'Source', select 'main' branch"
    echo "5. Click 'Save'"
    echo ""
    echo "Your site will be live at:"
    echo "https://[your-username].github.io/[repo-name]"
fi

echo ""
echo "🎉 Deployment complete!"
