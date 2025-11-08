import type { Configurator } from '@myzkeyjs/eslint-config-definer'

export const linterConfigurator: Configurator = () => {
  return [
    {
      name: 'myzkey/common/linter',
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },
  ]
}
