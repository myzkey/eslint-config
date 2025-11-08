import type { Configurator } from '@myzkey/eslint-config-definer'

export const javascriptConfigurator: Configurator = () => {
  return [
    {
      name: 'myzkey/common/javascript',
      files: ['**/*.{js,mjs,cjs,jsx}'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        // Best Practices
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-debugger': 'warn',
        'no-alert': 'warn',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-template': 'error',
        'object-shorthand': ['error', 'always'],
        'quote-props': ['error', 'as-needed'],

        // Code style
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
        'no-trailing-spaces': 'error',
        'eol-last': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        semi: ['error', 'never'],
        quotes: ['error', 'single', { avoidEscape: true }],
      },
    },
  ]
}
