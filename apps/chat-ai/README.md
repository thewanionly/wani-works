# Chat AI

An interactive chat interface built with Next.js that allows users to send messages and receive responses from an AI model.

## Features

- 🤖 AI-powered chat interface
- ⚡ Built with Next.js 15 and React 19
- 🎨 Modern UI with Tailwind CSS v4
- 📱 Responsive design
- 🔧 TypeScript for type safety

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Runtime**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonts**: [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans?query=Noto+Sans)
- **Linting**: [ESLint](https://eslint.org/) with Next.js config
- **Package Manager**: [pnpm](https://pnpm.io/)

## Prerequisites

- Node.js >= 18
- pnpm 9.0.0 (recommended package manager)

## Getting Started

This project is part of a monorepo managed with [Turbo](https://turbo.build/). You can run it in two ways:

### Option 1: From the monorepo root (Recommended)

```bash
# Install dependencies for all packages
pnpm install

# Run the chat-ai app in development mode
pnpm dev --filter=chat-ai

# Or run all apps in the monorepo
pnpm dev
```

### Option 2: From the app directory

```bash
# Navigate to the app directory
cd apps/chat-ai

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

### Available Scripts

- `pnpm dev` - Start the development server with Turbopack
- `pnpm build` - Build the application for production with Turbopack
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality checks

## Building for Production

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```
