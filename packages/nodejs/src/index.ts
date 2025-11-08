import { define } from '@myzkey/eslint-config-definer'

import { nodejsConfigurator } from './configurators/nodejs-configurator'

export const nodejs = define([nodejsConfigurator])
