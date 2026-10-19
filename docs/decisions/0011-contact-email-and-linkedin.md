---
id: 0011
title: Contact by visible email and LinkedIn, no form
status: accepted
date: 2026-10-16
impact: medium
area: content
related: [0010-page-order-problem-first]
supersedes:
superseded_by:
sources: []
---

# Contact by visible email and LinkedIn, no form

**Decision.** Show the email address as visible text that's also a `mailto:` link, plus a LinkedIn link. No contact form and no phone number. A booking link can come later. Cloudflare's email obfuscation stays off.

**Why.** A form needs a backend and spam handling. A visible address still works for someone with no mail client set up, because they can copy it.

Obfuscation protects little here. The address is already public through LinkedIn and every email sent from it, Cloudflare's encoding is well known and easy to reverse, and a scraper that runs a full browser decodes it like any visitor. The spam filter does the real work. Against that, an obfuscated address shows as `[email protected]` until a script runs, is harder to copy, and makes the live page differ from the build the tests check.
