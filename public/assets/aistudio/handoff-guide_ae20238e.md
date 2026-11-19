# HANDOFF GUIDE — GOOGLE AI STUDIO

**Project:** Kowallskyy Portfolio  
**Version:** 1.1

## Important folder separation

The owner maintains separate folder structures for the portfolio handoff and the latest homepage reference. Do not merge, rename, or relocate them.

Use the latest Homepage Reference V2.0 folder as the authority for the homepage visual. Treat older homepage references as historical.

The handoff folders are documentation and assets, not the website source code. The owner has confirmed coding has not started; initialize the Next.js application in a separate project directory.

## Read order

1. Latest global context documents.
2. Latest approved design system and technology stack.
3. Homepage Reference V2.0 — mandatory authority for hero composition and motion.
4. Project-specific PRDs, project content, data-integrity notes, asset manifests.
5. This implementation guideline.
6. Acceptance criteria.

If the older homepage reference conflicts with V2.0, follow V2.0.

## Required workflow

### Phase A — Setup
Initialize Next.js App Router with TypeScript and Tailwind CSS in a separate application directory. Configure Manrope and IBM Plex Mono. Use Motion for React for restrained motion.

### Phase B — Plan
Report the project directory, setup choices, missing assets, and implementation plan before building the visual sections.

### Phase C — First build
Implement global design tokens, navigation, V2.0 hero, homepage sections, project cards, and only project detail pages with sufficient source documentation.

### Phase D — Validate
Run lint, type-check, and build. Test desktop, tablet, and mobile. Check orbit motion, icon orientation, reduced-motion behavior, and overflow.

### Phase E — Owner review
Show the local preview. Do not deploy publicly until the owner approves.

## Initial prompt

> Build the Kowallskyy portfolio using the supplied handoff documents. The owner has not started coding, so initialize a new Next.js App Router project with TypeScript and Tailwind CSS in a separate application directory. Configure Manrope and IBM Plex Mono using `next/font/google`, and use Motion for React for restrained motion.
>
> The owner maintains separate handoff folder structures. Do not merge or relocate them. Read the latest global context, design system, and project source documents. Use **Homepage Reference V2.0** as the sole current authority for homepage composition. The older homepage reference is historical and must not override V2.0.
>
> The hero must use a centered owner portrait with two orbital layers: inner circular subheadline rotating clockwise once every 70 seconds, and outer verified technology icons rotating counter-clockwise once every 100 seconds. Keep icons upright using counter-rotation. Keep the headline, supporting copy, and CTAs outside the dense orbit. Keep the portrait static. Respect `prefers-reduced-motion`, and simplify the orbit on mobile where needed.
>
> Do not invent owner portrait assets, skills, contact details, metrics, project outcomes, or testimonials. If the approved portrait is missing, use a clearly marked temporary placeholder and report the missing asset.
>
> Build the homepage sections in order: Hero, About, Selected Work, Experience & Education, Capabilities, Contact. Build project detail pages only when their source documents and assets are present. Follow each project's data-integrity notes and asset manifest.
>
> For AI Data Analyst Agent, implement the Langflow sequence as a custom responsive diagram, not as a raw Langflow screenshot. Do not add unverified RAG, vector database, or autonomous tool-calling functionality.
>
> First return the setup and implementation plan, then implement the first visual version for local preview. Validate desktop, tablet, mobile, reduced-motion behavior, lint, type-check, and production build. Do not deploy publicly before owner review.

## Missing-file policy

If a referenced document or asset is missing:
- Do not invent it.
- Do not substitute an unrelated asset.
- Report the missing item.
- Use a clearly marked placeholder only where necessary for local preview.
- Do not create dead project links.

## Change management

When the owner changes a decision, update the relevant source document and changelog. Do not silently modify unrelated project facts.
