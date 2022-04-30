module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['off', 'tab'],
    'linebreak-style': ['warn', 'windows'],
    quotes: ['off', 'single'],
    semi: ['warn', 'never'],
  },
}
