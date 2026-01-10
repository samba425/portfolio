// Portfolio Admin Panel JavaScript
let portfolioData = {};
let currentTags = {
    skills: [],
    experience: { achievements: [], technologies: [] },
    projects: { impact: [], technologies: [] }
};

// Load data from data.json (always fresh load)
function loadData() {
    // Always load fresh data from data.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            portfolioData = data;
            // Save to localStorage for persistence
            localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
            renderAllLists();
        })
        .catch(error => {
            console.error('Error loading data:', error);
            // Fallback to localStorage if fetch fails
            const savedData = localStorage.getItem('portfolioData');
            if (savedData) {
                portfolioData = JSON.parse(savedData);
                renderAllLists();
            }
        });
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
    // Also save to a downloadable JSON file
    const dataStr = JSON.stringify(portfolioData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    // Create download link
    const url = URL.createObjectURL(dataBlob);
    console.log('Data saved. You can download it using the browser console.');
}

// Show success message
function showSuccess(message) {
    const successDiv = document.getElementById('success-message');
    const successText = document.getElementById('success-text');
    successText.textContent = message;
    successDiv.classList.add('show');
    setTimeout(() => {
        successDiv.classList.remove('show');
    }, 3000);
}

// Section Navigation
function showSection(section) {
    // Update active button
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.closest('.nav-btn').classList.add('active');
    
    // Show corresponding section
    document.querySelectorAll('.form-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(`${section}-section`).classList.add('active');
    
    // Load profile data if profile section
    if (section === 'profile') {
        loadProfileData();
    }
}

// Tag Input Functionality
function setupTagInput(containerSelector, inputSelector, tagArray) {
    const container = document.querySelector(containerSelector);
    const input = document.querySelector(inputSelector);
    
    if (!container || !input) return;
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const value = input.value.trim();
            if (value && !tagArray.includes(value)) {
                tagArray.push(value);
                renderTags(container, input, tagArray);
                input.value = '';
            }
        }
    });
    
    renderTags(container, input, tagArray);
}

function renderTags(container, input, tagArray) {
    // Clear container except input
    const tags = container.querySelectorAll('.tag');
    tags.forEach(tag => tag.remove());
    
    // Add tags
    tagArray.forEach((tagText, index) => {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `
            ${tagText}
            <button type="button" onclick="removeTag(${index}, '${container.id}')">
                <i class="fas fa-times"></i>
            </button>
        `;
        container.insertBefore(tag, input);
    });
}

function removeTag(index, containerId) {
    const container = document.getElementById(containerId);
    const input = container.querySelector('.tag-input');
    
    if (containerId.includes('skill-items')) {
        currentTags.skills.splice(index, 1);
        renderTags(container, input, currentTags.skills);
    } else if (containerId.includes('exp-achievements')) {
        currentTags.experience.achievements.splice(index, 1);
        renderTags(container, input, currentTags.experience.achievements);
    } else if (containerId.includes('exp-tech')) {
        currentTags.experience.technologies.splice(index, 1);
        renderTags(container, input, currentTags.experience.technologies);
    } else if (containerId.includes('project-impact')) {
        currentTags.projects.impact.splice(index, 1);
        renderTags(container, input, currentTags.projects.impact);
    } else if (containerId.includes('project-tech')) {
        currentTags.projects.technologies.splice(index, 1);
        renderTags(container, input, currentTags.projects.technologies);
    }
}

// Initialize tag inputs
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    
    // Skills tags
    setupTagInput('#skill-items-container', '#skill-items-input', currentTags.skills);
    
    // Experience tags
    setupTagInput('#exp-achievements-container', '#exp-achievements-input', currentTags.experience.achievements);
    setupTagInput('#exp-tech-container', '#exp-tech-input', currentTags.experience.technologies);
    
    // Projects tags
    setupTagInput('#project-impact-container', '#project-impact-input', currentTags.projects.impact);
    setupTagInput('#project-tech-container', '#project-tech-input', currentTags.projects.technologies);
});

// SKILLS MANAGEMENT
document.getElementById('skills-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('skill-id').value;
    const skillData = {
        id: id ? parseInt(id) : Date.now(),
        category: document.getElementById('skill-category').value,
        icon: document.getElementById('skill-icon').value,
        featured: document.getElementById('skill-featured').checked,
        items: [...currentTags.skills]
    };
    
    if (!portfolioData.skills) portfolioData.skills = [];
    
    if (id) {
        const index = portfolioData.skills.findIndex(s => s.id === parseInt(id));
        portfolioData.skills[index] = skillData;
        showSuccess('Skill category updated successfully!');
    } else {
        portfolioData.skills.push(skillData);
        showSuccess('Skill category added successfully!');
    }
    
    saveData();
    renderSkillsList();
    resetForm('skills');
});

function renderSkillsList() {
    const container = document.getElementById('skills-list');
    if (!portfolioData.skills || portfolioData.skills.length === 0) {
        container.innerHTML = '<p style="color: #64748b; text-align: center; padding: 2rem;">No skills added yet.</p>';
        return;
    }
    
    container.innerHTML = portfolioData.skills.map(skill => `
        <div class="list-item">
            <div class="list-item-content">
                <h3><i class="fas ${skill.icon}"></i> ${skill.category} ${skill.featured ? '⭐' : ''}</h3>
                <p>${skill.items.join(', ')}</p>
            </div>
            <div class="list-item-actions">
                <button class="btn-icon btn-edit" onclick="editSkill(${skill.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon btn-delete" onclick="deleteSkill(${skill.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function editSkill(id) {
    const skill = portfolioData.skills.find(s => s.id === id);
    if (!skill) return;
    
    document.getElementById('skill-id').value = skill.id;
    document.getElementById('skill-category').value = skill.category;
    document.getElementById('skill-icon').value = skill.icon;
    document.getElementById('skill-featured').checked = skill.featured;
    
    currentTags.skills = [...skill.items];
    const container = document.getElementById('skill-items-container');
    const input = document.getElementById('skill-items-input');
    renderTags(container, input, currentTags.skills);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteSkill(id) {
    if (confirm('Are you sure you want to delete this skill category?')) {
        portfolioData.skills = portfolioData.skills.filter(s => s.id !== id);
        saveData();
        renderSkillsList();
        showSuccess('Skill category deleted successfully!');
    }
}

// EXPERIENCE MANAGEMENT
document.getElementById('experience-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('exp-id').value;
    const expData = {
        id: id ? parseInt(id) : Date.now(),
        title: document.getElementById('exp-title').value,
        company: document.getElementById('exp-company').value,
        duration: document.getElementById('exp-duration').value,
        description: document.getElementById('exp-description').value,
        achievements: [...currentTags.experience.achievements],
        technologies: [...currentTags.experience.technologies]
    };
    
    if (!portfolioData.experience) portfolioData.experience = [];
    
    if (id) {
        const index = portfolioData.experience.findIndex(e => e.id === parseInt(id));
        portfolioData.experience[index] = expData;
        showSuccess('Experience updated successfully!');
    } else {
        portfolioData.experience.push(expData);
        showSuccess('Experience added successfully!');
    }
    
    saveData();
    renderExperienceList();
    resetForm('experience');
});

function renderExperienceList() {
    const container = document.getElementById('experience-list');
    if (!portfolioData.experience || portfolioData.experience.length === 0) {
        container.innerHTML = '<p style="color: #64748b; text-align: center; padding: 2rem;">No experience added yet.</p>';
        return;
    }
    
    container.innerHTML = portfolioData.experience.map(exp => `
        <div class="list-item">
            <div class="list-item-content">
                <h3>${exp.title} @ ${exp.company}</h3>
                <p>${exp.duration}</p>
            </div>
            <div class="list-item-actions">
                <button class="btn-icon btn-edit" onclick="editExperience(${exp.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon btn-delete" onclick="deleteExperience(${exp.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function editExperience(id) {
    const exp = portfolioData.experience.find(e => e.id === id);
    if (!exp) return;
    
    document.getElementById('exp-id').value = exp.id;
    document.getElementById('exp-title').value = exp.title;
    document.getElementById('exp-company').value = exp.company;
    document.getElementById('exp-duration').value = exp.duration;
    document.getElementById('exp-description').value = exp.description;
    
    currentTags.experience.achievements = [...exp.achievements];
    currentTags.experience.technologies = [...exp.technologies];
    
    const achievementsContainer = document.getElementById('exp-achievements-container');
    const achievementsInput = document.getElementById('exp-achievements-input');
    renderTags(achievementsContainer, achievementsInput, currentTags.experience.achievements);
    
    const techContainer = document.getElementById('exp-tech-container');
    const techInput = document.getElementById('exp-tech-input');
    renderTags(techContainer, techInput, currentTags.experience.technologies);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteExperience(id) {
    if (confirm('Are you sure you want to delete this experience?')) {
        portfolioData.experience = portfolioData.experience.filter(e => e.id !== id);
        saveData();
        renderExperienceList();
        showSuccess('Experience deleted successfully!');
    }
}

// PROJECTS MANAGEMENT
document.getElementById('projects-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('project-id').value;
    const projectData = {
        id: id ? parseInt(id) : Date.now(),
        title: document.getElementById('project-title').value,
        company: document.getElementById('project-company').value,
        icon: document.getElementById('project-icon').value,
        featured: document.getElementById('project-featured').checked,
        description: document.getElementById('project-description').value,
        impact: [...currentTags.projects.impact],
        technologies: [...currentTags.projects.technologies]
    };
    
    if (!portfolioData.projects) portfolioData.projects = [];
    
    if (id) {
        const index = portfolioData.projects.findIndex(p => p.id === parseInt(id));
        portfolioData.projects[index] = projectData;
        showSuccess('Project updated successfully!');
    } else {
        portfolioData.projects.push(projectData);
        showSuccess('Project added successfully!');
    }
    
    saveData();
    renderProjectsList();
    resetForm('projects');
});

function renderProjectsList() {
    const container = document.getElementById('projects-list');
    if (!portfolioData.projects || portfolioData.projects.length === 0) {
        container.innerHTML = '<p style="color: #64748b; text-align: center; padding: 2rem;">No projects added yet.</p>';
        return;
    }
    
    container.innerHTML = portfolioData.projects.map(project => `
        <div class="list-item">
            <div class="list-item-content">
                <h3><i class="fas ${project.icon}"></i> ${project.title} ${project.featured ? '⭐' : ''}</h3>
                <p>${project.company}</p>
            </div>
            <div class="list-item-actions">
                <button class="btn-icon btn-edit" onclick="editProject(${project.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon btn-delete" onclick="deleteProject(${project.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function editProject(id) {
    const project = portfolioData.projects.find(p => p.id === id);
    if (!project) return;
    
    document.getElementById('project-id').value = project.id;
    document.getElementById('project-title').value = project.title;
    document.getElementById('project-company').value = project.company;
    document.getElementById('project-icon').value = project.icon;
    document.getElementById('project-featured').checked = project.featured;
    document.getElementById('project-description').value = project.description;
    
    currentTags.projects.impact = [...project.impact];
    currentTags.projects.technologies = [...project.technologies];
    
    const impactContainer = document.getElementById('project-impact-container');
    const impactInput = document.getElementById('project-impact-input');
    renderTags(impactContainer, impactInput, currentTags.projects.impact);
    
    const techContainer = document.getElementById('project-tech-container');
    const techInput = document.getElementById('project-tech-input');
    renderTags(techContainer, techInput, currentTags.projects.technologies);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteProject(id) {
    if (confirm('Are you sure you want to delete this project?')) {
        portfolioData.projects = portfolioData.projects.filter(p => p.id !== id);
        saveData();
        renderProjectsList();
        showSuccess('Project deleted successfully!');
    }
}

// AWARDS MANAGEMENT
document.getElementById('awards-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('award-id').value;
    const awardData = {
        id: id ? parseInt(id) : Date.now(),
        title: document.getElementById('award-title').value,
        organization: document.getElementById('award-organization').value,
        year: document.getElementById('award-year').value,
        icon: document.getElementById('award-icon').value
    };
    
    if (!portfolioData.awards) portfolioData.awards = [];
    
    if (id) {
        const index = portfolioData.awards.findIndex(a => a.id === parseInt(id));
        portfolioData.awards[index] = awardData;
        showSuccess('Award updated successfully!');
    } else {
        portfolioData.awards.push(awardData);
        showSuccess('Award added successfully!');
    }
    
    saveData();
    renderAwardsList();
    resetForm('awards');
});

function renderAwardsList() {
    const container = document.getElementById('awards-list');
    if (!portfolioData.awards || portfolioData.awards.length === 0) {
        container.innerHTML = '<p style="color: #64748b; text-align: center; padding: 2rem;">No awards added yet.</p>';
        return;
    }
    
    container.innerHTML = portfolioData.awards.map(award => `
        <div class="list-item">
            <div class="list-item-content">
                <h3><i class="fas ${award.icon}"></i> ${award.title}</h3>
                <p>${award.organization} - ${award.year}</p>
            </div>
            <div class="list-item-actions">
                <button class="btn-icon btn-edit" onclick="editAward(${award.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon btn-delete" onclick="deleteAward(${award.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function editAward(id) {
    const award = portfolioData.awards.find(a => a.id === id);
    if (!award) return;
    
    document.getElementById('award-id').value = award.id;
    document.getElementById('award-title').value = award.title;
    document.getElementById('award-organization').value = award.organization;
    document.getElementById('award-year').value = award.year;
    document.getElementById('award-icon').value = award.icon;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteAward(id) {
    if (confirm('Are you sure you want to delete this award?')) {
        portfolioData.awards = portfolioData.awards.filter(a => a.id !== id);
        saveData();
        renderAwardsList();
        showSuccess('Award deleted successfully!');
    }
}

// PROFILE MANAGEMENT
function loadProfileData() {
    if (!portfolioData.profile) return;
    
    const profile = portfolioData.profile;
    document.getElementById('profile-name').value = profile.name || '';
    document.getElementById('profile-title').value = profile.title || '';
    document.getElementById('profile-subtitle').value = profile.subtitle || '';
    document.getElementById('profile-description').value = profile.description || '';
    document.getElementById('profile-email').value = profile.email || '';
    document.getElementById('profile-phone').value = profile.phone || '';
    document.getElementById('profile-location').value = profile.location || '';
    document.getElementById('profile-github').value = profile.github || '';
    document.getElementById('profile-linkedin').value = profile.linkedin || '';
    
    if (profile.stats) {
        document.getElementById('profile-experience').value = profile.stats.experience || '';
        document.getElementById('profile-projects').value = profile.stats.projects || '';
        document.getElementById('profile-users').value = profile.stats.users || '';
    }
}

document.getElementById('profile-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    portfolioData.profile = {
        name: document.getElementById('profile-name').value,
        title: document.getElementById('profile-title').value,
        subtitle: document.getElementById('profile-subtitle').value,
        description: document.getElementById('profile-description').value,
        email: document.getElementById('profile-email').value,
        phone: document.getElementById('profile-phone').value,
        location: document.getElementById('profile-location').value,
        github: document.getElementById('profile-github').value,
        linkedin: document.getElementById('profile-linkedin').value,
        stats: {
            experience: document.getElementById('profile-experience').value,
            projects: document.getElementById('profile-projects').value,
            users: document.getElementById('profile-users').value
        }
    };
    
    saveData();
    showSuccess('Profile updated successfully!');
});

// Reset Form
function resetForm(type) {
    currentTags[type] = type === 'skills' ? [] : { achievements: [], technologies: [], impact: [] };
    
    if (type === 'skills') {
        document.getElementById('skills-form').reset();
        document.getElementById('skill-id').value = '';
        currentTags.skills = [];
        const container = document.getElementById('skill-items-container');
        const input = document.getElementById('skill-items-input');
        renderTags(container, input, currentTags.skills);
    } else if (type === 'experience') {
        document.getElementById('experience-form').reset();
        document.getElementById('exp-id').value = '';
        currentTags.experience = { achievements: [], technologies: [] };
        
        const achievementsContainer = document.getElementById('exp-achievements-container');
        const achievementsInput = document.getElementById('exp-achievements-input');
        renderTags(achievementsContainer, achievementsInput, currentTags.experience.achievements);
        
        const techContainer = document.getElementById('exp-tech-container');
        const techInput = document.getElementById('exp-tech-input');
        renderTags(techContainer, techInput, currentTags.experience.technologies);
    } else if (type === 'projects') {
        document.getElementById('projects-form').reset();
        document.getElementById('project-id').value = '';
        currentTags.projects = { impact: [], technologies: [] };
        
        const impactContainer = document.getElementById('project-impact-container');
        const impactInput = document.getElementById('project-impact-input');
        renderTags(impactContainer, impactInput, currentTags.projects.impact);
        
        const techContainer = document.getElementById('project-tech-container');
        const techInput = document.getElementById('project-tech-input');
        renderTags(techContainer, techInput, currentTags.projects.technologies);
    } else if (type === 'awards') {
        document.getElementById('awards-form').reset();
        document.getElementById('award-id').value = '';
    }
}

// Render all lists
function renderAllLists() {
    renderSkillsList();
    renderExperienceList();
    renderProjectsList();
    renderAwardsList();
}

// Download data function (can be called from console)
function downloadData() {
    const dataStr = JSON.stringify(portfolioData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-data.json';
    link.click();
    showSuccess('Data downloaded successfully!');
}

// Make downloadData available globally
window.downloadData = downloadData;
