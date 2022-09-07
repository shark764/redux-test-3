const { eslintWebConfig } = require('@dfhernandez/common-utilities');

const config = eslintWebConfig(__dirname);
config.rules = {
  ...config.rules,

  'react/jsx-uses-react': 'warn',
  'react/react-in-jsx-scope': 'off',
  '@typescript-eslint/no-unsafe-argument': 'warn',
  '@typescript-eslint/no-unsafe-assignment': 'warn',
  '@typescript-eslint/no-unsafe-call': 'warn',
  '@typescript-eslint/no-unsafe-member-access': 'warn',
  '@typescript-eslint/no-unsafe-return': 'warn',
  'react/require-default-props': 'warn',
  '@typescript-eslint/strict-boolean-expressions': 'warn',
  // note you must disable the base rule as it can report incorrect errors
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'all' }],
};

module.exports = config;
