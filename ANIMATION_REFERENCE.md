# Animation Reference Card

Quick reference for all animations in the GrowHigh landing page.

---

## 🎯 Entry Animations (Scroll-triggered)

| Animation | Duration | Easing | Effect | Components |
|-----------|----------|--------|--------|------------|
| `slideUp` | 0.6s | ease-out | Slide from bottom + fade | FAQ, Footer CTA |
| `slideDown` | 0.6s | ease-out | Slide from top + fade | Navbar links |
| `slideLeft` | 0.6s | ease-out | Slide from left + fade | Integrations capabilities |
| `slideRight` | 0.6s | ease-out | Slide from right + fade | Results cards, Comparison rows |
| `scaleUp` | 0.6s | cubic-bezier | Scale 0.95→1 + fade | Cards, Metrics |
| `fadeIn` | 0.5s | ease-out | Fade from 0→1 | General elements |

### Usage in Components:
```tsx
// In Card component
style={{ animation: `slideUp 0.6s ease-out forwards` }}

// In lists (with stagger)
animationDelay: `${index * 100}ms`
```

---

## 🔄 Continuous Animations (Looping)

| Animation | Duration | Loop | Effect | Components |
|-----------|----------|------|--------|------------|
| `float` | 12s | ∞ | Organic floating motion | Hero orbs |
| `floatSlow` | 15s | ∞ | Slower 4-point float | Background elements |
| `gridPulse` | 10s | ∞ | Subtle opacity pulse | Grid background |
| `pulseSlow` | 6s | ∞ | Slow opacity fade | ROI badge |
| `pulse-slow-xl` | 6s | ∞ | Extra slow pulse | Key metrics |
| `glowPulse` | 3s | ∞ | Glow effect pulse | Interactive elements |
| `shimmer` | 3s | ∞ | Gradient shimmer | Shiny elements |
| `bounceSlow` | 3s | ∞ | Gentle bounce | Floating icons |
| `rotateSlow` | 20s | ∞ | Full rotation | Rotating elements |

### Usage:
```tsx
// In Tailwind classes
className="animate-pulse-slow animate-float"

// Multiple animations
className="animate-grid-pulse animate-float"
```

---

## 🖱️ Interactive Animations (Hover/Click)

| Trigger | Effect | Duration | Components |
|---------|--------|----------|------------|
| Hover | Scale 1 → 1.05 | 300ms | Cards, Buttons |
| Hover | Scale 1 → 1.1 | 300ms | Icons, Social buttons |
| Hover | Translate Y -4px | 300ms | Buttons, Links |
| Hover | Shadow expansion | 300ms | Cards |
| Hover | Border color shift | 300ms | Cards, FAQ |
| Hover | Text color change | 300ms | Links, Badges |
| Click | Scale 0.95 | Instant | Buttons |

### Usage:
```tsx
// On button hover
className="hover:scale-105 hover:-translate-y-1 transition-all duration-300"

// On card hover
className="hover:shadow-lg hover:border-brand-primary"

// Icon hover
className="group-hover:scale-110 group-hover:text-brand-primary"
```

---

## 📊 Animation Properties

### Transform Functions Used
```css
/* Translate */
translateY(px)  /* Vertical movement */
translateX(px)  /* Horizontal movement */

/* Scale */
scale(1.0 - 1.1)  /* Size change */

/* Rotate */
rotate(360deg)  /* Full rotation */

/* Opacity */
opacity: 0 - 1  /* Fade in/out */
```

### Hardware Acceleration
```css
/* These properties trigger GPU acceleration */
transform: translate3d()
transform: scale3d()
opacity: 0-1
/* Avoid: left, top, width, height, margin, padding */
```

---

## ⏱️ Timing Guide

### Stagger Delays (Sequential Animation)

```tsx
// For 3-4 items (cards, metrics)
animationDelay: `${index * 100}ms`  // 0ms, 100ms, 200ms

// For 5-7 items (list items)
animationDelay: `${index * 50}ms`   // 0ms, 50ms, 100ms...

// For 8+ items
animationDelay: `${index * 40}ms`   // Faster stagger

// Custom delay
style={{ animationDelay: `${index * 60}ms` }}
```

### Duration Guide
```
0.3s   = Quick interactions (hover effects)
0.5s   = Standard animations (fade in)
0.6s   = Entry animations (slide, scale)
0.8s   = Longer entry (visible from far away)
1.0s   = Significant animations (large objects)
3-6s   = Continuous loops
12-20s = Slow background effects
```

---

## 🎨 Animation Classes

### Tailwind Animation Classes
```tailwind
/* Built-in */
animate-pulse
animate-bounce
animate-spin

/* Custom (in index.html Tailwind config) */
animate-float
animate-float-slow
animate-fade-in
animate-fade-in-delayed
animate-slide-up
animate-slide-down
animate-slide-left
animate-slide-right
animate-pulse-slow
animate-pulse-slow-xl
animate-grid-pulse
animate-glow-pulse
animate-shimmer
animate-bounce-slow
animate-rotate-slow
animate-scale-up
animate-gradient-shift
```

### Transition Classes
```tailwind
transition           /* Enable transitions */
transition-all      /* Transition all properties */
transition-colors   /* Only color changes */
transition-transform /* Only transform changes */

duration-100  /* 100ms */
duration-200  /* 200ms */
duration-300  /* 300ms (default) */
duration-500  /* 500ms */
ease-out      /* ease-out function */
ease-in       /* ease-in function */
ease-in-out   /* ease-in-out function */
```

---

## 🔧 Customization Examples

### Change Animation Speed
```tsx
// Default: 0.6s
style={{ animation: `slideUp 0.8s ease-out forwards` }}

// Slower: 1s
style={{ animation: `slideUp 1s ease-out forwards` }}

// Faster: 0.3s
style={{ animation: `slideUp 0.3s ease-out forwards` }}
```

### Add Delay to Animation
```tsx
// Add 200ms delay before animation starts
style={{ 
  animation: `slideUp 0.6s ease-out forwards`,
  animationDelay: '200ms'
}}
```

### Stagger Multiple Elements
```tsx
{items.map((item, index) => (
  <div 
    key={index}
    style={{ 
      animation: `slideUp 0.6s ease-out forwards`,
      animationDelay: `${index * 100}ms`
    }}
  >
    {item}
  </div>
))}
```

### Combine Multiple Animations
```tsx
className="
  animate-float              /* Floating motion */
  animate-pulse-slow         /* Pulsing opacity */
  hover:scale-105            /* Hover effect */
  transition-transform       /* Smooth hover */
  duration-300               /* 300ms duration */
"
```

---

## 📱 Responsive Animation Handling

```tsx
// Reduce animations on mobile
className={`
  animate-slide-up
  md:duration-500             /* Slower on desktop */
  duration-300                /* Faster on mobile */
`}

// Disable animations on reduced-motion
className={`
  animate-float
  motion-reduce:animate-none  /* Disable if user prefers */
`}
```

---

## 🎬 Animation Sequence Examples

### Card Grid (Staggered Entry)
```tsx
{cards.map((card, i) => (
  <Card 
    key={i} 
    delay={i * 120}
    animationType="scale-up"
    className="transition-all duration-300"
  >
    {card.content}
  </Card>
))}
```

### Navbar Links
```tsx
{navLinks.map((link, idx) => (
  <a 
    key={link.name}
    href={link.href}
    className="hover:scale-105 transition-all duration-300"
    style={{ animation: `slideDown 0.6s ease-out forwards`, animationDelay: `${idx * 50}ms` }}
  >
    {link.name}
  </a>
))}
```

### Interactive Button
```tsx
<button className="
  bg-brand-primary 
  text-white
  px-6 py-3
  rounded-lg
  hover:bg-brand-primaryDark
  hover:shadow-lg
  hover:-translate-y-1
  hover:scale-105
  active:scale-95
  transition-all
  duration-300
">
  Click Me
</button>
```

---

## 🐛 Troubleshooting

### Animation Not Showing
```tsx
// Check: Is animation triggered by scroll?
const { ref, isVisible } = useScrollAnimation();

// Check: Is element in viewport?
console.log('isVisible:', isVisible);

// Check: Is animation class applied?
className={`animate-slideUp opacity-${isVisible ? '100' : '0'}`}
```

### Animation Jittery
```tsx
/* Use transform instead of left/top */
// ❌ Bad
transform: none;
left: 10px;

// ✅ Good
transform: translateX(10px);
```

### Animation Too Slow/Fast
```tsx
/* Adjust duration */
style={{ animation: `slideUp 0.3s ease-out forwards` }}
/* 0.3s = fast, 0.6s = medium, 1s = slow */
```

---

## 📊 Performance Metrics

```
CSS Animations:
  Rendering: GPU accelerated
  FPS Target: 60
  CPU Impact: Minimal
  Memory: Negligible

vs JavaScript Animations:
  Rendering: CPU based
  FPS Target: 60
  CPU Impact: Higher
  Memory: Higher

Winner: CSS Animations ✅
```

---

## 🎯 Component Animation Map

```
Navbar
├── Links: slideDown (50ms stagger)
└── Mobile Menu: slideRight (60ms stagger)

Hero
├── Title: fadeIn + slideUp
├── Gradient Orbs: float + floatSlow
└── Grid: gridPulse (continuous)

KeyMetrics
└── Cards: scaleUp (100ms stagger)

Results
├── Cards: slideRight (150ms stagger)
└── ROI Badge: pulseSlowXl (continuous)

Services
└── Icons: hover scale + color

Process
├── Steps: slideLeft (150ms stagger)
└── Icons: hover scale

Integrations
├── Capabilities: slideLeft (50ms stagger)
└── Tool Icons: scaleUp (50ms stagger)

Comparison
└── Rows: slideRight (60ms stagger)

FAQ
├── Accordion Items: slideUp (50ms stagger)
└── Icons: rotateSlow (on open)

Footer
├── CTA: slideUp
└── Social Icons: hover scale + lift
```

---

## 🚀 Performance Tips

1. **Prefer CSS animations** over JavaScript
2. **Use transform/opacity** for smooth 60fps
3. **Apply staggered delays** for visual interest
4. **Keep durations 0.3-1s** for UI animations
5. **Use 6-20s** for continuous background animations
6. **Test on low-end devices** before deploying
7. **Respect prefers-reduced-motion** setting
8. **Group animations** with `group-hover` classes

---

## 📚 Related Files

- **index.html** - Keyframe definitions
- **ANIMATIONS.md** - Full animation documentation
- **Each component file** - Component-specific animations

---

*Last Updated: 2025-02-11*
*Animation System: Optimized for Vercel*
