module.exports = {
  ci: {
    collect: {
      url: ['/', '/404.html'],
      staticDistDir: './dist',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'unused-javascript': 'warn',
        'unused-css-rules': 'warn',
        'non-composited-animations': 'warn',
        'errors-in-console': 'warn',
        canonical: 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
