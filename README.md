# annikenje.no

Personal portfolio for Anniken — live at **[annikenje.no](https://annikenje.no)**.

Built with React 19, TypeScript, and Vite. Client-side routing via React Router v7.

Amazing stack for a portfolio :)

## Getting started

```bash
npm install
npm run dev
```

## Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Project structure

```
src/
  components/   Layout, navigation, icons, and project page-components
  interfaces/   Shared TypeScript types (e.g. IProjectItem)
  pages/        HomePage, AboutPage, ProjectsPage, NotFoundPage
  routing/      AppRouting — route definitions, nested under MainLayout
  utils/        Small helpers — reveal (page-entry stagger), accent (per-visit color)
  main.css      Global styles, design tokens, and shared motion
```

Content fades and rises into place on each page load via a single shared
`.reveal` class, and it honors `prefers-reduced-motion`. The accent color is
picked at random on each visit, so the site looks a little different every time
you stop by.
