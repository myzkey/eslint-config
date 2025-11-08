import { define } from '@myzkeyjs/eslint-config-definer'

import { typescriptConfigurator } from './configurators/typescript-configurator'

export const typescript = define([typescriptConfigurator])
