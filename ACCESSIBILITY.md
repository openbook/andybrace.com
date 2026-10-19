# Accessibility

The target is WCAG 2.2 level AA.

## Automated checks

These run with `npm run verify` and fail the build when they don't pass.

- **ESLint** with the jsx-a11y strict rules on every `.tsx` component.
- **axe** in Playwright against the built page, on desktop and mobile, for WCAG 2.0 to 2.2 A and AA plus axe best practices.
- **Reflow.** The page must not scroll sideways at 320px wide (WCAG 1.4.10).
- **Lighthouse** must score 100 for accessibility.

Automated tools catch only part of WCAG. In a [2017 test by the UK Government Digital Service](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/), tools found between 17% and 41% of the 143 barriers on a deliberately inaccessible page. The manual checks below cover the rest.

## Manual checks

Record each run with the date, who ran it, what they tested on and the result. List any failure as a known gap until it's fixed.

| Check | How |
| --- | --- |
| Keyboard only | Tab through the page. Every link is reachable, the focus outline is always visible, and the order follows the reading order. |
| Screen reader | VoiceOver with Safari on macOS, and on iOS. Headings make sense as an outline, links make sense out of context, and nothing decorative is announced. |
| Zoom | 200% and 400% in the browser. Nothing overlaps, gets cut off or needs sideways scrolling. |
| Text spacing | Apply the WCAG 1.4.12 spacing overrides with a bookmarklet. No text is clipped. |
| Reduced motion | Turn on "Reduce motion". Nothing animates that shouldn't. |
| Colour | Check the page in greyscale. No information depends on colour alone. |

## Results

| Date | Who | Tested on | Result | Known gaps |
| --- | --- | --- | --- | --- |
| Not yet run | | | | |
