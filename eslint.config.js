import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y-x';
import stylex from '@stylexjs/eslint-plugin';
import prettier from 'eslint-config-prettier';

export default [
  { ignores: ['dist/', '.astro/', '.lighthouseci/', 'test-results/', 'playwright-report/'] },
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  // No jsx-a11y preset for .astro: eslint-plugin-astro 3.2.1 only loads the original
  // eslint-plugin-jsx-a11y, which doesn't support ESLint 10. Markup lives in .tsx (linted
  // below) and .astro files stay thin shells; axe checks the rendered HTML of both.
  {
    files: ['**/*.tsx'],
    plugins: { 'jsx-a11y-x': jsxA11y, '@stylexjs': stylex },
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    rules: {
      ...jsxA11y.configs.strict.rules,
      '@stylexjs/valid-styles': 'error',
      '@stylexjs/no-unused': 'error',
      '@stylexjs/valid-shorthands': 'error',
      '@stylexjs/sort-keys': 'off',
    },
  },
  // Last, so formatting is left to Prettier and no lint rule disagrees with it.
  prettier,
];
