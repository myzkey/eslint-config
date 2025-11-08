import vitest from '@vitest/eslint-plugin'

import type { Configurator } from '@myzkeyjs/eslint-config-definer'

export const vitestConfigurator: Configurator = () => {
  return [
    {
      name: 'myzkey/vitest/vitest',
      files: ['**/*.test.{ts,tsx,js,jsx}', '**/*.spec.{ts,tsx,js,jsx}'],
      plugins: {
        vitest,
      },
      rules: {
        // Recommended rules
        'vitest/expect-expect': 'error',
        'vitest/no-alias-methods': 'error',
        'vitest/no-commented-out-tests': 'warn',
        'vitest/no-conditional-expect': 'error',
        'vitest/no-conditional-in-test': 'error',
        'vitest/no-conditional-tests': 'error',
        'vitest/no-disabled-tests': 'warn',
        'vitest/no-duplicate-hooks': 'error',
        'vitest/no-focused-tests': 'error',
        'vitest/no-identical-title': 'error',
        'vitest/no-import-node-test': 'error',
        'vitest/no-standalone-expect': 'error',
        'vitest/no-test-return-statement': 'error',
        'vitest/prefer-hooks-in-order': 'error',
        'vitest/prefer-lowercase-title': 'warn',
        'vitest/prefer-to-be': 'error',
        'vitest/prefer-to-contain': 'error',
        'vitest/prefer-to-have-length': 'error',
        'vitest/valid-describe-callback': 'error',
        'vitest/valid-expect': 'error',
        'vitest/valid-title': 'error',

        // Additional useful rules
        'vitest/consistent-test-it': [
          'error',
          {
            fn: 'test',
            withinDescribe: 'test',
          },
        ],
        'vitest/prefer-spy-on': 'error',
        'vitest/prefer-strict-equal': 'error',
        'vitest/prefer-to-be-falsy': 'error',
        'vitest/prefer-to-be-truthy': 'error',
      },
    },
  ]
}
