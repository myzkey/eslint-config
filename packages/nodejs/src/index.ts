import { define } from '@myzkeyjs/eslint-config-definer'

import { nodejsConfigurator } from './configurators/nodejs-configurator'

export const nodejs = define([nodejsConfigurator])
