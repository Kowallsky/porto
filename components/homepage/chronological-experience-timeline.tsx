'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  useReducedMotion,
} from 'motion/react';
import { useLocalizedPortfolio } from '@/lib/language-context';

export interface ChronologicalTimelineEntry {
  id: string;
  step: string;
  year: string;
  periodLabel: string;
  title: string;
  organization: string;
  contextLine: string;
  description: string;
  details: string[];
  isOriginMilestone?: boolean;
}

const TIMELINE_ENTRIES_EN: ChronologicalTimelineEntry[] = [
  {
    id: 'freelance-scraping-2026',
    step: '01',
    year: '2026',
    periodLabel: '2026',
    title: 'Freelance Data Collection & Web Scraping',
    organization: 'Independent Freelance Practice',
    contextLine: 'Project: US Immigration Law Firms Dataset',
    description:
      'Collected, cleaned, and integrated structured business directory data from public web sources using Python, including Sulekha and Google Maps.',
    details: [
      'Collected more than 900 source records across the two sources.',
      'Performed data cleaning, normalization, and quality checking.',
      'Used semi-automated collection with human interaction where CAPTCHA challenges occurred.',
      'Delivered a structured Excel dataset containing 500 final records.',
    ],
  },
  {
    id: 'karirnex-bootcamp-2026',
    step: '02',
    year: '2026',
    periodLabel: '2–9 July 2026',
    title: 'Data Analyst Bootcamp',
    organization: 'Karirnex',
    contextLine: 'Context: Automotive Sales Analysis',
    description:
      'Completed practical end-to-end data analytics training using automotive sales data.',
    details: [
      'Executed four separate analytical exercises across Microsoft Excel, Google BigQuery (SQL), Python, and Power BI.',
      'Examined Trade-In vs Non Trade-In pricing, branch transactions, and product category performance.',
      'Built an interactive Power BI dashboard communicating Task 4 findings (98 transactions, Rp26.02B total sales).',
    ],
  },
  {
    id: 'ibm-hacktiv8-agent-2026',
    step: '03',
    year: '2026',
    periodLabel: '19–22 June 2026',
    title: 'AI Data Analyst Agent',
    organization: 'IBM / Hacktiv8',
    contextLine: 'Context: AI and Workflow Automation Training',
    description:
      'Developed an AI Data Analyst Agent workflow using Langflow and Gemini models.',
    details: [
      'Sequential prompt-and-LLM workflow.',
      'CSV-based data analysis.',
      'Structured analytical output generation.',
      'Gemini model integration.',
    ],
  },
  {
    id: 'amikom-refactory-hackathon-2025',
    step: '04',
    year: '2025',
    periodLabel: '2025',
    title: 'Volunteer — AMIKOM × Refactory Hackathon',
    organization: 'AMIKOM × Refactory',
    contextLine: 'Role: Logistics',
    description:
      'Supported technical and logistical preparations for the coding marathon, including venue, network, and consumption arrangements.',
    details: [
      'Assisted participant registration.',
      'Provided guidance regarding competition rules and schedules.',
      'Supported event operations.',
    ],
  },
  {
    id: 'itc-office-instructor-2024',
    step: '05',
    year: '2024',
    periodLabel: '2024',
    title: 'Office Administration Instructor',
    organization: 'ITC — Universitas AMIKOM Yogyakarta',
    contextLine: 'Practical Microsoft Office & Excel Instruction',
    description:
      'Delivered practical instruction in Microsoft Office, with a primary emphasis on Microsoft Excel.',
    details: [
      'Excel formulas and Pivot Tables.',
      'Spreadsheet structure and organization.',
      'Tabular analysis and reporting.',
      'Practical office administration workflows.',
    ],
  },
  {
    id: 'amikom-informatics-2022',
    step: '06',
    year: '2022',
    periodLabel: '2022 — Origin',
    title: 'Informatics',
    organization: 'Universitas AMIKOM Yogyakarta',
    contextLine: "Bachelor's Degree in Informatics · GPA 3.60 / 4.00",
    description:
      'Academic foundation in informatics covering data processing, information retrieval research, programming, and analytical engineering fundamentals.',
    details: [
      'Natural-language product retrieval research.',
      'TF-IDF and sentence embedding comparison.',
      'Data structures and SQL querying.',
      'Programmatic data analysis.',
    ],
    isOriginMilestone: true,
  },
];

const TIMELINE_ENTRIES_ID: ChronologicalTimelineEntry[] = [
  {
    id: 'freelance-scraping-2026',
    step: '01',
    year: '2026',
    periodLabel: '2026',
    title: 'Freelance Data Collection & Web Scraping',
    organization: 'Praktik Freelance Independen',
    contextLine: 'Proyek: Dataset Firma Hukum Imigrasi AS',
    description:
      'Mengumpulkan, membersihkan, dan mengintegrasikan data direktori bisnis terstruktur dari sumber web publik menggunakan Python, termasuk Sulekha dan Google Maps.',
    details: [
      'Mengumpulkan lebih dari 900 baris data sumber dari kedua platform.',
      'Melakukan pembersihan data, normalisasi, dan pemeriksaan kualitas.',
      'Menggunakan pengumpulan semi-otomatis dengan interaksi manusia saat menghadapi tantangan CAPTCHA.',
      'Menghasilkan dataset Excel terstruktur yang berisi 500 baris data akhir.',
    ],
  },
  {
    id: 'karirnex-bootcamp-2026',
    step: '02',
    year: '2026',
    periodLabel: '2–9 Juli 2026',
    title: 'Data Analyst Bootcamp',
    organization: 'Karirnex',
    contextLine: 'Konteks: Analisis Penjualan Otomotif',
    description:
      'Menyelesaikan pelatihan analitik data praktis secara menyeluruh menggunakan data penjualan otomotif.',
    details: [
      'Menjalankan empat latihan analitik terpisah menggunakan Microsoft Excel, Google BigQuery (SQL), Python, dan Power BI.',
      'Mengevaluasi harga Trade-In vs Non Trade-In, transaksi cabang, serta performa kategori produk.',
      'Membangun dashboard Power BI interaktif untuk mengomunikasikan temuan Task 4 (98 transaksi, total penjualan Rp26,02 Miliar).',
    ],
  },
  {
    id: 'ibm-hacktiv8-agent-2026',
    step: '03',
    year: '2026',
    periodLabel: '19–22 Juni 2026',
    title: 'AI Data Analyst Agent',
    organization: 'IBM / Hacktiv8',
    contextLine: 'Konteks: Pelatihan AI dan Otomasi Alur Kerja',
    description:
      'Mengembangkan alur kerja Agen Analis Data AI menggunakan Langflow dan model Gemini.',
    details: [
      'Alur kerja prompt-dan-LLM berurutan.',
      'Analisis data berbasis CSV.',
      'Pembuatan output analitik terstruktur.',
      'Integrasi model Gemini.',
    ],
  },
  {
    id: 'amikom-refactory-hackathon-2025',
    step: '04',
    year: '2025',
    periodLabel: '2025',
    title: 'Volunteer — AMIKOM × Refactory Hackathon',
    organization: 'AMIKOM × Refactory',
    contextLine: 'Peran: Logistik',
    description:
      'Mendukung persiapan teknis dan logistik untuk maraton pemrograman, termasuk pengaturan tempat, jaringan, dan konsumsi.',
    details: [
      'Membantu registrasi peserta.',
      'Memberikan panduan terkait peraturan dan jadwal kompetisi.',
      'Mendukung operasional acara.',
    ],
  },
  {
    id: 'itc-office-instructor-2024',
    step: '05',
    year: '2024',
    periodLabel: '2024',
    title: 'Office Administration Instructor',
    organization: 'ITC — Universitas AMIKOM Yogyakarta',
    contextLine: 'Pengajaran Praktis Microsoft Office & Excel',
    description:
      'Memberikan pengajaran praktis Microsoft Office, dengan penekanan utama pada Microsoft Excel.',
    details: [
      'Rumus Excel dan Pivot Table.',
      'Struktur dan pengorganisasian spreadsheet.',
      'Analisis tabular dan pelaporan.',
      'Alur kerja administrasi perkantoran praktis.',
    ],
  },
  {
    id: 'amikom-informatics-2022',
    step: '06',
    year: '2022',
    periodLabel: '2022 — Awal Perjalanan',
    title: 'Informatics',
    organization: 'Universitas AMIKOM Yogyakarta',
    contextLine: 'Sarjana Informatika · IPK 3.60 / 4.00',
    description:
      'Fondasi akademik di bidang informatika yang mencakup pemrosesan data, penelitian temu kembali informasi (information retrieval), pemrograman, dan dasar-dasar rekayasa analitik.',
    details: [
      'Penelitian pencarian produk berbasis bahasa alami.',
      'Komparasi TF-IDF dan sentence embedding.',
      'Struktur data dan kueri SQL.',
      'Analisis data terprogram.',
    ],
    isOriginMilestone: true,
  },
];

// Each entry on desktop pinned timeline has a consistent vertical stride so the
// active item aligns cleanly with the reading focal zone as the user scrolls.
const DESKTOP_ITEM_STRIDE_PX = 252;

export function ChronologicalExperienceTimeline() {
  const { isId } = useLocalizedPortfolio();
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isDesktopPinned, setIsDesktopPinned] = useState<boolean>(false);

  const entries = isId ? TIMELINE_ENTRIES_ID : TIMELINE_ENTRIES_EN;
  const totalEntries = entries.length;

  useEffect(() => {
    const checkViewport = () => {
      if (typeof window === 'undefined') return;
      // Enable pinned scroll on desktop screens (>= 1024px) with adequate height (>= 660px)
      setIsDesktopPinned(
        window.innerWidth >= 1024 &&
          window.innerHeight >= 660 &&
          !shouldReduceMotion
      );
    };
    checkViewport();
    window.addEventListener('resize', checkViewport, { passive: true });
    return () => window.removeEventListener('resize', checkViewport);
  }, [shouldReduceMotion]);

  // Track scroll progress through the Experience section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: isDesktopPinned ? ['start start', 'end end'] : ['start 70%', 'end 35%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  // Update activeIndex only when crossing into a new entry segment (max 5 updates across scroll)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const clamped = Math.max(0, Math.min(0.9999, latest));
    const nextIdx = Math.min(
      totalEntries - 1,
      Math.floor(clamped * totalEntries)
    );
    setActiveIndex((prev) => (prev !== nextIdx ? nextIdx : prev));
  });

  // Desktop vertical translation of the timeline list as scroll progresses from 0 to 1
  const maxTranslateY = -((totalEntries - 1) * DESKTOP_ITEM_STRIDE_PX);
  const listTranslateY = useTransform(
    smoothProgress,
    [0.04, 0.94],
    [0, maxTranslateY]
  );

  // Subtle ambient background glow drift synchronized with scroll progress
  const bgGlowX = useTransform(
    smoothProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-70, 70]
  );
  const bgGlowY = useTransform(
    smoothProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-40, 50]
  );

  // Allow clicking any milestone node on the progress bar or timeline to jump smoothly to that entry
  const scrollToEntry = (index: number) => {
    setActiveIndex(index);
    if (!sectionRef.current || typeof window === 'undefined') return;

    if (isDesktopPinned) {
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrollableDistance =
        sectionRef.current.offsetHeight - window.innerHeight;
      if (scrollableDistance > 0) {
        const targetRatio =
          totalEntries > 1 ? index / (totalEntries - 1) : 0;
        const targetScrollY =
          sectionTop + scrollableDistance * (0.05 + targetRatio * 0.88);
        window.scrollTo({
          top: targetScrollY,
          behavior: shouldReduceMotion ? 'auto' : 'smooth',
        });
      }
    } else {
      const itemEl = document.getElementById(
        `timeline-entry-${entries[index]?.id}`
      );
      if (itemEl) {
        itemEl.scrollIntoView({
          behavior: shouldReduceMotion ? 'auto' : 'smooth',
          block: 'center',
        });
      }
    }
  };

  const activeEntry = entries[activeIndex] ?? entries[0];

  return (
    <section
      ref={sectionRef}
      id="experience"
      aria-labelledby="experience-heading"
      className={`relative scroll-mt-20 ${
        isDesktopPinned ? 'lg:h-[340vh]' : 'py-24 sm:py-32'
      }`}
    >
      {/* =================================================================== */}
      {/* SECTION BACKGROUND — Quiet Midnight & Petrol/Steel Atmosphere       */}
      {/* Feathered top/bottom crossfade so it blends seamlessly with         */}
      {/* Selected Work above and Capabilities below                          */}
      {/* =================================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-24 inset-x-0 overflow-hidden mask-atmosphere-blend"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,31,45,0.92)_0%,rgba(6,27,51,0.96)_45%,rgba(16,59,80,0.48)_78%,rgba(2,31,45,0.92)_100%)]" />
        <div className="absolute inset-x-0 top-1/3 h-[380px] bg-gradient-to-r from-transparent via-[#5B9BD5]/8 to-transparent blur-3xl" />
        <motion.div
          style={{ x: bgGlowX, y: bgGlowY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[560px] w-[860px] rounded-full bg-radial from-[#5B9BD5]/14 via-[#103B50]/26 to-transparent blur-3xl"
        />
        <div className="absolute bottom-1/4 right-[8%] h-[420px] w-[480px] rounded-full bg-radial from-[#FF6C65]/8 via-[#1E4D8C]/14 to-transparent blur-3xl" />
      </div>

      {/* =================================================================== */}
      {/* PINNED VIEWPORT CONTAINER (Desktop) / NATURAL FLOW (Mobile/Tablet)  */}
      {/* =================================================================== */}
      <div
        className={
          isDesktopPinned
            ? 'sticky top-0 z-10 flex h-screen w-full flex-col justify-between overflow-hidden pt-8 pb-12 xl:pt-10 xl:pb-14'
            : 'relative z-10 w-full'
        }
      >
        <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col px-5 sm:px-8 lg:px-12">
          {/* =============================================================== */}
          {/* 1. SECTION HEADER + DYNAMIC YEAR INDICATOR & PROGRESS BAR       */}
          {/* =============================================================== */}
          <div className="shrink-0">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div>
                <p className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#FF6C65]">
                  {isId
                    ? '03. Pengalaman & Pendidikan'
                    : '03. Experience & Education'}
                </p>
                <h2
                  id="experience-heading"
                  className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-[#EAF1F8] sm:text-4xl lg:text-5xl"
                >
                  LET&apos;S GO BACK IN TIME.
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-[#8AB9DC] lg:text-right">
                {isId
                  ? 'Perjalanan melalui pengalaman, pendidikan, dan pelatihan praktis yang membentuk langkah saya di bidang analitik data dan otomasi AI.'
                  : 'A journey through the experiences, education, and practical training that shaped my path in data analytics and AI automation.'}
              </p>
            </div>

            {/* Dynamic Year Indicator & Synchronized Timeline Progress Bar */}
            <div className="mt-6 rounded-2xl border border-[#8AB9DC]/16 bg-[#021829]/75 px-4 py-3.5 backdrop-blur-md shadow-[0_14px_38px_rgba(1,8,18,0.5)] sm:px-6 sm:py-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                {/* Active Year Display + Current Entry Period */}
                <div className="flex items-baseline gap-3">
                  <span className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-[#8AB9DC]">
                    {isId ? 'Tahun Aktif' : 'Active Year'}
                  </span>
                  <motion.span
                    key={activeEntry.year}
                    initial={
                      shouldReduceMotion ? false : { opacity: 0, y: -8 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    aria-live="polite"
                    className="font-mono-tech text-2xl font-extrabold tracking-tight text-[#FF6C65] sm:text-3xl"
                  >
                    {activeEntry.year}
                  </motion.span>
                  <span
                    aria-hidden="true"
                    className="font-mono-tech text-xs text-[#5B9BD5]/50"
                  >
                    /
                  </span>
                  <motion.span
                    key={activeEntry.id}
                    initial={
                      shouldReduceMotion ? false : { opacity: 0, x: 6 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.22 }}
                    className="font-mono-tech text-xs text-[#B8E1F5] truncate max-w-[220px] sm:max-w-none"
                  >
                    {activeEntry.periodLabel} · {activeEntry.title}
                  </motion.span>
                </div>

                {/* Step Counter & Chronological Direction */}
                <div className="flex items-center gap-3 font-mono-tech text-xs">
                  <span className="text-[#8AB9DC] hidden sm:inline">
                    {isId ? 'Terbaru → Terlama' : 'Newest → Oldest'}
                  </span>
                  <span className="rounded border border-[#FF6C65]/35 bg-[#FF6C65]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#FF6C65]">
                    {activeEntry.step} / 0{totalEntries}
                  </span>
                </div>
              </div>

              {/* Horizontal Progress Track with Beginning (2026) & Ending (2022) Labels */}
              <div className="mt-3.5 flex items-center gap-3 sm:gap-4">
                <span className="font-mono-tech text-xs font-bold text-[#EAF1F8] shrink-0">
                  2026
                </span>

                <div className="relative flex-1 h-2 flex items-center">
                  {/* Base Track */}
                  <div
                    aria-hidden="true"
                    className="h-1 w-full rounded-full bg-[#103B50]/80 overflow-hidden"
                  >
                    {/* Scroll-Synchronized Signal Coral Fill */}
                    <motion.div
                      style={{
                        scaleX: smoothProgress,
                        transformOrigin: '0% 50%',
                      }}
                      className="h-full w-full bg-gradient-to-r from-[#5B9BD5] via-[#FF6C65] to-[#FF6C65]"
                    />
                  </div>

                  {/* Interactive Entry Milestone Dots Along the Horizontal Bar */}
                  <div className="absolute inset-x-0 flex items-center justify-between">
                    {entries.map((entry, idx) => {
                      const isActive = idx === activeIndex;
                      const isPassed = idx < activeIndex;
                      return (
                        <button
                          key={entry.id}
                          type="button"
                          onClick={() => scrollToEntry(idx)}
                          aria-label={`${entry.year} — ${entry.title}`}
                          title={`${entry.periodLabel}: ${entry.title}`}
                          className="group relative flex h-5 w-5 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65] rounded-full"
                        >
                          <span
                            className={`block rounded-full transition-all duration-300 ${
                              isActive
                                ? 'h-3 w-3 bg-[#FF6C65] ring-4 ring-[#FF6C65]/25 scale-110'
                                : isPassed
                                  ? 'h-2 w-2 bg-[#FF6C65]/80'
                                  : 'h-2 w-2 bg-[#5B9BD5]/45 group-hover:bg-[#B8E1F5]'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <span className="font-mono-tech text-xs font-bold text-[#B8E1F5] shrink-0">
                  2022
                </span>
              </div>
            </div>
          </div>

          {/* =============================================================== */}
          {/* 2. VERTICAL CHRONOLOGICAL TIMELINE                              */}
          {/* Continuous vertical timeline line, Signal Coral active nodes,   */}
          {/* clear year labels, and unboxed editorial hierarchy              */}
          {/* =============================================================== */}
          {isDesktopPinned ? (
            /* DESKTOP PINNED SCROLL VIEWPORT */
            <div className="relative mt-6 flex-1 overflow-hidden">
              {/* Top & Bottom soft vertical fade masks inside the timeline stage */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 z-20 h-10 bg-gradient-to-b from-[#04192A] to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-[#051B31] to-transparent"
              />

              {/* Subtle Active Reading Zone Highlight Band */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-[20px] h-[230px] rounded-2xl border border-[#8AB9DC]/8 bg-gradient-to-r from-[#103B50]/20 via-[#1E4D8C]/15 to-transparent"
              />

              {/* Scrolling Vertical Timeline Track */}
              <motion.div
                style={{ y: listTranslateY }}
                className="relative pt-[28px] pb-[320px]"
              >
                {/* Continuous Vertical Timeline Line (Left aligned with nodes at col-3) */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-[46px] bottom-[340px] left-[220px] xl:left-[260px] w-px bg-[#5B9BD5]/22"
                >
                  <motion.div
                    style={{
                      scaleY: smoothProgress,
                      transformOrigin: '50% 0%',
                    }}
                    className="h-full w-full bg-gradient-to-b from-[#FF6C65] via-[#FF6C65] to-[#5B9BD5]"
                  />
                </div>

                {entries.map((entry, idx) => {
                  const isActive = idx === activeIndex;
                  const isPassed = idx < activeIndex;
                  const distance = Math.abs(idx - activeIndex);

                  return (
                    <div
                      key={entry.id}
                      onClick={() => scrollToEntry(idx)}
                      style={{ height: `${DESKTOP_ITEM_STRIDE_PX}px` }}
                      className={`group relative flex items-start cursor-pointer transition-opacity duration-500 ${
                        isActive
                          ? 'opacity-100'
                          : distance === 1
                            ? 'opacity-50 hover:opacity-75'
                            : 'opacity-25 hover:opacity-50'
                      }`}
                    >
                      {/* Left Column: Year & Period Label */}
                      <div className="w-[220px] xl:w-[260px] shrink-0 pr-8 pt-0.5 text-right">
                        <div className="inline-flex items-center gap-2">
                          <span
                            className={`font-mono-tech text-xs uppercase tracking-[0.12em] ${
                              isActive ? 'text-[#FF6C65]' : 'text-[#5B9BD5]'
                            }`}
                          >
                            {entry.step}
                          </span>
                          <span
                            className={`font-mono-tech text-2xl xl:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${
                              isActive
                                ? 'text-[#EAF1F8]'
                                : isPassed
                                  ? 'text-[#B8E1F5]/80'
                                  : 'text-[#8AB9DC]/65'
                            }`}
                          >
                            {entry.year}
                          </span>
                        </div>
                        <p
                          className={`mt-1 font-mono-tech text-xs transition-colors duration-300 ${
                            isActive ? 'text-[#FF6C65]' : 'text-[#8AB9DC]'
                          }`}
                        >
                          {entry.periodLabel}
                        </p>
                        {entry.isOriginMilestone && (
                          <span className="mt-2 inline-block font-mono-tech text-[10px] uppercase tracking-[0.12em] text-[#B8E1F5]/90">
                            {isId
                              ? ' Fondasi Akademik'
                              : ' Academic Origin'}
                          </span>
                        )}
                      </div>

                      {/* Center Node on the Continuous Vertical Timeline Line */}
                      <div className="relative z-10 -ml-[9px] mt-2.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center">
                        <span
                          className={`block rounded-full transition-all duration-300 ${
                            isActive
                              ? 'h-4 w-4 bg-[#FF6C65] ring-4 ring-[#FF6C65]/30 shadow-[0_0_20px_rgba(255,108,101,0.85)]'
                              : isPassed
                                ? 'h-2.5 w-2.5 bg-[#FF6C65]/80 ring-2 ring-[#FF6C65]/20'
                                : 'h-2.5 w-2.5 border-2 border-[#5B9BD5]/55 bg-[#061B33]'
                          }`}
                        />
                      </div>

                      {/* Right Column: Editorial Entry Content */}
                      <motion.div
                        animate={{
                          x: isActive ? 0 : 8,
                          scale: isActive ? 1 : 0.985,
                        }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="flex-1 pl-8 xl:pl-10 pr-4"
                      >
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <h3
                            className={`text-xl xl:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                              isActive ? 'text-[#EAF1F8]' : 'text-[#B8E1F5]'
                            }`}
                          >
                            {entry.title}
                          </h3>
                          <span
                            aria-hidden="true"
                            className="font-mono-tech text-xs text-[#5B9BD5]/50"
                          >
                            ·
                          </span>
                          <span className="font-mono-tech text-xs font-semibold text-[#B8E1F5]">
                            {entry.organization}
                          </span>
                          <span
                            aria-hidden="true"
                            className="font-mono-tech text-xs text-[#5B9BD5]/50"
                          >
                            ·
                          </span>
                          <span className="font-mono-tech text-xs text-[#8AB9DC]">
                            {entry.contextLine}
                          </span>
                        </div>

                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#EAF1F8]/90">
                          {entry.description}
                        </p>

                        {/* Staggered Supporting Bullet Points */}
                        <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2 max-w-4xl">
                          {entry.details.map((detail, dIdx) => (
                            <motion.li
                              key={dIdx}
                              initial={false}
                              animate={{
                                opacity: isActive ? 1 : 0.65,
                                y: isActive ? 0 : 4,
                              }}
                              transition={{
                                duration: 0.28,
                                delay: isActive ? dIdx * 0.05 : 0,
                              }}
                              className="flex items-start gap-2 text-xs leading-relaxed text-[#B8E1F5]/90"
                            >
                              <span
                                aria-hidden="true"
                                className={`font-mono-tech mt-0.5 text-xs ${
                                  isActive
                                    ? 'text-[#FF6C65]'
                                    : 'text-[#5B9BD5]'
                                }`}
                              >
                                —
                              </span>
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          ) : (
            /* MOBILE, TABLET & REDUCED-MOTION CONVENTIONAL VERTICAL TIMELINE */
            <div className="relative mt-10 pl-2 sm:pl-4">
              {/* Continuous Vertical Timeline Line */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-3 bottom-6 left-[15px] sm:left-[124px] w-px bg-[#5B9BD5]/25"
              >
                <motion.div
                  style={{
                    scaleY: smoothProgress,
                    transformOrigin: '50% 0%',
                  }}
                  className="h-full w-full bg-gradient-to-b from-[#FF6C65] via-[#FF6C65] to-[#5B9BD5]"
                />
              </div>

              <div className="space-y-12">
                {entries.map((entry, idx) => {
                  const isActive = idx === activeIndex;
                  const isPassed = idx < activeIndex;

                  return (
                    <motion.div
                      key={entry.id}
                      id={`timeline-entry-${entry.id}`}
                      initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.45,
                      }}
                      className="relative flex flex-col sm:flex-row sm:items-start"
                    >
                      {/* Year & Period Label (Tablet Left Column / Mobile Top Row) */}
                      <div className="pl-8 sm:pl-0 sm:w-[108px] sm:shrink-0 sm:pr-5 sm:text-right">
                        <div className="flex items-baseline gap-2 sm:justify-end">
                          <span className="font-mono-tech text-[11px] text-[#FF6C65]">
                            {entry.step}
                          </span>
                          <span
                            className={`font-mono-tech text-xl font-extrabold ${
                              isActive ? 'text-[#EAF1F8]' : 'text-[#B8E1F5]'
                            }`}
                          >
                            {entry.year}
                          </span>
                        </div>
                        <p className="font-mono-tech text-[11px] text-[#8AB9DC]">
                          {entry.periodLabel}
                        </p>
                      </div>

                      {/* Timeline Node */}
                      <div className="absolute left-[0px] top-1.5 sm:static sm:-ml-[8px] sm:mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center">
                        <span
                          className={`block rounded-full transition-all duration-300 ${
                            isActive
                              ? 'h-3.5 w-3.5 bg-[#FF6C65] ring-4 ring-[#FF6C65]/30 shadow-[0_0_16px_rgba(255,108,101,0.8)]'
                              : isPassed
                                ? 'h-2.5 w-2.5 bg-[#FF6C65]/80'
                                : 'h-2.5 w-2.5 border-2 border-[#5B9BD5]/60 bg-[#061B33]'
                          }`}
                        />
                      </div>

                      {/* Content Column */}
                      <div className="mt-2 sm:mt-0 pl-8 sm:pl-6 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                          <h3 className="text-lg sm:text-xl font-bold text-[#EAF1F8]">
                            {entry.title}
                          </h3>
                          <span className="font-mono-tech text-xs text-[#B8E1F5]">
                            {entry.organization}
                          </span>
                        </div>
                        <p className="mt-0.5 font-mono-tech text-xs text-[#8AB9DC]">
                          {entry.contextLine}
                        </p>
                        <p className="mt-2.5 text-sm leading-relaxed text-[#EAF1F8]/90">
                          {entry.description}
                        </p>
                        <ul className="mt-3 space-y-1.5">
                          {entry.details.map((detail, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-2 text-xs leading-relaxed text-[#B8E1F5]/90"
                            >
                              <span
                                aria-hidden="true"
                                className="font-mono-tech text-[#FF6C65]"
                              >
                                —
                              </span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
