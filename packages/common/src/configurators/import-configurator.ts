import importPlugin from 'eslint-plugin-import'

import type { Configurator } from '@myzkeyjs/eslint-config-definer'

export const importConfigurator: Configurator = () => {
  return [
    {
      name: 'myzkey/common/import',
      files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
      plugins: {
        import: importPlugin,
      },
      rules: {
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'import/no-duplicates': 'error',
        'import/no-unresolved': 'off',
        'import/named': 'off',
      },
    },
  ]
}
