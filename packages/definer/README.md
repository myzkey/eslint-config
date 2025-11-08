# @myzkeyjs/eslint-config-definer

ESLint configuration definer utilities.

## Installation

```bash
pnpm add -D @myzkeyjs/eslint-config-definer
```

## Usage

```typescript
import { define } from '@myzkeyjs/eslint-config-definer'
import type { Configurator } from '@myzkeyjs/eslint-config-definer'

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
