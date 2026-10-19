---
id: 0023
title: Everything on the site is accessible and fast, including demos
status: accepted
date: 2026-10-19
impact: high
area: quality
related: [0005-automated-quality-checks, 0007-keep-astro-build-output, 0017-public-repo]
supersedes:
superseded_by:
sources: []
---

# Everything on the site is accessible and fast, including demos

**Decision.** No exceptions for rich content. Anything that isn't plain text, such as an image, a 3D demo, a map or a video, follows these rules:

1. **Text equivalent.** Images have `alt` text. Canvas, iframe, video and other embeds sit in a `<figure>` whose `<figcaption>` gives the same information as text, or links to a page that does.
2. **Loads on request.** A heavy embed doesn't load with the page. The reader starts it, and the page reads in full without it.
3. **Same budgets.** The first load stays under the Lighthouse scores in 0005 and a 100 KB page-weight budget.
4. **Each rule has a check.** README's "How the claims are checked" table maps every claim to the check that proves it. A new kind of content that the checks don't cover needs a new check before it ships.

**Why.** The site says I build things that work for everyone. If a demo on the site fails a screen reader or slows the page, the site contradicts its own claim.

**Consequences.** Any client-side JavaScript for a demo still needs its own decision record, as AGENTS.md requires. `tests/media.spec.ts` checks rule 1 and Lighthouse checks rule 3. Rule 2 is reviewed by hand until a demo exists to test against.
