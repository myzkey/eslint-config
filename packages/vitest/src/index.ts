import { define } from '@myzkeyjs/eslint-config-definer'

import { vitestConfigurator } from './configurators/vitest-configurator'

export const vitest = define([vitestConfigurator])
