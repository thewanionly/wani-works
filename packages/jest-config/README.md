# `@wani-works/jest-config`

Shared Jest configuration for the monorepo.

## Usage

Install peer/dev deps in your app/package:

```bash
pnpm add -D jest ts-jest @types/jest jest-environment-jsdom @wani-works/jest-config
```

Create `jest.config.js` in your project:

```js
import config from '@wani-works/jest-config/base';

export default config;
```

For React/web projects:

```js
import config from '@wani-works/jest-config/react';

export default config;
```

For Node-only projects:

```js
import config from '@wani-works/jest-config/node';

export default config;
```

If you use React config, you can optionally create `jest.setup.ts` in your project for custom setup.

## Mocks

- File mocks: `@wani-works/jest-config/mocks/file`
- Style mocks: `@wani-works/jest-config/mocks/style`

## Notes

- `ts-jest` is configured with `tsconfig: true` so it picks up your local `tsconfig.json`.
- Coverage and transforms exclude `node_modules`, `dist`, and `build` directories.
