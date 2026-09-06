# PortfolioCursor Module Documentation

## File: `src/app/components/PortfolioCursor/PortfolioCursor.tsx`

### Overview
A custom three-layer cursor system that replaces the default browser cursor with an interactive, animated experience.

---

## Component Structure

```
PortfolioCursor
├── Soft Glow (ambient light)
├── Outer Ring (trailing follower)
└── Main Dot (fast tracker)
```

---

## Features Implemented

### 1. Three-Layer Cursor System

#### Main Dot
- **Size:** 7px
- **Tracking Speed:** 0.08s
- **Color:** White with purple glow
- **Behavior:** Fast, precise tracking

#### Outer Ring
- **Size:** 38px (56px on hover)
- **Tracking Speed:** 0.32s
- **Color:** Purple border with subtle background
- **Behavior:** Trailing effect, expands on hover

#### Soft Glow
- **Size:** 240px
- **Tracking Speed:** 0.6s
- **Color:** Purple radial gradient
- **Behavior:** Ambient light effect

### 2. Interactive Element Detection
Detects hover on:
- Links (`<a>`)
- Buttons (`<button>`)
- Role buttons (`[role="button"]`)
- Inputs (`<input>`)
- Textareas (`<textarea>`)
- Project cards (`.Port_ProjectCard`)
- Skill items (`.Port_SkillItem`)

### 3. State Management
- **Hovering:** Expands ring, shrinks dot
- **Pressed:** Shrinks ring on click

### 4. Device Detection
- **Fine pointer (desktop):** Custom cursor enabled
- **Coarse pointer (touch):** Default cursor, custom hidden
- **Reduced motion:** Default cursor, custom hidden

---

## Animation Details

### GSAP QuickTo
```javascript
// Fast main dot
const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });

// Slower ring (trailing effect)
const ringX = gsap.quickTo(ring, "x", { duration: 0.32, ease: "power3.out" });
const ringY = gsap.quickTo(ring, "y", { duration: 0.32, ease: "power3.out" });

// Large soft glow
const glowX = gsap.quickTo(glow, "x", { duration: 0.6, ease: "power3.out" });
const glowY = gsap.quickTo(glow, "y", { duration: 0.6, ease: "power3.out" });
```

### CSS Transitions
```css
/* Dot */
.Port_CursorDot {
  transition: width 0.2s ease, height 0.2s ease, background 0.2s ease;
}

/* Ring */
.Port_CursorRing {
  transition: width 0.25s cubic-bezier(0.22, 1, 0.36, 1),
              height 0.25s cubic-bezier(0.22, 1, 0.36, 1),
              border-color 0.25s ease,
              background 0.25s ease,
              opacity 0.25s ease;
}
```

---

## CSS Architecture

### Key Classes
- `.Port_CursorDot` - Main tracking dot
- `.Port_CursorDot--hover` - Hover state (smaller)
- `.Port_CursorRing` - Outer follower ring
- `.Port_CursorRing--hover` - Hover state (larger)
- `.Port_CursorRing--pressed` - Click state (smaller)
- `.Port_CursorGlow` - Ambient light effect

### Styling Features
- Fixed positioning (z-index: 99999)
- Pointer events: none
- Transform: translate(-50%, -50%)
- Box shadows for glow effects

---

## Accessibility Features

- **Reduced motion:** Disables custom cursor
- **Touch devices:** Falls back to default cursor
- **Hidden from screen readers:** `aria-hidden="true"`
- **No pointer events:** Doesn't interfere with clicks

---

## State Management

```typescript
const [enabled, setEnabled] = useState(false);
const [hovering, setHovering] = useState(false);
const [pressed, setPressed] = useState(false);
```

---

## Performance Optimizations

1. **GSAP QuickTo** for efficient animations
2. **Passive event listeners** for mousemove
3. **Device detection** at mount only
4. **Conditional rendering** based on enabled state

---

## Event Listeners

```typescript
window.addEventListener("mousemove", handleMouseMove, { passive: true });
document.addEventListener("mouseover", handleMouseOver);
document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mouseup", handleMouseUp);
```

---

## Cleanup

```typescript
return () => {
  window.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseover", handleMouseOver);
  document.removeEventListener("mousedown", handleMouseDown);
  document.removeEventListener("mouseup", handleMouseUp);
};
```

---

## Status: ✅ Complete
