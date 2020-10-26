const { ESLint } = require('eslint');

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/jsx-indent-props': 0,
    'no-unused-vars': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-tag-spacing': 0,
    'no-console': 0,
    'react/no-unused-state': 0,
  },
};
