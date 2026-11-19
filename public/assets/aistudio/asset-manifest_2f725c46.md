# Asset Manifest — US Immigration Law Firms Scraping

**Version:** 1.3  
**Status:** Asset names confirmed by project owner

## Confirmed asset names

| Exact basename | Description | Intended placement |
|---|---|---|
| `sample1` | Final dataset sample, initial set of columns | Hero preview and final dataset section |
| `sample2` | Final dataset sample, middle-to-final columns | Final dataset section, paired with sample1 |
| `maps` | Google Maps scraping result | Data collection — Google Maps |
| `sulekha` | Sulekha scraping result | Data collection — Sulekha |

## Filename handling
- These four basenames are authoritative.
- Do not rename them to descriptive alternatives.
- Do not guess or invent file extensions.
- Preserve each asset's existing extension exactly as supplied.
- When writing implementation paths, use the exact relative path and real extension discovered from the asset folder.
- If moved into the handoff package, preserve basename and extension.

## Usage notes
- `sample1` and `sample2` are two views of the same final sample dataset.
- `maps` and `sulekha` are source-collection evidence.
- All four screenshots have been sanitized by the project owner.
- Do not publish the complete client dataset.

## Folder structure
```text
us-immigration-law-firms-scraping/
├── PRD.md
├── project-content.md
├── data-integrity-notes.md
├── asset-manifest.md
├── case-study-page-content.md
└── assets/
    ├── sample1.<existing-extension>
    ├── sample2.<existing-extension>
    ├── maps.<existing-extension>
    └── sulekha.<existing-extension>
```
