// News-image entry (Node 22, standard library only): the image is the entry.png
// beside this file, and the program copies it to the output directory as
// entry.png. The grader runs with no network, so the image is shipped in the
// repository and copied, not fetched or drawn at run time.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true }); // the grader's /output exists; this only helps a local run without mkdir -p
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
