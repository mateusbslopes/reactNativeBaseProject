module.exports = {
  root: true,
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaFeature: {
      jsx: true
    },
    ecmaVersion: 11,
    project: './tsconfig.json'
  },
  rules: {
    'linebreak-style': [
      'error',
      'windows'
    ],
    '@typescript-eslint/indent': [
      'error',
      4
    ],
    'react/jsx-indent': [
      'error',
      4
    ],
    'react/jsx-indent-props': [
      'error',
      4
    ],
    'arrow-parens': [
      'warn',
      'as-needed'
    ]
  },
};
