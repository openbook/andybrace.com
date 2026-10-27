---
id: 0027
title: Strict security headers in the repo, HSTS also at the Cloudflare zone, a security.txt, and Bot Fight Mode off
status: accepted
date: 2026-10-27
impact: medium
area: quality
related: [0011-contact-email-and-linkedin, 0019-cloudflare-pages-hosting, 0024-ci-on-github-actions, 0026-check-the-live-site]
supersedes: 0025-security-headers-and-dependency-updates
superseded_by:
sources: ["https://developers.cloudflare.com/pages/configuration/headers/", "https://developers.cloudflare.com/ssl/edge-certificates/additional-options/http-strict-transport-security/", "https://developers.cloudflare.com/bots/get-started/bot-fight-mode/", "https://www.rfc-editor.org/rfc/rfc9116"]
---

# Strict security headers in the repo, HSTS also at the Cloudflare zone, a security.txt, and Bot Fight Mode off

**Decision.**
- `public/_headers` sets HSTS, a Content-Security-Policy, Permissions-Policy, Referrer-Policy and `nosniff` on every page. `astro.config.mjs` applies the same file to `astro preview`, and `tests/headers.spec.ts` checks the headers are sent and the page breaks no CSP rule.
- The CSP allows only styles, fonts and images from the site itself. It allows no scripts, forms or framing. Astro writes CSS to a file instead of inlining it, so the CSP doesn't need `'unsafe-inline'`.
- HSTS is also on in Cloudflare's zone settings: 6 months, `includeSubDomains`, no preload, plus `nosniff`. `_headers` uses the same values. `tests/edge.spec.ts` checks the `www` redirect sends HSTS on the live site.
- `public/.well-known/security.txt` (RFC 9116) points to GitHub's private vulnerability reporting, as `SECURITY.md` does. `tests/security-txt.spec.ts` fails 30 days before it expires.
- Bot Fight Mode stays off.
- Dependabot opens weekly PRs for npm packages and the pinned Actions, with alerts and security updates on.

This replaces 0025, which set HSTS in `_headers` only, for a year.

**Why.**
- The page loads no scripts, so a strict CSP costs nothing and turns that fact into a rule the browser enforces. Headers set in the repo are reviewed and tested like the code, where dashboard settings aren't.
- Cloudflare answers the `www` to `andybrace.com` redirect itself, before Pages, so headers from `_headers` never reach it. A first visit typed as `www` could be downgraded to plain HTTP. HSTS can only cover that redirect from the zone settings. On pages, the zone header replaces the one from `_headers`, so the live value is the dashboard's. 6 months is Cloudflare's recommended value. A year only matters for the preload list, and preload stays off because it's hard to undo.
- security.txt puts the reporting route at the path scanners and researchers check first.
- On the free plan, Bot Fight Mode injects Cloudflare's JavaScript detections into every page, and they can't be turned off. The CSP would block them, and the live page would differ from the build: the same failure as email obfuscation in 0026. It also can't be skipped with WAF rules, so it would likely challenge the GitHub Actions runners that test the live site. The site has no forms, logins or API for bots to abuse.
- Pinned Actions don't update themselves, so Dependabot keeps the pins current through PRs that CI checks.

**Consequences.**
- HSTS now lives in two places. Change the zone setting and `_headers` together. The live check shows if the zone setting is switched off, but not if its values drift from `_headers`.
- HSTS covers subdomains for 6 months, so any subdomain must serve HTTPS. That includes a grey-clouded DNS record someone might open in a browser.
- security.txt needs a new `Expires` date each year.
- Cloudflare will keep flagging Bot Fight Mode as a security insight. Dismiss it.
- A demo that needs a script, a map tile server or an embed has to widen the CSP in the same PR, and the header test shows the change.
