import { define } from '@myzkeyjs/eslint-config-definer'

import { ignoreConfigurator } from './configurators/ignore-configurator'
import { importConfigurator } from './configurators/import-configurator'
import { javascriptConfigurator } from './configurators/javascript-configurator'
import { linterConfigurator } from './configurators/linter-configurator'

export const common = define([
  ignoreConfigurator,
  linterConfigurator,
  javascriptConfigurator,
  importConfigurator,
])
