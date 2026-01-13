import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    files: ['**/*.{ts,tsx,mts,cts,js,mjs,cjs,vue}'],
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'vue/first-attribute-linebreak': [
        'error',
        {
          singleline: 'beside',
          multiline: 'below',
        },
      ],
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'always',
        },
      ],
    },
  },
);
