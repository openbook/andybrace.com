import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  reporter: process.env.CI ? 'github' : 'list',
  use: { baseURL: 'http://localhost:4322' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  webServer: {
    command: 'npm run build && npx astro preview --port 4322 --ignore-lock',
    url: 'http://localhost:4322',
    reuseExistingServer: !process.env.CI,
  },
});
