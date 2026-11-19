# TECHNOLOGY STACK

**Project:** Kowallskyy Portfolio  
**Document:** `technology-stack.md`  
**Status:** Final — Existing Stack Baseline

---

## 1. Current Technology Direction

The portfolio is built around the existing Next.js application. The implementation agent must inspect the current repository and package versions before making changes.

| Layer | Technology | Role |
|---|---|---|
| Framework | Next.js — App Router | Routing, page rendering, application structure |
| Language | TypeScript | Type-safe application development |
| Styling | Tailwind CSS | Utility-based responsive styling |
| Motion | Motion for React | Interface transitions and animation |
| Fonts | Manrope, IBM Plex Mono | Global typography |
| Hosting | Vercel (current deployment direction) | Website hosting and deployment |
| Version Control | Git / GitHub | Source control and collaboration |

This document records the established stack direction. It does not certify the exact installed versions. The repository's `package.json` and lockfile are the source of truth for installed package versions.

## 2. Mandatory Repository Inspection

Before implementation:

1. Inspect the existing folder structure.
2. Inspect `package.json`.
3. Inspect the lockfile and installed package versions.
4. Inspect the root layout and global CSS.
5. Inspect existing routes and reusable components.
6. Identify existing conventions for images, metadata, and animation.

Do not assume that the project is a fresh Next.js installation.

## 3. Preserve Existing Configuration

- Do not replace `package.json` unnecessarily.
- Do not replace the lockfile without a specific technical reason.
- Do not overwrite existing configuration files wholesale.
- Do not migrate to another framework.
- Do not add dependencies that duplicate existing functionality.
- Prefer extending existing components and styles over rebuilding them.

If a required dependency is missing, explain why it is needed before adding it.

## 4. Next.js and TypeScript

- Use the existing App Router structure.
- Keep route components organized and reusable.
- Use TypeScript for components, data structures, and props.
- Prefer clear component boundaries.
- Keep project content separate from presentation where practical.
- Use the existing Next.js metadata conventions.
- Use the framework's image optimization approach where appropriate.

Do not introduce unnecessary client components. Use client-side interactivity only where the behavior requires it.

## 5. Tailwind CSS

- Follow the installed Tailwind version and current project configuration.
- Use the global design tokens defined in `design-system.md`.
- Keep responsive behavior consistent.
- Avoid duplicating large blocks of arbitrary CSS utilities.
- Extract reusable components when repeated patterns justify it.

Do not assume a particular Tailwind configuration format until the repository has been inspected.

## 6. Motion for React

Use the installed Motion for React package for restrained interaction and page transitions where useful.

Requirements:
- Keep motion subtle.
- Avoid unnecessary animation on every element.
- Respect reduced-motion preferences.
- Ensure content remains available if animation is disabled.
- Avoid animation patterns that create layout instability.

Use the package already installed in the repository rather than adding a competing animation library.

## 7. Fonts

The established fonts are:
- Manrope.
- IBM Plex Mono.

Use `next/font/google` in the root layout if that is consistent with the existing implementation. Avoid loading duplicate font files or configuring the same family in multiple places.

## 8. Images and Static Assets

- Store project evidence in a predictable public asset location according to existing repository conventions.
- Use descriptive filenames.
- Preserve original screenshots.
- Optimize delivery without altering the factual content of evidence.
- Provide alt text.
- Do not reference local filesystem paths that will not exist in the deployed application.

The handoff package's `assets/` folders are source assets for implementation. The developer must copy them into the repository's appropriate public asset directory and update code references accordingly.

## 9. Hosting and Deployment

Vercel is the current hosting direction.

Before deployment:
- Verify the repository's build command.
- Verify environment variables, if any.
- Verify image paths and route behavior.
- Verify production build output.
- Do not expose secrets or private credentials.

Hosting plan suitability and commercial-use terms must be checked separately before using the site to advertise paid services. Do not assume that every free hosting tier permits commercial use.

## 10. Quality Requirements

- No broken routes.
- No missing assets.
- No TypeScript errors.
- No avoidable console errors.
- No horizontal overflow at supported viewport sizes.
- Responsive navigation and controls.
- Accessible keyboard focus.
- Correct metadata.
- Production build completes successfully.

## 11. Relationship to Other Documents

- `portfolio-overview.md`: portfolio positioning and content principles.
- `website-structure.md`: site map and page hierarchy.
- `design-system.md`: visual tokens and design principles.
- `homepage-reference.md`: homepage content and layout direction.
- Project PRDs: page-specific implementation requirements.

The current repository remains the source of truth for exact code and package versions. This document provides the intended stack and constraints, not a substitute for repository inspection.

---

**End of Technology Stack.**
