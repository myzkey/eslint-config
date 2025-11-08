# @myzkeyjs/eslint-config-typescript

TypeScript ESLint configuration with type-checking rules.

## Installation

```bash
pnpm add -D eslint typescript @myzkeyjs/eslint-config-typescript
```

## Usage

```js
module.exports = {
  extends: ['@myzkeyjs/eslint-config-typescript'],
}
```

Make sure you have a `tsconfig.json` file in your project root.

## Features

- Extends common configuration
- TypeScript parser and plugin
- Type-aware linting
- Consistent type imports (inline style)
- Interface and type alias naming conventions
- Unused variable detection with underscore ignore pattern
- Type definitions preference (type over interface)

## License

MIT
