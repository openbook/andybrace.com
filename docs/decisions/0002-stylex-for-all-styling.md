---
id: 0002
title: StyleX for all styling
status: accepted
date: 2026-10-16
impact: high
area: stack
related: [0001-astro-static-site, 0006-markup-in-tsx]
supersedes:
superseded_by:
sources: ["https://bytes.dev/archives/516", "https://github.com/facebook/stylex/tree/main/packages/@stylexjs/unplugin"]
---

# StyleX for all styling

**Decision.** Use StyleX for every component style, with design tokens defined in `src/styles/tokens.stylex.ts`. Plain CSS is limited to the font import and the `html` base in `global.css`.

**Why.** StyleX constrains how styles are written and merged: typed tokens, compile-time errors, and the last style applied wins. That suits a codebase where agents write much of the code, because there are fewer valid ways to do something and mistakes fail the build. The site is also a place to try new tools on something real but low-risk.

**Consequences.**
- `@stylexjs/unplugin` compiles styles in Vite. StyleX only compiles JS and TSX, so markup lives in `.tsx` (see 0006).
- In dev, the layout loads `/virtual:stylex.css`. In production, Astro inlines the compiled CSS into the page.
- StyleX hashes token names, so `global.css` can't reference them. It repeats the two base colours by hand.
- The StyleX lint rejects `paddingBlock: clamp(a, b, c)` as a multi-value shorthand, and its autofix removes the spaces inside `clamp()`. The CSS is still valid.
