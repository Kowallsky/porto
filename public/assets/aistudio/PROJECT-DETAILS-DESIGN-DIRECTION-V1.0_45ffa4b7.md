# KOWALLSKYY — PROJECT DETAILS DESIGN DIRECTION V1.0

**Status:** Proposed visual direction for project detail pages  
**Scope:** Project detail pages only. Homepage Reference V2.0 remains unchanged.

## 1. Purpose

The current project detail pages have a sound information structure, but their repeated dark cards, borders, and uniform grids make them feel too much like dashboards. This document defines a more immersive visual treatment while preserving the existing information architecture, verified project facts, evidence, and technical constraints.

**Direction:** Dark Editorial × Glassmorphism × Immersive Evidence × Interactive Storytelling.

## 2. Documentation hierarchy

This document supplements, and does not replace:
- Homepage Reference V2.0 — homepage visual authority.
- Implementation Guide V1.1 — technical implementation authority.
- Acceptance Criteria V1.1 — quality requirements.
- Project-specific PRDs, project-content documents, asset manifests, and data-integrity notes — factual authority.

If visual styling conflicts with project facts, privacy, accessibility, or existing acceptance criteria, those requirements take priority.

## 3. Visual system

Keep the existing global palette and typography:
- Obsidian `#111211`
- Graphite `#1B1D1A`
- Signal Red `#E54843`
- Off-white `#F0EFEA`
- Muted `#A7AAA4`
- Divider `#343633`
- Manrope and IBM Plex Mono

Add restrained project-detail accents:
- Deep Burgundy `#4A1422`
- Burgundy `#6F1D32`
- Warm Amber `#E8B04A`
- Soft Champagne `#E7D7B8`

Burgundy and amber are supplemental accents for project detail pages, not replacements for the global palette. Use gradients, glow, blur, and glass effects selectively. Avoid turning every section into a gradient card.

## 4. Required design patterns

### 4.1 Glassmorphism Information Panels — flash-card behavior

Use translucent, layered panels for selected project metadata, key facts, tools, and scope information.

Visual treatment:
- Semi-transparent dark or burgundy-tinted surfaces.
- Restrained backdrop blur, fine borders, soft highlights, and subtle depth.
- High text contrast; blur must not reduce legibility.
- Prefer composed rectangular or softly rounded panels over excessive pill shapes.

Motion and interaction:
- Sliding transition: approximately 450–700 ms.
- Hover/focus feedback: approximately 180–280 ms.
- Animate transform and opacity rather than layout dimensions.
- Provide visible previous/next controls and progress indication when content is hidden.
- Support touch swipe and keyboard operation.
- Do not auto-advance important factual content.
- Never make essential information hover-only.
- Respect `prefers-reduced-motion`.
- Do not use a carousel when a static layout would communicate one or two facts more clearly.

### 4.2 Immersive Evidence Presentation

Make dashboards, screenshots, datasets, and workflow evidence visual anchors rather than small images inside generic cards.

Use large media frames, deliberate asymmetric placement, layered captions, source/task labels, restrained ambient glow, and an accessible fullscreen lightbox.

Evidence rules:
- Preserve original screenshot contents; do not fabricate or alter evidence.
- Do not crop away dates, labels, qualifiers, totals, or context.
- Keep source and task attribution visible.
- Separate what the evidence shows from the interpretation.
- Use only supplied sanitized client samples; never expose the full US law firms dataset.
- Keep Automotive tasks separate; never merge their metrics or datasets.
- For AI Data Analyst Agent, the native interactive workflow diagram is the primary workflow visual when specified; do not use an internal raw screenshot as its replacement.
- Optimize image loading for mobile.

### 4.3 Interactive Process Visualization

Explain the actual work process using timelines, selectable nodes, connected steps, progressive detail panels, and restrained animated connectors.

Requirements:
- The complete process sequence remains understandable without interaction.
- Every selectable node is keyboard accessible and works by click/tap, not hover alone.
- Use semantic controls, visible focus, and accessible labels.
- Keep motion purposeful and reduced-motion compatible.
- Do not invent progress indicators, telemetry, or process steps.

Project-specific boundaries:
- Automotive Sales Analysis: Tasks 1–4 are separate exercises, not one reconciled pipeline.
- US Law Firms: accurately distinguish source collection volumes from the final 500-record deliverable. Do not claim automated CAPTCHA bypass or unverified deduplication.
- AI Data Analyst Agent: show the documented six-stage sequential Langflow prompt-and-LLM workflow. Do not call it RAG, vector search, multi-agent, or autonomous tool calling.

### 4.4 Asymmetric Project Hero Layout

Use an editorial asymmetric hero instead of a centered title followed by a generic metadata card.

Suggested composition:
- Main text area: project title, concise summary, context, and relevant action.
- Offset visual area: project-specific dashboard, screenshot, workflow diagram, or verified visual asset.
- Metadata presented as floating glass panels, a compact side rail, or an integrated strip.
- Optional oversized section number or typographic motif, used sparingly.
- Burgundy/amber atmosphere behind the visual focal point where appropriate.

Responsive behavior:
- Desktop: offset two-column composition with intentionally unequal proportions.
- Tablet: reduce the offset and preserve reading order.
- Mobile: stack content deliberately; prevent overlap, clipped text, and horizontal overflow.

Prefer genuine project evidence over arbitrary stock imagery. This asymmetric treatment applies to project detail heroes, not the homepage hero.

## 5. Project-specific expression

### Automotive Sales Analysis
- Make the Power BI dashboard a primary visual anchor.
- Present approved Task 4 metrics clearly.
- Use an interactive selector for Tasks 1–4 while keeping their scopes separate.
- Keep scope clarification visible.
- Do not publish the disputed Task 1 branch Trade-In percentage until verified.

### US Law Firms Data Collection
- Visualize collection, review, and delivery stages accurately.
- Distinguish source volumes from the 500-record final deliverable.
- Use only supplied sanitized sample screenshots.
- Do not expose the full client dataset or claim unverified deduplication.

### AI Data Analyst Agent
- Feature the documented six-stage interactive workflow.
- Present dataset details and representative output as evidence panels.
- Do not claim RAG, embeddings, vector databases, autonomous tools, multi-agent behavior, accuracy, or row-by-row processing of all records without evidence.

### Semantic Retrieval for Running Shoes
- Do not invent or implement a detailed case study until its project-specific documentation and assets are supplied.
- Publication and navigation behavior remain subject to owner approval.

## 6. Motion system

Suggested timings:
- Flash-card slide: 450–700 ms.
- Hover/focus feedback: 180–280 ms.
- Section reveal: subtle opacity and small vertical translation.
- Process-node selection: short highlight transition.
- Lightbox: smooth opacity/scale transition.

Prefer transform and opacity. Avoid excessive blur layers, unnecessary continuous animation, and parallax that interferes with reading. Keep all essential content available without animation and respect `prefers-reduced-motion`.

## 7. Responsive and accessibility requirements

Validate at:
- Desktop: 1440px
- Tablet: 768px
- Mobile: 375px

Ensure:
- No horizontal page overflow.
- Flash cards work with touch and keyboard.
- Glass surfaces retain sufficient text contrast.
- Essential information is not hover-only.
- Lightbox supports Escape and a visible close control.
- Process visualizations work with keyboard and touch.
- Visible focus states and reduced-motion alternatives are provided.

## 8. Implementation boundaries

- Preserve existing project facts, routes, metrics, and data-integrity constraints.
- This is a visual/interaction redesign, not permission to rewrite project content or expand project scope.
- Do not modify Homepage Reference V2.0.
- Do not remove evidence attribution or project-specific data-integrity notes.
- Do not invent testimonials, client logos, outcomes, metrics, or skills.
- Do not deploy publicly without explicit owner approval.

## 9. Acceptance checklist

- [ ] Project detail pages use a distinctive asymmetric hero.
- [ ] Glassmorphism panels are selective, readable, and responsive.
- [ ] Flash-card movement is smooth, controllable, and accessible.
- [ ] Evidence is prominent and inspectable in a lightbox.
- [ ] Process visualizations reflect the actual documented workflow.
- [ ] Project-specific factual boundaries remain intact.
- [ ] Desktop, tablet, and mobile layouts are verified.
- [ ] Reduced-motion preferences are respected.
- [ ] Homepage Reference V2.0 remains unchanged.
- [ ] Local preview is reviewed before deployment.

**End of Project Details Design Direction V1.0**
