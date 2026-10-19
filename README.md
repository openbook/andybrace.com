# andybrace.com

Source for andybrace.com, Andy Brace's personal site.

It's one static page, built with Astro and styled with StyleX. The page ships no JavaScript and sets no cookies.

## Getting started

You need Node 24 or later and [gitleaks](https://github.com/gitleaks/gitleaks) (`brew install gitleaks`).

```sh
npm install                      # installs dependencies and turns on the git hooks
npx playwright install chromium  # once, for the accessibility tests
npm run dev                      # http://localhost:4321
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload. |
| `npm run build` | Static build into `dist/`. |
| `npm run preview` | Serves `dist/` locally. |
| `npm run check` | Astro and TypeScript type check. |
| `npm run lint` | ESLint, including accessibility rules for `.tsx` and StyleX rules. |
| `npm run test:a11y` | Builds, then runs the Playwright tests on desktop and mobile: axe, 320px reflow, embed captions, no scripts or cookies, and security headers. |
| `npm run test:lighthouse` | Builds, then runs Lighthouse three times against budgets. |
| `npm run verify` | All of the above in order. Run it before every commit. |

## How the claims are checked

The site says it's accessible and fast. Each claim has a check, and `npm run verify` runs all the automated ones.

| Claim | Check | Where |
| --- | --- | --- |
| Meets WCAG 2.2 AA | axe on desktop and mobile | `tests/a11y.spec.ts` |
| Components use accessible markup | ESLint jsx-a11y strict rules | `eslint.config.js` |
| Works at 320px wide | Reflow test | `tests/a11y.spec.ts` |
| Images, demos and maps have a text equivalent | Image alt (axe), embed captions | `tests/a11y.spec.ts`, `tests/media.spec.ts` |
| Fast first load | Lighthouse 95+ and under 100 KB | `lighthouserc.cjs` |
| No JavaScript, cookies or browser storage | Script requests, cookies and storage checked | `tests/privacy.spec.ts` |
| Browser enforces it: no scripts, framing or forms | Security headers sent, no CSP violations | `public/_headers`, `tests/headers.spec.ts` |
| Dependencies stay current | Weekly Dependabot PRs, checked by CI | `.github/dependabot.yml` |
| Keyboard, screen reader, zoom | Manual, with results logged | `ACCESSIBILITY.md` |

Why each check exists is in `docs/decisions/`, starting with 0005 and 0023.

## Where things are

```
src/
  pages/        One .astro file per route. Thin shells: data in, components out.
  layouts/      The HTML document: head, meta, fonts.
  components/   All markup, as .tsx with StyleX. Rendered to static HTML at build time.
  styles/       tokens.stylex.ts (colours, type scale, spacing) and a small global.css.
public/         Files served as they are, such as the favicon.
tests/          Playwright tests.
scripts/        Repo helpers, such as the path allowlist check.
docs/decisions/ Decisions about content, design and code, one file each.
.githooks/      The pre-commit guard.
.claude/        Agent rules, enforced by a hook.
```

## Working on it

[AGENTS.md](AGENTS.md) has the rules for anyone changing the code, person or agent. [CONTRIBUTING.md](CONTRIBUTING.md) covers the workflow. [ACCESSIBILITY.md](ACCESSIBILITY.md) records the accessibility target and the manual checks. [SECURITY.md](SECURITY.md) explains how to report a security problem.

## What gets committed, and how that's checked

This repo is public, and AI agents write much of the code and copy in it. Every commit goes through a pre-commit hook (`.githooks/pre-commit`), which blocks the commit if any of these checks fail.

1. **Path allowlist.** You can only commit paths listed in `.commit-allowlist`. The hook blocks everything else, so a stray working note, an agent's context file or editor config can't get in.
2. **Word denylist.** The hook checks added lines and file names for client names and phrases that aren't cleared for publication. The list lives outside the repo, because a public list of names I'm not naming would defeat the point. If the list is missing, the hook blocks the commit rather than skip the check.
3. **Secrets.** gitleaks scans the staged changes for API keys, tokens and private keys. A secret pushed to a public repo has to be rotated, so the hook stops it before the commit exists.

Client work on the site stays anonymous unless the client has agreed to be named.

Anyone can skip a local hook with `git commit --no-verify`. The agent rules in AGENTS.md block that for agents, and CI runs the path and secret checks again on every pull request, along with `npm run verify` ([decision 0024](docs/decisions/0024-ci-on-github-actions.md)). The client-name check runs only locally, because CI logs are public.
