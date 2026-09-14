# UI/UX Design System — Daniel Beni Portfolio

## 1. Design ambition

The goal is not:

> "a nice developer portfolio"

The goal is:

> **a portfolio that could itself be presented as a premium design case study.**

The interface must demonstrate:

- typography
- layout
- interaction
- motion
- art direction
- systems thinking
- technical execution

---

# 2. Art direction

## Visual language

**Editorial × Experimental × Technical**

Imagine:

- a design studio
- an AI research interface
- a premium magazine
- a software laboratory

combined into one coherent product.

---

# 3. Grid

Desktop:

- 12-column grid
- generous outer margins
- strong alignment
- controlled asymmetry

Mobile:

- 4-column conceptual grid
- 16–24px side margins
- fewer simultaneous visual elements

Never center everything.

Asymmetry creates personality.

---

# 4. Typography scale

Suggested desktop:

```text
Display XL    120–180px
Display L      80–120px
Display M      56–80px
Heading        40–56px
Subheading     24–32px
Body           18–20px
Small          13–15px
Mono           11–13px
```

Actual values should be tuned during visual implementation.

---

# 5. Hero design

## Concept A — Kinetic statement

Large text:

```text
I BUILD
INTELLIGENT
SOFTWARE.
```

Words enter independently.

The last word can transform into:

```text
SYSTEMS.
PRODUCTS.
EXPERIMENTS.
```

This creates a living identity without needing a huge 3D scene.

---

## Concept B — System map

Central visual:

```text
          DATA
           │
IDEA ───→ AI ───→ CODE
           │
        PRODUCT
           │
         IMPACT
```

The network subtly reacts to pointer position.

The diagram becomes more alive as the user explores.

---

# 6. Navigation

Minimal fixed navigation.

Possible structure:

```text
DANIEL.BENI                     MENU
AI / SOFTWARE / COMMUNITY
```

On desktop:

- menu stays visually quiet
- changes contrast based on section
- progress indicator can appear

On mobile:

- full-screen menu
- large typography
- project thumbnails
- smooth transition

---

# 7. Scroll experience

Scrolling should feel choreographed.

### Phase 1

Hero enters.

### Phase 2

Identity settles.

### Phase 3

Projects emerge.

### Phase 4

Project cards transform into case studies.

### Phase 5

Experiments become a moving visual archive.

### Phase 6

Community section changes the visual rhythm.

### Phase 7

Final CTA becomes extremely simple.

---

# 8. Selected Work

Do NOT use a standard grid of equal cards.

Instead:

### Featured project

Huge visual:

```text
GBLRecover
Revenue Assurance Platform
```

Image occupies most of viewport.

Metadata appears around it.

On hover:

- image zooms subtly
- metadata shifts
- project number moves
- cursor changes
- title may reveal a secondary descriptor

---

# 9. Project transition

When opening a project:

1. selected project image expands
2. title travels with it
3. background changes
4. metadata fades into position
5. case study loads as continuation of the same visual scene

The visitor should feel that the card **became the project page**.

---

# 10. Project case-study layout

Use editorial storytelling.

Example:

```text
01
GBLRecover

Revenue Assurance
Platform

[HERO IMAGE]

THE PROBLEM

CAMTEL needed...
```

Then:

```text
50,606
ACCOUNTS
```

Large factual numbers can become visual anchors.

Only use numbers that are verifiable.

---

# 11. Experiments

This section should feel different from Projects.

Possible design:

A horizontal stream:

```text
LOCAL AI
     →
RAG
     →
AGENTS
     →
OLLAMA
     →
ROBOTICS
     →
AUTOMATION
```

Each item reacts on hover.

Status badges:

- BUILDING
- EXPERIMENTAL
- PAUSED
- SHIPPED

---

# 12. Community section

The visual language should become more human.

Show:

- SUP'PTIC Computer Club
- Claude Cameroon
- workshops
- events
- students
- prototypes

Possible headline:

> **I don't only build software. I build people around technology.**

This is a strong differentiator.

---

# 13. About section

Do not write a huge biography.

Use three layers:

### One sentence

Who Daniel is.

### Short narrative

How he moved toward software and AI.

### Current curiosity

What he is learning/building now.

---

# 14. Interaction library

The portfolio should include a curated set of interactions.

## Cursor

Desktop custom cursor:

- default
- project hover
- link hover
- drag state
- view state

## Magnetic buttons

Use lightly.

## Text reveal

- line mask
- word stagger
- character reveal only when justified

## Image reveal

- clip-path
- scale
- directional reveal

## Parallax

Very subtle.

## Scramble

Use for technical metadata, not normal body copy.

## Hover transformation

Cards should not simply scale.

Instead:

- image moves
- text changes position
- metadata appears
- border reacts

---

# 15. Animation choreography

### Intro

0–1.2s:

- background appears
- logo/name settles

1.2–2.5s:

- hero typography enters

2.5–3.5s:

- metadata and CTA appear

Avoid splash screens that block content.

---

# 16. Scroll reveals

Default:

```text
opacity: 0 → 1
y: 30 → 0
```

But not every section should use this.

Alternative reveal patterns:

- clip-path
- horizontal slide
- scale
- masked typography
- image expansion
- line drawing

---

# 17. Visual rhythm

Alternate:

```text
dense
↓
minimal
↓
visual
↓
editorial
↓
technical
↓
human
```

This prevents animation fatigue.

---

# 18. Sound

Sound is optional.

If introduced:

- muted by default
- never autoplay aggressively
- tiny interaction sounds only
- user-controlled

V1 can remain silent.

---

# 19. Illustration direction

Illustrations should not be generic.

Create custom visual assets around:

- AI networks
- data flows
- system architecture
- maps
- terminal fragments
- abstract computation
- Cameroon / Yaoundé visual references

Use illustration to explain ideas, not decorate empty space.

---

# 20. Visual details that make the site premium

- 1px rules
- carefully aligned metadata
- consistent corner radii
- image crops with intent
- strong typographic contrast
- subtle noise texture
- responsive spacing
- hover states everywhere appropriate
- custom selection color
- polished loading states
- thoughtful empty states

The difference between "modern" and "premium" is usually attention to small details.

---

# 21. Mobile design rule

Mobile must not be the desktop site compressed.

The mobile version should have its own choreography.

For example:

Desktop:

> horizontal pinned project experience

Mobile:

> vertical narrative with image transformations

Desktop cursor effects become:

> tap / scroll / touch feedback

---

# 22. Accessibility

Animations must never be required to understand content.

Respect reduced motion.

Ensure:

- keyboard navigation
- focus indicators
- readable contrast
- semantic headings
- accessible buttons
- meaningful alt text

---

# 23. Design quality gate

Before implementation is considered finished, ask:

### Typography
Does the typography feel intentional?

### Layout
Could someone recognize the site from a screenshot?

### Motion
Does each animation have a reason?

### Content
Are we showing evidence instead of adjectives?

### Brand
Does this feel like Daniel?

### Engineering
Does the implementation feel as disciplined as the visual design?

If any answer is no, iterate.
