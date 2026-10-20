import { test, expect } from '@playwright/test';

// Page order from decision 0010: the reader's problem first, contact last.
test('sections appear in the agreed order', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('main h2')).toHaveText([
    'How I can help',
    'What I bring',
    'How I work with AI',
    'Where I do my best work',
    'Get in touch',
  ]);
});
