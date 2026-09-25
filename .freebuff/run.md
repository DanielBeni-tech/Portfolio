# Run doc — Daniel Beni Portfolio (Next.js 15)

## Reproduce artifacts (fresh checkout)
- No `.env*` files are used by this project — nothing to copy.
- Install dependencies with npm (project has `package-lock.json`):
  - `npm install`

## Run the server
- Dev server: `npm run dev` (Next.js default port 3000).
- Port 3000 was already occupied on this machine, so this thread's preview runs:
  - `node_modules/.bin/next dev -p 3001` → http://localhost:3001
- Start it detached (survives the agent session):
  - `{ nohup setsid node_modules/.bin/next dev -p 3001 > "<log>" 2>&1 < /dev/null & echo "pid=$!"; disown; }`
  - Verify with `pgrep -f "next dev -p 3001"` and `curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/` (expect 200; first compile takes ~10–15 s).
- Build for production: `npm run build` && `npm start`.
