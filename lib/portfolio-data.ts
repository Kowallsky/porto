export interface EvidenceItem {
  id: string;
  title: string;
  src: string;
  alt: string;
  taskOrSourceLabel: string;
  observedFacts: string;
  analyticalInterpretation: string;
  scopeNote?: string;
}

export interface FlashCardItem {
  id: string;
  category: string;
  title: string;
  primaryValue?: string;
  description: string;
  details: string[];
  attribution: string;
}

export interface ProcessNode {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  toolOrPlatform: string;
  summary: string;
  activities: string[];
  verifiedFindings: string[];
  scopeBoundary: string;
  evidence?: EvidenceItem;
}

export interface ProjectSummary {
  slug: string;
  index: string;
  title: string;
  shortTitle?: string;
  contextLabel: string;
  categoryMeta: string;
  toolsMeta: string;
  shortDescription: string;
  status: 'published' | 'in-preparation';
  statusBadge?: string;
  route?: string;
  previewImage?: string;
  previewAlt?: string;
  layoutSpan: 'wide' | 'narrow';
}

export const PORTFOLIO_IDENTITY = {
  name: 'Kowallskyy',
  positioning: 'Data & AI Automation Engineer',
  headline: 'Turning Data Into Intelligence.',
  supportingStatement:
    'Building analytical solutions and intelligent workflows through data, AI, and automation.',
  primaryCta: {
    label: 'Explore Projects',
    href: '#selected-work',
  },
  secondaryCta: {
    label: 'Let’s Work Together',
    href: '#contact',
  },
  heroAnnotations: {
    upperLeft: {
      line1: 'DATA ANALYST',
      line2: '>_ AI AUTOMATION ENGINEER',
    },
    upperRight: {
      heading: 'BUILDING ANALYTICAL SOLUTIONS AND INTELLIGENT WORKFLOWS',
      body: 'Connecting data analytics, AI, and automation to solve real-world problems.',
    },
    lowerLeft: {
      heading: 'WORKING PHILOSOPHY',
      line1: 'TURNING RAW DATA INTO DECISIONS',
      body: 'Collecting, processing, and transforming raw data into meaningful insights.',
    },
  },
} as const;

export const FEATURED_PROJECTS: ProjectSummary[] = [
  {
    slug: 'automotive-sales-analysis',
    index: '01',
    title: 'Automotive Sales Analysis',
    contextLabel: 'KarirNex Data Analyst Bootcamp',
    categoryMeta: 'DATA ANALYTICS / BUSINESS INTELLIGENCE',
    toolsMeta: 'Microsoft Excel · Google BigQuery · Python · Power BI',
    shortDescription:
      'A multi-stage automotive data analytics bootcamp project involving separate Excel Trade-In analysis, BigQuery SQL querying, Python exploratory analysis, and an interactive Power BI sales dashboard.',
    status: 'published',
    route: '/projects/automotive-sales-analysis',
    previewImage:
      '/assets/projects/automotive-sales-analysis/01_powerbi_dashboard.png',
    previewAlt:
      'Task 4 Power BI Automotive Sales Dashboard showing Rp26.02 Billion total sales across 98 transactions',
    layoutSpan: 'wide',
  },
  {
    slug: 'us-law-firms-data-collection',
    index: '02',
    title: 'US Law Firms Data Collection',
    shortTitle: 'US Immigration Law Firms Data Collection & Scraping',
    contextLabel: 'Freelance Project',
    categoryMeta: 'DATA COLLECTION / WEB SCRAPING',
    toolsMeta: 'Python · Requests · BeautifulSoup · Pandas · MapsScraper · Excel',
    shortDescription:
      'Collected and structured business information from Sulekha (~500 records) and Google Maps (438 records), combining semi-automated Python scraping and manual verification to deliver a 500-record dataset.',
    status: 'published',
    route: '/projects/us-law-firms-data-collection',
    previewImage:
      '/assets/projects/us-law-firms-data-collection/sample1.png',
    previewAlt:
      'Sanitized 10-record sample dataset preview from the US Immigration Law Firms data collection project',
    layoutSpan: 'narrow',
  },
  {
    slug: 'ecommerce-database-management',
    index: '03',
    title: 'E-Commerce Database Management',
    contextLabel: 'Academic Group Project · AMIKOM (2024)',
    categoryMeta: 'SQL / RELATIONAL DATABASE DESIGN',
    toolsMeta: 'MariaDB / MySQL · phpMyAdmin · SQL Functions · Stored Procedures · Triggers · Composite Indexing · Views · RBAC',
    shortDescription:
      'Collaborative 5-member Informatics database engineering project implementing a 6-table relational e-commerce schema (Customers, Products, Orders, OrderDetails, Payments, Log_Changes) with custom SQL functions, IF control-flow procedures, 6 BEFORE/AFTER audit triggers, composite BTREE indexes, nested views with WITH CHECK OPTION, and role privileges.',
    status: 'published',
    route: '/projects/ecommerce-database-management',
    previewImage:
      '/assets/projects/ecommerce-database-management/01_erd_schema.png',
    previewAlt:
      'phpMyAdmin Designer Entity Relationship Diagram (ERD) for the ecommerce database showing Customers, Products, Orders, OrderDetails, Payments, Log_Changes, and Views',
    layoutSpan: 'wide',
  },
  {
    slug: 'ai-data-analyst-agent',
    index: '04',
    title: 'AI Data Analyst Agent',
    contextLabel: 'IBM / Hacktiv8',
    categoryMeta: 'AI INTEGRATION / WORKFLOW AUTOMATION',
    toolsMeta: 'Langflow · LLM Processing · Prompt Engineering · CSV',
    shortDescription:
      'An LLM-powered sequential workflow built in Langflow transforming multi-category customer reviews from CSV input through prompt and LLM processing into structured sentiment insights and departmental action items.',
    status: 'published',
    route: '/projects/ai-data-analyst-agent',
    previewImage:
      '/assets/aistudio/Dark-Themed_AI_Workflow_Nodes_461f9344.png',
    previewAlt:
      'Dark-themed Langflow sequential 6-node AI Data Analyst Agent workflow screenshot showing Data File, Prompt Template, Language Model, second Prompt Template, second Language Model, and Chat Output',
    layoutSpan: 'wide',
  },
  {
    slug: 'semantic-retrieval-running-shoes',
    index: '05',
    title: 'Running Shoes Semantic Retrieval',
    contextLabel: 'Undergraduate Thesis · AMIKOM (2026)',
    categoryMeta: 'INFORMATION RETRIEVAL / ACADEMIC RESEARCH',
    toolsMeta: 'Python · scikit-learn (TF-IDF) · sentence-transformers (all-MiniLM-L6-v2) · Cosine Similarity · nDCG@5 · Streamlit',
    shortDescription:
      'Undergraduate thesis comparing classical lexical retrieval (TF-IDF: 0.6492 Mean nDCG@5) against dense Sentence Embeddings (all-MiniLM-L6-v2: 0.6825 Mean nDCG@5) across 475 cleaned RunRepeat documents, 30 benchmark queries, and 293 pooled query–document relevance judgments.',
    status: 'published',
    route: '/projects/semantic-retrieval-running-shoes',
    previewImage:
      '/assets/projects/semantic-retrieval-running-shoes/01_ndcg_charts_and_table.png',
    previewAlt:
      'Mean nDCG@5 comparison charts and statistical evaluation table comparing TF-IDF (0.6492) and Sentence Embedding all-MiniLM-L6-v2 (0.6825)',
    layoutSpan: 'narrow',
  },
];

export const EXPERIENCE_AND_EDUCATION = [
  {
    id: 'freelance-scraping',
    category: 'Professional Experience',
    role: 'Freelance Data Collection & Web Scraping',
    organization: 'Independent Freelance Practice',
    description:
      'Collected, cleaned, and integrated structured business directory data from public web sources using Python (Requests, BeautifulSoup, Pandas), MapsScraper, and Microsoft Excel, combining semi-automated collection with manual verification to meet client delivery specifications.',
    highlights: [
      'Multi-source directory collection and normalization',
      'Human-in-the-loop handling for location-based CAPTCHA friction',
      'Structured Excel dataset delivery preserving client confidentiality',
    ],
  },
  {
    id: 'office-instructor',
    category: 'Teaching & Instruction',
    role: 'Office Administration Instructor',
    organization: 'Instructional Practice',
    description:
      'Delivered practical instruction in Microsoft Office workflows with a primary emphasis on Microsoft Excel for structured data organization, tabular analysis, and reporting.',
    highlights: [
      'Microsoft Excel formulas, Pivot Tables, and structured spreadsheet design',
      'Practical office administration and data preparation workflows',
    ],
  },
  {
    id: 'amikom-education',
    category: 'Academic Background',
    role: 'Informatics',
    organization: 'Universitas AMIKOM Yogyakarta',
    description:
      'Academic foundation in Informatics covering data processing, information retrieval research (comparing TF-IDF and sentence embeddings), and software/analytical engineering fundamentals.',
    highlights: [
      'Academic research on natural-language product retrieval',
      'Data structures, SQL querying, and programmatic data analysis',
    ],
  },
  {
    id: 'training-bootcamps',
    category: 'Intensive Training & Coursework',
    role: 'Data Analytics & AI Workflow Programs',
    organization: 'KarirNex Data Analyst Bootcamp · IBM / Hacktiv8',
    description:
      'Completed practical analytical exercises across Excel, Google BigQuery, Python (Google Colab), and Power BI alongside LLM workflow design in Langflow using Gemini models.',
    highlights: [
      'KarirNex Data Analyst Bootcamp — Automotive Sales Analysis (2–9 July 2026)',
      'IBM / Hacktiv8 — AI Data Analyst Agent sequential Langflow workflow',
    ],
  },
] as const;

export const CAPABILITY_PILLARS = [
  {
    index: '01',
    title: 'Data Collection & Web Scraping',
    summary:
      'Collecting structured information from public web sources and preparing reliable datasets for downstream use.',
    capabilities: [
      'Collecting structured business and product listings.',
      'Python-based web scraping.',
      'Multi-source data collection.',
      'Structured data extraction and verification.',
    ],
    technologies: ['Python', 'Requests', 'BeautifulSoup', 'Scrapy', 'Selenium', 'Pandas'],
    evidencedIn: 'US Law Firms Data Collection (Freelance)',
  },
  {
    index: '02',
    title: 'Data Processing & Transformation',
    summary:
      'Transforming raw and fragmented data into clean, consistent, structured datasets ready for analysis.',
    capabilities: [
      'Data cleaning and preprocessing.',
      'Data normalization and transformation.',
      'Data integration and merging.',
      'Data validation and quality checking.',
      'Handling missing values and inconsistent formats.',
    ],
    technologies: ['Python', 'Pandas', 'Microsoft Excel'],
    evidencedIn: 'US Law Firms Dataset & Automotive Sales Preprocessing',
  },
  {
    index: '03',
    title: 'Data Analysis & Reporting',
    summary:
      'Inspecting, querying, and visualizing datasets to communicate meaningful findings and support informed decisions.',
    capabilities: [
      'Exploratory Data Analysis.',
      'SQL querying and aggregation.',
      'Statistical analysis.',
      'Data visualization.',
      'Dashboard development and analytical reporting.',
    ],
    technologies: ['Microsoft Excel', 'SQL', 'Google BigQuery', 'Python', 'Power BI'],
    evidencedIn: 'Automotive Sales Analysis (KarirNex Bootcamp)',
  },
  {
    index: '04',
    title: 'AI Integration & Workflow Automation',
    summary:
      'Connecting language models and structured workflows to build practical AI-powered analytical solutions.',
    capabilities: [
      'Sequential prompt-and-LLM workflows.',
      'Multi-stage prompt engineering.',
      'Gemini model integration.',
      'Structured output generation.',
      'Workflow debugging and refinement.',
    ],
    technologies: ['Google Gemini', 'Langflow', 'n8n'],
    evidencedIn: 'AI Data Analyst Agent (IBM / Hacktiv8)',
  },
] as const;

// ============================================================================
// CASE STUDY 1: AUTOMOTIVE SALES ANALYSIS
// ============================================================================

export const AUTOMOTIVE_CASE_STUDY = {
  slug: 'automotive-sales-analysis',
  title: 'Automotive Sales Analysis',
  contextLabel: 'Bootcamp Project · KarirNex Data Analyst Bootcamp',
  period: '2–9 July 2026',
  domain: 'Automotive Sales · Descriptive Data Analytics',
  primaryOutput: 'Power BI Sales Dashboard (Task 4)',
  tools: ['Microsoft Excel', 'Google BigQuery', 'Python (Google Colab)', 'Microsoft Power BI'],
  shortSummary:
    'A multi-stage automotive data analytics bootcamp project involving separate Excel, SQL, Python, and Power BI exercises to examine Trade-In patterns, practice querying and exploratory analysis, and present Task 4 sales results through an interactive dashboard.',
  scopeClarification:
    'Important Scope Clarification: Task 1 (Excel), Task 2 (BigQuery SQL), Task 3 (Python Colab), and Task 4 (Power BI) are separate bootcamp exercises with their own scope and reported results. The available materials do not establish that all four tasks used an identical dataset population or form one reconciled end-to-end pipeline. Figures from different tasks must not be merged or treated as directly comparable.',
  heroEvidence: {
    id: 'auto-powerbi-hero',
    title: 'Task 4 — Automotive Sales Dashboard (Power BI)',
    src: '/assets/projects/automotive-sales-analysis/01_powerbi_dashboard.png',
    alt: 'Power BI Automotive Sales Dashboard displaying Rp26.02B Total Sales, 98 Total Transactions, 119 Total Quantity, and 89.8% Completion Rate',
    taskOrSourceLabel: 'Task 4 Primary Output · Microsoft Power BI',
    observedFacts:
      'Displays four headline KPI cards (Total Sales: Rp26.02 B, Total Transaction: 98, Total Quantity: 119, Completion Rate: 89.8%), Sales Trend by Month peaking in September, Sales by Category led by MPV (Rp9.2 B) and SUV (Rp7.8 B), Sales by Branch led by Jakarta (Rp6.5 B), Top 5 Products led by Toyota Avanza 1.5 G CVT (Rp2.9 B), Sales by Payment Type led by Kredit (40.8%), and Transaction Status (88 Completed, 7 Cancelled, 3 Refund).',
    analyticalInterpretation:
      'Within the reported Task 4 dashboard scope, MPV is the leading vehicle category (exceeding SUV by approximately Rp1.4 Billion), Jakarta is the highest-performing branch, and Kredit is the most frequently selected payment method.',
    scopeNote:
      'All KPIs and charts in this view apply strictly to the Task 4 Power BI exercise (98 transactions) and are kept separate from Task 1, Task 2, and Task 3 exercises.',
  } satisfies EvidenceItem,
  task4Kpis: [
    {
      label: 'Total Sales',
      value: 'Rp26.02 Billion',
      note: 'Task 4 Power BI reported total',
    },
    {
      label: 'Total Transactions',
      value: '98',
      note: '88 Completed · 7 Cancelled · 3 Refund',
    },
    {
      label: 'Total Quantity',
      value: '119 Units',
      note: 'Vehicles recorded in Task 4 scope',
    },
    {
      label: 'Completion Rate',
      value: '89.8%',
      note: '88 of 98 transactions completed',
    },
  ],
  flashCards: [
    {
      id: 'auto-card-category',
      category: 'Task 4 Dashboard Finding · Category Performance',
      title: 'MPV Leads Category Sales at Rp9.2 Billion',
      primaryValue: 'Rp9.2 B vs Rp7.8 B',
      description:
        'In the Task 4 Power BI dashboard, MPV is the highest-selling vehicle category, exceeding SUV by approximately Rp1.4 Billion.',
      details: [
        'MPV Sales: Rp9.2 Billion (Rank 1 in Task 4 dashboard)',
        'SUV Sales: Rp7.8 Billion (Rank 2 in Task 4 dashboard)',
        'Difference: MPV exceeds SUV by approximately Rp1.4 Billion',
      ],
      attribution: 'Source: Task 4 Power BI Dashboard (98-transaction scope)',
    },
    {
      id: 'auto-card-branch',
      category: 'Task 4 Dashboard Finding · Branch Performance',
      title: 'Jakarta Is the Highest-Performing Branch',
      primaryValue: 'Rp6.5 Billion',
      description:
        'Jakarta recorded the highest sales among branches in the Task 4 Power BI dashboard results, ahead of Palembang and Karawang.',
      details: [
        'Leading Branch: Jakarta — Rp6.5 Billion',
        'Interactive slicers allow filtering the dashboard specifically to the Jakarta branch to inspect recalculated branch-level metrics',
      ],
      attribution: 'Source: Task 4 Power BI Dashboard (98-transaction scope)',
    },
    {
      id: 'auto-card-products',
      category: 'Task 4 Dashboard Finding · Top 5 Products',
      title: 'Top 5 Vehicle Models by Sales Revenue',
      primaryValue: 'Rp2.9 B Top Model',
      description:
        'Five models account for the top product rankings in the Task 4 dashboard, led by Toyota Avanza 1.5 G CVT.',
      details: [
        '1. Toyota Avanza 1.5 G CVT — Rp2.9 Billion',
        '2. Honda BR-V 1.5 E CVT — Rp2.8 Billion',
        '3. Mitsubishi Xpander Ultimate — Rp2.6 Billion',
        '4. Daihatsu Xenia 1.5 R CVT — Rp2.4 Billion',
        '5. Toyota Rush 1.5 G — Rp2.1 Billion',
      ],
      attribution: 'Source: Task 4 Power BI Dashboard (98-transaction scope)',
    },
    {
      id: 'auto-card-payment-status',
      category: 'Task 4 Dashboard Finding · Payment & Status',
      title: 'Kredit Accounts for 40.8% of Payment Distribution',
      primaryValue: '40.8% Kredit',
      description:
        'Kredit and Cash + Trade In together represent nearly three-quarters of transactions in the Task 4 dashboard.',
      details: [
        'Payment Share: Kredit (40.8%) · Cash + Trade In (32.7%) · Cash (19.4%) · Kredit + Trade In (7.1%)',
        'Transaction Status: Completed 88 (89.8%) · Cancelled 7 (7.1%) · Refund 3 (3.1%) · Total 98 (100%)',
        'Monthly Trend: Sales rose Jan–Mar, dipped in Apr, recovered May–Jul, surged Aug–Sep (September peak), dipped Oct–Nov, and rose in Dec',
      ],
      attribution: 'Source: Task 4 Power BI Dashboard (98-transaction scope)',
    },
  ] satisfies FlashCardItem[],
  tasks: [
    {
      id: 'task-1-excel',
      stepNumber: 'Task 01',
      title: 'Excel Trade-In & Product Analysis',
      subtitle: 'Spreadsheet Pivot Table Exploration',
      toolOrPlatform: 'Microsoft Excel',
      summary:
        'Practical exercise examining Trade-In vs. Non Trade-In transaction patterns across branches, repeat customer Trade-In activity, and model/color combinations.',
      activities: [
        'Constructed Pivot Tables comparing Non Trade-In and Total Trade-In order counts and percentages across 10 branches',
        'Identified individual customer Trade-In frequency within the Task 1 dataset',
        'Examined vehicle model sales volume and color distribution',
      ],
      verifiedFindings: [
        'Customer_3881 recorded the highest number of Trade-In transactions in this exercise (2 transactions).',
        'Wuling Air ev Long Range was the highest-selling model in the examined Task 1 data (56 units sold), with White as the most frequent color for that model (19 units).',
        'The supplied Excel Pivot Table screenshot displays completed transactions across 10 branches comparing Non Trade-In vs. Total Trade-In counts.',
      ],
      scopeBoundary:
        'Task 1 findings apply strictly to the Excel exercise population. Per data-integrity rules, a disputed branch Trade-In percentage figure between the written notes and screenshot is omitted until verified, and Task 1 numbers are never combined with Task 4 Power BI KPIs.',
      evidence: {
        id: 'auto-excel-task1',
        title: 'Task 1 — Branch Trade-In Pivot Table (Microsoft Excel)',
        src: '/assets/projects/automotive-sales-analysis/03_excel_branch_tradein.png',
        alt: 'Microsoft Excel Pivot Table showing Non Trade-In and Total Trade-In counts and percentages across branches for completed status',
        taskOrSourceLabel: 'Task 1 Technical Evidence · Microsoft Excel',
        observedFacts:
          'Shows an Excel Pivot Table filtered to status = completed across 10 branches (Jakarta, Karawang, Kendari, Pontianak, Bandung, Padang, Semarang, Batam, Malang, Palembang) with Grand Total of 5,801 Non Trade-In (64.70%) and 3,165 Total Trade-In (35.30%) out of 8,966 orders.',
        analyticalInterpretation:
          'Demonstrates Pivot Table structuring and percentage-of-row calculation in Excel to compare Trade-In adoption across branch locations.',
        scopeNote:
          'Separate Task 1 exercise population (8,966 completed orders); do not merge with the 98-transaction Task 4 Power BI dashboard.',
      },
    },
    {
      id: 'task-2-bigquery',
      stepNumber: 'Task 02',
      title: 'SQL Querying & Aggregation',
      subtitle: 'Relational Data Exploration in BigQuery',
      toolOrPlatform: 'Google BigQuery (SQL)',
      summary:
        'Assigned SQL exercises practicing structured querying, filtering, grouping, and branch-level sales aggregation on automotive transaction tables.',
      activities: [
        'Wrote SQL queries in Google BigQuery to aggregate total sales by branch',
        'Applied sorting and filtering clauses to inspect branch rankings',
        'Practiced structured relational data inspection across assigned prompts',
      ],
      verifiedFindings: [
        'Demonstrates branch-level aggregation (`branch`, `total_penjualan`) ordered descending across 10 branches in Google BigQuery.',
        'Serves as technical process evidence of SQL querying and aggregation capability.',
      ],
      scopeBoundary:
        'The BigQuery screenshot is a technical-process artifact for Task 2 only. Its aggregated values reflect a separate dataset scope and must not be used as Task 4 dashboard KPIs.',
      evidence: {
        id: 'auto-bigquery-task2',
        title: 'Task 2 — Branch Sales Aggregation Query Result (Google BigQuery)',
        src: '/assets/projects/automotive-sales-analysis/09_bigquery_branch_sales.png',
        alt: 'Google BigQuery query output table showing 10 branches ordered by total_penjualan',
        taskOrSourceLabel: 'Task 2 Technical Evidence · Google BigQuery SQL',
        observedFacts:
          'Displays a 10-row query result table with columns Row, branch, and total_penjualan listing Malang, Jakarta, Padang, Palembang, Bandung, Batam, Kendari, Semarang, Pontianak, and Karawang.',
        analyticalInterpretation:
          'Illustrates SQL GROUP BY and ORDER BY aggregation execution in Google BigQuery as part of the Task 2 bootcamp assignment.',
        scopeNote:
          'Task 2 exercise artifact only; population and filter scope differ from Task 4.',
      },
    },
    {
      id: 'task-3-python',
      stepNumber: 'Task 03',
      title: 'Exploratory Data Analysis (EDA)',
      subtitle: 'Programmatic Inspection & Visualization',
      toolOrPlatform: 'Python · Google Colab · Matplotlib',
      summary:
        'Exploratory data analysis in Google Colab examining data structure, branch-category revenue combinations, average unit prices, and horizontal bar chart visualization.',
      activities: [
        'Inspected dataset structure and summary characteristics in Google Colab',
        'Grouped transactions by branch and vehicle category to rank top revenue combinations',
        'Calculated average unit prices (`avg_price`) alongside total revenue for top branch-category pairs',
        'Plotted a Matplotlib horizontal bar chart of the top 5 branch-category combinations',
      ],
      verifiedFindings: [
        'Visualizes the top 5 branch-category revenue combinations (`Palembang - SUV`, `Jakarta - SUV`, `Malang - SUV`, `Batam - SUV`, `Karawang - SUV`) within the separate Task 3 dataset scope.',
        'Demonstrates programmatic grouping and Matplotlib chart generation in Python.',
      ],
      scopeBoundary:
        'Task 3 uses a separate 10,000-row exercise dataset (reporting Rp3.10 Trillion total sales in the Task 3 report). These figures belong exclusively to Task 3 and are never mixed with Task 4 Power BI dashboard KPIs.',
      evidence: {
        id: 'auto-python-task3',
        title: 'Task 3 — Top 5 Branch & Category Revenue Chart (Python / Google Colab)',
        src: '/assets/projects/automotive-sales-analysis/10_python_branch_category_chart.png',
        alt: 'Google Colab Python output showing top 5 branch and SUV category combinations and a horizontal bar chart in Billions of Rupiah',
        taskOrSourceLabel: 'Task 3 Technical Evidence · Python / Google Colab',
        observedFacts:
          'Displays printed DataFrame output and a horizontal bar chart titled "Top 5 Kombinasi Cabang & Kategori Mobil Berdasarkan Total Pendapatan" alongside average price per unit calculations.',
        analyticalInterpretation:
          'Shows multi-column aggregation and exploratory visual reporting in Python using Pandas and Matplotlib.',
        scopeNote:
          'Separate Task 3 exercise scope; do not conflate with Task 4 Power BI MPV/Jakarta findings.',
      },
    },
    {
      id: 'task-4-powerbi',
      stepNumber: 'Task 04',
      title: 'Interactive Sales Dashboard',
      subtitle: 'KPI Reporting & Slicer Analysis',
      toolOrPlatform: 'Microsoft Power BI',
      summary:
        'Development of an interactive Power BI dashboard presenting overall KPIs, monthly sales trends, category and branch comparisons, top products, payment distribution, and transaction status.',
      activities: [
        'Designed headline KPI cards for Total Sales, Total Transactions, Total Quantity, and Completion Rate',
        'Built comparative visuals for Sales by Category, Sales by Branch, and Top 5 Products by Sales',
        'Configured donut charts for Payment Type distribution and Transaction Status breakdown',
        'Added interactive slicers (Period, Branch, Category, Payment Type, Status) for dynamic filtering such as inspecting the Jakarta branch',
      ],
      verifiedFindings: [
        'Overall Performance: Rp26.02 Billion Total Sales, 98 Total Transactions, 119 Total Quantity, 89.8% Completion Rate.',
        'Category & Branch Leaders: MPV leads categories at Rp9.2 Billion (exceeding SUV at Rp7.8 Billion by ~Rp1.4 Billion); Jakarta leads branches at Rp6.5 Billion.',
        'Payment & Peak Month: Kredit leads payment methods at 40.8% (followed by Cash + Trade In at 32.7%); September recorded the highest monthly sales.',
      ],
      scopeBoundary:
        'All dashboard observations are descriptive findings within the 98-transaction Task 4 dataset. They do not establish causal drivers, profitability, gross margins, or future sales forecasts.',
      evidence: {
        id: 'auto-powerbi-task4',
        title: 'Task 4 — Full Automotive Sales Dashboard View (Microsoft Power BI)',
        src: '/assets/projects/automotive-sales-analysis/01_powerbi_dashboard.png',
        alt: 'Microsoft Power BI Automotive Sales Dashboard showing KPIs, monthly trend, category/branch bars, payment donut, and transaction table',
        taskOrSourceLabel: 'Task 4 Primary Output · Microsoft Power BI',
        observedFacts:
          'Full dashboard view showing 2025 data period filter, 4 KPI cards, Sales Trend by Month line chart, Sales by Category and Branch bar charts, Top 5 Products bar chart, Payment Type and Transaction Status donut charts, and bottom Sales Detail table.',
        analyticalInterpretation:
          'Consolidates the Task 4 metrics into a single interactive view with slicer controls for category, branch, payment method, and status exploration.',
      },
    },
  ] satisfies ProcessNode[],
  takeaways: [
    'Applied structured analytical thinking across four distinct exercises using Microsoft Excel, Google BigQuery, Python, and Power BI.',
    'Practiced keeping dataset scopes and exercise boundaries strictly separated when different tasks operate on non-reconciled data populations.',
    'Translated descriptive sales metrics into an interactive Power BI report with category, branch, payment, and status slicers.',
  ],
};

// ============================================================================
// CASE STUDY 2: US IMMIGRATION LAW FIRMS DATA COLLECTION & SCRAPING
// ============================================================================

export const US_LAW_FIRMS_CASE_STUDY = {
  slug: 'us-law-firms-data-collection',
  title: 'US Immigration Law Firms Data Collection & Scraping',
  contextLabel: 'Freelance Project · Data Collection & Web Scraping',
  role: 'Freelance Data Collection / Web Scraping',
  finalDeliverableTarget: '500 Structured Records (Microsoft Excel)',
  sources: ['Sulekha Directory (~500 source records)', 'Google Maps (438 supplementary records)'],
  tools: ['Python', 'Requests', 'BeautifulSoup', 'Pandas', 'MapsScraper', 'Microsoft Excel'],
  shortSummary:
    'Collected and structured business information from Sulekha and Google Maps, combining semi-automated Python scraping, cross-source data integration, and manual verification of unconfirmed fields to prepare a client-requested 500-record dataset.',
  privacyNotice:
    'Client Confidentiality & Source Volume Note: The complete 500-record client dataset is private and confidential. Only the owner-sanitized 10-record sample screenshots (`sample1`, `sample2`) and source collection views (`sulekha`, `maps`) are displayed publicly. Furthermore, the ~500 Sulekha records and 438 Google Maps records are source collection volumes used for integration—not 938 additive unique firms.',
  heroEvidence: {
    id: 'law-sample1-hero',
    title: 'Sanitized Final Dataset Sample — Initial Columns (sample1)',
    src: '/assets/projects/us-law-firms-data-collection/sample1.png',
    alt: 'Sanitized sample spreadsheet view (sample1) showing initial columns: Firm Name, Street Address, City, State, ZIP Code, redacted Phone, and Website',
    taskOrSourceLabel: 'Final Deliverable Sample View 1 of 2 · `sample1.png`',
    observedFacts:
      'Displays 10 sample law firm records across initial schema columns (Firm Name, Street Address, City, State, ZIP Code, redacted Phone, Website) from the sanitized sample workbook.',
    analyticalInterpretation:
      'Demonstrates the standardized address and contact formatting prepared for the final Excel client delivery while protecting redacted phone numbers.',
    scopeNote:
      'Illustrative 10-record sample only; the full 500-record client deliverable remains private.',
  } satisfies EvidenceItem,
  metricsComparison: [
    {
      label: 'Sulekha Source Volume',
      value: '~500 Records',
      note: 'Primary directory collection via semi-automated Python workflow',
    },
    {
      label: 'Google Maps Source Volume',
      value: '438 Records',
      note: 'Supplementary collection via MapsScraper for integration',
    },
    {
      label: 'Final Client Deliverable',
      value: '500 Records',
      note: 'Target structured Excel dataset (not 938 additive records)',
    },
    {
      label: 'Sample Schema Width',
      value: '15 Columns',
      note: 'Demonstrated in the 10-record sanitized portfolio sample',
    },
  ],
  schemaColumns: [
    '1. Firm Name',
    '2. Street Address',
    '3. City',
    '4. State',
    '5. ZIP Code',
    '6. Phone (Sanitized in public sample)',
    '7. Website',
    '8. Practice Areas',
    '9. Subcategories',
    '10. Google Rating',
    '11. Review Count',
    '12. Source',
    '13. Last Verified',
    '14. Firm URL',
    '15. Notes',
  ],
  flashCards: [
    {
      id: 'law-card-scope',
      category: 'Project Objective & Deliverable Scope',
      title: '500-Record Structured Directory Dataset',
      primaryValue: '500 Final Records',
      description:
        'The client needed a structured spreadsheet of 500 US immigration law firms serving the Indian community, compiled from online directories.',
      details: [
        'Client Target: 500 structured law firm records delivered in Microsoft Excel',
        'Portfolio Evidence: 10-record sanitized sample workbook (`Sample_10_Firms` / `Batch 1` repeating the same 10 sample records across 15 columns)',
        'Full client dataset is strictly excluded from public display',
      ],
      attribution: 'Source: Project PRD v1.1 & Data Integrity Notes v1.1',
    },
    {
      id: 'law-card-volumes',
      category: 'Source Volume Distinction',
      title: 'Source Collection Volumes vs. Final Target',
      primaryValue: '~500 + 438 → 500',
      description:
        'Records gathered from Sulekha and Google Maps served as overlapping multi-source inputs for comparison and enrichment, not additive unique totals.',
      details: [
        'Sulekha Collection: Approximately 500 records collected by location',
        'Google Maps Collection: 438 supplementary records collected via MapsScraper',
        'Final Output: Integrated and manually reviewed to meet the 500-record client requirement (never reported as 938 unique firms)',
      ],
      attribution: 'Source: Data Integrity Notes v1.1',
    },
    {
      id: 'law-card-captcha',
      category: 'Technical Challenge & Decision',
      title: 'Semi-Automated Workflow Under CAPTCHA Friction',
      primaryValue: 'Human-in-the-Loop',
      description:
        'Sulekha presented CAPTCHA challenges when navigating across new geographic locations, requiring a pragmatic workflow adaptation.',
      details: [
        'Used Python with Requests, BeautifulSoup, and Pandas for structured page parsing',
        'Incorporated human interaction when location transitions triggered CAPTCHA challenges',
        'Did not use automated CAPTCHA bypass or claim fully unattended end-to-end execution',
      ],
      attribution: 'Source: Case Study Content v1.3 & PRD v1.1',
    },
  ] satisfies FlashCardItem[],
  workflowStages: [
    {
      id: 'law-stage-1-sulekha',
      stepNumber: 'Stage 01',
      title: 'Sulekha Semi-Automated Collection',
      subtitle: 'Location-Based Python Directory Parsing',
      toolOrPlatform: 'Python · Requests · BeautifulSoup · Pandas',
      summary:
        'Collected approximately 500 business listings from Sulekha organized by geographic location, using a semi-automated workflow where human interaction handled CAPTCHA prompts during location changes.',
      activities: [
        'Extracted firm names, websites, addresses, practice areas, subcategories, firm URLs, and location fields from Sulekha directory listings',
        'Organized collection runs by city/state location',
        'Handled CAPTCHA challenges via manual interaction when switching locations rather than attempting automated bypass',
      ],
      verifiedFindings: [
        'Approximately 500 source records collected from Sulekha.',
        'Captured practice areas, subcategories, firm URLs, and scrape status fields as shown in `sulekha.png`.',
      ],
      scopeBoundary:
        'Source collection stage only (~500 records); semi-automated with human interaction when CAPTCHA appeared.',
      evidence: {
        id: 'law-evidence-sulekha',
        title: 'Sulekha Directory Scraping Output (`sulekha`)',
        src: '/assets/projects/us-law-firms-data-collection/sulekha.png',
        alt: 'Spreadsheet view of Sulekha scraping results showing Firm Name, Website, Address, Scrape Status, Practice Areas, Subcategories, Source, Last Verified, Firm URL, City, State, and Region',
        taskOrSourceLabel: 'Source Collection Evidence · `sulekha.png`',
        observedFacts:
          'Shows rows collected from Sulekha (`Source: Sulekha`, `Last Verified: 2026-01-22`, New York / NY listings) with columns Firm Name, Website, Address, Scrape Status, Practice Areas, Subcategories, Source, Last Verified, Firm URL, City, State, and Region.',
        analyticalInterpretation:
          'Confirms structured extraction of legal practice categories and directory URLs from Sulekha prior to cross-source integration.',
      },
    },
    {
      id: 'law-stage-2-maps',
      stepNumber: 'Stage 02',
      title: 'Google Maps Supplementary Collection',
      subtitle: 'Supplementary Directory Extraction',
      toolOrPlatform: 'MapsScraper',
      summary:
        'Collected 438 supplementary records from Google Maps using MapsScraper to provide ratings, review counts, street addresses, and website cross-references.',
      activities: [
        'Extracted 438 law firm listings from Google Maps using MapsScraper',
        'Captured Google rating scores, review counts, claimed status, coordinates, and website fields',
        'Prepared supplementary records for cross-referencing against Sulekha listings',
      ],
      verifiedFindings: [
        '438 supplementary source records collected from Google Maps.',
        'Provided `Reviewscore`, `Total_score`, `website`, `Category`, and address fields visible in `maps.png`.',
      ],
      scopeBoundary:
        'Supplementary source volume (438 records); not additive to Sulekha records as unique final firms.',
      evidence: {
        id: 'law-evidence-maps',
        title: 'Google Maps Scraping Output (`maps`)',
        src: '/assets/projects/us-law-firms-data-collection/maps.png',
        alt: 'Sanitized spreadsheet view of Google Maps scraping output showing firm_name, Address, city, state, zip, redacted Phone, Location, Reviewscore, Total_score, website, Category, Claimed, Latitude, Longitude, Place_id, Cid',
        taskOrSourceLabel: 'Source Collection Evidence · `maps.png`',
        observedFacts:
          'Displays 20 rows of Google Maps output (Los Angeles / CA listings) with redacted Phone column and fields including Reviewscore, Total_score, website, Category, Claimed, Latitude, and Longitude.',
        analyticalInterpretation:
          'Provides supplementary rating, review count, and location metadata used during the cross-source integration stage.',
      },
    },
    {
      id: 'law-stage-3-integration',
      stepNumber: 'Stage 03',
      title: 'Cross-Source Integration and Data Review',
      subtitle: 'Multi-Source Comparison & Normalization',
      toolOrPlatform: 'Python · Pandas · Microsoft Excel',
      summary:
        'Compared and integrated business information from Sulekha and Google Maps, normalizing schema columns and identifying missing or unconfirmed fields requiring review.',
      activities: [
        'Aligned fields from Sulekha and Google Maps into the target 15-column schema',
        'Compared records across sources to combine directory categories with Google rating and review metadata',
        'Flagged records with missing phone numbers, absent Google ratings, or non-US/mixed-practice notes for manual review',
      ],
      verifiedFindings: [
        'Integrated records carry `Sulekha + Google Maps` in the `Source` column of the sample workbook alongside contextual `Notes` (e.g., "Phone not listed on Sulekha", "Google Maps rating not found").',
      ],
      scopeBoundary:
        'The exact duplicate-removal count, matching rate, and deduplication method across the full 500-record dataset are not independently quantified and are not claimed.',
      evidence: {
        id: 'law-evidence-sample2',
        title: 'Sanitized Final Dataset Sample — Middle-to-Final Columns (`sample2`)',
        src: '/assets/projects/us-law-firms-data-collection/sample2.png',
        alt: 'Sanitized sample spreadsheet view (sample2) showing Practice Areas, Subcategories, Google Rating, Review Count, Source (Sulekha + Google Maps), Last Verified, Firm URL, and Notes',
        taskOrSourceLabel: 'Final Deliverable Sample View 2 of 2 · `sample2.png`',
        observedFacts:
          'Displays columns Practice Areas, Subcategories, Google Rating, Review Count, Source (`Sulekha + Google Maps`), Last Verified (`2026-01-15`), Firm URL, and detailed verification Notes for the 10 sample records.',
        analyticalInterpretation:
          'Demonstrates how directory practice areas from Sulekha and rating/review metrics from Google Maps were combined alongside explicit verification notes.',
      },
    },
    {
      id: 'law-stage-4-delivery',
      stepNumber: 'Stage 04',
      title: 'Manual Verification and Final 500-Record Client Delivery',
      subtitle: 'Human Review & Structured Spreadsheet Output',
      toolOrPlatform: 'Microsoft Excel · Manual Verification',
      summary:
        'Reviewed and completed remaining unconfirmed fields manually where possible, delivering the final structured 500-record Excel dataset to the client.',
      activities: [
        'Manually inspected unconfirmed contact fields, practice classifications, and edge cases',
        'Documented record-specific edge cases in the `Notes` column (such as multiple phone numbers, mixed practices, or missing ratings)',
        'Finalized the 500-record Microsoft Excel deliverable according to client requirements',
      ],
      verifiedFindings: [
        'Delivered the client-requested 500-record structured dataset in Excel format.',
        'Preserved client confidentiality by retaining only a sanitized 10-record sample (`sample1` and `sample2`) for portfolio demonstration.',
      ],
      scopeBoundary:
        'Does not claim a specific manual-completion count, 100% accuracy rate, or downstream client conversion metrics.',
      evidence: {
        id: 'law-evidence-sample1',
        title: 'Sanitized Final Dataset Sample — Initial Columns (`sample1`)',
        src: '/assets/projects/us-law-firms-data-collection/sample1.png',
        alt: 'Sanitized sample spreadsheet view (sample1) showing Firm Name, Street Address, City, State, ZIP Code, redacted Phone, and Website',
        taskOrSourceLabel: 'Final Deliverable Sample View 1 of 2 · `sample1.png`',
        observedFacts:
          'Shows the initial 7 columns of the 10-record sample dataset with phone numbers masked for privacy.',
        analyticalInterpretation:
          'Paired with `sample2.png`, represents the structure of the final Excel deliverable without exposing the full 500-record client dataset.',
      },
    },
  ] satisfies ProcessNode[],
};

// ============================================================================
// CASE STUDY 3: AI DATA ANALYST AGENT
// ============================================================================

export interface LangflowStageNode {
  id: string;
  stageNumber: string;
  title: string;
  componentType: string;
  badgeText: string;
  shortRole: string;
  detailedDescription: string;
  technicalParameters: string[];
}

export const AI_AGENT_CASE_STUDY = {
  slug: 'ai-data-analyst-agent',
  title: 'AI Data Analyst Agent',
  contextLabel: 'Course Project · IBM / Hacktiv8 Learning Project',
  platform: 'Langflow',
  models: ['Gemini 3.1 Flash Lite (`gemini-3.1-flash-lite`)', 'Gemini 2.5 Flash (`gemini-2.5-flash`)'],
  inputDataset: '`laptop_online_review.csv` (1,001 records · 108 unique products)',
  tools: [
    'Langflow',
    'Gemini 3.1 Flash Lite',
    'Gemini 2.5 Flash',
    'Prompt Engineering',
    'CSV',
  ],
  shortSummary:
    'An LLM-powered sequential workflow built in Langflow that processes multi-category consumer-electronics customer reviews from a CSV file through two-stage prompt templates and Gemini language models to generate sentiment-oriented insights, concise summaries, and departmental action items.',
  architectureBoundary:
    'Architecture & Accuracy Boundary: This project is a six-stage sequential prompt-and-LLM workflow built in Langflow. It is not a Retrieval-Augmented Generation (RAG) system, does not use a vector database or embeddings, and is not an autonomous multi-agent system with tool calling. While `laptop_online_review.csv` contains 1,001 records across laptops, smartphones, and household appliances, the available evidence does not establish measured sentiment classification accuracy, row-level traceability, or verified processing of all 1,001 rows in a single model context.',
  datasetStats: [
    {
      label: 'Dataset Shape',
      value: '1,001 × 4',
      note: '1,001 rows across 4 columns (`Unnamed: 0`, `Product_name`, `Review`, `Rating`)',
    },
    {
      label: 'Unique Products',
      value: '108 Products',
      note: 'Spans laptops, smartphones, and household appliances despite CSV filename',
    },
    {
      label: 'Data Completeness',
      value: '0 Missing / 0 Dupes',
      note: 'Zero missing values and zero exact duplicate rows in audited CSV',
    },
    {
      label: 'Star Rating Counts',
      value: '5★: 640 · 4★: 238',
      note: '3★: 58 · 2★: 8 · 1★: 57 (Descriptive metadata, not AI sentiment output)',
    },
  ],
  langflowNodes: [
    {
      id: 'node-1-read-file',
      stageNumber: '01',
      title: 'CSV Input / Read File',
      componentType: 'Langflow Read File Component',
      badgeText: 'laptop_online_review.csv',
      shortRole: 'Loads and returns raw content from the uploaded customer review CSV.',
      detailedDescription:
        'Ingests `laptop_online_review.csv` (290.28 KB shown in workflow component) and outputs raw content to the first Prompt Template. Audited file contains 1,001 rows and 108 unique consumer-electronics products across laptops, smartphones, and household appliances.',
      technicalParameters: [
        'Input File: `laptop_online_review.csv`',
        'Columns: `Unnamed: 0`, `Product_name`, `Review`, `Rating`',
        'Output Port: `Raw Content` → connected to Stage 02 `text` input',
      ],
    },
    {
      id: 'node-2-sentiment-prompt',
      stageNumber: '02',
      title: 'Sentiment Prompt',
      componentType: 'Prompt Template (Stage 1)',
      badgeText: 'Dynamic Template',
      shortRole: 'Constructs the first-stage sentiment analysis instruction.',
      detailedDescription:
        'Applies prompt instructions to interpret customer feedback and restrict the sentiment classification label to Positive, Neutral, or Negative.',
      technicalParameters: [
        'Variable Input: `text` (receiving raw CSV content from Read File)',
        'Constraint: Restricts sentiment category to `Positive`, `Neutral`, or `Negative`',
        'Output Port: `Prompt` → connected to Stage 03 `Input`',
      ],
    },
    {
      id: 'node-3-gemini-flash-lite',
      stageNumber: '03',
      title: 'Gemini 3.1 Flash Lite',
      componentType: 'Language Model (Stage 1)',
      badgeText: 'gemini-3.1-flash-lite',
      shortRole: 'First language-model processing stage executing sentiment-oriented analysis.',
      detailedDescription:
        'Executes the first-stage prompt using the `gemini-3.1-flash-lite` model selected in the Langflow Language Model component, passing its model response forward to the second prompt stage.',
      technicalParameters: [
        'Configured Model: `gemini-3.1-flash-lite` (as displayed in workflow screenshot)',
        'Input Port: Receives formatted prompt from Stage 02',
        'Output Port: `Model Response` → connected to Stage 04 `summary` input',
      ],
    },
    {
      id: 'node-4-summary-prompt',
      stageNumber: '04',
      title: 'Summary & Action Items Prompt',
      componentType: 'Prompt Template (Stage 2)',
      badgeText: 'Synthesis Template',
      shortRole: 'Structures the second-stage instruction for executive synthesis and departmental recommendations.',
      detailedDescription:
        'Instructs the model to use English internal reasoning and produce formal Bahasa Indonesia output covering a concise summary, department-directed action items, and a final sentiment label across product quality, performance/features, price/value, delivery/packaging, and overall satisfaction.',
      technicalParameters: [
        'Template Structure: `{summary}`, `[action_item]`, `[sentiment]` narrative format',
        'Technical Iteration: Replaced an earlier strict-JSON prompt that failed Langflow template validation due to nested braces / format-specifier handling',
        'Output Port: `Prompt` → connected to Stage 05 `Input`',
      ],
    },
    {
      id: 'node-5-gemini-flash',
      stageNumber: '05',
      title: 'Gemini 2.5 Flash',
      componentType: 'Language Model (Stage 2)',
      badgeText: 'gemini-2.5-flash',
      shortRole: 'Second language-model processing stage generating the final structured narrative.',
      detailedDescription:
        'Processes the second-stage synthesis prompt using `gemini-2.5-flash` to produce the formatted Bahasa Indonesia summary, five departmental action items, and overall sentiment label.',
      technicalParameters: [
        'Configured Model: `gemini-2.5-flash` (as displayed in workflow screenshot)',
        'Input Port: Receives Stage 04 synthesis prompt',
        'Output Port: `Model Response` → connected to Stage 06 `Chat Output`',
      ],
    },
    {
      id: 'node-6-chat-output',
      stageNumber: '06',
      title: 'Chat Output',
      componentType: 'Langflow Chat Output Component',
      badgeText: 'Final Response',
      shortRole: 'Renders the generated summary, action items, and sentiment label to the user.',
      detailedDescription:
        'Displays the final narrative output containing `SUMMARY`, numbered `ACTION ITEMS` directed to specific product and quality teams (Laptop, Smartphone, After-Sales/QC), and `SENTIMENT: Positive`.',
      technicalParameters: [
        'Output Sections: `SUMMARY`, `ACTION ITEMS` (1–5), `SENTIMENT`',
        'Language: Formal Bahasa Indonesia',
        'Scope Note: Demonstrates a generated response consistent with the multi-category CSV scope; does not independently verify row-level accuracy',
      ],
    },
  ] satisfies LangflowStageNode[],
  flashCards: [
    {
      id: 'ai-card-challenge',
      category: 'Technical Challenge & Resolution',
      title: 'Langflow Prompt Template Nested-Brace Validation Fix',
      primaryValue: 'JSON → Narrative Format',
      description:
        'An initial strict-JSON output schema caused a Langflow Prompt Template validation error because curly braces were interpreted as dynamic format specifiers.',
      details: [
        'Initial Attempt: Strict JSON output schema inside Langflow Prompt Template triggered an invalid format specifier / nested brace validation error',
        'Resolution: Revised the second-stage prompt to request a structured narrative format (`SUMMARY`, `ACTION ITEMS`, `SENTIMENT`)',
        'Result: Passed template validation and generated the complete Bahasa Indonesia response shown in the output evidence',
      ],
      attribution: 'Source: AI Data Analyst Agent PRD v1.0 & Data Integrity Notes v1.0',
    },
    {
      id: 'ai-card-dataset',
      category: 'Dataset Audit & Multi-Category Scope',
      title: '1,001 Reviews Across Multiple Electronics Categories',
      primaryValue: '108 Unique Products',
      description:
        'Although named `laptop_online_review.csv`, the audited source dataset spans laptops, smartphones, and household appliances.',
      details: [
        'Audited Shape: 1,001 rows × 4 columns (`Unnamed: 0`, `Product_name`, `Review`, `Rating`) with zero missing values and zero duplicate rows',
        'Rating Distribution: 5★ (640), 4★ (238), 3★ (58), 1★ (57), 2★ (8) — descriptive rating metadata is distinct from text sentiment',
        'Explains why the generated output references laptop battery/screen, smartphone camera/weight, and household appliance QC',
      ],
      attribution: 'Source: Audited `laptop_online_review.csv` & Asset Manifest v1.2',
    },
    {
      id: 'ai-card-prompt-design',
      category: 'Two-Stage Prompt Engineering',
      title: 'Structured Evaluation Criteria & Departmental Routing',
      primaryValue: '5 Evaluation Axes',
      description:
        'The prompt design evaluates customer feedback across five criteria and routes recommendations to specific business teams.',
      details: [
        'Evaluation Criteria: Product quality, performance & features, price & value, delivery & packaging, and overall satisfaction',
        'Language Protocol: English internal reasoning instructions paired with formal Bahasa Indonesia user-facing output',
        'Action Routing: Directs recommendations to Laptop Product Dev, Smartphone Product Dev, and After-Sales / Quality Control teams',
      ],
      attribution: 'Source: AI Data Analyst Agent Project Content v1.0',
    },
  ] satisfies FlashCardItem[],
  publicEvidence: [
    {
      id: 'ai-evidence-output',
      title: 'Representative Generated Output (`agent-output-reference.png`)',
      src: '/assets/projects/ai-data-analyst-agent/agent-output-reference.png',
      alt: 'Langflow AI Chat Output screenshot showing SUMMARY in Bahasa Indonesia, 5 numbered ACTION ITEMS for laptop, smartphone, and appliance teams, and SENTIMENT: Positive',
      taskOrSourceLabel: 'Representative Output Evidence · `agent-output-reference.png`',
      observedFacts:
        'Displays the generated AI response in Langflow (`Finished in 15.5s`) containing a multi-category `SUMMARY`, five numbered departmental `ACTION ITEMS` (addressing laptop battery & display, smartphone camera & weight, and appliance QC), and `SENTIMENT: Positive`.',
      analyticalInterpretation:
        'Demonstrates that the revised narrative prompt template and sequential Gemini model pipeline successfully generated structured Bahasa Indonesia insights aligned with the multi-category CSV input.',
      scopeNote:
        'Demonstrates a representative generated response; does not independently establish sentiment classification accuracy, row-level traceability, or processing of all 1,001 records.',
    },
    {
      id: 'ai-evidence-dataset',
      title: 'Sanitized CSV Dataset Preview (`dataset-preview.png`)',
      src: '/assets/projects/ai-data-analyst-agent/dataset-preview.png',
      alt: 'Spreadsheet preview of laptop_online_review.csv showing rows 0 to 5 with Product_name, Review text, and Rating = 5',
      taskOrSourceLabel: 'Input Dataset Evidence · `dataset-preview.png`',
      observedFacts:
        'Displays sample rows 0–5 of `laptop_online_review.csv` showing columns `Product_name` (Lenovo Ideapad Gaming 3, DELL Inspiron 3515), unstructured English customer `Review` text, and `Rating` values.',
      analyticalInterpretation:
        'Illustrates the unstructured review text and schema ingested by the Stage 01 Read File component.',
      scopeNote:
        'Sample preview of the 1,001-record CSV dataset; full CSV is not exposed publicly because review text may contain personal details.',
    },
    {
      id: 'ai-evidence-workflow',
      title: 'Langflow 6-Node Sequential Workflow Canvas',
      src: '/assets/aistudio/Dark-Themed_AI_Workflow_Nodes_461f9344.png',
      alt: 'Dark-themed Langflow canvas showing six connected sequential nodes: Data File, Prompt Template, Language Model, second Prompt Template ({summary}, {key_finding}, {recommend}), second Language Model, and Chat Output',
      taskOrSourceLabel: 'Workflow Architecture Evidence · Langflow Canvas',
      observedFacts:
        'Captures the complete dark-themed 6-node sequential Langflow canvas: Data File ingestion → first Prompt Template → first Google Language Model (`14.31s`) → second synthesis Prompt Template (`{summary}`, `{key_finding}`, `{recommend}`) → second Google Language Model (`11.17s`) → Chat Output.',
      analyticalInterpretation:
        'Confirms the deterministic sequential node chaining from file ingestion through dual-stage prompt templating and LLM synthesis into structured output.',
      scopeNote:
        'Original Langflow workflow screenshot preserved at native proportions (2001 × 786) without cropping.',
    },
  ] satisfies EvidenceItem[],
};

export const ECOMMERCE_DB_CASE_STUDY = {
  slug: 'ecommerce-database-management',
  title: 'E-Commerce Database Management',
  contextLabel: 'Academic Group Project · Final Project Pemrograman Basis Data',
  institution: 'Program Studi S1 Informatika, Fakultas Ilmu Komputer, Universitas AMIKOM Yogyakarta',
  lecturer: 'Kusnawi, M.Eng',
  year: '2024',
  repositoryUrl: 'https://github.com/RazeYuki/code_fp',
  databaseEngine: 'MariaDB 10.4.32 / MySQL (XAMPP & phpMyAdmin) · Database: ecommerce',
  groupMembers: [
    { name: 'Satya Gema Nusantara Iskandar', nim: '22.11.5242', isOwner: true },
    { name: 'Hamdika Putra', nim: '22.11.5220', isOwner: false },
    { name: 'Novan Stevano', nim: '22.11.5204', isOwner: false },
    { name: 'Haegar Riu Albani', nim: '22.11.5202', isOwner: false },
    { name: 'Wahyu Slamet', nim: '22.11.5216', isOwner: false },
  ],
  tools: [
    'MariaDB 10.4.32 / MySQL',
    'phpMyAdmin Designer (ERD)',
    'SQL Functions',
    'Stored Procedures (Control Flow)',
    'BEFORE / AFTER Triggers',
    'Composite BTREE Indexing',
    'Views (WITH CHECK OPTION)',
    'Database Security (Users, Roles & Privileges)',
  ],
  shortSummary:
    'A collaborative 5-member Informatics final project designing and implementing the `ecommerce` relational database in MariaDB/MySQL—covering a 6-table schema, custom SQL functions, control-flow stored procedures, 6 BEFORE/AFTER audit triggers into `log_changes`, 3 composite BTREE indexes, 4 relational views (including nested `WITH CHECK OPTION`), and granular user/role privileges verified via CLI.',
  scopeClarification:
    'Completed as a collaborative 5-member Academic Group Project for the Database Programming (Pemrograman Basis Data) course at Universitas AMIKOM Yogyakarta (2024). Note on Report Page 18 vs. Pages 11–17: While the narrative summary on Page 18 refers to separate log tables (`LogCustomers`, `LogOrders`, `LogProducts`), the actual executed SQL definitions and phpMyAdmin screenshots on Pages 11–17 log all 6 triggers into the unified `log_changes` table.',
  heroKpis: [
    {
      label: 'Core Schema Tables',
      value: '6 Tables',
      qualifier: 'Customers, Products, Orders, OrderDetails, Payments, Log_Changes',
    },
    {
      label: 'Procedural Logic',
      value: '2 Functions · 3 Procedures',
      qualifier: 'Includes IF control-flow & SIGNAL SQLSTATE 45000 validation',
    },
    {
      label: 'Automated Auditing',
      value: '6 Triggers',
      qualifier: '3 BEFORE & 3 AFTER triggers logging to log_changes',
    },
    {
      label: 'Optimization & Security',
      value: '3 Indexes · 4 Views · 3 Roles',
      qualifier: 'Composite BTREE keys, WITH CHECK OPTION & CLI RBAC verification',
    },
  ],
  heroEvidence: {
    id: 'sql-hero-erd',
    title: 'phpMyAdmin Designer — E-Commerce Entity Relationship Diagram (Page 2)',
    src: '/assets/projects/ecommerce-database-management/01_erd_schema.png',
    alt: 'phpMyAdmin Designer ERD showing ecommerce tables: customers, payments, orderdetails, products, orders, log_changes, index_orders, and views horizontal_view, vertical_view, base_view, nested_view',
    taskOrSourceLabel: 'Report Page 2 · ERD & Schema Architecture (`ecommerce`)',
    observedFacts:
      'Displays the phpMyAdmin Designer canvas for the `ecommerce` database containing the 6 primary tables (`customers`, `products`, `orders`, `orderdetails`, `payments`, `log_changes`), the indexed table `index_orders`, and the 4 views (`horizontal_view`, `vertical_view`, `base_view`, `nested_view`) with visual foreign-key connector lines linking `customers` → `orders`, `orders` → `payments`, and `orders` ↔ `orderdetails` ↔ `products`.',
    analyticalInterpretation:
      'Establishes the normalized relational structure separating customer profiles, product inventory, order headers, line-item details, multi-stage payments, and centralized audit logs.',
    scopeNote:
      'Extracted directly from Page 2 of Laporan Final Project Pemrograman Basis Data (“Manajemen E-Commerce”).',
  } satisfies EvidenceItem,
  schemaTables: [
    {
      tableName: 'Customers',
      columns: 'id_customer INT(11) PK, nama VARCHAR(100), alamat VARCHAR(255), telepon VARCHAR(15)',
      relationship: 'One-to-Many (1:N) with Orders — each customer can place one or more orders.',
    },
    {
      tableName: 'Products',
      columns: 'id_product INT(11) PK, nama_product VARCHAR(100), harga DECIMAL(10,2), stock INT(11)',
      relationship: 'Linked to Orders and OrderDetails — each product can appear across multiple order line items.',
    },
    {
      tableName: 'Orders',
      columns: 'id_order INT(11) PK, id_customer INT(11) FK, tanggal_pesan DATE, status VARCHAR(20), id_product INT(11), quantity INT(11)',
      relationship: 'Central transaction header linked to Customers (N:1), OrderDetails (1:N), and Payments (1:N).',
    },
    {
      tableName: 'OrderDetails',
      columns: 'id_order_detail INT(11) PK, id_order INT(11) FK, id_product INT(11) FK, kuantitas INT(11)',
      relationship: 'Associative line-item table linking each order to specific products and quantities.',
    },
    {
      tableName: 'Payments',
      columns: 'id_payment INT(11) PK, id_order INT(11) FK, jumlah_bayar DECIMAL(10,2), tanggal_bayar DATE',
      relationship: 'Stores payment records linked to Orders (`id_order`), supporting payment tracking by date and amount.',
    },
    {
      tableName: 'log_changes',
      columns: 'id INT(11) AUTO_INCREMENT PK, event_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, event_type VARCHAR(20), table_name VARCHAR(50), old_data TEXT, new_data TEXT',
      relationship: 'Audit log table populated automatically by the 6 BEFORE and AFTER triggers on Customers, Orders, and Products.',
    },
  ],
  processNodes: [
    {
      id: 'sql-step-1-erd',
      stepNumber: '01',
      title: 'Relational Schema & ERD',
      subtitle: '6 Core Tables & Foreign Key Relationships',
      toolOrPlatform: 'MariaDB / MySQL · phpMyAdmin Designer',
      summary:
        'Designed the `ecommerce` relational schema around 6 core tables (`Customers`, `Products`, `Orders`, `OrderDetails`, `Payments`, and `log_changes`) to model customer orders, line-item quantities, payment transactions, and change auditing.',
      activities: [
        'Defined primary keys (`id_customer`, `id_product`, `id_order`, `id_order_detail`, `id_payment`, `id`) and data types (`VARCHAR`, `DECIMAL(10,2)`, `INT(11)`, `DATE`, `TIMESTAMP`)',
        'Configured foreign key relationships connecting `customers` to `orders`, `orders` to `payments`, and `orderdetails` to both `orders` and `products`',
        'Created the dedicated `log_changes` table with `AUTO_INCREMENT` primary key and `CURRENT_TIMESTAMP` default to store trigger audit trails',
      ],
      verifiedFindings: [
        '6 core tables + `index_orders` + 4 views (`horizontal_view`, `vertical_view`, `base_view`, `nested_view`) verified in phpMyAdmin Designer',
        'Source code published in group repository: `https://github.com/RazeYuki/code_fp`',
      ],
      scopeBoundary:
        'Documented on Page 2 of the Final Project report.',
      evidence: {
        id: 'ev-sql-erd',
        title: 'Entity Relationship Diagram (`01_erd_schema.png`)',
        src: '/assets/projects/ecommerce-database-management/01_erd_schema.png',
        alt: 'phpMyAdmin Designer ERD diagram for the ecommerce database',
        taskOrSourceLabel: 'Step 01 · Relational Schema & ERD (Report Page 2)',
        observedFacts:
          'Shows all tables, column types, and relational links in the `ecommerce` database schema.',
        analyticalInterpretation:
          'Demonstrates clear separation between master entities (`customers`, `products`), transactional entities (`orders`, `orderdetails`, `payments`), and audit/view layers.',
      },
    },
    {
      id: 'sql-step-2-functions',
      stepNumber: '02',
      title: 'SQL Functions',
      subtitle: 'Parameterless & Multi-Parameter Scalar Functions',
      toolOrPlatform: 'MariaDB / MySQL Stored Routines',
      summary:
        'Implemented two custom SQL functions—one parameterless function (`getTotalOrders`) and one two-parameter function (`getTotalPayments`)—and verified their registration in the `ecommerce` schema.',
      activities: [
        'Created `getTotalOrders() RETURNS INT` using `SELECT COUNT(*) INTO total FROM Orders; RETURN total;`',
        'Created `getTotalPayments(id_order INT, start_date DATE) RETURNS DECIMAL(10,2)` computing `SUM(jumlah_bayar)` from `Payments` filtered by order and `tanggal_bayar >= start_date`',
        'Executed `SELECT getTotalOrders();` (returning `2`) and `SELECT getTotalPayments(1, \'2024-01-01\');`',
        'Inspected routine metadata via `SHOW FUNCTION STATUS WHERE Db = DATABASE();`',
      ],
      verifiedFindings: [
        '`getTotalOrders()` executed in `0.0003 seconds` and returned `2` total rows in `Orders`',
        'Both `getTotalOrders` and `getTotalPayments` confirmed in `SHOW FUNCTION STATUS` under `Db = ecommerce` (`DEFINER = root@localhost`)',
      ],
      scopeBoundary:
        'Documented on Pages 3–5 of the Final Project report.',
      evidence: {
        id: 'ev-sql-functions',
        title: 'SQL Function Execution & Status Verification (`02_functions_execution.png`)',
        src: '/assets/projects/ecommerce-database-management/02_functions_execution.png',
        alt: 'phpMyAdmin execution results for SELECT getTotalOrders(), SELECT getTotalPayments(1, 2024-01-01), and SHOW FUNCTION STATUS WHERE Db = DATABASE()',
        taskOrSourceLabel: 'Step 02 · SQL Functions (Report Page 5)',
        observedFacts:
          'Displays `getTotalOrders()` returning `2`, `getTotalPayments(1, \'2024-01-01\')` returning `NULL` (no matching payment row for order 1), and `SHOW FUNCTION STATUS` listing both routines.',
        analyticalInterpretation:
          'Confirms reusable scalar calculation logic encapsulated directly at the database layer.',
      },
    },
    {
      id: 'sql-step-3-procedures',
      stepNumber: '03',
      title: 'Stored Procedures & Control Flow',
      subtitle: 'showCustomers, updateOrderStatus & IF Stock Validation',
      toolOrPlatform: 'MariaDB / MySQL Stored Procedures',
      summary:
        'Built three stored procedures covering zero-parameter retrieval (`showCustomers`), parameterized status updates (`updateOrderStatus`), and conditional inventory control flow (`updateProductStock`) using nested `IF` statements and custom SQLSTATE error signaling.',
      activities: [
        'Created `showCustomers()` to encapsulate `SELECT * FROM Customers;`',
        'Created `updateOrderStatus(id_order INT, status VARCHAR(20))` to update order status records',
        'Created `updateProductStock(IN id_product INT, IN quantityChange INT)` featuring `IF (currentStock + quantityChange) < 0` to raise `SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'Error: Stock cannot be negative\';` and a nested `IF (currentStock + quantityChange) < 10` low-stock alert check',
        'Executed `CALL showCustomers();`, `CALL updateOrderStatus(1, \'Shipped\');`, and `CALL updateProductStock(1, 5);`',
      ],
      verifiedFindings: [
        '`CALL showCustomers();` returned customer rows (`5 Joker`, `6 Batman`) in `0.0002 seconds`',
        '`CALL updateOrderStatus(1, \'Shipped\');` updated order status to `Shipped`',
        '`CALL updateProductStock(1, 5);` updated `Product A` (`id_product = 1`, `harga = 100.00`) stock to `35` while `Product B` remained at `20`',
      ],
      scopeBoundary:
        'Documented on Pages 6–10 of the Final Project report.',
      evidence: {
        id: 'ev-sql-procedures',
        title: 'Stored Procedure Execution Results (`03_procedures_execution.png`)',
        src: '/assets/projects/ecommerce-database-management/03_procedures_execution.png',
        alt: 'phpMyAdmin execution results for CALL showCustomers(), CALL updateOrderStatus(1, Shipped), and CALL updateProductStock(1, 5)',
        taskOrSourceLabel: 'Step 03 · Stored Procedures (Report Page 9)',
        observedFacts:
          'Shows the live output tables after invoking `CALL showCustomers()`, `CALL updateOrderStatus(1, \'Shipped\')`, and `CALL updateProductStock(1, 5)`.',
        analyticalInterpretation:
          'Demonstrates server-side transactional encapsulation and negative-inventory guardrails using SQL control-flow constructs.',
      },
    },
    {
      id: 'sql-step-4-triggers',
      stepNumber: '04',
      title: 'Triggers & Audit Logging',
      subtitle: '6 BEFORE / AFTER Triggers Recording to log_changes',
      toolOrPlatform: 'MariaDB / MySQL Triggers · log_changes Table',
      summary:
        'Implemented six automated `BEFORE` and `AFTER` row-level triggers across `Customers`, `Orders`, and `Products` to capture data mutations (`INSERT`, `UPDATE`, `DELETE`) with serialized `old_data` and `new_data` payloads inside `log_changes`.',
      activities: [
        'Implemented 3 `BEFORE` triggers: `before_insert_customers` (`BEFORE INSERT ON Customers`), `before_delete_orders` (`BEFORE DELETE ON Orders`), and `before_update_products` (`BEFORE UPDATE ON Products`)',
        'Implemented 3 `AFTER` triggers: `after_update_orders` (`AFTER UPDATE ON Orders`), `after_delete_customers` (`AFTER DELETE ON Customers`), and `after_insert_products` (`AFTER INSERT ON Products`)',
        'Tested each trigger through live DML operations (inserting customer `Robin`, deleting order `17`, updating `Product A` → `[Product C]`, updating order `18` quantity to `50`, deleting customer `Joker`, and inserting `Product f` with stock `40`)',
      ],
      verifiedFindings: [
        'All 6 trigger events were sequentially recorded in `log_changes` (`id` 1 through 6) with exact timestamps (`2024-07-26 02:12:35` to `04:04:16`), `event_type`, `table_name`, `old_data`, and `new_data`',
      ],
      scopeBoundary:
        'Documented on Pages 11–18. Note: Page 18 text mentions separate log table names (`LogCustomers`, `LogOrders`, `LogProducts`), whereas the actual executed SQL on Pages 11–17 writes all 6 audit records into `log_changes`.',
      evidence: {
        id: 'ev-sql-triggers',
        title: 'log_changes Audit Table Populated by All 6 Triggers (`04_triggers_audit_log.png`)',
        src: '/assets/projects/ecommerce-database-management/04_triggers_audit_log.png',
        alt: 'phpMyAdmin table view of log_changes showing 6 rows from BEFORE INSERT, BEFORE DELETE, BEFORE UPDATE, AFTER UPDATE, AFTER DELETE, and AFTER INSERT triggers',
        taskOrSourceLabel: 'Step 04 · Triggers & Audit Logging (Report Page 17)',
        observedFacts:
          'Displays rows 1–6 in `log_changes`: (1) `BEFORE INSERT` on `Customers` (`Robin`), (2) `BEFORE DELETE` on `Orders`, (3) `BEFORE UPDATE` on `Products` (`Old: Product A, Stock: 35` → `New: [Product C], Stock: 0`), (4) `AFTER UPDATE` on `Orders`, (5) `AFTER DELETE` on `Customers` (`Joker`), and (6) `AFTER INSERT` on `Products` (`Product f, Stock: 40`).',
        analyticalInterpretation:
          'Verifies end-to-end automated change tracking across all core business entities without requiring application-layer logging code.',
      },
    },
    {
      id: 'sql-step-5-indexing',
      stepNumber: '05',
      title: 'Composite Indexing',
      subtitle: '3 Multi-Column BTREE Indexes via CREATE TABLE, CREATE INDEX & ALTER TABLE',
      toolOrPlatform: 'MariaDB / MySQL BTREE Indexing',
      summary:
        'Created three composite (multi-column) BTREE indexes using three distinct DDL mechanisms (`CREATE TABLE`, `CREATE INDEX`, and `ALTER TABLE`) and inspected index cardinality and column sequence via `SHOW INDEX`.',
      activities: [
        'Method 1 (`CREATE TABLE`): `CREATE TABLE index_orders (order_id INT, customer_id INT, order_date DATE, INDEX (order_id, customer_id));`',
        'Method 2 (`CREATE INDEX`): `CREATE INDEX idx_customer_name_address ON Customers (nama, alamat);`',
        'Method 3 (`ALTER TABLE`): `ALTER TABLE Customers ADD INDEX idx_name_phone (nama, telepon);`',
        'Verified index definitions using `SHOW INDEX FROM index_orders;` and `SHOW INDEX FROM customers;`',
      ],
      verifiedFindings: [
        '`index_orders` confirmed with composite `BTREE` index `order_id` spanning `Seq_in_index = 1 (order_id)` and `Seq_in_index = 2 (customer_id)`',
        '`customers` confirmed with `PRIMARY (id_customer)` plus two composite `BTREE` indexes: `idx_customer_name_address (nama, alamat)` and `idx_name_phone (nama, telepon)`',
      ],
      scopeBoundary:
        'Documented on Pages 19–21 of the Final Project report.',
      evidence: {
        id: 'ev-sql-indexes',
        title: 'Composite BTREE Index Verification (`05_composite_indexes.png`)',
        src: '/assets/projects/ecommerce-database-management/05_composite_indexes.png',
        alt: 'phpMyAdmin output for Show index from index_orders and show index from customers showing composite BTREE indexes',
        taskOrSourceLabel: 'Step 05 · Composite Indexing (Report Page 21)',
        observedFacts:
          'Shows the `SHOW INDEX` metadata tables confirming `Index_type = BTREE` and `Seq_in_index` 1 and 2 for `order_id`, `idx_customer_name_address`, and `idx_name_phone`.',
        analyticalInterpretation:
          'Demonstrates multi-column index design for accelerating composite lookups on order relationships and customer directory attributes.',
      },
    },
    {
      id: 'sql-step-6-views',
      stepNumber: '06',
      title: 'Database Views & WITH CHECK OPTION',
      subtitle: 'Horizontal, Vertical & Nested Views with Updatable View DML',
      toolOrPlatform: 'MariaDB / MySQL Views',
      summary:
        'Constructed four database views covering horizontal projection (`horizontal_view`), vertical null-filtering (`vertical_view`), and nested view layering (`base_view` → `nested_view WITH CHECK OPTION`), and tested `INSERT` and `UPDATE` operations through `horizontal_view`.',
      activities: [
        'Created `horizontal_view`: `CREATE VIEW horizontal_view AS SELECT id_customer, nama, alamat FROM Customers;`',
        'Created `vertical_view`: `CREATE VIEW vertical_view AS SELECT nama, alamat FROM Customers WHERE alamat IS NOT NULL;`',
        'Created nested views with constraint checking: `CREATE VIEW base_view AS SELECT id_customer, nama FROM Customers WHERE nama IS NOT NULL;` followed by `CREATE VIEW nested_view AS SELECT * FROM base_view WITH CHECK OPTION;`',
        'Executed `UPDATE horizontal_view SET nama = \'Alice\' WHERE id_customer = 2;` and `INSERT INTO horizontal_view (id_customer, nama, alamat) VALUES (5, \'Bob\', \'6789 Pine Street\');`',
        'Listed all registered views via `SHOW FULL TABLES IN ecommerce WHERE TABLE_TYPE LIKE \'VIEW\';`',
      ],
      verifiedFindings: [
        'All 4 views (`base_view`, `horizontal_view`, `nested_view`, `vertical_view`) verified with `Table_type = VIEW`',
        'Updatable view DML on `horizontal_view` successfully updated `id_customer = 2` to `Alice` and inserted `id_customer = 5` (`Bob`)',
      ],
      scopeBoundary:
        'Documented on Pages 22–24 of the Final Project report.',
      evidence: {
        id: 'ev-sql-views',
        title: 'Horizontal, Vertical & Nested View Definitions (`06_views_check_option.png`)',
        src: '/assets/projects/ecommerce-database-management/06_views_check_option.png',
        alt: 'phpMyAdmin execution screenshots for horizontal_view, vertical_view, base_view, and nested_view WITH CHECK OPTION',
        taskOrSourceLabel: 'Step 06 · Database Views (Report Page 22)',
        observedFacts:
          'Displays the SQL creation statements and execution times (`0.0012`–`0.0022 seconds`) for `horizontal_view`, `vertical_view`, `base_view`, and `nested_view WITH CHECK OPTION`.',
        analyticalInterpretation:
          'Shows how virtual table abstractions isolate sensitive columns (`telepon`) while enforcing predicate integrity via `WITH CHECK OPTION`.',
      },
    },
    {
      id: 'sql-step-7-rbac',
      stepNumber: '07',
      title: 'Users, Roles & Privileges (RBAC)',
      subtitle: 'Least-Privilege Grants Verified in MariaDB CLI Monitor',
      toolOrPlatform: 'MariaDB Security · CREATE USER / CREATE ROLE / GRANT',
      summary:
        'Configured database security by provisioning three local database users (`user1`, `user2`, `user3`), three organizational roles (`finance`, `human_dev`, `warehouse`), and granular table, view, and procedure privileges—then verified access enforcement via the MariaDB command-line client.',
      activities: [
        'Created users: `CREATE USER \'user1\'@\'localhost\'`, `\'user2\'@\'localhost\'`, and `\'user3\'@\'localhost\'`',
        'Created roles: `CREATE ROLE \'finance\'`, `\'human_dev\'`, and `\'warehouse\'`',
        'Granted table SELECT to `user1`: `GRANT SELECT ON ecommerce.Orders TO \'user1\'@\'localhost\';`',
        'Granted view SELECT to `user2`: `GRANT SELECT ON ecommerce.horizontal_view TO \'user2\'@\'localhost\';`',
        'Granted routine EXECUTE to role & assigned role to `user3`: `GRANT EXECUTE ON PROCEDURE ecommerce.showCustomers TO \'finance\'; GRANT \'finance\' TO \'user3\'@\'localhost\';`',
      ],
      verifiedFindings: [
        'MariaDB CLI (`user1`): `SELECT * FROM ecommerce.Orders;` succeeded (`1 row in set`), while `SELECT * FROM ecommerce.customers;` was blocked with `ERROR 1142 (42000): SELECT command denied to user \'user1\'@\'localhost\' for table \'ecommerce\'.\'customers\'`',
        'MariaDB CLI (`user2`): `SELECT * FROM ecommerce.horizontal_view;` succeeded (`3 rows in set`: Alice, Batman, Bob), while unauthorized view access was blocked with `ERROR 1142 (42000)`',
        'MariaDB CLI (`user3`): `SHOW GRANTS FOR \'user3\'@\'localhost\';` confirmed `GRANT \'finance\' TO \'user3\'@\'localhost\'`',
      ],
      scopeBoundary:
        'Documented on Pages 25–30 of the Final Project report.',
      evidence: {
        id: 'ev-sql-rbac',
        title: 'MariaDB CLI Access & Denial Verification (`07_rbac_cli_user1.png`)',
        src: '/assets/projects/ecommerce-database-management/07_rbac_cli_user1.png',
        alt: 'MariaDB command line terminal showing user1 permitted to SELECT from ecommerce.Orders and denied SELECT on ecommerce.customers with ERROR 1142 (42000)',
        taskOrSourceLabel: 'Step 07 · Database Security CLI Proof (Report Page 29)',
        observedFacts:
          'Shows `mysql -u user1 -p` on `10.4.32-MariaDB` returning 1 row for `SELECT * FROM ecommerce.Orders;` and raising `ERROR 1142 (42000): SELECT command denied` when attempting `SELECT * FROM ecommerce.customers;`.',
        analyticalInterpretation:
          'Proves that least-privilege table isolation is actively enforced by the MariaDB privilege system.',
      },
    },
  ] satisfies ProcessNode[],
  sqlCodeCatalog: [
    {
      category: '01. SQL Functions (Pages 3–4)',
      title: 'getTotalOrders() & getTotalPayments(id_order, start_date)',
      code: `DELIMITER $$
CREATE FUNCTION getTotalOrders() RETURNS INT
BEGIN
    DECLARE total INT;
    SELECT COUNT(*) INTO total FROM Orders;
    RETURN total;
END$$
DELIMITER ;

CREATE FUNCTION getTotalPayments(id_order INT, start_date DATE)
RETURNS DECIMAL(10, 2)
BEGIN
    DECLARE total DECIMAL(10, 2);
    SELECT SUM(jumlah_bayar) INTO total FROM Payments
    WHERE id_order = id_order AND tanggal_bayar >= start_date;
    RETURN total;
END;`,
    },
    {
      category: '02. Stored Procedures & Control Flow (Pages 6–8)',
      title: 'showCustomers(), updateOrderStatus() & updateProductStock()',
      code: `CREATE PROCEDURE showCustomers()
BEGIN
    SELECT * FROM Customers;
END;

CREATE PROCEDURE updateOrderStatus(id_order INT, status VARCHAR(20))
BEGIN
    UPDATE Orders SET status = status WHERE id_order = id_order;
END;

DELIMITER //
CREATE PROCEDURE updateProductStock(IN id_product INT, IN quantityChange INT)
BEGIN
    DECLARE currentStock INT;
    SELECT stock INTO currentStock FROM products WHERE id = id_product;

    IF (currentStock + quantityChange) < 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: Stock cannot be negative';
    ELSE
        UPDATE products SET stock = stock + quantityChange WHERE id = id_product;
        IF (currentStock + quantityChange) < 10 THEN
            INSERT INTO low_stock_alerts (product_id, current_stock, alert_date)
            VALUES (id_product, currentStock + quantityChange, NOW());
        END IF;
    END IF;
END //
DELIMITER ;`,
    },
    {
      category: '03. Audit Table & 6 BEFORE/AFTER Triggers (Pages 11–17)',
      title: 'log_changes Table & Row-Level Audit Triggers',
      code: `CREATE TABLE log_changes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    event_type VARCHAR(20),
    table_name VARCHAR(50),
    old_data TEXT,
    new_data TEXT
);

-- Example 1: BEFORE UPDATE ON Products
CREATE TRIGGER before_update_products BEFORE UPDATE ON Products FOR EACH ROW
BEGIN
    INSERT INTO log_changes (event_type, table_name, old_data, new_data)
    VALUES (
        'BEFORE UPDATE', 'Products',
        CONCAT('Name: ', OLD.nama_product, ', Stock: ', OLD.stock),
        CONCAT('Name: ', NEW.nama_product, ', Stock: ', NEW.stock)
    );
END;

-- Plus: before_insert_customers, before_delete_orders,
-- after_update_orders, after_delete_customers, after_insert_products`,
    },
    {
      category: '04. Composite Indexes, Views & RBAC Security (Pages 19–28)',
      title: 'Composite BTREE Keys, WITH CHECK OPTION Views & Grants',
      code: `-- 3 Composite Indexes
CREATE TABLE index_orders (
    order_id INT, customer_id INT, order_date DATE,
    INDEX (order_id, customer_id)
);
CREATE INDEX idx_customer_name_address ON Customers (nama, alamat);
ALTER TABLE Customers ADD INDEX idx_name_phone (nama, telepon);

-- 4 Views (Horizontal, Vertical, Base & Nested WITH CHECK OPTION)
CREATE VIEW horizontal_view AS SELECT id_customer, nama, alamat FROM Customers;
CREATE VIEW vertical_view AS SELECT nama, alamat FROM Customers WHERE alamat IS NOT NULL;
CREATE VIEW base_view AS SELECT id_customer, nama FROM Customers WHERE nama IS NOT NULL;
CREATE VIEW nested_view AS SELECT * FROM base_view WITH CHECK OPTION;

-- Users, Roles & Granular Privileges
CREATE USER 'user1'@'localhost' IDENTIFIED BY 'password1';
CREATE USER 'user2'@'localhost' IDENTIFIED BY 'password2';
CREATE USER 'user3'@'localhost' IDENTIFIED BY 'password3';
CREATE ROLE 'finance'; CREATE ROLE 'human_dev'; CREATE ROLE 'warehouse';

GRANT SELECT ON ecommerce.Orders TO 'user1'@'localhost';
GRANT SELECT ON ecommerce.horizontal_view TO 'user2'@'localhost';
GRANT EXECUTE ON PROCEDURE ecommerce.showCustomers TO 'finance';
GRANT 'finance' TO 'user3'@'localhost';`,
    },
  ],
  flashCards: [
    {
      id: 'sql-card-schema',
      category: 'Relational Architecture',
      title: '6 Core Tables & Normalized Entity Relationships',
      primaryValue: '6 Core Tables',
      description:
        'Separates customer records, product catalog, order headers, order line items, payments, and change logs within the `ecommerce` database.',
      details: [
        'Master Tables: `Customers` (`id_customer`, `nama`, `alamat`, `telepon`) & `Products` (`id_product`, `nama_product`, `harga`, `stock`)',
        'Transactional Tables: `Orders`, `OrderDetails` (`id_order_detail`, `id_order`, `id_product`, `kuantitas`), and `Payments` (`jumlah_bayar`, `tanggal_bayar`)',
        'Audit Layer: `log_changes` capturing timestamped `BEFORE` and `AFTER` state transitions across core entities',
      ],
      attribution: 'Source: Laporan Final Project Pemrograman Basis Data (Page 2)',
    },
    {
      id: 'sql-card-triggers',
      category: 'Automated Change Auditing',
      title: '6 BEFORE & AFTER Triggers Logging into log_changes',
      primaryValue: '6 Active Triggers',
      description:
        'Captures pre-change and post-change values across `Customers`, `Orders`, and `Products` without external application middleware.',
      details: [
        'BEFORE Triggers: `before_insert_customers`, `before_delete_orders`, `before_update_products`',
        'AFTER Triggers: `after_update_orders`, `after_delete_customers`, `after_insert_products`',
        'Verified in `log_changes` across 6 sequential DML test operations (`2024-07-26`)',
      ],
      attribution: 'Source: Laporan Final Project Pemrograman Basis Data (Pages 11–17)',
    },
    {
      id: 'sql-card-rbac',
      category: 'Database Security & Access Control',
      title: 'Role-Based Privileges Verified via MariaDB CLI',
      primaryValue: '3 Users · 3 Roles',
      description:
        'Demonstrates least-privilege isolation across tables, views, and stored procedures using MariaDB users and roles.',
      details: [
        '`user1@localhost`: Granted `SELECT` on `ecommerce.Orders`; denied access to `ecommerce.customers` (`ERROR 1142`)',
        '`user2@localhost`: Granted `SELECT` on `ecommerce.horizontal_view`; denied access to other views (`ERROR 1142`)',
        '`user3@localhost`: Assigned role `finance` with `GRANT EXECUTE ON PROCEDURE ecommerce.showCustomers`',
      ],
      attribution: 'Source: Laporan Final Project Pemrograman Basis Data (Pages 25–30)',
    },
  ] satisfies FlashCardItem[],
  publicEvidence: [
    {
      id: 'sql-ev-1-erd',
      title: 'phpMyAdmin Designer — E-Commerce ERD (`01_erd_schema.png`)',
      src: '/assets/projects/ecommerce-database-management/01_erd_schema.png',
      alt: 'phpMyAdmin Designer ERD diagram of the ecommerce database',
      taskOrSourceLabel: 'Report Page 2 · ERD & Schema Relationships',
      observedFacts:
        'Shows the `ecommerce` tables (`customers`, `payments`, `orderdetails`, `products`, `orders`, `log_changes`, `index_orders`) and views (`horizontal_view`, `vertical_view`, `nested_view`, `base_view`) with foreign-key connector lines.',
      analyticalInterpretation:
        'Confirms the relational schema structure and view dependencies implemented in phpMyAdmin.',
    },
    {
      id: 'sql-ev-2-functions',
      title: 'SQL Functions Execution & Status (`02_functions_execution.png`)',
      src: '/assets/projects/ecommerce-database-management/02_functions_execution.png',
      alt: 'Execution of getTotalOrders() and getTotalPayments() and SHOW FUNCTION STATUS output',
      taskOrSourceLabel: 'Report Page 5 · SQL Functions Verification',
      observedFacts:
        'Shows `SELECT getTotalOrders();` returning `2`, `SELECT getTotalPayments(1, \'2024-01-01\');`, and `SHOW FUNCTION STATUS WHERE Db = DATABASE();`.',
      analyticalInterpretation:
        'Verifies both parameterless and parameterized scalar functions in the `ecommerce` database.',
    },
    {
      id: 'sql-ev-3-procedures',
      title: 'Stored Procedures Execution (`03_procedures_execution.png`)',
      src: '/assets/projects/ecommerce-database-management/03_procedures_execution.png',
      alt: 'Execution of CALL showCustomers(), CALL updateOrderStatus(1, Shipped), and CALL updateProductStock(1, 5)',
      taskOrSourceLabel: 'Report Page 9 · Stored Procedures Verification',
      observedFacts:
        'Displays the result sets after calling `showCustomers()`, `updateOrderStatus(1, \'Shipped\')`, and `updateProductStock(1, 5)`.',
      analyticalInterpretation:
        'Confirms procedural execution and stock update logic on `products`.',
    },
    {
      id: 'sql-ev-4-triggers',
      title: 'log_changes Trigger Audit Trail (`04_triggers_audit_log.png`)',
      src: '/assets/projects/ecommerce-database-management/04_triggers_audit_log.png',
      alt: 'Table view of log_changes showing all 6 trigger events recorded on 2024-07-26',
      taskOrSourceLabel: 'Report Page 17 · Trigger Audit Log Verification',
      observedFacts:
        'Shows 6 logged events (`BEFORE INSERT`, `BEFORE DELETE`, `BEFORE UPDATE`, `AFTER UPDATE`, `AFTER DELETE`, `AFTER INSERT`) with serialized `old_data` and `new_data` strings.',
      analyticalInterpretation:
        'Demonstrates complete audit trail capture across `Customers`, `Orders`, and `Products`.',
    },
    {
      id: 'sql-ev-5-indexes',
      title: 'Composite BTREE Indexes (`05_composite_indexes.png`)',
      src: '/assets/projects/ecommerce-database-management/05_composite_indexes.png',
      alt: 'SHOW INDEX output for index_orders and customers tables',
      taskOrSourceLabel: 'Report Page 21 · Composite Index Verification',
      observedFacts:
        'Displays `SHOW INDEX FROM index_orders;` and `SHOW INDEX FROM customers;` confirming composite `BTREE` keys on `(order_id, customer_id)`, `(nama, alamat)`, and `(nama, telepon)`.',
      analyticalInterpretation:
        'Verifies composite index creation via `CREATE TABLE`, `CREATE INDEX`, and `ALTER TABLE`.',
    },
    {
      id: 'sql-ev-6-views',
      title: 'Database Views & WITH CHECK OPTION (`06_views_check_option.png`)',
      src: '/assets/projects/ecommerce-database-management/06_views_check_option.png',
      alt: 'Creation of horizontal_view, vertical_view, base_view, and nested_view WITH CHECK OPTION',
      taskOrSourceLabel: 'Report Page 22 · Database Views Verification',
      observedFacts:
        'Shows the creation queries and confirmation banners for `horizontal_view`, `vertical_view`, `base_view`, and `nested_view WITH CHECK OPTION`.',
      analyticalInterpretation:
        'Confirms horizontal, vertical, and nested view abstractions with check constraints.',
    },
    {
      id: 'sql-ev-7-rbac1',
      title: 'MariaDB CLI Privilege Verification — user1 (`07_rbac_cli_user1.png`)',
      src: '/assets/projects/ecommerce-database-management/07_rbac_cli_user1.png',
      alt: 'MariaDB CLI showing user1 allowed on ecommerce.Orders and denied on ecommerce.customers',
      taskOrSourceLabel: 'Report Page 29 · CLI Privilege Verification (user1)',
      observedFacts:
        'Shows `user1` reading `ecommerce.Orders` (`1 row in set`) and receiving `ERROR 1142 (42000): SELECT command denied` on `ecommerce.customers`.',
      analyticalInterpretation:
        'Verifies table-level access restriction in the MariaDB CLI.',
    },
    {
      id: 'sql-ev-8-rbac2',
      title: 'MariaDB CLI Privilege Verification — user2 & user3 (`08_rbac_cli_user2_user3.png`)',
      src: '/assets/projects/ecommerce-database-management/08_rbac_cli_user2_user3.png',
      alt: 'MariaDB CLI showing user2 allowed on horizontal_view and user3 granted finance role',
      taskOrSourceLabel: 'Report Page 30 · CLI Privilege Verification (user2 & user3)',
      observedFacts:
        'Shows `user2` querying `ecommerce.horizontal_view` (`3 rows in set`: Alice, Batman, Bob) while denied on `vertikal_view`, and `SHOW GRANTS FOR \'user3\'@\'localhost\'` confirming `GRANT \'finance\' TO \'user3\'@\'localhost\'`.',
      analyticalInterpretation:
        'Verifies view-level privilege isolation and role assignment in MariaDB.',
    },
  ] satisfies EvidenceItem[],
};

export const SEMANTIC_RETRIEVAL_CASE_STUDY = {
  slug: 'semantic-retrieval-running-shoes',
  title: 'Comparison of TF-IDF and Sentence Embedding on Semantic Retrieval of Running Shoe Products',
  shortTitle: 'Running Shoes Semantic Retrieval',
  indonesianTitle: 'Perbandingan TF-IDF dan Sentence Embedding pada Semantic Retrieval Produk Sepatu Lari',
  contextLabel: 'Undergraduate Thesis (Skripsi S1 Informatika)',
  institution: 'Program Studi S1 Informatika, Fakultas Ilmu Komputer, Universitas AMIKOM Yogyakarta',
  author: 'Satya Gema Nusantara Iskandar (NIM 22.11.5242)',
  advisor: 'Rumini, M.Kom',
  defenseDate: 'August 2026 (Skripsi dipertahankan Agustus 2026)',
  tools: [
    'Python',
    'Google Colab',
    'pandas & NumPy',
    'scikit-learn (TF-IDF)',
    'sentence-transformers (all-MiniLM-L6-v2)',
    'Cosine Similarity',
    'nDCG@5 (DCG@5 / IDCG@5)',
    'joblib',
    'Streamlit',
  ],
  shortSummary:
    'An end-to-end Information Retrieval undergraduate thesis investigating whether meaning-based dense representations (`Sentence Embedding` via `all-MiniLM-L6-v2`) outperform lexical term weighting (`TF-IDF`) when retrieving running shoes from the RunRepeat dataset (`948` raw rows → `475` cleaned product documents) across `30` natural-language benchmark queries (`293` pooled query–document relevance judgments), deployed in an interactive Streamlit web prototype.',
  problemStatement:
    'Keyword-based product search fails when user queries and product descriptions use different terminology (vocabulary mismatch). This research tests whether meaning-based representation (Sentence Embedding) performs better than lexical TF-IDF on running shoe product search using natural-language queries.',
  scopeClarification:
    'All metrics, model specifications (`all-MiniLM-L6-v2`, 384 dimensions, 256-token max input without chunking), dataset counts (`948` raw rows × `30` columns → `475` cleaned documents, `8` combined text attributes), pooling (`293` unique query–document pairs from `300` top-5 candidates), and limitations are preserved verbatim from the defended thesis summary.',
  heroKpis: [
    {
      label: 'RunRepeat Corpus',
      value: '948 → 475',
      qualifier: 'Raw rows (948 × 30 cols) → cleaned documents (8 text attributes)',
    },
    {
      label: 'Benchmark Queries',
      value: '30 Queries',
      qualifier: 'Natural-language running shoe search queries',
    },
    {
      label: 'Pooled Qrels Pairs',
      value: '293 Pairs',
      qualifier: 'Deduplicated from 300 Top-5 results · Graded relevance 0–3',
    },
    {
      label: 'Best Mean nDCG@5',
      value: '0.6825',
      qualifier: 'Sentence Embedding (all-MiniLM-L6-v2) vs 0.6492 TF-IDF (+0.0333)',
    },
  ],
  heroEvidence: {
    id: 'ir-hero-charts',
    title: 'Mean nDCG@5 (30 Queries) & Largest Query Differences (`01_ndcg_charts_and_table.png`)',
    src: '/assets/projects/semantic-retrieval-running-shoes/01_ndcg_charts_and_table.png',
    alt: 'Bar charts of Mean nDCG@5 across 30 queries (TF-IDF 0.6492 vs Sentence Embedding 0.6825), largest query gaps (Q14 0.36 vs 1.00, Q4 0.90 vs 0.46), and full nDCG@5 statistical table',
    taskOrSourceLabel: 'Thesis Main Results · nDCG@5 Evaluation (Page 2)',
    observedFacts:
      'Displays two side-by-side charts—Mean nDCG@5 across 30 queries (`TF-IDF: 0.6492` vs. `Sentence Embedding: 0.6825`) and Queries with Largest Difference (`Q14 stable shoes daily training`: TF-IDF `0.36` vs. Sentence Emb. `1.00`; `Q4 comfortable long runs`: TF-IDF `0.90` vs. Sentence Emb. `0.46`)—followed by the 5-row statistical table (`Mean`, `Median`, `Std Dev`, `Minimum`, `Maximum`).',
    analyticalInterpretation:
      'Demonstrates that Sentence Embedding achieves a slightly higher mean (`0.6825` vs `0.6492`) and substantially higher minimum floor (`0.3246` vs `0.1847`), while query-level superiority depends on whether the query expresses implicit concepts (`Q14`) or explicit lexical terms (`Q4`).',
    scopeNote:
      'Extracted directly from Page 2 of the portfolio research document.',
  } satisfies EvidenceItem,
  ndcgMetricsTable: [
    {
      metricEn: 'Mean (Rata-rata)',
      metricId: 'Rata-rata (Mean)',
      tfidf: '0.6492',
      sentenceEmbedding: '0.6825',
      diff: '+0.0333 (Sentence Embedding)',
      highlight: true,
    },
    {
      metricEn: 'Median',
      metricId: 'Median',
      tfidf: '0.6876',
      sentenceEmbedding: '0.6835',
      diff: '-0.0041 (TF-IDF slightly higher)',
      highlight: false,
    },
    {
      metricEn: 'Standard Deviation (Standar deviasi)',
      metricId: 'Standar deviasi',
      tfidf: '0.2156',
      sentenceEmbedding: '0.2130',
      diff: '-0.0026 (Sentence Embedding more consistent)',
      highlight: false,
    },
    {
      metricEn: 'Minimum',
      metricId: 'Minimum',
      tfidf: '0.1847',
      sentenceEmbedding: '0.3246',
      diff: '+0.1399 (Higher worst-case floor)',
      highlight: true,
    },
    {
      metricEn: 'Maximum (Maksimum)',
      metricId: 'Maksimum',
      tfidf: '1.0000',
      sentenceEmbedding: '1.0000',
      diff: '0.0000 (Tied perfect top score)',
      highlight: false,
    },
  ],
  queryCaseComparisons: [
    {
      queryId: 'Q14',
      queryText: 'stable running shoes for daily training',
      tfidfScore: '0.3649',
      tfidfChartLabel: '0.36',
      embeddingScore: '1.0000',
      embeddingChartLabel: '1.00',
      winner: 'Sentence Embedding (+0.6351)',
      explanationEn:
        'Sentence Embedding achieved a perfect 1.0000 vs. 0.3649 for TF-IDF because top-ranked product documents described stability and daily training concepts using related phrases rather than repeating the exact query keywords.',
      explanationId:
        'Sentence Embedding mencapai 1,0000 vs 0,3649 karena dokumen teratas memuat konsep stabilitas dan penggunaan harian secara terkait meskipun tidak mengulang kata kunci secara persis.',
    },
    {
      queryId: 'Q4',
      queryText: 'comfortable during long runs',
      tfidfScore: '0.9031',
      tfidfChartLabel: '0.90',
      embeddingScore: '0.4643',
      embeddingChartLabel: '0.46',
      winner: 'TF-IDF (+0.4388)',
      explanationEn:
        'TF-IDF achieved 0.9031 vs. 0.4643 for Sentence Embedding because the most relevant product descriptions explicitly contained the exact lexical terms "comfortable" and "cushioning".',
      explanationId:
        'TF-IDF mencapai 0,9031 vs 0,4643 karena dokumen teratas memuat kata "comfortable" dan "cushioning" secara langsung/eksplisit.',
    },
  ],
  processNodes: [
    {
      id: 'ir-step-1-prep',
      stepNumber: '01',
      title: 'Data Preparation & Semantic Text Construction',
      subtitle: 'RunRepeat Dataset (948 × 30) → 475 Cleaned Documents',
      toolOrPlatform: 'Python · pandas · NumPy (Google Colab)',
      summary:
        'Audited the raw RunRepeat running shoe dataset (`948 rows × 30 columns`), removed records where all 8 text attributes were empty, normalized text formatting without imputing missing values, and concatenated 8 descriptive attributes into one unified `semantic text` per product.',
      activities: [
        'Inspected dataset schema (`948 rows × 30 columns`) and missing-value distribution across product attributes',
        'Dropped rows where all 8 selected text attributes were completely empty, yielding `475` valid product documents',
        'Normalized character encoding, delimiters, whitespace, and lowercase text; intentionally did NOT impute missing values to avoid fabricating product characteristics',
        'Combined the 8 text attributes into a single unified `semantic text` representation per running shoe product',
      ],
      verifiedFindings: [
        'Raw dataset reduced from `948` rows to `475` clean, non-empty running shoe documents',
        'Zero synthetic imputation applied—preserving factual product text integrity',
      ],
      scopeBoundary:
        'Stage 1 of the documented 5-stage analysis workflow (Page 1).',
      evidence: {
        id: 'ev-ir-workflow',
        title: '5-Stage Analysis Workflow Table (`02_research_workflow_overview.png`)',
        src: '/assets/projects/semantic-retrieval-running-shoes/02_research_workflow_overview.png',
        alt: 'Table showing the 5-stage analysis workflow: 1. Persiapan data, 2. Representasi dokumen, 3. Benchmark & anotasi, 4. Evaluasi, 5. Prototipe',
        taskOrSourceLabel: 'Analysis Workflow · Stages 1–5 (Page 1)',
        observedFacts:
          'Documents the exact 5 workflow stages: (1) Persiapan data (`948 baris × 30 kolom` → `475 dokumen`, 8 text attributes merged), (2) Representasi dokumen (`TF-IDF 475×5.394` vs `all-MiniLM-L6-v2 475×384`), (3) Benchmark & anotasi (`30 query`, `300` top-5 results deduplicated to `293` unique pairs, graded `0–3` qrels), (4) Evaluasi (`DCG@5`, `IDCG@5`, `nDCG@5`), and (5) Prototipe (`Streamlit`).',
        analyticalInterpretation:
          'Provides a transparent, reproducible experimental pipeline from raw data cleaning to interactive deployment.',
      },
    },
    {
      id: 'ir-step-2-repr',
      stepNumber: '02',
      title: 'Document Representation & Cosine Similarity',
      subtitle: 'TF-IDF (475 × 5,394) vs. all-MiniLM-L6-v2 (475 × 384)',
      toolOrPlatform: 'scikit-learn · sentence-transformers · Cosine Similarity',
      summary:
        'Constructed parallel lexical and dense semantic representations over the exact same 475-document corpus and preprocessing pipeline, using Cosine Similarity as the shared ranking function for a controlled experimental comparison.',
      activities: [
        'Constructed the `TF-IDF` baseline representation with a `5,394`-term vocabulary, producing a sparse document-term matrix of shape `475 × 5,394`',
        'Constructed the `Sentence Embedding` representation using the pretrained `all-MiniLM-L6-v2` model, producing a dense vector matrix of shape `475 × 384` (384 dimensions)',
        'Computed `Cosine Similarity` between each query vector and all 475 product vectors identically across both methods',
      ],
      verifiedFindings: [
        'TF-IDF matrix shape: `475 × 5,394` (`5,394` vocabulary terms)',
        'Sentence Embedding (`all-MiniLM-L6-v2`) matrix shape: `475 × 384` (`384` dense dimensions; max input `256` tokens without chunking)',
      ],
      scopeBoundary:
        'Corpus, preprocessing, and Cosine Similarity computation were held strictly identical across both methods.',
    },
    {
      id: 'ir-step-3-pooling',
      stepNumber: '03',
      title: 'Benchmark Queries, Pooling & Graded Relevance (qrels)',
      subtitle: '30 Queries · 300 Top-5 Results → 293 Unique Pairs Annotated (0–3)',
      toolOrPlatform: 'Top-5 Pooling · Graded Relevance Judgement (0–3)',
      summary:
        'Evaluated both retrieval models across 30 natural-language benchmark queries, pooled the Top-5 results from each method (`300` total retrievals), deduplicated them into `293` unique query–document pairs, and assigned graded relevance scores (`0–3`) stored as ground-truth `qrels`.',
      activities: [
        'Designed `30` natural-language running shoe search queries reflecting varied user needs (stability, daily training, long-run comfort, etc.)',
        'Retrieved Top-5 documents from TF-IDF (`30 × 5 = 150`) and Top-5 from Sentence Embedding (`30 × 5 = 150`) = `300` total retrieved results',
        'Deduplicated overlapping documents across both methods (pooling) to obtain `293` unique query–document pairs',
        'Annotated each of the `293` pairs on a 4-point graded relevance scale (`0–3`) and saved the resulting ground truth as `qrels`',
      ],
      verifiedFindings: [
        '`300` pooled Top-5 retrievals deduplicated to `293` unique query–document pairs (indicating very low overlap between lexical and semantic top-5 lists)',
        'Graded relevance scale `0–3` enables position-aware discounted cumulative gain evaluation',
      ],
      scopeBoundary:
        'Relevance annotation was performed by a single annotator; inter-annotator agreement was therefore not computed (documented limitation).',
    },
    {
      id: 'ir-step-4-eval',
      stepNumber: '04',
      title: 'nDCG@5 Evaluation & Qualitative Error Analysis',
      subtitle: 'Sentence Embedding (0.6825) vs. TF-IDF (0.6492) + Q14 & Q4 Analysis',
      toolOrPlatform: 'DCG@5 · IDCG@5 · nDCG@5 · Error Analysis',
      summary:
        'Calculated `DCG@5`, `IDCG@5`, and `nDCG@5` for each of the 30 queries, compared summary statistics (`Mean`, `Median`, `Std Dev`, `Min`, `Max`), and conducted qualitative error analysis on the queries with the largest performance divergence (`Q14` and `Q4`).',
      activities: [
        'Computed per-query `DCG@5`, ideal `IDCG@5`, and normalized `nDCG@5` across all 30 benchmark queries',
        'Aggregated distribution metrics: Mean (`0.6825` vs `0.6492`), Median (`0.6835` vs `0.6876`), Std Dev (`0.2130` vs `0.2156`), Minimum (`0.3246` vs `0.1847`), and Maximum (`1.0000` vs `1.0000`)',
        'Analyzed `Q14 (stable running shoes for daily training)` where Sentence Embedding led (`1.0000` vs `0.3649`) and `Q4 (comfortable during long runs)` where TF-IDF led (`0.9031` vs `0.4643`)',
      ],
      verifiedFindings: [
        'Sentence Embedding (`all-MiniLM-L6-v2`) outperformed TF-IDF on Mean nDCG@5 by `+0.0333` (`0.6825` vs `0.6492`) and raised minimum query performance from `0.1847` to `0.3246`',
        'Neither method won universally across all query patterns—semantic embeddings excelled on conceptual queries (`Q14`), whereas TF-IDF remained strong when exact terms (`comfortable`, `cushioning`) appeared explicitly (`Q4`)',
      ],
      scopeBoundary:
        'The mean difference (`0.0333`) across 30 queries is modest and was not tested for formal statistical significance.',
      evidence: {
        id: 'ev-ir-results',
        title: 'nDCG@5 Evaluation Charts, Summary Table & Findings (`03_findings_and_limitations.png`)',
        src: '/assets/projects/semantic-retrieval-running-shoes/03_findings_and_limitations.png',
        alt: 'Full results page showing Mean nDCG@5 chart, Q14 vs Q4 chart, nDCG@5 metric table, Temuan & Insight bullets, and Keterbatasan bullets',
        taskOrSourceLabel: 'Thesis Results, Insights & Limitations (Page 2)',
        observedFacts:
          'Shows the complete `HASIL UTAMA` charts and table alongside the 4 `TEMUAN & INSIGHT` bullets and 3 `KETERBATASAN` bullets.',
        analyticalInterpretation:
          'Synthesizes both quantitative ranking metrics and honest methodological boundaries.',
      },
    },
    {
      id: 'ir-step-5-streamlit',
      stepNumber: '05',
      title: 'Interactive Streamlit Recommendation Prototype',
      subtitle: 'Live Query Input, Method Selector & Cosine Similarity Ranking',
      toolOrPlatform: 'Python · Streamlit · joblib',
      summary:
        'Packaged the serialized `TF-IDF` vectorizer and `all-MiniLM-L6-v2` embeddings (`joblib`) into an interactive Streamlit web application allowing users to enter natural-language queries, switch between retrieval methods, and inspect top-ranked running shoes with their cosine similarity scores.',
      activities: [
        'Serialized precomputed matrices and model artifacts using `joblib` for fast interactive inference',
        'Built a Streamlit web interface where users type a natural-language running shoe query, select `TF-IDF` or `Sentence Embedding`, and view top-ranked product recommendations with similarity scores',
      ],
      verifiedFindings: [
        'Demonstrates end-to-end translation from offline IR evaluation to an interactive product search and recommendation prototype',
      ],
      scopeBoundary:
        'Stage 5 of the documented analysis workflow (Page 1).',
    },
  ] satisfies ProcessNode[],
  keyFindings: [
    {
      titleEn: 'Higher Mean & Stronger Worst-Case Floor',
      titleId: 'Rata-rata Lebih Tinggi & Nilai Minimum Lebih Konsisten',
      bodyEn:
        'Sentence Embedding (`all-MiniLM-L6-v2`) achieved a slightly higher mean nDCG@5 (`0.6825` vs. `0.6492`; difference `0.0333`) and greater consistency with a minimum score of `0.3246` compared to `0.1847` for TF-IDF.',
      bodyId:
        'Sentence Embedding (`all-MiniLM-L6-v2`) unggul tipis secara rata-rata (`0,6825` vs `0,6492`; selisih `0,0333`) dan lebih konsisten dengan nilai minimum `0,3246` vs `0,1847` pada TF-IDF.',
    },
    {
      titleEn: 'Conceptual Query Advantage — Q14 (1.0000 vs. 0.3649)',
      titleId: 'Keunggulan Kueri Konseptual — Q14 (1,0000 vs 0,3649)',
      bodyEn:
        'On Q14 ("stable running shoes for daily training"), Sentence Embedding reached `1.0000` vs. `0.3649` for TF-IDF because the top documents expressed stability and daily training concepts through related terminology rather than exact keyword matches.',
      bodyId:
        'Pada Q14 ("stable running shoes for daily training"), Sentence Embedding mencapai `1,0000` vs `0,3649` karena dokumen teratas memuat konsep stabilitas dan penggunaan harian secara terkait.',
    },
    {
      titleEn: 'Explicit Keyword Strength — Q4 (0.9031 vs. 0.4643)',
      titleId: 'Kekuatan Kata Kunci Eksplisit — Q4 (0,9031 vs 0,4643)',
      bodyEn:
        'TF-IDF remained strong when terms were stated explicitly: on Q4 ("comfortable during long runs"), TF-IDF scored `0.9031` vs. `0.4643` for Sentence Embedding because top documents directly contained the words "comfortable" and "cushioning".',
      bodyId:
        'TF-IDF masih kuat bila istilah dinyatakan eksplisit: pada Q4 ("comfortable during long runs"), TF-IDF mencapai `0,9031` vs `0,4643` karena dokumen teratas memuat kata "comfortable" dan "cushioning" secara langsung.',
    },
    {
      titleEn: 'Practical Implication for Search Architecture',
      titleId: 'Implikasi Praktis Pemilihan Metode',
      bodyEn:
        'No single retrieval method won across all 30 queries; practical system design should account for user query patterns (e.g., combining lexical matching for explicit attribute terms with semantic embeddings for natural-language intent).',
      bodyId:
        'Tidak ada metode yang menang di semua kasus, sehingga pemilihan metode perlu mempertimbangkan pola kueri pengguna.',
    },
  ],
  limitations: [
    {
      titleEn: 'Single-Annotator Relevance Judgements',
      titleId: 'Penilaian Relevansi oleh Satu Annotator',
      bodyEn:
        'Relevance judgements (`0–3` across 293 pooled pairs) were performed by a single annotator, so inter-annotator agreement (such as Cohen’s Kappa) could not be calculated.',
      bodyId:
        'Penilaian relevansi dilakukan oleh satu annotator, sehingga kesepakatan antar-annotator tidak dapat dihitung.',
    },
    {
      titleEn: 'Corpus Scope & Unverified Statistical Significance',
      titleId: 'Cakupan Korpus & Signifikansi Statistik Belum Diuji',
      bodyEn:
        'Evaluation was conducted on 30 queries and 475 English documents; findings apply specifically to this dataset and scenario, and the modest mean difference (`0.0333`) has not been tested for formal statistical significance.',
      bodyId:
        'Hanya mencakup 30 kueri dan 475 dokumen berbahasa Inggris, sehingga hasil berlaku pada dataset dan skenario ini; selisih rata-rata (`0,0333`) tergolong kecil dan belum diuji signifikansi statistiknya.',
    },
    {
      titleEn: '256-Token Input Truncation Without Chunking',
      titleId: 'Batas Input 256 Token Tanpa Chunking',
      bodyEn:
        'The `all-MiniLM-L6-v2` model input was capped at 256 tokens without document chunking, meaning longer concatenated product descriptions were truncated.',
      bodyId:
        'Input model dibatasi 256 token tanpa chunking, sehingga teks panjang terpotong.',
    },
  ],
  flashCards: [
    {
      id: 'ir-card-corpus',
      category: 'Dataset & Semantic Text',
      title: 'RunRepeat Corpus Cleaning & 8-Attribute Fusion',
      primaryValue: '948 → 475 Docs',
      description:
        'Transformed the raw `948 × 30` RunRepeat table into `475` clean running shoe documents without synthetic missing-value imputation.',
      details: [
        'Removed rows where all 8 selected descriptive text attributes were empty',
        'Normalized encoding, delimiters, whitespace, and lowercase formatting',
        'Concatenated 8 text attributes into one unified `semantic text` per running shoe',
      ],
      attribution: 'Source: Thesis Portfolio Document (Page 1 — Persiapan Data)',
    },
    {
      id: 'ir-card-models',
      category: 'Controlled Representation Comparison',
      title: 'TF-IDF (5,394 Terms) vs. all-MiniLM-L6-v2 (384 Dims)',
      primaryValue: '475×5,394 vs 475×384',
      description:
        'Held corpus, text preprocessing, and Cosine Similarity scoring identical to isolate the effect of lexical vs. dense semantic representation.',
      details: [
        'TF-IDF Baseline: `5,394`-term vocabulary → `475 × 5,394` sparse matrix (`scikit-learn`)',
        'Sentence Embedding: `all-MiniLM-L6-v2` → `475 × 384` dense matrix (`sentence-transformers`)',
        'Pooled Top-5 across 30 queries (`300` results) → `293` unique pairs graded `0–3` (`qrels`)',
      ],
      attribution: 'Source: Thesis Portfolio Document (Page 1 — Representasi & Benchmark)',
    },
    {
      id: 'ir-card-evaluation',
      category: 'nDCG@5 Evaluation & Query Patterns',
      title: 'Mean 0.6825 vs. 0.6492 & Query-Dependent Trade-offs',
      primaryValue: '+0.0333 Mean Diff',
      description:
        'Sentence Embedding led on mean (`0.6825`) and minimum (`0.3246` vs `0.1847`), while query-level winners depended on explicit vs. conceptual phrasing.',
      details: [
        'Conceptual Winner (`Q14`): `1.0000` (Sentence Embedding) vs `0.3649` (TF-IDF) on "stable running shoes for daily training"',
        'Explicit Lexical Winner (`Q4`): `0.9031` (TF-IDF) vs `0.4643` (Sentence Embedding) on "comfortable during long runs"',
        'Interactive Prototype: Deployed in `Streamlit` with `joblib` model persistence',
      ],
      attribution: 'Source: Thesis Portfolio Document (Page 2 — Hasil Utama & Temuan)',
    },
  ] satisfies FlashCardItem[],
  publicEvidence: [
    {
      id: 'ir-ev-1-charts',
      title: 'Mean nDCG@5 & Largest Query Difference Charts + Table (`01_ndcg_charts_and_table.png`)',
      src: '/assets/projects/semantic-retrieval-running-shoes/01_ndcg_charts_and_table.png',
      alt: 'Mean nDCG@5 bar chart (0.6492 vs 0.6825), Q14 and Q4 comparison chart, and 5-row nDCG@5 statistical table',
      taskOrSourceLabel: 'Thesis Main Results · Quantitative Evaluation (Page 2)',
      observedFacts:
        'Displays the Mean nDCG@5 chart (`0.6492` vs `0.6825`), the largest-gap query chart (`Q14`: `0.36` vs `1.00`; `Q4`: `0.90` vs `0.46`), and the full nDCG@5 metrics table (`Rata-rata`, `Median`, `Standar deviasi`, `Minimum`, `Maksimum`).',
      analyticalInterpretation:
        'Establishes the empirical performance distribution of both methods across all 30 benchmark queries.',
    },
    {
      id: 'ir-ev-2-workflow',
      title: '5-Stage Analysis Workflow Specification (`02_research_workflow_overview.png`)',
      src: '/assets/projects/semantic-retrieval-running-shoes/02_research_workflow_overview.png',
      alt: '5-stage analysis workflow table from the thesis portfolio document',
      taskOrSourceLabel: 'Thesis Methodology · Alur Kerja Analisis (Page 1)',
      observedFacts:
        'Details the 5 workflow stages: (1) Persiapan data, (2) Representasi dokumen, (3) Benchmark & anotasi, (4) Evaluasi, and (5) Prototipe.',
      analyticalInterpretation:
        'Documents the end-to-end experimental design from raw RunRepeat data preparation to Streamlit prototype deployment.',
    },
    {
      id: 'ir-ev-3-findings',
      title: 'Complete Findings, Insights & Limitations (`03_findings_and_limitations.png`)',
      src: '/assets/projects/semantic-retrieval-running-shoes/03_findings_and_limitations.png',
      alt: 'Complete Page 2 results showing charts, table, Temuan & Insight, and Keterbatasan',
      taskOrSourceLabel: 'Thesis Findings & Limitations (Page 2)',
      observedFacts:
        'Shows the documented `TEMUAN & INSIGHT` and `KETERBATASAN` sections alongside the quantitative charts and table.',
      analyticalInterpretation:
        'Preserves the exact analytical conclusions and methodological limitations reported in the thesis.',
    },
  ] satisfies EvidenceItem[],
};

