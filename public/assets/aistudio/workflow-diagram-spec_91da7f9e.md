# Workflow Diagram Specification — AI Data Analyst Agent

**Version:** 1.2  
**Status:** Final visual specification

## Purpose

Create a custom responsive workflow illustration for the AI Data Analyst Agent case-study page. Explain the processing sequence without displaying the raw Langflow canvas screenshot.

## Six-stage sequence

1. **CSV Input / Read File** — reads the customer review CSV. Dataset preview shows Product_name, Review, and Rating. The dataset includes multiple consumer-electronics product categories.
2. **Sentiment Prompt** — applies prompt instructions for sentiment-oriented analysis.
3. **Gemini 3.1 Flash Lite** — first language-model processing stage, as shown in the original workflow.
4. **Summary & Action Items Prompt** — structures the second-stage instruction for synthesizing findings and requesting business action items.
5. **Gemini 2.5 Flash** — second language-model processing stage, as shown in the original workflow.
6. **Chat Output** — displays generated summary, action items, and sentiment label.

## Implementation and interaction

- Implement as a native responsive React/Next.js component using SVG and CSS, not as a static raster image.
- Desktop: horizontal connected node cards.
- Mobile: vertical connected node cards.
- Hover/focus highlights a node and adjacent connectors.
- Click may expand a short description; the diagram must remain understandable without clicking.
- Use accessible focus states and semantic controls.
- Respect `prefers-reduced-motion`.
- Motion should be restrained and purposeful.
- Use portfolio tokens: Obsidian `#111211`, Graphite `#1B1D1A`, Signal Red `#E54843`, Off-white `#F0EFEA`, Muted text `#A7AAA4`, Divider `#343633`.

## Accuracy boundaries

- This is a sequential prompt-and-LLM workflow.
- Do not add embeddings, vector databases, RAG retrieval nodes, autonomous tool calling, agent-to-agent communication, or unverified preprocessing/deployment stages.
- Do not claim sentiment accuracy, full-row processing, or row-level traceability without evaluation evidence.
- Preserve model names exactly as displayed in the workflow reference.

## Evidence roles

- `assets/workflow-reference.png`: internal architecture reference; do not show raw as the primary workflow visual.
- `assets/dataset-preview.png`: visible dataset evidence.
- `assets/agent-output-reference.png`: visible representative output evidence. It is consistent with the confirmed multi-category dataset scope, but do not claim independently measured accuracy.
