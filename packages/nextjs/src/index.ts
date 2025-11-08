import { define } from '@myzkey/eslint-config-definer'

import { nextjsConfigurator } from './configurators/nextjs-configurator'

export const nextjs = define([nextjsConfigurator])
