import { test, expect } from '@playwright/test';

// The hero's "Get in touch" link must land on a real contact section.
test('the hero link reaches the contact details', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '#contact');

  const contact = page.locator('#contact');
  await expect(contact.getByRole('heading', { level: 2 })).toHaveText('Get in touch');
  await expect(contact.getByRole('link', { name: 'contact@openbook.uk.com' })).toHaveAttribute(
    'href',
    'mailto:contact@openbook.uk.com',
  );
  await expect(contact.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/andrewbrace',
  );
  await expect(contact.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
    'href',
    'https://github.com/openbook',
  );
});
