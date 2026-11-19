export interface CertificatePageAsset {
  pageNumber: number;
  imageUrl: string;
  width: number;
  height: number;
  aspectRatio: number;
  labelEn: string;
  labelId: string;
}

export interface CertificateItem {
  index: string;
  id: string;
  title: string;
  titleId: string;
  organization: string;
  organizationShort: string;
  dateLabel: string;
  dateLabelId: string;
  secondaryMeta: string;
  secondaryMetaId: string;
  description: string;
  descriptionId: string;
  credentialRef: string;
  orientation: 'landscape' | 'portrait';
  pdfUrl: string;
  pages: CertificatePageAsset[];
}

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    index: '01',
    id: 'karirnex-bootcamp-data-analyst',
    title: 'Certificate of Appreciation — Bootcamp Data Analyst',
    titleId: 'Certificate of Appreciation — Bootcamp Data Analyst',
    organization: 'Karirnex by PT Ebiz Karisma Internasional',
    organizationShort: 'Karirnex',
    dateLabel: '2, 4, 7, and 9 September 2026',
    dateLabelId: '2, 4, 7, dan 9 September 2026',
    secondaryMeta: 'Predicate: Intermediate · 15 Learning Hours (JP)',
    secondaryMetaId: 'Predikat: Intermediate · 15 Jam Pelajaran (JP)',
    description:
      'Completed 15 hours of intensive training and mini-project evaluation across Data Formatting & Cleansing, Systematic Data Analysis, Google BigQuery & SQL, Google Colab & Python, and Power BI Dashboard Visualization.',
    descriptionId:
      'Menyelesaikan 15 jam pelatihan intensif dan evaluasi proyek kecil mencakup Format & Pembersihan Data, Sistematis Data Analyst, Google BigQuery & SQL, Google Colab & Python, serta Visualisasi Data & Dashboard menggunakan Power BI.',
    credentialRef: 'No. 2132/B-7/26DA7/KRX/IX/2026',
    orientation: 'landscape',
    pdfUrl: '/assets/aistudio/sertif-bootcamp-data-analyst_6df7ebad.pdf',
    pages: [
      {
        pageNumber: 1,
        imageUrl: '/assets/certificates/01-karirnex-page-1.png',
        width: 2339,
        height: 1655,
        aspectRatio: 2339 / 1655,
        labelEn: 'Page 1 — Certificate of Appreciation',
        labelId: 'Halaman 1 — Sertifikat Penghargaan',
      },
      {
        pageNumber: 2,
        imageUrl: '/assets/certificates/01-karirnex-page-2.png',
        width: 2339,
        height: 1655,
        aspectRatio: 2339 / 1655,
        labelEn: 'Page 2 — Training Materials (15 JP)',
        labelId: 'Halaman 2 — Materi Pelatihan (15 JP)',
      },
    ],
  },
  {
    index: '02',
    id: 'ibm-skillsbuild-ai-agent-data-analysis',
    title: 'Data - AI Agent for Data Analysis',
    titleId: 'Data - AI Agent for Data Analysis',
    organization: 'IBM SkillsBuild, hosted by Hacktiv8 Indonesia',
    organizationShort: 'IBM SkillsBuild × Hacktiv8',
    dateLabel: 'Training: 19–22 June 2026 · Issued: 28 July 2026',
    dateLabelId: 'Pelatihan: 19–22 Juni 2026 · Diterbitkan: 28 Juli 2026',
    secondaryMeta: 'IBM SkillsBuild University Education · 9 Learning Hours',
    secondaryMetaId: 'IBM SkillsBuild University Education · 9 Jam Pembelajaran',
    description:
      'Completed the IBM SkillsBuild University Education program hosted by Hacktiv8 Indonesia and delivered a final AI Agent for Data Analysis project.',
    descriptionId:
      'Menyelesaikan program IBM SkillsBuild University Education yang diselenggarakan oleh Hacktiv8 Indonesia dan menyelesaikan proyek akhir AI Agent for Data Analysis.',
    credentialRef: 'ID: 01406/H8/CSR/ISUE/V/2026',
    orientation: 'landscape',
    pdfUrl: '/assets/aistudio/Data_-_AI_Agent_for_Data_Analysis_IBM_a5689552.pdf',
    pages: [
      {
        pageNumber: 1,
        imageUrl: '/assets/certificates/02-ibm-hacktiv8-page-1.png',
        width: 2339,
        height: 1654,
        aspectRatio: 2339 / 1654,
        labelEn: 'Certificate of Accomplishment',
        labelId: 'Sertifikat Penyelesaian',
      },
    ],
  },
  {
    index: '03',
    id: 'amikom-instruktur-office-administration-itc',
    title: 'Instruktur Office Administration',
    titleId: 'Instruktur Office Administration',
    organization: 'Universitas AMIKOM Yogyakarta',
    organizationShort: 'Universitas AMIKOM Yogyakarta',
    dateLabel: 'Event: 5–16 August 2024 · Issued: 2 December 2024',
    dateLabelId: 'Acara: 5–16 Agustus 2024 · Diterbitkan: 2 Desember 2024',
    secondaryMeta: 'Event: Introduction To Computer (ITC) · AMCC AMIKOM',
    secondaryMetaId: 'Acara: Introduction To Computer (ITC) · AMCC AMIKOM',
    description:
      'Awarded for active contribution as Office Administration Instructor during the Introduction To Computer (ITC) training program at Universitas AMIKOM Yogyakarta.',
    descriptionId:
      'Diberikan atas peran aktif sebagai Instruktur Office Administration pada acara pelatihan Introduction To Computer (ITC) yang diselenggarakan di Universitas AMIKOM Yogyakarta.',
    credentialRef: 'No. 09/C/PAN-ITC/AMCC-AMIKOM/XI/2024',
    orientation: 'portrait',
    pdfUrl: '/assets/aistudio/E_Sertifikat_Instruktur_Office_Administration_ITC_cbee573f.pdf',
    pages: [
      {
        pageNumber: 1,
        imageUrl: '/assets/certificates/03-amikom-itc-page-1.png',
        width: 1656,
        height: 2339,
        aspectRatio: 1656 / 2339,
        labelEn: 'e-Sertifikat Instruktur ITC',
        labelId: 'e-Sertifikat Instruktur ITC',
      },
    ],
  },
  {
    index: '04',
    id: 'myskill-data-driven-decision',
    title: 'Data Driven-Decision',
    titleId: 'Data Driven-Decision',
    organization: 'MySkill (PT Linimuda Inspirasi Negeri)',
    organizationShort: 'MySkill',
    dateLabel: '22 March 2025',
    dateLabelId: '22 Maret 2025',
    secondaryMeta: 'Topic: Basic Data · Learning & Self-Practice: 1 Hour',
    secondaryMetaId: 'Topik: Basic Data · Durasi Belajar & Praktik Mandiri: 1 Jam',
    description:
      'Certificate of Course Completion in the Basic Data track focusing on structured data-driven decision-making fundamentals.',
    descriptionId:
      'Sertifikat penyelesaian kursus pada topik Basic Data yang berfokus pada fondasi pengambilan keputusan berbasis data terstruktur.',
    credentialRef: 'MS-22/3/2025-J5Q71fiDFwCZmjNWSc3V',
    orientation: 'landscape',
    pdfUrl: '/assets/aistudio/Data_Driven_Decission_0b6f3571.pdf',
    pages: [
      {
        pageNumber: 1,
        imageUrl: '/assets/certificates/04-myskill-data-driven-decision-page-1.png',
        width: 2000,
        height: 1125,
        aspectRatio: 2000 / 1125,
        labelEn: 'Certificate of Course Completion',
        labelId: 'Sertifikat Penyelesaian Kursus',
      },
    ],
  },
  {
    index: '05',
    id: 'myskill-understanding-business-process',
    title: 'Understanding Business Process',
    titleId: 'Understanding Business Process',
    organization: 'MySkill (PT Linimuda Inspirasi Negeri)',
    organizationShort: 'MySkill',
    dateLabel: '1 March 2025',
    dateLabelId: '1 Maret 2025',
    secondaryMeta: 'Topic: Basic Data · Learning & Self-Practice: 1 Hour',
    secondaryMetaId: 'Topik: Basic Data · Durasi Belajar & Praktik Mandiri: 1 Jam',
    description:
      'Certificate of Course Completion in the Basic Data track covering core business process mapping and operational context for data analysis.',
    descriptionId:
      'Sertifikat penyelesaian kursus pada topik Basic Data yang membahas pemetaan proses bisnis inti dan konteks operasional untuk analisis data.',
    credentialRef: 'MS-1/3/2025-1dVw1P3qfxAiLteRdtNH',
    orientation: 'landscape',
    pdfUrl: '/assets/aistudio/Understanding_Business_Process_affd10f4.pdf',
    pages: [
      {
        pageNumber: 1,
        imageUrl: '/assets/certificates/05-myskill-business-process-page-1.png',
        width: 2000,
        height: 1125,
        aspectRatio: 2000 / 1125,
        labelEn: 'Certificate of Course Completion',
        labelId: 'Sertifikat Penyelesaian Kursus',
      },
    ],
  },
  {
    index: '06',
    id: 'myskill-business-value-from-data',
    title: 'Business Value From Data',
    titleId: 'Business Value From Data',
    organization: 'MySkill (PT Linimuda Inspirasi Negeri)',
    organizationShort: 'MySkill',
    dateLabel: '9 April 2025',
    dateLabelId: '9 April 2025',
    secondaryMeta: 'Topic: Basic Data · Learning & Self-Practice: 1 Hour',
    secondaryMetaId: 'Topik: Basic Data · Durasi Belajar & Praktik Mandiri: 1 Jam',
    description:
      'Certificate of Course Completion in the Basic Data track examining how analytical outputs translate into measurable business value.',
    descriptionId:
      'Sertifikat penyelesaian kursus pada topik Basic Data mengenai cara menerjemahkan hasil analitik menjadi nilai bisnis yang terukur.',
    credentialRef: 'MS-9/4/2025-tks9bYHt1bKiblRHDd6N',
    orientation: 'landscape',
    pdfUrl: '/assets/aistudio/Business_Value_From_Data_a47cd99f.pdf',
    pages: [
      {
        pageNumber: 1,
        imageUrl: '/assets/certificates/06-myskill-business-value-page-1.png',
        width: 2000,
        height: 1125,
        aspectRatio: 2000 / 1125,
        labelEn: 'Certificate of Course Completion',
        labelId: 'Sertifikat Penyelesaian Kursus',
      },
    ],
  },
  {
    index: '07',
    id: 'myskill-data-story-vs-dashboard',
    title: 'Data Story vs Dashboard',
    titleId: 'Data Story vs Dashboard',
    organization: 'MySkill (PT Linimuda Inspirasi Negeri)',
    organizationShort: 'MySkill',
    dateLabel: '21 March 2025',
    dateLabelId: '21 Maret 2025',
    secondaryMeta: 'Topic: Basic Data · Learning & Self-Practice: 1 Hour',
    secondaryMetaId: 'Topik: Basic Data · Durasi Belajar & Praktik Mandiri: 1 Jam',
    description:
      'Certificate of Course Completion in the Basic Data track comparing narrative data storytelling with interactive KPI dashboarding.',
    descriptionId:
      'Sertifikat penyelesaian kursus pada topik Basic Data yang membandingkan penyampaian narasi data (data story) dengan dashboard KPI interaktif.',
    credentialRef: 'MS-21/3/2025-ApGdWjP4qrPDnPG7voRN',
    orientation: 'landscape',
    pdfUrl: '/assets/aistudio/Data_Story_vs_Dashboard_5df48882.pdf',
    pages: [
      {
        pageNumber: 1,
        imageUrl: '/assets/certificates/07-myskill-data-story-vs-dashboard-page-1.png',
        width: 2000,
        height: 1125,
        aspectRatio: 2000 / 1125,
        labelEn: 'Certificate of Course Completion',
        labelId: 'Sertifikat Penyelesaian Kursus',
      },
    ],
  },
  {
    index: '08',
    id: 'myskill-data-story',
    title: 'Data Story',
    titleId: 'Data Story',
    organization: 'MySkill (PT Linimuda Inspirasi Negeri)',
    organizationShort: 'MySkill',
    dateLabel: '12 March 2025',
    dateLabelId: '12 Maret 2025',
    secondaryMeta: 'Topic: Basic Data · Learning & Self-Practice: 1 Hour',
    secondaryMetaId: 'Topik: Basic Data · Durasi Belajar & Praktik Mandiri: 1 Jam',
    description:
      'Certificate of Course Completion in the Basic Data track covering structured communication of analytical findings through data storytelling.',
    descriptionId:
      'Sertifikat penyelesaian kursus pada topik Basic Data mengenai komunikasi temuan analitik secara terstruktur melalui data storytelling.',
    credentialRef: 'MS-12/3/2025-DN8SxmGt9Itb6G8wn2wz',
    orientation: 'landscape',
    pdfUrl: '/assets/aistudio/Data_Story_1adbd0b5.pdf',
    pages: [
      {
        pageNumber: 1,
        imageUrl: '/assets/certificates/08-myskill-data-story-page-1.png',
        width: 2000,
        height: 1125,
        aspectRatio: 2000 / 1125,
        labelEn: 'Certificate of Course Completion',
        labelId: 'Sertifikat Penyelesaian Kursus',
      },
    ],
  },
  {
    index: '09',
    id: 'myskill-understanding-data',
    title: 'Understanding Data',
    titleId: 'Understanding Data',
    organization: 'MySkill (PT Linimuda Inspirasi Negeri)',
    organizationShort: 'MySkill',
    dateLabel: '1 March 2025',
    dateLabelId: '1 Maret 2025',
    secondaryMeta: 'Topic: Basic Data · Learning & Self-Practice: 1 Hour',
    secondaryMetaId: 'Topik: Basic Data · Durasi Belajar & Praktik Mandiri: 1 Jam',
    description:
      'Certificate of Course Completion in the Basic Data track covering foundational data types, structures, and analytical readiness.',
    descriptionId:
      'Sertifikat penyelesaian kursus pada topik Basic Data yang mencakup tipe data dasar, struktur data, dan kesiapan analitik.',
    credentialRef: 'MS-1/3/2025-GKrUWZu2HYjlz5JOCH18',
    orientation: 'landscape',
    pdfUrl: '/assets/aistudio/Understanding_Data_4e03fed3.pdf',
    pages: [
      {
        pageNumber: 1,
        imageUrl: '/assets/certificates/09-myskill-understanding-data-page-1.png',
        width: 2000,
        height: 1125,
        aspectRatio: 2000 / 1125,
        labelEn: 'Certificate of Course Completion',
        labelId: 'Sertifikat Penyelesaian Kursus',
      },
    ],
  },
  {
    index: '10',
    id: 'myskill-data-to-insight',
    title: 'Data to Insight',
    titleId: 'Data to Insight',
    organization: 'MySkill (PT Linimuda Inspirasi Negeri)',
    organizationShort: 'MySkill',
    dateLabel: '15 March 2025',
    dateLabelId: '15 Maret 2025',
    secondaryMeta: 'Topic: Basic Data · Learning & Self-Practice: 1 Hour',
    secondaryMetaId: 'Topik: Basic Data · Durasi Belajar & Praktik Mandiri: 1 Jam',
    description:
      'Certificate of Course Completion in the Basic Data track focused on transforming raw datasets into actionable analytical insights.',
    descriptionId:
      'Sertifikat penyelesaian kursus pada topik Basic Data yang berfokus pada transformasi kumpulan data mentah menjadi wawasan analitik yang dapat ditindaklanjuti.',
    credentialRef: 'MS-15/3/2025-XX0lnS7PFHHZ4RStKk6m',
    orientation: 'landscape',
    pdfUrl: '/assets/aistudio/Data_to_Insight_73126667.pdf',
    pages: [
      {
        pageNumber: 1,
        imageUrl: '/assets/certificates/10-myskill-data-to-insight-page-1.png',
        width: 2000,
        height: 1125,
        aspectRatio: 2000 / 1125,
        labelEn: 'Certificate of Course Completion',
        labelId: 'Sertifikat Penyelesaian Kursus',
      },
    ],
  },
];
