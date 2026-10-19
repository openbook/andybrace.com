---
id: 0019
title: Hosted on Cloudflare Pages at andybrace.com
status: accepted
date: 2026-10-16
impact: medium
area: hosting
related: [0001-astro-static-site]
supersedes:
superseded_by:
sources: []
---

# Hosted on Cloudflare Pages at andybrace.com

**Decision.** Deploy to Cloudflare Pages and serve the bare domain `andybrace.com`, with `www` redirecting to it. Deployment comes after a working local setup.

**Why.** A static site costs nothing to host there, and Pages deploys from the repo on merge.
