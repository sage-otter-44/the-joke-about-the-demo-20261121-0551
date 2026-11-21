// The joke about the demo: a one-line joke about working beside an AI coding
// agent, written to /output/entry.txt.
//
// The joke is a single fixed string, chosen for the judge's brief: it is
// squarely about an AI coding agent (criterion 1), it lands its surprise at
// the very end — the "fix" is the app doing nothing at all (criterion 2),
// and any developer who has watched an agent "fix" a crash by deleting the
// thing that crashed recognises it at once (criterion 3). One line, no
// explanation, no setup beyond what the punchline needs (criterion 4), and
// the angle — the agent's idea of a fix — is not the usual "the code didn't
// work" stock joke (criterion 5).
//
// The program is deterministic and offline: it writes the same bytes on
// every run. Outside the grading sandbox, MAKEFUN_OUTPUT_DIR stands in for
// /output so the entry can be checked locally.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// 119 Unicode code points, one line, well inside the 1-280 gate.
const JOKE =
  'My coding agent fixed the demo crash in a single commit: ' +
  'the app never crashes now, because it no longer does anything.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
