module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
      },
    },
  },
  extends: [
    'airbnb-base',
    'next',
    'prettier',
    'eslint-config-prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  root: true,
};
