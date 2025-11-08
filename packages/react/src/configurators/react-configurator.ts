import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

import type { Configurator } from '@myzkey/eslint-config-definer'

export const reactConfigurator: Configurator = () => {
  return [
    {
      name: 'myzkey/react/react',
      files: ['**/*.{jsx,tsx}'],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      plugins: {
        react,
        'react-hooks': reactHooks,
        'jsx-a11y': jsxA11y,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        // React specific rules
        'react/react-in-jsx-scope': 'off', // Not needed in React 17+
        'react/prop-types': 'off', // Using TypeScript for prop validation
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'error',
        'react/self-closing-comp': 'error',
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-pascal-case': 'error',
        'react/no-array-index-key': 'warn',
        'react/no-unstable-nested-components': 'error',

        // React Hooks rules
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // Accessibility rules
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
      },
    },
  ]
}
