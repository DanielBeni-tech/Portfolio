---
name: Daniel Beni Portfolio
description: Night lab portfolio — intelligent software, products, communities
colors:
  ink: "#050505"
  surface: "#0B0B0C"
  elevated: "#121214"
  paper: "#F5F5F5"
  muted: "#B4B4B6"
  signal: "#3B82F6"
  lamp: "#F59E0B"
  live: "#3DD68C"
  community-ground: "#100C07"
  community-panel: "#16100A"
  community-text: "#D7C4A3"
typography:
  display:
    fontFamily: "Satoshi, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Satoshi, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(2.6rem, 7.4vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Satoshi, Avenir Next, Segoe UI, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Satoshi, Avenir Next, Segoe UI, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "0.46875rem"
  md: "0.625rem"
spacing:
  page: "clamp(20px, 4vw, 72px)"
  section: "clamp(80px, 12vh, 140px)"
components:
  button-primary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 18px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
  badge:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 8px"
    height: "26px"
---

# Design System: Daniel Beni Portfolio

## Overview

**Creative North Star: "Night operations room in Yaoundé"**

The site is a dark instrument panel, not a cream editorial CV and not a neon AI landing page. Hairline rules, Satoshi at architectural scale, and one electric-blue signal per moment. Mono exists only for coordinates, status, and the HUGO console.

The community band shifts to lamp-warm ground so the human work has a different climate than the systems work.

**Key Characteristics:**
- Ink fields with 1px rules
- One accent at a time (signal blue, then amber)
- Display type max 6rem, tracking floor -0.04em
- Evidence before adjectives
- Motion on transform only; content stays visible without it

## Colors

Ink is the room. Signal blue is a status LED, not a wash. Amber appears only in the community climate.

### Primary
- **Signal blue** (#3B82F6): the word *intelligents*, the AI node, primary hover, focus ring.

### Secondary
- **Lamp amber** (#F59E0B): community climate only.

### Neutral
- **Ink** (#050505), **surface** (#0B0B0C), **paper** (#F5F5F5), **muted** (#B4B4B6).

## Typography

Satoshi carries identity. IBM Plex Mono carries measurement. Body sits at 18px / 1.55. Display never exceeds 6rem.

## Layout

Asymmetric 12-ish desktop columns, page gutter `clamp(20px, 4vw, 72px)`. Featured work is a 1.4 / 0.6 split, not a trio of equal cards. Below 900px everything stacks; the menu becomes a full-screen sheet.

## Elevation & Depth

Mostly flat tonal layers. No offset block shadows. The system map and work visuals sit on `#0B0B0C` with a 1px border. A 4.5% noise film sits above the page.

## Shapes

Radius 0.625rem (sm ≈ 75%). Instrument rectangles on the map use a 2px radius. Rules are 1px, never a colored 4px side bar.

## Components

- **Button:** paper on ink, mono uppercase, hovers to signal blue.
- **Badge:** hairline chip for stack and status.
- **Build list:** full-width rows, one open at a time.
- **HUGO:** two-pane console, no chat bubbles.
- **Sheet:** full-viewport mobile nav, display type links.

## Do's and Don'ts

**Do:** keep content readable without motion; use real project names; reserve amber for community.

**Don't:** invent metrics; purple AI gradients; skill bars; equal project cards; cream + Space Grotesk; Geist as display; kicker-above-heading chrome; LinkedIn until a real URL exists.
