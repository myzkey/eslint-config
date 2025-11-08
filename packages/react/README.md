# @myzkeyjs/eslint-config-react

React ESLint configuration with hooks and accessibility rules.

## Installation

```bash
pnpm add -D eslint react @myzkeyjs/eslint-config-react
```

## Usage

```js
module.exports = {
  extends: ['@myzkeyjs/eslint-config-react'],
}
```

## Features

- Extends TypeScript configuration
- React 17+ support (no React import required)
- React Hooks rules enforcement
- JSX accessibility (a11y) checks
- TypeScript prop validation (prop-types disabled)
- Self-closing component enforcement
- No useless fragments

## License

MIT
