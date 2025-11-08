import type { Configurator } from '@myzkey/eslint-config-definer'

export const nextjsConfigurator: Configurator = () => {
  return [
    {
      name: 'myzkey/nextjs/nextjs',
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: {
        // Next.js specific overrides
        '@next/next/no-html-link-for-pages': 'off',
        '@next/next/no-img-element': 'warn',

        // Relax some rules for Next.js patterns
        'react/no-unescaped-entities': 'off',
      },
    },
    {
      name: 'myzkey/nextjs/pages-app-router',
      files: ['app/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ]
}
