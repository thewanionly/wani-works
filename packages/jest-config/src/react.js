import base from './base.js';

/** @type {import('jest').Config} */
const config = {
  ...base,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    ...base.moduleNameMapper,
    '\\.(css|less|sass|scss)$': '@wani-works/jest-config/mocks/style',
    '\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '@wani-works/jest-config/mocks/file',
  },
};

export default config;


