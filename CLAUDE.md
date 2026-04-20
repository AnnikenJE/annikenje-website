# ✨ CLAUDE.md ✨

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. 💅

## Commands 🌸

```bash
npm run dev      # Start dev server (opens browser automatically, HMR enabled)
npm run build    # TypeScript compile + Vite production build
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

No test framework is configured.

## Architecture 🎀

Personal portfolio website for Anniken Jørgensen Edvardsen — React 19 + TypeScript + Vite, using React Router v7 for client-side routing. 💖

**Routing and layout:**
- `src/routing/AppRouting.tsx` — defines all routes and renders `MainHeader` as a persistent layout wrapper around every page
- Routes: `/` → `HomePage`, `/about` → `AboutPage`, `/projects` → `ProjectsPage`
- `MainFooter` component exists but check `AppRouting.tsx` for whether it's wired in

**Styling:** Each component has a co-located `.css` file. No CSS modules, Tailwind, or CSS-in-JS — plain scoped CSS files. ✨
- Note: `ProjectsPage` CSS file has a typo in the filename: `ProjecstPage.css`

**Icons:** FontAwesome via `@fortawesome/react-fontawesome` for social media links.

**Page exports:** `src/pages/index.ts` is a barrel file that re-exports all pages.

**TypeScript:** Strict mode with `noUnusedLocals` and `noUnusedParameters` enforced — unused imports/variables will cause build errors. 🚨

**Data model:** `src/interfaces/IProjectItem.tsx` defines `IProjectItem` interface and `ProjectStatus` const enum (`InProgress`, `Completed`, `NotStarted`).

**Project components:** `src/components/page-components/projects/` — `ProjectList` (hardcoded project data, filters by status) and `ProjectListItem` (renders one project).

## Current State 🌷

- `AboutPage` — has real content: bio, skills, "this website" section. Not a stub anymore.
- `ProjectsPage` — still mostly stub ("Coming soon"), but `ProjectList` component exists and is ready to be wired in.
- `src/components/icons/SocialMediaIcons.tsx` — marked in comments as candidate for removal/consolidation into homepage.
