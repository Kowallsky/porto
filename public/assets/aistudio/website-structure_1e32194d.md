# WEBSITE STRUCTURE

**Project:** Kowallskyy Portfolio  
**Document:** `website-structure.md`  
**Status:** Final  
**Scope:** Public portfolio information architecture

---

## 1. Site Architecture

The website is a multi-page portfolio. The homepage introduces the professional profile and highlights selected work. Each featured project opens a dedicated case-study page.

```text
/
├── Home
├── Projects
│   ├── /projects/automotive-sales-analysis
│   ├── /projects/us-law-firms-data-collection
│   ├── /projects/ai-powered-data-analysis
│   └── /projects/semantic-retrieval-running-shoes
└── Contact
```

The paths above are the intended information architecture. Preserve existing route conventions in the current codebase if routes already exist; do not rename or restructure working routes without checking the project first.

## 2. Homepage Sections

The homepage should contain these sections in this order:

1. **Hero**
   - Professional positioning.
   - Main value proposition.
   - Primary and secondary calls to action.
   - Professional portrait-led composition.

2. **About**
   - Concise professional introduction.
   - Data analytics foundation and AI automation direction.
   - Avoid repeating the full project descriptions.

3. **Selected Work**
   - Four featured project cards.
   - Each card contains a project title, concise description, relevant category/tool context, and a link to its detail page.
   - Use the project order defined in `portfolio-overview.md`.

4. **Experience & Education**
   - Relevant work experience, teaching experience, education, and selected certifications.
   - Keep entries concise and factual.

5. **Capabilities**
   - Data Collection & Web Scraping.
   - Data Analysis & Reporting.
   - AI Integration & Workflow Automation.

6. **Contact**
   - Clear contact information or links supplied by the owner.
   - Do not invent email addresses, social URLs, or contact details.

## 3. Project Detail Pages

Each featured project should have a dedicated route and a case-study layout.

The Automotive Sales Analysis page is the first detailed case study and is governed by:

`03_PROJECT_DETAILS/automotive-sales-analysis/PRD.md`

Its project-specific content and evidence are governed by:
- `project-content.md`
- `data-integrity-notes.md`
- `asset-manifest.md`

Other project pages should follow a reusable case-study component pattern, but their section content must be based on their own approved PRDs and evidence. Do not copy Automotive Sales Analysis metrics or task descriptions into other project pages.

## 4. Navigation

Use a simple, predictable navigation system with links to the main homepage sections and project area.

Requirements:
- Navigation must work on desktop and mobile.
- Mobile navigation must have an accessible open/close interaction.
- Current or active navigation state should be visually clear where appropriate.
- Avoid adding unnecessary navigation levels.
- Project detail pages must provide a clear route back to the homepage or projects section.

## 5. Responsive Behavior

Design mobile-first and verify at minimum:
- Small mobile screens.
- Standard mobile screens.
- Tablet widths.
- Desktop widths.

Requirements:
- No horizontal page overflow.
- Project cards stack cleanly on narrow screens.
- Dashboard and evidence screenshots scale within their containers.
- Text remains readable without requiring zoom.
- Navigation and calls to action remain usable with touch input.
- Avoid hover-only interactions for essential information.

## 6. Reusable Page Components

Where appropriate, build reusable components for:
- Site navigation.
- Hero section.
- Section heading.
- Project card.
- Project metadata.
- Project workflow/process steps.
- Screenshot or media presentation.
- KPI/statistic display.
- Contact section.
- Footer.

Project-specific content should be data-driven where practical. Do not force projects with different evidence or research methods into an identical content structure if that would reduce clarity.

## 7. URL and Metadata Principles

Each public page should have:
- A descriptive page title.
- A concise meta description.
- A stable, readable URL slug.
- Appropriate social sharing metadata where supported by the existing application.

Use the existing Next.js metadata conventions. Do not introduce a second metadata system.

## 8. Implementation Constraints

- Inspect the existing codebase before editing.
- Preserve existing working configuration and conventions.
- Do not rebuild the site in another framework.
- Do not add dependencies unless they provide a clear implementation benefit.
- Do not create placeholder links that appear functional.
- Do not invent content for sections where owner-supplied information is missing.

## 9. Relationship to Other Documents

- `portfolio-overview.md`: identity, audience, positioning, and content principles.
- `design-system.md`: visual language and design tokens.
- `technology-stack.md`: implementation technologies and constraints.
- `homepage-reference.md`: homepage-specific composition and copy direction.
- Project PRDs: project detail page requirements.

---

**End of Website Structure.**
