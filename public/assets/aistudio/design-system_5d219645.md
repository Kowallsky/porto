# DESIGN SYSTEM

**Project:** Kowallskyy Portfolio  
**Document:** `design-system.md`  
**Status:** Final — Global Design Direction

---

## 1. Design Direction

The visual identity is a restrained, dark, editorial technology portfolio.

Core characteristics:
- Minimal and deliberate.
- Strong typography and clear hierarchy.
- High contrast without excessive decoration.
- Selective use of glass-like surfaces.
- Signal red as a controlled accent.
- Professional imagery and evidence-led project presentation.

The design should feel technical and contemporary without resembling a generic SaaS dashboard.

## 2. Color Tokens

Use these established design tokens consistently.

| Token | Hex | Intended Use |
|---|---|---|
| Obsidian | `#111211` | Main page background |
| Graphite | `#1B1D1A` | Secondary surfaces and cards |
| Signal Red | `#E54843` | Accent, selected highlights, key interactive states |
| Off-white | `#F0EFEA` | Primary text on dark surfaces |
| Muted Text | `#A7AAA4` | Supporting text and secondary labels |
| Divider | `#343633` | Borders, separators, subtle outlines |

Do not introduce a competing accent palette. Additional colors may be used only when required for data visualization and must remain legible and visually subordinate to the site identity.

## 3. Typography

Established typefaces:
- **Manrope** — primary interface and content typography.
- **IBM Plex Mono** — technical labels, metadata, small index markers, and code-oriented details.

Typography principles:
- Use Manrope for headings, paragraphs, navigation, and buttons.
- Use IBM Plex Mono selectively for metadata, categories, dates, and technical annotations.
- Maintain readable body text and adequate line height.
- Use a clear scale between page title, section heading, card title, and body copy.
- Avoid excessive all-caps text.

The fonts are intended to be configured using the existing Next.js font setup with `next/font/google`, subject to the current codebase inspection.

## 4. Layout and Spacing

- Use a consistent centered content container.
- Establish a predictable spacing scale.
- Use generous whitespace around major sections.
- Keep paragraph widths comfortable for reading.
- Align cards and section edges consistently.
- Use responsive grid layouts that collapse naturally on mobile.
- Avoid excessive nested containers and unnecessary visual framing.

Do not invent fixed pixel dimensions before inspecting the existing implementation. Preserve working layout conventions where they already satisfy these principles.

## 5. Surfaces, Borders, and Effects

- Use Graphite for selected cards and secondary surfaces.
- Use Divider for subtle borders and separators.
- Apply glass effects selectively, not to every card or section.
- Use restrained blur and transparency; maintain text contrast.
- Avoid heavy shadows, excessive gradients, glowing borders, and decorative effects that compete with content.

## 6. Imagery and Project Evidence

- Prefer original project screenshots and owner-supplied photography.
- Preserve the factual content of screenshots.
- Do not generate replacement screenshots or fake dashboards.
- Use appropriate aspect ratios and responsive image sizing.
- Provide meaningful alt text.
- Use a consistent image treatment across project cards and detail pages.

For Automotive Sales Analysis, follow its `asset-manifest.md` and project PRD for the approved evidence and placement.

## 7. Motion and Interaction

Use motion to support hierarchy and feedback, not as decoration.

Preferred:
- Subtle entrance transitions.
- Small hover/focus transitions on interactive elements.
- Smooth but restrained section reveals.
- Clear active and pressed states.

Avoid:
- Long or distracting animations.
- Excessive parallax.
- Motion that delays access to content.
- Essential information available only on hover.
- Animation that causes layout shifts or harms accessibility.

Respect reduced-motion preferences.

## 8. Buttons and Links

Primary CTA:
- `Explore Projects`

Secondary CTA:
- `Let’s Work Together`

Use Signal Red selectively for emphasis. Maintain clear visual distinction between primary and secondary actions. All interactive elements must have visible keyboard focus states and sufficient contrast.

## 9. Accessibility

- Maintain readable contrast.
- Use semantic HTML landmarks and heading order.
- Ensure keyboard navigation.
- Provide visible focus indicators.
- Add descriptive alt text to meaningful images.
- Do not rely on color alone to communicate status.
- Respect reduced-motion preferences.
- Ensure controls have accessible names.

## 10. Responsive Design

The design system must work across mobile, tablet, and desktop.

- Use fluid sizing where appropriate.
- Stack multi-column layouts on narrow screens.
- Prevent horizontal overflow.
- Keep text and controls touch-friendly.
- Ensure screenshots remain legible and do not exceed their containers.

## 11. Design Consistency Rules

1. Use the defined palette as the default visual source.
2. Do not introduce a second brand accent.
3. Use Manrope and IBM Plex Mono consistently.
4. Keep glass effects selective.
5. Prefer content hierarchy over decoration.
6. Preserve the established dark visual identity across homepage and project pages.
7. Project pages may adapt layout to their evidence, but must remain within the global visual system.

---

**End of Design System.**
