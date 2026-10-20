# Decisions

Decisions that materially affect how this site works or looks, one file each, named `NNNN-slug.md`. The title states what was decided.

Record a decision when it materially affects how the site works or looks: the stack, hosting, quality checks, security, privacy, accessibility approach or visual design system such as type and colour. Content choices such as wording, headings, section names or which links appear don't need one.

## Rules

- Never rewrite an accepted decision. To change one, add a new file with `supersedes:`, then set the old file's `status` to `superseded` and fill in `superseded_by`. Fixing a typo is fine.
- Keep it short. Say what was decided and why, and add consequences when they aren't obvious.
- A decision records a choice already made. Planned work is tracked outside this repo.

## Frontmatter

```yaml
id: 0002
title: StyleX for all styling
status: proposed | accepted | superseded | rejected
date: 2026-10-16
impact: high | medium | low   # how hard it is to undo, and how much else depends on it
area: scope | content | design | measurement | plan | hosting | stack | quality | repo | agents
related: [0001-astro-static-site]
supersedes:
superseded_by:
sources: []
```
