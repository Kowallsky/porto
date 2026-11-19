# Data Integrity Notes — AI Data Analyst Agent

**Version:** 1.0  
**Purpose:** Prevent unsupported claims in the portfolio case study.

## 1. Source-of-truth hierarchy

The project owner explicitly set this priority:
1. Langflow workflow screenshots for implementation details.
2. `laptop_online_review.csv` for input data and dataset facts.
3. PDF overview only as supplementary context when it does not conflict with the first two sources.

If the PDF conflicts with the workflow or CSV, prefer the workflow and CSV.

## 2. Dataset audit

Audited file: `laptop_online_review.csv`

- Shape: 1,001 rows × 4 columns.
- Columns: `Unnamed: 0`, `Product_name`, `Review`, `Rating`.
- Missing values: zero in all four columns.
- Exact duplicate rows: zero.
- Unique `Product_name`: 108.
- Rating counts: 1=57, 2=8, 3=58, 4=238, 5=640.

The file contains reviews across multiple consumer-electronics product categories, including laptops, smartphones, and household appliances. The rating distribution is descriptive metadata, not an AI-generated sentiment result. Rating and text sentiment are different measures and should not be treated as interchangeable.

## 3. Workflow evidence

The screenshots show:
- Read File component.
- Prompt Template.
- Gemini 3.1 Flash Lite component.
- Second Prompt Template.
- Gemini 2.5 Flash component.
- Chat Output.

The first prompt screenshot shows an attempted JSON output schema and a validation error mentioning an invalid format specifier / nested template issue. A later screenshot shows a simplified narrative output prompt and a successful response.

Do not claim the failed prompt was the final working configuration.

## 4. Output and dataset consistency

The project owner confirmed that the supplied CSV is the same dataset used in the Langflow workflow and that the dataset includes multiple product categories, including phones and household appliances. Therefore, the broad-category output screenshot is not inherently inconsistent with the dataset scope.

The screenshot demonstrates a generated response, but it does not independently prove that every recommendation is supported by specific source reviews or that every record was processed. Do not claim row-level traceability, sentiment accuracy, or complete processing of all 1,001 records without additional evidence.

## 5. Claims not currently supported

- Sentiment classification accuracy or F1 score.
- Complete row-by-row sentiment analysis of all 1,001 records.
- Quantified reduction in analysis time.
- Business revenue or conversion impact.
- Production deployment or usage by a real e-commerce business.
- RAG, embeddings, vector database, retrieval pipeline, or autonomous tool calling.
- That Python/Pandas were used in the original Langflow workflow (unless confirmed separately).

## 6. Safe wording

Use:
- “LLM-powered review analysis workflow”
- “Prompt-based sentiment analysis”
- “Generated summary and action recommendations”
- “Langflow workflow integrating Gemini language models”

Avoid:
- “Validated sentiment classifier”
- “RAG agent”
- “Autonomous multi-agent system”
- “Analyzed all 1,001 records” unless execution behavior confirms this.

## 7. Privacy and publication

Review text may contain personal or identifying details. Public screenshots should use a small sanitized sample and avoid exposing unnecessary user information.
