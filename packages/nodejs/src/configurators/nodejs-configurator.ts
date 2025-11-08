import type { Configurator } from '@myzkey/eslint-config-definer'

export const nodejsConfigurator: Configurator = () => {
  return [
    {
      name: 'myzkey/nodejs/nodejs',
      files: ['**/*.{js,ts,mjs,cjs}'],
      languageOptions: {
        globals: {
          process: 'readonly',
          __dirname: 'readonly',
          __filename: 'readonly',
          module: 'readonly',
          require: 'readonly',
          Buffer: 'readonly',
        },
      },
      rules: {
        // Node.js specific rules
        'no-console': 'off', // Console is acceptable in Node.js
        'no-process-exit': 'error',
        'no-sync': 'warn',

        // NestJS patterns
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',

        // Allow class decorators (common in NestJS)
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      name: 'myzkey/nodejs/config-files',
      files: ['*.config.{js,ts}', 'config/*.{js,ts}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ]
}
