import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import stylex from '@stylexjs/unplugin';

export default defineConfig({
  site: 'https://andybrace.com',
  integrations: [react()],
  vite: {
    plugins: [stylex.vite({ useCSSLayers: true })],
  },
});
