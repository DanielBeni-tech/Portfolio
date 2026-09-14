# Base44 Setup Notes

## Project Type
Static HTML/CSS/JS portfolio website (Daniel Beni). No build step, no backend, no database.

## How It Runs
Served by `nginx:alpine` via `docker-compose.base44.yml` on port 3000. Source is bind-mounted read-only at `/usr/share/nginx/html`. Edits to HTML/CSS/JS are reflected immediately on refresh — no rebuild needed.

## SCSS
SCSS source lives in `scss/` but is already compiled to `css/styles.css`. No live SCSS compilation is configured; edit the compiled CSS directly or compile SCSS manually if needed.

## No External Secrets
No external services or credentials required.

## Verification
- `curl -s http://localhost:3000/ | head -5` should return the HTML doctype and title.
- Preview should show the portfolio landing page with video background.
