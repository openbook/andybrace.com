import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  bg: '#eceae4',
  text: '#1f1f21',
  // Lines, links and focus. ~5.8:1 on bg.
  accent: '#1a4bd6',
  // Block backgrounds only, with `text` on top. Both fail 3:1 on bg, so never use for lines.
  blockRed: '#ff5f54',
  blockGreen: '#94eb4c',
});

export const fonts = stylex.defineVars({
  sans: '"Outfit Variable", system-ui, sans-serif',
});

export const text = stylex.defineVars({
  small: '1rem',
  body: 'clamp(1.0625rem, 0.95rem + 0.5vw, 1.3125rem)',
  lede: 'clamp(1.375rem, 1.1rem + 1.2vw, 1.875rem)',
  display: 'clamp(2.75rem, 1.5rem + 5.5vw, 5.5rem)',
});

export const space = stylex.defineVars({
  gutter: 'clamp(1.25rem, 5vw, 4rem)',
  measure: '42rem',
});
