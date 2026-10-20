# Contributing

This is a one-person site, but it runs the way a small team would run it, so an agent or a second developer can join without a handover.

## Workflow

1. Branch from `main`. Name the branch `<type>/<short-description>` in lowercase with hyphens, for example `feat/proof-section`. The types are the Conventional Commits ones:
   - `feat`: something new on the site
   - `fix`: a bug fix
   - `docs`: documentation and decision records only
   - `refactor`: a code change that doesn't change behaviour
   - `test`: tests only
   - `chore`: tooling, config, CI and dependencies
2. Make the change in small commits. Run `npm run verify` before each one.
3. Open a pull request with a short description of what changed, why, and anything a reviewer should check by hand. Screenshots help for visual changes.
4. CI runs `npm run verify`, plus the path and secret checks, on the pull request. It must pass before merging.
5. A human reviews and merges. Merging to `main` deploys to Cloudflare Pages.

## Using AI agents

Agents work on branches and follow [AGENTS.md](AGENTS.md). Whoever runs the agent reviews its diff before committing, owns what gets committed, and does the pushing. The pre-commit guard and the agent hook apply whether a person or an agent typed the command.

## Recording decisions

Decisions about content, design and code go in `docs/decisions/`, one file each. See [docs/decisions/README.md](docs/decisions/README.md).

## Accessibility

Automated checks catch only part of WCAG. Any change to layout, colour or interaction also needs the relevant manual checks in [ACCESSIBILITY.md](ACCESSIBILITY.md), with the result recorded there.
