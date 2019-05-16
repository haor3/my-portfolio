module.exports = {
  extends: 'react-app',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'constructor-super': 'warn',
    'no-console': 'warn',
    'no-const-assign': 'warn',
    'no-debugger': 'error',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'no-unused-vars': 'warn',
    'valid-typeof': 'warn',
  },
}
