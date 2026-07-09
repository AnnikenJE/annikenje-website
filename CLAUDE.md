# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (opens browser automatically, HMR enabled)
npm run build    # TypeScript compile + Vite production build
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

No test framework is configured.

## Architecture

Personal portfolio website for Anniken Jørgensen Edvardsen — React 19 + TypeScript + Vite, using React Router v7 for client-side routing.

**Routing and layout:**
- `src/routing/AppRouting.tsx` — defines all routes, nested inside a single `MainLayout` route element
- `src/components/layout/MainLayout.tsx` — the persistent wrapper: renders `ScrollToTop`, the skip link, `MainHeader`, and an `<Outlet />` for the active page
- Routes: `/` → `HomePage`, `/about` → `AboutPage`, `/projects` → `ProjectsPage`, `*` → `NotFoundPage`

**Styling:** Each component has a co-located `.css` file. No CSS modules, Tailwind, or CSS-in-JS — plain scoped CSS files. Global styles and design tokens live in `src/main.css`.

**Headings:** `src/main.css` owns the type scale — `.display-heading` for hero titles (`HELLO!`, `404`) and `.page-title` for standard page titles (About, Projects). These set size/weight/letter-spacing only; alignment is the page layout's job. Don't redefine them in a page's `.css` file.

**Responsiveness (always required):** This is a responsive site — always design and verify for phone, tablet, and desktop, and everything in between. Any layout, spacing, or component change MUST be checked at small (phone), medium (tablet), and large (desktop) widths, not just desktop. Prefer fluid/relative units and shared gutters over fixed pixel values; keep content from sitting flush against screen edges on narrow viewports. The codebase uses `@media (width < 768px)` (phone) and `@media (width < 1200px)` (tablet/small) breakpoints — follow those conventions when adding responsive rules.

**Motion:** `src/main.css` defines a single shared `.reveal` class (a `rise` keyframe that fades + translates content in on mount/route change). Stagger is driven by the `--i` custom property (`animation-delay = --i * 80ms`), set per element via the `revealOrder` helper in `src/utils/reveal.ts`. Respects `prefers-reduced-motion`.

**Icons:** FontAwesome via `@fortawesome/react-fontawesome` — brand icons for social links, solid icons for UI (e.g. the section chevron in `ProjectList`).

**Page exports:** `src/pages/index.ts` is a barrel file that re-exports all pages.

**TypeScript:** Strict mode with `noUnusedLocals` and `noUnusedParameters` enforced — unused imports/variables will cause build errors.

**Data model:** `src/interfaces/IProjectItem.ts` defines the `IProjectItem` interface and the `ProjectStatus` const object (`InProgress`, `AlwaysEvolving`, `Completed`, `Planned`). Each status's value doubles as its section heading; `ProjectList` renders one section per status, in the order declared in its `sections` array.

**Social links:** `src/components/icons/socialLinks.ts` is the single source for GitHub/LinkedIn URLs + icons. `MainNavigation` maps over it for the nav icons; `HomePage` looks up the same entries to render inline text links.

**Project components:** `src/components/page-components/projects/` — `ProjectList` (hardcoded project data, filters by status, collapsible sections) and `ProjectListItem` (renders one project).
