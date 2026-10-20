import { test, expect } from '@playwright/test';

// Decision 0025: security headers from public/_headers are sent, and the CSP blocks nothing the page needs.
const pages = ['/'];

for (const path of pages) {
  test(`${path} sends security headers and breaks no CSP rule`, async ({ page }) => {
    const violations: string[] = [];
    page.on(
      'console',
      (m) => /Content.Security.Policy/i.test(m.text()) && violations.push(m.text()),
    );
    const response = await page.goto(path);
    const headers = response!.headers();

    expect(headers['content-security-policy']).toContain("default-src 'none'");
    expect(headers['strict-transport-security']).toContain('max-age=');
    expect(headers['permissions-policy']).toBeTruthy();
    await page.waitForLoadState('networkidle');
    expect(violations).toEqual([]);
  });
}
