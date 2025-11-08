# @myzkey/eslint-config-definer

ESLint configuration definer utilities.

## Installation

```bash
pnpm add -D @myzkey/eslint-config-definer
```

## Usage

```typescript
import { define } from '@myzkey/eslint-config-definer'
import type { Configurator } from '@myzkey/eslint-config-definer'

const myConfigurator: Configurator = () => {
  return [
    {
      name: 'my-config',
      rules: {
        // your rules
      },
    },
  ]
}

export default define([myConfigurator])
```

## License

MIT
