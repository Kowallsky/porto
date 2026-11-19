# PROJECT CONTENT — AUTOMOTIVE SALES ANALYSIS

**Version:** 1.1  
**Status:** Final — Content Reference  
**Project Slug:** `automotive-sales-analysis`

---

## 1. Project Information

| Field | Description |
|---|---|
| Project Name | Automotive Sales Analysis |
| Project Type | Descriptive Data Analytics |
| Context | KarirNex Data Analyst Bootcamp |
| Organizer | KarirNex |
| Activity Period | 2–9 July 2026 |
| Domain | Automotive Sales |
| Primary Output | Power BI Sales Dashboard |
| Tools | Microsoft Excel, Google BigQuery, Python, Power BI |

### Project Context

This project was completed as part of the KarirNex Data Analyst Bootcamp. It consists of several practical exercises involving automotive transaction data, covering Trade-In analysis, SQL querying, exploratory data analysis, and dashboard development.

The exercises demonstrate the application of different data analytics tools to examine sales-related information, including product categories, branch performance, payment methods, and transaction status.

**Important scope clarification:** The bootcamp exercises must be treated as separate analytical tasks with their own scope and reported results. The available materials do not establish that every task used an identical dataset, data scope, or fully reconciled analytical pipeline. Do not describe the project as one continuous end-to-end pipeline in which all task results are directly comparable.

This is a bootcamp project, not a production deployment or external client engagement.

---

## 2. Project Overview

### Short Description

A multi-stage automotive data analytics bootcamp project involving Excel, SQL, Python, and Power BI exercises. The work explores Trade-In activity, practices data querying and exploratory analysis, and presents selected automotive sales results through an interactive Power BI dashboard.

### Project Objectives

- Explore automotive transaction data and identify relevant sales patterns within each exercise.
- Practice data processing, querying, and aggregation using different analytical tools.
- Examine sales-related information across categories, branches, products, and payment methods.
- Develop an interactive Power BI dashboard to present the results of the Task 4 exercise.

### Analytical Scope

The bootcamp project contains four main workstreams:

1. **Task 1 — Excel:** Trade-In transaction and product analysis.
2. **Task 2 — SQL:** Data querying and aggregation exercises using Google BigQuery.
3. **Task 3 — Python:** Data exploration, preparation, and visualization exercises using Google Colab.
4. **Task 4 — Power BI:** Automotive sales dashboard development and dashboard-based analysis.

These workstreams describe the structure of the bootcamp assignments. They should not be interpreted as proof that all tasks used an identical dataset or form one reconciled analytical pipeline.

---

## 3. Analytical Workstreams

### Task 1 — Excel Analysis

**Tool:** Microsoft Excel

**Activities:**
- Analyze Trade-In transaction patterns.
- Identify customers with frequent Trade-In transactions.
- Compare Trade-In activity across branches.
- Examine product and vehicle color combinations.

**Selected Findings from Task 1:**
- Customer_3881 recorded the highest number of Trade-In transactions in this exercise, with 2 transactions.
- Malang recorded 27 Trade-In transactions out of 57 total transactions, representing approximately 47.37%.
- Wuling Air ev Long Range was the highest-selling model in the examined Task 1 data, with 56 units sold.
- White was the most frequently sold color for that model, with 19 units.

**Portfolio Evidence:**

Use the original Excel screenshot showing the branch Trade-In Pivot Table. Present these findings as Task 1 results only.

### Task 2 — SQL Analysis

**Tool:** Google BigQuery

**Activities:**
- Practice querying automotive transaction data.
- Apply SQL aggregation and filtering.
- Examine sales-related data through assigned analytical exercises.

**Portfolio Evidence:**

Use the original BigQuery screenshot to demonstrate the SQL query and its corresponding result.

Do not use numerical results from this exercise as Task 4 dashboard KPIs unless the dataset scope and calculation are independently verified.

### Task 3 — Exploratory Data Analysis

**Tool:** Python — Google Colab

**Activities:**
- Explore the structure and characteristics of the data.
- Perform data inspection and preparation.
- Examine sales distribution and branch-category combinations.
- Create exploratory visualizations to support analysis.

**Portfolio Evidence:**

Use the original Python notebook screenshot showing the branch-category sales visualization.

The Python exercise is presented as evidence of exploratory analysis. Its numerical results must remain separate from the Task 4 Power BI dashboard results.

### Task 4 — Dashboard Development

**Tool:** Microsoft Power BI

**Activities:**
- Develop an interactive automotive sales dashboard.
- Present overall sales performance through KPI cards.
- Compare sales across categories, branches, and products.
- Examine monthly sales trends.
- Analyze payment methods and transaction status.
- Apply slicers to explore filtered results.

**Primary Output:**

The Task 4 Power BI dashboard is the main visual output of this project and should be displayed prominently on the project detail page.

---

## 4. Task 4 — Dashboard Results & Key Findings

**Source rule:** All figures in this section refer specifically to the Task 4 Power BI dashboard results documented in the bootcamp presentation. Do not substitute figures from Task 3 or other exercises.

### Overall Performance

| KPI | Result |
|---|---:|
| Total Sales | Rp26.02 Billion |
| Total Transactions | 98 |
| Total Quantity | 119 |
| Completion Rate | 89.8% |

### Sales by Category

- Highest-performing category: **MPV**.
- MPV sales: **Rp9.2 Billion**.
- SUV sales: **Rp7.8 Billion**.
- MPV exceeded SUV by approximately **Rp1.4 Billion**.

### Sales by Branch

- Highest-performing branch: **Jakarta**.
- Jakarta sales: **Rp6.5 Billion**.

### Top 5 Products by Sales

| Rank | Product | Sales |
|---|---|---:|
| 1 | Toyota Avanza 1.5 G CVT | Rp2.9 B |
| 2 | Honda BR-V 1.5 E CVT | Rp2.8 B |
| 3 | Mitsubishi Xpander Ultimate | Rp2.6 B |
| 4 | Daihatsu Xenia 1.5 R CVT | Rp2.4 B |
| 5 | Toyota Rush 1.5 G | Rp2.1 B |

### Monthly Sales Trend

- Sales generally increased from January to March.
- Sales declined in April and recovered from May to July.
- A significant increase occurred from August to September.
- September recorded the highest sales in the observed period.
- Sales declined during October and November before increasing again in December.

### Payment Method Distribution

| Payment Method | Share |
|---|---:|
| Kredit | 40.8% |
| Cash + Trade In | 32.7% |
| Cash | 19.4% |
| Kredit + Trade In | 7.1% |

The most frequently used payment method was Kredit, accounting for 40.8% of the reported distribution.

### Transaction Status

| Status | Transactions | Share |
|---|---:|---:|
| Completed | 88 | 89.8% |
| Cancelled | 7 | 7.1% |
| Refund | 3 | 3.1% |
| **Total** | **98** | **100%** |

### Interactive Dashboard Analysis

The dashboard includes slicers to compare category and branch performance.

One documented example is filtering the dashboard to the Jakarta branch. The KPI values and visualizations recalculate to reflect the selected branch rather than the overall results.

---

## 5. Task 4 — Main Business Observations

The following observations are based only on the Task 4 dashboard results.

### 1. MPV Leads Category Sales

MPV generated Rp9.2 Billion in sales, exceeding SUV by approximately Rp1.4 Billion. MPV is therefore the leading category in the displayed Task 4 dashboard results.

### 2. Jakarta Is the Leading Sales Branch

Jakarta contributed Rp6.5 Billion in sales, making it the highest-performing branch in the reported Task 4 results.

### 3. Credit Is the Most Frequently Used Payment Method

Kredit accounted for 40.8% of the payment distribution, followed by Cash + Trade In at 32.7%.

These are descriptive observations. They do not establish the causes of sales performance or prove profitability.

---

## 6. Technical Skills Demonstrated

| Tool | Demonstrated Application |
|---|---|
| Microsoft Excel | Pivot Table analysis and Trade-In exploration |
| Google BigQuery | SQL querying, filtering, and aggregation exercises |
| Python | Data exploration and visualization using Google Colab |
| Power BI | Interactive dashboard development, KPI presentation, and slicer-based analysis |

Only describe the specific activities evidenced by the original project materials. Do not imply advanced proficiency or production-level implementation based on these exercises alone.

---

## 7. Project Takeaways

This bootcamp project provided practical experience with several data analytics tools and analytical tasks.

Key takeaways:

- Applying structured analytical thinking to different data exercises.
- Practicing data exploration and aggregation with Excel and SQL.
- Using Python to support exploratory analysis and visualization.
- Translating the Task 4 dashboard results into a visual, interactive report using Power BI.
- Communicating descriptive findings in a business-oriented format.

---

## 8. Data Integrity & Content Restrictions

These rules are mandatory when preparing or implementing the project detail page.

### 8.1 Do Not Present the Exercises as One Fully Consistent Pipeline

Task 1, Task 2, Task 3, and Task 4 are separate exercises within the bootcamp project.

The available materials do not establish that all tasks use the same dataset, identical data scope, or reconciled results.

Therefore:
- Do not describe the project as one continuous end-to-end pipeline with fully consistent data across all tasks.
- Do not imply that all task results are directly comparable.
- Keep each finding associated with its original task.
- Present the tools as part of the overall bootcamp experience, while distinguishing the work performed in each exercise.

### 8.2 Task 4 Is the Primary Source for Dashboard Figures

Use the Task 4 dashboard results documented in Section 4 for:
- Dashboard KPI cards.
- Category sales findings.
- Branch sales findings.
- Top product rankings.
- Payment method distribution.
- Transaction status.
- Monthly sales trend.

### 8.3 Keep Task 3 Results Separate

The separate Task 3 report contains the following results:

- Total Sales: Rp3.10 Trillion.
- Total Transactions: 10,000.
- Total Quantity: 10,433.
- Completion Rate: 89.66%.
- Highest category: SUV, approximately Rp1.68 Trillion.
- Highest branch: Malang, approximately Rp325.31 Billion.

These figures belong to the Task 3 report. Do not combine them with Task 4 dashboard figures or use them as Task 4 KPIs.

### 8.4 Do Not Use the Conflicting SUV–Malang Insights from the End of the Task 4 Presentation

The final key-insights section of the Task 4 presentation contains statements that identify SUV as the leading category and Malang as the leading branch, with figures resembling the separate Task 3 results.

Those statements conflict with the Task 4 dashboard results documented earlier in the same presentation.

For the portfolio page:
- Use **MPV — Rp9.2 Billion** as the highest-selling category in Task 4.
- Use **Jakarta — Rp6.5 Billion** as the highest-selling branch in Task 4.
- Do not reproduce the conflicting SUV–Malang claims from the final key-insights section.
- Do not use the 4,439 credit transaction figure from that inconsistent section.
- Use the Task 4 payment distribution percentages documented in Section 4.

### 8.5 Task-Specific Findings Must Retain Their Context

Task 1 findings, including the Trade-In results and Wuling Air ev Long Range result, must be attributed to Task 1.

Task 2 SQL screenshots must be treated as evidence of SQL exercises, not as a source of verified Task 4 dashboard KPIs.

Task 3 Python screenshots and findings must be attributed to Task 3 and must not be merged with Task 4 results.

### 8.6 No Fabricated Results

Do not invent:
- Additional KPIs.
- Profit or margin figures.
- Revenue growth percentages.
- Customer segmentation results.
- Business recommendations unsupported by the documented findings.
- Additional dashboard features not evidenced by the original work.

If a value or finding cannot be traced to the relevant source material, omit it rather than estimating or inventing it.

---

## 9. Content Usage for Website

The website should present the project as a concise case study, not as a reproduction of the entire bootcamp report.

Recommended content hierarchy:

1. Project title and short description.
2. Main Task 4 Power BI dashboard screenshot.
3. Project overview and objectives.
4. Four bootcamp workstreams, clearly identified as separate tasks.
5. Task 4 dashboard KPIs and selected findings.
6. Technical evidence for Excel, BigQuery, and Python.
7. Project takeaways and scope limitations.

Avoid implying that all tasks form one reconciled dataset pipeline. Prioritize the analytical work performed, credible visual evidence, and findings whose source and scope are clear.

---

**End of Project Content Document.**
