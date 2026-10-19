import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import stylex from '@stylexjs/unplugin';

// Headers from the `/*` block of public/_headers, so `astro preview` serves what Pages serves.
const headers = Object.fromEntries(
  readFileSync('public/_headers', 'utf8')
    .split('\n')
    .filter((line) => /^\s+\S+:/.test(line))
    .map((line) => line.trim().split(/:\s(.*)/s).slice(0, 2)),
);

export default defineConfig({
  site: 'https://andybrace.com',
  integrations: [react()],
  // CSS as a file, not an inline <style>, so the CSP can allow styles from 'self' only.
  build: { inlineStylesheets: 'never' },
  server: { headers },
  vite: {
    plugins: [stylex.vite({ useCSSLayers: true })],
  },
});
