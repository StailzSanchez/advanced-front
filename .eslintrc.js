module.exports = {
  env: { browser: true, es2021: true, jest: true },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx', '.json'] },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': [0, 'lf'],
    'wrap-iife': 'off',
    'object-curly-newline': 'off',
    'max-len': ['warn', { code: 110, ignoreComments: true }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'operator-linebreak': ['error', 'before'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
    // 'i18next/no-literal-string': [
    //   'error',
    //   {
    //     markupOnly: true,
    //     ignoreAttribute: ['data-testid'],
    //   },
    // ],
  },

  globals: { __IS_DEV__: true },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts, tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
