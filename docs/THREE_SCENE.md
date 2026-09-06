# PortfolioThreeScene Module Documentation

## File: `src/app/components/HomePage/PortfolioThreeScene.tsx`

### Overview
A Three.js powered 3D background featuring a particle field, wireframe objects, and interactive mouse/scroll tracking.

---

## Component Structure

```
PortfolioThreeScene
├── Scene Setup
│   ├── Camera (PerspectiveCamera)
│   ├── Renderer (WebGLRenderer)
│   └── Lighting (None - uses MeshBasicMaterial)
├── Objects
│   ├── Particle Field (Points)
│   ├── Icosahedron Wireframe (Mesh)
│   └── Octahedron Secondary (Mesh)
└── Animation Loop
    ├── Particle rotation
    ├── Object rotation
    ├── Mouse parallax
    └── Scroll tracking
```

---

## Features Implemented

### 1. Particle Field System
- **Count:** 150-700 particles (responsive)
- **Colors:** Blue (#194BFD) to Purple (#AD13FB) gradient
- **Size:** 0.025 (mobile) / 0.032 (desktop)
- **Opacity:** 0.5
- **Distribution:** Random 3D positions

### 2. Icosahedron Wireframe
- **Radius:** 1.7
- **Detail:** 1
- **Color:** Purple (#7d35ff)
- **Opacity:** 0.035 (mobile) / 0.075 (desktop)
- **Position:** Right side of scene

### 3. Octahedron Secondary
- **Radius:** 0.75
- **Detail:** 0
- **Color:** Blue (#194bfd)
- **Opacity:** 0.06
- **Position:** Bottom-left of scene

### 4. Mouse Parallax
- Smooth cursor tracking (0.025 lerp)
- Affects particle position and camera
- Normalized coordinates (-1 to 1)

### 5. Scroll Tracking
- Particles move with scroll
- Objects rotate based on scroll
- Subtle parallax effect

---

## Animation Details

### Particle Animation
```javascript
particles.rotation.y = elapsed * 0.018;
particles.rotation.x = pointer.y * 0.025;
particles.position.x = pointer.x * 0.11;
particles.position.y = -scrollPosition * 0.00008;
```

### Wireframe Animation
```javascript
wireObject.rotation.x = elapsed * 0.09 + pointer.y * 0.08;
wireObject.rotation.y = elapsed * 0.12 + pointer.x * 0.1;
wireObject.rotation.z = scrollPosition * 0.00008;
wireObject.position.y = 0.2 + Math.sin(elapsed * 0.7) * 0.08;
```

### Camera Animation
```javascript
camera.position.x += (pointer.x * 0.12 - camera.position.x) * 0.025;
camera.position.y += (pointer.y * 0.08 - camera.position.y) * 0.025;
camera.lookAt(scene.position);
```

---

## Responsive Particle Count

| Viewport Width | Particle Count |
|----------------|----------------|
| ≤ 480px | 150 |
| ≤ 768px | 220 |
| ≤ 1366px | 380 |
| ≤ 1920px | 520 |
| > 1920px | 700 |

---

## Performance Optimizations

### Renderer Settings
```javascript
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: false,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
```

### Memory Management
```typescript
return () => {
  window.cancelAnimationFrame(animationFrameId);
  particleGeometry.dispose();
  particleMaterial.dispose();
  wireGeometry.dispose();
  wireMaterial.dispose();
  secondaryGeometry.dispose();
  secondaryMaterial.dispose();
  renderer.dispose();
  if (mount.contains(renderer.domElement)) {
    mount.removeChild(renderer.domElement);
  }
};
```

### Reduced Motion Support
```typescript
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (reducedMotion.matches) {
  return; // Skip animation setup
}
```

---

## Event Listeners

```typescript
window.addEventListener("pointermove", handlePointerMove, { passive: true });
window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("resize", handleResize);
```

---

## Cleanup

1. Cancel animation frame
2. Remove event listeners
3. Dispose geometries
4. Dispose materials
5. Dispose renderer
6. Remove canvas from DOM

---

## CSS Integration

```css
.Port_ThreeScene {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}

.Port_ThreeScene canvas {
  display: block;
  width: 100% !important;
  height: 100% !important;
}
```

---

## Dependencies

- `three` ^0.185.1
- `@types/three` ^0.185.4

---

## Status: ✅ Complete
