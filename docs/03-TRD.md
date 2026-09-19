# TRD — Technical Requirements & Architecture

## 1. Technical objective

Build a highly animated, responsive, maintainable portfolio without creating unnecessary backend complexity.

The architecture should allow a future transition from static portfolio → content system → AI portfolio assistant.

---

## 2. Recommended stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- CSS variables / design tokens

### Motion

Primary:

- GSAP
- ScrollTrigger

Secondary:

- Framer Motion for React-native UI state transitions where convenient

### Smooth scrolling

Evaluate:

- Lenis

Use only if it does not compromise accessibility or scroll behavior.

### Optional 3D

- Three.js / React Three Fiber

Use only for one or two meaningful visual moments.

Do not build the entire website around WebGL.

---

## 3. Architecture

```text
Browser
  │
  ├── Next.js App
  │    ├── Sections
  │    ├── Project pages
  │    ├── Motion system
  │    └── Design system
  │
  ├── Content
  │    ├── projects
  │    ├── experiments
  │    └── profile
  │
  ├── External APIs
  │    └── GitHub
  │
  └── Optional API
       ├── Contact
       ├── Analytics
       └── Future Hugo AI
```

---

## 4. Content architecture

Prefer local typed data in V1.

```text
src/
├── content/
│   ├── projects.ts
│   ├── experiments.ts
│   ├── journey.ts
│   └── profile.ts
```

This avoids building a CMS too early.

---

## 5. Components

```text
components/
├── layout/
├── navigation/
├── hero/
├── projects/
├── experiments/
├── community/
├── about/
├── contact/
├── motion/
├── typography/
└── ui/
```

---

## 6. Motion architecture

Motion should be treated as a system.

```text
Motion
├── Page entrance
├── Section reveal
├── Typography reveal
├── Image reveal
├── Hover interaction
├── Cursor interaction
├── Scroll choreography
├── Page transition
└── Micro-interactions
```

Create reusable motion primitives instead of scattering animation code everywhere.

---

## 7. GSAP strategy

Use GSAP for:

- hero timeline
- scroll-triggered reveals
- pinned sections
- horizontal project sequences
- image parallax
- text splitting
- project transitions

Avoid:

- animating every DOM node independently
- infinite CPU-heavy loops
- excessive blur
- unnecessary canvas effects

---

## 8. Design tokens

Example:

```css
:root {
  --color-bg: #050505;
  --color-surface: #0b0b0c;
  --color-text: #f5f5f5;
  --color-muted: #929292;
  --color-border: rgba(255,255,255,.10);

  --accent-blue: #2563eb;
  --accent-orange: #f59e0b;

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;

  --container: 1440px;
}
```

These are starting tokens, not final values.

---

## 9. Responsive behavior

Three major experiences:

### Desktop

Maximum expression:

- cursor
- magnetic buttons
- pinned sections
- large typography
- complex motion

### Tablet

Reduce complexity:

- fewer pinned sequences
- simpler hover behavior
- preserve hierarchy

### Mobile

Do not simply shrink desktop.

Mobile should have:

- simplified motion
- touch-native interaction
- readable typography
- fast media
- no hover dependency

---

## 10. Reduced motion

Respect:

```css
@media (prefers-reduced-motion: reduce) {
  /* disable non-essential motion */
}
```

The experience should remain complete without animation.

---

## 11. Image strategy

Use:

- WebP / AVIF
- responsive sizes
- lazy loading
- poster images for video
- low-quality placeholders where useful

Every project should have a strong cover image.

---

## 12. GitHub integration

Potential V1 data:

- repository count
- selected repositories
- languages
- contribution activity

Do not expose every repository.

The portfolio curates Daniel's work; GitHub remains the source of truth.

---

## 13. Backend strategy

### V1

No backend required unless contact handling needs one.

### V1.5

Small API for:

- contact form
- analytics events

### V2

Backend can support:

```text
Portfolio API
├── /projects
├── /experiments
├── /github
├── /contact
└── /hugo
```

### V3

HUGO becomes an AI interface backed by a curated knowledge base.

---

## 14. Future HUGO architecture

```text
Visitor
   ↓
HUGO UI
   ↓
API
   ↓
Retriever
   ↓
Daniel Knowledge Base
   ├── Projects
   ├── Experience
   ├── GitHub
   ├── Experiments
   └── Community
   ↓
LLM
   ↓
Answer
```

Potential future technologies:

- FastAPI
- PostgreSQL
- pgvector
- embeddings
- Ollama / hosted LLM
- RAG

Do not implement this in V1 unless it improves the actual launch.

---

## 15. Deployment

Recommended:

- Vercel
- custom domain
- GitHub repository

CI:

```text
push
 ↓
lint
 ↓
typecheck
 ↓
build
 ↓
deploy
```

---

## 16. Code quality

Required:

- strict TypeScript
- reusable components
- no giant page component
- no duplicated animation logic
- clear naming
- typed content
- responsive testing
- Lighthouse audit before launch
