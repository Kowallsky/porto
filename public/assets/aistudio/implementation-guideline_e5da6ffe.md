# IMPLEMENTATION GUIDELINE — KOWALLSKYY PORTFOLIO

**Version:** 1.1  
**Status:** Latest implementation instructions  
**Purpose:** Build the first working visual version of the Kowallskyy portfolio.

---

## 1. Objective

Build the first presentable version of the Kowallskyy portfolio website so the owner can review the actual visual design, navigation, responsive behavior, homepage composition, and project presentation before adding more projects.

The immediate goal is a working local preview, not public deployment.

## 2. Project setup

The owner has confirmed that website coding has not started.

Initialize a new application in a separate project directory using:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Manrope and IBM Plex Mono through `next/font/google`
- Motion for React for restrained interface animation

Use compatible stable package versions available at implementation time and record exact versions in `package.json` and the lockfile.

Keep application source code separate from all handoff/documentation folders. Do not place source code inside a documentation package.

If an application repository already exists when implementation begins, inspect and preserve it instead of recreating it.

## 3. Source-document hierarchy

The owner maintains two separate handoff structures. Do not merge, rename, or relocate them without permission.

For implementation:
1. Use the latest approved global context and design-system documents.
2. Use **Homepage Reference V2.0** as the sole current authority for homepage composition and hero behavior.
3. Treat the older homepage reference as historical only; do not combine its previous hero layout with V2.0.
4. Use project-specific PRD, project content, data-integrity notes, and asset manifest for project facts.
5. Use the actual supplied asset filenames; never guess or rename them.

If documents conflict:
- Positioning: latest approved portfolio overview.
- Global tokens and typography: latest approved design system.
- Homepage hero and orbit behavior: Homepage Reference V2.0.
- Project facts: relevant project content and data-integrity notes.
- Asset paths: relevant asset manifest plus actual files.

If a required document or asset is missing, report it. Do not invent content.

## 4. First implementation scope

Build:
1. Responsive global navigation.
2. Homepage hero.
3. About.
4. Selected Work.
5. Experience & Education.
6. Capabilities.
7. Contact.
8. Reusable project-card component.
9. Reusable project-detail page structure for documented projects.
10. Responsive styling, restrained motion, metadata, and accessible interactions.

Do not build a CMS, database, authentication, or contact backend unless an existing configured service is supplied. Do not deploy publicly before owner review.

## 5. Homepage hero — mandatory V2.0 composition

The latest homepage reference defines a **central portrait surrounded by two orbital layers**. This replaces the previous conventional portrait-led/two-column hero direction.

### 5.1 Approved copy

**Positioning label:** `Data & AI Automation Engineer`

**Headline:** `Turning Data Into Intelligence.`

**Supporting copy:** `Building analytical solutions and intelligent workflows through data, AI, and automation.`

**Primary CTA:** `Explore Projects`

**Secondary CTA:** `Let’s Work Together`

### 5.2 Composition

- Place the owner's approved portrait at the visual center of the hero.
- Inner orbit: circular subheadline following a circular path around the portrait.
- Outer orbit: curated technology/tool icons on a larger circular path.
- Keep headline, supporting copy, navigation, and CTAs outside dense orbital paths.
- The headline does not rotate.
- The portrait remains static and visually dominant.
- Use the approved hybrid cinematic/editorial portrait treatment.
- Use a controlled red atmosphere/radial glow on an Obsidian background.
- Preserve face recognizability. Do not distort or obscure the face.
- Do not use stock portraits or fabricate an owner portrait.

### 5.3 Orbit content

Inner orbit text:
`DATA ANALYTICS · AI AUTOMATION · INTELLIGENT WORKFLOWS ·`

Outer orbit may include these tools, subject to the owner's actual skills and evidence:
- Python
- SQL
- Pandas
- Excel
- Power BI
- n8n
- Langflow
- Gemini

Use a controlled set of 6–8 icons. Do not add tools that cannot be substantiated. Keep icons recognizable and labels legible.

### 5.4 Motion specification

| Element | Direction | Duration |
|---|---|---:|
| Inner circular subheadline | Clockwise | 70 seconds / rotation |
| Outer tool-icon orbit | Counter-clockwise | 100 seconds / rotation |
| Portrait | Static | No continuous rotation |

- Use linear, continuous rotation without abrupt acceleration or pauses.
- Counter-rotate outer icons so their symbols remain upright.
- Do not counter-rotate circular text in a way that damages legibility.
- Optional portrait glow may change opacity subtly; avoid bouncing or large scaling.
- Hover/focus may emphasize an icon or show a tooltip, but must not change orbit speed.
- Respect `prefers-reduced-motion`: disable continuous orbit motion and present a static composition.
- Prefer transform-based animation to avoid layout reflow.
- Ensure the orbit does not cause horizontal overflow.

### 5.5 Responsive behavior

Desktop:
- Portrait centered.
- Both orbital layers visible.
- Headline and CTAs clearly separated from orbit.

Tablet:
- Reduce orbit diameter and icon spacing.
- Prevent collision with navigation and text.

Mobile:
- Keep portrait centered.
- Reduce icon count and orbit diameter if necessary.
- Preserve readable circular text.
- Stack label, headline, portrait/orbit, supporting copy, and CTAs in a clear order.
- If the full orbit becomes crowded, simplify it rather than shrinking every element excessively.
- No horizontal scrolling.

### 5.6 Portrait asset handling

Use only the owner's approved portrait. If the actual image is absent from the application assets:
- Use a clearly marked temporary placeholder in local development.
- Request the correct asset from the owner.
- Do not use a stock portrait or generate a substitute.

## 6. Global visual system

Follow the latest approved `design-system.md`.

| Token | Value |
|---|---|
| Obsidian | `#111211` |
| Graphite | `#1B1D1A` |
| Signal Red | `#E54843` |
| Off-white | `#F0EFEA` |
| Muted Text | `#A7AAA4` |
| Divider | `#343633` |

Typography:
- Manrope for headings and body copy.
- IBM Plex Mono for labels, metadata, and technical details.

Style:
- Dark editorial.
- Cinematic but restrained.
- Selective glass effects.
- Subtle grain/noise or technical texture only where useful.
- Avoid excessive neon, gradients, glitch effects, and decorative clutter.

## 7. Homepage sections

Build in this order:

1. Hero
2. About
3. Selected Work
4. Experience & Education
5. Capabilities
6. Contact

Keep the homepage concise. Full technical narratives belong on project detail pages.

### About
Briefly cover the Informatics background, foundation in data analytics, and development focus in AI integration/workflow automation. Do not reproduce the full CV.

### Selected Work
Current featured project candidates:
1. Automotive Sales Analysis — KarirNex bootcamp.
2. US Law Firms Data Collection — freelance.
3. AI Data Analyst Agent — IBM / Hacktiv8 learning project.
4. Semantic Retrieval for Running Shoes — academic research.

Only display source-supported titles and descriptions. Create links only when their destination pages exist. Never create dead links.

Project-specific factual constraints:
- Automotive Sales Analysis: distinguish bootcamp tasks; do not combine conflicting Task 3 and Task 4 figures.
- US Law Firms Data Collection: final client-requested output was 500 records; sources were Sulekha and Google Maps; collection was semi-automated due to CAPTCHA friction on Sulekha; keep full client dataset private; preserve exact asset basenames `sample1`, `sample2`, `maps`, `sulekha` and actual extensions.
- AI Data Analyst Agent: retain exact title. Langflow sequence: Read File → Sentiment Prompt → Gemini 3.1 Flash Lite → Summary & Action Items Prompt → Gemini 2.5 Flash → Chat Output. Dataset has 1,001 reviews across multiple consumer-electronics categories despite its filename. Use the custom workflow diagram, dataset preview, and approved output evidence according to its asset manifest. Do not claim RAG, vector search, autonomous tool calling, measured sentiment accuracy, or complete row-level processing.
- Semantic Retrieval for Running Shoes: academic research; do not claim production deployment or commercial usage.

### Experience & Education
Use confirmed experience and education only, including freelance data collection/scraping, Office Administration Instructor experience, Informatics education at Universitas AMIKOM Yogyakarta, and verified certifications. Do not invent dates or titles.

### Capabilities
Show:
1. Data Collection & Web Scraping.
2. Data Analysis & Reporting.
3. AI Integration & Workflow Automation.

Keep descriptions concise. Detailed tool evidence belongs on project pages.

### Contact
Use only owner-supplied contact details and verified profile URLs.

## 8. Project detail page template

Use a flexible structure:
1. Project hero: title, category/context, concise summary.
2. Overview: problem, objective, context.
3. Process/workflow: only evidenced steps.
4. Evidence: original screenshots or approved diagrams.
5. Findings/results: approved figures only.
6. Challenges and decisions.
7. Takeaways.
8. Navigation to existing routes only.

Adapt the layout to the project type. Do not force identical sections on analytics, scraping, AI workflow, and academic research projects.

## 9. AI Data Analyst Agent workflow diagram

Build the Langflow workflow as a native responsive diagram using React/TypeScript, SVG/CSS, and the already selected motion approach.

Sequence:
1. CSV Input / Read File
2. Sentiment Prompt
3. Gemini 3.1 Flash Lite
4. Summary & Action Items Prompt
5. Gemini 2.5 Flash
6. Chat Output

Desktop: horizontal nodes with directional connectors. Mobile: vertical stack. Hover/focus highlights a node and adjacent connector. Clicking may reveal a concise explanation, but the sequence must remain understandable without interaction.

Do not add embeddings, vector database, RAG retrieval, autonomous tools, or other unverified stages. Follow the AI Data Analyst Agent project's `workflow-diagram-spec.md`.

## 10. Engineering and quality rules

- Use Next.js App Router and TypeScript.
- Preserve a clean, reusable component structure without premature abstraction.
- Use Manrope and IBM Plex Mono through `next/font/google`.
- Use Tailwind CSS and Motion for React where appropriate.
- Do not add unnecessary dependencies.
- Use semantic HTML, accessible labels, keyboard focus, meaningful alt text, and sufficient contrast.
- Respect reduced-motion preferences.
- Store structured content separately from presentation where practical.
- Use actual asset paths and existing filenames.
- Do not invent metrics, outcomes, testimonials, contact details, or project screenshots.

## 11. Review and release loop

1. Initialize the app and verify the initial development server/build.
2. Implement global styles and navigation.
3. Implement the V2.0 central portrait/orbit hero.
4. Implement homepage sections and project cards.
5. Implement only project detail pages supported by available documentation.
6. Validate desktop, tablet, and mobile.
7. Run lint, type-check, and production build.
8. Show local preview to the owner.
9. Apply feedback.
10. Deploy only after explicit owner approval.

---

**End of Implementation Guideline V1.1.**
