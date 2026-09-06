# Karthiyayini T G - Portfolio Project

## Project Overview
A modern, animated portfolio website built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, GSAP, Framer Motion, and Three.js. Features a dark theme with purple/blue gradient accents, smooth animations, and responsive design.

---

## Project Structure

```
my-portfolio/
├── src/
│   └── app/
│       ├── components/
│       │   ├── HomePage/
│       │   │   ├── HomePage.tsx          # Main homepage component
│       │   │   ├── HomePage.css          # Homepage styles (3698+ lines)
│       │   │   └── PortfolioThreeScene.tsx # Three.js 3D background
│       │   ├── Resusable_components/
│       │   │   ├── Navbar.tsx            # Navigation bar
│       │   │   ├── Navbar.css            # Navbar & Footer styles
│       │   │   └── Footer.tsx            # Footer component
│       │   ├── PortfolioCursor/
│       │   │   ├── PortfolioCursor.tsx   # Custom cursor component
│       │   │   └── PortfolioCursor.css   # Cursor styles
│       │   └── Main.tsx                  # Alternative main wrapper
│       ├── globals.css                   # Global Tailwind styles
│       ├── page.css                      # Page-level styles
│       ├── page.tsx                      # Main page entry
│       └── layout.tsx                    # Root layout with metadata
├── public/
│   └── Images/                           # All image assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── AGENTS.md                             # This file
```

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.3.4 | Framework |
| React | 19.2.4 | UI Library |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 4.x | Utility Styles |
| GSAP | 3.15.0 | Scroll Animations |
| Framer Motion | 13.1.0 | UI Animations |
| Three.js | 0.185.1 | 3D Graphics |
| React Icons | 5.7.0 | Icons |
| Bootstrap | 4.4.1 | Grid System |

---

## Git History & Workflow

### Commit Timeline

| Commit | Description | Status |
|--------|-------------|--------|
| `6a9434e` | Initial commit from Create Next App | ✅ Complete |
| `bd9eb3e` | Karthiyayini Portfolio 1st commit | ✅ Complete |
| `071a87b` | Layout code fix | ✅ Complete |
| `dfabf5b` | Overall Home pages completed with some functionalities | ✅ Complete |
| `cbb0418` | Images path changed | ✅ Complete |
| `3788d77` | Favicon and title changed | ✅ Complete |
| `1e8945e` | Overall Responsive and animations added | ✅ Complete |
| `cb4be1b` | Professional skill set animation and full stack developer title animation | ✅ Complete |
| `9d39b58` | Package updated | ✅ Current |

---

## Completed Tasks & Features

### 1. Project Setup & Configuration
- [x] Next.js 16 project initialization
- [x] TypeScript configuration
- [x] Tailwind CSS 4 setup
- [x] Google Fonts integration (Poppins, Lato, Lora)
- [x] Bootstrap 4.4.1 CSS CDN integration
- [x] Custom favicon and metadata

### 2. Layout & Structure
- [x] Root layout with font variables
- [x] SEO metadata (title, description, favicon)
- [x] Responsive container system
- [x] Dark theme (#0a0a0c background)

### 3. Navigation Bar (`Navbar.tsx`)
- [x] Fixed absolute positioning
- [x] Brand logo + name
- [x] Desktop navigation links (Home, About, Projects, Resume, GitHub)
- [x] Animated hover effects with gradient underline
- [x] Mobile hamburger menu with slide animation
- [x] Framer Motion entrance animations
- [x] Smooth scroll to sections
- [x] Hidden spacer for center alignment

### 4. Hero Section (`HomePage.tsx`)
- [x] Full viewport height hero
- [x] Background image with gradient overlay
- [x] "Hi, I'm Karthiyayini" heading
- [x] Animated "Full Stack Developer" title (Framer Motion character-by-character animation)
- [x] Professional description paragraph
- [x] Download Resume button with gradient
- [x] Social media icons (LinkedIn, WhatsApp, Mail, GitHub)
- [x] GSAP parallax scrolling effect
- [x] Hero entrance reveal animations

### 5. Three.js 3D Background (`PortfolioThreeScene.tsx`)
- [x] Particle field system (150-700 particles based on viewport)
- [x] Blue (#194BFD) to Purple (#AD13FB) gradient particles
- [x] Icosahedron wireframe object
- [x] Octahedron secondary object
- [x] Mouse parallax tracking
- [x] Scroll-based movement
- [x] Responsive particle count
- [x] Memory management and cleanup
- [x] Reduced motion support

### 6. About Section
- [x] "1.9+ Years Working Experience" display
- [x] Gradient divider line
- [x] Professional description paragraph
- [x] GSAP scroll reveal animation

### 7. Experience Section
- [x] Two-column grid layout
- [x] Professional Experience timeline:
  - MERN Stack Developer @ Adinn Digital (Jan 2025 - Present)
  - Quality Control Specialist @ Eminence Business Solution (June 2024 - August 2024)
  - Web Development Internship @ Cognifyz Technologies (April 2024 - May 2024)
- [x] Academic Journey timeline:
  - B.Tech (IT) @ K.L.N College of Engineering (2024)
  - HSC @ E.V.R.N Girls Higher Secondary School (2020)
  - SSLC @ E.V.R.N Girls Higher Secondary School (2018)
- [x] Purple gradient timeline icons
- [x] Gradient connecting lines
- [x] GSAP staggered reveal animations

### 8. Professional Skillset Section
- [x] V-arc carousel layout (5 visible slots)
- [x] 14 skills: React, Express, JavaScript, MongoDB, Node, Postman, Git, GitHub, Digital Ocean, Vercel, HTML, Tailwind CSS, Bootstrap, CSS
- [x] Auto-rotation (3 second interval)
- [x] Pause on hover
- [x] Click to select skill
- [x] Dot indicators for navigation
- [x] Responsive slot positions (5 breakpoints)
- [x] Active skill glow effect
- [x] Landing shadow animation
- [x] GSAP scroll reveal

### 9. Projects Section
- [x] Project cards grid
- [x] Adinn Outdoors (Hoarding Booking Platform)
- [x] Adinn Roadshows (Vehicle Booking & Management)
- [x] Adinn Roadshows New (Outdoor Admin Panel)
- [x] Hover overlay with eye icon (live site) and GitHub icon
- [x] GSAP staggered card reveal

### 10. Custom Cursor (`PortfolioCursor.tsx`)
- [x] Three-layer cursor system:
  - Main dot (fast tracking, 0.08s)
  - Outer ring (trailing effect, 0.32s)
  - Soft glow (ambient light, 0.6s)
- [x] Interactive element detection (links, buttons, cards)
- [x] Hover state expansion
- [x] Click press animation
- [x] Fine pointer detection (desktop only)
- [x] Touch device fallback
- [x] Reduced motion support

### 11. Footer Component (`Footer.tsx`)
- [x] Full-width dark footer
- [x] Left section: Name, email, phone
- [x] Right section: Social icons, copyright
- [x] Framer Motion entrance animation
- [x] Responsive layout (stacks on mobile)

### 12. Responsive Design
- [x] Mobile (< 480px)
- [x] Large Mobile (< 768px)
- [x] Tablet (< 1200px)
- [x] Desktop (< 1920px)
- [x] Large Desktop (> 1920px)
- [x] Fluid typography with clamp()
- [x] Responsive skill carousel positions

### 13. Accessibility
- [x] Reduced motion media query support
- [x] ARIA labels on interactive elements
- [x] Semantic HTML (header, nav, section, footer)
- [x] Keyboard navigation support
- [x] Touch device cursor fallback

---

## Design System

### Colors
- Background: `#0a0a0c`
- Primary Blue: `#194BFD`
- Primary Purple: `#AD13FB`
- Text White: `rgba(230, 230, 230, 1)`
- Text Muted: `rgba(145, 145, 148, 1)`

### Gradients
- Button/Active: `linear-gradient(93.66deg, #194bfd -15.33%, #ad13fb 139.21%)`
- Timeline Line: `linear-gradient(to bottom, #AD13FB, #194BFD)`

### Typography
- Headings: Poppins
- Body: Lato
- Accent: Lora

---

## Module Documentation Files

- `docs/HOME_PAGE.md` - HomePage component documentation
- `docs/NAVBAR.md` - Navigation bar documentation
- `docs/FOOTER.md` - Footer component documentation
- `docs/THREE_SCENE.md` - Three.js 3D background documentation
- `docs/CURSOR.md` - Custom cursor documentation
- `docs/ANIMATIONS.md` - Animation system documentation
