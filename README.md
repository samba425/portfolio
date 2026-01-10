# Professional Portfolio Website

A modern, responsive portfolio website showcasing my professional experience, projects, and skills.

## 🌟 Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Scroll animations, hover effects, and smooth transitions
- **Performance Optimized**: Fast loading times and efficient code
- **SEO Friendly**: Proper meta tags and semantic HTML
- **GitHub Pages Ready**: Easy to deploy and host for free

## 🚀 Live Demo

Visit the live website: [Your GitHub Pages URL will be here]

## 📁 Project Structure

```
website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Vanilla JS for interactivity
- **Font Awesome**: Icons
- **Google Fonts**: Poppins font family

## 📋 Sections

1. **Hero Section**: Introduction with key stats
2. **About**: Professional summary and highlights
3. **Experience**: Career timeline with achievements
4. **Projects**: Featured projects and impacts
5. **Skills**: Technical competencies organized by category
6. **Contact**: Multiple ways to get in touch

## 🚀 Deployment to GitHub Pages

### Option 1: Deploy from this folder

1. **Create a new repository on GitHub**
   - Go to GitHub and create a new repository named `[your-username].github.io`
   - Or any repository name if you want it at `[your-username].github.io/repo-name`

2. **Initialize git in the website folder**
   ```bash
   cd /Users/sambasiva/Documents/personal/resume/resume_siva/website
   git init
   git add .
   git commit -m "Initial commit: Professional portfolio website"
   ```

3. **Connect to GitHub repository**
   ```bash
   git remote add origin https://github.com/[your-username]/[repo-name].git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be published at `https://[your-username].github.io/[repo-name]`

### Option 2: Quick Deploy (Recommended)

Use the provided deployment script:

```bash
cd /Users/sambasiva/Documents/personal/resume/resume_siva/website
chmod +x deploy.sh
./deploy.sh
```

## 🎨 Customization

### Update Personal Information

Edit `index.html` and update:
- Name and title
- Contact information (email, phone, GitHub, LinkedIn)
- Professional summary
- Work experience details
- Project descriptions
- Skills and technologies

### Customize Colors

Edit `styles.css` and modify the CSS variables in `:root`:

```css
:root {
    --primary-color: #2563eb;      /* Change primary color */
    --secondary-color: #10b981;     /* Change secondary color */
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Add Your Photo (Optional)

Replace the icon in the profile card:

```html
<!-- Replace this in index.html -->
<div class="profile-icon">
    <i class="fas fa-user-tie"></i>
</div>

<!-- With this -->
<div class="profile-icon">
    <img src="your-photo.jpg" alt="Your Name">
</div>
```

Then add this CSS:

```css
.profile-icon img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
```

## 📱 Mobile Responsive

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## ⚡ Performance

- Lightweight (no heavy frameworks)
- Lazy loading for images
- Optimized animations
- Minimal external dependencies

## 🔧 Local Development

1. Simply open `index.html` in your browser
2. Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```
3. Visit `http://localhost:8000`

## 📝 Adding New Content

### Add a New Project

1. Open `index.html`
2. Find the `<div class="projects-grid">` section
3. Copy an existing project card and modify:

```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Your Project Name</h3>
    <p class="project-company">Company Name</p>
    <p class="project-description">
        Project description here
    </p>
    <div class="tech-tags">
        <span>Tech1</span>
        <span>Tech2</span>
    </div>
</div>
```

### Add a New Skill Category

1. Open `index.html`
2. Find the `<div class="skills-grid">` section
3. Add a new skill category:

```html
<div class="skill-category">
    <div class="category-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Category Name</h3>
    <div class="skill-items">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

## 🎯 SEO Optimization

The website includes:
- Semantic HTML5 elements
- Meta descriptions
- Open Graph tags (add these for social sharing)
- Proper heading hierarchy
- Alt text for images

### Add Social Media Preview

Add these meta tags in the `<head>` section of `index.html`:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://your-site.com/">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Software Engineer | Full-Stack Developer">
<meta property="og:image" content="https://your-site.com/preview-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://your-site.com/">
<meta property="twitter:title" content="Your Name - Portfolio">
<meta property="twitter:description" content="Software Engineer | Full-Stack Developer">
<meta property="twitter:image" content="https://your-site.com/preview-image.jpg">
```

## 🔗 External Links

Make sure to update all social media links in:
- Hero section social icons
- Contact section
- Footer

## 📄 License

This project is free to use for personal portfolio purposes.

## 🤝 Support

For questions or issues, please contact:
- Email: asiva325@gmail.com
- GitHub: [@samba425](https://github.com/samba425)

## 🙏 Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts](https://fonts.google.com/)
- Design: Custom design by Alla Samba Siva Rao

---

**Built with ❤️ by Alla Samba Siva Rao**

Last Updated: January 2026
