import { test, expect } from '@playwright/test';

// Decision 0016: nothing runs in the visitor's browser and nothing is stored on their device.
// Covers the build only. Keep Cloudflare features that inject scripts at the edge turned off.
const pages = ['/'];

for (const path of pages) {
  test(`${path} loads no scripts and stores nothing`, async ({ page, context }) => {
    const scripts: string[] = [];
    page.on('request', (r) => r.resourceType() === 'script' && scripts.push(r.url()));
    await page.goto(path);
    await page.waitForLoadState('networkidle');

    expect(scripts).toEqual([]);
    expect(await page.locator('script').count()).toBe(0);
    expect(await context.cookies()).toEqual([]);
    expect(await page.evaluate(() => localStorage.length + sessionStorage.length)).toBe(0);
  });
}
