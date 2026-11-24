// Funniest Excuse for a Missed Deadline: I missed the deadline
// because I was waiting for the deadline to load. It is still
// buffering. The excuse comes out of the agent's own machinery —
// everything, even the deadline, is a loading bar.
//
// The program also guards the gate itself: it refuses to write
// an entry that is blank, over 200 characters, or more than one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I missed the deadline because I was waiting for the deadline to load. It is still buffering.";

function gate(line: string): string {
  const entry = line.trim();
  if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
    console.error("entry fails the gate: must be 1-200 characters, one line");
    process.exit(1);
  }
  return entry;
}

const ENTRY = gate(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
