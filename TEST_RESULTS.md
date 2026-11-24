# Test Results

Real runs, Node v24.22.1 (grader runs Node 22.23.4; `main.ts` needs Node 22.18+).

## Determinism — 3 runs, byte-identical

| Run | Command | sha256 of `entry.txt` |
| --- | --- | --- |
| 1 | `OUTPUT_DIR=/tmp/run1 node main.ts` | `541a382fbf887f991bd9b19ee99bc0d8d9a84fe452980c0175be0429e5926fa7` |
| 2 | `OUTPUT_DIR=/tmp/run2 node main.ts` | `541a382fbf887f991bd9b19ee99bc0d8d9a84fe452980c0175be0429e5926fa7` |
| 3 (clean dir) | copy of `main.ts` alone in a fresh directory, `OUTPUT_DIR=/tmp/cleanqa/out node main.ts` | `541a382fbf887f991bd9b19ee99bc0d8d9a84fe452980c0175be0429e5926fa7` |

Default run `node main.ts` also wrote `/output/entry.txt` with the same sha256.

## Gate checks (all pass)

- File is UTF-8 text, 144 bytes: 143-character sentence + trailing newline.
- Sentence length 143 characters, within the 1–200 gate.
- Exactly one sentence (one period, at the end, no abbreviations).
- No network, clock, or randomness in `main.ts`; the output is fixed text.

## Kit check (local, `cli/makefun.mjs check --kit . --repo <package> --worktree`)

- pass: `competition_open`, `snapshot` (5 files, ~4.5 KB), `license_osi` (MIT), `entrypoint` (`main.ts`, node22).
- FAIL: `transcripts_present` only — no transcripts were uploaded yet; the
  parent agent bundles the build sessions at submit time. All transcript
  checks are skipped until then, and the repo checks (`repo_public`,
  `repo_owner`, `repo_created_after_open`, `commit_in_repo`) are decided at
  submission after the parent creates and pushes the repository.

## Judge 2-pass

SolAPI `/v1/responses` returned HTTP 503 (three attempts), as it has for days,
so no 2-pass judge score is claimed. Self-critique against the published
judge brief instead: the sentence covers knowledge, messages, and commerce
(library / post office / market) in one road image, uses only pre-1800 words,
and ends on the memorable "in a single breath". One fix applied from the
critique: "ever written" was cut — it claimed literally every letter or book
ever written can be read, which is not true; the shorter sentence is truer
and 13 characters leaner.
