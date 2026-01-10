// Dynamic Portfolio Renderer
// This script loads data from localStorage (updated via admin panel) or data.json
// and dynamically renders the portfolio content

class PortfolioRenderer {
    constructor() {
        this.data = null;
        this.init();
    }

    async init() {
        await this.loadData();
        this.render();
    }

    async loadData() {
        // First try to load from localStorage (admin updates)
        const localData = localStorage.getItem('portfolioData');
        
        if (localData) {
            this.data = JSON.parse(localData);
            console.log('✅ Loaded portfolio data from localStorage');
        } else {
            // Fallback to data.json
            try {
                const response = await fetch('data.json');
                this.data = await response.json();
                console.log('✅ Loaded portfolio data from data.json');
            } catch (error) {
                console.error('❌ Error loading portfolio data:', error);
            }
        }
    }

    render() {
        if (!this.data) {
            console.error('No data to render');
            return;
        }

        this.renderProfile();
        this.renderSkills();
        this.renderExperience();
        this.renderProjects();
        this.renderAwards();
    }

    renderProfile() {
        const profile = this.data.profile;
        if (!profile) return;

        // Update hero section
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.innerHTML = `Hi, I'm <span class="gradient-text">${profile.name}</span>`;
        }

        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            heroSubtitle.textContent = profile.subtitle;
        }

        const heroDescription = document.querySelector('.hero-description');
        if (heroDescription) {
            heroDescription.textContent = profile.description;
        }

        // Update stats
        if (profile.stats) {
            const stats = document.querySelectorAll('.stat h3');
            if (stats.length >= 3) {
                stats[0].textContent = profile.stats.experience;
                stats[1].textContent = profile.stats.projects;
                stats[2].textContent = profile.stats.users;
            }
        }

        // Update contact info
        const emailLink = document.querySelector('a[href^="mailto:"]');
        if (emailLink && profile.email) {
            emailLink.href = `mailto:${profile.email}`;
            const emailText = emailLink.closest('.contact-card')?.querySelector('a');
            if (emailText) emailText.textContent = profile.email;
        }

        const phoneLink = document.querySelector('a[href^="tel:"]');
        if (phoneLink && profile.phone) {
            phoneLink.href = `tel:${profile.phone}`;
            const phoneText = phoneLink.closest('.contact-card')?.querySelector('a');
            if (phoneText) phoneText.textContent = profile.phone;
        }

        // Update social links
        const githubLink = document.querySelector('a[href*="github"]');
        if (githubLink && profile.github) {
            githubLink.href = profile.github;
        }

        const linkedinLink = document.querySelector('a[href*="linkedin"]');
        if (linkedinLink && profile.linkedin) {
            linkedinLink.href = profile.linkedin;
        }
    }

    renderSkills() {
        const skills = this.data.skills;
        if (!skills || skills.length === 0) return;

        const skillsGrid = document.querySelector('.skills-grid');
        if (!skillsGrid) return;

        skillsGrid.innerHTML = skills.map(skill => `
            <div class="skill-category ${skill.featured ? 'featured' : ''}">
                <div class="category-icon">
                    <i class="fas ${skill.icon}"></i>
                </div>
                <h3>${skill.category}</h3>
                <div class="skill-items">
                    ${skill.items.map(item => `
                        <span class="skill-tag">${item}</span>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    renderExperience() {
        const experience = this.data.experience;
        if (!experience || experience.length === 0) return;

        const timeline = document.querySelector('.timeline');
        if (!timeline) return;

        timeline.innerHTML = experience.map(exp => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h3>${exp.title}</h3>
                        <div>
                            <span class="company">${exp.company}</span>
                            <span class="duration">${exp.duration}</span>
                        </div>
                    </div>
                    <p class="timeline-description">${exp.description}</p>
                    <ul class="achievements">
                        ${exp.achievements.map(achievement => `
                            <li>${achievement}</li>
                        `).join('')}
                    </ul>
                    <div class="tech-tags">
                        ${exp.technologies.map(tech => `
                            <span>${tech}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderProjects() {
        const projects = this.data.projects;
        if (!projects || projects.length === 0) return;

        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = projects.map(project => `
            <div class="project-card ${project.featured ? 'featured' : ''}">
                ${project.featured ? '<span class="featured-badge">Featured</span>' : ''}
                <div class="project-icon">
                    <i class="fas ${project.icon}"></i>
                </div>
                <h3>${project.title}</h3>
                <p class="project-company">${project.company}</p>
                <p class="project-description">${project.description}</p>
                <div class="project-impact">
                    ${project.impact.map(item => `
                        <div class="impact-item">
                            <i class="fas fa-check-circle"></i>
                            <span>${item}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `
                        <span>${tech}</span>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    renderAwards() {
        const awards = this.data.awards;
        if (!awards || awards.length === 0) return;

        const awardsGrid = document.querySelector('.awards-grid');
        if (!awardsGrid) return;

        awardsGrid.innerHTML = awards.map(award => `
            <div class="award-card">
                <i class="fas ${award.icon}"></i>
                <h4>${award.title}</h4>
                <p>${award.organization}</p>
                <span>${award.year}</span>
            </div>
        `).join('');
    }

    // Method to refresh data (can be called to update after admin changes)
    async refresh() {
        await this.loadData();
        this.render();
        console.log('✅ Portfolio refreshed with latest data');
    }
}

// Initialize when DOM is loaded
let portfolioRenderer;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        portfolioRenderer = new PortfolioRenderer();
    });
} else {
    portfolioRenderer = new PortfolioRenderer();
}

// Make refresh function available globally
window.refreshPortfolio = () => {
    if (portfolioRenderer) {
        portfolioRenderer.refresh();
    }
};

// Listen for storage changes (when admin panel updates data)
window.addEventListener('storage', (e) => {
    if (e.key === 'portfolioData' && portfolioRenderer) {
        console.log('📊 Data updated in admin panel, refreshing...');
        portfolioRenderer.refresh();
    }
});
