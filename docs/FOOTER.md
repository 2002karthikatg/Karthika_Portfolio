# Footer Module Documentation

## File: `src/app/components/Resusable_components/Footer.tsx`

### Overview
The Footer component displays contact information and social links with smooth entrance animations.

---

## Component Structure

```
Footer
├── Left Section
│   ├── Name
│   ├── Email (mailto link)
│   └── Phone (tel link)
└── Right Section
    ├── Social Icons
    │   ├── LinkedIn
    │   ├── WhatsApp
    │   ├── Mail
    │   └── GitHub
    └── Copyright Text
```

---

## Features Implemented

### 1. Contact Information
- **Name:** Karthiyayini T G
- **Email:** karthiyayinitg1312@gmail.com (mailto link)
- **Phone:** 7092558277 (tel link)

### 2. Social Media Icons
- LinkedIn profile link
- WhatsApp direct message
- Email contact
- GitHub profile

### 3. Copyright
- "Copyrights 2026. All Rights Reserved"

### 4. Animations
- Framer Motion entrance animation
- Hover effects on social icons
- Tap effects for mobile

---

## Animation Details

### Framer Motion
```javascript
<motion.div
  className="Port_FooterLayout container"
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
>

// Social icons
<motion.a
  whileHover={{ y: -5, scale: 1.08 }}
  whileTap={{ scale: 0.94 }}
  transition={{ duration: 0.2 }}
>
```

---

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| > 768px | Two-column layout (left/right) |
| ≤ 768px | Stacked layout (full width) |

---

## CSS Architecture

### Key Classes
- `.Port_FooterMain` - Footer container
- `.Port_FooterLayout` - Grid layout
- `.Port_FooterLeftContent` - Contact info
- `.Port_FooterRightContent` - Social links + copyright
- `.Port_FooterName` - Name styling
- `.Port_FooterContentPara` - Contact links
- `.Port_FooterCopyContent` - Copyright text

### Styling Features
- Dark background (#0a0a0c)
- Border top separator
- Fluid typography with clamp()
- Responsive padding

---

## Social Links Configuration

```typescript
const socialIcons = [
  {
    src: "/Images/HB_LinkedIcon.png",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/karthiyayini-t-g-08a672207/",
  },
  {
    src: "/Images/HB_WpIcon.png",
    alt: "WhatsApp",
    href: "https://wa.me/917092558277",
  },
  {
    src: "/Images/HB_MailIcon.png",
    alt: "Mail",
    href: "mailto:karthiyayinitg1312@gmail.com",
  },
  {
    src: "/Images/HB_GitHubIcon.png",
    alt: "GitHub",
    href: "https://github.com/2002karthikatg",
  },
];
```

---

## Accessibility Features

- ARIA labels on social links
- Semantic `<footer>` element
- Keyboard navigation support
- Focus states on interactive elements

---

## Status: ✅ Complete
