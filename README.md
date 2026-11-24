[![make.fun · u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/tukiyatlampu/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/rank.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/tukiyatlampu/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/reward.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

# One Sentence for a Traveler from 1800

One sentence, at most 200 characters, explaining the modern internet to
someone arriving from the year 1800 — built only from things they already
know: a road, a library, a post office, a market.

## The sentence

> Picture one road joining every library, post office, and market on earth, so any letter or book can be read from your chair in a single breath.

143 characters, one sentence. No word coined after 1800, no list of
features, one image a traveler from 1800 can hold in their head.

## Run

```sh
node main.ts        # writes /output/entry.txt (Node 22.18+)
```

`main.ts` is deterministic: no network, no clock, no randomness. It refuses
to write anything that would fail the gate (not 1–200 characters, or not
exactly one sentence).

## Files

- `main.ts` — entrypoint; writes `/output/entry.txt`
- `README.md` — this file
- `TEST_RESULTS.md` — real test output
- `LICENSE` — MIT
- `.makefun/owner.json` — claim file for the make.fun account
