// One Sentence for a Traveler from 1800.
//
// Writes a single sentence (at most 200 characters) that explains the
// modern internet to a person from 1800, using only words and images
// they would know: a road, a library, a post office, a market.
// Deterministic: no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

const SENTENCE =
  "Picture one road joining every library, post office, and market on earth, so any letter or book can be read from your chair in a single breath.";

// Gate guard: the sealed scorer only judges UTF-8 text of 1-200
// characters holding exactly one sentence, so refuse to write anything
// that would fail the gate instead of shipping it silently.
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`sentence is ${SENTENCE.length} characters, must be 1-200`);
}
if (SENTENCE.split(".").filter((part) => part.trim().length > 0).length !== 1) {
  throw new Error("sentence must be exactly one sentence");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), SENTENCE + "\n", "utf8");
