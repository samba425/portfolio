# Quick Start Guide - Deploy Your Portfolio to GitHub Pages

## 🎯 Goal
Deploy your professional portfolio website to GitHub Pages in under 5 minutes!

## 📋 Prerequisites
- GitHub account
- Git installed on your computer

## 🚀 Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and login
2. Click the **+** icon (top right) → **New repository**
3. **Choose ONE of these options:**

   **Option A - Personal Site (Recommended):**
   - Repository name: `[your-username].github.io`
   - Example: `samba425.github.io`
   - Your site will be at: `https://samba425.github.io`

   **Option B - Project Site:**
   - Repository name: Any name (e.g., `portfolio`, `resume`)
   - Your site will be at: `https://[username].github.io/[repo-name]`

4. Set to **Public**
5. Click **Create repository**
6. **IMPORTANT**: Copy the repository URL (looks like: `https://github.com/username/repo.git`)

### Step 2: Deploy Using Terminal

Open Terminal and run these commands:

```bash
# Navigate to your website folder
cd /Users/sambasiva/Documents/personal/resume/resume_siva/website

# Make deploy script executable
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

When prompted:
- Paste your repository URL from Step 1
- Press Enter

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**:
   - Branch: Select **main**
   - Folder: Select **/ (root)**
5. Click **Save**

⏰ Wait 1-2 minutes for deployment

### Step 4: Visit Your Live Site! 🎉

Your site is now live at:
- Personal site: `https://[username].github.io`
- Project site: `https://[username].github.io/[repo-name]`

## 🔄 Making Updates

After you make changes to your website:

```bash
cd /Users/sambasiva/Documents/personal/resume/resume_siva/website
./deploy.sh
```

Enter a commit message (e.g., "Updated projects section") and press Enter.

Your changes will be live in 1-2 minutes!

## ✅ Verification Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed successfully
- [ ] GitHub Pages enabled in settings
- [ ] Website loads at your GitHub Pages URL
- [ ] All sections display correctly
- [ ] Mobile responsive (check on phone)
- [ ] All links work (email, GitHub, etc.)

## 🎨 Quick Customizations

### Update Your Information

Edit `index.html` and search for:
- `asiva325@gmail.com` → Replace with your email
- `+91 8971245863` → Replace with your phone
- `https://github.com/samba425` → Replace with your GitHub
- Add your LinkedIn URL

### Change Colors

Edit `styles.css`, find `:root` section (line 1-20):

```css
--primary-color: #2563eb;     /* Main blue color */
--secondary-color: #10b981;   /* Green accent */
```

Change these hex codes to your preferred colors!

### Add Your Photo

1. Add your photo to the `website` folder (name it `profile.jpg`)
2. Edit `index.html`, find `.profile-icon` section
3. Replace the icon with:
```html
<img src="profile.jpg" alt="Your Name" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">
```

## 🆘 Troubleshooting

### Issue: "Permission denied" when running deploy.sh
**Solution:**
```bash
chmod +x deploy.sh
```

### Issue: Website shows 404
**Solutions:**
1. Wait 2-3 minutes after enabling GitHub Pages
2. Check that branch is set to "main" in Settings → Pages
3. Make sure repository is Public

### Issue: Changes not showing
**Solutions:**
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Wait 1-2 minutes for GitHub to rebuild
3. Check if git push was successful

### Issue: Git not found
**Solution:** Install Git from [git-scm.com](https://git-scm.com/)

## 📱 Test Your Site

After deployment, test:
- ✅ Desktop view (Chrome, Safari, Firefox)
- ✅ Mobile view (phone browser)
- ✅ Tablet view
- ✅ All navigation links work
- ✅ Contact links (email, phone) work
- ✅ Social media links work
- ✅ Scroll animations work

## 🌟 Next Steps

1. **Share your portfolio:**
   - Add to LinkedIn profile
   - Add to GitHub profile README
   - Share on social media
   - Add to email signature

2. **Custom Domain (Optional):**
   - Buy a domain (e.g., yourname.com)
   - In GitHub Settings → Pages, add custom domain
   - Update DNS settings

3. **SEO Optimization:**
   - Submit to Google Search Console
   - Add Google Analytics
   - Share on social media for backlinks

## 💡 Pro Tips

1. **Regular Updates**: Update your portfolio every 3-6 months
2. **Analytics**: Add Google Analytics to track visitors
3. **Backup**: Keep a local copy of your code
4. **Version Control**: Use meaningful commit messages
5. **Performance**: Keep images under 500KB

## 📞 Need Help?

- GitHub Pages Docs: [pages.github.com](https://pages.github.com/)
- Git Tutorial: [git-scm.com/doc](https://git-scm.com/doc)
- HTML/CSS Help: [developer.mozilla.org](https://developer.mozilla.org/)

---

## 🎊 Congratulations!

Your professional portfolio is now live on the internet!

**Your Live URL:** `https://[your-username].github.io`

Share it with:
- ✉️ Recruiters and hiring managers
- 💼 LinkedIn connections
- 🐙 GitHub profile
- 📧 Email signature
- 📱 Social media

---

**Created with ❤️ | Happy coding!**
