# Portfolio Admin Panel - User Guide

## 🎯 Overview

Your portfolio now has a **dynamic admin panel** that allows you to easily add, edit, and delete content without manually editing HTML files. All changes are saved and automatically reflected on your website.

## 📁 New Files Created

1. **data.json** - Contains all your portfolio data (skills, experience, projects, awards, profile)
2. **admin.html** - Admin panel interface for managing content
3. **admin.js** - Admin panel functionality
4. **dynamic-renderer.js** - Dynamically loads and renders data on your main website

## 🚀 How to Use

### Step 1: Access Admin Panel

1. Open `admin.html` in your browser:
   ```
   http://localhost:8000/admin.html
   ```

2. You'll see 5 tabs:
   - **Skills** - Manage skill categories
   - **Experience** - Manage work experience
   - **Projects** - Manage projects
   - **Awards** - Manage awards and certifications
   - **Profile** - Edit personal information

### Step 2: Add New Content

#### Adding a New Skill Category

1. Click on the **Skills** tab
2. Fill in the form:
   - **Category Name**: e.g., "Machine Learning"
   - **Icon Class**: e.g., "fa-robot" (Find icons at [Font Awesome](https://fontawesome.com/icons))
   - **Featured Category**: Check if you want this highlighted
   - **Skills**: Type each skill and press Enter (e.g., "PyTorch", "TensorFlow")
3. Click **Save Skill Category**
4. Your new skill category will appear in the list below

#### Adding a New Company/Experience

1. Click on the **Experience** tab
2. Fill in the form:
   - **Job Title**: e.g., "Lead Developer"
   - **Company**: e.g., "Tech Corp"
   - **Duration**: e.g., "Jan 2024 - Present"
   - **Description**: Brief role description
   - **Achievements**: Type each achievement and press Enter
   - **Technologies**: Type each technology and press Enter
3. Click **Save Experience**

#### Adding a New Project

1. Click on the **Projects** tab
2. Fill in the form:
   - **Project Title**: e.g., "E-commerce Platform"
   - **Company**: Company name
   - **Icon Class**: e.g., "fa-shopping-cart"
   - **Featured Project**: Check to highlight
   - **Description**: Project description
   - **Impact Points**: Type each impact point and press Enter
   - **Technologies**: Type each technology and press Enter
3. Click **Save Project**

#### Adding Awards

1. Click on the **Awards** tab
2. Fill in:
   - **Award Title**: e.g., "Excellence Award"
   - **Organization**: e.g., "Google"
   - **Year**: e.g., "2024"
   - **Icon Class**: e.g., "fa-trophy"
3. Click **Save Award**

### Step 3: Edit Existing Content

1. Go to the relevant tab (Skills, Experience, Projects, or Awards)
2. Scroll down to the list of existing items
3. Click the **Edit** button (blue pencil icon)
4. Form will populate with existing data
5. Make your changes
6. Click **Save**

### Step 4: Delete Content

1. Find the item you want to delete in the list
2. Click the **Delete** button (red trash icon)
3. Confirm deletion
4. Item will be removed

### Step 5: Update Profile Information

1. Click on the **Profile** tab
2. Update your:
   - Name, title, subtitle
   - Description
   - Contact info (email, phone, location)
   - Social links (GitHub, LinkedIn)
   - Stats (years of experience, projects, users)
3. Click **Save Profile**

## 🔄 Updating Your Main Website

### Option 1: Automatic (Using localStorage)

The admin panel saves data to your browser's localStorage. To make this work with your main website:

1. Add this line to your `index.html` **before the closing `</body>` tag**:
   ```html
   <script src="dynamic-renderer.js"></script>
   ```

2. Refresh `index.html` in your browser
3. Changes made in `admin.html` will automatically appear!

### Option 2: Manual (Using data.json)

1. After making changes in the admin panel, open browser console (F12)
2. Type: `downloadData()`
3. Save the downloaded file as `data.json` in your website folder
4. Refresh your website

## 🎨 Finding Icons

All icons use **Font Awesome**. To find icon classes:

1. Visit: https://fontawesome.com/search
2. Search for an icon (e.g., "code", "database", "cloud")
3. Copy the class name (e.g., `fa-code`, `fa-database`, `fa-cloud`)
4. Use it in the **Icon Class** field

Popular icons:
- **Skills**: `fa-laptop-code`, `fa-server`, `fa-database`, `fa-cloud`, `fa-brain`, `fa-tools`
- **Projects**: `fa-chart-line`, `fa-robot`, `fa-mobile-alt`, `fa-shopping-cart`, `fa-rocket`
- **Awards**: `fa-trophy`, `fa-award`, `fa-medal`, `fa-star`, `fa-certificate`

## 💾 Data Storage

Your data is stored in:
1. **localStorage** - Browser storage (temporary, cleared when cache is cleared)
2. **data.json** - Permanent file you can download and backup

### To Backup Your Data

1. Open browser console in `admin.html` (Press F12)
2. Type: `downloadData()`
3. Save the file
4. Keep it as backup

### To Restore Data

1. Replace `data.json` with your backup file
2. Clear localStorage: Open console and type `localStorage.clear()`
3. Refresh the page

## 🔧 Integration with Main Website

Add this script tag to your `index.html` to enable dynamic rendering:

```html
<!-- Add before closing </body> tag -->
<script src="dynamic-renderer.js"></script>
```

This will:
- ✅ Load data from localStorage (admin updates) or data.json
- ✅ Automatically render all content
- ✅ Update in real-time when admin panel is used

## 📱 Mobile Friendly

The admin panel is fully responsive and works on:
- 💻 Desktop
- 📱 Tablets
- 📱 Mobile phones

## 🆘 Troubleshooting

### Changes not showing on main website?

1. Make sure you added `<script src="dynamic-renderer.js"></script>` to index.html
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser console for errors (F12)

### Lost all data?

1. Check if you have a downloaded `data.json` backup
2. The original data is in `data.json` - refresh the admin panel

### Icons not showing?

1. Verify icon class starts with `fa-` (e.g., `fa-code` not just `code`)
2. Check Font Awesome is loaded in your HTML
3. Visit fontawesome.com to find correct class names

## 🎉 Tips

1. **Use Tags Efficiently**: Press Enter after typing each tag (skills, technologies, achievements)
2. **Featured Items**: Use the featured checkbox to highlight your best work
3. **Keep It Updated**: Regular updates keep your portfolio fresh
4. **Backup Regularly**: Download data.json periodically
5. **Preview Changes**: Open index.html in another tab to see changes

## 🔮 Future Enhancements

You can extend the admin panel to add:
- Image uploads for projects
- Blog post management
- Testimonials section
- Contact form submissions
- Analytics dashboard

---

**Need Help?** Check the browser console (F12) for error messages or debug information.
