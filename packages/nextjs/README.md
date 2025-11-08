# @myzkey/eslint-config-nextjs

Next.js ESLint configuration optimized for App Router and Pages Router.

## Installation

```bash
pnpm add -D eslint next @myzkey/eslint-config-nextjs
```

## Usage

```js
module.exports = {
  extends: ['@myzkey/eslint-config-nextjs'],
}
```

## Features

- Extends React configuration
- Next.js core web vitals
- Optimized for App Router (`app/**/*`) and Pages Router (`pages/**/*`)
- Image optimization warnings
- Automatic default export allowance for pages and app routes

## License

MIT
