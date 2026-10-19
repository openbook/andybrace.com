---
id: 0024
title: CI runs verify, path and secret checks; the denylist stays local
status: accepted
date: 2026-10-19
impact: medium
area: quality
related: [0004-pre-commit-guard, 0005-automated-quality-checks, 0017-public-repo, 0023-everything-accessible-and-performant]
supersedes:
superseded_by:
sources: ["https://github.com/gitleaks/gitleaks-action"]
---

# CI runs verify, path and secret checks; the denylist stays local

**Decision.** `.github/workflows/ci.yml` runs on every pull request and on `main`:
1. every tracked path checked against `.commit-allowlist`, using the same `scripts/check-paths.sh` as the pre-commit guard
2. gitleaks over the full history
3. `npm run verify`, with the Lighthouse report uploaded to a public link

The word denylist doesn't run in CI. Actions are pinned to commit SHAs.

**Why.** A local hook can be skipped, and CI can't. Each run also leaves a record of the checks passing on every change. The denylist stays local because CI logs are public and a failed match would print the name it was meant to hide. Pinning stops a moved tag from changing what runs.

**Consequences.** A commit that skipped the local hook can still carry a client name. That's a known gap, covered by reviewing the diff before pushing.
