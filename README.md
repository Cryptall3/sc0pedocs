# sc0pe Documentation

This directory contains the source code for the sc0pe documentation website. It's a standalone [Next.js](https://nextjs.org/) project.

## Getting Started

### 1. Navigate to the docs directory
```bash
cd docs
```

### 2. Install dependencies
If you are using `pnpm` workspaces, dependencies might be installed from the root. Otherwise, run:
```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3. Set up shadcn/ui
This project uses [shadcn/ui](https://ui.shad.cn/) for components. You will need to initialize it and add the components.

First, initialize shadcn/ui:
```bash
npx shadcn-ui@latest init
```
You can accept the defaults.

Then, add the components that are used in the documentation:
```bash
npx shadcn-ui@latest add button card accordion
```

### 4. Run the development server
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack
- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shad.cn/)
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- [Lucide React](https://lucide.dev/) for icons
- MDX for documentation content (coming soon) # sc0pedocs
