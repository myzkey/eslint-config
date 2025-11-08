# @myzkey/eslint-config-nodejs

Node.js and NestJS ESLint configuration.

## Installation

```bash
pnpm add -D eslint @myzkey/eslint-config-nodejs
```

## Usage

```js
module.exports = {
  extends: ['@myzkey/eslint-config-nodejs'],
}
```

## Features

- Extends TypeScript configuration
- Node.js environment settings
- Console usage allowed (common in server-side code)
- NestJS decorator support
- Synchronous operation warnings
- Process exit error enforcement
- Configuration file default export allowance

## License

MIT
