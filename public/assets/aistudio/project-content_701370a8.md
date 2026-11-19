# Project Content — AI Data Analyst Agent

**Version:** 1.0  
**Status:** Draft for portfolio case study

## Project title

# AI Data Analyst Agent

## Short description

An AI-assisted customer review analysis workflow built in Langflow. It uses prompt templates and Gemini language models to interpret customer reviews across multiple consumer-electronics product categories, summarize customer feedback, and generate business-oriented action recommendations.

## Project overview

The project explores how an LLM-based workflow can help transform unstructured customer review text into more accessible insights. The user provides a CSV containing laptop product names, written reviews, and ratings. The workflow processes the input through sequential prompt and language-model components, then returns a chat response.

## Dataset

File: `laptop_online_review.csv`

- 1,001 review records across multiple product categories.
- 108 unique product names.
- Four columns: `Unnamed: 0`, `Product_name`, `Review`, and `Rating`.
- No missing values in the supplied file.
- No exact duplicate rows.
- Rating distribution: 57 one-star, 8 two-star, 58 three-star, 238 four-star, and 640 five-star reviews.

## Workflow

1. **Read File** — accepts the CSV review dataset.
2. **Sentiment Prompt** — instructs the model to classify sentiment.
3. **Gemini 3.1 Flash Lite** — processes the first prompt.
4. **Summary & Action Items Prompt** — instructs the model to synthesize findings and recommend actions.
5. **Gemini 2.5 Flash** — generates the second-stage response.
6. **Chat Output** — displays the result.

Model names are transcribed from the supplied workflow screenshot and should be retained as displayed unless the original Langflow project confirms a different configuration.

## Prompt engineering

The prompt design constrains the final response to formal Bahasa Indonesia and restricts the sentiment label to Positive, Neutral, or Negative. The analysis criteria include product quality, performance and features, price and value, delivery and packaging, and overall satisfaction. The second prompt requests actionable recommendations.

The screenshots also document an iteration: an initial strict-JSON prompt failed Langflow template validation because of nested braces / format-specifier handling. A later prompt version simplified the expected output into a narrative summary and sentiment label, after which a response was displayed.

## Technical stack

- Langflow
- Gemini 3.1 Flash Lite
- Gemini 2.5 Flash
- Prompt Engineering
- CSV
- Python / Pandas for the independent dataset audit in this documentation

Only list Python/Pandas as part of the project implementation if the owner confirms they were used in the actual workflow. The CSV audit performed for this portfolio documentation does not prove they were part of the original Langflow build.

## Outcome

The available evidence demonstrates a working Langflow flow with file ingestion, sequential prompt templates, two language-model components, and chat output. It also demonstrates successful generation of a narrative response in the screenshot.

Do not claim measured time savings, sentiment accuracy, complete row-level classification, or business impact without additional evaluation evidence.

## Evidence to show on the page

- Langflow full workflow screenshot.
- First prompt configuration screenshot.
- Revised prompt configuration screenshot.
- Chat output screenshot, only if its content is confirmed to correspond to the laptop CSV.
- Sanitized dataset preview or dataset schema visual.

## Source priority

1. Langflow workflow and prompt screenshots: primary source for implemented architecture and observed prompt behavior.
2. `laptop_online_review.csv`: primary source for dataset contents and audited statistics.
3. Project overview PDF: supporting context only. If its claims or sample output conflict with the workflow screenshots or CSV, do not use the conflicting PDF content as factual project evidence.
