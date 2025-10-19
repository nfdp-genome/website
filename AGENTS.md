# Agent Guidelines for Genomic Facility Website

## Build/Test/Lint Commands
- **Dev**: `npm run dev` - Start development server with nodemon watching server.ts and src/
- **Build**: `npm run build` - Build Next.js production bundle
- **Start**: `npm run start` - Start production server with tsx
- **Lint**: `npm run lint` - Run ESLint with Next.js rules
- **Tests**: No test framework configured yet
- **Database**: `npm run db:push`, `npm run db:generate`, `npm run db:migrate`

## Tech Stack
Next.js 15 App Router, TypeScript 5, Tailwind CSS 4, shadcn/ui (New York style), Prisma ORM, Socket.IO, React 19

## Code Style
- **Imports**: Use `@/` alias for src/ imports (e.g., `@/components/ui/button`)
- **Components**: Functional components with hooks, PascalCase filenames
- **TypeScript**: Strict mode enabled, `noImplicitAny: false`, avoid explicit types when unnecessary
- **Formatting**: Single quotes for strings, 2-space indentation, no semicolons (where optional)
- **Naming**: PascalCase for components, camelCase for functions/variables, kebab-case for CSS
- **Directives**: Use `'use client'` for client components (required for hooks, event handlers, browser APIs)
- **Error Handling**: Return NextResponse.json() for API routes
- **Comments**: NO comments unless explicitly requested by user

## Linting Rules (Relaxed)
Most TypeScript/React linting rules are disabled (see eslint.config.mjs). Prefer-const, unused-vars, exhaustive-deps, any-type all disabled.
