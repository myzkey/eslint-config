import { define } from '@myzkeyjs/eslint-config-definer'

import { nextjsConfigurator } from './configurators/nextjs-configurator'

export const nextjs = define([nextjsConfigurator])
