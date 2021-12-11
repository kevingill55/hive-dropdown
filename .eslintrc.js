module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'eol-last': ["error", "always"]
  },
};
