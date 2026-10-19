---
id: 0004
title: Pre-commit guard with path allowlist, word denylist and gitleaks
status: accepted
date: 2026-10-16
impact: high
area: repo
related: [0008-agent-guard-hook]
supersedes:
superseded_by:
sources: ["https://github.com/gitleaks/gitleaks"]
---

# Pre-commit guard with path allowlist, word denylist and gitleaks

**Decision.** `.githooks/pre-commit` blocks a commit when any of these fail:
- a staged path isn't in `.commit-allowlist`
- an added line or file name contains a word from a denylist kept outside the repo
- gitleaks finds a secret in the staged changes

If the denylist is missing, the hook fails the commit. `npm install` turns the hook on through the `prepare` script.

**Why.** The repo is public and agents write much of its content. An allowlist fails closed: a new, unexpected file is blocked until someone decides it should be public. A secret or a client name, once pushed, can't be taken back.
