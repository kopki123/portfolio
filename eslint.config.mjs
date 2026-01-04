import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // {
  //   ignores: [
  //     '**/node_modules/**',
  //     '**/.nuxt/**',
  //     '**/.output/**',
  //     '**/dist/**',
  //     '**/coverage/**',
  //   ],
  // },

  {
    files: ['**/*.vue', '**/*.js', '**/*.mjs'],
    rules: {
      'no-console': 'warn',
      'vue/multi-word-component-names': 'off',
      'semi': ['error', 'always'],
    },
  },
);
