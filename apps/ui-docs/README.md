# UI Documentation App

This is a Storybook-based documentation application for the `@wani-works/ui` component library. It provides an interactive playground and comprehensive documentation for all UI components in the Wani Works design system.

## Purpose

The UI Docs app serves as:

- **Component Library Documentation** - Interactive documentation for all UI components
- **Design System Showcase** - Visual examples of components with different variants and states
- **Development Playground** - Live environment for testing and developing new components
- **Accessibility Testing** - Built-in accessibility testing with Storybook's a11y addon
- **Component Testing** - Integration with Vitest for component testing

## Features

- 📚 **Interactive Documentation** - Browse and interact with all UI components
- 🎨 **Visual Design System** - See all component variants, sizes, and states
- ♿ **Accessibility Testing** - Built-in a11y testing for all components
- 🧪 **Component Testing** - Integrated testing with Vitest
- 📱 **Responsive Design** - Test components across different screen sizes
- 🔍 **Search & Filter** - Easy navigation through the component library

## Prerequisites

- Node.js >= 18
- pnpm (recommended package manager)

## Getting Started

### Installation

From the root of the monorepo:

```bash
# Install all dependencies
pnpm install
```

### Running the Documentation

```bash
# Start the Storybook development server
pnpm dev

# Or run from the ui-docs directory
cd apps/ui-docs
pnpm dev
```

The documentation will be available at `http://localhost:6006`

### Building for Production

```bash
# Build the static Storybook site
pnpm build

# Or from the ui-docs directory
cd apps/ui-docs
pnpm build
```

The built documentation will be output to the `storybook-static/` directory.

## Development

### Adding New Component Stories

1. Create a new `.stories.tsx` file in `src/stories/`
2. Follow the existing pattern from `Button.stories.tsx`
3. Export your stories with proper metadata
4. The story will automatically appear in the Storybook sidebar

### Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the static documentation site
- `pnpm lint` - Run ESLint on the codebase

## Storybook Addons

This documentation app includes several Storybook addons:

- **@storybook/addon-docs** - Enhanced documentation with MDX support
- **@storybook/addon-a11y** - Accessibility testing
- **@storybook/addon-vitest** - Component testing integration
- **@chromatic-com/storybook** - Visual testing and review

## Related Packages

- `@wani-works/ui` - The main UI component library
- `@wani-works/tailwind-config` - Shared Tailwind CSS configuration

## Contributing

When adding new components to the UI library:

1. Add the component to `packages/ui/src/components/`
2. Create corresponding stories in `src/stories/`
3. Update this README if needed
4. Ensure proper accessibility and testing coverage
