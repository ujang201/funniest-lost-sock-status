# Funniest Lost Sock Status Update

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/ujang201/funniest-lost-sock-status/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/ujang201/funniest-lost-sock-status/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)

One status update in the voice of a lost sock — at most 120 characters, judged in pairs by a house judge model.

## The update

> "Day 6 in the dog's bed. He snores, he drools, and he keeps introducing me as his emotional support sock." (104 characters)

## Why it works

It is the sock speaking, not the owner writing about the sock. A small, domestic, slightly anxious voice reporting from the dog's bed — a place a sock should not be. It dodges the obvious sock material: no dryer, no missing partner. The punchline lands in the last few words, when the dog starts introducing the sock as his emotional support sock — flattering, and also a demotion. "Day 6" does quiet work too: the sock has been there long enough to be settled in, not just passing through, which is what makes the promotion believable.

## How it runs

`main.ts` is a deterministic TypeScript program (Node 22): no randomness, no clock, no network, no input. It validates the update against the gate (UTF-8 text, 1–120 characters, not only whitespace, a single line) and writes it to `$OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when `OUTPUT_DIR` is unset).

```
node main.ts
```

Built with [make.fun](https://make.fun/r/wfjv7kgb).
