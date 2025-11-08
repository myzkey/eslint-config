import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

import type { Configurator } from '@myzkey/eslint-config-definer'

type TypeScriptOptions = {
  tsconfigPath?: string
}

export const typescriptConfigurator: Configurator<TypeScriptOptions> = (options) => {
  return [
    {
      name: 'myzkey/typescript/typescript',
      files: ['**/*.{ts,tsx,mts,cts}'],
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          project: options.tsconfigPath || './tsconfig.json',
        },
      },
      plugins: {
        '@typescript-eslint': tseslint,
      },
      rules: {
        // TypeScript specific rules
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
          },
        ],
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
          },
          {
            selector: 'typeAlias',
            format: ['PascalCase'],
          },
        ],

        // Disable base rules that are replaced by TypeScript rules
        'no-unused-vars': 'off',
        'no-undef': 'off',
      },
    },
  ]
}
