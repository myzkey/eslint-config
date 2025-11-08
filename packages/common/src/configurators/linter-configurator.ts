import type { Configurator } from '@myzkey/eslint-config-definer'

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
