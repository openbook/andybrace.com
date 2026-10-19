---
id: 0016
title: Visit counts from Cloudflare's edge, no script in the browser
status: accepted
date: 2026-10-19
impact: low
area: measurement
related: [0015-hypothesis-and-five-second-test, 0019-cloudflare-pages-hosting, 0023-everything-accessible-and-performant]
supersedes:
superseded_by:
sources: ["https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/"]
---

# Visit counts from Cloudflare's edge, no script in the browser

**Decision.** Count visits with the traffic stats Cloudflare already keeps for the domain. Don't turn on Cloudflare Web Analytics or any other script that runs in the visitor's browser.

**Why.** Nothing is stored on or read from a visitor's device, so there's nothing to ask consent for. UK PECR covers scripts and pixels, not only cookies, so a cookieless beacon still raises the question. The live page also stays the same as the build the tests check. The cost is less detail, probably no referrers. The 5-second test, not analytics, is what tells me whether the page works.

**Consequences.** Web Analytics' automatic setup in the Cloudflare dashboard injects a script at the edge, so it stays off. Cloudflare still sees visitors' IP addresses in its request logs.
