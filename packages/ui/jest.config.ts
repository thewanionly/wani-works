// @ts-ignore - Jest config module doesn't have types
import config from '@wani-works/jest-config/react';

/** @type {import('jest').Config} */
export default {
  ...config,
  moduleNameMapper: {
    ...config.moduleNameMapper,
    '^lucide-react$': '<rootDir>/src/__mocks__/lucide-react.tsx',
  },
};
