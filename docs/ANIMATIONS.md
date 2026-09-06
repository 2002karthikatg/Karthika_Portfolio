# Animation System Documentation

## Overview
The portfolio uses a combination of GSAP, Framer Motion, and Three.js for a rich, interactive animation experience.

---

## Animation Libraries

### 1. GSAP (GreenSock Animation Platform)
**Version:** 3.15.0
**Purpose:** Scroll-based animations and complex sequences

### 2. Framer Motion
**Version:** 13.1.0
**Purpose:** React component animations and gestures

### 3. Three.js
**Version:** 0.185.1
**Purpose:** 3D background animations

---

## GSAP Animations

### Hero Entrance
```javascript
const heroTimeline = gsap.timeline({
  defaults: { ease: "power4.out" }
});

heroTimeline.fromTo(".Port_HeroReveal", {
  opacity: 0, y: 45
}, {
  opacity: 1, y: 0, duration: 1, stagger: 0.12, delay: 0.15
});
```

### Hero Parallax
```javascript
gsap.to(".Port_HomePageContent", {
  y: 55,
  ease: "none",
  scrollTrigger: {
    trigger: heroRef.current,
    start: "top top",
    end: "bottom top",
    scrub: 1.1,
  },
});
```

### Section Reveals
```javascript
const sections = gsap.utils.toArray(".Port_SectionReveal");
sections.forEach((section) => {
  gsap.fromTo(section, {
    opacity: 0, y: 55
  }, {
    opacity: 1, y: 0, duration: 0.9,
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
});
```

### Timeline Items
```javascript
const timelineItems = gsap.utils.toArray(".Port_TimelineItem");
timelineItems.forEach((item, index) => {
  gsap.fromTo(item, {
    opacity: 0, x: index % 2 === 0 ? -25 : 25
  }, {
    opacity: 1, x: 0, duration: 0.75,
    scrollTrigger: { trigger: item, start: "top 88%" },
  });
});
```

### Project Cards
```javascript
gsap.fromTo(".Port_ProjectCardReveal", {
  opacity: 0, y: 45, scale: 0.97
}, {
  opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.12,
  scrollTrigger: {
    trigger: ".Port_ProjectGrid",
    start: "top 83%",
  },
});
```

---

## Framer Motion Animations

### Character-by-Character Title
```javascript
<motion.div
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.035, delayChildren: 0.55 } },
  }}
>
  {text.split("").map((character, index) => (
    <motion.span
      key={`${character}-${index}`}
      variants={{
        hidden: { opacity: 0, y: 45, rotateX: -70, filter: "blur(7px)" },
        visible: {
          opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)",
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {character === " " ? "\u00A0" : character}
    </motion.span>
  ))}
</motion.div>
```

### Button Hover Effects
```javascript
<motion.a
  whileHover={{ y: -3, scale: 1.025 }}
  whileTap={{ scale: 0.97 }}
>
  Download Resume
</motion.a>
```

### Social Icon Effects
```javascript
<motion.a
  whileHover={{ y: -5, scale: 1.08 }}
  whileTap={{ scale: 0.94 }}
  transition={{ duration: 0.2 }}
>
  <img src={icon.src} alt={icon.alt} />
</motion.a>
```

### Navigation Entrance
```javascript
<motion.header
  initial={{ opacity: 0, y: -25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
>
```

### Mobile Menu
```javascript
<motion.nav
  initial={{ opacity: 0, y: -12, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: -10, scale: 0.98 }}
  transition={{ duration: 0.25 }}
>
```

### Footer Entrance
```javascript
<motion.div
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
>
```

---

## Three.js Animations

### Particle Rotation
```javascript
particles.rotation.y = elapsed * 0.018;
particles.rotation.x = pointer.y * 0.025;
particles.position.x = pointer.x * 0.11;
```

### Wireframe Rotation
```javascript
wireObject.rotation.x = elapsed * 0.09 + pointer.y * 0.08;
wireObject.rotation.y = elapsed * 0.12 + pointer.x * 0.1;
wireObject.rotation.z = scrollPosition * 0.00008;
```

### Camera Follow
```javascript
camera.position.x += (pointer.x * 0.12 - camera.position.x) * 0.025;
camera.position.y += (pointer.y * 0.08 - camera.position.y) * 0.025;
```

---

## Cursor Animations

### GSAP QuickTo
```javascript
const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
const ringX = gsap.quickTo(ring, "x", { duration: 0.32, ease: "power3.out" });
const glowX = gsap.quickTo(glow, "x", { duration: 0.6, ease: "power3.out" });
```

### CSS Transitions
```css
.Port_CursorRing {
  transition: width 0.25s cubic-bezier(0.22, 1, 0.36, 1),
              height 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

## Reduced Motion Support

### GSAP
```javascript
const shouldReduceMotion = useReducedMotion();
if (shouldReduceMotion) return;
```

### Framer Motion
```javascript
const shouldReduceMotion = useReducedMotion();
initial={shouldReduceMotion ? false : { opacity: 0, y: -25 }}
```

### Three.js
```javascript
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (reducedMotion.matches) return;
```

### CSS
```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { transition: none !important; animation: none !important; }
}
```

---

## Easing Functions

| Easing | Description |
|--------|-------------|
| `power4.out` | Fast start, slow end |
| `power3.out` | Medium start, slow end |
| `power2.out` | Slow start, slow end |
| `back.out(1.4)` | Overshoot then settle |
| `[0.22, 1, 0.36, 1]` | Custom cubic bezier |

---

## Performance Tips

1. **Use will-change** for animated properties
2. **Passive event listeners** for scroll/pointer events
3. **requestAnimationFrame** for smooth updates
4. **Conditional animations** based on reduced motion
5. **Dispose Three.js resources** on unmount

---

## Status: ✅ Complete
