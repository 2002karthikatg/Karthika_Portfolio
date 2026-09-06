# HomePage Module Documentation

## File: `src/app/components/HomePage/HomePage.tsx`

### Overview
The HomePage component is the main content area of the portfolio, containing all sections from Hero to Projects.

---

## Component Structure

```
HomePage
├── AnimatedDeveloperTitle (sub-component)
├── Hero Section (#home)
│   ├── PortfolioThreeScene (3D background)
│   ├── Content (heading, description, buttons)
│   └── Right Space (for future artwork)
└── Sections Wrapper
    ├── About Section (#about)
    ├── Experience Section (#experience)
    ├── Professional Skillset Section (#skills)
    └── Projects Section (#projects)
```

---

## Features Implemented

### 1. Hero Section
- **Full viewport height** with background image
- **Gradient overlay** for readability
- **Animated heading** with character-by-character animation
- **Download Resume button** with hover effects
- **Social media icons** with Framer Motion animations

### 2. About Section
- "1.9+ Years Working Experience" display
- Gradient divider line
- Professional bio paragraph
- GSAP scroll reveal animation

### 3. Experience Section
- Two-column grid layout
- Professional Experience timeline:
  - MERN Stack Developer @ Adinn Digital (Jan 2025 - Present)
  - Quality Control Specialist @ Eminence Business Solution (June 2024 - August 2024)
  - Web Development Internship @ Cognifyz Technologies (April 2024 - May 2024)
- Academic Journey timeline:
  - B.Tech (IT) @ K.L.N College of Engineering (2024)
  - HSC @ E.V.R.N Girls Higher Secondary School (2020)
  - SSLC @ E.V.R.N Girls Higher Secondary School (2018)

### 4. Professional Skillset Section
- V-arc carousel (5 visible slots)
- 14 skills with auto-rotation
- Responsive slot positions (5 breakpoints)
- Active skill glow effect
- Landing shadow animation

### 5. Projects Section
- 3 project cards with hover overlay
- Live site and GitHub links
- Staggered reveal animation

---

## Animation Details

### GSAP Animations
```javascript
// Hero entrance reveal
heroTimeline.fromTo(".Port_HeroReveal", {
  opacity: 0, y: 45
}, {
  opacity: 1, y: 0, duration: 1, stagger: 0.12
});

// Section reveals
gsap.fromTo(section, {
  opacity: 0, y: 55
}, {
  opacity: 1, y: 0, duration: 0.9,
  scrollTrigger: { trigger: section, start: "top 85%" }
});

// Timeline items
gsap.fromTo(item, {
  opacity: 0, x: index % 2 === 0 ? -25 : 25
}, {
  opacity: 1, x: 0, duration: 0.75
});
```

### Framer Motion Animations
```javascript
// Character-by-character title
<motion.span
  variants={{
    hidden: { opacity: 0, y: 45, rotateX: -70, filter: "blur(7px)" },
    visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }
  }}
/>
```

---

## Responsive Breakpoints

| Breakpoint | Skill Slots |
|------------|-------------|
| ≤ 480px | tx: -140, -76, 0, 76, 140 |
| ≤ 768px | tx: -220, -120, 0, 120, 220 |
| ≤ 1200px | tx: -320, -175, 0, 175, 320 |
| ≤ 1920px | tx: -420, -230, 0, 230, 420 |
| > 1920px | tx: -540, -295, 0, 295, 540 |

---

## CSS Architecture

### Key Classes
- `.Port_HomePageMain` - Hero section container
- `.Port_HomePageInner` - Grid layout for hero
- `.Port_HomePageContent` - Left content area
- `.Port_HomeAllSectionsWrapper` - All sections container
- `.Port_SkillCarousel` - Skill carousel container
- `.Port_SkillPosition` - Individual skill pill

### Color Variables
- Background: `#0a0a0c`
- Primary Blue: `#194BFD`
- Primary Purple: `#AD13FB`
- Text White: `rgba(230, 230, 230, 1)`

---

## State Management

```typescript
// Skill carousel state
const [activeSkill, setActiveSkill] = useState(0);
const [isSkillPaused, setIsSkillPaused] = useState(false);

// Viewport tracking
const [viewportWidth, setViewportWidth] = useState(1440);
```

---

## Performance Optimizations

1. **useMemo** for responsive slot positions
2. **Reduced motion** detection via `useReducedMotion()`
3. **ScrollTrigger** for efficient scroll-based animations
4. **Passive event listeners** for mouse/scroll events

---

## Dependencies

- `framer-motion` - UI animations
- `gsap` + `ScrollTrigger` - Scroll animations
- `react-icons` - Icon components
- `next/image` - Optimized images

---

## Status: ✅ Complete
