import type { Configurator } from '@myzkeyjs/eslint-config-definer'

export const ignoreConfigurator: Configurator = () => {
  return [
    {
      name: 'myzkey/common/ignore',
      ignores: [
        // Node modules
        '**/node_modules',
        '**/package-lock.json',
        '**/yarn.lock',
        '**/pnpm-lock.yaml',

        // Test directories
        '**/coverage',
        '**/__snapshots__',

        // Build directories
        '**/dist',
        '**/.vercel',

        // Cache directories
        '**/.swc',
        '**/.turbo',

        // AWS CDK
        '**/cdk.out',
        '**/cdk.context.json',

        // Next.js
        '**/.next',
        '**/next-env.d.ts',
      ],
    },
  ]
}
