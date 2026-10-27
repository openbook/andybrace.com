---
id: 0025
title: Strict security headers in the repo, and automated dependency updates
status: superseded
date: 2026-10-19
impact: medium
area: quality
related: [0016-edge-stats-no-tracking-script, 0019-cloudflare-pages-hosting, 0023-everything-accessible-and-performant, 0024-ci-on-github-actions]
supersedes:
superseded_by: 0027-security-headers-zone-hsts-and-security-txt
sources: ["https://developers.cloudflare.com/pages/configuration/headers/", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP"]
---

# Strict security headers in the repo, and automated dependency updates

**Decision.**
- `public/_headers` sets HSTS, a Content-Security-Policy, Permissions-Policy, Referrer-Policy and `nosniff` on every page. `astro.config.mjs` applies the same file to `astro preview`, and `tests/headers.spec.ts` checks the headers are sent and the page breaks no CSP rule.
- The CSP allows only styles, fonts and images from the site itself. It allows no scripts, forms or framing.
- Astro writes CSS to a file instead of inlining it, so the CSP doesn't need `'unsafe-inline'`.
- Dependabot opens weekly PRs for npm packages and the pinned Actions, with alerts and security updates on. Security problems are reported privately, as `SECURITY.md` explains.

**Why.** The page loads no scripts, so a strict CSP costs nothing and turns that fact into a rule the browser enforces. Headers set in the repo are reviewed and tested like the code, where dashboard settings aren't. Pinned Actions don't update themselves, so Dependabot keeps the pins current through PRs that CI checks.

**Consequences.** A demo that needs a script, a map tile server or an embed has to widen the CSP in the same PR, and the header test shows the change. HSTS covers subdomains for a year, so any subdomain added later must serve HTTPS.
