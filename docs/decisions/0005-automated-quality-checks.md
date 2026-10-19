---
id: 0005
title: Lint, axe and Lighthouse budgets gate every change
status: accepted
date: 2026-10-16
impact: high
area: quality
related: [0006-markup-in-tsx]
supersedes:
superseded_by:
sources: ["https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/"]
---

# Lint, axe and Lighthouse budgets gate every change

**Decision.** `npm run verify` runs these in order, and every change must pass:
1. the type check
2. ESLint with the jsx-a11y strict rules and StyleX rules
3. axe in Playwright on desktop and mobile, failing on WCAG 2.2 A/AA and best-practice violations
4. a 320px reflow test
5. Lighthouse three times, with accessibility at 100 and performance, best practices and SEO at 95 or above

Manual checks are recorded in `ACCESSIBILITY.md`.

**Why.** Checks that run on every change catch regressions before they ship, and a failing check is harder to ignore than a guideline. Automated tools find only part of WCAG, so the manual checklist stays.

**Consequences.** Astro 7 runs `astro preview` in the background when it detects an agent. The Playwright config passes `--ignore-lock` to keep it in the foreground.
