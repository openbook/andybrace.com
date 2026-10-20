import { test, expect } from '@playwright/test';

// Unknown addresses get a real 404, not the home page with a 200.
test('an unknown address returns 404 with a link home', async ({ page }) => {
  const response = await page.goto('/no-such-page');
  expect(response!.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Page not found');
  await expect(page.getByRole('link', { name: 'Go to the home page' })).toHaveAttribute(
    'href',
    '/',
  );
});
