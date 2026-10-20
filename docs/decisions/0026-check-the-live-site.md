---
id: 0026
title: Run the browser tests against the live site after each deploy
status: accepted
date: 2026-10-20
impact: medium
area: quality
related: [0011-contact-email-and-linkedin, 0016-edge-stats-no-tracking-script, 0024-ci-on-github-actions, 0025-security-headers-and-dependency-updates]
supersedes:
superseded_by:
sources: ["https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#check_run"]
---

# Run the browser tests against the live site after each deploy

**Decision.** `.github/workflows/live.yml` runs the Playwright tests against https://andybrace.com when Cloudflare Pages finishes deploying `main`, once a day, and on demand. `tests/edge.spec.ts` adds a check that the page has no Cloudflare edge rewrites. Lighthouse stays local, where results don't depend on the network.

**Why.** CI tests the build, but visitors get what Cloudflare serves. Cloudflare's email obfuscation was switched on, against decision 0011, and replaced the address with a placeholder and a decode script that the CSP blocked. No check failed, because none looked at the live page. The daily run catches dashboard changes that don't come with a deploy.

**Consequences.** A failure here means the live site differs from the build, so the fix is usually a Cloudflare setting, not code. Live runs retry twice, since a deploy takes a few seconds to reach every edge location.
