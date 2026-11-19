'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  Workflow,
  Search,
  FileSpreadsheet,
} from 'lucide-react';
import { useLocalizedPortfolio } from '@/lib/language-context';
import { EditorialProjectArchiveModal } from '@/components/homepage/editorial-project-archive-modal';

export function SelectedWorkShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const { isId } = useLocalizedPortfolio();
  const sectionRef = useRef<HTMLElement | null>(null);

  // Interactive evidence switchers for each project composition
  const [p1EvidenceIdx, setP1EvidenceIdx] = useState<number>(0);
  const [p2SourceIdx, setP2SourceIdx] = useState<number>(0);
  const [p3SqlTab, setP3SqlTab] = useState<'erd' | 'proc' | 'trigger' | 'index'>('erd');
  const [p4ViewMode, setP4ViewMode] = useState<'workflow' | 'output' | 'dataset'>('workflow');
  const [p5QueryIdx, setP5QueryIdx] = useState<number>(0);

  // Modal state for Project 03 Architecture Blueprint, Project 05 Research Benchmark, or All Projects Index
  const [activeOverlay, setActiveOverlay] = useState<
    null | 'ecommerce-db' | 'semantic-research' | 'all-projects'
  >(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const ambientOrbY1 = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [60, -80]
  );
  const ambientOrbY2 = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-40, 70]
  );

  // Project 01 Verified Evidence Screens
  const p1Screens = [
    {
      id: 'powerbi',
      labelEn: 'Task 4 · Power BI Sales Dashboard',
      labelId: 'Task 4 · Dashboard Penjualan Power BI',
      src: '/assets/projects/automotive-sales-analysis/01_powerbi_dashboard.png',
      alt: 'Task 4 Power BI Automotive Sales Dashboard displaying Rp26.02B Total Sales, 98 Transactions, 119 Quantity, and 89.8% Completion Rate',
      captionEn: 'Primary Task 4 Power BI output · Rp26.02B across 98 transactions',
      captionId: 'Output utama Power BI Task 4 · Rp26,02 Miliar dari 98 transaksi',
    },
    {
      id: 'excel',
      labelEn: 'Task 1 · Excel Trade-In Analysis',
      labelId: 'Task 1 · Analisis Trade-In Excel',
      src: '/assets/projects/automotive-sales-analysis/03_excel_branch_tradein.png',
      alt: 'Task 1 Microsoft Excel Pivot Table and branch Trade-In distribution',
      captionEn: 'Task 1 Excel Pivot Table exercise · Branch & Trade-In breakdown',
      captionId: 'Latihan Pivot Table Excel Task 1 · Rincian Cabang & Trade-In',
    },
    {
      id: 'bigquery',
      labelEn: 'Task 2 · BigQuery SQL Aggregation',
      labelId: 'Task 2 · Agregasi SQL BigQuery',
      src: '/assets/projects/automotive-sales-analysis/09_bigquery_branch_sales.png',
      alt: 'Task 2 Google BigQuery SQL query and branch sales result table',
      captionEn: 'Task 2 Google BigQuery SQL querying & branch aggregation',
      captionId: 'Kueri SQL Google BigQuery & agregasi cabang pada Task 2',
    },
    {
      id: 'python',
      labelEn: 'Task 3 · Python Colab EDA',
      labelId: 'Task 3 · EDA Python Colab',
      src: '/assets/projects/automotive-sales-analysis/10_python_branch_category_chart.png',
      alt: 'Task 3 Python Google Colab exploratory category chart',
      captionEn: 'Task 3 Python exploratory visualization in Google Colab',
      captionId: 'Visualisasi eksploratif Python di Google Colab pada Task 3',
    },
  ];

  // Project 02 Verified Evidence Screens
  const p2Screens = [
    {
      id: 'sample1',
      labelEn: 'Delivered Dataset (Part 1)',
      labelId: 'Dataset Akhir (Bagian 1)',
      src: '/assets/projects/us-law-firms-data-collection/sample1.png',
      alt: 'Sanitized US Immigration Law Firms delivered dataset sample part 1',
      captionEn: 'Sanitized sample of the 500-record delivered dataset (Columns A–F)',
      captionId: 'Sampel tersanitasi dari 500 rekaman dataset akhir (Kolom A–F)',
    },
    {
      id: 'sample2',
      labelEn: 'Delivered Dataset (Part 2)',
      labelId: 'Dataset Akhir (Bagian 2)',
      src: '/assets/projects/us-law-firms-data-collection/sample2.png',
      alt: 'Sanitized US Immigration Law Firms delivered dataset sample part 2',
      captionEn: 'Extended contact, website, and verification attributes (Columns G–L)',
      captionId: 'Atribut kontak, situs web, dan verifikasi lanjutan (Kolom G–L)',
    },
    {
      id: 'sulekha',
      labelEn: 'Sulekha Source (~500 Records)',
      labelId: 'Sumber Sulekha (~500 Data)',
      src: '/assets/projects/us-law-firms-data-collection/sulekha.png',
      alt: 'Sulekha directory source listing used for Python extraction',
      captionEn: 'Public directory source 1 · Approximately 500 records collected',
      captionId: 'Sumber direktori publik 1 · Sekitar 500 data dikumpulkan',
    },
    {
      id: 'maps',
      labelEn: 'Google Maps Source (438 Records)',
      labelId: 'Sumber Google Maps (438 Data)',
      src: '/assets/projects/us-law-firms-data-collection/maps.png',
      alt: 'Google Maps business listing extraction source',
      captionEn: 'Public directory source 2 · 438 records collected & cross-referenced',
      captionId: 'Sumber direktori publik 2 · 438 data dikumpulkan & direferensikan silang',
    },
  ];

  // Project 05 Documented Benchmark Queries (Q14 & Q4 from Thesis Report)
  const p5SampleQueries = [
    {
      code: 'Q14',
      queryEn: '"stable running shoes for daily training"',
      queryId: '"stable running shoes for daily training"',
      focusEn:
        'Largest Sentence Embedding advantage · nDCG@5: 1.0000 (Embedding) vs 0.3649 (TF-IDF)',
      focusId:
        'Keunggulan terbesar Sentence Embedding · nDCG@5: 1,0000 (Embedding) vs 0,3649 (TF-IDF)',
    },
    {
      code: 'Q4',
      queryEn: '"comfortable during long runs"',
      queryId: '"comfortable during long runs"',
      focusEn:
        'Largest TF-IDF lexical advantage · nDCG@5: 0.9031 (TF-IDF) vs 0.4643 (Embedding)',
      focusId:
        'Keunggulan leksikal terbesar TF-IDF · nDCG@5: 0,9031 (TF-IDF) vs 0,4643 (Embedding)',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="relative scroll-mt-20 py-24 sm:py-32 lg:py-36"
    >
      {/* =================================================================== */}
      {/* CONTINUOUS EDITORIAL BACKGROUND ATMOSPHERE                          */}
      {/* Oxford Blue (#002147), Midnight Navy (#061B33), Cobalt (#1E4D8C),   */}
      {/* Royal Blue (#4169E1) & selective Signal Coral / Amber illumination  */}
      {/* =================================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-28 inset-x-0 mask-atmosphere-blend bg-[linear-gradient(168deg,rgba(0,33,71,0.94)_0%,rgba(6,27,51,0.92)_28%,rgba(16,59,80,0.78)_54%,rgba(18,60,105,0.82)_78%,rgba(6,27,51,0.95)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-atmospheric-grid opacity-60"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: ambientOrbY1 }}
        className="pointer-events-none absolute top-[8%] -left-24 h-[680px] w-[740px] rounded-full bg-radial from-[#4169E1]/24 via-[#1E4D8C]/20 to-transparent blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: ambientOrbY2 }}
        className="pointer-events-none absolute top-[44%] -right-24 h-[640px] w-[700px] rounded-full bg-radial from-[#126078]/28 via-[#103B50]/22 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[10%] left-[12%] h-[580px] w-[680px] rounded-full bg-radial from-[#1E4D8C]/26 via-[#FF6C65]/8 to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* ================================================================= */}
        {/* 1. TWO-COLUMN EDITORIAL SECTION INTRODUCTION                      */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 gap-8 border-b border-[#8AB9DC]/15 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="font-mono-tech text-xs uppercase tracking-[0.16em] text-[#FF6C65]">
              {isId ? '02. PROYEK PILIHAN' : '02. SELECTED WORK'}
            </p>
            <h2
              id="selected-work-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-5xl lg:text-[52px] leading-[1.08]"
            >
              {isId ? 'Proyek yang Saya Bangun' : "Projects I've Built"}
            </h2>
          </div>

          <div className="space-y-4 lg:col-span-6 lg:pl-8">
            <p className="text-sm leading-relaxed text-[#B8E1F5]/90 sm:text-base">
              {isId
                ? 'Koleksi solusi analitik, sistem basis data, dan alur kerja cerdas yang dibangun melalui proyek praktis serta penelitian akademik.'
                : 'A collection of analytical solutions, data systems, and intelligent workflows built through practical projects and research.'}
            </p>

            {/* Unboxed Curated Journey Progression */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-tech text-[11px] text-[#8AB9DC]">
              <span className="text-[#EAF1F8]">Business Intelligence</span>
              <span aria-hidden="true" className="text-[#FF6C65]">
                →
              </span>
              <span>Data Collection</span>
              <span aria-hidden="true" className="text-[#FF6C65]">
                →
              </span>
              <span>Database Engineering</span>
              <span aria-hidden="true" className="text-[#FF6C65]">
                →
              </span>
              <span>AI Automation</span>
              <span aria-hidden="true" className="text-[#FF6C65]">
                →
              </span>
              <span>Information Retrieval</span>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* CURATED FIVE-PROJECT EDITORIAL SHOWCASE                           */}
        {/* ================================================================= */}
        <div className="mt-16 space-y-28 sm:mt-24 sm:space-y-36 lg:space-y-44">
          {/* =============================================================== */}
          {/* PROJECT 01 — AUTOMOTIVE SALES ANALYSIS (LARGE HERO FEATURE)     */}
          {/* Full-width asymmetric visual anchor + selective KPI readout     */}
          {/* =============================================================== */}
          <motion.article
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Subtle Royal Blue & Cobalt spotlight behind Hero Project 01 */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-6 -inset-y-6 rounded-3xl bg-radial from-[#4169E1]/16 via-[#002147]/35 to-transparent blur-2xl"
            />

            {/* Editorial Top Metadata Header */}
            <div className="relative z-10 mb-6 flex flex-wrap items-baseline justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2.5 font-mono-tech text-xs">
                <span className="text-sm font-bold text-[#FF6C65]">01</span>
                <span aria-hidden="true" className="text-[#8AB9DC]/40">
                  /
                </span>
                <span className="uppercase tracking-[0.14em] text-[#B8E1F5]">
                  DATA ANALYTICS / BUSINESS INTELLIGENCE
                </span>
                <span aria-hidden="true" className="text-[#8AB9DC]/40">
                  ·
                </span>
                <span className="text-[#8AB9DC]">
                  KarirNex Data Analyst Bootcamp
                </span>
              </div>

              <span className="font-mono-tech text-xs text-[#8AB9DC]">
                Microsoft Excel · Google BigQuery · Python · Power BI
              </span>
            </div>

            {/* Asymmetric 12-Column Hero Showcase */}
            <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              {/* Dominant Landscape Dashboard Visual Stage (8 Columns) */}
              <div className="lg:col-span-8">
                <div className="group relative overflow-hidden rounded-2xl border border-[#8AB9DC]/25 bg-gradient-to-b from-[#0A2C52]/90 via-[#002147] to-[#021524] p-3 sm:p-5 shadow-[0_32px_80px_rgba(1,8,18,0.78)]">
                  {/* Top Specular Rim */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#FF6C65]/70 via-[#4169E1]/80 to-[#B8E1F5]/50"
                  />

                  {/* Interactive Task View Switcher Bar */}
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <div
                      role="tablist"
                      aria-label={
                        isId
                          ? 'Pilih tampilan bukti proyek Automotive Sales'
                          : 'Select Automotive Sales project evidence view'
                      }
                      className="flex flex-wrap items-center gap-1.5"
                    >
                      {p1Screens.map((screen, idx) => {
                        const active = p1EvidenceIdx === idx;
                        return (
                          <button
                            key={screen.id}
                            type="button"
                            role="tab"
                            aria-selected={active}
                            onClick={() => setP1EvidenceIdx(idx)}
                            className={`rounded-md px-2.5 py-1 font-mono-tech text-[11px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65] ${
                              active
                                ? 'bg-[#4169E1] font-semibold text-[#EAF1F8] shadow-[0_4px_14px_rgba(65,105,225,0.45)]'
                                : 'bg-[#061B33]/80 text-[#8AB9DC] hover:text-[#EAF1F8]'
                            }`}
                          >
                            {isId ? screen.labelId : screen.labelEn}
                          </button>
                        );
                      })}
                    </div>

                    <Link
                      href="/projects/automotive-sales-analysis"
                      className="hidden sm:inline-flex items-center gap-1 font-mono-tech text-[11px] text-[#B8E1F5] hover:text-[#FF6C65]"
                    >
                      <span>{isId ? 'Studi Kasus Penuh' : 'Full Case Study'}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Main Dashboard Image Frame */}
                  <Link
                    href="/projects/automotive-sales-analysis"
                    className="relative block aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#8AB9DC]/20 bg-[#02111E]"
                  >
                    <Image
                      src={p1Screens[p1EvidenceIdx].src}
                      alt={p1Screens[p1EvidenceIdx].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      referrerPolicy="no-referrer"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#021220]/70 via-transparent to-transparent opacity-60"
                    />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg border border-[#8AB9DC]/20 bg-[#021424]/90 px-3.5 py-2 backdrop-blur-md">
                      <span className="font-mono-tech text-[11px] text-[#EAF1F8]">
                        {isId
                          ? p1Screens[p1EvidenceIdx].captionId
                          : p1Screens[p1EvidenceIdx].captionEn}
                      </span>
                      <span className="font-mono-tech text-[11px] font-semibold text-[#FF6C65]">
                        {isId ? 'Buka Studi Kasus ↗' : 'Explore Case Study ↗'}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Asymmetric Narrative & Verified KPI Column (4 Columns) */}
              <div className="flex flex-col justify-between space-y-6 lg:col-span-4 lg:pl-4">
                <div>
                  <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#FF6C65]">
                    {isId ? 'Proyek Utama · Bukti Dashboard BI' : 'Primary Feature · BI Dashboard Evidence'}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-3xl lg:text-4xl">
                    Automotive Sales Analysis
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#EAF1F8]/82 sm:text-base">
                    {isId
                      ? 'Proyek analitik data otomotif multi-tahap yang mengeksplorasi pola Trade-In di Excel, agregasi penjualan cabang melalui SQL di Google BigQuery, analisis eksploratif Python di Google Colab, serta pelaporan eksekutif interaktif di Power BI.'
                      : 'Multi-stage automotive data analytics project examining Trade-In patterns in Excel, branch sales aggregation via SQL in Google BigQuery, Python exploratory analysis in Google Colab, and interactive executive reporting in Power BI.'}
                  </p>
                </div>

                {/* Verified Task 4 KPI Highlights */}
                <div className="rounded-2xl border border-[#8AB9DC]/20 bg-gradient-to-br from-[#002147]/85 via-[#061B33]/90 to-[#021F2D]/90 p-5 backdrop-blur-xl shadow-[0_18px_44px_rgba(2,10,20,0.6)]">
                  <p className="font-mono-tech text-[11px] uppercase tracking-[0.12em] text-[#8AB9DC]">
                    {isId
                      ? 'Metrik Terverifikasi (Dashboard Power BI Task 4)'
                      : 'Verified Metrics (Task 4 Power BI Dashboard)'}
                  </p>

                  <div className="mt-3.5 grid grid-cols-2 gap-4 border-t border-[#8AB9DC]/12 pt-3.5">
                    <div>
                      <p className="font-mono-tech text-[11px] text-[#8AB9DC]">
                        Total Sales
                      </p>
                      <p className="mt-0.5 font-mono-tech text-lg font-bold text-[#EAF1F8] sm:text-xl">
                        Rp26.02B
                      </p>
                    </div>
                    <div>
                      <p className="font-mono-tech text-[11px] text-[#8AB9DC]">
                        Transactions
                      </p>
                      <p className="mt-0.5 font-mono-tech text-lg font-bold text-[#B8E1F5] sm:text-xl">
                        98
                      </p>
                    </div>
                    <div>
                      <p className="font-mono-tech text-[11px] text-[#8AB9DC]">
                        Total Quantity
                      </p>
                      <p className="mt-0.5 font-mono-tech text-lg font-bold text-[#B8E1F5] sm:text-xl">
                        119
                      </p>
                    </div>
                    <div>
                      <p className="font-mono-tech text-[11px] text-[#8AB9DC]">
                        Completion Rate
                      </p>
                      <p className="mt-0.5 font-mono-tech text-lg font-bold text-[#FF6C65] sm:text-xl">
                        89.8%
                      </p>
                    </div>
                  </div>
                </div>

                {/* Editorial Case Study Link */}
                <div className="pt-1">
                  <Link
                    href="/projects/automotive-sales-analysis"
                    className="group inline-flex items-center gap-3 font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#EAF1F8] transition-colors hover:text-[#FF6C65] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65]"
                  >
                    <span className="border-b border-[#FF6C65] pb-1">
                      {isId ? 'Jelajahi Studi Kasus' : 'Explore Case Study'}
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#8AB9DC]/30 bg-[#021F2D] text-[#FF6C65] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-[#FF6C65]">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>

          {/* =============================================================== */}
          {/* PROJECT 02 — US LAW FIRMS DATA COLLECTION (OFFSET SPLIT)        */}
          {/* Left editorial column with vertical offset + Right extraction   */}
          {/* =============================================================== */}
          <motion.article
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start"
          >
            {/* Left Offset Narrative Column (5 Columns) */}
            <div className="space-y-6 lg:col-span-5 lg:pt-10">
              <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs">
                <span className="font-bold text-[#E8A34A]">02</span>
                <span aria-hidden="true" className="text-[#8AB9DC]/40">
                  /
                </span>
                <span className="uppercase tracking-[0.14em] text-[#E8A34A]">
                  DATA COLLECTION / WEB SCRAPING
                </span>
                <span aria-hidden="true" className="text-[#8AB9DC]/40">
                  ·
                </span>
                <span className="text-[#B8E1F5]">
                  {isId ? 'Proyek Freelance' : 'Freelance Project'}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-3xl lg:text-4xl">
                US Law Firms Data Collection
              </h3>

              <p className="text-sm leading-relaxed text-[#EAF1F8]/82 sm:text-base">
                {isId
                  ? 'Pengumpulan dan penstrukturan data direktori firma hukum imigrasi AS lintas sumber publik menggunakan Python, memadukan ekstraksi semi-otomatis dengan interaksi manusia (human-in-the-loop) serta peninjauan kualitas manual.'
                  : 'Cross-source public directory collection and structuring of US immigration law firms using Python, combining semi-automated extraction with human-in-the-loop interaction and manual data quality review.'}
              </p>

              {/* Verified Collection Pipeline Breakdown */}
              <div className="space-y-3 rounded-2xl border border-[#E8A34A]/25 bg-gradient-to-br from-[#021F2D]/90 via-[#061B33]/92 to-[#002147]/80 p-5 backdrop-blur-xl">
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.12em] text-[#E8A34A]">
                  {isId
                    ? 'Fakta Pengumpulan & Pengiriman Terverifikasi'
                    : 'Verified Collection & Delivery Facts'}
                </p>

                <div className="grid grid-cols-3 gap-3 border-y border-[#8AB9DC]/12 py-3 font-mono-tech">
                  <div>
                    <p className="text-[10px] text-[#8AB9DC]">Sulekha Source</p>
                    <p className="mt-0.5 text-base font-bold text-[#EAF1F8] sm:text-lg">
                      ~500
                    </p>
                    <p className="text-[10px] text-[#8AB9DC]/80">
                      {isId ? 'data dikumpulkan' : 'records collected'}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8AB9DC]">Google Maps</p>
                    <p className="mt-0.5 text-base font-bold text-[#B8E1F5] sm:text-lg">
                      438
                    </p>
                    <p className="text-[10px] text-[#8AB9DC]/80">
                      {isId ? 'data dikumpulkan' : 'records collected'}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#E8A34A]">Final Dataset</p>
                    <p className="mt-0.5 text-base font-bold text-[#E8A34A] sm:text-lg">
                      500
                    </p>
                    <p className="text-[10px] text-[#EAF1F8]/80">
                      {isId ? 'data diserahkan' : 'delivered records'}
                    </p>
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs text-[#EAF1F8]/85">
                  <li className="flex items-start gap-2">
                    <span className="font-mono-tech text-[#E8A34A]">—</span>
                    <span>
                      {isId
                        ? 'Pengumpulan & pemrosesan berbasis Python (Requests, BeautifulSoup, Pandas)'
                        : 'Python-based collection and processing (Requests, BeautifulSoup, Pandas)'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono-tech text-[#E8A34A]">—</span>
                    <span>
                      {isId
                        ? 'Pengumpulan semi-otomatis dengan interaksi manusia saat diperlukan (CAPTCHA/lokasi)'
                        : 'Semi-automated collection with human interaction where required'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono-tech text-[#E8A34A]">—</span>
                    <span>
                      {isId
                        ? 'Verifikasi manual dan peninjauan kualitas data sebelum pengiriman Excel'
                        : 'Manual verification and data quality review prior to Excel delivery'}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-1">
                <Link
                  href="/projects/us-law-firms-data-collection"
                  className="group inline-flex items-center gap-3 font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#EAF1F8] transition-colors hover:text-[#E8A34A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A34A]"
                >
                  <span className="border-b border-[#E8A34A] pb-1">
                    {isId ? 'Lihat Proyek & Bukti Dataset' : 'View Project & Dataset Evidence'}
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#8AB9DC]/30 bg-[#021F2D] text-[#E8A34A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-[#E8A34A]">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Contrasting Dataset & Source Extraction Visual Stage (7 Columns) */}
            <div className="lg:col-span-7">
              <div className="group relative overflow-hidden rounded-2xl border border-[#5B9BD5]/25 bg-gradient-to-br from-[#021F2D]/95 via-[#061B33] to-[#002147]/90 p-3.5 sm:p-5 shadow-[0_28px_70px_rgba(1,8,18,0.75)]">
                {/* Top Amber & Steel Blue Rim */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#E8A34A]/70 via-[#5B9BD5]/60 to-transparent"
                />

                {/* Source & Spreadsheet Evidence Switcher */}
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div
                    role="tablist"
                    aria-label={
                      isId
                        ? 'Pilih tampilan bukti US Law Firms'
                        : 'Select US Law Firms evidence view'
                    }
                    className="flex flex-wrap items-center gap-1.5"
                  >
                    {p2Screens.map((screen, idx) => {
                      const active = p2SourceIdx === idx;
                      return (
                        <button
                          key={screen.id}
                          type="button"
                          role="tab"
                          aria-selected={active}
                          onClick={() => setP2SourceIdx(idx)}
                          className={`rounded-md px-2.5 py-1 font-mono-tech text-[11px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A34A] ${
                            active
                              ? 'bg-[#E8A34A] font-bold text-[#021F2D]'
                              : 'bg-[#061B33]/85 text-[#8AB9DC] hover:text-[#EAF1F8]'
                          }`}
                        >
                          {isId ? screen.labelId : screen.labelEn}
                        </button>
                      );
                    })}
                  </div>

                  <span className="font-mono-tech text-[11px] text-[#8AB9DC]">
                    <FileSpreadsheet className="mr-1 inline h-3.5 w-3.5 text-[#E8A34A]" aria-hidden="true" />
                    500 Records
                  </span>
                </div>

                {/* Sanitized Dataset / Source Screenshot Viewport */}
                <Link
                  href="/projects/us-law-firms-data-collection"
                  className="relative block aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#8AB9DC]/20 bg-[#021220]"
                >
                  <Image
                    src={p2Screens[p2SourceIdx].src}
                    alt={p2Screens[p2SourceIdx].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    referrerPolicy="no-referrer"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#021220]/75 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg border border-[#E8A34A]/30 bg-[#021424]/90 px-3.5 py-2 backdrop-blur-md">
                    <span className="font-mono-tech text-[11px] text-[#EAF1F8]">
                      {isId
                        ? p2Screens[p2SourceIdx].captionId
                        : p2Screens[p2SourceIdx].captionEn}
                    </span>
                    <span className="font-mono-tech text-[11px] font-semibold text-[#E8A34A]">
                      {isId ? 'Periksa Bukti ↗' : 'Inspect Evidence ↗'}
                    </span>
                  </div>
                </Link>

                {/* Structured Record Schema Preview Strip */}
                <div className="mt-3.5 grid grid-cols-2 gap-2 rounded-xl border border-[#8AB9DC]/14 bg-[#031526]/90 p-3 font-mono-tech text-[10px] sm:grid-cols-4">
                  <div>
                    <span className="text-[#8AB9DC]">FIELD 01</span>
                    <p className="mt-0.5 font-semibold text-[#EAF1F8]">Firm_Name & State</p>
                  </div>
                  <div>
                    <span className="text-[#8AB9DC]">FIELD 02</span>
                    <p className="mt-0.5 font-semibold text-[#B8E1F5]">Phone & Address</p>
                  </div>
                  <div>
                    <span className="text-[#8AB9DC]">FIELD 03</span>
                    <p className="mt-0.5 font-semibold text-[#B8E1F5]">Website & Rating</p>
                  </div>
                  <div>
                    <span className="text-[#E8A34A]">QUALITY REVIEW</span>
                    <p className="mt-0.5 font-semibold text-[#EAF1F8]">Human-Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* =============================================================== */}
          {/* PROJECT 03 — E-COMMERCE DATABASE MANAGEMENT (TECHNICAL FEATURE) */}
          {/* ERD Architecture + SQL Functions, Triggers, Views, Indexing     */}
          {/* =============================================================== */}
          <motion.article
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-[#5B9BD5]/28 bg-[linear-gradient(145deg,rgba(16,59,80,0.65)_0%,rgba(0,33,71,0.92)_48%,rgba(2,31,45,0.96)_100%)] p-6 sm:p-10 lg:p-12 shadow-[0_30px_80px_rgba(1,8,18,0.78)]"
          >
            {/* Top Technical Blueprint Rim */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#5B9BD5] via-[#4169E1] to-[#FF6C65]"
            />

            {/* Header Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#8AB9DC]/15 pb-5">
              <div className="flex flex-wrap items-center gap-2.5 font-mono-tech text-xs">
                <span className="text-sm font-bold text-[#5B9BD5]">03</span>
                <span aria-hidden="true" className="text-[#8AB9DC]/40">
                  /
                </span>
                <span className="uppercase tracking-[0.14em] text-[#B8E1F5]">
                  SQL / RELATIONAL DATABASE DESIGN
                </span>
                <span aria-hidden="true" className="text-[#8AB9DC]/40">
                  ·
                </span>
                <span className="text-[#FF6C65]">
                  {isId
                    ? 'Proyek Kelompok Akademik · Universitas AMIKOM Yogyakarta'
                    : 'Academic Group Project · Universitas AMIKOM Yogyakarta'}
                </span>
              </div>

              <span className="font-mono-tech text-xs text-[#8AB9DC]">
                MySQL / MariaDB · phpMyAdmin · ERD · Functions · Stored Procedures · Triggers · RBAC
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              {/* Left Technical Architecture Stage: Authentic ERD & Verbatim SQL Preview (7 Columns) */}
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-2xl border border-[#8AB9DC]/22 bg-[#021220]/95 shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
                  {/* Architecture Workbench Tabs */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#8AB9DC]/15 bg-[#04182B] px-4 py-2.5">
                    <div
                      role="tablist"
                      aria-label="E-Commerce Database Architecture Tabs"
                      className="flex flex-wrap items-center gap-1.5"
                    >
                      {[
                        {
                          id: 'erd' as const,
                          labelEn: '01. ERD & 6 Tables',
                          labelId: '01. ERD & 6 Tabel',
                        },
                        {
                          id: 'proc' as const,
                          labelEn: '02. Functions & Procedures',
                          labelId: '02. Fungsi & Prosedur',
                        },
                        {
                          id: 'trigger' as const,
                          labelEn: '03. 6 Triggers & log_changes',
                          labelId: '03. 6 Trigger & log_changes',
                        },
                        {
                          id: 'index' as const,
                          labelEn: '04. Indexes, Views & RBAC',
                          labelId: '04. Indeks, View & RBAC',
                        },
                      ].map((tab) => {
                        const active = p3SqlTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            role="tab"
                            aria-selected={active}
                            onClick={() => setP3SqlTab(tab.id)}
                            className={`rounded-md px-2.5 py-1 font-mono-tech text-[11px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B9BD5] ${
                              active
                                ? 'bg-[#5B9BD5] font-bold text-[#021220]'
                                : 'text-[#8AB9DC] hover:text-[#EAF1F8]'
                            }`}
                          >
                            {isId ? tab.labelId : tab.labelEn}
                          </button>
                        );
                      })}
                    </div>

                    <span className="font-mono-tech text-[10px] uppercase tracking-[0.1em] text-[#5B9BD5]">
                      ECOMMERCE DB SCHEMA
                    </span>
                  </div>

                  {/* Tab Content Stage */}
                  <div className="p-4 sm:p-5">
                    {p3SqlTab === 'erd' && (
                      <div className="space-y-3">
                        <Link
                          href="/projects/ecommerce-database-management"
                          className="group relative block aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#5B9BD5]/25 bg-[#031728]"
                        >
                          <Image
                            src="/assets/projects/ecommerce-database-management/01_erd_schema.png"
                            alt="phpMyAdmin Designer Entity Relationship Diagram (ERD) for the ecommerce database"
                            fill
                            sizes="(max-width: 1024px) 100vw, 58vw"
                            referrerPolicy="no-referrer"
                            className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </Link>
                        <div className="flex flex-wrap items-center justify-between gap-2 font-mono-tech text-[11px] text-[#8AB9DC]">
                          <span>
                            {isId
                              ? '6 Tabel: Customers, Products, Orders, OrderDetails, Payments, log_changes'
                              : '6 Tables: Customers, Products, Orders, OrderDetails, Payments, log_changes'}
                          </span>
                          <span className="text-[#B8E1F5]">phpMyAdmin Designer ERD</span>
                        </div>
                      </div>
                    )}

                    {p3SqlTab === 'proc' && (
                      <div className="rounded-xl border border-[#5B9BD5]/20 bg-[#020E1A] p-4 font-mono-tech text-xs leading-relaxed text-[#B8E1F5]">
                        <p className="text-[10px] uppercase tracking-[0.1em] text-[#FF6C65]">
                          -- DOCUMENTED SQL FUNCTIONS & STORED PROCEDURES
                        </p>
                        <pre className="mt-2 overflow-x-auto text-[11px] text-[#EAF1F8]/90">
{`-- Functions: getTotalOrders() & getTotalPayments(id_order, start_date)
CREATE FUNCTION getTotalPayments(id_order INT, start_date DATE)
RETURNS DECIMAL(10,2) DETERMINISTIC
BEGIN
  DECLARE total DECIMAL(10,2);
  SELECT SUM(jumlah_bayar) INTO total FROM Payments
  WHERE Payments.id_order = id_order AND tanggal_bayar >= start_date;
  RETURN IFNULL(total, 0);
END;

-- Procedure: updateProductStock with IF validation & low_stock_alerts
CREATE PROCEDURE updateProductStock(IN id_product INT, IN quantityChange INT)`}
                        </pre>
                      </div>
                    )}

                    {p3SqlTab === 'trigger' && (
                      <div className="rounded-xl border border-[#E8A34A]/25 bg-[#020E1A] p-4 font-mono-tech text-xs leading-relaxed text-[#B8E1F5]">
                        <p className="text-[10px] uppercase tracking-[0.1em] text-[#E8A34A]">
                          -- 6 BEFORE/AFTER TRIGGERS LOGGING TO log_changes
                        </p>
                        <pre className="mt-2 overflow-x-auto text-[11px] text-[#EAF1F8]/90">
{`CREATE TRIGGER before_update_products
BEFORE UPDATE ON Products FOR EACH ROW
BEGIN
  INSERT INTO log_changes (event_time, event_type, table_name, old_data, new_data)
  VALUES (NOW(), 'BEFORE UPDATE', 'Products',
    CONCAT('ID: ', OLD.id_product, ', Harga: ', OLD.harga, ', Stock: ', OLD.stock),
    CONCAT('ID: ', NEW.id_product, ', Harga: ', NEW.harga, ', Stock: ', NEW.stock));
END;`}
                        </pre>
                      </div>
                    )}

                    {p3SqlTab === 'index' && (
                      <div className="rounded-xl border border-[#4169E1]/30 bg-[#020E1A] p-4 font-mono-tech text-xs leading-relaxed text-[#B8E1F5]">
                        <p className="text-[10px] uppercase tracking-[0.1em] text-[#4169E1]">
                          -- COMPOSITE BTREE INDEXES, 4 VIEWS & RBAC PRIVILEGES
                        </p>
                        <pre className="mt-2 overflow-x-auto text-[11px] text-[#EAF1F8]/90">
{`CREATE INDEX idx_customer_name_address ON customers (nama, alamat);
ALTER TABLE customers ADD INDEX idx_name_phone (nama, telepon);

CREATE VIEW base_view AS SELECT * FROM Orders WHERE status = 'Pending';
CREATE VIEW nested_view AS
  SELECT * FROM base_view WHERE quantity >= 1 WITH CHECK OPTION;

GRANT SELECT ON ecommerce.Orders TO 'user1'@'localhost';
GRANT EXECUTE ON PROCEDURE ecommerce.showCustomers TO 'finance';`}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Concise Summary, Verified Highlight & Direct Case Study CTA (5 Columns) */}
              <div className="space-y-6 lg:col-span-5">
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-3xl">
                    E-Commerce Database Management
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#EAF1F8]/82 sm:text-base">
                    {isId
                      ? 'Proyek kelompok akademik Pemrograman Basis Data (Universitas AMIKOM Yogyakarta, 2024) yang mengimplementasikan arsitektur basis data relasional e-commerce lengkap beserta logika pemrograman SQL di sisi server.'
                      : 'Collaborative Database Programming academic group project (Universitas AMIKOM Yogyakarta, 2024) implementing a relational e-commerce schema and server-side SQL programming.'}
                  </p>
                </div>

                {/* Key Verified Highlights Card */}
                <div className="rounded-2xl border border-[#8AB9DC]/18 bg-[#031627]/85 p-5">
                  <p className="font-mono-tech text-[11px] uppercase tracking-[0.12em] text-[#5B9BD5]">
                    {isId
                      ? 'Sorotan Implementasi Terverifikasi'
                      : 'Verified Implementation Highlights'}
                  </p>

                  <div className="mt-3.5 grid grid-cols-2 gap-3 font-mono-tech">
                    <div className="rounded-xl border border-[#8AB9DC]/15 bg-[#021220] p-3">
                      <p className="text-[10px] text-[#8AB9DC]">
                        {isId ? 'Skema Relasional' : 'Relational Schema'}
                      </p>
                      <p className="mt-1 text-base font-bold text-[#EAF1F8]">
                        6 Tables + ERD
                      </p>
                    </div>
                    <div className="rounded-xl border border-[#8AB9DC]/15 bg-[#021220] p-3">
                      <p className="text-[10px] text-[#8AB9DC]">
                        {isId ? 'Logika Rutin' : 'SQL Routines'}
                      </p>
                      <p className="mt-1 text-base font-bold text-[#B8E1F5]">
                        2 Func · 3 Proc
                      </p>
                    </div>
                    <div className="rounded-xl border border-[#8AB9DC]/15 bg-[#021220] p-3">
                      <p className="text-[10px] text-[#E8A34A]">
                        {isId ? 'Audit & Indeks' : 'Audit & Indexing'}
                      </p>
                      <p className="mt-1 text-base font-bold text-[#E8A34A]">
                        6 Triggers · 3 Idx
                      </p>
                    </div>
                    <div className="rounded-xl border border-[#8AB9DC]/15 bg-[#021220] p-3">
                      <p className="text-[10px] text-[#FF6C65]">
                        {isId ? 'Abstraksi & Keamanan' : 'Views & RBAC'}
                      </p>
                      <p className="mt-1 text-base font-bold text-[#FF6C65]">
                        4 Views · 3 Roles
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 border-t border-[#8AB9DC]/12 pt-3 font-mono-tech text-[11px] text-[#8AB9DC]">
                    {isId
                      ? 'Tim 5 Mahasiswa · Dosen Pengampu: Kusnawi, M.Eng'
                      : '5-Member Student Team · Lecturer: Kusnawi, M.Eng'}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/projects/ecommerce-database-management"
                    className="group inline-flex items-center gap-3 font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#EAF1F8] transition-colors hover:text-[#5B9BD5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B9BD5]"
                  >
                    <span className="border-b border-[#5B9BD5] pb-1">
                      {isId
                        ? 'Jelajahi Studi Kasus Arsitektur SQL'
                        : 'Explore SQL Architecture Case Study'}
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#8AB9DC]/30 bg-[#021F2D] text-[#5B9BD5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-[#5B9BD5]">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>

          {/* =============================================================== */}
          {/* PROJECT 04 — AI DATA ANALYST AGENT (IMMERSIVE WORKFLOW)         */}
          {/* Sequential Node Flow + Actual Langflow & Output Screenshots     */}
          {/* =============================================================== */}
          <motion.article
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Sequential Workflow Header & Pipeline Strip */}
            <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 font-mono-tech text-xs">
                  <span className="font-bold text-[#FF6C65]">04</span>
                  <span aria-hidden="true" className="text-[#8AB9DC]/40">
                    /
                  </span>
                  <span className="uppercase tracking-[0.14em] text-[#FF6C65]">
                    AI INTEGRATION / WORKFLOW AUTOMATION
                  </span>
                  <span aria-hidden="true" className="text-[#8AB9DC]/40">
                    ·
                  </span>
                  <span className="text-[#B8E1F5]">IBM / Hacktiv8</span>
                </div>
                <h3 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-4xl">
                  AI Data Analyst Agent
                </h3>
              </div>

              <p className="max-w-xl text-sm leading-relaxed text-[#EAF1F8]/82 sm:text-base">
                {isId
                  ? 'Alur kerja analitik sekuensial di Langflow yang menghubungkan input dataset ulasan pelanggan CSV melalui pemrosesan prompt multi-tahap dan pemrosesan LLM untuk menghasilkan sintesis sentimen serta rekomendasi departemen terstruktur.'
                  : 'Sequential analytical workflow in Langflow connecting customer-review CSV inputs through multi-stage prompt processing and LLM processing to generate structured sentiment synthesis and departmental recommendations.'}
              </p>
            </div>

            {/* Connected 4-Stage Sequential Pipeline Architecture Bar */}
            <div className="mb-8 grid grid-cols-1 gap-3 rounded-2xl border border-[#FF6C65]/25 bg-[#021424]/90 p-4 sm:grid-cols-4 sm:p-5">
              {[
                {
                  step: 'STAGE 01',
                  titleEn: 'CSV Input',
                  titleId: 'Input CSV',
                  detailEn: '1,001 consumer electronics review records ingested',
                  detailId: '1.001 rekaman ulasan produk elektronik konsumen',
                  accent: 'border-[#8AB9DC]/25 text-[#B8E1F5]',
                },
                {
                  step: 'STAGE 02',
                  titleEn: 'Prompt Processing',
                  titleId: 'Pemrosesan Prompt',
                  detailEn: 'Sequential prompt templates & formatting constraints',
                  detailId: 'Templat prompt sekuensial & batasan format output',
                  accent: 'border-[#5B9BD5]/35 text-[#5B9BD5]',
                },
                {
                  step: 'STAGE 03',
                  titleEn: 'LLM Processing',
                  titleId: 'Pemrosesan LLM',
                  detailEn: 'Two-stage language model inference & synthesis',
                  detailId: 'Inferensi & sintesis model bahasa dua tahap',
                  accent: 'border-[#E8A34A]/40 text-[#E8A34A]',
                },
                {
                  step: 'STAGE 04',
                  titleEn: 'Structured Output',
                  titleId: 'Output Terstruktur',
                  detailEn: 'Sentiment breakdown & departmental action items',
                  detailId: 'Rincian sentimen & rekomendasi tindakan departemen',
                  accent: 'border-[#FF6C65]/50 text-[#FF6C65]',
                },
              ].map((node, idx) => (
                <div
                  key={node.step}
                  className={`relative rounded-xl border ${node.accent} bg-[#061B33]/85 p-3.5`}
                >
                  <div className="flex items-center justify-between font-mono-tech text-[10px]">
                    <span>{node.step}</span>
                    {idx < 3 && (
                      <ArrowRight
                        className="h-3.5 w-3.5 text-[#FF6C65]"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <p className="mt-1 text-sm font-bold text-[#EAF1F8]">
                    {isId ? node.titleId : node.titleEn}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#8AB9DC]">
                    {isId ? node.detailId : node.detailEn}
                  </p>
                </div>
              ))}
            </div>

            {/* Dual-Frame Workflow & Structured Output Visual Stage */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="group relative overflow-hidden rounded-2xl border border-[#FF6C65]/30 bg-gradient-to-b from-[#0A2646]/90 to-[#021322] p-3.5 sm:p-5 shadow-[0_28px_70px_rgba(1,8,18,0.78)]">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <div
                      role="tablist"
                      aria-label="AI Data Analyst Agent Evidence Views"
                      className="flex flex-wrap items-center gap-1.5"
                    >
                      {[
                        {
                          id: 'workflow' as const,
                          labelEn: 'Langflow 6-Node Workflow',
                          labelId: 'Alur Kerja 6-Node Langflow',
                        },
                        {
                          id: 'output' as const,
                          labelEn: 'Structured Agent Output',
                          labelId: 'Output Agen Terstruktur',
                        },
                        {
                          id: 'dataset' as const,
                          labelEn: 'CSV Review Dataset (1,001 Rows)',
                          labelId: 'Dataset Ulasan CSV (1.001 Baris)',
                        },
                      ].map((tab) => {
                        const active = p4ViewMode === tab.id;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            role="tab"
                            aria-selected={active}
                            onClick={() => setP4ViewMode(tab.id)}
                            className={`rounded-md px-2.5 py-1 font-mono-tech text-[11px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65] ${
                              active
                                ? 'bg-[#FF6C65] font-bold text-[#021F2D]'
                                : 'bg-[#061B33]/85 text-[#8AB9DC] hover:text-[#EAF1F8]'
                            }`}
                          >
                            {isId ? tab.labelId : tab.labelEn}
                          </button>
                        );
                      })}
                    </div>

                    <span className="font-mono-tech text-[11px] text-[#FF6C65]">
                      <Workflow className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
                      Sequential Pipeline
                    </span>
                  </div>

                  <Link
                    href="/projects/ai-data-analyst-agent"
                    className={`relative block w-full overflow-hidden rounded-xl border border-[#8AB9DC]/20 ${
                      p4ViewMode === 'workflow'
                        ? 'bg-[#000000] p-2 sm:p-3'
                        : 'aspect-[16/10] bg-[#02101C]'
                    }`}
                  >
                    {p4ViewMode === 'workflow' ? (
                      <Image
                        src="/assets/aistudio/Dark-Themed_AI_Workflow_Nodes_461f9344.png"
                        alt="Dark-themed Langflow sequential 6-node workflow showing Data File, Prompt Template, Language Model, second Prompt Template, second Language Model, and Chat Output"
                        width={2001}
                        height={786}
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        referrerPolicy="no-referrer"
                        className="h-auto w-full rounded-lg object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                      />
                    ) : (
                      <Image
                        src={
                          p4ViewMode === 'output'
                            ? '/assets/projects/ai-data-analyst-agent/agent-output-reference.png'
                            : '/assets/projects/ai-data-analyst-agent/dataset-preview.png'
                        }
                        alt="AI Data Analyst Agent structured output and dataset preview evidence"
                        fill
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        referrerPolicy="no-referrer"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                    )}
                  </Link>
                </div>
              </div>

              <div className="space-y-6 lg:col-span-4">
                <div className="rounded-2xl border border-[#8AB9DC]/20 bg-[#031628]/90 p-6">
                  <p className="font-mono-tech text-[11px] uppercase tracking-[0.12em] text-[#FF6C65]">
                    {isId ? 'Arsitektur Alur Kerja Terverifikasi' : 'Verified Workflow Architecture'}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[#EAF1F8]/85 sm:text-sm">
                    {isId
                      ? 'Menggunakan alur kerja sekuensial 6-node di Langflow (tanpa klaim RAG, pencarian vektor, atau agen otonom di luar ruang lingkup). Memproses 1.001 baris ulasan pelanggan lintas 3 kategori produk menjadi ringkasan eksekutif dan rekomendasi departemen.'
                      : 'Built as a deterministic 6-node sequential pipeline in Langflow. Processes 1,001 customer review rows across 3 product categories into sentiment distributions, executive summaries, and departmental action items.'}
                  </p>
                  <div className="mt-4 border-t border-[#8AB9DC]/12 pt-4 font-mono-tech text-xs text-[#B8E1F5]">
                    Langflow · Prompt Processing · LLM Processing · CSV
                  </div>
                </div>

                <Link
                  href="/projects/ai-data-analyst-agent"
                  className="group inline-flex items-center gap-3 font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#EAF1F8] transition-colors hover:text-[#FF6C65] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65]"
                >
                  <span className="border-b border-[#FF6C65] pb-1">
                    {isId ? 'Jelajahi Studi Kasus Alur Kerja' : 'Explore Workflow Case Study'}
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#8AB9DC]/30 bg-[#021F2D] text-[#FF6C65] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-[#FF6C65]">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.article>

          {/* =============================================================== */}
          {/* PROJECT 05 — RUNNING SHOES SEMANTIC RETRIEVAL (RESEARCH)        */}
          {/* Analytical Research Showcase + Verified nDCG@5 Evaluation       */}
          {/* =============================================================== */}
          <motion.article
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-[#8AB9DC]/25 bg-[linear-gradient(155deg,rgba(2,31,45,0.95)_0%,rgba(18,60,105,0.62)_52%,rgba(6,27,51,0.96)_100%)] p-6 sm:p-10 lg:p-12 shadow-[0_28px_74px_rgba(1,8,18,0.78)]"
          >
            {/* Top Research Accent Rim */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#E8A34A] via-[#5B9BD5] to-[#FF6C65]"
            />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Research Framing & Verified Evaluation Metrics (5 Columns) */}
              <div className="space-y-6 lg:col-span-5">
                <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs">
                  <span className="font-bold text-[#E8A34A]">05</span>
                  <span aria-hidden="true" className="text-[#8AB9DC]/40">
                    /
                  </span>
                  <span className="uppercase tracking-[0.14em] text-[#B8E1F5]">
                    INFORMATION RETRIEVAL / ACADEMIC RESEARCH
                  </span>
                  <span aria-hidden="true" className="text-[#8AB9DC]/40">
                    ·
                  </span>
                  <span className="text-[#E8A34A]">
                    {isId ? 'Skripsi S1 Informatika' : 'Undergraduate Thesis'}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-3xl lg:text-4xl">
                  Running Shoes Semantic Retrieval
                </h3>

                <p className="text-sm leading-relaxed text-[#EAF1F8]/82 sm:text-base">
                  {isId
                    ? 'Penelitian komparatif temu kembali informasi (information retrieval) yang mengevaluasi pembobotan leksikal TF-IDF (5.394 term) terhadap Sentence Embedding (all-MiniLM-L6-v2, 384 dimensi) menggunakan Cosine Similarity pada 475 dokumen sepatu lari.'
                    : 'Comparative information-retrieval research evaluating classical lexical weighting (TF-IDF, 5,394 terms) against dense Sentence Embedding (all-MiniLM-L6-v2, 384 dimensions) using Cosine Similarity across 475 running shoe documents.'}
                </p>

                {/* Verified Dataset & Benchmark Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 rounded-2xl border border-[#8AB9DC]/18 bg-[#021322]/90 p-4 font-mono-tech">
                  <div>
                    <p className="text-[10px] text-[#8AB9DC]">
                      {isId ? 'Data Mentah' : 'Raw Dataset'}
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#EAF1F8]">
                      948 × 30
                    </p>
                    <p className="text-[10px] text-[#8AB9DC]/75">RunRepeat</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8AB9DC]">
                      {isId ? 'Korpus Bersih' : 'Cleaned Docs'}
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#B8E1F5]">
                      475
                    </p>
                    <p className="text-[10px] text-[#8AB9DC]/75">8 attributes</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#E8A34A]">
                      {isId ? 'Kueri Uji' : 'Benchmark'}
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#E8A34A]">
                      30
                    </p>
                    <p className="text-[10px] text-[#8AB9DC]/75">293 pooled</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#FF6C65]">
                      Mean nDCG@5
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#FF6C65]">
                      0.6825
                    </p>
                    <p className="text-[10px] text-[#8AB9DC]/75">vs 0.6492</p>
                  </div>
                </div>

                <div className="font-mono-tech text-xs text-[#8AB9DC]">
                  Python · scikit-learn (TF-IDF) · Sentence-Transformers (all-MiniLM-L6-v2) · Cosine Similarity · Streamlit
                </div>

                <div>
                  <Link
                    href="/projects/semantic-retrieval-running-shoes"
                    className="group inline-flex items-center gap-3 font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#EAF1F8] transition-colors hover:text-[#E8A34A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A34A]"
                  >
                    <span className="border-b border-[#E8A34A] pb-1">
                      {isId
                        ? 'Jelajahi Studi Kasus Penelitian IR'
                        : 'Explore IR Research Case Study'}
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#8AB9DC]/30 bg-[#021F2D] text-[#E8A34A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-[#E8A34A]">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Analytical Retrieval & nDCG@5 Comparison Showcase (7 Columns) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[#8AB9DC]/22 bg-[#021220]/95 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
                  {/* Semantic Query Selector Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#8AB9DC]/15 pb-3 font-mono-tech text-[11px]">
                    <span className="flex items-center gap-2 text-[#B8E1F5]">
                      <Search className="h-3.5 w-3.5 text-[#E8A34A]" aria-hidden="true" />
                      <span>
                        {isId
                          ? 'STUDI KASUS KUERI EKSTREM TERDOKUMENTASI (Q14 vs Q4)'
                          : 'DOCUMENTED EXTREME QUERY CASE COMPARISON (Q14 vs Q4)'}
                      </span>
                    </span>
                    <div className="flex items-center gap-1.5">
                      {p5SampleQueries.map((qItem, qIdx) => (
                        <button
                          key={qItem.code}
                          type="button"
                          onClick={() => setP5QueryIdx(qIdx)}
                          className={`rounded px-2.5 py-0.5 text-[10px] transition-colors ${
                            p5QueryIdx === qIdx
                              ? 'bg-[#E8A34A] font-bold text-[#021220]'
                              : 'bg-[#061B33] text-[#8AB9DC] hover:text-[#EAF1F8]'
                          }`}
                        >
                          {qItem.code}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active Natural Language Query Box */}
                  <div className="mt-4 rounded-xl border border-[#5B9BD5]/25 bg-[#04182B] p-3.5 font-mono-tech">
                    <p className="text-xs text-[#EAF1F8]">
                      {(p5SampleQueries[p5QueryIdx] ?? p5SampleQueries[0]).code}:{' '}
                      {isId
                        ? (p5SampleQueries[p5QueryIdx] ?? p5SampleQueries[0]).queryId
                        : (p5SampleQueries[p5QueryIdx] ?? p5SampleQueries[0]).queryEn}
                    </p>
                    <p className="mt-1 text-[10px] text-[#E8A34A]">
                      {isId
                        ? (p5SampleQueries[p5QueryIdx] ?? p5SampleQueries[0]).focusId
                        : (p5SampleQueries[p5QueryIdx] ?? p5SampleQueries[0]).focusEn}
                    </p>
                  </div>

                  {/* Verified Mean nDCG@5 Comparison Visualization */}
                  <div className="mt-4 space-y-4 rounded-xl border border-[#8AB9DC]/15 bg-[#031526] p-4 font-mono-tech">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="uppercase tracking-[0.1em] text-[#B8E1F5]">
                        {isId
                          ? 'Evaluasi Statistik nDCG@5 (30 Kueri Benchmark)'
                          : 'Verified nDCG@5 Evaluation (Across 30 Queries)'}
                      </span>
                      <span className="text-[#FF6C65]">+0.0333 Mean Gain</span>
                    </div>

                    {/* TF-IDF Bar */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#8AB9DC]">
                          TF-IDF (5,394 Terms · Min 0.1847 · Median 0.6876)
                        </span>
                        <span className="font-bold text-[#B8E1F5]">0.6492</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#061B33]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '64.92%' }}
                          viewport={{ once: true }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
                          className="h-full rounded-full bg-gradient-to-r from-[#2878A8] to-[#5B9BD5]"
                        />
                      </div>
                    </div>

                    {/* Sentence Embedding Bar */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#EAF1F8]">
                          Sentence Embedding (all-MiniLM-L6-v2 · Min 0.3246 · Median 0.6835)
                        </span>
                        <span className="font-bold text-[#FF6C65]">0.6825</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#061B33]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '68.25%' }}
                          viewport={{ once: true }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.9, delay: 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-[#E8A34A] via-[#E97845] to-[#FF6C65]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#8AB9DC]/12 pt-3 text-[11px] text-[#8AB9DC]">
                      <span>
                        {isId
                          ? 'Pooling: 300 hasil Top-5 → 293 pasangan unik dinilai (skala 0–3)'
                          : 'Pooling: 300 Top-5 results → 293 unique pairs graded (0–3 scale)'}
                      </span>
                      <span className="text-[#E8A34A]">
                        Std Dev: 0.2130 vs 0.2156
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>

        {/* ================================================================= */}
        {/* SECTION FOOTER — VIEW ALL PROJECTS ↗                              */}
        {/* ================================================================= */}
        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-[#8AB9DC]/18 pt-10 sm:flex-row sm:items-center">
          <div className="space-y-1">
            <p className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#8AB9DC]">
              {isId
                ? '5 Proyek Terkurasi · 5 Studi Kasus Mendalam Tersedia'
                : '5 Curated Projects · 5 In-Depth Case Studies Published'}
            </p>
            <p className="text-sm text-[#B8E1F5]">
              {isId
                ? 'Buka indeks lengkap proyek untuk membandingkan ruang lingkup, arsitektur, dan bukti sumber.'
                : 'Open the complete project index to compare scope, architecture, and verified source evidence.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveOverlay('all-projects')}
            className="group inline-flex items-center gap-3 rounded-xl border border-[#FF6C65]/50 bg-[#021F2D]/90 px-6 py-3.5 font-mono-tech text-xs font-bold uppercase tracking-[0.14em] text-[#EAF1F8] shadow-[0_12px_34px_rgba(2,10,20,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FF6C65] hover:bg-[#123C69]/70 hover:text-[#FF6C65] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65]"
          >
            <span>{isId ? 'LIHAT SEMUA PROYEK' : 'VIEW ALL PROJECTS'}</span>
            <ArrowUpRight
              className="h-4 w-4 text-[#FF6C65] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* =================================================================== */}
      {/* PREMIUM EDITORIAL PROJECT ARCHIVE MODAL (ALL PROJECTS INDEX)        */}
      {/* =================================================================== */}
      <EditorialProjectArchiveModal
        isOpen={activeOverlay === 'all-projects'}
        onClose={() => setActiveOverlay(null)}
        isId={isId}
      />
    </section>
  );
}
