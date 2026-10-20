# Coding standards

How code in this repo is written. They apply to people and agents alike. `npm run verify` checks the ones a tool can check; a reviewer checks the rest.

## Components and markup

- **All markup goes in `.tsx` components** in `src/components/`. StyleX only compiles JS and TSX, and the accessibility lint only covers `.tsx`. Files in `src/pages/` and `src/layouts/` stay thin.
- **Copy lives in the component that shows it,** written inline in the markup. Don't pass page copy in as props or keep it in a separate file. The one exception is the one-liner, which the page passes to both the hero and the meta description.
- **No client-side JavaScript.** Components render to static HTML. Don't add a `client:*` directive without a decision record saying why.

## Styling

- **Style with StyleX and the tokens** in `src/styles/tokens.stylex.ts`. Don't write raw colours, font sizes or spacing in a component. If a value is missing, add a token. `global.css` holds only the font import and the `html` base.
- **Don't repeat a style block; make it a component.** If a group of styles would appear in a second component, move it into one. `Column` is the page column and `Link` is every text link, with its focus style. Pass extra styles through `xstyle`.
- **Colour.** Cobalt (`colors.accent`) is for links, rules and focus outlines. Red and green are for block backgrounds only, with near-black text on top. Both fail 3:1 contrast on the page background, so never use them for lines or text.

## Accessibility and performance

- **The target is WCAG 2.2 AA.** Use semantic HTML first. Every interactive element needs a visible focus style.
- **No exceptions for rich content.** Images, demos, maps and video need a text equivalent, load only when the reader asks, and keep the page inside its budgets. If the checks don't cover a new kind of content, add a check first. See [decision 0023](decisions/0023-everything-accessible-and-performant.md).

## Formatting

- **Prettier formats the code** (`.prettierrc.json`): single quotes, 100-character lines, trailing commas. Run `npm run format` to fix files; `npm run verify` fails if anything is unformatted.
- **ESLint checks correctness, not layout.** `eslint-config-prettier` turns off the lint rules that would disagree with Prettier.
- **Markdown isn't formatted.** It's prose, and decision records are never rewritten.
- **`.editorconfig`** sets UTF-8, LF line endings, two-space indents and a final newline for any editor.
