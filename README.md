# wani-works

This monorepo contains some of my projects, reusing internal packages for configs and UI components.

## What's inside?

This monorepo includes the following packages/apps:

### Apps

- `ui-docs`: A Storybook app documenting the UI components in `pacakges/ui`

### Packages

- `@wani-works/ui`: A React UI component library or design system used in the applications
- `@wani-works/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@wani-works/typescript-config`: `tsconfig.json`s used throughout the monorepo

## Build

To build all apps and packages, run the following command:

```bash
turbo build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```bash
turbo build --filter=ui-docs
```

## Develop

To develop all apps and packages, run the following command:

```bash
turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```bash
turbo dev --filter=ui-docs
```

or by going to the specific package directory and running their own `dev` command:

```bash
cd apps/ui-docs
pnpm dev
```
