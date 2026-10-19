import { test, expect } from '@playwright/test';

// Decision 0023: every embed sits in a <figure> with a text equivalent in its <figcaption>.
// axe already checks image alt text and iframe titles.
const pages = ['/'];
const embeds = 'canvas, iframe, video, audio, object, embed';

for (const path of pages) {
  test(`${path} gives every embed a text equivalent`, async ({ page }) => {
    await page.goto(path);
    const missing = await page.$$eval(embeds, (els) =>
      els
        .filter((el) => !el.closest('figure')?.querySelector('figcaption')?.textContent?.trim())
        .map((el) => el.outerHTML.slice(0, 80)),
    );
    expect(missing).toEqual([]);
  });
}
