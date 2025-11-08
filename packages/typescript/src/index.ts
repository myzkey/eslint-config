import { define } from '@myzkey/eslint-config-definer'

import { typescriptConfigurator } from './configurators/typescript-configurator'

export const typescript = define([typescriptConfigurator])
