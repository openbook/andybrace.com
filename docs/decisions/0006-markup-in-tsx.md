---
id: 0006
title: All markup in .tsx components; .astro files stay thin
status: accepted
date: 2026-10-16
impact: medium
area: quality
related: [0002-stylex-for-all-styling, 0005-automated-quality-checks]
supersedes:
superseded_by:
sources: []
---

# All markup in .tsx components; .astro files stay thin

**Decision.** Put all page markup in `.tsx` components. `.astro` pages and layouts only pass data in and hold the HTML document.

**Why.** StyleX doesn't compile `.astro` files. The accessibility lint for `.astro` doesn't run either: eslint-plugin-astro 3.2.1 only loads the original `eslint-plugin-jsx-a11y`, which doesn't support ESLint 10, so its jsx-a11y preset does nothing. Keeping markup in `.tsx` means both StyleX and the accessibility lint cover all of it. axe still checks the rendered HTML from both kinds of file.
