module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'react/react-in-jsx-scope': 'off',
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/no-fc-default-props': 0,
  },
  ignorePatterns: ['.eslintrc.js'],
}
