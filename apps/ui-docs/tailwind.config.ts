import type { Config } from 'tailwindcss';

import sharedConfig from '@wani-works/tailwind-config';

const config: Pick<Config, 'content' | 'presets'> = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,html,stories.tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  presets: [sharedConfig],
};

export default config;
