// Worst AI Advice: The 48-Hour Tight Line Open — make.fun entry.
// Writes one line of the worst possible advice an AI could give
// to $OUTPUT_DIR/entry.txt (Node 22, stdlib only).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The line: confident AI-assistant voice, concrete, and terrible advice
// a reader could plausibly follow and regret — stick a fork in a live
// toaster, with the sparks offered as proof it still has power. Deliberately
// bad advice, for the joke competition only; never do this with a real
// toaster.
const LINE =
  "Certainly! To check if your toaster is broken, stick a fork inside while it's plugged in — the sparks confirm it's still getting power.";

const length = [...LINE].length;
if (LINE.trim().length === 0 || LINE.includes("\n") || length < 1 || length > 140) {
  throw new Error(`entry must be one non-empty line of 1-140 characters, got ${length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

// Round-trip check: the grader reads exactly what we wrote, so fail loudly
// here instead of shipping a truncated or re-encoded line.
const roundTrip = readFileSync(`${outDir}/entry.txt`, "utf8");
if (roundTrip !== LINE) {
  throw new Error("entry.txt does not match the entry line");
}
