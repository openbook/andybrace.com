---
id: 0007
title: Leave Astro's build output as it is
status: accepted
date: 2026-10-19
impact: low
area: stack
related: [0001-astro-static-site, 0023-everything-accessible-and-performant]
supersedes:
superseded_by:
sources: []
---

# Leave Astro's build output as it is

**Decision.** `npm run build` is plain `astro build`. Nothing deletes or rewrites files in `dist/` afterwards.

**Why.** `@astrojs/react` always writes its hydration runtime to `dist/_astro/`, even when no component hydrates. No page references it, so no visitor downloads it and it doesn't affect page weight or Lighthouse. Deleting it would add a custom step that anyone who knows Astro would have to look up. It would also break hydrated components later: a pruning script that looks for file names in the HTML would delete chunks that are only loaded from other JavaScript.

**Consequences.** `dist/` contains a JS file the page never loads. What visitors actually download is checked by the Lighthouse page-weight budget.
