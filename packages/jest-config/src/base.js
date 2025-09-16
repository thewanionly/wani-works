/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.(spec|test).[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        tsconfig: {
          module: 'CommonJS'
        },
      }
    ]
  },
  collectCoverageFrom: [
    '<rootDir>/**/*.{ts,tsx,js,jsx}',
    '!<rootDir>/**/node_modules/**',
    '!<rootDir>/**/dist/**',
    '!<rootDir>/**/build/**'
  ],
  moduleNameMapper: {},
};

export default config;


