---
id: 0022
title: Move andybrace.com DNS to Cloudflare now; redirect openbook.uk.com after launch
status: accepted
date: 2026-10-16
impact: medium
area: hosting
related: [0019-cloudflare-pages-hosting]
supersedes:
superseded_by:
sources: []
---

# Move andybrace.com DNS to Cloudflare now; redirect openbook.uk.com after launch

**Decision.** Move the andybrace.com nameservers to Cloudflare so Pages can serve the bare domain. Point openbook.uk.com at andybrace.com only after launch.

**Why.** Cloudflare Pages can only serve a bare domain from a zone on Cloudflare. No email depends on andybrace.com, so moving it is low-risk. Email does run on openbook.uk.com, and moving its DNS means copying the MX, SPF and DKIM records exactly. A mistake there would break the address clients write to, so it waits until the launch is done.

**Consequences.** Nameserver changes can take hours to take effect, so start early.
