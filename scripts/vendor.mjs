import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dest = join(root, "js", "vendor");
mkdirSync(dest, { recursive: true });

const files = [
  ["node_modules/gsap/dist/gsap.min.js", "gsap.min.js"],
  ["node_modules/gsap/dist/ScrollTrigger.min.js", "ScrollTrigger.min.js"],
  ["node_modules/lenis/dist/lenis.min.js", "lenis.min.js"],
  ["node_modules/split-type/umd/index.min.js", "split-type.min.js"],
];

for (const [from, to] of files) {
  const source = join(root, from);
  if (!existsSync(source)) {
    throw new Error(`Missing ${from}. Run npm install first.`);
  }
  copyFileSync(source, join(dest, to));
  console.log(`vendored ${to}`);
}
