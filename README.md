# Madhusundharan P — Interactive Developer Portfolio

> A premium, dark-cinematic, interactive portfolio built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Three.js**.

[![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?logo=three.js)](https://threejs.org/)

---

## 🌟 Key Highlights & Design Direction

- **Dark Cinematic Aesthetic**: Near-black background (`#07080d`), electric violet (`#8B5CF6`), deep indigo, and cyan (`#06B6D4`) gradient lighting.
- **Interactive 3D Centerpiece**: High-performance Three.js wireframe icosahedron with inner glowing core, orbital rings, and dynamic particle starfield that reacts smoothly to cursor movement.
- **Live GitHub Integration**: Direct connection with GitHub REST API displaying public repositories (`URL-Shortener-with-Analytics`, `JAVA`, `leetcode-problems`, etc.) with resilient fallback caching.
- **Project Showcase & Deep-Dive Modals**: Domain-specific abstract SVG graphics, tech tags, verifiable GitHub repository links, and comprehensive architectural specs.
- **Filterable Technical Skills**: Clean skill matrix across Programming, Frontend, Backend, Cloud & Databases, AI/DS, and Developer Tools without artificial percentages.
- **Interactive Experience & Education Timeline**: Neural Arc Global internship timeline, Karpagam Academy B.Tech, and Sri Ramakrishna Mission Polytechnic background.
- **Direct Resume Access**: Direct local download (`/resume.pdf`) and Google Drive folder link.
- **Fully Responsive & Accessible**: Mobile-first layout, custom cursor on desktop (fine-pointer only), scroll progress indicator, and `prefers-reduced-motion` compliance.

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have **Node.js 18+** installed:

```bash
node -v
npm -v
```

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/madhusundhar/Portpolio.git
cd Portpolio
npm install
```

### Run the Development Server

Start Vite with hot module replacement:

```bash
npm run dev
```

Open your browser at `http://localhost:3000`.

### Production Build

Compile TypeScript and build the optimized production bundle:

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
Portpolio/
├── public/
│   ├── favicon.svg            # Custom SVG monogram favicon
│   └── resume.pdf             # Verified resume PDF (528 KB)
├── src/
│   ├── components/
│   │   ├── About.tsx          # Biography, philosophy & interactive terminal
│   │   ├── Certifications.tsx # NPTEL, ServiceNow, Infosys Springboard badges
│   │   ├── Contact.tsx        # Mail client dispatcher & confetti celebration
│   │   ├── CustomCursor.tsx   # Desktop-only smooth cursor ring
│   │   ├── Education.tsx      # Academic degrees & institutions
│   │   ├── Experience.tsx     # Neural Arc Global internship timeline
│   │   ├── Footer.tsx         # Brand monogram, quick links, copyright
│   │   ├── GitHubSection.tsx  # GitHub API repository grid & LeetCode link
│   │   ├── Hero.tsx           # Full-screen hero with typewriter role cycling
│   │   ├── Hero3DCanvas.tsx   # Three.js interactive 3D centerpiece
│   │   ├── Icons.tsx          # Clean SVG icons (GitHub, LinkedIn, etc.)
│   │   ├── Navbar.tsx         # Sticky blurred navbar with scroll progress
│   │   ├── ProjectModal.tsx   # Architectural specs & highlights modal
│   │   ├── Projects.tsx       # Featured project gallery & category filters
│   │   └── Skills.tsx         # Filterable tech skill matrix with search
│   ├── data/
│   │   └── portfolioData.ts   # Centralized verified profile & project data
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces & types
│   ├── App.tsx                # Main application layout with scroll-spy
│   ├── index.css              # Tailwind CSS v4 directives & glassmorphism
│   └── main.tsx               # Application entry point
├── index.html                 # SEO meta tags, fonts, Open Graph cards
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite configuration with Tailwind CSS plugin
```

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)

1. Push your latest code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete interactive developer portfolio"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.
3. Click **"Add New..."** -> **"Project"** and select `Portpolio`.
4. Framework Preset will be automatically detected as **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **"Deploy"**. Your portfolio will be live in under 60 seconds with SSL and global CDN!

### Custom Domain on Vercel

1. In your Vercel project dashboard, navigate to **Settings** -> **Domains**.
2. Enter your custom domain (e.g. `madhusundharan.dev` or `madhu.codes`).
3. Follow the DNS instructions to add a `CNAME` or `A` record with your domain registrar.

---

## 📬 Contact & Socials

- **Developer**: Madhusundharan P
- **Email**: [madhusundhar28@gmail.com](mailto:madhusundhar28@gmail.com)
- **LinkedIn**: [linkedin.com/in/madhusundharan-p-5082402a6/](https://www.linkedin.com/in/madhusundharan-p-5082402a6/)
- **GitHub**: [github.com/madhusundhar](https://github.com/madhusundhar)
- **LeetCode**: [leetcode.com/u/madhusundhar/](https://leetcode.com/u/madhusundhar/)

---
*Built with passion, performance, and attention to detail.*
