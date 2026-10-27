import { test, expect } from '@playwright/test';

// RFC 9116: security.txt must carry a Contact and an Expires date that hasn't passed. Failing a
// month early leaves time to renew it before the daily live run would serve an expired file.
const renewWithinDays = 30;

test('security.txt is served with a contact and an expiry more than a month away', async ({
  request,
}) => {
  const response = await request.get('/.well-known/security.txt');
  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('text/plain');

  const body = await response.text();
  expect(body).toMatch(/^Contact: https:\/\//m);

  const expires = Date.parse(body.match(/^Expires: (.+)$/m)?.[1] ?? '');
  const daysLeft = (expires - Date.now()) / 86_400_000;
  expect(daysLeft, 'Expires in public/.well-known/security.txt').toBeGreaterThan(renewWithinDays);
});
