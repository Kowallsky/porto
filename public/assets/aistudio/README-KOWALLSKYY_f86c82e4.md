# KOWALLSKYY — PORTFOLIO PROJECT DOCUMENTATION

> **Project identity:** Data & AI Automation Engineer  
> **Core message:** Turning Data Into Intelligence.  
> **Purpose:** Documentation and implementation reference for the Kowallskyy personal portfolio website.

---

## 1. Project Overview

Kowallskyy is a personal portfolio designed to present analytical work, data collection capabilities, and AI-powered workflow solutions to recruiters and potential freelance clients.

The portfolio uses a hybrid positioning:

- **Data Analytics as the foundation** — demonstrating data collection, preparation, analysis, and reporting.
- **AI Automation as the differentiator** — demonstrating the ability to connect AI capabilities with practical workflows and business processes.

The website should communicate practical engineering capability through evidence-backed project case studies. It must not imply experience, outcomes, credentials, or technical capabilities that are not supported by the project documentation.

## 2. Brand and Content Direction

| Element | Approved direction |
|---|---|
| Portfolio name | Kowallskyy |
| Professional positioning | Data & AI Automation Engineer |
| Main headline | Turning Data Into Intelligence. |
| Supporting statement | Building analytical solutions and intelligent workflows through data, AI, and automation. |
| Primary audience | Recruiters and potential freelance clients |
| Primary CTA | Explore Projects |
| Secondary CTA | Let’s Work Together |

Keep homepage copy concise. Use dedicated project pages to explain the context, process, tools, evidence, findings, and limitations of each project.

## 3. Design System

The approved visual direction is dark, editorial, and restrained. Use red as a selective accent rather than a dominant decorative element.

| Token | Value | Intended use |
|---|---|---|
| Obsidian | `#111211` | Main background |
| Graphite | `#1B1D1A` | Secondary surfaces |
| Signal Red | `#E54843` | Accent and emphasis |
| Off-white | `#F0EFEA` | Primary text |
| Muted | `#A7AAA4` | Secondary text |
| Divider | `#343633` | Borders and separators |

Typography:
- **Manrope** — primary interface and body typeface.
- **IBM Plex Mono** — technical labels, metadata, and selected details.

Use glass effects, grain, glow, and other visual treatments selectively. Avoid visual clutter, excessive glitch effects, decorative dashboards, or arbitrary code imagery.

## 4. Homepage Reference

**Homepage Reference V2.0 is the current approved visual reference.** Any earlier homepage reference is historical and must not override V2.0.

The hero composition includes:
- A supplied, approved portrait centered in the composition.
- An inner circular text orbit containing: `DATA ANALYTICS · AI AUTOMATION · INTELLIGENT WORKFLOWS ·`
- Inner orbit rotation: **70 seconds**, clockwise.
- An outer orbit containing a curated set of relevant technology icons.
- Outer orbit rotation: **100 seconds**, counter-clockwise.
- Tool icons counter-rotate so their symbols remain upright.
- The portrait remains static; only a subtle glow may be used.
- Headline, supporting copy, and CTA buttons remain outside the rotating orbit.

Motion must be continuous and restrained. Respect `prefers-reduced-motion`. On smaller screens, simplify the orbit and icon count while preventing horizontal overflow.

Do not substitute a stock portrait or fabricate a replacement. If the approved portrait asset is unavailable, use a clearly identified placeholder and request the original asset.

## 5. Website Structure

The planned homepage sections are:

1. **Hero** — professional positioning, headline, supporting statement, and calls to action.
2. **About** — concise professional introduction.
3. **Selected Work** — prioritized project previews linking to detailed case studies.
4. **Experience & Education** — evidence-backed professional and academic background.
5. **Capabilities** — data collection and web scraping, data analysis and reporting, AI integration and workflow automation.
6. **Contact** — clear contact path using verified details only.

Project detail pages should function as case studies. Include only sections and claims supported by the corresponding project documentation.

## 6. Project Case Studies

The documentation package may include the following projects. Use each project's own source documentation as the authority for its content and evidence.

| Project | Scope |
|---|---|
| Automotive Sales Analysis | Bootcamp analytical project involving Excel, BigQuery SQL, Python EDA, and Power BI. Preserve task-specific results and do not merge metrics from different tasks or datasets. |
| US Law Firms Data Collection | Freelance data collection project using Sulekha and Google Maps. Respect the agreed delivery scope and do not expose the full client-owned dataset. |
| AI Data Analyst Agent | IBM/Hacktiv8 course project using a sequential Langflow workflow and Gemini models to analyze customer reviews and produce summaries and action recommendations. Do not describe it as a RAG or multi-agent system. |
| Semantic Retrieval for Running Shoes | Academic information-retrieval project comparing TF-IDF and Sentence Embedding for natural-language product retrieval. |

**Evidence and accuracy rules**
- Do not invent business impact, accuracy, time savings, deployment status, or client outcomes.
- Do not combine metrics from separate tasks or different dataset scopes.
- Do not publish confidential or client-owned data.
- Reconstruct workflow diagrams as responsive interface components when specified; do not rely on raw internal screenshots as the final public-facing diagram.
- If evidence is missing or contradictory, flag the issue instead of silently resolving it.

## 7. Technical Direction

The approved implementation stack is:

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Motion for React
- Manrope and IBM Plex Mono
- Vercel as the intended hosting platform

If no application source code exists, initialize a new Next.js application. Keep application source code separate from documentation folders. Do not assume that a documentation directory is the application root.

Prioritize a working **local preview**. Public deployment requires the owner's explicit approval.

## 8. How to Use This Documentation

Before implementation:

1. Read this README to understand the project and documentation conventions.
2. Read `CHANGELOG.md` to identify recent changes and historical decisions.
3. Read the latest approved Homepage Reference for visual composition.
4. Read the latest Implementation Guide for technical and implementation requirements.
5. Read Acceptance Criteria before considering a phase complete.
6. Read the relevant project documentation and inspect its assets before building each case study.
7. Use the Master Prompt, if included, to guide the coding assistant's audit and implementation workflow.

Do not treat every file as equally authoritative. Use the latest approved version for the subject it governs. Historical files provide context only and must not override newer approved specifications.

### Recommended implementation sequence

1. Documentation and asset audit.
2. Technical implementation plan.
3. Project initialization and design foundation.
4. Homepage implementation.
5. Project detail pages.
6. Responsive behavior and interaction refinement.
7. Testing against Acceptance Criteria.
8. Owner review of the local preview.
9. Deployment only after explicit approval.

## 9. Change Management

Record meaningful changes in `CHANGELOG.md`, including:
- New or revised design decisions.
- Changes to technical requirements.
- New project documentation or assets.
- Corrections to project facts or evidence.
- Changes to implementation status and known issues.

Use clear document versions and dates. Do not overwrite historical decisions without recording what changed and why. Keep archived references clearly marked as historical.

## 10. Important Constraints

- Do not invent or embellish the owner's experience, qualifications, project results, or capabilities.
- Do not change approved design decisions without documenting the proposed change and obtaining approval.
- Do not replace original assets without approval.
- Do not expose private client data.
- Do not add unverified tools, technologies, metrics, or project features.
- Do not deploy publicly without explicit approval.
- If an essential asset or decision is missing, identify it and ask rather than guessing.

---

**Documentation status:** Use the latest approved versions of the individual reference and implementation documents.  
**README role:** This file is the entry point and orientation guide; it does not replace the detailed specifications or project source evidence.
