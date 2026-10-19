// Lighthouse CI budgets. Runs against the built site in dist/.
module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      numberOfRuns: 3,
      settings: { chromeFlags: '--headless=new' },
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        // First load, in bytes. Heavy embeds load on request (decision 0023).
        'total-byte-weight': ['error', { maxNumericValue: 100000 }],
      },
    },
    upload: {
      // CI publishes a public report link; local runs write to .lighthouseci/.
      target: process.env.CI ? 'temporary-public-storage' : 'filesystem',
      outputDir: '.lighthouseci',
    },
  },
};
