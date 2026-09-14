# Base44 Setup Notes

## Project Type
Next.js 15 + TypeScript + Tailwind CSS portfolio for Daniel Beni (AI Engineer · Software Builder · Community Builder).

## How It Runs
- `docker-compose.base44.yml` runs `node:22-alpine` with `next dev` on port 3000.
- Source is bind-mounted at `/app`; `node_modules` uses an anonymous volume.
- Dependencies install automatically on container start via `npm install`.
- Live reload is enabled (WATCHPACK_POLLING=true for bind-mount compatibility).

## Stack
- Next.js 15 (app router) + React 19 + TypeScript
- Tailwind CSS 3 with custom design tokens (dark editorial theme)
- GSAP installed for future motion work; V1 uses CSS animations + IntersectionObserver
- Fonts: Inter Tight (display) + JetBrains Mono (technical) via next/font/google

## Design System
- Background: #050505 (ink), Surface: #0B0B0C, Elevated: #121214
- Accents: #2563EB (blue), #F59E0B (orange)
- Custom cursor on desktop (pointer: fine), disabled on touch
- Scroll reveals via IntersectionObserver, respects prefers-reduced-motion

## Content
- All content in `src/content/` as typed TypeScript objects
- Profile, projects, experiments, community data
- Personal photos in `public/photos/`

## No External Secrets
No external services or credentials required.

## Verification
- `curl -s http://localhost:3000/ | head -5` should return HTML with "Daniel Beni" title.
- Preview should show dark editorial portfolio with hero, work, experiments, community, about, contact sections.
