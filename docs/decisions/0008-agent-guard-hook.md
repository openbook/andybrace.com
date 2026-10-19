---
id: 0008
title: A Claude Code hook blocks agents from bypassing the guard or publishing
status: accepted
date: 2026-10-16
impact: medium
area: agents
related: [0004-pre-commit-guard]
supersedes:
superseded_by:
sources: []
---

# A Claude Code hook blocks agents from bypassing the guard or publishing

**Decision.** `.claude/hooks/guard.mjs` runs before every Claude Code tool call. It blocks `--no-verify` and `-n` on commits, changes to `core.hooksPath`, `git push`, creating or merging with `gh`, and reading the private denylist. A human pushes and merges.

**Why.** Permission rules that match one exact command, such as `Bash(git push:*)`, can be dodged by rewording it. The hook checks the whole command text for each action, which catches mistakes and casual workarounds.

**Consequences.** It still matches text, so deliberate obfuscation could get past it. AGENTS.md says so. The pre-commit guard and CI are the checks that count. The hook splits a command at `;`, `&&`, `|` and newlines and applies the git rules only to parts that start with `git`. A heredoc line starting with `git` still counts, so agents should write file content with the Write tool.
