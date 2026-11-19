# Case Study Page Content — AI Data Analyst Agent

**Version:** 1.0  
**Status:** Content draft for portfolio implementation

## Page metadata
- **Title:** AI Data Analyst Agent
- **Category:** AI Integration · Data Analysis · Workflow Automation
- **Platform:** Langflow
- **LLMs shown in workflow:** Gemini 3.1 Flash Lite and Gemini 2.5 Flash
- **Input:** `laptop_online_review.csv`
- **Dataset size:** 1,001 review records

## 1. Hero
### AI Data Analyst Agent
An LLM-powered workflow built with Langflow to transform multi-category consumer-electronics customer reviews into sentiment-oriented insights, concise summaries, and actionable business recommendations.

Use the actual Langflow workflow screenshot as the hero visual.

## 2. Project overview
The project explores how an LLM workflow can support the analysis of unstructured customer reviews. Users provide a CSV file containing product names, review text, and ratings across multiple consumer-electronics categories. The workflow processes the input through prompt templates and Gemini models before displaying a generated response.

## 3. Dataset
Show the dataset schema:
- Product_name
- Review
- Rating
- Unnamed: 0 (source index column)

Dataset facts: 1,001 records, 108 unique product names, no missing values, no exact duplicate rows.

## 4. Workflow architecture
Present the sequence:
Read File → Sentiment Prompt → Gemini 3.1 Flash Lite → Summary & Action Items Prompt → Gemini 2.5 Flash → Chat Output.

## 5. Prompt engineering
Explain the two-stage prompt design:
- Stage 1: sentiment-oriented analysis.
- Stage 2: synthesis into summary and action items.
Mention the prompt-format iteration only as a technical challenge: the initial JSON template failed validation, and a simpler narrative format was subsequently used.

## 6. Generated output
Only use an output screenshot that is verified to correspond to the laptop-only CSV. The owner confirmed that the supplied CSV includes multiple product categories, including phones and household appliances. The supplied output screenshot may therefore be used as a representative generated response, without claiming independently measured accuracy.

## 7. Technical challenge
Langflow Prompt Template validation rejected the initial JSON-oriented prompt because of nested braces / format-specifier handling. The prompt was revised to use a simpler narrative summary and sentiment output format.

## 8. Outcome
The available screenshots demonstrate a sequential Langflow workflow with file ingestion, prompt templates, Gemini model components, and chat output. Avoid quantified performance or business-impact claims until evaluated.

## 9. Suggested page layout
1. Hero — workflow screenshot and project summary.
2. Project overview — problem and objective.
3. Dataset — schema and dataset statistics.
4. Workflow architecture — component sequence.
5. Prompt engineering — prompt stages and iteration.
6. Output — verified laptop-only output example (pending).
7. Technical challenge and learnings.

## Source priority
Workflow screenshots and the supplied CSV are authoritative. Use the overview PDF only as supporting context when consistent. In case of conflict, follow the workflow and CSV.
