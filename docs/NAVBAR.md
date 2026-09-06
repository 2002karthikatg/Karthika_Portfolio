# Navbar Module Documentation

## File: `src/app/components/Resusable_components/Navbar.tsx`

### Overview
The Navbar component provides navigation with desktop and mobile menu support, featuring smooth animations and responsive design.

---

## Component Structure

```
Navbar
├── Brand (logo + name)
├── Desktop Navigation (links)
├── Hidden Spacer (center alignment)
├── Mobile Menu Button (hamburger)
└── Mobile Navigation (slide menu)
```

---

## Features Implemented

### 1. Brand Section
- Logo image (`Port_NavIcon.png`)
- "Karthiyayini" text
- Hover scale effect
- Links to home section

### 2. Desktop Navigation
- 5 navigation items:
  - Home (#home)
  - About (#about)
  - Projects (#projects)
  - Resume (external PDF)
  - GitHub (external link)
- Gradient underline on hover
- Framer Motion hover/tap effects
- Smooth scroll to sections

### 3. Mobile Navigation
- Hamburger menu button (900px breakpoint)
- Animated X transformation
- Slide-in menu with backdrop blur
- Staggered item entrance
- Arrow indicators
- Click to close

### 4. Accessibility
- ARIA labels on buttons
- `aria-expanded` state
- Semantic `<nav>` elements
- Keyboard navigation support

---

## Animation Details

### Framer Motion
```javascript
// Entrance animation
<motion.header
  initial={{ opacity: 0, y: -25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
>

// Mobile menu
<motion.nav
  initial={{ opacity: 0, y: -12, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: -10, scale: 0.98 }}
>
```

### CSS Transitions
```css
/* Gradient underline */
.Port_NavItem::after {
  width: 0;
  transition: width 0.3s ease;
}
.Port_NavItem:hover::after {
  width: 100%;
}

/* Hamburger animation */
.Port_NavMenuButton span {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
```

---

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| > 900px | Desktop nav visible, mobile hidden |
| ≤ 900px | Mobile menu button visible, desktop hidden |
| ≤ 480px | Compact mobile layout |

---

## CSS Architecture

### Key Classes
- `.Port_NavMain` - Fixed header container
- `.Port_NavContentMain` - Brand section
- `.Port_NavItems` - Desktop navigation
- `.Port_NavItem` - Individual nav link
- `.Port_NavMenuButton` - Hamburger button
- `.Port_NavMobileMenu` - Mobile slide menu
- `.Port_NavMobileItem` - Mobile menu item

### Styling Features
- `clamp()` for fluid typography
- Gradient backgrounds
- Backdrop blur on mobile menu
- Reduced motion support

---

## Navigation Configuration

```typescript
const NAVIGATION_ITEMS = [
  { label: "Home", href: "#home", type: "section" },
  { label: "About", href: "#about", type: "section" },
  { label: "Projects", href: "#projects", type: "section" },
  { label: "Resume", href: RESUME_URL, type: "external" },
  { label: "GitHub", href: "https://github.com/2002karthikatg", type: "external" },
];
```

---

## State Management

```typescript
const [mobileOpen, setMobileOpen] = useState(false);
const shouldReduceMotion = useReducedMotion();
```

---

## Performance Optimizations

1. **Reduced motion** detection
2. **Conditional animations** based on motion preference
3. **Efficient re-renders** with state management
4. **Passive event listeners**

---

## Status: ✅ Complete
