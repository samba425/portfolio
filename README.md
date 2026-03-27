# Portfolio — Alla Samba Siva Rao

Personal portfolio site: experience, projects, skills, and contact — static HTML/CSS/JS with a data-driven admin workflow.

[![Live site](https://img.shields.io/badge/GitHub%20Pages-Live-2ea44f?style=flat-square&logo=github)](https://samba425.github.io/portfolio)
[![GitHub](https://img.shields.io/badge/GitHub-samba425-181717?style=flat-square&logo=github)](https://github.com/samba425)

**Live:** [samba425.github.io/portfolio](https://samba425.github.io/portfolio)

---

## About

Full-stack & AI-focused portfolio highlighting enterprise work (MEAN stack, Python, RAG/AIOps), certifications-oriented positioning, and project impact. Content can be maintained via **`data.json`** or the **admin panel** (`admin.html`).

---

## Features

- Responsive layout (mobile, tablet, desktop)
- Sections: Home, About, Experience, Projects, Skills, Contact
- **Admin UI** to edit profile, skills, experience, projects, and awards (see docs below)
- **`data.json`** as the single source of truth for dynamic sections
- Animations, glass-style UI, Font Awesome icons
- Optional **dynamic renderer** (`dynamic-renderer.js`) for JSON-driven sections

---

## Tech stack

| Area        | Details |
|------------|---------|
| Markup & style | HTML5, CSS3 (Grid/Flexbox), Google Fonts (Poppins) |
| Scripts    | Vanilla JavaScript (ES6+) |
| Icons      | Font Awesome 6.x (CDN) |
| Data       | `data.json` (+ LocalStorage in admin flow) |

---

## Repository layout

| File / folder | Purpose |
|---------------|---------|
| `index.html` | Main portfolio page |
| `styles.css` | Global styles |
| `script.js` | UI behavior, animations, interactions |
| `dynamic-renderer.js` | Renders content from `data.json` where used |
| `data.json` | Profile, skills, experience, projects, awards |
| `admin.html` / `admin.js` | Content management UI |
| `QUICK_START.md` | Admin panel quick steps |
| `ADMIN_GUIDE.md` | Detailed admin usage |
| `DEPLOYMENT_GUIDE.md` / `GITHUB_DEPLOYMENT_STEPS.md` | Deploy & GitHub Pages |
| `deploy.sh`, `DEPLOY_TO_GITHUB.sh`, `push-to-github.sh` | Helper scripts for deploy/push |

---

## Local development

```bash
git clone https://github.com/samba425/portfolio.git
cd portfolio
python3 -m http.server 8000
```

Open **http://localhost:8000** — use `index.html` for the site and **`http://localhost:8000/admin.html`** for the admin panel.

> Use any static server you prefer (e.g. `npx serve`, VS Code Live Server).

---

## Editing content

1. **Admin (recommended for non-dev edits):** follow **[QUICK_START.md](./QUICK_START.md)** and **[ADMIN_GUIDE.md](./ADMIN_GUIDE.md)**.
2. **By hand:** edit **`data.json`**, then refresh the site. Keep JSON valid (commas, quotes).

---

## Deployment

GitHub Pages and related steps are documented in:

- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)**
- **[GITHUB_DEPLOYMENT_STEPS.md](./GITHUB_DEPLOYMENT_STEPS.md)**
- **[FIND_ALL_GITHUB_PAGES.md](./FIND_ALL_GITHUB_PAGES.md)**

---

## Contact

| | |
|--|--|
| **Email** | [asiva325@gmail.com](mailto:asiva325@gmail.com) |
| **GitHub** | [@samba425](https://github.com/samba425) |
| **LinkedIn** | [Profile](https://www.linkedin.com/in/samba-siva-rao-alla-67a05160/) |

---

## License

Personal portfolio — all rights reserved unless you add an explicit license file.

---

*Built with HTML, CSS, and JavaScript.*
