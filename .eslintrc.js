module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: ['standard', 'plugin:vue/recommended'],
  rules: {
    'vue/require-prop-types': 'off',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true,
    jest: true,
  },
  plugins: ['vue'],
};
