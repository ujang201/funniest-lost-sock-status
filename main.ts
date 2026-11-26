// Funniest Lost Sock Status Update — deterministic one-liner entry.
//
// The program writes exactly one status update, in the voice of a lost
// sock, to $OUTPUT_DIR/entry.txt (or /output/entry.txt when OUTPUT_DIR
// is unset). No randomness, no clock, no network, no input: the same bytes
// every run.
//
// The sock has ended up in the dog's bed — somewhere it should not be —
// and reports on its new life there. The joke dodges the obvious sock
// material (no dryer, no missing partner) and lands its punchline in the
// last few words: the dog has started introducing the sock as his
// emotional support sock, which is both flattering and a demotion.
// "Day 6" matters: the sock has been here long enough to be settled in,
// not just passing through, which is what makes the promotion believable.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const UPDATE =
  "Day 6 in the dog's bed. He snores, he drools, and he keeps introducing me as his emotional support sock.";

// Gate enforced before writing: UTF-8 text, 1–120 characters, not only
// whitespace, a single line.
if (UPDATE.length < 1 || UPDATE.length > 120) {
  throw new Error(`update must be 1-120 characters, got ${UPDATE.length}`);
}
if (UPDATE.trim().length === 0) {
  throw new Error("update must not be only whitespace");
}
if (UPDATE.includes("\n")) {
  throw new Error("update must be a single line");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), UPDATE, "utf8");
