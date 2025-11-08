# @myzkey/eslint-config

Shareable ESLint configurations for React, Next.js, NestJS, and Node.js projects.

## Packages

This monorepo contains the following ESLint configuration packages:

| Package | Description |
|---------|-------------|
| [@myzkey/eslint-config-common](./packages/common) | Common base configuration with best practices |
| [@myzkey/eslint-config-typescript](./packages/typescript) | TypeScript support with type-checking rules |
| [@myzkey/eslint-config-react](./packages/react) | React configuration with hooks and a11y |
| [@myzkey/eslint-config-nextjs](./packages/nextjs) | Next.js optimized configuration |
| [@myzkey/eslint-config-nodejs](./packages/nodejs) | Node.js and NestJS configuration |

## Installation

Choose the package that matches your project type:

### For React projects

```bash
pnpm add -D eslint @myzkey/eslint-config-react
```

### For Next.js projects

```bash
pnpm add -D eslint @myzkey/eslint-config-nextjs
```

### For Node.js/NestJS projects

```bash
pnpm add -D eslint @myzkey/eslint-config-nodejs
```

### For TypeScript-only projects

```bash
pnpm add -D eslint @myzkey/eslint-config-typescript
```

## Usage

Create an `.eslintrc.js` file in your project root:

### React

```js
module.exports = {
  extends: ['@myzkey/eslint-config-react'],
}
```

### Next.js

```js
module.exports = {
  extends: ['@myzkey/eslint-config-nextjs'],
}
```

### Node.js/NestJS

```js
module.exports = {
  extends: ['@myzkey/eslint-config-nodejs'],
}
```

### TypeScript

```js
module.exports = {
  extends: ['@myzkey/eslint-config-typescript'],
}
```

## Features

### Common Configuration
- ESLint recommended rules
- Import order enforcement
- Code style consistency (single quotes, no semicolons, etc.)
- Modern JavaScript/ES2021+ support

### TypeScript Configuration
- TypeScript ESLint rules
- Type-aware linting
- Consistent type imports
- Interface and type alias naming conventions

### React Configuration
- React 17+ support (no React import required)
- React Hooks rules
- JSX accessibility (a11y) checks
- TypeScript prop validation

### Next.js Configuration
- Next.js core web vitals
- Optimized for App Router and Pages Router
- Image optimization warnings

### Node.js/NestJS Configuration
- Node.js environment settings
- NestJS decorator support
- Console usage allowed for server-side code

## Development

```bash
# Install dependencies
pnpm install

# Lint all packages
pnpm lint

# Format code
pnpm format
```

## License

MIT
