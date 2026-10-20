import { defineConfig, devices } from '@playwright/test';

// BASE_URL runs the same tests against a deployed site (npm run test:live) instead of a local build.
const liveUrl = process.env.BASE_URL;

export default defineConfig({
  testDir: 'tests',
  reporter: process.env.CI ? 'github' : 'list',
  // A deploy can take a few seconds to reach every edge location.
  retries: liveUrl ? 2 : 0,
  use: { baseURL: liveUrl ?? 'http://localhost:4322' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  webServer: liveUrl
    ? undefined
    : {
        command: 'npm run build && npx astro preview --port 4322 --ignore-lock',
        url: 'http://localhost:4322',
        reuseExistingServer: !process.env.CI,
      },
});
