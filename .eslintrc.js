module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended', //프리티어 규칙을 ESLint 규칙으로 추가하는 플러그인
    'google',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier', //프리티어를 사용할 때 ESLint가 코딩스타일에 관해서는 신경안쓰게하려면 eslint-config-prettier를 설치한다. Prettier와 충돌하는 ESLint 규칙을 끄는 역할
    'prettier',
  ],
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', '**/migrations/*', '**/seed/*'],
  rules: {
    strict: 0,
  },
};
