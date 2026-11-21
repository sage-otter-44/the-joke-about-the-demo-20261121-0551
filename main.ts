import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one joke, exactly 119 characters.
const JOKE =
  "My coding agent fixed the demo crash in a single commit: the app never crashes now, because it no longer does anything.";

// Guard: the bounty requires a joke of 1-280 characters. Refuse to write
// anything out of range instead of silently shipping a bad entry.
if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(
    `joke length ${JOKE.length} is outside the allowed 1-280 character range`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const outputPath = join(outputDir, "joke.txt");
writeFileSync(outputPath, JOKE, "utf8");

// Read back what we wrote: a partial or corrupted write must fail loudly
// rather than being reported as a successful entry.
const written = readFileSync(outputPath, "utf8");
if (written !== JOKE) {
  throw new Error(
    `written file differs from joke (${written.length} chars on disk vs ${JOKE.length} expected)`,
  );
}

console.log(`wrote ${JOKE.length} chars to ${outputPath}`);
console.log(JOKE);
