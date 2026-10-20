import { test, expect } from '@playwright/test';

// Links show they respond to the pointer: the cobalt underline fills the link.
test('a link fills with cobalt on hover', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Touch screens have no hover.');
  await page.goto('/');
  const link = page.getByRole('link', { name: 'contact@openbook.uk.com' });
  const fill = () => link.evaluate((el) => getComputedStyle(el).backgroundSize);

  const before = await fill();
  await link.hover();
  await expect.poll(fill).not.toBe(before);
});

// The arrows are decorative, so link names stay as written.
test('arrows are left out of link names', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Get in touch', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'LinkedIn', exact: true })).toBeVisible();
});
