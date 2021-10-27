module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: ['**/*.ts', '**/*.vue'],
      parser: 'typescript',
    },
  ],
}
