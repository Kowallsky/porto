# DATA INTEGRITY NOTES — AUTOMOTIVE SALES ANALYSIS

**Document ID:** `ASA-DIN-001`  
**Version:** 1.0  
**Status:** Final  
**Project Slug:** `automotive-sales-analysis`  
**Applies To:** `PRD.md`, `project-content.md`, `asset-manifest.md`, and all implementation outputs for this project  
**Last Updated:** 5 November 2026

---

## 1. Purpose

This document defines the data-integrity rules that must be followed when preparing, writing, designing, and implementing the Automotive Sales Analysis project detail page.

Its purpose is to prevent:
- Mixing figures from different bootcamp tasks.
- Presenting conflicting findings as if they were consistent.
- Treating separate exercises as one verified end-to-end data pipeline.
- Inventing or extrapolating metrics that are not supported by the source materials.
- Assigning a screenshot to a result or tool that it does not represent.

This document is a content constraint, not a replacement for the project content or the page design specification.

---

## 2. Relationship to Other Project Files

The following files have distinct responsibilities:

| File | Responsibility | Relationship to This Document |
|---|---|---|
| `PRD.md` | Defines page structure, layout, components, responsive behavior, and implementation requirements. | Must follow the data and content restrictions defined here. |
| `project-content.md` | Contains the approved project description, task summaries, dashboard results, and takeaways. | Must remain consistent with the source boundaries and restrictions defined here. |
| `data-integrity-notes.md` | Defines source boundaries, conflict handling, and prohibited claims. | This document. |
| `asset-manifest.md` | Maps original screenshots to their intended use on the page. | Must not associate an asset with unsupported metrics or a different task. |
| `implementation-instructions.md` | Tells the implementation agent how to build the page using the project files. | Must instruct the agent to obey this document and the approved project content. |
| `acceptance-criteria.md` | Defines checks for implementation quality and correctness. | Must include checks for data accuracy and source separation. |
| `handoff-guide.md` | Explains the package, reading order, and document precedence. | Must identify this document as the authority for data-integrity constraints. |

### File naming rule

Use these exact filenames and lowercase spelling:

- `PRD.md`
- `project-content.md`
- `data-integrity-notes.md`
- `asset-manifest.md`

Do not create alternate versions with different names inside the project folder unless the project owner explicitly requests a versioned archive.

---

## 3. Source Scope: Four Separate Bootcamp Tasks

The project materials describe four practical tasks:

| Task | Tool | Supported Scope |
|---|---|---|
| Task 1 | Microsoft Excel | Trade-In transaction and product analysis. |
| Task 2 | Google BigQuery | SQL querying, filtering, and aggregation exercises. |
| Task 3 | Python / Google Colab | Data exploration, preparation, and visualization exercises. |
| Task 4 | Microsoft Power BI | Automotive sales dashboard and dashboard-based analysis. |

### Mandatory interpretation

Treat these as separate bootcamp exercises.

The available materials do not establish that all four tasks:
- Used exactly the same dataset.
- Used identical filters or data populations.
- Followed one continuous, reconciled transformation pipeline.
- Produced directly comparable numerical results.

Therefore:

1. Do not describe the four tasks as one fully consistent end-to-end pipeline.
2. Do not imply that figures from one task validate or explain figures from another.
3. Attribute each finding to its originating task.
4. Describe the project as a collection of related practical analytics exercises, with the Task 4 dashboard as the primary visual output.

The phrase “end-to-end automotive sales analysis pipeline” must not be used unless the project owner later verifies and documents a common dataset lineage across all tasks.

---

## 4. Approved Source Priority

When preparing the website, use the following source hierarchy:

### 4.1 Task 4 dashboard content

For dashboard KPIs and findings, use the Task 4 results documented in `project-content.md`, Section 4.

This includes:
- Total Sales.
- Total Transactions.
- Total Quantity.
- Completion Rate.
- Sales by Category.
- Sales by Branch.
- Top 5 Products by Sales.
- Monthly Sales Trend.
- Payment Method Distribution.
- Transaction Status.
- Documented slicer behavior.

### 4.2 Task-specific evidence

Use the original evidence for each task only to demonstrate that task:

- Excel screenshot → Task 1 Trade-In analysis.
- BigQuery screenshot → Task 2 SQL exercise.
- Python screenshot → Task 3 exploratory analysis.
- Power BI screenshot → Task 4 dashboard.

A screenshot may be used to illustrate a tool or activity, but it must not be treated as proof of a numerical result from another task.

### 4.3 Conflict rule

If a source contains contradictory values or claims:

1. Do not silently combine the conflicting information.
2. Do not calculate a compromise or estimate.
3. Follow the explicit source-selection rule in this document.
4. If the conflict cannot be resolved using the documented rules, omit the disputed claim and flag it for review by the project owner.

---

## 5. Task 4 Approved Dashboard Figures

The following figures are approved for the Task 4 dashboard section of the website.

### 5.1 Overall KPIs

| Metric | Approved Value |
|---|---:|
| Total Sales | Rp26.02 Billion |
| Total Transactions | 98 |
| Total Quantity | 119 |
| Completion Rate | 89.8% |

### 5.2 Category Sales

| Category | Sales |
|---|---:|
| MPV | Rp9.2 Billion |
| SUV | Rp7.8 Billion |

Approved finding: MPV is the highest-selling category in the Task 4 dashboard, exceeding SUV by approximately Rp1.4 Billion.

### 5.3 Branch Sales

Approved finding: Jakarta is the highest-performing branch in the Task 4 dashboard, with sales of Rp6.5 Billion.

### 5.4 Top 5 Products by Sales

| Rank | Product | Sales |
|---|---|---:|
| 1 | Toyota Avanza 1.5 G CVT | Rp2.9 B |
| 2 | Honda BR-V 1.5 E CVT | Rp2.8 B |
| 3 | Mitsubishi Xpander Ultimate | Rp2.6 B |
| 4 | Daihatsu Xenia 1.5 R CVT | Rp2.4 B |
| 5 | Toyota Rush 1.5 G | Rp2.1 B |

### 5.5 Payment Method Distribution

| Payment Method | Share |
|---|---:|
| Kredit | 40.8% |
| Cash + Trade In | 32.7% |
| Cash | 19.4% |
| Kredit + Trade In | 7.1% |

Approved finding: Kredit is the most frequently used payment method in the Task 4 results, representing 40.8% of the reported distribution.

### 5.6 Transaction Status

| Status | Transactions | Share |
|---|---:|---:|
| Completed | 88 | 89.8% |
| Cancelled | 7 | 7.1% |
| Refund | 3 | 3.1% |
| Total | 98 | 100% |

### 5.7 Monthly Sales Trend

Approved qualitative finding:
- Sales generally increased from January to March.
- Sales declined in April and recovered from May to July.
- Sales increased significantly from August to September.
- September was the highest-sales month in the reported Task 4 results.
- Sales declined during October and November before increasing again in December.

Do not invent monthly sales amounts or growth rates. The source content provided for this project supports the qualitative trend and identifies September as the peak month, but does not provide a complete monthly numeric series in the approved project content.

---

## 6. Explicitly Excluded or Restricted Figures

### 6.1 Task 3 results must remain separate

A separate Task 3 report contains:

| Metric | Task 3 Reported Result |
|---|---:|
| Total Sales | Rp3.10 Trillion |
| Total Transactions | 10,000 |
| Total Quantity | 10,433 |
| Completion Rate | 89.66% |
| Highest Category | SUV — approximately Rp1.68 Trillion |
| Highest Branch | Malang — approximately Rp325.31 Billion |

These values may be mentioned only when explicitly describing Task 3 and clearly labeling them as Task 3 results.

They must not be:
- Used as Task 4 dashboard KPIs.
- Combined with Task 4 values.
- Used to overwrite the Task 4 results.
- Presented as if they came from the same dashboard state or dataset scope.

For the current concise project page, Task 3 numerical findings are not required. The Python screenshot is sufficient as evidence of the Task 3 exercise unless the project owner later approves a separate Task 3 results section.

### 6.2 Conflicting SUV–Malang statements in the end of the Task 4 presentation

The final key-insights section of the Task 4 presentation includes statements that:
- Identify SUV as the leading sales category with approximately Rp1.68 Trillion.
- Identify Malang as the leading branch with approximately Rp325.31 Billion.
- State 4,439 credit transactions or 44.39%.

These statements conflict with the Task 4 dashboard results documented earlier in the presentation and resemble the separate Task 3 results.

**Do not reproduce these conflicting statements on the website.**

For Task 4, use:
- MPV — Rp9.2 Billion as the highest-selling category.
- Jakarta — Rp6.5 Billion as the highest-performing branch.
- Kredit — 40.8% as the largest payment-method share.

Do not use 4,439 or 44.39% as the Task 4 credit payment result.

---

## 7. Task 1 Findings: Permitted Use

The following findings belong specifically to Task 1:

- Customer_3881: 2 Trade-In transactions.
- Malang: 27 Trade-In transactions out of 57, or approximately 47.37%.
- Wuling Air ev Long Range: 56 units sold.
- White: 19 units for that model.

These findings may be used only when the page explicitly labels them as Task 1 Excel exercise results.

Do not use Task 1 findings as evidence for the Task 4 dashboard or imply that they are derived from the same data population as the dashboard.

---

## 8. Task 2 SQL Evidence: Permitted Use

Task 2 may be represented as evidence of SQL practice using Google BigQuery.

Permitted descriptions:
- SQL querying.
- Filtering and aggregation exercises.
- Exploring sales-related data.

Do not publish a numerical SQL result as a headline business insight unless:
- Its original query and output are available.
- Its calculation is understood.
- Its data scope is known.
- The project owner has verified the result for public presentation.

The BigQuery screenshot is primarily a technical-process artifact, not an approved source for Task 4 dashboard KPIs.

---

## 9. Task 3 Python Evidence: Permitted Use

Task 3 may be represented as evidence of Python-based exploratory analysis using Google Colab.

Permitted descriptions:
- Data exploration and inspection.
- Data preparation exercises.
- Exploratory visualization.
- Branch-category combination analysis.

Do not transfer Task 3 numerical findings into the Task 4 dashboard narrative.

If the Python screenshot contains figures that differ from Task 4, retain the screenshot only in the Task 3 evidence context and do not annotate it with Task 4 metrics.

---

## 10. Claims and Interpretations Not Supported by the Sources

Do not claim or imply any of the following unless additional verified evidence is supplied:

- The project was delivered to an external client.
- The dashboard was deployed to a production environment.
- The project used one verified dataset consistently across all four tasks.
- The analysis established causes of sales performance.
- The analysis measured profit, gross margin, or business profitability.
- The analysis established customer lifetime value or customer segmentation.
- The analysis forecast future sales.
- The analysis measured statistical significance or causal impact.
- The dashboard contains features not visible or documented in the original project materials.

Use descriptive language such as “recorded,” “accounted for,” “was the highest in the reported results,” and “the dashboard shows.”

Avoid causal or exaggerated language such as “caused,” “guaranteed,” “optimized business revenue,” or “increased profitability.”

---

## 11. Implementation Rules for AI Studio

When implementing the Automotive Sales Analysis page:

1. Read `handoff-guide.md` first when available.
2. Read `PRD.md` for page structure and design requirements.
3. Read `project-content.md` for approved copy and project facts.
4. Read this file, `data-integrity-notes.md`, for source boundaries and prohibited claims.
5. Read `asset-manifest.md` before placing any screenshot.
6. Use the original assets without changing their underlying data or fabricating replacement evidence.
7. Do not generate new KPI values, chart values, or business findings.
8. Do not mix Task 1, Task 2, Task 3, and Task 4 figures.
9. If the PRD's proposed wording conflicts with this document's data restrictions, preserve the page design intent but use the data-safe wording and values in this document.
10. If any conflict remains unresolved, do not guess. Omit the disputed content and request clarification from the project owner.

### Priority when project files appear to conflict

For data accuracy:
1. `data-integrity-notes.md` — source boundaries and conflict restrictions.
2. `project-content.md` — approved project facts and copy.
3. Original task reports and screenshots — evidence for their own task only.

For page design and implementation:
1. `PRD.md` — page structure and design specification.
2. `implementation-instructions.md` — implementation procedure.
3. `acceptance-criteria.md` — validation requirements.

This separation means that the PRD controls how the page is built, while this document controls which data claims are safe to publish.

---

## 12. Pre-Publication Validation Checklist

Before considering the page complete, verify:

- [ ] Task 1, Task 2, Task 3, and Task 4 are not described as one verified, reconciled dataset pipeline.
- [ ] Task 4 KPI cards show Rp26.02 Billion, 98 transactions, 119 units, and 89.8% completion rate.
- [ ] MPV is shown as the leading Task 4 category at Rp9.2 Billion.
- [ ] Jakarta is shown as the leading Task 4 branch at Rp6.5 Billion.
- [ ] The Task 4 payment distribution uses Kredit 40.8%, Cash + Trade In 32.7%, Cash 19.4%, and Kredit + Trade In 7.1%.
- [ ] Task 4 transaction statuses total 98 transactions.
- [ ] September is identified as the peak month without inventing unsupported monthly values.
- [ ] The conflicting SUV–Malang insights from the end of the Task 4 presentation are excluded.
- [ ] The 4,439 / 44.39% credit figure is excluded from Task 4 content.
- [ ] Task 3 figures are not used as Task 4 KPIs.
- [ ] Task 1 findings are attributed to Task 1.
- [ ] Each screenshot is used only in its correct task context.
- [ ] No unsupported profit, margin, forecast, causal, or production claims appear.
- [ ] All content remains consistent with `project-content.md`.

---

**End of Data Integrity Notes.**
