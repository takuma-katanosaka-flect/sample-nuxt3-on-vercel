module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  settings: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.eslint.json',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        'airbnb-typescript/base',
        'prettier',
      ],
      plugins: ['vue', 'nuxt'],
      rules: {
        // eslint-config-airbnb利用時のeslintのエラーを解消するため。no-extraneous-dependenciesというeslint-config-airbnbのルールと衝突するため
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            optionalDependencies: false,
          },
        ],
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
  ],
}
