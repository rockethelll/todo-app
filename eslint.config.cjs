const { default: react } = require('@vitejs/plugin-react-swc');
const vitest = require('eslint-plugin-vitest');

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:vitest/recommended',
    'plugin:jest-dom/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'simple-import-sort', 'react-hooks'],
  rules: {
    ...react.configs.recommended.rules,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-unused-vars': 'warn', // warning, not error
    'vitest/expect-expect': 'off', // distracting red squiggles while writing tests
    'react/prop-types': 'off', // turn off props validation
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // External packages come first
          ['^@?\\w'],
          // Internal files
          ['^@/'],
          // Colocated files
          ['^\\.\\./', '^\\./'],
          // Style imports
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
  globals: {
    ...vitest.environments.env.globals,
  },
};
