---
id: 0013
title: Cobalt is the only line colour; red and green are occasional blocks
status: accepted
date: 2026-10-16
impact: medium
area: design
related: [0012-outfit-only-self-hosted, 0014-no-dark-mode-at-launch]
supersedes:
superseded_by:
sources: []
---

# Cobalt is the only line colour; red and green are occasional blocks

**Decision.**
- Text `#1f1f21` on a warm off-white `#eceae4`.
- Cobalt `#1a4bd6` for every link underline, rule and focus outline.
- Red `#ff5f54` and green `#94eb4c` only as block backgrounds with near-black text, used sparingly.

**Why.** The page is carried by type, and colour is an accent. Cobalt has about 5.8:1 contrast on the background, so it passes everywhere. Red and green are under 3:1 on the background, so they can't be used for lines (WCAG 1.4.11). Near-black text on either passes. People with the most common colour blindness confuse red and green, so the difference between them never carries meaning (WCAG 1.4.1).
