'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  X,
  Maximize2,
  Database,
  Workflow,
  BarChart3,
  FileSpreadsheet,
  Search,
  Layers,
} from 'lucide-react';

interface EditorialProjectArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  isId: boolean;
}

interface EnlargedAsset {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  width: number;
  height: number;
}

export function EditorialProjectArchiveModal({
  isOpen,
  onClose,
  isId,
}: EditorialProjectArchiveModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const [enlargedAsset, setEnlargedAsset] = useState<EnlargedAsset | null>(null);
  const [p2PreviewMode, setP2PreviewMode] = useState<'delivered' | 'sulekha' | 'maps'>('delivered');
  const [p5PreviewMode, setP5PreviewMode] = useState<'evaluation' | 'workflow'>('evaluation');

  // Lock page scrolling when archive modal is open and restore on close/unmount
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (enlargedAsset) {
          setEnlargedAsset(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, enlargedAsset]);

  const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const p2Assets = {
    delivered: {
      src: '/assets/projects/us-law-firms-data-collection/sample1.png',
      secondarySrc: '/assets/projects/us-law-firms-data-collection/sample2.png',
      alt: 'Sanitized US Immigration Law Firms delivered Excel dataset screenshot showing structured columns and verified records',
      labelEn: 'Delivered Excel Dataset (500 Records)',
      labelId: 'Dataset Excel Akhir (500 Rekaman)',
      width: 930,
      height: 212,
    },
    sulekha: {
      src: '/assets/projects/us-law-firms-data-collection/sulekha.png',
      secondarySrc: null,
      alt: 'Sulekha public directory listing source (~500 records collected)',
      labelEn: 'Sulekha Directory Source (~500 Records)',
      labelId: 'Sumber Direktori Sulekha (~500 Rekaman)',
      width: 1280,
      height: 720,
    },
    maps: {
      src: '/assets/projects/us-law-firms-data-collection/maps.png',
      secondarySrc: null,
      alt: 'Google Maps public directory extraction source (438 records collected)',
      labelEn: 'Google Maps Source (438 Records)',
      labelId: 'Sumber Google Maps (438 Rekaman)',
      width: 1280,
      height: 720,
    },
  };

  const p5Assets = {
    evaluation: {
      src: '/assets/projects/semantic-retrieval-running-shoes/01_ndcg_charts_and_table.png',
      alt: 'Comparative nDCG@5 evaluation chart and statistical summary table comparing TF-IDF (0.6492) against Sentence Embedding all-MiniLM-L6-v2 (0.6825)',
      labelEn: 'TF-IDF vs Sentence Embedding nDCG@5 Evaluation',
      labelId: 'Evaluasi nDCG@5 TF-IDF vs Sentence Embedding',
      width: 1760,
      height: 960,
    },
    workflow: {
      src: '/assets/projects/semantic-retrieval-running-shoes/02_research_workflow_overview.png',
      alt: 'Semantic retrieval research pipeline and methodology architecture diagram',
      labelEn: 'Information Retrieval Pipeline Architecture',
      labelId: 'Arsitektur Alur Temu Kembali Informasi',
      width: 1760,
      height: 850,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="editorial-archive-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#010A15]/90 p-2.5 sm:p-5 lg:p-7 backdrop-blur-2xl"
        >
          {/* =============================================================== */}
          {/* ARCHIVE SHELL CONTAINER                                         */}
          {/* =============================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.96,
              y: shouldReduceMotion ? 0 : 18,
            }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.97,
              y: shouldReduceMotion ? 0 : 10,
            }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease: revealEase }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-[1360px] flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-[#8AB9DC]/28 bg-[#061B33] shadow-[0_40px_120px_rgba(0,4,12,0.92)]"
          >
            {/* Top Specular Accent Rim */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px bg-gradient-to-r from-[#FF6C65] via-[#4169E1] to-[#E8A34A]"
            />

            {/* ============================================================= */}
            {/* A. ARCHIVE HEADER (STICKY TOP BAR + EDITORIAL INTRO)          */}
            {/* ============================================================= */}
            <div className="relative z-20 shrink-0 border-b border-[#8AB9DC]/18 bg-gradient-to-r from-[#061B33]/96 via-[#002147]/96 to-[#021F2D]/96 px-5 py-4 sm:px-8 sm:py-5 lg:px-12 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div className="max-w-3xl">
                  <p className="font-mono-tech text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#FF6C65]">
                    {isId
                      ? 'PROJECT INDEX · 05 PROYEK UNGGULAN'
                      : 'PROJECT INDEX · 05 FEATURED PROJECTS'}
                  </p>
                  <h2
                    id="editorial-archive-heading"
                    className="mt-1.5 text-2xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-3xl lg:text-4xl"
                  >
                    {isId ? 'Semua Proyek & Studi Kasus' : 'All Projects & Case Studies'}
                  </h2>
                  <p className="mt-2 max-w-2xl text-xs leading-relaxed text-[#B8E1F5]/90 sm:text-sm">
                    {isId
                      ? 'Koleksi solusi analitik, sistem data terstruktur, dan alur kerja cerdas yang dibangun melalui proyek praktis dan penelitian.'
                      : 'A collection of analytical solutions, structured data systems, and intelligent workflows built through practical projects and research.'}
                  </p>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={isId ? 'Tutup arsip proyek' : 'Close project archive'}
                  className="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#8AB9DC]/28 bg-[#021F2D]/90 text-[#EAF1F8] transition-all duration-200 hover:border-[#FF6C65] hover:bg-[#FF6C65] hover:text-[#021F2D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65]"
                >
                  <X className="h-4 w-4 transition-transform duration-200 group-hover:rotate-90" aria-hidden="true" />
                </button>
              </div>

              {/* Technical Narrative Progression Bar */}
              <div className="mt-3.5 hidden flex-wrap items-center justify-between gap-3 border-t border-[#8AB9DC]/12 pt-3 md:flex">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-tech text-[10px] uppercase tracking-[0.12em] text-[#8AB9DC]">
                  <span className="text-[#EAF1F8]">DATA COLLECTION</span>
                  <span aria-hidden="true" className="text-[#FF6C65]">→</span>
                  <span>DATA PROCESSING</span>
                  <span aria-hidden="true" className="text-[#FF6C65]">→</span>
                  <span className="text-[#EAF1F8]">BUSINESS INTELLIGENCE</span>
                  <span aria-hidden="true" className="text-[#FF6C65]">→</span>
                  <span>DATABASE ENGINEERING</span>
                  <span aria-hidden="true" className="text-[#FF6C65]">→</span>
                  <span className="text-[#EAF1F8]">AI AUTOMATION</span>
                  <span aria-hidden="true" className="text-[#FF6C65]">→</span>
                  <span>INFORMATION RETRIEVAL</span>
                </div>

                <span className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-[#B8E1F5]/75">
                  {isId ? 'KLIK GAMBAR UNTUK MEMPERBESAR BUKTI' : 'CLICK ANY VISUAL TO ENLARGE EVIDENCE'}
                </span>
              </div>
            </div>

            {/* ============================================================= */}
            {/* B. SCROLLABLE ASYMMETRIC EDITORIAL SHOWCASE                   */}
            {/* ============================================================= */}
            <div className="relative flex-1 overflow-y-auto overscroll-contain">
              {/* Subtle atmospheric grid across the archive canvas */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-atmospheric-grid opacity-35"
              />

              {/* =========================================================== */}
              {/* PROJECT 01 — AUTOMOTIVE SALES ANALYSIS                      */}
              {/* Asymmetric Composition 01: Large horizontal BI dashboard    */}
              {/* stage (7 cols) + overlapping/adjacent KPI & narrative (5)   */}
              {/* Surface: Oxford Blue (#002147) & Royal Blue (#4169E1) glow  */}
              {/* =========================================================== */}
              <section
                aria-labelledby="archive-p1-title"
                className="relative border-b border-[#8AB9DC]/16 bg-[linear-gradient(155deg,rgba(0,33,71,0.92)_0%,rgba(6,27,51,0.95)_52%,rgba(18,60,105,0.55)_100%)] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-10 left-8 h-80 w-96 rounded-full bg-radial from-[#4169E1]/22 via-[#1E4D8C]/12 to-transparent blur-3xl"
                />

                <div className="relative z-10 mx-auto max-w-[1220px]">
                  {/* Top Editorial Rubric */}
                  <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: revealEase }}
                    className="mb-6 flex flex-wrap items-center justify-between gap-3"
                  >
                    <div className="flex flex-wrap items-center gap-2.5 font-mono-tech text-xs">
                      <span className="inline-flex items-center justify-center rounded-md border border-[#FF6C65]/45 bg-[#FF6C65]/12 px-2 py-0.5 font-bold text-[#FF6C65]">
                        01
                      </span>
                      <span className="uppercase tracking-[0.14em] text-[#B8E1F5]">
                        Data Analytics / Business Intelligence
                      </span>
                      <span aria-hidden="true" className="text-[#8AB9DC]/40">·</span>
                      <span className="text-[#8AB9DC]">
                        KarirNex Data Analyst Bootcamp
                      </span>
                    </div>

                    <span className="font-mono-tech text-[11px] text-[#8AB9DC]">
                      <BarChart3 className="mr-1.5 inline h-3.5 w-3.5 text-[#4169E1]" aria-hidden="true" />
                      Executive BI & Multi-Stage Analytics
                    </span>
                  </motion.div>

                  {/* Asymmetric 12-Column Composition */}
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                    {/* Left Large Horizontal Dashboard Stage (7 Columns) */}
                    <motion.div
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: revealEase }}
                      className="lg:col-span-7"
                    >
                      <div className="group relative overflow-hidden rounded-2xl border border-[#8AB9DC]/26 bg-gradient-to-b from-[#0C315C]/90 via-[#002147] to-[#021322] p-3 sm:p-4 shadow-[0_28px_72px_rgba(1,7,16,0.82)]">
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#FF6C65]/80 via-[#4169E1] to-[#5B9BD5]/50"
                        />

                        {/* Window Bar */}
                        <div className="mb-2.5 flex items-center justify-between gap-2 px-1">
                          <div className="flex items-center gap-2 font-mono-tech text-[11px] text-[#B8E1F5]">
                            <span className="h-2 w-2 rounded-full bg-[#FF6C65]" aria-hidden="true" />
                            <span>Task 4 · Power BI Executive Sales Dashboard</span>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setEnlargedAsset({
                                src: '/assets/projects/automotive-sales-analysis/01_powerbi_dashboard.png',
                                alt: 'Power BI Automotive Sales Dashboard displaying Rp26.02B Total Sales, 98 Transactions, 119 Quantity, and 89.8% Completion Rate',
                                title: 'Automotive Sales Analysis — Power BI Dashboard',
                                subtitle: 'Data Analytics / Business Intelligence · KarirNex Data Analyst Bootcamp',
                                width: 603,
                                height: 339,
                              })
                            }
                            className="inline-flex items-center gap-1.5 rounded-md border border-[#8AB9DC]/22 bg-[#061B33]/90 px-2.5 py-1 font-mono-tech text-[10px] text-[#EAF1F8] transition-colors hover:border-[#FF6C65] hover:text-[#FF6C65]"
                          >
                            <Maximize2 className="h-3 w-3" aria-hidden="true" />
                            <span>{isId ? 'Perbesar' : 'Enlarge'}</span>
                          </button>
                        </div>

                        {/* Authentic Power BI Screenshot */}
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            setEnlargedAsset({
                              src: '/assets/projects/automotive-sales-analysis/01_powerbi_dashboard.png',
                              alt: 'Power BI Automotive Sales Dashboard displaying Rp26.02B Total Sales, 98 Transactions, 119 Quantity, and 89.8% Completion Rate',
                              title: 'Automotive Sales Analysis — Power BI Dashboard',
                              subtitle: 'Data Analytics / Business Intelligence · KarirNex Data Analyst Bootcamp',
                              width: 603,
                              height: 339,
                            })
                          }
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setEnlargedAsset({
                                src: '/assets/projects/automotive-sales-analysis/01_powerbi_dashboard.png',
                                alt: 'Power BI Automotive Sales Dashboard displaying Rp26.02B Total Sales, 98 Transactions, 119 Quantity, and 89.8% Completion Rate',
                                title: 'Automotive Sales Analysis — Power BI Dashboard',
                                subtitle: 'Data Analytics / Business Intelligence · KarirNex Data Analyst Bootcamp',
                                width: 603,
                                height: 339,
                              });
                            }
                          }}
                          className="relative cursor-zoom-in overflow-hidden rounded-xl border border-[#8AB9DC]/20 bg-[#02111E]"
                        >
                          <Image
                            src="/assets/projects/automotive-sales-analysis/01_powerbi_dashboard.png"
                            alt="Power BI Automotive Sales Dashboard displaying Rp26.02B Total Sales, 98 Transactions, 119 Quantity, and 89.8% Completion Rate"
                            width={603}
                            height={339}
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            referrerPolicy="no-referrer"
                            className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Project Information & Strong Numerical Evidence (5 Columns, slight negative overlap on desktop) */}
                    <motion.div
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.55,
                        delay: shouldReduceMotion ? 0 : 0.1,
                        ease: revealEase,
                      }}
                      className="space-y-5 lg:col-span-5 lg:-ml-4"
                    >
                      <div className="rounded-2xl border border-[#8AB9DC]/24 bg-gradient-to-br from-[#061B33]/95 via-[#002147]/95 to-[#021F2D]/95 p-6 sm:p-7 shadow-[0_24px_60px_rgba(1,8,18,0.75)] backdrop-blur-xl">
                        <h3
                          id="archive-p1-title"
                          className="text-2xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-3xl"
                        >
                          Automotive Sales Analysis
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-[#EAF1F8]/84 sm:text-base">
                          {isId
                            ? 'Analitik otomotif multi-tahap yang mencakup Excel, SQL, Python, dan Power BI.'
                            : 'Multi-stage automotive analytics involving Excel, SQL, Python, and Power BI.'}
                        </p>

                        {/* Strong Numerical Evidence Grid */}
                        <div className="mt-5 grid grid-cols-2 gap-3 border-y border-[#8AB9DC]/16 py-4 font-mono-tech">
                          <div className="rounded-xl border border-[#4169E1]/30 bg-[#021324]/90 p-3">
                            <p className="text-[10px] uppercase tracking-[0.1em] text-[#8AB9DC]">
                              Total Sales
                            </p>
                            <p className="mt-1 text-lg font-extrabold text-[#EAF1F8] sm:text-xl">
                              Rp26.02B
                            </p>
                          </div>
                          <div className="rounded-xl border border-[#8AB9DC]/18 bg-[#021324]/90 p-3">
                            <p className="text-[10px] uppercase tracking-[0.1em] text-[#8AB9DC]">
                              Transactions
                            </p>
                            <p className="mt-1 text-lg font-extrabold text-[#B8E1F5] sm:text-xl">
                              98
                            </p>
                          </div>
                          <div className="rounded-xl border border-[#8AB9DC]/18 bg-[#021324]/90 p-3">
                            <p className="text-[10px] uppercase tracking-[0.1em] text-[#8AB9DC]">
                              Quantity
                            </p>
                            <p className="mt-1 text-lg font-extrabold text-[#B8E1F5] sm:text-xl">
                              119
                            </p>
                          </div>
                          <div className="rounded-xl border border-[#FF6C65]/35 bg-[#021324]/90 p-3">
                            <p className="text-[10px] uppercase tracking-[0.1em] text-[#FF6C65]">
                              Completion Rate
                            </p>
                            <p className="mt-1 text-lg font-extrabold text-[#FF6C65] sm:text-xl">
                              89.8%
                            </p>
                          </div>
                        </div>

                        {/* Technology Stack */}
                        <div className="mt-4">
                          <p className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-[#8AB9DC]">
                            {isId ? 'TEKNOLOGI' : 'TECHNOLOGY'}
                          </p>
                          <p className="mt-1 font-mono-tech text-xs font-medium text-[#B8E1F5]">
                            Microsoft Excel · Google BigQuery · Python · Power BI
                          </p>
                        </div>

                        {/* Open Case Study CTA */}
                        <div className="mt-6">
                          <Link
                            href="/projects/automotive-sales-analysis"
                            onClick={onClose}
                            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#FF6C65] px-5 py-3 font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#021F2D] shadow-[0_10px_28px_rgba(255,108,101,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff827c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAF1F8]"
                          >
                            <span>{isId ? 'Buka Studi Kasus' : 'Open Case Study'}</span>
                            <ArrowUpRight
                              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* =========================================================== */}
              {/* PROJECT 02 — US LAW FIRMS DATA COLLECTION                   */}
              {/* Asymmetric Composition 02: Reversed alignment (5 cols left  */}
              {/* narrative + 7 cols right dataset specimen & floating badge) */}
              {/* Surface: Ocean Navy (#021F2D) & Muted Amber (#E8A34A)       */}
              {/* =========================================================== */}
              <section
                aria-labelledby="archive-p2-title"
                className="relative border-b border-[#8AB9DC]/16 bg-[linear-gradient(160deg,rgba(2,31,45,0.96)_0%,rgba(6,27,51,0.92)_55%,rgba(0,33,71,0.9)_100%)] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-14 right-10 h-72 w-96 rounded-full bg-radial from-[#E8A34A]/14 via-[#2878A8]/16 to-transparent blur-3xl"
                />

                <div className="relative z-10 mx-auto max-w-[1220px]">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                    {/* Left Reversed Narrative Column (5 Columns) */}
                    <motion.div
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: revealEase }}
                      className="order-2 space-y-5 lg:order-1 lg:col-span-5"
                    >
                      <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs">
                        <span className="inline-flex items-center justify-center rounded-md border border-[#E8A34A]/45 bg-[#E8A34A]/12 px-2 py-0.5 font-bold text-[#E8A34A]">
                          02
                        </span>
                        <span className="uppercase tracking-[0.14em] text-[#E8A34A]">
                          Data Collection / Web Scraping
                        </span>
                        <span aria-hidden="true" className="text-[#8AB9DC]/40">·</span>
                        <span className="text-[#B8E1F5]">
                          {isId ? 'Proyek Freelance' : 'Freelance Project'}
                        </span>
                      </div>

                      <h3
                        id="archive-p2-title"
                        className="text-2xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-3xl"
                      >
                        US Law Firms Data Collection
                      </h3>

                      <p className="text-sm leading-relaxed text-[#EAF1F8]/84 sm:text-base">
                        {isId
                          ? 'Pengumpulan dan penstrukturan direktori publik lintas sumber untuk firma hukum imigrasi AS.'
                          : 'Cross-source public directory collection and structuring of US immigration law firms.'}
                      </p>

                      {/* Verified Collection Metrics List */}
                      <div className="space-y-2.5 rounded-2xl border border-[#E8A34A]/28 bg-[#031826]/90 p-5 font-mono-tech">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-[#E8A34A]">
                          {isId ? 'METRIK PENGUMPULAN TERVERIFIKASI' : 'VERIFIED COLLECTION METRICS'}
                        </p>
                        <div className="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-3 lg:grid-cols-1">
                          <div className="flex items-center justify-between rounded-xl border border-[#8AB9DC]/14 bg-[#02121E] px-3.5 py-2.5">
                            <span className="text-xs text-[#8AB9DC]">Sulekha Directory</span>
                            <span className="text-xs font-bold text-[#EAF1F8]">
                              {isId ? '~500 rekaman' : 'Approximately 500 records'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between rounded-xl border border-[#8AB9DC]/14 bg-[#02121E] px-3.5 py-2.5">
                            <span className="text-xs text-[#8AB9DC]">Google Maps</span>
                            <span className="text-xs font-bold text-[#B8E1F5]">
                              {isId ? '438 rekaman dikumpulkan' : '438 records collected'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between rounded-xl border border-[#E8A34A]/35 bg-[#02121E] px-3.5 py-2.5">
                            <span className="text-xs text-[#E8A34A]">Delivered Output</span>
                            <span className="text-xs font-bold text-[#E8A34A]">
                              {isId ? '500 rekaman akhir' : '500 final delivered records'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-[#8AB9DC]">
                          {isId ? 'TEKNOLOGI' : 'TECHNOLOGY'}
                        </p>
                        <p className="mt-1 font-mono-tech text-xs font-medium text-[#B8E1F5]">
                          Python · Requests · BeautifulSoup · Pandas · Excel
                        </p>
                      </div>

                      <div className="pt-1">
                        <Link
                          href="/projects/us-law-firms-data-collection"
                          onClick={onClose}
                          className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-[#E8A34A]/55 bg-[#021F2D] px-5 py-3 font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#EAF1F8] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E8A34A] hover:bg-[#E8A34A] hover:text-[#021F2D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A34A]"
                        >
                          <span>{isId ? 'Buka Studi Kasus' : 'Open Case Study'}</span>
                          <ArrowUpRight
                            className="h-4 w-4 text-[#E8A34A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#021F2D]"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </motion.div>

                    {/* Right Large Dataset Visual Element with Floating Metadata Annotation (7 Columns) */}
                    <motion.div
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.55,
                        delay: shouldReduceMotion ? 0 : 0.1,
                        ease: revealEase,
                      }}
                      className="order-1 lg:order-2 lg:col-span-7"
                    >
                      <div className="group relative overflow-hidden rounded-2xl border border-[#5B9BD5]/28 bg-gradient-to-br from-[#032436] via-[#061B33] to-[#021320] p-4 sm:p-5 shadow-[0_28px_72px_rgba(1,8,18,0.82)]">
                        {/* Floating Metadata Label & Source Switcher */}
                        <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            {(
                              [
                                { id: 'delivered', labelEn: 'Delivered Dataset', labelId: 'Dataset Akhir' },
                                { id: 'sulekha', labelEn: 'Sulekha (~500)', labelId: 'Sulekha (~500)' },
                                { id: 'maps', labelEn: 'Google Maps (438)', labelId: 'Google Maps (438)' },
                              ] as const
                            ).map((tab) => {
                              const active = p2PreviewMode === tab.id;
                              return (
                                <button
                                  key={tab.id}
                                  type="button"
                                  onClick={() => setP2PreviewMode(tab.id)}
                                  className={`rounded-md px-2.5 py-1 font-mono-tech text-[10px] transition-colors ${
                                    active
                                      ? 'bg-[#E8A34A] font-bold text-[#021F2D]'
                                      : 'bg-[#021523] text-[#8AB9DC] hover:text-[#EAF1F8]'
                                  }`}
                                >
                                  {isId ? tab.labelId : tab.labelEn}
                                </button>
                              );
                            })}
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E8A34A]/35 bg-[#021523]/90 px-2.5 py-1 font-mono-tech text-[10px] text-[#E8A34A]">
                              <FileSpreadsheet className="h-3 w-3" aria-hidden="true" />
                              500 Final Records
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                setEnlargedAsset({
                                  src: p2Assets[p2PreviewMode].src,
                                  alt: p2Assets[p2PreviewMode].alt,
                                  title: `US Law Firms Data Collection — ${p2Assets[p2PreviewMode].labelEn}`,
                                  subtitle: 'Data Collection / Web Scraping · Freelance Project',
                                  width: p2Assets[p2PreviewMode].width,
                                  height: p2Assets[p2PreviewMode].height,
                                })
                              }
                              className="inline-flex items-center gap-1 rounded-md border border-[#8AB9DC]/22 bg-[#061B33] px-2 py-1 font-mono-tech text-[10px] text-[#EAF1F8] hover:border-[#E8A34A] hover:text-[#E8A34A]"
                            >
                              <Maximize2 className="h-3 w-3" aria-hidden="true" />
                              <span>{isId ? 'Perbesar' : 'Enlarge'}</span>
                            </button>
                          </div>
                        </div>

                        {/* Authentic Dataset / Source Screenshot Container */}
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            setEnlargedAsset({
                              src: p2Assets[p2PreviewMode].src,
                              alt: p2Assets[p2PreviewMode].alt,
                              title: `US Law Firms Data Collection — ${p2Assets[p2PreviewMode].labelEn}`,
                              subtitle: 'Data Collection / Web Scraping · Freelance Project',
                              width: p2Assets[p2PreviewMode].width,
                              height: p2Assets[p2PreviewMode].height,
                            })
                          }
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setEnlargedAsset({
                                src: p2Assets[p2PreviewMode].src,
                                alt: p2Assets[p2PreviewMode].alt,
                                title: `US Law Firms Data Collection — ${p2Assets[p2PreviewMode].labelEn}`,
                                subtitle: 'Data Collection / Web Scraping · Freelance Project',
                                width: p2Assets[p2PreviewMode].width,
                                height: p2Assets[p2PreviewMode].height,
                              });
                            }
                          }}
                          className="cursor-zoom-in space-y-2.5 rounded-xl border border-[#8AB9DC]/20 bg-[#010E19] p-3"
                        >
                          <div className="overflow-hidden rounded-lg border border-[#8AB9DC]/15 bg-[#021220]">
                            <Image
                              src={p2Assets[p2PreviewMode].src}
                              alt={p2Assets[p2PreviewMode].alt}
                              width={p2Assets[p2PreviewMode].width}
                              height={p2Assets[p2PreviewMode].height}
                              sizes="(max-width: 1024px) 100vw, 58vw"
                              referrerPolicy="no-referrer"
                              className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.012]"
                            />
                          </div>

                          {/* When viewing the wide Delivered Dataset (930x212), also display Part 2 (Columns G-L) so the specimen fills the visual stage richly without cropping */}
                          {p2PreviewMode === 'delivered' && p2Assets.delivered.secondarySrc && (
                            <div className="overflow-hidden rounded-lg border border-[#8AB9DC]/15 bg-[#021220]">
                              <Image
                                src={p2Assets.delivered.secondarySrc}
                                alt="Sanitized US Immigration Law Firms delivered dataset extended contact and website columns"
                                width={930}
                                height={212}
                                sizes="(max-width: 1024px) 100vw, 58vw"
                                referrerPolicy="no-referrer"
                                className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.012]"
                              />
                            </div>
                          )}
                        </div>

                        {/* Compact Floating Evidence Annotation Strip */}
                        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#E8A34A]/25 bg-[#021422]/90 px-3.5 py-2.5 font-mono-tech text-[11px]">
                          <span className="text-[#EAF1F8]">
                            {isId
                              ? 'Sampel Tersanitasi · Ekstraksi Semi-Otomatis + Verifikasi Kualitas Manual'
                              : 'Sanitized Specimen · Semi-Automated Extraction + Manual Quality Verification'}
                          </span>
                          <span className="text-[#E8A34A]">~500 + 438 → 500 Records</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* =========================================================== */}
              {/* PROJECT 03 — E-COMMERCE DATABASE MANAGEMENT                 */}
              {/* Asymmetric Composition 03: Technical Blueprint Architecture */}
              {/* ERD Schema Visual + 8-Part SQL Engineering Specification    */}
              {/* Surface: Royal Navy (#123C69) & Steel Blue (#5B9BD5)        */}
              {/* =========================================================== */}
              <section
                aria-labelledby="archive-p3-title"
                className="relative border-b border-[#8AB9DC]/16 bg-[linear-gradient(150deg,rgba(18,60,105,0.48)_0%,rgba(0,33,71,0.94)_48%,rgba(2,31,45,0.96)_100%)] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
              >
                <div className="relative z-10 mx-auto max-w-[1220px]">
                  {/* Technical Blueprint Header Strip */}
                  <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: revealEase }}
                    className="mb-7 flex flex-col justify-between gap-4 border-b border-[#5B9BD5]/22 pb-5 lg:flex-row lg:items-end"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 font-mono-tech text-xs">
                        <span className="inline-flex items-center justify-center rounded-md border border-[#5B9BD5]/50 bg-[#5B9BD5]/15 px-2 py-0.5 font-bold text-[#5B9BD5]">
                          03
                        </span>
                        <span className="uppercase tracking-[0.14em] text-[#B8E1F5]">
                          SQL / Relational Database Design
                        </span>
                        <span aria-hidden="true" className="text-[#8AB9DC]/40">·</span>
                        <span className="text-[#FF6C65]">
                          {isId ? 'Proyek Kelompok Akademik' : 'Academic Group Project'}
                        </span>
                      </div>
                      <h3
                        id="archive-p3-title"
                        className="mt-2 text-2xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-3xl lg:text-4xl"
                      >
                        E-Commerce Database Management
                      </h3>
                    </div>

                    <p className="max-w-xl text-sm leading-relaxed text-[#EAF1F8]/84 sm:text-base">
                      {isId
                        ? 'Proyek akademik kolaboratif yang berfokus pada arsitektur basis data relasional dan pemrograman SQL.'
                        : 'Collaborative academic project focused on relational database architecture and SQL programming.'}
                    </p>
                  </motion.div>

                  {/* Technical Architecture Split: 7-Column ERD Blueprint + 5-Column Implementation Ledger */}
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                    {/* Left ERD Schema Visual Frame (7 Columns) */}
                    <motion.div
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: revealEase }}
                      className="lg:col-span-7"
                    >
                      <div className="group relative overflow-hidden rounded-2xl border border-[#5B9BD5]/32 bg-[#021220] p-3.5 sm:p-5 shadow-[0_28px_70px_rgba(1,8,18,0.82)]">
                        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2 font-mono-tech text-[11px] text-[#5B9BD5]">
                            <Database className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>SCHEMA BLUEPRINT · PHPMYADMIN DESIGNER ERD</span>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setEnlargedAsset({
                                src: '/assets/projects/ecommerce-database-management/01_erd_schema.png',
                                alt: 'Entity Relationship Diagram (ERD) for the E-Commerce Database Management project showing 6 tables and foreign-key relationships',
                                title: 'E-Commerce Database Management — ERD Architecture',
                                subtitle: 'SQL / Relational Database Design · Academic Group Project',
                                width: 1070,
                                height: 660,
                              })
                            }
                            className="inline-flex items-center gap-1.5 rounded-md border border-[#5B9BD5]/30 bg-[#061B33] px-2.5 py-1 font-mono-tech text-[10px] text-[#EAF1F8] transition-colors hover:border-[#5B9BD5] hover:text-[#5B9BD5]"
                          >
                            <Maximize2 className="h-3 w-3" aria-hidden="true" />
                            <span>{isId ? 'Perbesar ERD' : 'Enlarge ERD'}</span>
                          </button>
                        </div>

                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            setEnlargedAsset({
                              src: '/assets/projects/ecommerce-database-management/01_erd_schema.png',
                              alt: 'Entity Relationship Diagram (ERD) for the E-Commerce Database Management project showing 6 tables and foreign-key relationships',
                              title: 'E-Commerce Database Management — ERD Architecture',
                              subtitle: 'SQL / Relational Database Design · Academic Group Project',
                              width: 1070,
                              height: 660,
                            })
                          }
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setEnlargedAsset({
                                src: '/assets/projects/ecommerce-database-management/01_erd_schema.png',
                                alt: 'Entity Relationship Diagram (ERD) for the E-Commerce Database Management project showing 6 tables and foreign-key relationships',
                                title: 'E-Commerce Database Management — ERD Architecture',
                                subtitle: 'SQL / Relational Database Design · Academic Group Project',
                                width: 1070,
                                height: 660,
                              });
                            }
                          }}
                          className="cursor-zoom-in overflow-hidden rounded-xl border border-[#5B9BD5]/22 bg-[#031728] p-2"
                        >
                          <Image
                            src="/assets/projects/ecommerce-database-management/01_erd_schema.png"
                            alt="Entity Relationship Diagram (ERD) for the E-Commerce Database Management project showing 6 tables and foreign-key relationships"
                            width={1070}
                            height={660}
                            sizes="(max-width: 1024px) 100vw, 58vw"
                            referrerPolicy="no-referrer"
                            className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                          />
                        </div>

                        {/* Technical Entity Annotation Footer */}
                        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono-tech text-[11px] text-[#8AB9DC]">
                          <span>
                            Customers · Products · Orders · OrderDetails · Payments · log_changes
                          </span>
                          <span className="text-[#5B9BD5]">3NF Relational Integrity</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Verified Implementation Matrix (5 Columns) */}
                    <motion.div
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.55,
                        delay: shouldReduceMotion ? 0 : 0.1,
                        ease: revealEase,
                      }}
                      className="space-y-5 lg:col-span-5"
                    >
                      <div className="rounded-2xl border border-[#5B9BD5]/28 bg-[#031627]/95 p-6 shadow-[0_22px_55px_rgba(1,8,18,0.75)]">
                        <p className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-[#5B9BD5]">
                          {isId ? 'IMPLEMENTASI TERVERIFIKASI' : 'VERIFIED IMPLEMENTATION'}
                        </p>

                        {/* 8 Verified Database Engineering Pillars */}
                        <div className="mt-3.5 grid grid-cols-2 gap-2.5 font-mono-tech">
                          {[
                            { label: '6 Tables', note: 'Core + Audit Log', accent: 'text-[#EAF1F8]' },
                            { label: 'ERD', note: 'Relational Schema', accent: 'text-[#5B9BD5]' },
                            { label: '2 SQL Functions', note: 'Deterministic', accent: 'text-[#B8E1F5]' },
                            { label: '3 Stored Procedures', note: 'Stock & Order Ops', accent: 'text-[#B8E1F5]' },
                            { label: '6 Triggers', note: 'BEFORE / AFTER Audit', accent: 'text-[#E8A34A]' },
                            { label: '3 Composite Indexes', note: 'BTREE Lookup', accent: 'text-[#E8A34A]' },
                            { label: '4 Views', note: 'WITH CHECK OPTION', accent: 'text-[#FF6C65]' },
                            { label: 'RBAC', note: 'Role Privileges', accent: 'text-[#FF6C65]' },
                          ].map((item) => (
                            <div
                              key={item.label}
                              className="rounded-xl border border-[#8AB9DC]/16 bg-[#02111F] p-3"
                            >
                              <p className={`text-sm font-bold ${item.accent}`}>{item.label}</p>
                              <p className="mt-0.5 text-[10px] text-[#8AB9DC]">{item.note}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 border-t border-[#8AB9DC]/14 pt-4">
                          <p className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-[#8AB9DC]">
                            {isId ? 'TEKNOLOGI' : 'TECHNOLOGY'}
                          </p>
                          <p className="mt-1 font-mono-tech text-xs font-medium text-[#B8E1F5]">
                            SQL · Relational Database Design · Database Engineering
                          </p>
                        </div>

                        <div className="mt-6">
                          <Link
                            href="/projects/ecommerce-database-management"
                            onClick={onClose}
                            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-[#5B9BD5]/55 bg-[#021F2D] px-5 py-3 font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#EAF1F8] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#5B9BD5] hover:bg-[#5B9BD5] hover:text-[#021220] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B9BD5]"
                          >
                            <span>{isId ? 'Buka Studi Kasus' : 'Open Case Study'}</span>
                            <ArrowUpRight
                              className="h-4 w-4 text-[#5B9BD5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#021220]"
                              aria-hidden="true"
                            />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* =========================================================== */}
              {/* PROJECT 04 — AI DATA ANALYST AGENT                          */}
              {/* Asymmetric Composition 04: Wide Panoramic Workflow Stage    */}
              {/* Full-width latest Langflow dark-themed screenshot (2001x786)*/}
              {/* + Connected 5-stage sequential processing pipeline          */}
              {/* Surface: Midnight Navy (#061B33) & Signal Coral (#FF6C65)   */}
              {/* =========================================================== */}
              <section
                aria-labelledby="archive-p4-title"
                className="relative border-b border-[#8AB9DC]/16 bg-[linear-gradient(165deg,rgba(6,27,51,0.97)_0%,rgba(0,33,71,0.92)_50%,rgba(30,77,140,0.42)_100%)] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-10 left-1/4 h-72 w-[520px] rounded-full bg-radial from-[#FF6C65]/14 via-[#4169E1]/14 to-transparent blur-3xl"
                />

                <div className="relative z-10 mx-auto max-w-[1220px]">
                  {/* Asymmetric Two-Column Editorial Header */}
                  <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: revealEase }}
                    className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end"
                  >
                    <div className="lg:col-span-7">
                      <div className="flex flex-wrap items-center gap-2.5 font-mono-tech text-xs">
                        <span className="inline-flex items-center justify-center rounded-md border border-[#FF6C65]/50 bg-[#FF6C65]/15 px-2 py-0.5 font-bold text-[#FF6C65]">
                          04
                        </span>
                        <span className="uppercase tracking-[0.14em] text-[#FF6C65]">
                          AI Integration / Workflow Automation
                        </span>
                        <span aria-hidden="true" className="text-[#8AB9DC]/40">·</span>
                        <span className="text-[#B8E1F5]">IBM / Hacktiv8</span>
                      </div>

                      <h3
                        id="archive-p4-title"
                        className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-3xl lg:text-4xl"
                      >
                        AI Data Analyst Agent
                      </h3>
                    </div>

                    <div className="lg:col-span-5">
                      <p className="text-sm leading-relaxed text-[#EAF1F8]/84 sm:text-base">
                        {isId
                          ? 'Alur kerja LLM sekuensial untuk memproses data ulasan pelanggan menjadi output analitik terstruktur.'
                          : 'A sequential LLM workflow for processing customer review data into structured analytical outputs.'}
                      </p>
                    </div>
                  </motion.div>

                  {/* Wide Panoramic Langflow Workflow Screenshot Canvas (2001 x 786) */}
                  <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.55,
                      delay: shouldReduceMotion ? 0 : 0.08,
                      ease: revealEase,
                    }}
                    className="mt-7 group relative overflow-hidden rounded-2xl border border-[#FF6C65]/32 bg-gradient-to-b from-[#0A2546]/90 via-[#031322] to-[#010810] p-3.5 sm:p-5 shadow-[0_32px_80px_rgba(0,4,10,0.88)]"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#FF6C65] via-[#E97845] to-[#4169E1]"
                    />

                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 font-mono-tech text-[11px] text-[#FF6C65]">
                        <Workflow className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>
                          {isId
                            ? 'ARSITEKTUR ALUR KERJA 6-NODE LANGFLOW (URUTAN SEKUENSIAL)'
                            : 'LANGFLOW 6-NODE SEQUENTIAL WORKFLOW ARCHITECTURE'}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setEnlargedAsset({
                            src: '/assets/aistudio/Dark-Themed_AI_Workflow_Nodes_461f9344.png',
                            alt: 'Dark-themed Langflow sequential 6-node workflow showing Data File, Prompt Template, Language Model, second Prompt Template, second Language Model, and Chat Output',
                            title: 'AI Data Analyst Agent — Langflow Sequential Workflow',
                            subtitle: 'AI Integration / Workflow Automation · IBM / Hacktiv8',
                            width: 2001,
                            height: 786,
                          })
                        }
                        className="inline-flex items-center gap-1.5 rounded-md border border-[#FF6C65]/35 bg-[#061B33] px-2.5 py-1 font-mono-tech text-[10px] text-[#EAF1F8] transition-colors hover:border-[#FF6C65] hover:text-[#FF6C65]"
                      >
                        <Maximize2 className="h-3 w-3" aria-hidden="true" />
                        <span>{isId ? 'Perbesar Alur Kerja' : 'Enlarge Workflow'}</span>
                      </button>
                    </div>

                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        setEnlargedAsset({
                          src: '/assets/aistudio/Dark-Themed_AI_Workflow_Nodes_461f9344.png',
                          alt: 'Dark-themed Langflow sequential 6-node workflow showing Data File, Prompt Template, Language Model, second Prompt Template, second Language Model, and Chat Output',
                          title: 'AI Data Analyst Agent — Langflow Sequential Workflow',
                          subtitle: 'AI Integration / Workflow Automation · IBM / Hacktiv8',
                          width: 2001,
                          height: 786,
                        })
                      }
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setEnlargedAsset({
                            src: '/assets/aistudio/Dark-Themed_AI_Workflow_Nodes_461f9344.png',
                            alt: 'Dark-themed Langflow sequential 6-node workflow showing Data File, Prompt Template, Language Model, second Prompt Template, second Language Model, and Chat Output',
                            title: 'AI Data Analyst Agent — Langflow Sequential Workflow',
                            subtitle: 'AI Integration / Workflow Automation · IBM / Hacktiv8',
                            width: 2001,
                            height: 786,
                          });
                        }
                      }}
                      className="cursor-zoom-in overflow-hidden rounded-xl border border-[#8AB9DC]/20 bg-[#000000] p-2 sm:p-3.5"
                    >
                      <Image
                        src="/assets/aistudio/Dark-Themed_AI_Workflow_Nodes_461f9344.png"
                        alt="Dark-themed Langflow sequential 6-node workflow showing Data File, Prompt Template, Language Model, second Prompt Template, second Language Model, and Chat Output"
                        width={2001}
                        height={786}
                        sizes="(max-width: 1360px) 100vw, 1200px"
                        referrerPolicy="no-referrer"
                        className="h-auto w-full rounded-lg object-contain transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                      />
                    </div>
                  </motion.div>

                  {/* Interconnected Sequential Pipeline Bar + Tech & CTA Footer */}
                  <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.5,
                      delay: shouldReduceMotion ? 0 : 0.14,
                      ease: revealEase,
                    }}
                    className="mt-6 grid grid-cols-1 gap-5 rounded-2xl border border-[#8AB9DC]/20 bg-[#031628]/92 p-5 sm:p-6 lg:grid-cols-12 lg:items-center"
                  >
                    {/* Verified 5-Part Context Flow (8 Columns) */}
                    <div className="lg:col-span-8">
                      <p className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-[#FF6C65]">
                        {isId ? 'ALUR PEMROSESAN TERVERIFIKASI' : 'VERIFIED SEQUENTIAL PIPELINE'}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2 font-mono-tech text-xs">
                        {[
                          { label: 'CSV Input', tone: 'border-[#8AB9DC]/30 text-[#EAF1F8]' },
                          { label: '1,001 customer reviews', tone: 'border-[#5B9BD5]/40 text-[#B8E1F5]' },
                          { label: 'Prompt Processing', tone: 'border-[#4169E1]/45 text-[#B8E1F5]' },
                          { label: 'LLM Processing', tone: 'border-[#E8A34A]/45 text-[#E8A34A]' },
                          { label: 'Structured Output', tone: 'border-[#FF6C65]/55 text-[#FF6C65]' },
                        ].map((step, idx, arr) => (
                          <React.Fragment key={step.label}>
                            <span
                              className={`rounded-lg border ${step.tone} bg-[#02111F] px-3 py-1.5 font-semibold`}
                            >
                              {step.label}
                            </span>
                            {idx < arr.length - 1 && (
                              <ArrowRight className="h-3.5 w-3.5 text-[#FF6C65]" aria-hidden="true" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      <p className="mt-3.5 font-mono-tech text-xs text-[#8AB9DC]">
                        <span className="text-[#EAF1F8]/70">
                          {isId ? 'Teknologi: ' : 'Technology: '}
                        </span>
                        <span className="text-[#B8E1F5]">
                          Langflow · LLM · Prompt Engineering · AI Workflow Design
                        </span>
                      </p>
                    </div>

                    {/* Action Column (4 Columns) */}
                    <div className="flex lg:col-span-4 lg:justify-end">
                      <Link
                        href="/projects/ai-data-analyst-agent"
                        onClick={onClose}
                        className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#FF6C65] px-5 py-3 font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#021F2D] shadow-[0_10px_28px_rgba(255,108,101,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff827c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAF1F8]"
                      >
                        <span>{isId ? 'Buka Studi Kasus' : 'Open Case Study'}</span>
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* =========================================================== */}
              {/* PROJECT 05 — RUNNING SHOES SEMANTIC RETRIEVAL               */}
              {/* Asymmetric Composition 05: Academic Research Showcase       */}
              {/* Prominent nDCG@5 visual annotation + authentic evaluation   */}
              {/* Surface: Ocean Navy (#021F2D), Cobalt (#1E4D8C) & Amber     */}
              {/* =========================================================== */}
              <section
                aria-labelledby="archive-p5-title"
                className="relative bg-[linear-gradient(155deg,rgba(2,31,45,0.98)_0%,rgba(18,60,105,0.52)_52%,rgba(6,27,51,0.98)_100%)] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-12 right-12 h-80 w-96 rounded-full bg-radial from-[#E8A34A]/15 via-[#4169E1]/15 to-transparent blur-3xl"
                />

                <div className="relative z-10 mx-auto max-w-[1220px]">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                    {/* Left Research Narrative & Verified Corpus Funnel (5 Columns) */}
                    <motion.div
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: revealEase }}
                      className="space-y-5 lg:col-span-5"
                    >
                      <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs">
                        <span className="inline-flex items-center justify-center rounded-md border border-[#E8A34A]/50 bg-[#E8A34A]/15 px-2 py-0.5 font-bold text-[#E8A34A]">
                          05
                        </span>
                        <span className="uppercase tracking-[0.14em] text-[#B8E1F5]">
                          Information Retrieval / Academic Research
                        </span>
                        <span aria-hidden="true" className="text-[#8AB9DC]/40">·</span>
                        <span className="text-[#E8A34A]">
                          {isId ? 'Skripsi S1' : 'Undergraduate Thesis'}
                        </span>
                      </div>

                      <h3
                        id="archive-p5-title"
                        className="text-2xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-3xl"
                      >
                        Running Shoes Semantic Retrieval
                      </h3>

                      <p className="text-sm leading-relaxed text-[#EAF1F8]/84 sm:text-base">
                        {isId
                          ? 'Penelitian komparatif temu kembali informasi yang mengevaluasi pembobotan leksikal terhadap dense sentence embeddings.'
                          : 'Comparative information-retrieval research evaluating lexical weighting against dense sentence embeddings.'}
                      </p>

                      {/* Prominent Visual Annotation: Mean nDCG@5 Head-to-Head */}
                      <div className="rounded-2xl border border-[#E8A34A]/32 bg-gradient-to-br from-[#041A2C] via-[#061B33] to-[#021220] p-5 font-mono-tech shadow-[0_18px_44px_rgba(1,8,18,0.72)]">
                        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.14em]">
                          <span className="text-[#E8A34A]">
                            {isId ? 'PERBANDINGAN UTAMA nDCG@5' : 'BENCHMARK MEAN nDCG@5 COMPARISON'}
                          </span>
                          <span className="rounded bg-[#FF6C65]/15 px-2 py-0.5 font-bold text-[#FF6C65]">
                            +0.0333 Gain
                          </span>
                        </div>

                        {/* Sentence Embedding Score Bar */}
                        <div className="mt-4 space-y-1.5">
                          <div className="flex items-baseline justify-between text-xs">
                            <span className="font-bold text-[#EAF1F8]">
                              Sentence Embedding (all-MiniLM-L6-v2)
                            </span>
                            <span className="text-base font-extrabold text-[#FF6C65]">
                              0.6825
                            </span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-[#02101C]">
                            <div className="h-full w-[68.25%] rounded-full bg-gradient-to-r from-[#E8A34A] via-[#E97845] to-[#FF6C65]" />
                          </div>
                        </div>

                        {/* TF-IDF Score Bar */}
                        <div className="mt-3.5 space-y-1.5">
                          <div className="flex items-baseline justify-between text-xs">
                            <span className="text-[#B8E1F5]">
                              TF-IDF Lexical Baseline
                            </span>
                            <span className="text-base font-extrabold text-[#5B9BD5]">
                              0.6492
                            </span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-[#02101C]">
                            <div className="h-full w-[64.92%] rounded-full bg-gradient-to-r from-[#2878A8] to-[#5B9BD5]" />
                          </div>
                        </div>

                        {/* Verified Corpus Metrics Strip */}
                        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[#8AB9DC]/14 pt-3.5 text-center">
                          <div className="rounded-lg bg-[#02111E] p-2">
                            <p className="text-sm font-extrabold text-[#EAF1F8]">948</p>
                            <p className="text-[10px] text-[#8AB9DC]">Raw Rows</p>
                          </div>
                          <div className="rounded-lg bg-[#02111E] p-2">
                            <p className="text-sm font-extrabold text-[#B8E1F5]">475</p>
                            <p className="text-[10px] text-[#8AB9DC]">Cleaned Docs</p>
                          </div>
                          <div className="rounded-lg bg-[#02111E] p-2">
                            <p className="text-sm font-extrabold text-[#E8A34A]">30</p>
                            <p className="text-[10px] text-[#8AB9DC]">Queries</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-mono-tech text-[10px] uppercase tracking-[0.14em] text-[#8AB9DC]">
                          {isId ? 'TEKNOLOGI' : 'TECHNOLOGY'}
                        </p>
                        <p className="mt-1 font-mono-tech text-xs font-medium text-[#B8E1F5]">
                          Python · scikit-learn · Sentence Transformers · Cosine Similarity · Streamlit
                        </p>
                      </div>

                      <div className="pt-1">
                        <Link
                          href="/projects/semantic-retrieval-running-shoes"
                          onClick={onClose}
                          className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#E8A34A] px-5 py-3 font-mono-tech text-xs font-bold uppercase tracking-[0.12em] text-[#021F2D] shadow-[0_10px_28px_rgba(232,163,74,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f0b25d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAF1F8]"
                        >
                          <span>{isId ? 'Buka Studi Kasus' : 'Open Case Study'}</span>
                          <ArrowUpRight
                            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </motion.div>

                    {/* Right Authentic Evaluation Visualization Stage (7 Columns) */}
                    <motion.div
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.55,
                        delay: shouldReduceMotion ? 0 : 0.1,
                        ease: revealEase,
                      }}
                      className="lg:col-span-7"
                    >
                      <div className="group relative overflow-hidden rounded-2xl border border-[#8AB9DC]/26 bg-[#021220] p-3.5 sm:p-5 shadow-[0_28px_72px_rgba(1,8,18,0.84)]">
                        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-1.5">
                            {(
                              [
                                {
                                  id: 'evaluation',
                                  labelEn: '01. nDCG@5 Evaluation Charts',
                                  labelId: '01. Grafik Evaluasi nDCG@5',
                                },
                                {
                                  id: 'workflow',
                                  labelEn: '02. Research Pipeline Overview',
                                  labelId: '02. Ringkasan Alur Penelitian',
                                },
                              ] as const
                            ).map((tab) => {
                              const active = p5PreviewMode === tab.id;
                              return (
                                <button
                                  key={tab.id}
                                  type="button"
                                  onClick={() => setP5PreviewMode(tab.id)}
                                  className={`rounded-md px-2.5 py-1 font-mono-tech text-[10px] transition-colors ${
                                    active
                                      ? 'bg-[#E8A34A] font-bold text-[#021220]'
                                      : 'bg-[#061B33] text-[#8AB9DC] hover:text-[#EAF1F8]'
                                  }`}
                                >
                                  {isId ? tab.labelId : tab.labelEn}
                                </button>
                              );
                            })}
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              setEnlargedAsset({
                                src: p5Assets[p5PreviewMode].src,
                                alt: p5Assets[p5PreviewMode].alt,
                                title: `Running Shoes Semantic Retrieval — ${p5Assets[p5PreviewMode].labelEn}`,
                                subtitle: 'Information Retrieval / Academic Research · Undergraduate Thesis',
                                width: p5Assets[p5PreviewMode].width,
                                height: p5Assets[p5PreviewMode].height,
                              })
                            }
                            className="inline-flex items-center gap-1.5 rounded-md border border-[#8AB9DC]/22 bg-[#061B33] px-2.5 py-1 font-mono-tech text-[10px] text-[#EAF1F8] transition-colors hover:border-[#E8A34A] hover:text-[#E8A34A]"
                          >
                            <Maximize2 className="h-3 w-3" aria-hidden="true" />
                            <span>{isId ? 'Perbesar' : 'Enlarge'}</span>
                          </button>
                        </div>

                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            setEnlargedAsset({
                              src: p5Assets[p5PreviewMode].src,
                              alt: p5Assets[p5PreviewMode].alt,
                              title: `Running Shoes Semantic Retrieval — ${p5Assets[p5PreviewMode].labelEn}`,
                              subtitle: 'Information Retrieval / Academic Research · Undergraduate Thesis',
                              width: p5Assets[p5PreviewMode].width,
                              height: p5Assets[p5PreviewMode].height,
                            })
                          }
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setEnlargedAsset({
                                src: p5Assets[p5PreviewMode].src,
                                alt: p5Assets[p5PreviewMode].alt,
                                title: `Running Shoes Semantic Retrieval — ${p5Assets[p5PreviewMode].labelEn}`,
                                subtitle: 'Information Retrieval / Academic Research · Undergraduate Thesis',
                                width: p5Assets[p5PreviewMode].width,
                                height: p5Assets[p5PreviewMode].height,
                              });
                            }
                          }}
                          className="cursor-zoom-in overflow-hidden rounded-xl border border-[#8AB9DC]/18 bg-[#010C16] p-2"
                        >
                          <Image
                            src={p5Assets[p5PreviewMode].src}
                            alt={p5Assets[p5PreviewMode].alt}
                            width={p5Assets[p5PreviewMode].width}
                            height={p5Assets[p5PreviewMode].height}
                            sizes="(max-width: 1024px) 100vw, 58vw"
                            referrerPolicy="no-referrer"
                            className="h-auto w-full rounded-lg object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                          />
                        </div>

                        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono-tech text-[11px] text-[#8AB9DC]">
                          <span className="flex items-center gap-1.5">
                            <Search className="h-3.5 w-3.5 text-[#E8A34A]" aria-hidden="true" />
                            <span>
                              {isId
                                ? '5.394 Term TF-IDF vs 384-Dimensi Dense Embedding (Cosine Similarity)'
                                : '5,394 TF-IDF Terms vs 384-Dim Dense Embedding (Cosine Similarity)'}
                            </span>
                          </span>
                          <span className="text-[#E8A34A]">293 Pooled Query-Document Pairs</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Archive Bottom Footer Bar */}
              <div className="flex flex-col items-center justify-between gap-4 border-t border-[#8AB9DC]/18 bg-[#021220] px-5 py-6 sm:flex-row sm:px-8 lg:px-12">
                <div className="flex items-center gap-2.5 font-mono-tech text-xs text-[#8AB9DC]">
                  <Layers className="h-4 w-4 text-[#FF6C65]" aria-hidden="true" />
                  <span>
                    {isId
                      ? '05 Proyek Terverifikasi · Bukti Asli Tanpa Rekayasa'
                      : '05 Verified Featured Projects · Authentic Source Evidence'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#8AB9DC]/28 bg-[#061B33] px-4 py-2 font-mono-tech text-xs font-semibold text-[#EAF1F8] transition-colors hover:border-[#FF6C65] hover:text-[#FF6C65]"
                >
                  <span>{isId ? 'Kembali ke Portofolio' : 'Return to Portfolio'}</span>
                </button>
              </div>
            </div>

            {/* ============================================================= */}
            {/* FULL-RESOLUTION EVIDENCE LIGHTBOX INSPECTOR                   */}
            {/* ============================================================= */}
            <AnimatePresence>
              {enlargedAsset && (
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label={enlargedAsset.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                  onClick={() => setEnlargedAsset(null)}
                  className="absolute inset-0 z-40 flex flex-col bg-[#010912]/96 p-4 sm:p-8 backdrop-blur-xl"
                >
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-between gap-4 border-b border-[#8AB9DC]/20 pb-4"
                  >
                    <div>
                      <p className="font-mono-tech text-[11px] uppercase tracking-[0.14em] text-[#FF6C65]">
                        {enlargedAsset.subtitle}
                      </p>
                      <h4 className="mt-0.5 text-base font-bold text-[#EAF1F8] sm:text-lg">
                        {enlargedAsset.title}
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={() => setEnlargedAsset(null)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#FF6C65] px-3.5 py-2 font-mono-tech text-xs font-bold text-[#021F2D] hover:bg-[#ff827c]"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                      <span>{isId ? 'Tutup Bukti' : 'Close Preview'}</span>
                    </button>
                  </div>

                  <div className="flex flex-1 items-center justify-center overflow-auto py-6">
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="max-h-full w-full max-w-6xl overflow-auto rounded-2xl border border-[#8AB9DC]/25 bg-[#010B14] p-3 sm:p-5 shadow-2xl"
                    >
                      <Image
                        src={enlargedAsset.src}
                        alt={enlargedAsset.alt}
                        width={enlargedAsset.width}
                        height={enlargedAsset.height}
                        referrerPolicy="no-referrer"
                        className="h-auto w-full rounded-lg object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
