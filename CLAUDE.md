# CLAUDE.md - Detailed Workflow Documentation

## Project: Karthiyayini T G Portfolio Website

### Development Timeline & Workflow

#### Phase 1: Project Initialization (Initial Setup)
**Status:** ✅ Complete

1. Created Next.js 16 project with Create Next App
2. Configured TypeScript with strict mode
3. Set up Tailwind CSS 4 with PostCSS
4. Added package dependencies:
   - `framer-motion` ^13.1.0
   - `gsap` ^3.15.0
   - `react-icons` ^5.7.0
   - `three` ^0.185.1
   - `@types/three` ^0.185.4

#### Phase 2: Core Layout & Structure
**Status:** ✅ Complete

1. **Root Layout (`layout.tsx`)**
   - Geist font configuration
   - Google Fonts (Poppins, Lato, Lora)
   - Bootstrap 4.4.1 CSS CDN
   - SEO metadata configuration
   - PortfolioCursor global component

2. **Global Styles**
   - Dark theme (#0a0a0c background)
   - CSS reset and base styles
   - Smooth scrolling

#### Phase 3: Navigation System
**Status:** ✅ Complete

**Files:** `Navbar.tsx`, `Navbar.css`

**Features Implemented:**
- Fixed absolute positioning with gradient background
- Brand logo + name with hover effects
- Desktop navigation with gradient underline animation
- Mobile hamburger menu (900px breakpoint)
- Framer Motion entrance animations
- Smooth scroll to sections
- Hidden spacer for center alignment
- ARIA labels for accessibility

**CSS Architecture:**
- Responsive padding with clamp()
- Gradient underline on hover
- Mobile menu with backdrop blur
- Reduced motion support

#### Phase 4: Hero Section
**Status:** ✅ Complete

**Files:** `HomePage.tsx`, `HomePage.css`

**Components:**
- Full viewport height hero section
- Background image with gradient overlay
- "Hi, I'm Karthiyayini" heading
- Animated "Full Stack Developer" title
- Professional description
- Download Resume button
- Social media icons

**Animation Features:**
- Character-by-character title animation (Framer Motion)
- Hero entrance reveal (GSAP)
- Parallax scrolling effect
- Hover effects on buttons and icons

#### Phase 5: Three.js 3D Background
**Status:** ✅ Complete

**File:** `PortfolioThreeScene.tsx`

**3D Elements:**
- Particle field system (150-700 particles)
- Icosahedron wireframe object
- Octahedron secondary object
- Mouse parallax tracking
- Scroll-based movement

**Performance Optimizations:**
- Responsive particle count
- Memory management (geometry/material disposal)
- Reduced motion detection
- High-performance renderer settings

#### Phase 6: Content Sections
**Status:** ✅ Complete

**About Section:**
- "1.9+ Years Working Experience" display
- Gradient divider line
- Professional bio
- GSAP scroll reveal

**Experience Section:**
- Two-column grid layout
- Professional Experience timeline (3 positions)
- Academic Journey timeline (3 entries)
- Purple gradient icons
- Gradient connecting lines
- Staggered reveal animations

**Professional Skillset Section:**
- V-arc carousel (5 visible slots)
- 14 technical skills
- Auto-rotation (3s interval)
- Pause on hover
- Click to select
- Dot indicators
- Responsive positions (5 breakpoints)
- Active skill glow effect
- Landing shadow animation

**Projects Section:**
- Project cards grid (3 projects)
- Hover overlay with live/GitHub icons
- Staggered card reveal

#### Phase 7: Custom Cursor
**Status:** ✅ Complete

**File:** `PortfolioCursor.tsx`, `PortfolioCursor.css`

**Three-Layer System:**
1. Main dot (0.08s tracking)
2. Outer ring (0.32s trailing)
3. Soft glow (0.6s ambient)

**Features:**
- Interactive element detection
- Hover state expansion
- Click press animation
- Fine pointer detection (desktop)
- Touch device fallback
- Reduced motion support

#### Phase 8: Footer
**Status:** ✅ Complete

**File:** `Footer.tsx`

**Layout:**
- Left section: Name, email, phone
- Right section: Social icons, copyright
- Framer Motion entrance animation
- Responsive layout (stacks on mobile)

#### Phase 9: Responsive Design
**Status:** ✅ Complete

**Breakpoints:**
- Mobile: < 480px
- Large Mobile: < 768px
- Tablet: < 1200px
- Desktop: < 1920px
- Large Desktop: > 1920px

**Fluid Typography:**
- All text uses clamp() for responsive sizing
- Smooth scaling between breakpoints

#### Phase 10: Accessibility
**Status:** ✅ Complete

**Features:**
- Reduced motion media query support
- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Touch device cursor fallback

---

## Animation System Overview

### GSAP Animations
1. Hero entrance reveal (opacity + Y translation)
2. Hero parallax scrolling
3. Section reveal on scroll
4. Section headings reveal
5. About number scale animation
6. Timeline items stagger
7. Timeline lines scale animation
8. Project cards stagger
9. Skill carousel reveal

### Framer Motion Animations
1. Character-by-character title animation
2. Button hover/tap effects
3. Social icon hover/tap effects
4. Navigation entrance
5. Mobile menu slide animation
6. Footer entrance

### Three.js Animations
1. Particle field rotation
2. Mouse parallax tracking
3. Scroll-based movement
4. Wireframe object rotation
5. Camera follow cursor

---

## Performance Considerations

1. **Three.js Optimization**
   - Responsive particle count
   - Capped pixel ratio (1.75 max)
   - Memory cleanup on unmount
   - High-performance renderer

2. **Animation Performance**
   - will-change properties
   - Passive event listeners
   - RequestAnimationFrame for smooth updates
   - Reduced motion support

3. **CSS Performance**
   - No transform transitions on animated elements
   - Efficient selectors
   - Minimal repaints

---

## Git Workflow Summary

| Commit | Changes |
|--------|---------|
| `6a9434e` | Initial Next.js setup |
| `bd9eb3e` | Portfolio structure created |
| `071a87b` | Layout fixes |
| `dfabf5b` | Home pages completed |
| `cbb0418` | Image paths fixed |
| `3788d77` | Favicon/title updated |
| `1e8945e` | Responsive + animations |
| `cb4be1b` | Skill animations + title |
| `9d39b58` | Package updates |

---

## Current Status: ✅ PRODUCTION READY

All major features implemented and tested. Portfolio is fully functional with:
- Responsive design across all devices
- Smooth animations and transitions
- 3D interactive background
- Custom cursor experience
- Accessibility compliance
- Performance optimization
