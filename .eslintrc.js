module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    'jest/globals': true,
  },
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': ['error', 'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.js'],
      plugins: ['jest'],
      env: {
        es6: true,
        node: true,
        'jest/globals': true,
      },
      extends: ['plugin:jest/recommended'],
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/prop-types': 'off',
      },
    },
    {
      files: ['src/store/**/*.*'],
      rules: {
        'no-param-reassign': ['error', { props: false }],
      },
    },
  ],
};
