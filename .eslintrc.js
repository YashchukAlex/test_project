module.exports = {
  root: true,
  extends: ['@react-native-community'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 125,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier'],
};
