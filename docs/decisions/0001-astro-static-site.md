---
id: 0001
title: Astro, static output, no client JavaScript
status: accepted
date: 2026-10-16
impact: high
area: stack
related: [0002-stylex-for-all-styling, 0007-keep-astro-build-output]
supersedes:
superseded_by:
sources: []
---

# Astro, static output, no client JavaScript

**Decision.** Build with Astro as a static site. Components render to HTML at build time and nothing hydrates in the browser.

**Why.** The site is one page of text that will grow to a few pages and some Markdown posts. Astro ships no JavaScript unless asked to, and adding a page means adding a file.
