# My personal website

Personal portfolio for Anniken, live at **[annikenje.no](https://annikenje.no)**.

Built with React 19, TypeScript, and Vite. Client-side routing via React Router v7.


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
  assets/       Images bundled by Vite (e.g. the hero avatar)
  components/   Layout, navigation, icons, and project page-components
  interfaces/   Shared TypeScript types (e.g. IProjectItem)
  pages/        HomePage, AboutPage, ProjectsPage, NotFoundPage
  routing/      AppRouting: route definitions, nested under MainLayout
  utils/        Small helpers: reveal (page-entry stagger)
  main.css      Global styles, design tokens, and shared motion
```
