# Developer Portfolio Dashboard

A modern, responsive, dark developer portfolio dashboard built with semantic HTML5, modular CSS3, and vanilla JavaScript.

Developed by **Ishwari Walewadikar** – Undergraduate B.Tech Student in Instrumentation Engineering and Aspiring GenAI Developer.

---

## 📌 Project Overview

The **Developer Portfolio Dashboard** is designed to showcase engineering projects, foundational technical skills, and practical explorations in Artificial Intelligence and web development.

Built without external heavy UI frameworks or runtime dependencies, the project embraces a lightweight, clean developer aesthetic featuring a dark charcoal background, violet and purple accents, smooth section scrolling, and accessible responsive navigation.

---

## ✨ Features

- **Developer Dashboard Layout**: Fixed sticky sidebar navigation with an active scroll section tracker.
- **Modern Dark Developer Theme**: Tailored color palette using charcoal surfaces (`#090b10`, `#141826`), violet/purple neon accents (`#8b5cf6`, `#a855f7`), and subtle hover elevations.
- **Fully Responsive Architecture**: Adapts seamlessly across desktop (1440px), laptop (1024px), tablet (768px), and mobile (375px) devices.
- **Mobile Drawer Navigation**: Slide-out off-canvas drawer with backdrop dismissal, hamburger menu toggle, and Escape key keyboard accessibility.
- **Curated Sections**:
  - **Hero**: Clean introduction, developer headline, and immediate call-to-action buttons.
  - **About Me**: Genuine engineering background (B.Tech Instrumentation Engineering) and learning mindset.
  - **Skills Grid**: 7 dedicated cards representing foundational technologies (Python, HTML, CSS, JavaScript, Git, GitHub, Generative AI).
  - **Projects Showcase**: Clear project cards featuring real status badges (*Completed* vs *In Progress*), technology tags, and direct GitHub repository links.
  - **Contact**: Verified GitHub profile link and direct collaboration details without fabricated contact information.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic elements (`<aside>`, `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) for accessible structure.
- **CSS3**: CSS Custom Properties (variables), Flexbox, CSS Grid, media queries, and transition animations.
- **Vanilla JavaScript**: Lightweight DOM manipulation for mobile drawer toggling and scroll-based navigation link highlighting.
- **Git & GitHub**: Distributed version control and repository management.

---

## 📁 Folder Structure

```text
developer-portfolio/
│
├── index.html          # Semantic HTML document structure
├── css/
│   └── style.css       # Dark developer theme styling and responsive rules
├── js/
│   └── script.js       # Navigation drawer logic and scroll event handling
├── assets/
│   └── images/         # Project images and media assets
├── README.md           # Project documentation and setup guide
└── .gitignore          # Ignored system and temporary files
```

---

## 💻 Instructions to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ishwarisw/developer-portfolio.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd developer-portfolio
   ```

3. **Open the application**:
   - Double-click `index.html` to open it in your default web browser, or
   - Use VS Code Live Server extension, or
   - Run a lightweight local Python server:
     ```bash
     python -m http.server 8000
     ```
     Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🚀 Future Improvements

- [ ] Add interactive project demo modals or interactive tabs.
- [ ] Connect a live contact form using a serverless backend service.
- [ ] Add a light/dark theme toggle for accessibility preference.
- [ ] Expand the project showcase as *MemoryMesh* and *SafeWalk* reach their prototype milestones.
