import { test, expect } from '@playwright/test';

// Cloudflare can rewrite pages at its edge, for example email obfuscation, which swaps the
// address for a placeholder and injects a decode script the CSP blocks. Run against the live
// site (npm run test:live), this checks visitors get the page as built.
test('the page is served without edge rewrites', async ({ page }) => {
  const response = await page.goto('/');
  const html = await response!.text();

  expect(html).not.toContain('/cdn-cgi/');
  expect(html).not.toContain('__cf_email__');
  await expect(page.locator('#contact a[href^="mailto:"]')).toHaveText('contact@openbook.uk.com');
});
