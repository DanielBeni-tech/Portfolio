# PRD — Daniel Beni Personal Portfolio

## 1. Product definition

A premium interactive personal portfolio for Daniel Beni that combines:

- personal brand
- software engineering
- AI engineering direction
- UI/UX design
- project case studies
- experimentation
- technical community leadership

The site is both a **portfolio** and a **demonstration product**.

---

## 2. Product goals

### Primary goals

1. Establish Daniel's current professional identity.
2. Showcase a small number of strong projects.
3. Demonstrate design and front-end craftsmanship.
4. Demonstrate AI/software engineering ability.
5. Make Daniel easy to contact.
6. Create a memorable interactive experience.

### Secondary goals

- support applications
- support collaborations
- support ambassador/community opportunities
- create a central link for GitHub and projects

---

## 3. Non-goals

V1 will not attempt to become:

- a full blog CMS
- a social network
- a complex admin dashboard
- a client-management system
- a heavy SaaS platform

The architecture should remain extensible.

---

## 4. Information architecture

```text
/
├── Home
├── Work
│   ├── GBLRecover
│   ├── CARBURFLOW
│   ├── Camtel AI
│   └── Selected experiments
├── Experiments
├── Community
├── About
└── Contact
```

Potential future routes:

```text
/projects/:slug
/experiments/:slug
/notes/:slug
/now
```

---

## 5. Home experience

### Hero

Must communicate:

- who
- what
- why it matters

Within approximately 5 seconds.

### Work preview

Show 3–4 projects with strong visual transitions.

### Capability statement

Avoid a generic skills grid.

Instead:

```text
I BUILD

01 AI SYSTEMS
02 SOFTWARE
03 DATA PRODUCTS
04 COMMUNITIES
```

### Experiments

A visual stream of things currently explored.

### Community

Leadership and ecosystem building.

### Contact

A visually strong final CTA.

---

## 6. Project pages

Every major project should feel like a mini case study.

Structure:

```text
Project identity
↓
Hero visual
↓
Problem
↓
Context
↓
Role
↓
Approach
↓
Architecture
↓
Interface
↓
Technical details
↓
Outcome
↓
Lessons
↓
Next project
```

The page should not feel like documentation.

It should feel editorial.

---

## 7. Content model

### Project

```ts
type Project = {
  slug: string
  title: string
  shortDescription: string
  category: string[]
  year: number
  status: string
  role: string[]
  stack: string[]
  problem: string
  solution: string
  impact?: string[]
  featured: boolean
  cover: string
  gallery: string[]
  links: {
    live?: string
    github?: string
  }
}
```

---

## 8. Priority projects

### Tier 1

1. GBLRecover
2. CARBURFLOW
3. Camtel AI

### Tier 2

4. SUP'PTIC Computer Club
5. SUP-HUB
6. Njangui

### Experiments

- Local AI
- AI agents
- RAG / embeddings
- Ollama
- Robotics / HUGO
- Flutter experiments
- automation

---

## 9. UX principles

### Principle 1 — Instant orientation

The visitor must always know where they are.

### Principle 2 — Progressive disclosure

Show the important information first.

### Principle 3 — Visual storytelling

Screenshots and motion should carry information.

### Principle 4 — No dead zones

Avoid huge empty sections that contain no visual or narrative purpose.

### Principle 5 — Motion with hierarchy

Important elements receive stronger motion.

---

## 10. Performance requirements

The site can be visually ambitious without becoming slow.

Target:

- Lighthouse Performance: 90+
- fast first render
- responsive images
- lazy-loaded media
- reduced-motion support
- mobile-first optimization
- GPU-conscious animation

Heavy WebGL should be optional and progressive.

---

## 11. Accessibility

Required:

- keyboard navigation
- semantic HTML
- visible focus states
- contrast
- reduced motion
- accessible labels
- no information conveyed by animation alone

---

## 12. SEO

Required:

- title
- description
- Open Graph
- Twitter/X metadata
- canonical URLs
- sitemap
- robots.txt
- structured data for Person and CreativeWork where appropriate

---

## 13. Analytics

V1 can use privacy-conscious analytics.

Track only useful events:

- project opened
- GitHub clicked
- contact clicked
- CV clicked
- external project clicked

---

## 14. Contact

V1 should keep contact simple.

Possible channels:

- email
- GitHub
- LinkedIn
- WhatsApp if desired

A backend contact form is optional.

---

## 15. Definition of done

The portfolio is ready when:

- identity is immediately clear
- selected projects are credible
- design feels original
- animations feel intentional
- mobile experience is excellent
- project pages feel like case studies
- performance remains strong
- no fake metrics or claims remain
- every major visual has a reason to exist
