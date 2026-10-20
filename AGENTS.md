## What the site is for

Anyone landing on the site should know within about 30 seconds what I do, who the site is for and how to get in touch with me. If a change doesn't help with that, it probably belongs after launch.

## Code

Follow [docs/coding-standards.md](docs/coding-standards.md): components and markup, styling, accessibility and formatting.

## Copy

- Page copy comes from signed-off text. Don't rewrite it or change its voice. If copy is missing, leave a clear placeholder and say so.
- **Never name a client.** Use the anonymous wording you're given. The pre-commit denylist will block names that slip through. Commit messages and PR descriptions are public too, and the denylist only checks file changes, so check them yourself.
- Write plainly. Avoid em dashes, filler and stock AI phrasing.
- Explain a choice by what it does for the code, the site or its visitors.

## Before you commit

1. Run `npm run verify`. It must pass.
2. Commit with a message that says what changed and why.
3. If the pre-commit guard blocks the commit, fix what it reports. If a new file legitimately needs to be public, add its path to `.commit-allowlist` and say so in the commit message.

## What agents can't do

`.claude/hooks/guard.mjs` runs before every Claude Code tool call. It blocks:

- skipping the pre-commit guard (`--no-verify`, `-n`, or changing `core.hooksPath`)
- `git push`, and creating or merging pull requests or releases with `gh`
- reading the private denylist

The hook matches on the command text, so it stops mistakes and casual workarounds but can't stop deliberate obfuscation. The pre-commit guard and CI do the actual checking. A human pushes and merges.

## Decisions

When you make a choice about content, design or code that someone would later ask "why?" about, add a file to `docs/decisions/`. The format is in [docs/decisions/README.md](docs/decisions/README.md). Never rewrite an accepted decision. To change one, write a new file that supersedes it.
