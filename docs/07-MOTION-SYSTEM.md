# Motion Design System — Daniel Beni Portfolio

## 0. Objective

The animation layer is a first-class design system.

It must feel:

**cinematic, precise, responsive, intelligent and restrained.**

Not:

**busy, gimmicky or template-like.**

---

# 1. Motion principles

## Principle 01 — Continuity

An object should feel like it belongs to the same world before and after a transition.

## Principle 02 — Hierarchy

Important content gets stronger motion.

## Principle 03 — Physics

Movement should have believable acceleration/deceleration.

## Principle 04 — Contrast

Stillness makes motion powerful.

## Principle 05 — Meaning

Animation should explain or reinforce content.

---

# 2. Timing tokens

Starting values:

```text
micro     120ms
fast      220ms
normal    420ms
slow      700ms
cinematic 1000–1400ms
```

Do not use one duration everywhere.

---

# 3. Easing

Prefer smooth custom curves.

Examples conceptually:

```text
ease-out
expo-out
circ-out
back-out
```

Spring physics can be used for UI interactions.

---

# 4. Hero sequence

### Stage 01

Background:

```text
opacity 0 → 1
```

### Stage 02

Identity:

```text
clip-path reveal
```

### Stage 03

Headline:

```text
word stagger
```

### Stage 04

Technical labels:

```text
fade + y movement
```

### Stage 05

CTA:

```text
scale 0.96 → 1
opacity 0 → 1
```

---

# 5. Scroll choreography

Instead of:

```text
section enters → section enters → section enters
```

Use narrative relationships.

Example:

```text
GBLRecover image
      ↓
image grows
      ↓
title moves over image
      ↓
metadata appears
      ↓
image locks
      ↓
next project enters
```

---

# 6. Project cards

Default state:

```text
image
title
category
year
```

Hover:

```text
image scale: 1 → 1.04
image x/y: subtle movement
metadata: reveal
cursor: "VIEW"
border: highlight
```

No giant card jump.

---

# 7. Typography animation

Use three techniques:

### Mask reveal

Best for hero headlines.

### Line reveal

Best for paragraphs.

### Character animation

Use rarely.

Character-by-character animation can quickly become artificial.

---

# 8. Cursor system

States:

```text
DEFAULT
VIEW
DRAG
OPEN
TEXT
```

Example:

Hovering project:

```text
[ VIEW ]
```

Hovering GitHub:

```text
[ GITHUB ↗ ]
```

On mobile, replace cursor states with visible touch feedback.

---

# 9. Magnetic interaction

Use on:

- primary CTA
- social links
- selected buttons

Do not use on every link.

---

# 10. Image transitions

Recommended effects:

- clip-path reveal
- scale crop
- mask wipe
- parallax
- blur-to-sharp

Use blur sparingly because it is visually expensive and often looks generic.

---

# 11. Horizontal section

Potential experience:

```text
EXPERIMENTS

LOCAL AI → AGENTS → RAG → OLLAMA → ROBOTICS
```

Desktop can use horizontal scroll controlled by vertical scroll.

Mobile becomes a horizontal touch carousel.

---

# 12. Page transitions

Project navigation:

```text
Current project cover
       ↓
cover expands
       ↓
viewport becomes project hero
       ↓
content appears
```

This creates a premium continuity effect.

---

# 13. Loading

Avoid long branded loading screens.

If assets require loading:

```text
minimal progress indicator
+
content appears progressively
```

Never block the user for a decorative animation.

---

# 14. Interaction details

Premium feel often comes from micro-interactions:

- link underline movement
- icon rotation
- arrow translation
- border opacity
- image crop
- button magnetic pull
- cursor transformation
- number count-up
- subtle text color transitions

---

# 15. Performance rules

Never animate:

- expensive layout properties when transform can work
- giant blur layers continuously
- huge canvas simulations without need

Prefer:

```text
transform
opacity
clip-path
```

Use GPU-friendly animation where possible.

---

# 16. Reduced motion

When reduced motion is enabled:

- remove parallax
- remove large transforms
- remove pinned sequences
- remove cursor effects
- keep fades minimal
- preserve content order

The website must remain beautiful without motion.

---

# 17. Motion QA checklist

For every animation:

- Does it have a purpose?
- Is the duration appropriate?
- Is it interruptible?
- Does it work on mobile?
- Does it work at 60fps?
- Does it work with reduced motion?
- Does it distract from the content?
- Does it feel like Daniel's brand?

If not, delete it.

---

# 18. Final motion philosophy

The best animation is not the animation people notice first.

It is the animation that makes the entire website feel **alive and intentional**.
