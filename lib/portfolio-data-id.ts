import type {
  EvidenceItem,
  FlashCardItem,
  ProcessNode,
  ProjectSummary,
  LangflowStageNode,
} from './portfolio-data';

export const PORTFOLIO_IDENTITY_ID = {
  name: 'Kowallskyy',
  positioning: 'Data & AI Automation Engineer',
  headline: 'Mengubah Data Menjadi Inteligensi.',
  supportingStatement:
    'Membangun solusi analitik dan alur kerja cerdas melalui data, AI, dan otomasi.',
  primaryCta: {
    label: 'Jelajahi Proyek',
    href: '#selected-work',
  },
  secondaryCta: {
    label: 'Mari Bekerja Sama',
    href: '#contact',
  },
  heroAnnotations: {
    upperLeft: {
      line1: 'DATA ANALYST',
      line2: '>_ AI AUTOMATION ENGINEER',
    },
    upperRight: {
      heading: 'MEMBANGUN SOLUSI ANALITIK DAN ALUR KERJA CERDAS',
      body: 'Menghubungkan analitik data, AI, dan otomasi untuk menyelesaikan permasalahan nyata.',
    },
    lowerLeft: {
      heading: 'FILOSOFI KERJA',
      line1: 'MENGUBAH DATA MENTAH MENJADI KEPUTUSAN',
      body: 'Mengumpulkan, memproses, dan mentransformasi data mentah menjadi wawasan yang bermakna.',
    },
  },
} as const;

export const FEATURED_PROJECTS_ID: ProjectSummary[] = [
  {
    slug: 'automotive-sales-analysis',
    index: '01',
    title: 'Automotive Sales Analysis',
    contextLabel: 'KarirNex Data Analyst Bootcamp',
    categoryMeta: 'ANALITIK DATA / BUSINESS INTELLIGENCE',
    toolsMeta: 'Microsoft Excel · Google BigQuery · Python · Power BI',
    shortDescription:
      'Proyek bootcamp analitik data otomotif multi-tahap yang mencakup analisis Trade-In terpisah di Excel, kueri SQL di BigQuery, analisis eksploratif dengan Python, serta dashboard penjualan interaktif di Power BI.',
    status: 'published',
    route: '/projects/automotive-sales-analysis',
    previewImage:
      '/assets/projects/automotive-sales-analysis/01_powerbi_dashboard.png',
    previewAlt:
      'Dashboard Penjualan Otomotif Power BI Task 4 yang menampilkan total penjualan Rp26,02 Miliar dari 98 transaksi',
    layoutSpan: 'wide',
  },
  {
    slug: 'us-law-firms-data-collection',
    index: '02',
    title: 'US Law Firms Data Collection',
    shortTitle: 'US Immigration Law Firms Data Collection & Scraping',
    contextLabel: 'Proyek Freelance',
    categoryMeta: 'PENGUMPULAN DATA / WEB SCRAPING',
    toolsMeta: 'Python · Requests · BeautifulSoup · Pandas · MapsScraper · Excel',
    shortDescription:
      'Mengumpulkan dan menyusun informasi bisnis dari Sulekha (~500 data) dan Google Maps (438 data), memadukan scraping Python semi-otomatis serta verifikasi manual untuk menyerahkan dataset akhir berisi 500 data.',
    status: 'published',
    route: '/projects/us-law-firms-data-collection',
    previewImage:
      '/assets/projects/us-law-firms-data-collection/sample1.png',
    previewAlt:
      'Pratinjau sampel 10 data yang telah disanitasi dari proyek pengumpulan data firma hukum imigrasi AS',
    layoutSpan: 'narrow',
  },
  {
    slug: 'ecommerce-database-management',
    index: '03',
    title: 'E-Commerce Database Management',
    contextLabel: 'Proyek Kelompok Akademik · AMIKOM (2024)',
    categoryMeta: 'SQL / PERANCANGAN BASIS DATA RELASIONAL',
    toolsMeta: 'MariaDB / MySQL · phpMyAdmin · SQL Functions · Stored Procedures · Triggers · Composite Indexing · Views · RBAC',
    shortDescription:
      'Proyek kelompok akademik 5 anggota S1 Informatika yang mengimplementasikan skema e-commerce relasional 6 tabel (Customers, Products, Orders, OrderDetails, Payments, Log_Changes) beserta fungsi SQL, prosedur kontrol alur IF, 6 trigger audit BEFORE/AFTER, indeks komposit BTREE, nested views WITH CHECK OPTION, dan hak akses pengguna/peran.',
    status: 'published',
    route: '/projects/ecommerce-database-management',
    previewImage:
      '/assets/projects/ecommerce-database-management/01_erd_schema.png',
    previewAlt:
      'Diagram Entitas Relasi (ERD) phpMyAdmin Designer untuk basis data ecommerce yang menampilkan tabel Customers, Products, Orders, OrderDetails, Payments, Log_Changes, dan Views',
    layoutSpan: 'wide',
  },
  {
    slug: 'ai-data-analyst-agent',
    index: '04',
    title: 'AI Data Analyst Agent',
    contextLabel: 'IBM / Hacktiv8',
    categoryMeta: 'INTEGRASI AI / OTOMASI ALUR KERJA',
    toolsMeta: 'Langflow · LLM Processing · Prompt Engineering · CSV',
    shortDescription:
      'Alur kerja sekuensial berbasis LLM yang dibangun di Langflow untuk mengolah ulasan pelanggan dari input CSV melalui pemrosesan prompt dan LLM menjadi wawasan sentimen serta rekomendasi tindakan per departemen.',
    status: 'published',
    route: '/projects/ai-data-analyst-agent',
    previewImage:
      '/assets/aistudio/Dark-Themed_AI_Workflow_Nodes_461f9344.png',
    previewAlt:
      'Tangkapan layar alur kerja sekuensial 6-node Langflow bertema gelap yang menampilkan Data File, Prompt Template, Language Model, Prompt Template kedua, Language Model kedua, dan Chat Output',
    layoutSpan: 'wide',
  },
  {
    slug: 'semantic-retrieval-running-shoes',
    index: '05',
    title: 'Running Shoes Semantic Retrieval',
    contextLabel: 'Skripsi Sarjana · AMIKOM (2026)',
    categoryMeta: 'TEMU KEMBALI INFORMASI / PENELITIAN AKADEMIK',
    toolsMeta: 'Python · scikit-learn (TF-IDF) · sentence-transformers (all-MiniLM-L6-v2) · Cosine Similarity · nDCG@5 · Streamlit',
    shortDescription:
      'Skripsi S1 Informatika yang membandingkan pencarian leksikal TF-IDF (Mean nDCG@5: 0,6492) dengan Sentence Embedding all-MiniLM-L6-v2 (Mean nDCG@5: 0,6825) pada 475 dokumen bersih RunRepeat, 30 kueri benchmark, dan 293 pasangan kueri–dokumen hasil pooling.',
    status: 'published',
    route: '/projects/semantic-retrieval-running-shoes',
    previewImage:
      '/assets/projects/semantic-retrieval-running-shoes/01_ndcg_charts_and_table.png',
    previewAlt:
      'Grafik perbandingan rata-rata nDCG@5 dan tabel evaluasi statistik antara TF-IDF (0,6492) dan Sentence Embedding all-MiniLM-L6-v2 (0,6825)',
    layoutSpan: 'narrow',
  },
];

export const EXPERIENCE_AND_EDUCATION_ID = [
  {
    id: 'freelance-scraping',
    category: 'Pengalaman Profesional',
    role: 'Freelance Pengumpulan Data & Web Scraping',
    organization: 'Praktik Freelance Independen',
    description:
      'Mengumpulkan, membersihkan, dan mengintegrasikan data direktori bisnis terstruktur dari sumber web publik menggunakan Python (Requests, BeautifulSoup, Pandas), MapsScraper, dan Microsoft Excel, dengan menggabungkan pengumpulan semi-otomatis dan verifikasi manual sesuai spesifikasi klien.',
    highlights: [
      'Pengumpulan dan normalisasi direktori bisnis lintas sumber',
      'Penanganan human-in-the-loop untuk kendala CAPTCHA berbasis lokasi',
      'Penyusunan dataset Excel terstruktur dengan tetap menjaga kerahasiaan data klien',
    ],
  },
  {
    id: 'office-instructor',
    category: 'Pengajaran & Instruksi',
    role: 'Instruktur Administrasi Perkantoran',
    organization: 'Praktik Pengajaran',
    description:
      'Memberikan pelatihan praktis mengenai alur kerja Microsoft Office dengan penekanan utama pada penggunaan Microsoft Excel untuk pengorganisasian data terstruktur, analisis tabel, dan pelaporan.',
    highlights: [
      'Formula Microsoft Excel, Pivot Table, dan perancangan spreadsheet terstruktur',
      'Alur kerja praktis administrasi perkantoran dan persiapan data',
    ],
  },
  {
    id: 'amikom-education',
    category: 'Latar Belakang Akademik',
    role: 'Informatika',
    organization: 'Universitas AMIKOM Yogyakarta',
    description:
      'Fondasi akademik di bidang Informatika yang mencakup pemrosesan data, penelitian temu kembali informasi (membandingkan TF-IDF dan sentence embeddings), serta dasar-dasar rekayasa perangkat lunak dan analitik.',
    highlights: [
      'Penelitian akademik mengenai pencarian produk berbasis bahasa alami',
      'Struktur data, kueri SQL, dan analisis data secara terprogram',
    ],
  },
  {
    id: 'training-bootcamps',
    category: 'Pelatihan Intensif & Kursus',
    role: 'Program Analitik Data & Alur Kerja AI',
    organization: 'KarirNex Data Analyst Bootcamp · IBM / Hacktiv8',
    description:
      'Menyelesaikan latihan analitik praktis menggunakan Excel, Google BigQuery, Python (Google Colab), dan Power BI, serta perancangan alur kerja LLM di Langflow menggunakan model Gemini.',
    highlights: [
      'KarirNex Data Analyst Bootcamp — Automotive Sales Analysis (2–9 Juli 2026)',
      'IBM / Hacktiv8 — Alur kerja sekuensial Langflow AI Data Analyst Agent',
    ],
  },
] as const;

export const CAPABILITY_PILLARS_ID = [
  {
    index: '01',
    title: 'Pengumpulan Data & Web Scraping',
    summary:
      'Mengumpulkan informasi terstruktur dari sumber web publik dan menyiapkan dataset yang andal untuk penggunaan tahap lanjut.',
    capabilities: [
      'Mengumpulkan daftar bisnis dan produk terstruktur.',
      'Web scraping berbasis Python.',
      'Pengumpulan data lintas sumber (multi-source).',
      'Ekstraksi dan verifikasi data terstruktur.',
    ],
    technologies: ['Python', 'Requests', 'BeautifulSoup', 'Scrapy', 'Selenium', 'Pandas'],
    evidencedIn: 'US Law Firms Data Collection (Freelance)',
  },
  {
    index: '02',
    title: 'Pemrosesan & Transformasi Data',
    summary:
      'Mentransformasi data mentah dan terfragmentasi menjadi dataset yang bersih, konsisten, dan terstruktur siap untuk dianalisis.',
    capabilities: [
      'Pembersihan dan prapemrosesan data (data cleaning & preprocessing).',
      'Normalisasi dan transformasi data.',
      'Integrasi dan penggabungan data (data merging).',
      'Validasi dan pemeriksaan kualitas data.',
      'Menangani nilai kosong (missing values) dan format yang tidak konsisten.',
    ],
    technologies: ['Python', 'Pandas', 'Microsoft Excel'],
    evidencedIn: 'US Law Firms Dataset & Prapemrosesan Penjualan Otomotif',
  },
  {
    index: '03',
    title: 'Analisis Data & Pelaporan',
    summary:
      'Memeriksa, melakukan kueri, dan memvisualisasikan dataset untuk mengomunikasikan temuan bermakna serta mendukung pengambilan keputusan.',
    capabilities: [
      'Exploratory Data Analysis (EDA).',
      'Kueri dan agregasi SQL.',
      'Analisis statistik.',
      'Visualisasi data.',
      'Pengembangan dashboard dan pelaporan analitik.',
    ],
    technologies: ['Microsoft Excel', 'SQL', 'Google BigQuery', 'Python', 'Power BI'],
    evidencedIn: 'Automotive Sales Analysis (KarirNex Bootcamp)',
  },
  {
    index: '04',
    title: 'Integrasi AI & Otomasi Alur Kerja',
    summary:
      'Menghubungkan model bahasa (LLM) dan alur kerja terstruktur untuk membangun solusi analitik praktis berbasis AI.',
    capabilities: [
      'Alur kerja prompt dan LLM sekuensial.',
      'Prompt engineering multi-tahap.',
      'Integrasi model Gemini.',
      'Pembuatan output terstruktur.',
      'Debugging dan penyempurnaan alur kerja.',
    ],
    technologies: ['Google Gemini', 'Langflow', 'n8n'],
    evidencedIn: 'AI Data Analyst Agent (IBM / Hacktiv8)',
  },
] as const;

export const AUTOMOTIVE_CASE_STUDY_ID = {
  slug: 'automotive-sales-analysis',
  title: 'Automotive Sales Analysis',
  contextLabel: 'Proyek Bootcamp · KarirNex Data Analyst Bootcamp',
  period: '2–9 Juli 2026',
  domain: 'Penjualan Otomotif · Analitik Data Deskriptif',
  primaryOutput: 'Dashboard Penjualan Power BI (Task 4)',
  tools: ['Microsoft Excel', 'Google BigQuery', 'Python (Google Colab)', 'Microsoft Power BI'],
  shortSummary:
    'Proyek bootcamp analitik data otomotif multi-tahap yang mencakup latihan terpisah di Excel, SQL, Python, dan Power BI untuk memeriksa pola Trade-In, mempraktikkan kueri dan analisis eksploratif, serta menyajikan hasil penjualan Task 4 melalui dashboard interaktif.',
  scopeClarification:
    'Klarifikasi Ruang Lingkup Penting: Task 1 (Excel), Task 2 (BigQuery SQL), Task 3 (Python Colab), dan Task 4 (Power BI) merupakan latihan bootcamp terpisah dengan ruang lingkup dan hasil laporan masing-masing. Materi yang tersedia tidak menyatakan bahwa keempat tugas tersebut menggunakan populasi dataset yang identik atau membentuk satu pipeline terpadu dari awal hingga akhir. Angka-angka dari tugas yang berbeda tidak boleh digabungkan atau dianggap dapat dibandingkan secara langsung.',
  heroEvidence: {
    id: 'auto-powerbi-hero',
    title: 'Task 4 — Dashboard Penjualan Otomotif (Power BI)',
    src: '/assets/projects/automotive-sales-analysis/01_powerbi_dashboard.png',
    alt: 'Dashboard Penjualan Otomotif Power BI menampilkan Total Penjualan Rp26,02 Miliar, 98 Total Transaksi, 119 Total Kuantitas, dan 89,8% Tingkat Penyelesaian',
    taskOrSourceLabel: 'Output Utama Task 4 · Microsoft Power BI',
    observedFacts:
      'Menampilkan empat kartu KPI utama (Total Sales: Rp26.02 B, Total Transaction: 98, Total Quantity: 119, Completion Rate: 89.8%), Tren Penjualan Bulanan yang mencapai puncak pada bulan September, Penjualan per Kategori yang dipimpin oleh MPV (Rp9.2 B) dan SUV (Rp7.8 B), Penjualan per Cabang yang dipimpin oleh Jakarta (Rp6.5 B), 5 Produk Teratas yang dipimpin oleh Toyota Avanza 1.5 G CVT (Rp2.9 B), Penjualan berdasarkan Metode Pembayaran yang dipimpin oleh Kredit (40.8%), serta Status Transaksi (88 Completed, 7 Cancelled, 3 Refund).',
    analyticalInterpretation:
      'Dalam ruang lingkup dashboard Task 4 yang dilaporkan, MPV merupakan kategori kendaraan terunggul (melampaui SUV sekitar Rp1,4 Miliar), Jakarta adalah cabang dengan penjualan tertinggi, dan Kredit adalah metode pembayaran yang paling sering dipilih.',
    scopeNote:
      'Seluruh KPI dan grafik pada tampilan ini berlaku khusus untuk latihan Power BI Task 4 (98 transaksi) dan dipisahkan dari latihan Task 1, Task 2, dan Task 3.',
  } satisfies EvidenceItem,
  task4Kpis: [
    {
      label: 'Total Penjualan',
      value: 'Rp26.02 Billion',
      note: 'Total yang dilaporkan pada Power BI Task 4',
    },
    {
      label: 'Total Transaksi',
      value: '98',
      note: '88 Selesai · 7 Dibatalkan · 3 Refund',
    },
    {
      label: 'Total Kuantitas',
      value: '119 Units',
      note: 'Jumlah unit kendaraan tercatat pada ruang lingkup Task 4',
    },
    {
      label: 'Tingkat Penyelesaian',
      value: '89.8%',
      note: '88 dari 98 transaksi selesai',
    },
  ],
  flashCards: [
    {
      id: 'auto-card-category',
      category: 'Temuan Dashboard Task 4 · Kinerja Kategori',
      title: 'MPV Memimpin Penjualan Kategori Sebesar Rp9,2 Miliar',
      primaryValue: 'Rp9.2 B vs Rp7.8 B',
      description:
        'Pada dashboard Power BI Task 4, MPV merupakan kategori kendaraan dengan penjualan tertinggi, melampaui SUV sekitar Rp1,4 Miliar.',
      details: [
        'Penjualan MPV: Rp9,2 Miliar (Peringkat 1 pada dashboard Task 4)',
        'Penjualan SUV: Rp7,8 Miliar (Peringkat 2 pada dashboard Task 4)',
        'Selisih: MPV melampaui SUV sekitar Rp1,4 Miliar',
      ],
      attribution: 'Sumber: Dashboard Power BI Task 4 (ruang lingkup 98 transaksi)',
    },
    {
      id: 'auto-card-branch',
      category: 'Temuan Dashboard Task 4 · Kinerja Cabang',
      title: 'Jakarta Merupakan Cabang dengan Kinerja Tertinggi',
      primaryValue: 'Rp6.5 Billion',
      description:
        'Jakarta mencatatkan penjualan tertinggi di antara cabang-cabang pada hasil dashboard Power BI Task 4, mengungguli Palembang dan Karawang.',
      details: [
        'Cabang Teratas: Jakarta — Rp6,5 Miliar',
        'Slicer interaktif memungkinkan penyaringan dashboard khusus untuk cabang Jakarta guna memeriksa metrik tingkat cabang yang dihitung ulang',
      ],
      attribution: 'Sumber: Dashboard Power BI Task 4 (ruang lingkup 98 transaksi)',
    },
    {
      id: 'auto-card-products',
      category: 'Temuan Dashboard Task 4 · 5 Produk Teratas',
      title: '5 Model Kendaraan Teratas Berdasarkan Nilai Penjualan',
      primaryValue: 'Rp2.9 B Top Model',
      description:
        'Lima model kendaraan menempati peringkat produk teratas pada dashboard Task 4, dipimpin oleh Toyota Avanza 1.5 G CVT.',
      details: [
        '1. Toyota Avanza 1.5 G CVT — Rp2,9 Miliar',
        '2. Honda BR-V 1.5 E CVT — Rp2,8 Miliar',
        '3. Mitsubishi Xpander Ultimate — Rp2,6 Miliar',
        '4. Daihatsu Xenia 1.5 R CVT — Rp2,4 Miliar',
        '5. Toyota Rush 1.5 G — Rp2,1 Miliar',
      ],
      attribution: 'Sumber: Dashboard Power BI Task 4 (ruang lingkup 98 transaksi)',
    },
    {
      id: 'auto-card-payment-status',
      category: 'Temuan Dashboard Task 4 · Pembayaran & Status',
      title: 'Kredit Mencakup 40,8% dari Distribusi Metode Pembayaran',
      primaryValue: '40.8% Kredit',
      description:
        'Kredit dan Cash + Trade In secara gabungan mencakup hampir tiga perempat dari seluruh transaksi pada dashboard Task 4.',
      details: [
        'Porsi Pembayaran: Kredit (40,8%) · Cash + Trade In (32,7%) · Cash (19,4%) · Kredit + Trade In (7,1%)',
        'Status Transaksi: Completed 88 (89,8%) · Cancelled 7 (7,1%) · Refund 3 (3,1%) · Total 98 (100%)',
        'Tren Bulanan: Penjualan meningkat Jan–Mar, turun pada Apr, pulih Mei–Jul, melonjak Agu–Sep (puncak September), turun Okt–Nov, dan naik kembali pada Des',
      ],
      attribution: 'Sumber: Dashboard Power BI Task 4 (ruang lingkup 98 transaksi)',
    },
  ] satisfies FlashCardItem[],
  tasks: [
    {
      id: 'task-1-excel',
      stepNumber: 'Task 01',
      title: 'Analisis Trade-In & Produk di Excel',
      subtitle: 'Eksplorasi Pivot Table Spreadsheet',
      toolOrPlatform: 'Microsoft Excel',
      summary:
        'Latihan praktis yang memeriksa pola transaksi Trade-In vs. Non Trade-In di berbagai cabang, aktivitas Trade-In pelanggan berulang, serta kombinasi model dan warna kendaraan.',
      activities: [
        'Membuat Pivot Table yang membandingkan jumlah dan persentase pesanan Non Trade-In dan Total Trade-In di 10 cabang',
        'Mengidentifikasi frekuensi Trade-In pelanggan individu di dalam dataset Task 1',
        'Memeriksa volume penjualan model kendaraan dan distribusi warna',
      ],
      verifiedFindings: [
        'Customer_3881 mencatatkan jumlah transaksi Trade-In tertinggi pada latihan ini (2 transaksi).',
        'Wuling Air ev Long Range merupakan model dengan penjualan tertinggi pada data Task 1 yang diperiksa (56 unit terjual), dengan warna Putih sebagai warna terbanyak untuk model tersebut (19 unit).',
        'Tangkapan layar Pivot Table Excel menampilkan transaksi berstatus selesai (completed) di 10 cabang yang membandingkan jumlah Non Trade-In vs. Total Trade-In.',
      ],
      scopeBoundary:
        'Temuan Task 1 berlaku khusus untuk populasi latihan Excel. Sesuai aturan integritas data, perbedaan angka persentase Trade-In cabang antara catatan tertulis dan tangkapan layar tidak disertakan hingga terverifikasi, serta angka Task 1 tidak pernah digabungkan dengan KPI Power BI Task 4.',
      evidence: {
        id: 'auto-excel-task1',
        title: 'Task 1 — Pivot Table Trade-In Cabang (Microsoft Excel)',
        src: '/assets/projects/automotive-sales-analysis/03_excel_branch_tradein.png',
        alt: 'Pivot Table Microsoft Excel menampilkan jumlah dan persentase Non Trade-In serta Total Trade-In di berbagai cabang untuk status selesai',
        taskOrSourceLabel: 'Bukti Teknis Task 1 · Microsoft Excel',
        observedFacts:
          'Menampilkan Pivot Table Excel yang difilter pada status = completed di 10 cabang (Jakarta, Karawang, Kendari, Pontianak, Bandung, Padang, Semarang, Batam, Malang, Palembang) dengan Grand Total 5.801 Non Trade-In (64,70%) dan 3.165 Total Trade-In (35,30%) dari 8.966 pesanan.',
        analyticalInterpretation:
          'Menunjukkan penyusunan Pivot Table dan perhitungan persentase baris di Excel untuk membandingkan tingkat adopsi Trade-In antar lokasi cabang.',
        scopeNote:
          'Populasi latihan Task 1 terpisah (8.966 pesanan selesai); jangan digabungkan dengan dashboard Power BI Task 4 yang berjumlah 98 transaksi.',
      },
    },
    {
      id: 'task-2-bigquery',
      stepNumber: 'Task 02',
      title: 'Kueri & Agregasi SQL',
      subtitle: 'Eksplorasi Data Relasional di BigQuery',
      toolOrPlatform: 'Google BigQuery (SQL)',
      summary:
        'Latihan SQL terjadwal untuk mempraktikkan kueri terstruktur, penyaringan data, pengelompokan, dan agregasi penjualan tingkat cabang pada tabel transaksi otomotif.',
      activities: [
        'Menulis kueri SQL di Google BigQuery untuk mengagregasi total penjualan per cabang',
        'Menerapkan klausa pengurutan dan penyaringan untuk memeriksa peringkat cabang',
        'Mempraktikkan pemeriksaan data relasional terstruktur sesuai instruksi latihan',
      ],
      verifiedFindings: [
        'Menunjukkan agregasi tingkat cabang (`branch`, `total_penjualan`) yang diurutkan secara menurun pada 10 cabang di Google BigQuery.',
        'Berfungsi sebagai bukti proses teknis atas kemampuan kueri dan agregasi SQL.',
      ],
      scopeBoundary:
        'Tangkapan layar BigQuery merupakan artefak proses teknis khusus untuk Task 2. Nilai agregasinya mencerminkan ruang lingkup dataset terpisah dan tidak boleh digunakan sebagai KPI dashboard Task 4.',
      evidence: {
        id: 'auto-bigquery-task2',
        title: 'Task 2 — Hasil Kueri Agregasi Penjualan Cabang (Google BigQuery)',
        src: '/assets/projects/automotive-sales-analysis/09_bigquery_branch_sales.png',
        alt: 'Tabel hasil kueri Google BigQuery menampilkan 10 cabang yang diurutkan berdasarkan total_penjualan',
        taskOrSourceLabel: 'Bukti Teknis Task 2 · Google BigQuery SQL',
        observedFacts:
          'Menampilkan tabel hasil kueri 10 baris dengan kolom Row, branch, dan total_penjualan yang memuat Malang, Jakarta, Padang, Palembang, Bandung, Batam, Kendari, Semarang, Pontianak, dan Karawang.',
        analyticalInterpretation:
          'Mengilustrasikan eksekusi agregasi SQL GROUP BY dan ORDER BY di Google BigQuery sebagai bagian dari tugas bootcamp Task 2.',
        scopeNote:
          'Artefak latihan Task 2 saja; populasi dan ruang lingkup filter berbeda dari Task 4.',
      },
    },
    {
      id: 'task-3-python',
      stepNumber: 'Task 03',
      title: 'Exploratory Data Analysis (EDA)',
      subtitle: 'Pemeriksaan Terprogram & Visualisasi',
      toolOrPlatform: 'Python · Google Colab · Matplotlib',
      summary:
        'Analisis data eksploratif di Google Colab yang memeriksa struktur data, kombinasi pendapatan cabang-kategori, rata-rata harga per unit, serta visualisasi grafik batang horizontal.',
      activities: [
        'Memeriksa struktur dataset dan karakteristik ringkasan di Google Colab',
        'Mengelompokkan transaksi berdasarkan cabang dan kategori kendaraan untuk menentukan peringkat kombinasi pendapatan tertinggi',
        'Menghitung rata-rata harga per unit (`avg_price`) beserta total pendapatan untuk pasangan cabang-kategori teratas',
        'Membuat visualisasi grafik batang horizontal Matplotlib untuk 5 kombinasi cabang-kategori teratas',
      ],
      verifiedFindings: [
        'Memvisualisasikan 5 kombinasi pendapatan cabang-kategori teratas (`Palembang - SUV`, `Jakarta - SUV`, `Malang - SUV`, `Batam - SUV`, `Karawang - SUV`) dalam ruang lingkup dataset Task 3 yang terpisah.',
        'Menunjukkan kemampuan pengelompokan terprogram dan pembuatan grafik Matplotlib menggunakan Python.',
      ],
      scopeBoundary:
        'Task 3 menggunakan dataset latihan terpisah berjumlah 10.000 baris (melaporkan total penjualan Rp3,10 Triliun pada laporan Task 3). Angka-angka ini khusus milik Task 3 dan tidak pernah dicampurkan dengan KPI dashboard Power BI Task 4.',
      evidence: {
        id: 'auto-python-task3',
        title: 'Task 3 — Grafik Pendapatan 5 Kombinasi Cabang & Kategori Teratas (Python / Google Colab)',
        src: '/assets/projects/automotive-sales-analysis/10_python_branch_category_chart.png',
        alt: 'Output Python Google Colab menampilkan 5 kombinasi cabang dan kategori SUV teratas beserta grafik batang horizontal dalam Miliar Rupiah',
        taskOrSourceLabel: 'Bukti Teknis Task 3 · Python / Google Colab',
        observedFacts:
          'Menampilkan cetakan DataFrame dan grafik batang horizontal berjudul "Top 5 Kombinasi Cabang & Kategori Mobil Berdasarkan Total Pendapatan" beserta perhitungan rata-rata harga per unit.',
        analyticalInterpretation:
          'Menunjukkan agregasi multi-kolom dan pelaporan visual eksploratif di Python menggunakan Pandas dan Matplotlib.',
        scopeNote:
          'Ruang lingkup latihan Task 3 terpisah; jangan disamakan dengan temuan MPV/Jakarta pada Power BI Task 4.',
      },
    },
    {
      id: 'task-4-powerbi',
      stepNumber: 'Task 04',
      title: 'Dashboard Penjualan Interaktif',
      subtitle: 'Pelaporan KPI & Analisis Slicer',
      toolOrPlatform: 'Microsoft Power BI',
      summary:
        'Pengembangan dashboard Power BI interaktif yang menyajikan KPI utama, tren penjualan bulanan, perbandingan kategori dan cabang, produk teratas, distribusi metode pembayaran, serta status transaksi.',
      activities: [
        'Merancang kartu KPI utama untuk Total Penjualan, Total Transaksi, Total Kuantitas, dan Tingkat Penyelesaian',
        'Membangun visualisasi komparatif untuk Penjualan per Kategori, Penjualan per Cabang, dan 5 Produk Teratas berdasarkan Penjualan',
        'Mengonfigurasi grafik donat untuk distribusi Metode Pembayaran dan rincian Status Transaksi',
        'Menambahkan slicer interaktif (Periode, Cabang, Kategori, Metode Pembayaran, Status) untuk penyaringan dinamis seperti memeriksa cabang Jakarta',
      ],
      verifiedFindings: [
        'Kinerja Keseluruhan: Total Penjualan Rp26,02 Miliar, 98 Total Transaksi, 119 Total Kuantitas, dan 89,8% Tingkat Penyelesaian.',
        'Pemimpin Kategori & Cabang: MPV memimpin kategori sebesar Rp9,2 Miliar (melampaui SUV sebesar Rp7,8 Miliar dengan selisih ~Rp1,4 Miliar); Jakarta memimpin cabang sebesar Rp6,5 Miliar.',
        'Pembayaran & Bulan Puncak: Kredit memimpin metode pembayaran sebesar 40,8% (diikuti Cash + Trade In sebesar 32,7%); September mencatatkan penjualan bulanan tertinggi.',
      ],
      scopeBoundary:
        'Seluruh pengamatan dashboard merupakan temuan deskriptif di dalam dataset Task 4 berjumlah 98 transaksi. Temuan ini tidak menetapkan faktor penyebab kausal, profitabilitas, margin kotor, ataupun proyeksi penjualan di masa depan.',
      evidence: {
        id: 'auto-powerbi-task4',
        title: 'Task 4 — Tampilan Penuh Dashboard Penjualan Otomotif (Microsoft Power BI)',
        src: '/assets/projects/automotive-sales-analysis/01_powerbi_dashboard.png',
        alt: 'Dashboard Penjualan Otomotif Microsoft Power BI menampilkan KPI, tren bulanan, grafik batang kategori/cabang, donat pembayaran, dan tabel transaksi',
        taskOrSourceLabel: 'Output Utama Task 4 · Microsoft Power BI',
        observedFacts:
          'Tampilan penuh dashboard dengan filter periode data 2025, 4 kartu KPI, grafik garis Tren Penjualan Bulanan, grafik batang Penjualan per Kategori dan Cabang, grafik batang 5 Produk Teratas, grafik donat Metode Pembayaran dan Status Transaksi, serta tabel Detail Penjualan di bagian bawah.',
        analyticalInterpretation:
          'Mengonsolidasikan metrik Task 4 ke dalam satu tampilan interaktif dengan kontrol slicer untuk eksplorasi kategori, cabang, metode pembayaran, dan status transaksi.',
      },
    },
  ] satisfies ProcessNode[],
  takeaways: [
    'Menerapkan pola pikir analitik terstruktur pada empat latihan berbeda menggunakan Microsoft Excel, Google BigQuery, Python, dan Power BI.',
    'Mempraktikkan pemisahan ruang lingkup dataset dan batas latihan secara ketat ketika tugas-tugas yang berbeda menggunakan populasi data yang tidak direkonsiliasi.',
    'Menerjemahkan metrik penjualan deskriptif ke dalam laporan Power BI interaktif dengan slicer kategori, cabang, pembayaran, dan status.',
  ],
};

export const US_LAW_FIRMS_CASE_STUDY_ID = {
  slug: 'us-law-firms-data-collection',
  title: 'US Immigration Law Firms Data Collection & Scraping',
  contextLabel: 'Proyek Freelance · Pengumpulan Data & Web Scraping',
  role: 'Freelance Pengumpulan Data / Web Scraping',
  finalDeliverableTarget: '500 Data Terstruktur (Microsoft Excel)',
  sources: ['Direktori Sulekha (~500 data sumber)', 'Google Maps (438 data tambahan)'],
  tools: ['Python', 'Requests', 'BeautifulSoup', 'Pandas', 'MapsScraper', 'Microsoft Excel'],
  shortSummary:
    'Mengumpulkan dan menyusun informasi bisnis dari Sulekha dan Google Maps dengan memadukan scraping Python semi-otomatis, integrasi data lintas sumber, serta verifikasi manual pada kolom yang belum terkonfirmasi guna menyiapkan dataset berisi 500 data sesuai permintaan klien.',
  privacyNotice:
    'Catatan Kerahasiaan Klien & Volume Sumber: Dataset lengkap klien yang berisi 500 data bersifat pribadi dan rahasia. Hanya tangkapan layar sampel 10 data yang telah disanitasi (`sample1`, `sample2`) dan tampilan pengumpulan sumber (`sulekha`, `maps`) yang ditampilkan secara publik. Selain itu, ~500 data Sulekha dan 438 data Google Maps merupakan volume pengumpulan sumber untuk integrasi—bukan 938 firma unik yang dijumlahkan secara langsung.',
  heroEvidence: {
    id: 'law-sample1-hero',
    title: 'Sampel Dataset Akhir yang Disanitasi — Kolom Awal (sample1)',
    src: '/assets/projects/us-law-firms-data-collection/sample1.png',
    alt: 'Tampilan spreadsheet sampel yang disanitasi (sample1) menampilkan kolom awal: Firm Name, Street Address, City, State, ZIP Code, Phone yang disensor, dan Website',
    taskOrSourceLabel: 'Tampilan Sampel Hasil Akhir 1 dari 2 · `sample1.png`',
    observedFacts:
      'Menampilkan 10 sampel data firma hukum pada kolom-kolom skema awal (Firm Name, Street Address, City, State, ZIP Code, Phone yang disensor, Website) dari buku kerja sampel yang telah disanitasi.',
    analyticalInterpretation:
      'Menunjukkan standarisasi format alamat dan kontak yang disiapkan untuk hasil akhir Excel bagi klien sekaligus melindungi nomor telepon yang disensor.',
    scopeNote:
      'Hanya sampel ilustratif berisi 10 data; hasil akhir lengkap berisi 500 data untuk klien tetap bersifat pribadi.',
  } satisfies EvidenceItem,
  metricsComparison: [
    {
      label: 'Volume Sumber Sulekha',
      value: '~500 Records',
      note: 'Pengumpulan direktori utama melalui alur kerja Python semi-otomatis',
    },
    {
      label: 'Volume Sumber Google Maps',
      value: '438 Records',
      note: 'Pengumpulan tambahan melalui MapsScraper untuk integrasi',
    },
    {
      label: 'Hasil Akhir Klien',
      value: '500 Records',
      note: 'Target dataset Excel terstruktur (bukan 938 data penjumlahan)',
    },
    {
      label: 'Lebar Skema Sampel',
      value: '15 Columns',
      note: 'Ditampilkan pada sampel portofolio 10 data yang telah disanitasi',
    },
  ],
  schemaColumns: [
    '1. Firm Name',
    '2. Street Address',
    '3. City',
    '4. State',
    '5. ZIP Code',
    '6. Phone (Disanitasi pada sampel publik)',
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
      category: 'Tujuan Proyek & Ruang Lingkup Hasil Akhir',
      title: 'Dataset Direktori Terstruktur Berisi 500 Data',
      primaryValue: '500 Final Records',
      description:
        'Klien membutuhkan spreadsheet terstruktur berisi 500 firma hukum imigrasi AS yang melayani komunitas India, yang dihimpun dari direktori daring.',
      details: [
        'Target Klien: 500 data firma hukum terstruktur yang diserahkan dalam format Microsoft Excel',
        'Bukti Portofolio: Buku kerja sampel 10 data yang disanitasi (`Sample_10_Firms` / `Batch 1` yang menampilkan 10 data sampel across 15 kolom)',
        'Dataset lengkap milik klien dikecualikan secara ketat dari tampilan publik',
      ],
      attribution: 'Sumber: Project PRD v1.1 & Data Integrity Notes v1.1',
    },
    {
      id: 'law-card-volumes',
      category: 'Perbedaan Volume Sumber vs. Target Akhir',
      title: 'Volume Pengumpulan Sumber vs. Target Akhir',
      primaryValue: '~500 + 438 → 500',
      description:
        'Data yang dikumpulkan dari Sulekha dan Google Maps berfungsi sebagai input lintas sumber yang saling melengkapi untuk perbandingan dan pengayaan data, bukan total unik yang dijumlahkan.',
      details: [
        'Pengumpulan Sulekha: Sekitar 500 data dikumpulkan berdasarkan lokasi',
        'Pengumpulan Google Maps: 438 data tambahan dikumpulkan menggunakan MapsScraper',
        'Output Akhir: Diintegrasikan dan ditinjau secara manual untuk memenuhi target 500 data permintaan klien (tidak pernah dilaporkan sebagai 938 firma unik)',
      ],
      attribution: 'Sumber: Data Integrity Notes v1.1',
    },
    {
      id: 'law-card-captcha',
      category: 'Tantangan & Keputusan Teknis',
      title: 'Alur Kerja Semi-Otomatis Menghadapi Kendala CAPTCHA',
      primaryValue: 'Human-in-the-Loop',
      description:
        'Sulekha memunculkan tantangan CAPTCHA saat berpindah ke lokasi geografis baru, sehingga memerlukan adaptasi alur kerja yang pragmatis.',
      details: [
        'Menggunakan Python dengan Requests, BeautifulSoup, dan Pandas untuk penguraian halaman secara terstruktur',
        'Menyertakan interaksi manusia ketika perpindahan lokasi memicu tantangan CAPTCHA',
        'Tidak menggunakan pembobol CAPTCHA otomatis ataupun mengklaim eksekusi tanpa pengawasan penuh',
      ],
      attribution: 'Sumber: Case Study Content v1.3 & PRD v1.1',
    },
  ] satisfies FlashCardItem[],
  workflowStages: [
    {
      id: 'law-stage-1-sulekha',
      stepNumber: 'Stage 01',
      title: 'Pengumpulan Semi-Otomatis dari Sulekha',
      subtitle: 'Penguraian Direktori Python Berbasis Lokasi',
      toolOrPlatform: 'Python · Requests · BeautifulSoup · Pandas',
      summary:
        'Mengumpulkan sekitar 500 daftar bisnis dari Sulekha yang diorganisasikan berdasarkan lokasi geografis, menggunakan alur kerja semi-otomatis di mana interaksi manusia menangani prompt CAPTCHA saat pergantian lokasi.',
      activities: [
        'Mengekstrak nama firma, situs web, alamat, bidang praktik, subkategori, URL firma, dan kolom lokasi dari daftar direktori Sulekha',
        'Mengorganisasikan proses pengumpulan berdasarkan kota/negara bagian',
        'Menangani tantangan CAPTCHA melalui interaksi manual saat berpindah lokasi alih-alih mencoba bypass otomatis',
      ],
      verifiedFindings: [
        'Sekitar 500 data sumber berhasil dikumpulkan dari Sulekha.',
        'Merekam bidang praktik, subkategori, URL firma, dan status scraping sebagaimana terlihat pada `sulekha.png`.',
      ],
      scopeBoundary:
        'Tahap pengumpulan sumber saja (~500 data); semi-otomatis dengan interaksi manusia saat CAPTCHA muncul.',
      evidence: {
        id: 'law-evidence-sulekha',
        title: 'Output Scraping Direktori Sulekha (`sulekha`)',
        src: '/assets/projects/us-law-firms-data-collection/sulekha.png',
        alt: 'Tampilan spreadsheet hasil scraping Sulekha menampilkan Firm Name, Website, Address, Scrape Status, Practice Areas, Subcategories, Source, Last Verified, Firm URL, City, State, dan Region',
        taskOrSourceLabel: 'Bukti Pengumpulan Sumber · `sulekha.png`',
        observedFacts:
          'Menampilkan baris data yang dikumpulkan dari Sulekha (`Source: Sulekha`, `Last Verified: 2026-01-22`, daftar New York / NY) dengan kolom Firm Name, Website, Address, Scrape Status, Practice Areas, Subcategories, Source, Last Verified, Firm URL, City, State, dan Region.',
        analyticalInterpretation:
          'Mengonfirmasi ekstraksi terstruktur atas kategori praktik hukum dan URL direktori dari Sulekha sebelum tahap integrasi lintas sumber.',
      },
    },
    {
      id: 'law-stage-2-maps',
      stepNumber: 'Stage 02',
      title: 'Pengumpulan Tambahan dari Google Maps',
      subtitle: 'Ekstraksi Direktori Pendukung',
      toolOrPlatform: 'MapsScraper',
      summary:
        'Mengumpulkan 438 data tambahan dari Google Maps menggunakan MapsScraper untuk menyediakan rating, jumlah ulasan, alamat jalan, dan referensi silang situs web.',
      activities: [
        'Mengekstrak 438 daftar firma hukum dari Google Maps menggunakan MapsScraper',
        'Merekam skor rating Google, jumlah ulasan, status klaim bisnis, koordinat, dan kolom situs web',
        'Menyiapkan data pendukung untuk pencocokan silang terhadap daftar dari Sulekha',
      ],
      verifiedFindings: [
        '438 data sumber tambahan berhasil dikumpulkan dari Google Maps.',
        'Menyediakan kolom `Reviewscore`, `Total_score`, `website`, `Category`, dan alamat sebagaimana terlihat pada `maps.png`.',
      ],
      scopeBoundary:
        'Volume sumber tambahan (438 data); tidak dijumlahkan secara langsung dengan data Sulekha sebagai total firma unik akhir.',
      evidence: {
        id: 'law-evidence-maps',
        title: 'Output Scraping Google Maps (`maps`)',
        src: '/assets/projects/us-law-firms-data-collection/maps.png',
        alt: 'Tampilan spreadsheet hasil scraping Google Maps yang disanitasi menampilkan firm_name, Address, city, state, zip, Phone yang disensor, Location, Reviewscore, Total_score, website, Category, Claimed, Latitude, Longitude, Place_id, Cid',
        taskOrSourceLabel: 'Bukti Pengumpulan Sumber · `maps.png`',
        observedFacts:
          'Menampilkan 20 baris output Google Maps (daftar Los Angeles / CA) dengan kolom Phone yang disensor serta kolom Reviewscore, Total_score, website, Category, Claimed, Latitude, dan Longitude.',
        analyticalInterpretation:
          'Menyediakan metadata rating, jumlah ulasan, dan lokasi pendukung yang digunakan selama tahap integrasi lintas sumber.',
      },
    },
    {
      id: 'law-stage-3-integration',
      stepNumber: 'Stage 03',
      title: 'Integrasi Lintas Sumber dan Peninjauan Data',
      subtitle: 'Perbandingan & Normalisasi Multi-Sumber',
      toolOrPlatform: 'Python · Pandas · Microsoft Excel',
      summary:
        'Membandingkan dan mengintegrasikan informasi bisnis dari Sulekha dan Google Maps, menormalisasi kolom skema, serta mengidentifikasi kolom yang kosong atau belum terkonfirmasi untuk ditinjau.',
      activities: [
        'Menyelaraskan kolom-kolom dari Sulekha dan Google Maps ke dalam skema target 15 kolom',
        'Membandingkan data antar sumber untuk menggabungkan kategori direktori dengan metadata rating dan ulasan Google',
        'Menandai data dengan nomor telepon kosong, rating Google yang tidak ditemukan, atau catatan praktik campuran untuk peninjauan manual',
      ],
      verifiedFindings: [
        'Data yang terintegrasi mencantumkan `Sulekha + Google Maps` pada kolom `Source` di buku kerja sampel beserta catatan kontekstual pada kolom `Notes` (misalnya "Phone not listed on Sulekha", "Google Maps rating not found").',
      ],
      scopeBoundary:
        'Jumlah pasti penghapusan duplikat, persentase pencocokan otomatis, dan metode deduplikasi pada keseluruhan 500 data tidak dikuantifikasi secara terpisah dan tidak diklaim.',
      evidence: {
        id: 'law-evidence-sample2',
        title: 'Sampel Dataset Akhir yang Disanitasi — Kolom Tengah hingga Akhir (`sample2`)',
        src: '/assets/projects/us-law-firms-data-collection/sample2.png',
        alt: 'Tampilan spreadsheet sampel yang disanitasi (sample2) menampilkan Practice Areas, Subcategories, Google Rating, Review Count, Source (Sulekha + Google Maps), Last Verified, Firm URL, dan Notes',
        taskOrSourceLabel: 'Tampilan Sampel Hasil Akhir 2 dari 2 · `sample2.png`',
        observedFacts:
          'Menampilkan kolom Practice Areas, Subcategories, Google Rating, Review Count, Source (`Sulekha + Google Maps`), Last Verified (`2026-01-15`), Firm URL, dan catatan verifikasi rinci (Notes) untuk 10 data sampel.',
        analyticalInterpretation:
          'Menunjukkan bagaimana bidang praktik direktori dari Sulekha serta metrik rating dan ulasan dari Google Maps digabungkan bersama catatan verifikasi yang eksplisit.',
      },
    },
    {
      id: 'law-stage-4-delivery',
      stepNumber: 'Stage 04',
      title: 'Verifikasi Manual dan Penyerahan Akhir 500 Data ke Klien',
      subtitle: 'Peninjauan Manusia & Output Spreadsheet Terstruktur',
      toolOrPlatform: 'Microsoft Excel · Verifikasi Manual',
      summary:
        'Meninjau dan melengkapi kolom-kolom yang belum terkonfirmasi secara manual apabila memungkinkan, lalu menyerahkan dataset Excel akhir berisi 500 data terstruktur kepada klien.',
      activities: [
        'Memeriksa secara manual kolom kontak yang belum terkonfirmasi, klasifikasi bidang praktik, dan kasus khusus',
        'Mendokumentasikan catatan khusus per baris pada kolom `Notes` (seperti beberapa nomor telepon, praktik campuran, atau rating yang tidak tersedia)',
        'Menyelesaikan hasil akhir Microsoft Excel berisi 500 data sesuai kebutuhan klien',
      ],
      verifiedFindings: [
        'Menyerahkan dataset terstruktur berisi 500 data sesuai permintaan klien dalam format Excel.',
        'Menjaga kerahasiaan klien dengan hanya menampilkan sampel 10 data yang telah disanitasi (`sample1` dan `sample2`) untuk demonstrasi portofolio.',
      ],
      scopeBoundary:
        'Tidak mengklaim jumlah penyelesaian manual tertentu, tingkat akurasi 100%, ataupun metrik konversi bisnis klien.',
      evidence: {
        id: 'law-evidence-sample1',
        title: 'Sampel Dataset Akhir yang Disanitasi — Kolom Awal (`sample1`)',
        src: '/assets/projects/us-law-firms-data-collection/sample1.png',
        alt: 'Tampilan spreadsheet sampel yang disanitasi (sample1) menampilkan Firm Name, Street Address, City, State, ZIP Code, Phone yang disensor, dan Website',
        taskOrSourceLabel: 'Tampilan Sampel Hasil Akhir 1 dari 2 · `sample1.png`',
        observedFacts:
          'Menampilkan 7 kolom pertama dari dataset sampel 10 baris dengan nomor telepon yang disamarkan demi privasi.',
        analyticalInterpretation:
          'Dipasangkan dengan `sample2.png`, merepresentasikan struktur hasil akhir Excel tanpa membuka dataset lengkap 500 baris milik klien.',
      },
    },
  ] satisfies ProcessNode[],
};

export const AI_AGENT_CASE_STUDY_ID = {
  slug: 'ai-data-analyst-agent',
  title: 'AI Data Analyst Agent',
  contextLabel: 'Proyek Kursus · Proyek Pembelajaran IBM / Hacktiv8',
  platform: 'Langflow',
  models: ['Gemini 3.1 Flash Lite (`gemini-3.1-flash-lite`)', 'Gemini 2.5 Flash (`gemini-2.5-flash`)'],
  inputDataset: '`laptop_online_review.csv` (1.001 baris · 108 produk unik)',
  tools: [
    'Langflow',
    'Gemini 3.1 Flash Lite',
    'Gemini 2.5 Flash',
    'Prompt Engineering',
    'CSV',
  ],
  shortSummary:
    'Alur kerja sekuensial berbasis LLM yang dibangun di Langflow untuk memproses ulasan pelanggan produk elektronik konsumen lintas kategori dari file CSV melalui templat prompt dua tahap dan model bahasa Gemini guna menghasilkan wawasan berorientasi sentimen, ringkasan padat, dan poin tindakan per departemen.',
  architectureBoundary:
    'Batasan Arsitektur & Akurasi: Proyek ini merupakan alur kerja prompt-dan-LLM sekuensial enam tahap yang dibangun di Langflow. Sistem ini bukan Retrieval-Augmented Generation (RAG), tidak menggunakan database vektor atau embeddings, dan bukan sistem multi-agen otonom dengan pemanggilan alat (tool calling). Meskipun `laptop_online_review.csv` berisi 1.001 baris data yang mencakup laptop, smartphone, dan peralatan rumah tangga, bukti yang tersedia tidak menetapkan tingkat akurasi klasifikasi sentimen yang terukur, keterlacakan per baris, ataupun pemrosesan terverifikasi atas seluruh 1.001 baris dalam satu konteks model sekaligus.',
  datasetStats: [
    {
      label: 'Ukuran Dataset',
      value: '1,001 × 4',
      note: '1.001 baris dengan 4 kolom (`Unnamed: 0`, `Product_name`, `Review`, `Rating`)',
    },
    {
      label: 'Produk Unik',
      value: '108 Products',
      note: 'Mencakup laptop, smartphone, dan peralatan rumah tangga meskipun nama filenya CSV laptop',
    },
    {
      label: 'Kelengkapan Data',
      value: '0 Missing / 0 Dupes',
      note: 'Nol nilai kosong dan nol baris duplikat identik pada CSV yang diaudit',
    },
    {
      label: 'Jumlah Rating Bintang',
      value: '5★: 640 · 4★: 238',
      note: '3★: 58 · 2★: 8 · 1★: 57 (Metadata deskriptif input, bukan output sentimen AI)',
    },
  ],
  langflowNodes: [
    {
      id: 'node-1-read-file',
      stageNumber: '01',
      title: 'Input CSV / Read File',
      componentType: 'Komponen Read File Langflow',
      badgeText: 'laptop_online_review.csv',
      shortRole: 'Memuat dan meneruskan isi mentah dari file CSV ulasan pelanggan yang diunggah.',
      detailedDescription:
        'Membaca file `laptop_online_review.csv` (290,28 KB pada komponen workflow) dan meneruskan teks mentah ke Prompt Template tahap pertama. File yang diaudit berisi 1.001 baris dan 108 produk elektronik konsumen unik yang mencakup laptop, smartphone, dan peralatan rumah tangga.',
      technicalParameters: [
        'File Input: `laptop_online_review.csv`',
        'Kolom: `Unnamed: 0`, `Product_name`, `Review`, `Rating`',
        'Port Output: `Raw Content` → terhubung ke input `text` pada Tahap 02',
      ],
    },
    {
      id: 'node-2-sentiment-prompt',
      stageNumber: '02',
      title: 'Prompt Sentimen',
      componentType: 'Prompt Template (Tahap 1)',
      badgeText: 'Dynamic Template',
      shortRole: 'Menyusun instruksi analisis sentimen tahap pertama.',
      detailedDescription:
        'Menerapkan instruksi prompt untuk menafsirkan umpan balik pelanggan dan membatasi label klasifikasi sentimen hanya pada Positive, Neutral, atau Negative.',
      technicalParameters: [
        'Variabel Input: `text` (menerima isi CSV mentah dari Read File)',
        'Batasan: Membatasi kategori sentimen ke `Positive`, `Neutral`, atau `Negative`',
        'Port Output: `Prompt` → terhubung ke `Input` pada Tahap 03',
      ],
    },
    {
      id: 'node-3-gemini-flash-lite',
      stageNumber: '03',
      title: 'Gemini 3.1 Flash Lite',
      componentType: 'Language Model (Tahap 1)',
      badgeText: 'gemini-3.1-flash-lite',
      shortRole: 'Tahap pemrosesan model bahasa pertama yang menjalankan analisis berorientasi sentimen.',
      detailedDescription:
        'Menjalankan prompt tahap pertama menggunakan model `gemini-3.1-flash-lite` yang dipilih pada komponen Language Model di Langflow, lalu meneruskan respons model ke tahap prompt kedua.',
      technicalParameters: [
        'Model Terkonfigurasi: `gemini-3.1-flash-lite` (sesuai tangkapan layar workflow)',
        'Port Input: Menerima prompt terformat dari Tahap 02',
        'Port Output: `Model Response` → terhubung ke input `summary` pada Tahap 04',
      ],
    },
    {
      id: 'node-4-summary-prompt',
      stageNumber: '04',
      title: 'Prompt Ringkasan & Action Items',
      componentType: 'Prompt Template (Tahap 2)',
      badgeText: 'Synthesis Template',
      shortRole: 'Menyusun instruksi tahap kedua untuk sintesis eksekutif dan rekomendasi per departemen.',
      detailedDescription:
        'Menginstruksikan model untuk menggunakan penalaran internal berbahasa Inggris dan menghasilkan output Bahasa Indonesia formal yang mencakup ringkasan padat, poin tindakan yang diarahkan ke departemen terkait, serta label sentimen akhir meliputi kualitas produk, performa/fitur, harga/nilai, pengiriman/pengemasan, dan kepuasan keseluruhan.',
      technicalParameters: [
        'Struktur Templat: Format naratif `{summary}`, `[action_item]`, `[sentiment]`',
        'Iterasi Teknis: Menggantikan prompt berformat JSON ketat sebelumnya yang gagal melewati validasi templat Langflow akibat kurung kurawal bersarang (nested braces)',
        'Port Output: `Prompt` → terhubung ke `Input` pada Tahap 05',
      ],
    },
    {
      id: 'node-5-gemini-flash',
      stageNumber: '05',
      title: 'Gemini 2.5 Flash',
      componentType: 'Language Model (Tahap 2)',
      badgeText: 'gemini-2.5-flash',
      shortRole: 'Tahap pemrosesan model bahasa kedua yang menghasilkan narasi terstruktur akhir.',
      detailedDescription:
        'Memproses prompt sintesis tahap kedua menggunakan `gemini-2.5-flash` untuk menghasilkan ringkasan berbahasa Indonesia formal, lima poin tindakan per departemen, dan label sentimen keseluruhan.',
      technicalParameters: [
        'Model Terkonfigurasi: `gemini-2.5-flash` (sesuai tangkapan layar workflow)',
        'Port Input: Menerima prompt sintesis dari Tahap 04',
        'Port Output: `Model Response` → terhubung ke `Chat Output` pada Tahap 06',
      ],
    },
    {
      id: 'node-6-chat-output',
      stageNumber: '06',
      title: 'Chat Output',
      componentType: 'Komponen Chat Output Langflow',
      badgeText: 'Final Response',
      shortRole: 'Menampilkan hasil ringkasan, poin tindakan, dan label sentimen kepada pengguna.',
      detailedDescription:
        'Menampilkan output naratif akhir yang memuat `SUMMARY`, daftar bernomor `ACTION ITEMS` yang ditujukan kepada tim produk dan kualitas terkait (Laptop, Smartphone, After-Sales/QC), serta `SENTIMENT: Positive`.',
      technicalParameters: [
        'Bagian Output: `SUMMARY`, `ACTION ITEMS` (1–5), `SENTIMENT`',
        'Bahasa: Bahasa Indonesia Formal',
        'Catatan Ruang Lingkup: Menunjukkan respons representatif yang selaras dengan cakupan CSV multi-kategori; tidak memverifikasi akurasi per baris secara independen',
      ],
    },
  ] satisfies LangflowStageNode[],
  flashCards: [
    {
      id: 'ai-card-challenge',
      category: 'Tantangan Teknis & Penyelesaian',
      title: 'Perbaikan Validasi Kurung Kurawal Bersarang pada Templat Prompt Langflow',
      primaryValue: 'JSON → Format Naratif',
      description:
        'Skema output JSON ketat pada percobaan awal menyebabkan galat validasi Prompt Template di Langflow karena tanda kurung kurawal ditafsirkan sebagai variabel format dinamis.',
      details: [
        'Percobaan Awal: Skema output JSON ketat di dalam Prompt Template Langflow memicu galat validasi format specifier / kurung kurawal bersarang',
        'Penyelesaian: Merevisi prompt tahap kedua agar meminta format naratif terstruktur (`SUMMARY`, `ACTION ITEMS`, `SENTIMENT`)',
        'Hasil: Berhasil melewati validasi templat dan menghasilkan respons Bahasa Indonesia lengkap seperti pada bukti output',
      ],
      attribution: 'Sumber: AI Data Analyst Agent PRD v1.0 & Data Integrity Notes v1.0',
    },
    {
      id: 'ai-card-dataset',
      category: 'Audit Dataset & Ruang Lingkup Multi-Kategori',
      title: '1.001 Ulasan Lintas Kategori Produk Elektronik',
      primaryValue: '108 Produk Unik',
      description:
        'Meskipun bernama `laptop_online_review.csv`, dataset sumber yang telah diaudit mencakup laptop, smartphone, dan peralatan rumah tangga.',
      details: [
        'Ukuran Terverifikasi: 1.001 baris × 4 kolom (`Unnamed: 0`, `Product_name`, `Review`, `Rating`) dengan nol nilai kosong dan nol baris duplikat',
        'Distribusi Rating: 5★ (640), 4★ (238), 3★ (58), 1★ (57), 2★ (8) — metadata rating deskriptif berbeda dari klasifikasi sentimen teks',
        'Menjelaskan mengapa hasil sintesis AI membahas baterai/layar laptop, kamera/bobot smartphone, serta QC peralatan rumah tangga',
      ],
      attribution: 'Sumber: Audit `laptop_online_review.csv` & Asset Manifest v1.2',
    },
    {
      id: 'ai-card-prompt-design',
      category: 'Prompt Engineering Dua Tahap',
      title: 'Kriteria Evaluasi Terstruktur & Pengarahan Departemen',
      primaryValue: '5 Sumbu Evaluasi',
      description:
        'Perancangan prompt mengevaluasi umpan balik pelanggan berdasarkan lima kriteria dan mengarahkan rekomendasi ke tim bisnis yang spesifik.',
      details: [
        'Kriteria Evaluasi: Kualitas produk, performa & fitur, harga & nilai, pengiriman & pengemasan, serta kepuasan keseluruhan',
        'Protokol Bahasa: Instruksi penalaran internal berbahasa Inggris yang dipadukan dengan output pengguna dalam Bahasa Indonesia formal',
        'Pengarahan Tindakan: Mengarahkan rekomendasi kepada tim Pengembangan Produk Laptop, Pengembangan Produk Smartphone, serta Purna Jual / Quality Control',
      ],
      attribution: 'Sumber: AI Data Analyst Agent Project Content v1.0',
    },
  ] satisfies FlashCardItem[],
  publicEvidence: [
    {
      id: 'ai-evidence-output',
      title: 'Output Hasil Generasi Representatif (`agent-output-reference.png`)',
      src: '/assets/projects/ai-data-analyst-agent/agent-output-reference.png',
      alt: 'Tangkapan layar Chat Output AI Langflow menampilkan SUMMARY dalam Bahasa Indonesia, 5 ACTION ITEMS bernomor untuk tim laptop, smartphone, dan peralatan rumah tangga, serta SENTIMENT: Positive',
      taskOrSourceLabel: 'Bukti Output Representatif · `agent-output-reference.png`',
      observedFacts:
        'Menampilkan respons AI yang dihasilkan di Langflow (`Finished in 15.5s`) berisi `SUMMARY` multi-kategori, lima `ACTION ITEMS` bernomor per departemen (membahas baterai & layar laptop, kamera & bobot smartphone, serta QC peralatan rumah tangga), dan `SENTIMENT: Positive`.',
      analyticalInterpretation:
        'Menunjukkan bahwa templat prompt naratif yang telah direvisi beserta pipeline model Gemini sekuensial berhasil menghasilkan wawasan Bahasa Indonesia terstruktur yang selaras dengan input CSV multi-kategori.',
      scopeNote:
        'Menunjukkan contoh respons hasil generasi; tidak secara independen menetapkan akurasi klasifikasi sentimen, keterlacakan per baris, ataupun pemrosesan seluruh 1.001 baris sekaligus.',
    },
    {
      id: 'ai-evidence-dataset',
      title: 'Pratinjau Dataset CSV yang Disanitasi (`dataset-preview.png`)',
      src: '/assets/projects/ai-data-analyst-agent/dataset-preview.png',
      alt: 'Pratinjau spreadsheet laptop_online_review.csv menampilkan baris 0 hingga 5 dengan Product_name, teks Review, dan Rating = 5',
      taskOrSourceLabel: 'Bukti Dataset Input · `dataset-preview.png`',
      observedFacts:
        'Menampilkan sampel baris 0–5 dari `laptop_online_review.csv` yang memuat kolom `Product_name` (Lenovo Ideapad Gaming 3, DELL Inspiron 3515), teks ulasan pelanggan berbahasa Inggris (`Review`), dan nilai `Rating`.',
      analyticalInterpretation:
        'Mengilustrasikan teks ulasan tidak terstruktur dan skema tabel yang dibaca oleh komponen Read File pada Tahap 01.',
      scopeNote:
        'Pratinjau sampel dari dataset CSV 1.001 baris; file CSV lengkap tidak dipublikasikan karena teks ulasan dapat memuat rincian pribadi.',
    },
    {
      id: 'ai-evidence-workflow',
      title: 'Kanvas Alur Kerja Sekuensial 6-Node Langflow',
      src: '/assets/aistudio/Dark-Themed_AI_Workflow_Nodes_461f9344.png',
      alt: 'Kanvas Langflow bertema gelap menampilkan enam node berurutan: Data File, Prompt Template, Language Model, Prompt Template kedua ({summary}, {key_finding}, {recommend}), Language Model kedua, dan Chat Output',
      taskOrSourceLabel: 'Bukti Arsitektur Alur Kerja · Kanvas Langflow',
      observedFacts:
        'Menampilkan kanvas Langflow 6-node sekuensial bertema gelap secara lengkap: pembacaan Data File → Prompt Template tahap 1 → Google Language Model pertama (`14.31s`) → Prompt Template sintesis tahap 2 (`{summary}`, `{key_finding}`, `{recommend}`) → Google Language Model kedua (`11.17s`) → Chat Output.',
      analyticalInterpretation:
        'Mengonfirmasi rangkaian node deterministik dari input berkas melalui pemrosesan prompt dan inferensi LLM dua tahap menuju output terstruktur.',
      scopeNote:
        'Tangkapan layar asli alur kerja Langflow ditampilkan pada proporsi aslinya (2001 × 786) tanpa pemotongan.',
    },
  ] satisfies EvidenceItem[],
};

export const ECOMMERCE_DB_CASE_STUDY_ID = {
  slug: 'ecommerce-database-management',
  title: 'E-Commerce Database Management',
  contextLabel: 'Proyek Kelompok Akademik · Final Project Pemrograman Basis Data',
  institution: 'Program Studi S1 Informatika, Fakultas Ilmu Komputer, Universitas AMIKOM Yogyakarta',
  lecturer: 'Kusnawi, M.Eng',
  year: '2024',
  repositoryUrl: 'https://github.com/RazeYuki/code_fp',
  databaseEngine: 'MariaDB 10.4.32 / MySQL (XAMPP & phpMyAdmin) · Basis Data: ecommerce',
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
    'Proyek akhir kelompok 5 mahasiswa S1 Informatika yang merancang dan mengimplementasikan basis data relasional `ecommerce` di MariaDB/MySQL—mencakup skema 6 tabel utama, fungsi SQL kustom, stored procedure dengan kontrol alur IF, 6 trigger audit BEFORE/AFTER ke tabel `log_changes`, 3 indeks komposit BTREE, 4 view (termasuk nested view `WITH CHECK OPTION`), serta manajemen hak akses pengguna dan peran yang diverifikasi melalui CLI.',
  scopeClarification:
    'Diselesaikan sebagai Proyek Kelompok Akademik (5 anggota) pada mata kuliah Pemrograman Basis Data di Universitas AMIKOM Yogyakarta (2024). Catatan halaman 18 vs halaman 11–17 laporan: Ringkasan teks pada halaman 18 menyebut nama tabel log terpisah (`LogCustomers`, `LogOrders`, `LogProducts`), sedangkan kueri SQL aktual yang dieksekusi dan tangkapan layar phpMyAdmin pada halaman 11–17 mencatat keenam trigger ke dalam satu tabel terpadu `log_changes`.',
  heroKpis: [
    {
      label: 'Tabel Utama Skema',
      value: '6 Tabel',
      qualifier: 'Customers, Products, Orders, OrderDetails, Payments, Log_Changes',
    },
    {
      label: 'Logika Prosedural',
      value: '2 Fungsi · 3 Prosedur',
      qualifier: 'Mencakup kontrol alur IF & validasi SIGNAL SQLSTATE 45000',
    },
    {
      label: 'Audit Otomatis',
      value: '6 Trigger',
      qualifier: '3 BEFORE & 3 AFTER trigger tercatat ke log_changes',
    },
    {
      label: 'Optimasi & Keamanan',
      value: '3 Indeks · 4 View · 3 Role',
      qualifier: 'Indeks BTREE komposit, WITH CHECK OPTION & verifikasi CLI RBAC',
    },
  ],
  heroEvidence: {
    id: 'sql-hero-erd',
    title: 'phpMyAdmin Designer — Entity Relationship Diagram E-Commerce (Halaman 2)',
    src: '/assets/projects/ecommerce-database-management/01_erd_schema.png',
    alt: 'ERD phpMyAdmin Designer menampilkan tabel ecommerce: customers, payments, orderdetails, products, orders, log_changes, index_orders, serta views horizontal_view, vertical_view, base_view, nested_view',
    taskOrSourceLabel: 'Laporan Halaman 2 · ERD & Arsitektur Skema (`ecommerce`)',
    observedFacts:
      'Menampilkan kanvas phpMyAdmin Designer untuk basis data `ecommerce` yang memuat 6 tabel utama (`customers`, `products`, `orders`, `orderdetails`, `payments`, `log_changes`), tabel berindeks `index_orders`, serta 4 view (`horizontal_view`, `vertical_view`, `base_view`, `nested_view`) beserta garis relasi foreign key.',
    analyticalInterpretation:
      'Menunjukkan struktur relasional ternormalisasi yang memisahkan data pelanggan, katalog produk, header pesanan, rincian item pesanan, pembayaran, dan pencatatan log perubahan.',
    scopeNote:
      'Diekstrak langsung dari Halaman 2 Laporan Final Project Pemrograman Basis Data (“Manajemen E-Commerce”).',
  } satisfies EvidenceItem,
  schemaTables: [
    {
      tableName: 'Customers',
      columns: 'id_customer INT(11) PK, nama VARCHAR(100), alamat VARCHAR(255), telepon VARCHAR(15)',
      relationship: 'Relasi One-to-Many (1:N) dengan tabel Orders — setiap pelanggan dapat membuat satu atau lebih pesanan.',
    },
    {
      tableName: 'Products',
      columns: 'id_product INT(11) PK, nama_product VARCHAR(100), harga DECIMAL(10,2), stock INT(11)',
      relationship: 'Terhubung dengan tabel Orders dan OrderDetails — setiap produk dapat dipesan dalam satu atau lebih pesanan.',
    },
    {
      tableName: 'Orders',
      columns: 'id_order INT(11) PK, id_customer INT(11) FK, tanggal_pesan DATE, status VARCHAR(20), id_product INT(11), quantity INT(11)',
      relationship: 'Tabel transaksi utama yang terhubung dengan Customers (N:1), OrderDetails (1:N), dan Payments (1:N).',
    },
    {
      tableName: 'OrderDetails',
      columns: 'id_order_detail INT(11) PK, id_order INT(11) FK, id_product INT(11) FK, kuantitas INT(11)',
      relationship: 'Tabel rincian item pesanan yang menghubungkan setiap pesanan dengan produk dan kuantitasnya.',
    },
    {
      tableName: 'Payments',
      columns: 'id_payment INT(11) PK, id_order INT(11) FK, jumlah_bayar DECIMAL(10,2), tanggal_bayar DATE',
      relationship: 'Menyimpan data pembayaran yang terhubung ke tabel Orders (`id_order`).',
    },
    {
      tableName: 'log_changes',
      columns: 'id INT(11) AUTO_INCREMENT PK, event_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, event_type VARCHAR(20), table_name VARCHAR(50), old_data TEXT, new_data TEXT',
      relationship: 'Tabel log audit yang diisi secara otomatis oleh 6 trigger BEFORE dan AFTER pada tabel Customers, Orders, dan Products.',
    },
  ],
  processNodes: [
    {
      id: 'sql-step-1-erd',
      stepNumber: '01',
      title: 'Skema Relasional & ERD',
      subtitle: '6 Tabel Utama & Relasi Antar Tabel',
      toolOrPlatform: 'MariaDB / MySQL · phpMyAdmin Designer',
      summary:
        'Merancang skema relasional `ecommerce` yang terdiri atas 6 tabel utama (`Customers`, `Products`, `Orders`, `OrderDetails`, `Payments`, dan `log_changes`) untuk memodelkan transaksi pelanggan, rincian pesanan, pembayaran, serta log perubahan data.',
      activities: [
        'Mendefinisikan primary key (`id_customer`, `id_product`, `id_order`, `id_order_detail`, `id_payment`, `id`) dan tipe data kolom (`VARCHAR`, `DECIMAL(10,2)`, `INT(11)`, `DATE`, `TIMESTAMP`)',
        'Menyusun relasi foreign key yang menghubungkan `customers` ke `orders`, `orders` ke `payments`, serta `orderdetails` ke `orders` dan `products`',
        'Membuat tabel `log_changes` dengan `AUTO_INCREMENT` dan `DEFAULT CURRENT_TIMESTAMP` sebagai wadah pencatatan trigger',
      ],
      verifiedFindings: [
        '6 tabel utama + `index_orders` + 4 view (`horizontal_view`, `vertical_view`, `base_view`, `nested_view`) terverifikasi di phpMyAdmin Designer',
        'Kode sumber terdokumentasi pada repositori kelompok: `https://github.com/RazeYuki/code_fp`',
      ],
      scopeBoundary:
        'Terdokumentasi pada Halaman 2 laporan Final Project.',
      evidence: {
        id: 'ev-sql-erd',
        title: 'Entity Relationship Diagram (`01_erd_schema.png`)',
        src: '/assets/projects/ecommerce-database-management/01_erd_schema.png',
        alt: 'Diagram ERD phpMyAdmin Designer untuk basis data ecommerce',
        taskOrSourceLabel: 'Tahap 01 · Skema Relasional & ERD (Halaman 2)',
        observedFacts:
          'Menampilkan seluruh tabel, tipe data kolom, dan garis relasi di dalam skema basis data `ecommerce`.',
        analyticalInterpretation:
          'Menunjukkan pemisahan yang jelas antara tabel master (`customers`, `products`), tabel transaksi (`orders`, `orderdetails`, `payments`), serta lapisan audit dan view.',
      },
    },
    {
      id: 'sql-step-2-functions',
      stepNumber: '02',
      title: 'Fungsi SQL (SQL Functions)',
      subtitle: 'Fungsi Tanpa Parameter & Fungsi Dua Parameter',
      toolOrPlatform: 'MariaDB / MySQL Stored Routines',
      summary:
        'Mengimplementasikan dua fungsi SQL—satu fungsi tanpa parameter (`getTotalOrders`) dan satu fungsi dengan dua parameter (`getTotalPayments`)—serta memverifikasi status fungsinya di basis data `ecommerce`.',
      activities: [
        'Membuat fungsi `getTotalOrders() RETURNS INT` dengan kueri `SELECT COUNT(*) INTO total FROM Orders; RETURN total;`',
        'Membuat fungsi `getTotalPayments(id_order INT, start_date DATE) RETURNS DECIMAL(10,2)` yang menghitung `SUM(jumlah_bayar)` dari tabel `Payments` berdasarkan pesanan dan `tanggal_bayar >= start_date`',
        'Mengeksekusi `SELECT getTotalOrders();` (menghasilkan nilai `2`) dan `SELECT getTotalPayments(1, \'2024-01-01\');`',
        'Menampilkan daftar fungsi menggunakan `SHOW FUNCTION STATUS WHERE Db = DATABASE();`',
      ],
      verifiedFindings: [
        '`getTotalOrders()` dieksekusi dalam `0.0003 detik` dan mengembalikan jumlah `2` baris pada tabel `Orders`',
        'Kedua fungsi (`getTotalOrders` dan `getTotalPayments`) terdaftar pada `SHOW FUNCTION STATUS` di bawah `Db = ecommerce`',
      ],
      scopeBoundary:
        'Terdokumentasi pada Halaman 3–5 laporan Final Project.',
      evidence: {
        id: 'ev-sql-functions',
        title: 'Eksekusi Fungsi SQL & Daftar Status (`02_functions_execution.png`)',
        src: '/assets/projects/ecommerce-database-management/02_functions_execution.png',
        alt: 'Hasil eksekusi SELECT getTotalOrders(), SELECT getTotalPayments(1, 2024-01-01), dan SHOW FUNCTION STATUS di phpMyAdmin',
        taskOrSourceLabel: 'Tahap 02 · Fungsi SQL (Halaman 5)',
        observedFacts:
          'Menampilkan hasil `getTotalOrders()` = `2`, `getTotalPayments(1, \'2024-01-01\')` = `NULL`, serta tabel `SHOW FUNCTION STATUS`.',
        analyticalInterpretation:
          'Memvalidasi enkapsulasi perhitungan skalar langsung di lapisan basis data.',
      },
    },
    {
      id: 'sql-step-3-procedures',
      stepNumber: '03',
      title: 'Stored Procedures & Kontrol Alur (IF)',
      subtitle: 'showCustomers, updateOrderStatus & Validasi Stok updateProductStock',
      toolOrPlatform: 'MariaDB / MySQL Stored Procedures',
      summary:
        'Membangun tiga stored procedure yang mencakup pengambilan data tanpa parameter (`showCustomers`), pembaruan status berparameter (`updateOrderStatus`), serta prosedur kontrol alur `IF` (`updateProductStock`) untuk mencegah stok negatif dan mencatat peringatan stok rendah.',
      activities: [
        'Membuat prosedur `showCustomers()` untuk menampilkan seluruh data tabel `Customers`',
        'Membuat prosedur `updateOrderStatus(id_order INT, status VARCHAR(20))` untuk memperbarui status pesanan',
        'Membuat prosedur `updateProductStock(IN id_product INT, IN quantityChange INT)` menggunakan pernyataan `IF (currentStock + quantityChange) < 0` dengan `SIGNAL SQLSTATE \'45000\' SET MESSAGE_TEXT = \'Error: Stock cannot be negative\';` serta pengecekan `IF (currentStock + quantityChange) < 10` ke tabel `low_stock_alerts`',
        'Mengeksekusi `CALL showCustomers();`, `CALL updateOrderStatus(1, \'Shipped\');`, dan `CALL updateProductStock(1, 5);`',
      ],
      verifiedFindings: [
        '`CALL showCustomers();` menampilkan baris pelanggan (`5 Joker`, `6 Batman`) dalam `0.0002 detik`',
        '`CALL updateOrderStatus(1, \'Shipped\');` memperbarui status pesanan menjadi `Shipped`',
        '`CALL updateProductStock(1, 5);` memperbarui stok `Product A` (`id_product = 1`, `harga = 100.00`) menjadi `35`',
      ],
      scopeBoundary:
        'Terdokumentasi pada Halaman 6–10 laporan Final Project.',
      evidence: {
        id: 'ev-sql-procedures',
        title: 'Hasil Eksekusi Stored Procedure (`03_procedures_execution.png`)',
        src: '/assets/projects/ecommerce-database-management/03_procedures_execution.png',
        alt: 'Tangkapan layar phpMyAdmin untuk CALL showCustomers(), CALL updateOrderStatus(1, Shipped), dan CALL updateProductStock(1, 5)',
        taskOrSourceLabel: 'Tahap 03 · Stored Procedures (Halaman 9)',
        observedFacts:
          'Menampilkan tabel hasil setelah pemanggilan `CALL showCustomers()`, `CALL updateOrderStatus(1, \'Shipped\')`, dan `CALL updateProductStock(1, 5)`.',
        analyticalInterpretation:
          'Menunjukkan penerapan logika prosedural dan proteksi stok negatif di sisi server basis data.',
      },
    },
    {
      id: 'sql-step-4-triggers',
      stepNumber: '04',
      title: 'Trigger & Pencatatan Audit (log_changes)',
      subtitle: '6 Trigger BEFORE / AFTER pada Customers, Orders, dan Products',
      toolOrPlatform: 'MariaDB / MySQL Triggers · Tabel log_changes',
      summary:
        'Mengimplementasikan enam trigger `BEFORE` dan `AFTER` pada tabel `Customers`, `Orders`, dan `Products` untuk mencatat setiap aktivitas perubahan data (`INSERT`, `UPDATE`, `DELETE`) beserta nilai `old_data` dan `new_data` ke dalam tabel `log_changes`.',
      activities: [
        'Membuat 3 trigger `BEFORE`: `before_insert_customers` (`BEFORE INSERT ON Customers`), `before_delete_orders` (`BEFORE DELETE ON Orders`), dan `before_update_products` (`BEFORE UPDATE ON Products`)',
        'Membuat 3 trigger `AFTER`: `after_update_orders` (`AFTER UPDATE ON Orders`), `after_delete_customers` (`AFTER DELETE ON Customers`), dan `after_insert_products` (`AFTER INSERT ON Products`)',
        'Menguji keenam trigger melalui operasi DML nyata (insert pelanggan `Robin`, delete order `17`, update `Product A` → `[Product C]`, update quantity order `18` menjadi `50`, delete pelanggan `Joker`, dan insert `Product f` dengan stok `40`)',
      ],
      verifiedFindings: [
        'Keenam kejadian trigger tercatat secara berurutan di dalam tabel `log_changes` (`id` 1 s.d. 6) lengkap dengan stempel waktu `event_time`, `event_type`, `table_name`, `old_data`, dan `new_data`',
      ],
      scopeBoundary:
        'Terdokumentasi pada Halaman 11–18. Catatan: Teks ringkasan halaman 18 menyebut nama tabel `LogCustomers`, `LogOrders`, dan `LogProducts`, sedangkan kueri SQL aktual pada halaman 11–17 menyimpan seluruh log ke tabel `log_changes`.',
      evidence: {
        id: 'ev-sql-triggers',
        title: 'Tabel Audit log_changes Hasil Eksekusi 6 Trigger (`04_triggers_audit_log.png`)',
        src: '/assets/projects/ecommerce-database-management/04_triggers_audit_log.png',
        alt: 'Tampilan tabel log_changes di phpMyAdmin yang memuat 6 baris log dari trigger BEFORE INSERT, BEFORE DELETE, BEFORE UPDATE, AFTER UPDATE, AFTER DELETE, dan AFTER INSERT',
        taskOrSourceLabel: 'Tahap 04 · Trigger & Audit Log (Halaman 17)',
        observedFacts:
          'Menampilkan baris 1–6 pada tabel `log_changes` yang merekam perubahan data pada `Customers`, `Orders`, dan `Products` beserta nilai lama dan nilai baru.',
        analyticalInterpretation:
          'Membuktikan pencatatan jejak audit otomatis di tingkat basis data untuk setiap mutasi data penting.',
      },
    },
    {
      id: 'sql-step-5-indexing',
      stepNumber: '05',
      title: 'Pengindeksan Komposit (Composite Indexing)',
      subtitle: '3 Indeks BTREE Multi-Kolom melalui CREATE TABLE, CREATE INDEX & ALTER TABLE',
      toolOrPlatform: 'MariaDB / MySQL BTREE Indexing',
      summary:
        'Membuat tiga composite index (indeks dengan lebih dari satu kolom) menggunakan tiga metode DDL berbeda (`CREATE TABLE`, `CREATE INDEX`, dan `ALTER TABLE`) serta memverifikasi struktur indeks menggunakan `SHOW INDEX`.',
      activities: [
        'Metode 1 (`CREATE TABLE`): `CREATE TABLE index_orders (order_id INT, customer_id INT, order_date DATE, INDEX (order_id, customer_id));`',
        'Metode 2 (`CREATE INDEX`): `CREATE INDEX idx_customer_name_address ON Customers (nama, alamat);`',
        'Metode 3 (`ALTER TABLE`): `ALTER TABLE Customers ADD INDEX idx_name_phone (nama, telepon);`',
        'Menampilkan daftar indeks dengan `SHOW INDEX FROM index_orders;` dan `SHOW INDEX FROM customers;`',
      ],
      verifiedFindings: [
        'Tabel `index_orders` terverifikasi memiliki composite index `BTREE` pada kolom `(order_id, customer_id)`',
        'Tabel `customers` terverifikasi memiliki `PRIMARY (id_customer)` serta dua composite index `BTREE`: `idx_customer_name_address (nama, alamat)` dan `idx_name_phone (nama, telepon)`',
      ],
      scopeBoundary:
        'Terdokumentasi pada Halaman 19–21 laporan Final Project.',
      evidence: {
        id: 'ev-sql-indexes',
        title: 'Verifikasi Daftar Indeks Komposit BTREE (`05_composite_indexes.png`)',
        src: '/assets/projects/ecommerce-database-management/05_composite_indexes.png',
        alt: 'Output phpMyAdmin untuk Show index from index_orders dan show index from customers',
        taskOrSourceLabel: 'Tahap 05 · Composite Indexing (Halaman 21)',
        observedFacts:
          'Menampilkan tabel metadata `SHOW INDEX` dengan `Index_type = BTREE` serta urutan kolom `Seq_in_index` 1 dan 2.',
        analyticalInterpretation:
          'Menunjukkan perancangan indeks multi-kolom untuk mempercepat pencarian komposit pada data pesanan dan pelanggan.',
      },
    },
    {
      id: 'sql-step-6-views',
      stepNumber: '06',
      title: 'Database Views & WITH CHECK OPTION',
      subtitle: 'Horizontal View, Vertical View & Nested View beserta Operasi Update/Insert',
      toolOrPlatform: 'MariaDB / MySQL Views',
      summary:
        'Membangun empat view basis data yang mencakup `horizontal_view`, `vertical_view`, serta view di dalam view (`base_view` → `nested_view WITH CHECK OPTION`), kemudian menguji operasi `UPDATE` dan `INSERT` melalui `horizontal_view`.',
      activities: [
        'Membuat `horizontal_view`: `CREATE VIEW horizontal_view AS SELECT id_customer, nama, alamat FROM Customers;`',
        'Membuat `vertical_view`: `CREATE VIEW vertical_view AS SELECT nama, alamat FROM Customers WHERE alamat IS NOT NULL;`',
        'Membuat View Inside View dengan `WITH CHECK OPTION`: `CREATE VIEW base_view AS SELECT id_customer, nama FROM Customers WHERE nama IS NOT NULL;` dan `CREATE VIEW nested_view AS SELECT * FROM base_view WITH CHECK OPTION;`',
        'Menjalankan `UPDATE horizontal_view SET nama = \'Alice\' WHERE id_customer = 2;` dan `INSERT INTO horizontal_view (id_customer, nama, alamat) VALUES (5, \'Bob\', \'6789 Pine Street\');`',
        'Memverifikasi daftar view melalui `SHOW FULL TABLES IN ecommerce WHERE TABLE_TYPE LIKE \'VIEW\';`',
      ],
      verifiedFindings: [
        'Keempat view (`base_view`, `horizontal_view`, `nested_view`, `vertical_view`) terdaftar dengan tipe `VIEW` pada basis data `ecommerce`',
        'Operasi `INSERT` dan `UPDATE` melalui `horizontal_view` berhasil memperbarui pelanggan `2` menjadi `Alice` dan menambahkan pelanggan `5` (`Bob`)',
      ],
      scopeBoundary:
        'Terdokumentasi pada Halaman 22–24 laporan Final Project.',
      evidence: {
        id: 'ev-sql-views',
        title: 'Pembuatan Horizontal, Vertical & Nested View (`06_views_check_option.png`)',
        src: '/assets/projects/ecommerce-database-management/06_views_check_option.png',
        alt: 'Tangkapan layar pembuatan horizontal_view, vertical_view, base_view, dan nested_view WITH CHECK OPTION',
        taskOrSourceLabel: 'Tahap 06 · Database Views (Halaman 22)',
        observedFacts:
          'Menampilkan kueri pembuatan keempat view beserta waktu eksekusi di phpMyAdmin.',
        analyticalInterpretation:
          'Menunjukkan abstraksi tampilan tabel virtual sekaligus pembatasan integritas data melalui klausa `WITH CHECK OPTION`.',
      },
    },
    {
      id: 'sql-step-7-rbac',
      stepNumber: '07',
      title: 'Keamanan Basis Data: User, Role & Privilege',
      subtitle: 'Pembuktian Hak Akses melalui MariaDB Command Line Monitor',
      toolOrPlatform: 'MariaDB Security · CREATE USER / CREATE ROLE / GRANT',
      summary:
        'Mengonfigurasi keamanan basis data dengan membuat tiga pengguna baru (`user1`, `user2`, `user3`), tiga role organisasi (`finance`, `human_dev`, `warehouse`), serta pemberian hak akses spesifik pada tabel, view, dan procedure yang dibuktikan langsung melalui login CLI MariaDB.',
      activities: [
        'Membuat 3 user: `CREATE USER \'user1\'@\'localhost\'`, `\'user2\'@\'localhost\'`, dan `\'user3\'@\'localhost\'`',
        'Membuat 3 role: `CREATE ROLE \'finance\'`, `\'human_dev\'`, dan `\'warehouse\'`',
        'Memberikan hak akses tabel ke `user1`: `GRANT SELECT ON ecommerce.Orders TO \'user1\'@\'localhost\';`',
        'Memberikan hak akses view ke `user2`: `GRANT SELECT ON ecommerce.horizontal_view TO \'user2\'@\'localhost\';`',
        'Memberikan hak akses procedure ke role `finance` dan menerapkannya ke `user3`: `GRANT EXECUTE ON PROCEDURE ecommerce.showCustomers TO \'finance\'; GRANT \'finance\' TO \'user3\'@\'localhost\';`',
      ],
      verifiedFindings: [
        'Login CLI `user1`: `SELECT * FROM ecommerce.Orders;` berhasil (`1 row in set`), sedangkan `SELECT * FROM ecommerce.customers;` ditolak dengan `ERROR 1142 (42000): SELECT command denied`',
        'Login CLI `user2`: `SELECT * FROM ecommerce.horizontal_view;` berhasil menampilkan 3 baris (`Alice`, `Batman`, `Bob`), sedangkan akses ke view lain ditolak dengan `ERROR 1142 (42000)`',
        'Login CLI `user3`: `SHOW GRANTS FOR \'user3\'@\'localhost\';` mengonfirmasi pemberian role `finance`',
      ],
      scopeBoundary:
        'Terdokumentasi pada Halaman 25–30 laporan Final Project.',
      evidence: {
        id: 'ev-sql-rbac',
        title: 'Pembuktian Hak Akses CLI MariaDB — user1 (`07_rbac_cli_user1.png`)',
        src: '/assets/projects/ecommerce-database-management/07_rbac_cli_user1.png',
        alt: 'Terminal MariaDB menampilkan user1 berhasil mengakses ecommerce.Orders dan ditolak saat mengakses ecommerce.customers dengan ERROR 1142 (42000)',
        taskOrSourceLabel: 'Tahap 07 · Keamanan Basis Data CLI (Halaman 29)',
        observedFacts:
          'Menampilkan sesi `mysql -u user1 -p` pada `10.4.32-MariaDB` yang mengizinkan kueri ke `ecommerce.Orders` tetapi menolak kueri ke `ecommerce.customers`.',
        analyticalInterpretation:
          'Membuktikan bahwa pembatasan hak akses berbasis prinsip least-privilege berjalan efektif di tingkat mesin basis data.',
      },
    },
  ] satisfies ProcessNode[],
  sqlCodeCatalog: [
    {
      category: '01. Fungsi SQL (Halaman 3–4)',
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
      category: '02. Stored Procedures & Kontrol Alur (Halaman 6–8)',
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
      category: '03. Tabel Audit & 6 Trigger BEFORE/AFTER (Halaman 11–17)',
      title: 'Tabel log_changes & Trigger Pencatatan Perubahan',
      code: `CREATE TABLE log_changes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    event_type VARCHAR(20),
    table_name VARCHAR(50),
    old_data TEXT,
    new_data TEXT
);

-- Contoh: BEFORE UPDATE ON Products
CREATE TRIGGER before_update_products BEFORE UPDATE ON Products FOR EACH ROW
BEGIN
    INSERT INTO log_changes (event_type, table_name, old_data, new_data)
    VALUES (
        'BEFORE UPDATE', 'Products',
        CONCAT('Name: ', OLD.nama_product, ', Stock: ', OLD.stock),
        CONCAT('Name: ', NEW.nama_product, ', Stock: ', NEW.stock)
    );
END;

-- Beserta: before_insert_customers, before_delete_orders,
-- after_update_orders, after_delete_customers, after_insert_products`,
    },
    {
      category: '04. Composite Index, View & Hak Akses RBAC (Halaman 19–28)',
      title: 'Indeks BTREE Komposit, View WITH CHECK OPTION & GRANT',
      code: `-- 3 Indeks Komposit
CREATE TABLE index_orders (
    order_id INT, customer_id INT, order_date DATE,
    INDEX (order_id, customer_id)
);
CREATE INDEX idx_customer_name_address ON Customers (nama, alamat);
ALTER TABLE Customers ADD INDEX idx_name_phone (nama, telepon);

-- 4 View (Horizontal, Vertical, Base & Nested WITH CHECK OPTION)
CREATE VIEW horizontal_view AS SELECT id_customer, nama, alamat FROM Customers;
CREATE VIEW vertical_view AS SELECT nama, alamat FROM Customers WHERE alamat IS NOT NULL;
CREATE VIEW base_view AS SELECT id_customer, nama FROM Customers WHERE nama IS NOT NULL;
CREATE VIEW nested_view AS SELECT * FROM base_view WITH CHECK OPTION;

-- Pembuatan User, Role & Pemberian Hak Akses (Privilege)
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
      category: 'Arsitektur Relasional',
      title: '6 Tabel Utama & Relasi Entitas E-Commerce',
      primaryValue: '6 Tabel Utama',
      description:
        'Memisahkan data pelanggan, katalog produk, pesanan, detail item pesanan, pembayaran, dan log perubahan di dalam basis data `ecommerce`.',
      details: [
        'Tabel Master: `Customers` (`id_customer`, `nama`, `alamat`, `telepon`) & `Products` (`id_product`, `nama_product`, `harga`, `stock`)',
        'Tabel Transaksi: `Orders`, `OrderDetails` (`id_order_detail`, `id_order`, `id_product`, `kuantitas`), dan `Payments` (`jumlah_bayar`, `tanggal_bayar`)',
        'Lapisan Audit: `log_changes` yang merekam perubahan `BEFORE` dan `AFTER` secara otomatis',
      ],
      attribution: 'Sumber: Laporan Final Project Pemrograman Basis Data (Halaman 2)',
    },
    {
      id: 'sql-card-triggers',
      category: 'Pencatatan Audit Otomatis',
      title: '6 Trigger BEFORE & AFTER ke Tabel log_changes',
      primaryValue: '6 Trigger Aktif',
      description:
        'Merekam nilai sebelum dan sesudah perubahan pada tabel `Customers`, `Orders`, dan `Products` langsung di sisi basis data.',
      details: [
        'Trigger BEFORE: `before_insert_customers`, `before_delete_orders`, `before_update_products`',
        'Trigger AFTER: `after_update_orders`, `after_delete_customers`, `after_insert_products`',
        'Terverifikasi pada tabel `log_changes` melalui 6 pengujian operasi DML berurutan (`2024-07-26`)',
      ],
      attribution: 'Sumber: Laporan Final Project Pemrograman Basis Data (Halaman 11–17)',
    },
    {
      id: 'sql-card-rbac',
      category: 'Keamanan & Hak Akses Basis Data',
      title: 'Hak Akses User & Role Terverifikasi via CLI MariaDB',
      primaryValue: '3 User · 3 Role',
      description:
        'Menerapkan pembatasan hak akses spesifik pada tabel, view, dan stored procedure menggunakan fitur User dan Role di MariaDB.',
      details: [
        '`user1@localhost`: Hanya memiliki akses `SELECT` ke `ecommerce.Orders`; akses ke `ecommerce.customers` ditolak (`ERROR 1142`)',
        '`user2@localhost`: Hanya memiliki akses `SELECT` ke `ecommerce.horizontal_view`; akses ke view lain ditolak (`ERROR 1142`)',
        '`user3@localhost`: Diberikan role `finance` yang memiliki hak `GRANT EXECUTE ON PROCEDURE ecommerce.showCustomers`',
      ],
      attribution: 'Sumber: Laporan Final Project Pemrograman Basis Data (Halaman 25–30)',
    },
  ] satisfies FlashCardItem[],
  publicEvidence: [
    {
      id: 'sql-ev-1-erd',
      title: 'phpMyAdmin Designer — ERD E-Commerce (`01_erd_schema.png`)',
      src: '/assets/projects/ecommerce-database-management/01_erd_schema.png',
      alt: 'Diagram ERD phpMyAdmin Designer untuk basis data ecommerce',
      taskOrSourceLabel: 'Laporan Halaman 2 · ERD & Relasi Skema',
      observedFacts:
        'Menampilkan tabel `ecommerce` (`customers`, `payments`, `orderdetails`, `products`, `orders`, `log_changes`, `index_orders`) dan view (`horizontal_view`, `vertical_view`, `nested_view`, `base_view`) beserta garis relasi foreign key.',
      analyticalInterpretation:
        'Mengonfirmasi struktur skema relasional dan ketergantungan antar objek yang diimplementasikan di phpMyAdmin.',
    },
    {
      id: 'sql-ev-2-functions',
      title: 'Eksekusi Fungsi SQL & Status (`02_functions_execution.png`)',
      src: '/assets/projects/ecommerce-database-management/02_functions_execution.png',
      alt: 'Eksekusi getTotalOrders() dan getTotalPayments() serta output SHOW FUNCTION STATUS',
      taskOrSourceLabel: 'Laporan Halaman 5 · Verifikasi Fungsi SQL',
      observedFacts:
        'Menampilkan `SELECT getTotalOrders();` (hasil: `2`), `SELECT getTotalPayments(1, \'2024-01-01\');`, dan `SHOW FUNCTION STATUS WHERE Db = DATABASE();`.',
      analyticalInterpretation:
        'Memverifikasi fungsi skalar tanpa parameter dan fungsi berparameter pada basis data `ecommerce`.',
    },
    {
      id: 'sql-ev-3-procedures',
      title: 'Eksekusi Stored Procedures (`03_procedures_execution.png`)',
      src: '/assets/projects/ecommerce-database-management/03_procedures_execution.png',
      alt: 'Eksekusi CALL showCustomers(), CALL updateOrderStatus(1, Shipped), dan CALL updateProductStock(1, 5)',
      taskOrSourceLabel: 'Laporan Halaman 9 · Verifikasi Stored Procedures',
      observedFacts:
        'Menampilkan tabel hasil setelah pemanggilan `showCustomers()`, `updateOrderStatus(1, \'Shipped\')`, dan `updateProductStock(1, 5)`.',
      analyticalInterpretation:
        'Mengonfirmasi eksekusi prosedur tersimpan dan pembaruan stok pada tabel `products`.',
    },
    {
      id: 'sql-ev-4-triggers',
      title: 'Jejak Audit Trigger log_changes (`04_triggers_audit_log.png`)',
      src: '/assets/projects/ecommerce-database-management/04_triggers_audit_log.png',
      alt: 'Tampilan tabel log_changes yang memuat 6 kejadian trigger pada 2024-07-26',
      taskOrSourceLabel: 'Laporan Halaman 17 · Verifikasi Log Trigger',
      observedFacts:
        'Menampilkan 6 baris kejadian (`BEFORE INSERT`, `BEFORE DELETE`, `BEFORE UPDATE`, `AFTER UPDATE`, `AFTER DELETE`, `AFTER INSERT`) lengkap dengan data lama dan data baru.',
      analyticalInterpretation:
        'Menunjukkan perekaman audit otomatis lintas tabel `Customers`, `Orders`, dan `Products`.',
    },
    {
      id: 'sql-ev-5-indexes',
      title: 'Indeks Komposit BTREE (`05_composite_indexes.png`)',
      src: '/assets/projects/ecommerce-database-management/05_composite_indexes.png',
      alt: 'Output SHOW INDEX untuk tabel index_orders dan customers',
      taskOrSourceLabel: 'Laporan Halaman 21 · Verifikasi Composite Index',
      observedFacts:
        'Menampilkan hasil `SHOW INDEX FROM index_orders;` dan `SHOW INDEX FROM customers;` yang mengonfirmasi indeks komposit `BTREE` pada `(order_id, customer_id)`, `(nama, alamat)`, dan `(nama, telepon)`.',
      analyticalInterpretation:
        'Memverifikasi pembuatan composite index melalui `CREATE TABLE`, `CREATE INDEX`, dan `ALTER TABLE`.',
    },
    {
      id: 'sql-ev-6-views',
      title: 'Database Views & WITH CHECK OPTION (`06_views_check_option.png`)',
      src: '/assets/projects/ecommerce-database-management/06_views_check_option.png',
      alt: 'Pembuatan horizontal_view, vertical_view, base_view, dan nested_view WITH CHECK OPTION',
      taskOrSourceLabel: 'Laporan Halaman 22 · Verifikasi Database Views',
      observedFacts:
        'Menampilkan pernyataan SQL pembuatan `horizontal_view`, `vertical_view`, `base_view`, dan `nested_view WITH CHECK OPTION`.',
      analyticalInterpretation:
        'Mengonfirmasi implementasi view horizontal, vertikal, dan bersarang (nested view) dengan pemeriksaan klausa `WITH CHECK OPTION`.',
    },
    {
      id: 'sql-ev-7-rbac1',
      title: 'Verifikasi CLI MariaDB — user1 (`07_rbac_cli_user1.png`)',
      src: '/assets/projects/ecommerce-database-management/07_rbac_cli_user1.png',
      alt: 'CLI MariaDB menampilkan user1 diizinkan pada ecommerce.Orders dan ditolak pada ecommerce.customers',
      taskOrSourceLabel: 'Laporan Halaman 29 · Verifikasi Hak Akses CLI (user1)',
      observedFacts:
        'Menampilkan `user1` berhasil membaca `ecommerce.Orders` (`1 row in set`) dan mendapat `ERROR 1142 (42000): SELECT command denied` saat mengakses `ecommerce.customers`.',
      analyticalInterpretation:
        'Memverifikasi pembatasan akses tingkat tabel pada terminal MariaDB.',
    },
    {
      id: 'sql-ev-8-rbac2',
      title: 'Verifikasi CLI MariaDB — user2 & user3 (`08_rbac_cli_user2_user3.png`)',
      src: '/assets/projects/ecommerce-database-management/08_rbac_cli_user2_user3.png',
      alt: 'CLI MariaDB menampilkan user2 diizinkan pada horizontal_view dan user3 memiliki role finance',
      taskOrSourceLabel: 'Laporan Halaman 30 · Verifikasi Hak Akses CLI (user2 & user3)',
      observedFacts:
        'Menampilkan `user2` berhasil menjalankan kueri pada `ecommerce.horizontal_view` (`3 rows in set`: Alice, Batman, Bob) tetapi ditolak pada `vertikal_view`, serta `SHOW GRANTS FOR \'user3\'@\'localhost\'` yang membuktikan pemberian role `finance`.',
      analyticalInterpretation:
        'Memverifikasi isolasi hak akses tingkat view dan penerapan role di MariaDB.',
    },
  ] satisfies EvidenceItem[],
};

export const SEMANTIC_RETRIEVAL_CASE_STUDY_ID = {
  slug: 'semantic-retrieval-running-shoes',
  title: 'Perbandingan TF-IDF dan Sentence Embedding pada Semantic Retrieval Produk Sepatu Lari',
  shortTitle: 'Running Shoes Semantic Retrieval',
  indonesianTitle: 'Perbandingan TF-IDF dan Sentence Embedding pada Semantic Retrieval Produk Sepatu Lari',
  contextLabel: 'Skripsi S1 Informatika',
  institution: 'Program Studi S1 Informatika, Fakultas Ilmu Komputer, Universitas AMIKOM Yogyakarta',
  author: 'Satya Gema Nusantara Iskandar (NIM 22.11.5242)',
  advisor: 'Rumini, M.Kom',
  defenseDate: 'Agustus 2026 (Skripsi dipertahankan Agustus 2026)',
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
    'Penelitian skripsi S1 Informatika dari hulu ke hilir yang menguji apakah representasi berbasis makna (`Sentence Embedding` menggunakan `all-MiniLM-L6-v2`) lebih unggul daripada pembobotan kata kunci leksikal (`TF-IDF`) pada pencarian produk sepatu lari dari dataset RunRepeat (`948` baris mentah → `475` dokumen bersih) menggunakan `30` kueri bahasa natural (`293` pasangan kueri–dokumen dinilai relevansinya), serta disajikan dalam prototipe aplikasi web Streamlit.',
  problemStatement:
    'Pencarian produk berbasis kata kunci gagal saat kueri pengguna dan deskripsi produk memakai istilah berbeda (vocabulary mismatch). Penelitian ini menguji apakah representasi berbasis makna (Sentence Embedding) lebih baik daripada TF-IDF pada pencarian sepatu lari dengan kueri bahasa natural.',
  scopeClarification:
    'Seluruh metrik, spesifikasi model (`all-MiniLM-L6-v2`, vektor 384 dimensi, batas input 256 token tanpa chunking), jumlah dataset (`948` baris × `30` kolom → `475` dokumen bersih, `8` atribut teks digabung), proses pooling (`293` pasangan unik dari `300` hasil Top-5), serta keterbatasan penelitian dipertahankan sesuai dokumen skripsi.',
  heroKpis: [
    {
      label: 'Korpus RunRepeat',
      value: '948 → 475',
      qualifier: 'Baris data mentah (948 × 30 kolom) → dokumen bersih (8 atribut teks)',
    },
    {
      label: 'Benchmark Query',
      value: '30 Kueri',
      qualifier: 'Kueri pencarian sepatu lari dalam bahasa natural',
    },
    {
      label: 'Pasangan Qrels (Pooling)',
      value: '293 Pasangan',
      qualifier: 'Dideduplikasi dari 300 hasil Top-5 · Relevansi bertingkat 0–3',
    },
    {
      label: 'nDCG@5 Rata-rata Terbaik',
      value: '0,6825',
      qualifier: 'Sentence Embedding (all-MiniLM-L6-v2) vs 0,6492 TF-IDF (+0,0333)',
    },
  ],
  heroEvidence: {
    id: 'ir-hero-charts',
    title: 'Rata-rata nDCG@5 (30 Query) & Query dengan Selisih Terbesar (`01_ndcg_charts_and_table.png`)',
    src: '/assets/projects/semantic-retrieval-running-shoes/01_ndcg_charts_and_table.png',
    alt: 'Grafik batang Rata-rata nDCG@5 pada 30 query (TF-IDF 0,6492 vs Sentence Embedding 0,6825), grafik query dengan selisih terbesar (Q14 0,36 vs 1,00; Q4 0,90 vs 0,46), serta tabel statistik nDCG@5',
    taskOrSourceLabel: 'Hasil Utama Skripsi · Evaluasi nDCG@5 (Halaman 2)',
    observedFacts:
      'Menampilkan dua grafik utama—Rata-rata nDCG@5 pada 30 kueri (`TF-IDF: 0.6492` vs `Sentence Embedding: 0.6825`) dan Query dengan selisih terbesar (`Q14 stable shoes daily training`: TF-IDF `0.36` vs Sentence Emb. `1.00`; `Q4 comfortable long runs`: TF-IDF `0.90` vs Sentence Emb. `0.46`)—diikuti tabel lengkap 5 metrik statistik (`Rata-rata`, `Median`, `Standar deviasi`, `Minimum`, `Maksimum`).',
    analyticalInterpretation:
      'Menunjukkan bahwa Sentence Embedding unggul tipis secara rata-rata (`0,6825` vs `0,6492`) dan lebih konsisten pada nilai minimum (`0,3246` vs `0,1847`), namun keunggulan per kueri bergantung pada apakah kueri bersifat konseptual (`Q14`) atau memuat istilah eksplisit (`Q4`).',
    scopeNote:
      'Diekstrak langsung dari Halaman 2 dokumen ringkasan portofolio skripsi.',
  } satisfies EvidenceItem,
  ndcgMetricsTable: [
    {
      metricEn: 'Mean (Rata-rata)',
      metricId: 'Rata-rata',
      tfidf: '0,6492',
      sentenceEmbedding: '0,6825',
      diff: '+0,0333 (Sentence Embedding)',
      highlight: true,
    },
    {
      metricEn: 'Median',
      metricId: 'Median',
      tfidf: '0,6876',
      sentenceEmbedding: '0,6835',
      diff: '-0,0041 (TF-IDF sedikit lebih tinggi)',
      highlight: false,
    },
    {
      metricEn: 'Standard Deviation (Standar deviasi)',
      metricId: 'Standar deviasi',
      tfidf: '0,2156',
      sentenceEmbedding: '0,2130',
      diff: '-0,0026 (Sentence Embedding lebih konsisten)',
      highlight: false,
    },
    {
      metricEn: 'Minimum',
      metricId: 'Minimum',
      tfidf: '0,1847',
      sentenceEmbedding: '0,3246',
      diff: '+0,1399 (Nilai minimum lebih terjaga)',
      highlight: true,
    },
    {
      metricEn: 'Maximum (Maksimum)',
      metricId: 'Maksimum',
      tfidf: '1,0000',
      sentenceEmbedding: '1,0000',
      diff: '0,0000 (Kedua metode mencapai nilai sempurna)',
      highlight: false,
    },
  ],
  queryCaseComparisons: [
    {
      queryId: 'Q14',
      queryText: 'stable running shoes for daily training',
      tfidfScore: '0,3649',
      tfidfChartLabel: '0.36',
      embeddingScore: '1,0000',
      embeddingChartLabel: '1.00',
      winner: 'Sentence Embedding (+0,6351)',
      explanationEn:
        'Sentence Embedding achieved a perfect 1.0000 vs. 0.3649 for TF-IDF because top-ranked product documents described stability and daily training concepts using related phrases rather than repeating the exact query keywords.',
      explanationId:
        'Sentence Embedding mencapai 1,0000 vs 0,3649 karena dokumen teratas memuat konsep stabilitas dan penggunaan harian secara terkait meskipun tidak mengulang kata kunci secara persis.',
    },
    {
      queryId: 'Q4',
      queryText: 'comfortable during long runs',
      tfidfScore: '0,9031',
      tfidfChartLabel: '0.90',
      embeddingScore: '0,4643',
      embeddingChartLabel: '0.46',
      winner: 'TF-IDF (+0,4388)',
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
      title: 'Persiapan Data & Konstruksi Semantic Text',
      subtitle: 'Dataset RunRepeat (948 × 30) → 475 Dokumen Bersih',
      toolOrPlatform: 'Python · pandas · NumPy (Google Colab)',
      summary:
        'Mengeksplorasi struktur dan missing values pada dataset RunRepeat (`948 baris × 30 kolom`), menghapus baris yang seluruh 8 atribut teksnya kosong, melakukan normalisasi teks tanpa imputasi missing value, dan menggabungkan 8 atribut menjadi satu `semantic text` per produk.',
      activities: [
        'Memeriksa struktur dataset (`948 baris × 30 kolom`) serta sebaran missing values pada atribut deskriptif produk',
        'Menghapus baris yang seluruh 8 atribut teksnya kosong sehingga diperoleh `475` dokumen produk bersih',
        'Menormalisasi encoding, delimiter, spasi, dan huruf kecil (lowercase); missing value sengaja tidak diimputasi agar tidak memalsukan karakteristik produk',
        'Menggabungkan 8 atribut teks menjadi satu kesatuan `semantic text` per sepatu lari',
      ],
      verifiedFindings: [
        'Dataset mentah `948` baris disaring menjadi `475` dokumen produk bersih yang siap direpresentasikan',
        'Tanpa imputasi sintetis—menjaga keaslian informasi deskripsi produk',
      ],
      scopeBoundary:
        'Tahap 1 dari 5 tahapan alur kerja analisis yang terdokumentasi (Halaman 1).',
      evidence: {
        id: 'ev-ir-workflow',
        title: 'Tabel Alur Kerja Analisis 5 Tahap (`02_research_workflow_overview.png`)',
        src: '/assets/projects/semantic-retrieval-running-shoes/02_research_workflow_overview.png',
        alt: 'Tabel 5 tahap alur kerja analisis: 1. Persiapan data, 2. Representasi dokumen, 3. Benchmark & anotasi, 4. Evaluasi, 5. Prototipe',
        taskOrSourceLabel: 'Alur Kerja Analisis · Tahap 1–5 (Halaman 1)',
        observedFacts:
          'Mendokumentasikan 5 tahapan: (1) Persiapan data (`948 baris × 30 kolom` → `475 dokumen`, 8 atribut digabung), (2) Representasi dokumen (`TF-IDF 475×5.394` vs `all-MiniLM-L6-v2 475×384`), (3) Benchmark & anotasi (`30 query`, `300` hasil Top-5 dideduplikasi menjadi `293` pasangan unik, relevansi `0–3` qrels), (4) Evaluasi (`DCG@5`, `IDCG@5`, `nDCG@5`), dan (5) Prototipe (`Streamlit`).',
        analyticalInterpretation:
          'Menunjukkan rancangan eksperimen yang terukur dan adil dari tahap pembersihan data hingga prototipe aplikasi.',
      },
    },
    {
      id: 'ir-step-2-repr',
      stepNumber: '02',
      title: 'Representasi Dokumen & Cosine Similarity',
      subtitle: 'TF-IDF (475 × 5.394) vs all-MiniLM-L6-v2 (475 × 384)',
      toolOrPlatform: 'scikit-learn · sentence-transformers · Cosine Similarity',
      summary:
        'Membangun representasi dokumen berbasis frekuensi kata (`TF-IDF`) dan representasi vektor padat berbasis makna (`all-MiniLM-L6-v2`) di atas korpus, prapemrosesan, dan perhitungan `Cosine Similarity` yang identik agar perbandingan berlangsung adil.',
      activities: [
        'Membangun representasi baseline `TF-IDF` dengan ukuran kosakata `5.394` term, menghasilkan matriks dokumen-term berukuran `475 × 5.394`',
        'Membangun representasi `Sentence Embedding` menggunakan model `all-MiniLM-L6-v2` (vektor `384` dimensi), menghasilkan matriks embedding berukuran `475 × 384`',
        'Menghitung skor kemiripan `Cosine Similarity` antara vektor kueri dan seluruh 475 vektor dokumen produk secara identik pada kedua metode',
      ],
      verifiedFindings: [
        'Dimensi matriks TF-IDF: `475 × 5.394` (`5.394` term vocabulary)',
        'Dimensi matriks Sentence Embedding (`all-MiniLM-L6-v2`): `475 × 384` (`384` dimensi; batas input `256` token tanpa chunking)',
      ],
      scopeBoundary:
        'Korpus, prapemrosesan, dan fungsi kemiripan Cosine Similarity dibuat identik untuk kedua metode.',
    },
    {
      id: 'ir-step-3-pooling',
      stepNumber: '03',
      title: 'Benchmark, Pooling & Anotasi Relevansi (qrels)',
      subtitle: '30 Query · 300 Hasil Top-5 → 293 Pasangan Unik Dinilai (0–3)',
      toolOrPlatform: 'Top-5 Pooling · Relevance Judgement Bertingkat (0–3)',
      summary:
        'Mengambil Top-5 hasil pencarian dari kedua metode pada 30 benchmark query (`300` total hasil), melakukan deduplikasi (pooling) menjadi `293` pasangan kueri–dokumen unik, lalu menilai relevansinya secara bertingkat (`0–3`) sebagai ground truth (`qrels`).',
      activities: [
        'Menyusun `30` benchmark query berbahasa natural untuk skenario pencarian sepatu lari',
        'Mengambil Top-5 hasil dari TF-IDF (`150` hasil) dan Top-5 dari Sentence Embedding (`150` hasil) = `300` hasil gabungan',
        'Melakukan deduplikasi (pooling) menjadi `293` pasangan kueri–dokumen unik',
        'Memberikan skor relevansi bertingkat `0–3` pada setiap pasangan dan menyimpannya sebagai `qrels` (ground truth)',
      ],
      verifiedFindings: [
        '`300` hasil Top-5 menghasilkan `293` pasangan unik setelah deduplikasi, menunjukkan perbedaan kandidat yang cukup besar antara pendekatan leksikal dan semantik',
        'Skala relevansi bertingkat `0–3` mendukung evaluasi kualitas urutan peringkat menggunakan metrik keluarga DCG',
      ],
      scopeBoundary:
        'Penilaian relevansi dilakukan oleh satu annotator sehingga kesepakatan antar-annotator tidak dapat dihitung (tercatat pada keterbatasan penelitian).',
    },
    {
      id: 'ir-step-4-eval',
      stepNumber: '04',
      title: 'Evaluasi nDCG@5 & Analisis Kualitatif',
      subtitle: 'Sentence Embedding (0,6825) vs TF-IDF (0,6492) + Analisis Q14 & Q4',
      toolOrPlatform: 'DCG@5 · IDCG@5 · nDCG@5 · Error Analysis',
      summary:
        'Menghitung `DCG@5`, `IDCG@5`, dan `nDCG@5` per kueri lalu merata-ratakannya di seluruh 30 kueri, dilanjutkan dengan analisis kualitatif pada kueri yang memiliki selisih performa terbesar (`Q14` dan `Q4`).',
      activities: [
        'Menghitung `DCG@5`, `IDCG@5`, dan `nDCG@5` pada masing-masing dari 30 kueri tolok ukur',
        'Merangkum statistik distribusi nDCG@5: Rata-rata (`0,6825` vs `0,6492`), Median (`0,6835` vs `0,6876`), Standar deviasi (`0,2130` vs `0,2156`), Minimum (`0,3246` vs `0,1847`), dan Maksimum (`1,0000` vs `1,0000`)',
        'Melakukan analisis kesalahan (error analysis) pada `Q14 (stable running shoes for daily training)` (`1,0000` vs `0,3649`) dan `Q4 (comfortable during long runs)` (`0,4643` vs `0,9031`)',
      ],
      verifiedFindings: [
        'Sentence Embedding (`all-MiniLM-L6-v2`) unggul tipis secara rata-rata (`0,6825` vs `0,6492`; selisih `0,0333`) dan lebih konsisten pada nilai minimum (`0,3246` vs `0,1847`)',
        'Tidak ada metode yang menang di semua kasus: Sentence Embedding unggul pada kueri konseptual (`Q14`), sedangkan TF-IDF tetap unggul saat istilah kunci tertulis secara eksplisit (`Q4`)',
      ],
      scopeBoundary:
        'Selisih rata-rata (`0,0333`) tergolong kecil dan belum diuji signifikansi statistiknya.',
      evidence: {
        id: 'ev-ir-results',
        title: 'Grafik Evaluasi nDCG@5, Tabel Statistik & Temuan (`03_findings_and_limitations.png`)',
        src: '/assets/projects/semantic-retrieval-running-shoes/03_findings_and_limitations.png',
        alt: 'Halaman hasil utama menampilkan grafik Rata-rata nDCG@5, grafik Q14 vs Q4, tabel metrik nDCG@5, Temuan & Insight, serta Keterbatasan',
        taskOrSourceLabel: 'Hasil Utama, Temuan & Keterbatasan Skripsi (Halaman 2)',
        observedFacts:
          'Menampilkan bagian `HASIL UTAMA`, `TEMUAN & INSIGHT`, serta `KETERBATASAN` secara lengkap.',
        analyticalInterpretation:
          'Menyajikan bukti kuantitatif sekaligus transparansi metodologis mengenai batas berlaku penelitian.',
      },
    },
    {
      id: 'ir-step-5-streamlit',
      stepNumber: '05',
      title: 'Prototipe Aplikasi Web Interaktif Streamlit',
      subtitle: 'Input Query Bahasa Natural, Pemilihan Metode & Skor Kemiripan',
      toolOrPlatform: 'Python · Streamlit · joblib',
      summary:
        'Menyajikan hasil penelitian ke dalam prototipe aplikasi web interaktif berbasis Streamlit di mana pengguna dapat mengetik kueri pencarian, memilih metode (`TF-IDF` atau `Sentence Embedding`), dan melihat daftar rekomendasi sepatu lari beserta skor kemiripannya.',
      activities: [
        'Menyimpan artefak model dan matriks representasi menggunakan `joblib` untuk pemuatan cepat',
        'Membangun antarmuka aplikasi web Streamlit yang menampilkan hasil peringkat produk beserta skor Cosine Similarity untuk masing-masing metode',
      ],
      verifiedFindings: [
        'Menghubungkan eksperimen evaluasi IR offline menjadi prototipe sistem pencarian dan rekomendasi produk yang dapat diuji secara interaktif',
      ],
      scopeBoundary:
        'Tahap 5 dari alur kerja analisis yang terdokumentasi (Halaman 1).',
    },
  ] satisfies ProcessNode[],
  keyFindings: [
    {
      titleEn: 'Higher Mean & Stronger Worst-Case Floor',
      titleId: 'Unggul Tipis Secara Rata-rata & Nilai Minimum Lebih Konsisten',
      bodyEn:
        'Sentence Embedding (`all-MiniLM-L6-v2`) achieved a slightly higher mean nDCG@5 (`0.6825` vs. `0.6492`; difference `0.0333`) and greater consistency with a minimum score of `0.3246` compared to `0.1847` for TF-IDF.',
      bodyId:
        'Sentence Embedding (`all-MiniLM-L6-v2`) unggul tipis secara rata-rata (`0,6825` vs `0,6492`; selisih `0,0333`) dan lebih konsisten dengan nilai minimum `0,3246` vs `0,1847` pada TF-IDF.',
    },
    {
      titleEn: 'Conceptual Query Advantage — Q14 (1.0000 vs. 0.3649)',
      titleId: 'Keunggulan pada Kueri Konseptual — Q14 (1,0000 vs 0,3649)',
      bodyEn:
        'On Q14 ("stable running shoes for daily training"), Sentence Embedding reached `1.0000` vs. `0.3649` for TF-IDF because the top documents expressed stability and daily training concepts through related terminology.',
      bodyId:
        'Pada Q14 ("stable running shoes for daily training"), Sentence Embedding mencapai `1,0000` vs `0,3649` karena dokumen teratas memuat konsep stabilitas dan penggunaan harian secara terkait.',
    },
    {
      titleEn: 'Explicit Keyword Strength — Q4 (0.9031 vs. 0.4643)',
      titleId: 'Kekuatan Istilah Eksplisit — Q4 (0,9031 vs 0,4643)',
      bodyEn:
        'TF-IDF remained strong when terms were stated explicitly: on Q4 ("comfortable during long runs"), TF-IDF scored `0.9031` vs. `0.4643` because top documents directly contained the words "comfortable" and "cushioning".',
      bodyId:
        'TF-IDF masih kuat bila istilah dinyatakan eksplisit: pada Q4 ("comfortable during long runs"), TF-IDF mencapai `0,9031` vs `0,4643` karena dokumen teratas memuat kata "comfortable" dan "cushioning" secara langsung.',
    },
    {
      titleEn: 'Practical Implication for Search Architecture',
      titleId: 'Implikasi Pemilihan Metode Pencarian',
      bodyEn:
        'No single retrieval method won across all 30 queries; practical system design should account for user query patterns.',
      bodyId:
        'Tidak ada metode yang menang di semua kasus, sehingga pemilihan metode perlu mempertimbangkan pola kueri pengguna.',
    },
  ],
  limitations: [
    {
      titleEn: 'Single-Annotator Relevance Judgements',
      titleId: 'Penilaian Relevansi oleh Satu Annotator',
      bodyEn:
        'Relevance judgements (`0–3` across 293 pooled pairs) were performed by a single annotator, so inter-annotator agreement could not be calculated.',
      bodyId:
        'Penilaian relevansi oleh satu annotator, sehingga kesepakatan antar-annotator tidak dapat dihitung.',
    },
    {
      titleEn: 'Corpus Scope & Unverified Statistical Significance',
      titleId: 'Cakupan Dataset & Signifikansi Statistik Belum Diuji',
      bodyEn:
        'Evaluation was conducted on 30 queries and 475 English documents; findings apply specifically to this dataset and scenario, and the modest mean difference (`0.0333`) has not been tested for statistical significance.',
      bodyId:
        'Hanya 30 query dan 475 dokumen berbahasa Inggris, sehingga hasil berlaku pada dataset dan skenario ini; selisih rata-rata (`0,0333`) tergolong kecil dan belum diuji signifikansi statistiknya.',
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
      title: 'Pembersihan Korpus RunRepeat & Penggabungan 8 Atribut',
      primaryValue: '948 → 475 Dokumen',
      description:
        'Menyaring dataset mentah `948 × 30` menjadi `475` dokumen bersih tanpa melakukan imputasi nilai kosong.',
      details: [
        'Menghapus baris yang seluruh 8 atribut teksnya kosong',
        'Normalisasi encoding, delimiter, spasi, dan huruf kecil (lowercase)',
        'Menggabungkan 8 atribut teks menjadi satu `semantic text` per produk sepatu lari',
      ],
      attribution: 'Sumber: Dokumen Portofolio Skripsi (Halaman 1 — Persiapan Data)',
    },
    {
      id: 'ir-card-models',
      category: 'Perbandingan Representasi Terkontrol',
      title: 'TF-IDF (5.394 Term) vs all-MiniLM-L6-v2 (384 Dimensi)',
      primaryValue: '475×5.394 vs 475×384',
      description:
        'Korpus, prapemrosesan, dan perhitungan Cosine Similarity dibuat identik agar perbandingan kedua metode berlangsung adil.',
      details: [
        'Baseline TF-IDF: Vocabulary `5.394` term → matriks `475 × 5.394` (`scikit-learn`)',
        'Sentence Embedding: `all-MiniLM-L6-v2` → matriks vektor `475 × 384` (`sentence-transformers`)',
        'Pooling Top-5 pada 30 query (`300` hasil) → `293` pasangan unik dinilai bertingkat `0–3` (`qrels`)',
      ],
      attribution: 'Sumber: Dokumen Portofolio Skripsi (Halaman 1 — Representasi & Benchmark)',
    },
    {
      id: 'ir-card-evaluation',
      category: 'Evaluasi nDCG@5 & Pola Kueri',
      title: 'Rata-rata 0,6825 vs 0,6492 & Karakteristik Kueri',
      primaryValue: 'Selisih +0,0333',
      description:
        'Sentence Embedding unggul tipis secara rata-rata (`0,6825`) dan nilai minimum (`0,3246` vs `0,1847`), dengan keunggulan bergantung pada jenis kueri.',
      details: [
        'Unggul Konseptual (`Q14`): `1,0000` (Sentence Embedding) vs `0,3649` (TF-IDF) pada "stable running shoes for daily training"',
        'Unggul Leksikal Eksplisit (`Q4`): `0,9031` (TF-IDF) vs `0,4643` (Sentence Embedding) pada "comfortable during long runs"',
        'Prototipe Interaktif: Disajikan dalam aplikasi web `Streamlit`',
      ],
      attribution: 'Sumber: Dokumen Portofolio Skripsi (Halaman 2 — Hasil Utama & Temuan)',
    },
  ] satisfies FlashCardItem[],
  publicEvidence: [
    {
      id: 'ir-ev-1-charts',
      title: 'Grafik Rata-rata nDCG@5, Selisih Kueri Terbesar & Tabel Statistik (`01_ndcg_charts_and_table.png`)',
      src: '/assets/projects/semantic-retrieval-running-shoes/01_ndcg_charts_and_table.png',
      alt: 'Grafik batang Rata-rata nDCG@5 (0,6492 vs 0,6825), grafik Q14 dan Q4, serta tabel 5 metrik statistik nDCG@5',
      taskOrSourceLabel: 'Hasil Utama Skripsi · Evaluasi Kuantitatif (Halaman 2)',
      observedFacts:
        'Menampilkan grafik Rata-rata nDCG@5 (`0.6492` vs `0.6825`), grafik Query dengan selisih terbesar (`Q14`: `0.36` vs `1.00`; `Q4`: `0.90` vs `0.46`), serta tabel metrik nDCG@5 (`Rata-rata`, `Median`, `Standar deviasi`, `Minimum`, `Maksimum`).',
      analyticalInterpretation:
        'Menunjukkan distribusi performa kedua metode di seluruh 30 benchmark query.',
    },
    {
      id: 'ir-ev-2-workflow',
      title: 'Spesifikasi Alur Kerja Analisis 5 Tahap (`02_research_workflow_overview.png`)',
      src: '/assets/projects/semantic-retrieval-running-shoes/02_research_workflow_overview.png',
      alt: 'Tabel 5 tahap alur kerja analisis dari dokumen portofolio skripsi',
      taskOrSourceLabel: 'Metodologi Skripsi · Alur Kerja Analisis (Halaman 1)',
      observedFacts:
        'Merinci 5 tahapan analisis: (1) Persiapan data, (2) Representasi dokumen, (3) Benchmark & anotasi, (4) Evaluasi, dan (5) Prototipe.',
      analyticalInterpretation:
        'Mendokumentasikan alur eksperimen dari pembersihan data RunRepeat hingga penyajian aplikasi Streamlit.',
    },
    {
      id: 'ir-ev-3-findings',
      title: 'Temuan, Insight & Keterbatasan Lengkap (`03_findings_and_limitations.png`)',
      src: '/assets/projects/semantic-retrieval-running-shoes/03_findings_and_limitations.png',
      alt: 'Halaman 2 dokumen portofolio skripsi menampilkan grafik, tabel, Temuan & Insight, dan Keterbatasan',
      taskOrSourceLabel: 'Temuan & Keterbatasan Skripsi (Halaman 2)',
      observedFacts:
        'Menampilkan bagian `TEMUAN & INSIGHT` dan `KETERBATASAN` beserta grafik dan tabel hasil utama.',
      analyticalInterpretation:
        'Mempertahankan kesimpulan analitis dan keterbatasan metodologis sesuai laporan penelitian.',
    },
  ] satisfies EvidenceItem[],
};

