# ACCEPTANCE CRITERIA — KOWALLSKYY PORTFOLIO

**Version:** 1.1

## Project setup
- [ ] New Next.js App Router project initialized in a directory separate from handoff folders.
- [ ] TypeScript and Tailwind CSS configured.
- [ ] Manrope and IBM Plex Mono configured with `next/font/google`.
- [ ] Motion for React configured if needed.
- [ ] Exact package versions and lockfile recorded.
- [ ] Initial dev server and production build work.

## Homepage reference authority
- [ ] Homepage Reference V2.0 is used as the sole current hero visual authority.
- [ ] Older homepage reference is not merged into the new composition.
- [ ] Global design tokens remain consistent with the approved design system.

## Hero content
- [ ] Positioning label: `Data & AI Automation Engineer`.
- [ ] Headline: `Turning Data Into Intelligence.`
- [ ] Supporting copy matches approved text.
- [ ] CTAs: `Explore Projects` and `Let’s Work Together`.

## Hero composition and motion
- [ ] Owner portrait is centered and visually dominant.
- [ ] Inner orbit contains circular subheadline.
- [ ] Inner orbit rotates clockwise in 70 seconds.
- [ ] Outer orbit contains a curated set of verified tool icons.
- [ ] Outer orbit rotates counter-clockwise in 100 seconds.
- [ ] Tool icons remain upright through counter-rotation.
- [ ] Headline and CTAs remain outside the dense orbit.
- [ ] Portrait does not continuously rotate.
- [ ] Motion is smooth, linear, and restrained.
- [ ] `prefers-reduced-motion` disables continuous rotation.
- [ ] No horizontal overflow on desktop, tablet, or mobile.
- [ ] Missing portrait is represented only by a clearly marked temporary placeholder.

## Homepage sections
- [ ] Sections appear in order: Hero, About, Selected Work, Experience & Education, Capabilities, Contact.
- [ ] Homepage remains concise.
- [ ] No unsupported personal or professional claims.

## Project cards and routes
- [ ] Reusable project-card component.
- [ ] Project titles and descriptions are source-supported.
- [ ] Bootcamp, freelance, and academic contexts are labeled correctly.
- [ ] No broken or dead links.
- [ ] Detail pages are implemented only where documentation and assets are sufficient.
- [ ] Exact asset names and data-integrity constraints are respected.

## AI Data Analyst Agent
- [ ] Exact project title retained.
- [ ] Multi-category dataset scope represented accurately.
- [ ] Workflow sequence and model names match source evidence.
- [ ] Custom responsive workflow diagram used instead of raw Langflow canvas.
- [ ] No unsupported RAG, vector database, autonomous tool calling, accuracy, or row-level processing claims.

## Responsive and accessibility
- [ ] Desktop, tablet, and mobile layouts work.
- [ ] No horizontal overflow.
- [ ] Keyboard navigation and visible focus states work.
- [ ] Semantic headings and landmarks are used.
- [ ] Images have meaningful alt text.
- [ ] Contrast is sufficient.
- [ ] Essential information does not depend on hover.
- [ ] Reduced-motion preference is respected.

## Technical quality and review
- [ ] Lint passes if configured.
- [ ] TypeScript check passes.
- [ ] Production build succeeds.
- [ ] No broken image paths or internal routes.
- [ ] No avoidable console errors.
- [ ] Local preview shown to owner.
- [ ] No public deployment before owner approval.

**Definition of done:** A working local portfolio preview accurately implements Homepage Reference V2.0 and can be reviewed on desktop and mobile.
