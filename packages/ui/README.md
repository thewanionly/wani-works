# `@wani-works/ui`

A modern, reusable React UI component library built with TypeScript, Tailwind CSS, and React 19. This package provides a collection of well-designed, accessible components that can be used across the Wani Works ecosystem.

## Features

- 🎨 **Modern Design System** - Built with Tailwind CSS for consistent styling
- ⚡ **TypeScript First** - Full type safety and excellent developer experience
- 🧩 **Modular Components** - Tree-shakeable exports for optimal bundle size
- ♿ **Accessible** - Components built with accessibility in mind
- 🎯 **React 19 Ready** - Built for the latest React features
- 🔧 **Customizable** - Easy to theme and extend

## Installation

This package is part of the Wani Works monorepo and is not published to npm. To use it in your project:

1. Add it as a dependency in your `package.json`:

   ```json
   {
     "dependencies": {
       "@wani-works/ui": "workspace:*"
     }
   }
   ```

2. Import the CSS styles in your application:

   ```tsx
   import '@wani-works/ui/styles';
   ```

3. Import and use components:

   ```tsx
   import { Button, ButtonSize, ButtonVariant } from '@wani-works/ui/button';

   function MyComponent() {
     return (
       <Button
         variant={ButtonVariant.Primary}
         size={ButtonSize.Medium}
         onClick={() => console.log('Clicked!')}
       >
         Click me
       </Button>
     );
   }
   ```

## Development

### Prerequisites

- Node.js >= 18
- pnpm (recommended package manager)

### Running the Package

From the root of the monorepo:

```bash
# Install dependencies
pnpm install

# Start development mode (watches for changes)
pnpm dev

# Or run from the UI package directory
cd packages/ui
pnpm dev
```

The development mode will:

- Watch TypeScript files and compile them
- Watch CSS files and rebuild Tailwind styles
- Output compiled files to the `dist/` directory

### Building

```bash
# Build the package
pnpm build

# Or from the UI package directory
cd packages/ui
pnpm build
```

This will:

- Compile TypeScript files
- Build and minify CSS styles
- Output everything to the `dist/` directory

### Code Quality

```bash
# Lint the code
pnpm lint

# Format the code
pnpm format:fix

# Check formatting
pnpm format:check
```

## Contributing

When adding new components:

1. Create a new directory under `src/components/`
2. Add the component under the `src/components/[ComponentName]`
3. Export the component from `src/components/[ComponentName]/index.ts`
4. Add the export to the main `package.json` exports field
5. Update this README with the new component information
6. Ensure proper TypeScript types and accessibility features

## License

MIT
