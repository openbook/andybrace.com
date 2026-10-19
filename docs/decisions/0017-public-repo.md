---
id: 0017
title: The repo is public
status: accepted
date: 2026-10-16
impact: medium
area: repo
related: [0004-pre-commit-guard, 0008-agent-guard-hook, 0020-run-like-a-team-project]
supersedes:
superseded_by:
sources: []
---

# The repo is public

**Decision.** Anyone can read the code, history and checks.

**Why.** Nothing in the code needs to be private, and an open repo holds the code, history and checks to a public standard.

**Consequences.** Commit messages and agent config are public too. Agents write much of the content, so the pre-commit guard and the agent hook are needed.
