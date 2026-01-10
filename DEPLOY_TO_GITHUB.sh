#!/bin/bash

# GitHub Deployment Guide for Portfolio Website
# This script helps you deploy your portfolio to GitHub Pages

echo "📝 GitHub Repository Setup & Deployment Guide"
echo "=============================================="
echo ""

echo "Step 1: Create GitHub Repository"
echo "---------------------------------"
echo "1. Go to https://github.com/new"
echo "2. Repository name: portfolio"
echo "3. Description: Professional portfolio website - Alla Samba Siva Rao"
echo "4. Set to Public"
echo "5. DO NOT initialize with README (we already have one)"
echo "6. Click 'Create repository'"
echo ""

echo "Step 2: Connect Local Repository to GitHub"
echo "-------------------------------------------"
echo "Run these commands in your terminal:"
echo ""
echo "cd /Users/sambasiva/Documents/personal/resume/resume_siva/website"
echo "git remote add origin https://github.com/samba425/portfolio.git"
echo "git push -u origin main"
echo ""

echo "Step 3: Enable GitHub Pages"
echo "---------------------------"
echo "1. Go to your repository: https://github.com/samba425/portfolio"
echo "2. Click 'Settings' tab"
echo "3. Click 'Pages' in the left sidebar"
echo "4. Under 'Source', select 'main' branch"
echo "5. Select '/ (root)' folder"
echo "6. Click 'Save'"
echo ""

echo "Step 4: Wait & Access"
echo "---------------------"
echo "⏱️  Wait 1-2 minutes for GitHub Pages to build"
echo "🌐 Your site will be live at: https://samba425.github.io/portfolio"
echo ""

echo "✅ Your portfolio is now deployed!"
echo ""
echo "🔄 To update your portfolio in the future:"
echo "   1. Make changes to your files"
echo "   2. Run: git add ."
echo "   3. Run: git commit -m 'Update portfolio'"
echo "   4. Run: git push"
echo "   5. Changes will be live in 1-2 minutes"
echo ""

echo "📋 Useful Commands:"
echo "-------------------"
echo "Check status:        git status"
echo "View history:        git log --oneline"
echo "See remote:          git remote -v"
echo ""

echo "🎉 Happy deploying!"
