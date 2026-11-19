'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldAlert,
  Database,
  Terminal,
  Users,
  BarChart3,
  BookOpen,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AsymmetricProjectHero } from '@/components/project-details/asymmetric-project-hero';
import { GlassFlashCardDeck } from '@/components/project-details/glass-flash-cards';
import { InteractiveProcessVisualizer } from '@/components/project-details/interactive-process-visualizer';
import { ImmersiveEvidenceFrame } from '@/components/project-details/evidence-lightbox';
import { useLocalizedPortfolio } from '@/lib/language-context';

/* ========================================================================== */
/* PROJECT 03 — E-COMMERCE DATABASE MANAGEMENT (SQL CASE STUDY VIEW)          */
/* ========================================================================== */
export function EcommerceDatabaseCaseStudyView() {
  const { isId, ecommerceDbCaseStudy: data } = useLocalizedPortfolio();
  const [activeSqlIdx, setActiveSqlIdx] = useState<number>(0);

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip bg-[#061B33] text-[#EAF1F8]">
      <Navbar variant="project-detail" />

      <main className="relative flex-1 bg-[linear-gradient(180deg,#061B33_0%,#021F2D_32%,#002147_68%,#061B33_100%)]">
        {/* 1. Asymmetric Project Hero */}
        <AsymmetricProjectHero
          projectIndex="03"
          contextLabel={`${data.contextLabel} · ${data.year}`}
          title={data.title}
          shortSummary={data.shortSummary}
          tools={data.tools}
          metadataItems={data.heroKpis.map((item) => ({
            label: item.label,
            value: item.value,
            note: item.qualifier,
          }))}
          heroEvidence={data.heroEvidence}
          primarySectionAnchor="#database-architecture"
          primarySectionLabel={
            isId
              ? 'Periksa 7 Tahap Arsitektur SQL'
              : 'Inspect 7 SQL Architecture Stages'
          }
        />

        {/* Band 1: Overview, Academic Group Attribution & 6-Table Schema */}
        <section
          aria-labelledby="sql-overview-heading"
          className="relative py-16 sm:py-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-20 h-[480px] w-[540px] rounded-full bg-radial from-[#5B9BD5]/18 via-[#2878A8]/12 to-transparent blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#FF6C65]">
                  {isId ? '01. Ringkasan & Konteks Tim' : '01. Project Overview & Team Context'}
                </p>
                <h2
                  id="sql-overview-heading"
                  className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl"
                >
                  {isId
                    ? 'Arsitektur Basis Data Relasional & Konteks Akademik'
                    : 'Relational Database Architecture & Academic Context'}
                </h2>
                <p className="mt-3 font-mono-tech text-xs text-[#9AB0C4]">
                  {data.institution}
                </p>
                <p className="mt-1.5 font-mono-tech text-xs text-[#B8E1F5]">
                  {isId ? 'Dosen Pengampu:' : 'Course Lecturer:'}{' '}
                  <span className="font-bold text-[#F0EFEA]">{data.lecturer}</span>
                </p>
                <p className="mt-1 font-mono-tech text-xs text-[#8AB9DC]">
                  {data.databaseEngine}
                </p>

                {/* GitHub Repository Link from Page 30 of the Report */}
                <div className="mt-5">
                  <a
                    href={data.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#5B9BD5]/35 bg-[#04182B]/90 px-4 py-2.5 font-mono-tech text-xs text-[#B8E1F5] transition-colors hover:border-[#FF6C65] hover:text-[#FF6C65]"
                  >
                    <Terminal className="h-3.5 w-3.5 text-[#FF6C65]" aria-hidden="true" />
                    <span>
                      {isId ? 'Repositori Kode SQL Dokumentasi' : 'Documented SQL Code Repository'}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="space-y-6 lg:col-span-8">
                <p className="text-base leading-relaxed text-[#F0EFEA]/90">
                  {data.shortSummary}
                </p>

                {/* Collaborative Academic Group Roster Card */}
                <div className="rounded-xl border border-[#B8E1F5]/18 bg-[#041727]/85 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#B8E1F5]/12 pb-3">
                    <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.08em] text-[#B8E1F5]">
                      <Users className="h-4 w-4 text-[#FF6C65]" aria-hidden="true" />
                      <span>
                        {isId
                          ? 'Anggota Kelompok Proyek Akhir (5 Mahasiswa)'
                          : 'Collaborative Final Project Team (5 Members)'}
                      </span>
                    </div>
                    <span className="font-mono-tech text-xs text-[#E8A34A]">
                      {isId ? `Pemrograman Basis Data (${data.year})` : `Database Programming (${data.year})`}
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 font-mono-tech text-xs">
                    {data.groupMembers.map((member) => (
                      <div
                        key={member.nim}
                        className={`rounded-lg border p-3 ${
                          member.isOwner
                            ? 'border-[#FF6C65]/50 bg-[#0A2646]/90 text-[#F0EFEA]'
                            : 'border-[#8AB9DC]/18 bg-[#021220]/85 text-[#EAF1F8]/85'
                        }`}
                      >
                        <p className="font-bold">{member.name}</p>
                        <p className="mt-1 text-[11px] text-[#8AB9DC]">
                          NIM: <span className="text-[#B8E1F5]">{member.nim}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scope & Integrity Note (Including Page 18 vs Page 11-17 log_changes clarification) */}
                <div className="rounded-lg border border-[#F2A658]/30 bg-[#062035]/80 p-5 text-xs leading-relaxed text-[#E9EEF3] sm:text-sm">
                  <div className="flex items-start gap-3">
                    <ShieldAlert
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#F2A658]"
                      aria-hidden="true"
                    />
                    <p>{data.scopeClarification}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6-Table Relational Schema Specification Grid */}
            <div className="mt-14">
              <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#5B9BD5]">
                    {isId ? 'Spesifikasi Skema Relasional' : 'Relational Schema Specification'}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-[#F0EFEA] sm:text-2xl">
                    {isId
                      ? '6 Tabel Inti dalam Basis Data `ecommerce`'
                      : '6 Core Tables in the `ecommerce` Database'}
                  </h3>
                </div>
                <span className="font-mono-tech text-xs text-[#8AB9DC]">
                  PK / FK Constraints · Referential Integrity
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data.schemaTables.map((tbl) => (
                  <div
                    key={tbl.tableName}
                    className="flex flex-col justify-between rounded-xl border border-[#8AB9DC]/20 bg-[#031525]/90 p-5 shadow-[0_14px_34px_rgba(1,9,17,0.45)]"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-[#8AB9DC]/15 pb-3 font-mono-tech">
                        <span className="flex items-center gap-2 text-sm font-bold text-[#EAF1F8]">
                          <Database className="h-4 w-4 text-[#5B9BD5]" aria-hidden="true" />
                          {tbl.tableName}
                        </span>
                        <span className="rounded bg-[#0A2646] px-2 py-0.5 text-[10px] text-[#E8A34A]">
                          ecommerce
                        </span>
                      </div>

                      <div className="mt-3 font-mono-tech text-xs">
                        <p className="text-[10px] uppercase tracking-[0.08em] text-[#8AB9DC]">
                          {isId ? 'Definisi Kolom:' : 'Column Definitions:'}
                        </p>
                        <p className="mt-1 leading-relaxed text-[#B8E1F5]">
                          {tbl.columns}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-[#8AB9DC]/12 pt-3 text-xs leading-relaxed text-[#EAF1F8]/85">
                      <span className="font-mono-tech text-[11px] font-semibold text-[#FF6C65]">
                        {isId ? 'Relasi: ' : 'Relationship: '}
                      </span>
                      {tbl.relationship}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Band 2: Interactive 7-Stage SQL Engineering Explorer */}
        <section
          id="database-architecture"
          className="relative py-16 sm:py-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/3 right-0 h-[520px] w-[580px] rounded-full bg-radial from-[#1E4D8C]/26 via-[#002147]/20 to-transparent blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <InteractiveProcessVisualizer
              sectionIndex="02"
              heading={
                isId
                  ? '7 Area Rekayasa Basis Data & Pemrograman SQL'
                  : '7 Database Engineering & SQL Programming Stages'
              }
              subheading={
                isId
                  ? 'Pilih salah satu dari tujuh tahap implementasi untuk memeriksa kode SQL terdokumentasi, hasil eksekusi, serta tangkapan layar asli dari laporan.'
                  : 'Select any of the seven documented engineering stages to inspect the SQL implementation details, execution results, and authentic report screenshots.'
              }
              scopeBannerText={data.scopeClarification}
              nodes={data.processNodes}
              defaultSelectedIndex={0}
            />
          </div>
        </section>

        {/* Band 3: Verbatim SQL Implementation Catalog */}
        <section
          aria-labelledby="sql-code-catalog-heading"
          className="relative py-16 sm:py-24"
        >
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div>
                <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#FF6C65]">
                  {isId
                    ? '03. Katalog Kode SQL Terdokumentasi'
                    : '03. Verbatim Documented SQL Code Catalog'}
                </p>
                <h2
                  id="sql-code-catalog-heading"
                  className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl"
                >
                  {isId
                    ? 'Implementasi SQL Asli dari Laporan Proyek'
                    : 'Exact SQL Scripts from the Final Project Report'}
                </h2>
              </div>

              <div
                role="tablist"
                aria-label="SQL Script Categories"
                className="flex flex-wrap gap-2"
              >
                {data.sqlCodeCatalog.map((cat, idx) => {
                  const active = idx === activeSqlIdx;
                  return (
                    <button
                      key={cat.category}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveSqlIdx(idx)}
                      className={`rounded-lg border px-3.5 py-2 font-mono-tech text-xs transition-all ${
                        active
                          ? 'border-[#5B9BD5] bg-[#5B9BD5] font-bold text-[#021220]'
                          : 'border-[#8AB9DC]/20 bg-[#031525] text-[#B8E1F5] hover:border-[#5B9BD5]/50'
                      }`}
                    >
                      {cat.category}
                    </button>
                  );
                })}
              </div>
            </div>

            {data.sqlCodeCatalog[activeSqlIdx] && (
              <div className="rounded-2xl border border-[#8AB9DC]/25 bg-[#020E1A]/95 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.65)] sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#8AB9DC]/15 pb-4">
                  <div>
                    <p className="font-mono-tech text-xs text-[#5B9BD5]">
                      {data.sqlCodeCatalog[activeSqlIdx].category}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-[#F0EFEA] sm:text-xl">
                      {data.sqlCodeCatalog[activeSqlIdx].title}
                    </h3>
                  </div>
                  <span className="font-mono-tech text-xs text-[#E8A34A]">
                    MariaDB 10.4.32 / MySQL · ecommerce
                  </span>
                </div>

                <pre className="mt-5 overflow-x-auto rounded-xl border border-[#5B9BD5]/20 bg-[#010912] p-5 font-mono-tech text-xs leading-relaxed text-[#EAF1F8]">
                  <code>{data.sqlCodeCatalog[activeSqlIdx].code}</code>
                </pre>
              </div>
            )}
          </div>
        </section>

        {/* Band 4: Interactive Glass Flash Cards */}
        <section className="relative py-16 sm:py-24">
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <GlassFlashCardDeck
              sectionIndex="04"
              heading={
                isId
                  ? 'Sorotan Teknis & Pembuktian SQL'
                  : 'Technical Highlights & SQL Verification Cards'
              }
              subheading={
                isId
                  ? 'Geser atau gunakan tombol panah untuk meninjau setiap komponen utama yang diimplementasikan dalam basis data `ecommerce`.'
                  : 'Swipe or use arrow keys to inspect each core component implemented in the `ecommerce` relational database.'
              }
              cards={data.flashCards}
            />
          </div>
        </section>

        {/* Band 5: Complete 8-Screenshot Evidence Gallery */}
        <section
          aria-labelledby="sql-evidence-heading"
          className="relative py-16 sm:py-24"
        >
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="mb-10">
              <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#FF6C65]">
                {isId ? '05. Galeri Bukti Eksekusi Asli' : '05. Verified Execution Evidence Gallery'}
              </p>
              <h2
                id="sql-evidence-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl"
              >
                {isId
                  ? 'Tangkapan Layar phpMyAdmin & MariaDB CLI (Halaman 2–30)'
                  : 'Authentic phpMyAdmin & MariaDB CLI Screenshots (Pages 2–30)'}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-[#A3B8CC]">
                {isId
                  ? 'Seluruh bukti visual diekstrak langsung dari dokumen laporan akhir Pemrograman Basis Data tanpa modifikasi.'
                  : 'All visual evidence is extracted directly from the Database Programming final project report without modification.'}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {data.publicEvidence.map((ev, idx) => (
                <ImmersiveEvidenceFrame
                  key={ev.id}
                  evidence={ev}
                  accentVariant={idx % 2 === 0 ? 'cobalt' : 'coral'}
                />
              ))}
            </div>

            {/* Bottom Navigation Between Case Studies */}
            <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#8AB9DC]/18 pt-8">
              <Link
                href="/#selected-work"
                className="inline-flex items-center gap-2 font-mono-tech text-xs text-[#9AB0C4] hover:text-[#EAF1F8]"
              >
                <ArrowLeft className="h-4 w-4 text-[#FF6C65]" aria-hidden="true" />
                <span>
                  {isId ? 'Kembali ke Proyek Pilihan' : 'Back to Selected Work'}
                </span>
              </Link>

              <Link
                href="/projects/semantic-retrieval-running-shoes"
                className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold text-[#FF6C65] hover:text-[#B8E1F5]"
              >
                <span>
                  {isId
                    ? 'Studi Kasus Berikutnya: Semantic Retrieval Sepatu Lari'
                    : 'Next Case Study: Running Shoes Semantic Retrieval'}
                </span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ========================================================================== */
/* PROJECT 05 — RUNNING SHOES SEMANTIC RETRIEVAL (IR RESEARCH CASE STUDY)     */
/* ========================================================================== */
export function SemanticRetrievalCaseStudyView() {
  const { isId, semanticRetrievalCaseStudy: data } = useLocalizedPortfolio();

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip bg-[#061B33] text-[#EAF1F8]">
      <Navbar variant="project-detail" />

      <main className="relative flex-1 bg-[linear-gradient(180deg,#061B33_0%,#021F2D_32%,#002147_68%,#061B33_100%)]">
        {/* 1. Asymmetric Project Hero */}
        <AsymmetricProjectHero
          projectIndex="05"
          contextLabel={`${data.contextLabel} · ${data.defenseDate}`}
          title={data.shortTitle}
          shortSummary={data.shortSummary}
          tools={data.tools}
          metadataItems={data.heroKpis.map((item) => ({
            label: item.label,
            value: item.value,
            note: item.qualifier,
          }))}
          heroEvidence={data.heroEvidence}
          primarySectionAnchor="#research-workflow"
          primarySectionLabel={
            isId
              ? 'Tinjau Metodologi & Evaluasi nDCG@5'
              : 'Inspect Methodology & nDCG@5 Evaluation'
          }
        />

        {/* Band 1: Research Background, Thesis Metadata & Vocabulary Mismatch */}
        <section
          aria-labelledby="ir-overview-heading"
          className="relative py-16 sm:py-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-20 h-[480px] w-[540px] rounded-full bg-radial from-[#E8A34A]/15 via-[#2878A8]/12 to-transparent blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#E8A34A]">
                  {isId ? '01. Latar Belakang & Konteks Skripsi' : '01. Research Context & Problem Statement'}
                </p>
                <h2
                  id="ir-overview-heading"
                  className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl"
                >
                  {isId
                    ? 'Masalah Vocabulary Mismatch pada Pencarian Produk'
                    : 'The Vocabulary Mismatch Problem in Product Search'}
                </h2>

                <div className="mt-4 space-y-2 rounded-xl border border-[#8AB9DC]/18 bg-[#031525]/85 p-4 font-mono-tech text-xs">
                  <p className="text-[#B8E1F5]">
                    <BookOpen className="mr-1.5 inline h-3.5 w-3.5 text-[#E8A34A]" aria-hidden="true" />
                    {data.indonesianTitle}
                  </p>
                  <p className="text-[#9AB0C4]">{data.institution}</p>
                  <p className="text-[#EAF1F8]">
                    {isId ? 'Peneliti:' : 'Author:'} {data.author}
                  </p>
                  <p className="text-[#EAF1F8]">
                    {isId ? 'Dosen Pembimbing:' : 'Thesis Advisor:'}{' '}
                    <span className="font-bold text-[#E8A34A]">{data.advisor}</span>
                  </p>
                  <p className="text-[#8AB9DC]">
                    {isId ? 'Sidang Skripsi:' : 'Thesis Defense:'} {data.defenseDate}
                  </p>
                </div>
              </div>

              <div className="space-y-6 lg:col-span-8">
                <p className="text-base leading-relaxed text-[#F0EFEA]/90">
                  {data.problemStatement}
                </p>

                {/* Dataset & Representation Architecture Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-[#5B9BD5]/30 bg-[#031628]/90 p-5">
                    <p className="font-mono-tech text-xs uppercase tracking-[0.08em] text-[#5B9BD5]">
                      {isId ? 'Representasi Leksikal (Baseline)' : 'Lexical Representation (Baseline)'}
                    </p>
                    <p className="mt-2 font-mono-tech text-xl font-bold text-[#EAF1F8]">
                      TF-IDF · 475 × 5,394
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[#A3B8CC]">
                      {isId
                        ? 'Mengekstrak 5.394 term unik dari hasil penggabungan 8 atribut teks per produk sepatu lari. Mengandalkan kecocokan kata kunci eksak dengan Cosine Similarity.'
                        : 'Extracts 5,394 unique vocabulary terms from the concatenated 8-attribute semantic text per shoe. Relies on exact lexical token overlap with Cosine Similarity.'}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#E8A34A]/35 bg-[#031628]/90 p-5">
                    <p className="font-mono-tech text-xs uppercase tracking-[0.08em] text-[#E8A34A]">
                      {isId ? 'Representasi Semantik Padat' : 'Dense Semantic Representation'}
                    </p>
                    <p className="mt-2 font-mono-tech text-xl font-bold text-[#EAF1F8]">
                      all-MiniLM-L6-v2 · 475 × 384
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[#A3B8CC]">
                      {isId
                        ? 'Mengodekan teks menjadi vektor padat berdimensi 384 (batas maksimum 256 token tanpa chunking) untuk menangkap makna kontekstual dengan Cosine Similarity.'
                        : 'Encodes product text into 384-dimensional dense vectors (256-token maximum truncation without chunking) to capture contextual intent with Cosine Similarity.'}
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-[#F2A658]/30 bg-[#062035]/80 p-5 text-xs leading-relaxed text-[#E9EEF3] sm:text-sm">
                  <div className="flex items-start gap-3">
                    <ShieldAlert
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#F2A658]"
                      aria-hidden="true"
                    />
                    <p>{data.scopeClarification}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Band 2: Interactive 5-Stage Research Workflow */}
        <section
          id="research-workflow"
          className="relative py-16 sm:py-24"
        >
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <InteractiveProcessVisualizer
              sectionIndex="02"
              heading={
                isId
                  ? '5 Tahap Alur Kerja Analisis & Evaluasi IR'
                  : '5-Stage Information Retrieval Analysis Workflow'
              }
              subheading={
                isId
                  ? 'Telusuri lima tahapan metodologi penelitian dari pembersihan data RunRepeat (948 → 475 produk) hingga evaluasi pooling 293 pasangan kueri–dokumen dan deployment Streamlit.'
                  : 'Explore the five documented research stages from RunRepeat dataset cleaning (948 → 475 products) to 293-pair pooled relevance grading and Streamlit deployment.'
              }
              scopeBannerText={data.scopeClarification}
              nodes={data.processNodes}
              defaultSelectedIndex={0}
            />
          </div>
        </section>

        {/* Band 3: Complete 5-Row Statistical nDCG@5 Table & Extreme Query Case Comparison */}
        <section
          aria-labelledby="ir-stats-heading"
          className="relative py-16 sm:py-24"
        >
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="mb-10">
              <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#FF6C65]">
                {isId
                  ? '03. Hasil Kuantitatif & Studi Kasus Kueri Ekstrem'
                  : '03. Quantitative Results & Extreme Query Case Comparison'}
              </p>
              <h2
                id="ir-stats-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl"
              >
                {isId
                  ? 'Tabel Statistik nDCG@5 (30 Kueri) & Analisis Q14 vs Q4'
                  : 'Statistical nDCG@5 Summary (30 Queries) & Q14 vs Q4 Analysis'}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              {/* Complete 5-Row Statistical Comparison Table (7 Cols) */}
              <div className="overflow-hidden rounded-2xl border border-[#8AB9DC]/25 bg-[#021220]/95 shadow-[0_20px_50px_rgba(0,0,0,0.65)] lg:col-span-7">
                <div className="flex items-center justify-between border-b border-[#8AB9DC]/15 bg-[#04182B] px-5 py-3.5 font-mono-tech text-xs">
                  <span className="flex items-center gap-2 font-bold text-[#EAF1F8]">
                    <BarChart3 className="h-4 w-4 text-[#E8A34A]" aria-hidden="true" />
                    {isId
                      ? 'Perbandingan Statistik nDCG@5 (30 Kueri)'
                      : 'nDCG@5 Statistical Comparison (30 Queries)'}
                  </span>
                  <span className="text-[#8AB9DC]">293 Pooled Pairs (qrels 0–3)</span>
                </div>

                <div className="overflow-x-auto p-4 sm:p-6">
                  <table className="w-full text-left font-mono-tech text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-[#8AB9DC]/20 text-[11px] uppercase tracking-[0.08em] text-[#8AB9DC]">
                        <th className="pb-3 pr-4">
                          {isId ? 'Metrik Statistik' : 'Statistical Metric'}
                        </th>
                        <th className="pb-3 px-4 text-[#5B9BD5]">TF-IDF</th>
                        <th className="pb-3 px-4 text-[#E8A34A]">
                          Sentence Embedding
                        </th>
                        <th className="pb-3 pl-4">
                          {isId ? 'Selisih / Catatan' : 'Difference / Note'}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#8AB9DC]/12">
                      {data.ndcgMetricsTable.map((row) => (
                        <tr
                          key={row.metricEn}
                          className={
                            row.highlight
                              ? 'bg-[#0A2646]/45 hover:bg-[#0A2646]/70'
                              : 'hover:bg-[#061B33]/60'
                          }
                        >
                          <td className="py-3.5 pr-4 font-bold text-[#F0EFEA]">
                            {isId ? row.metricId : row.metricEn}
                          </td>
                          <td className="py-3.5 px-4 text-[#B8E1F5]">
                            {row.tfidf}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-[#FF6C65]">
                            {row.sentenceEmbedding}
                          </td>
                          <td className="py-3.5 pl-4 font-sans text-xs text-[#9AB0C4]">
                            {row.diff}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Q14 vs Q4 Extreme Query Case Cards (5 Cols) */}
              <div className="space-y-4 lg:col-span-5">
                {data.queryCaseComparisons.map((qCase) => (
                  <div
                    key={qCase.queryId}
                    className="rounded-2xl border border-[#8AB9DC]/22 bg-[#031627]/90 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono-tech text-xs">
                      <span className="rounded bg-[#E8A34A] px-2.5 py-0.5 font-bold text-[#021220]">
                        {qCase.queryId}
                      </span>
                      <span className="text-[#FF6C65]">
                        {isId ? 'Unggul:' : 'Advantage:'} {qCase.winner}
                      </span>
                    </div>

                    <p className="mt-3 font-mono-tech text-sm font-bold text-[#F0EFEA]">
                      &ldquo;{qCase.queryText}&rdquo;
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl border border-[#8AB9DC]/15 bg-[#021220] p-3 font-mono-tech text-xs">
                      <div>
                        <p className="text-[10px] text-[#8AB9DC]">TF-IDF nDCG@5</p>
                        <p className="mt-1 text-base font-bold text-[#B8E1F5]">
                          {qCase.tfidfScore}{' '}
                          <span className="text-[10px] text-[#8AB9DC]">
                            ({qCase.tfidfChartLabel})
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-[#E8A34A]">
                          Embedding nDCG@5
                        </p>
                        <p className="mt-1 text-base font-bold text-[#FF6C65]">
                          {qCase.embeddingScore}{' '}
                          <span className="text-[10px] text-[#8AB9DC]">
                            ({qCase.embeddingChartLabel})
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-[#A3B8CC]">
                      {isId ? qCase.explanationId : qCase.explanationEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Band 4: Flash Cards + Documented Findings & 3 Verbatim Research Limitations */}
        <section className="relative py-16 sm:py-24">
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 space-y-16">
            <GlassFlashCardDeck
              sectionIndex="04"
              heading={
                isId
                  ? 'Kartu Ringkasan Temuan & Metodologi IR'
                  : 'Information Retrieval Findings & Methodology Cards'
              }
              subheading={
                isId
                  ? 'Tinjau parameter dataset, perbandingan nDCG@5, studi kasus kueri Q14 vs Q4, dan batasan penelitian.'
                  : 'Inspect the dataset parameters, nDCG@5 benchmark metrics, Q14 vs Q4 case comparisons, and documented limitations.'
              }
              cards={data.flashCards}
            />

            {/* Findings & Verbatim Limitations Split */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#5B9BD5]/25 bg-[#031526]/90 p-6 sm:p-8">
                <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.1em] text-[#5B9BD5]">
                  <CheckCircle2 className="h-4 w-4 text-[#5B9BD5]" aria-hidden="true" />
                  <span>
                    {isId
                      ? 'Temuan & Insight Utama Terdokumentasi'
                      : 'Documented Key Findings & Insights'}
                  </span>
                </div>
                <ul className="mt-5 space-y-4">
                  {data.keyFindings.map((finding, idx) => (
                    <li
                      key={idx}
                      className="rounded-xl border border-[#8AB9DC]/15 bg-[#02101D]/85 p-4"
                    >
                      <p className="font-mono-tech text-xs font-bold text-[#B8E1F5]">
                        0{idx + 1}. {isId ? finding.titleId : finding.titleEn}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#EAF1F8]/90 sm:text-sm">
                        {isId ? finding.bodyId : finding.bodyEn}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#F2A658]/30 bg-[#041626]/90 p-6 sm:p-8">
                <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.1em] text-[#F2A658]">
                  <ShieldAlert className="h-4 w-4 text-[#F2A658]" aria-hidden="true" />
                  <span>
                    {isId
                      ? '3 Keterbatasan Penelitian Terdokumentasi'
                      : '3 Verbatim Documented Research Limitations'}
                  </span>
                </div>
                <ul className="mt-5 space-y-4">
                  {data.limitations.map((limitation, idx) => (
                    <li
                      key={idx}
                      className="rounded-xl border border-[#F2A658]/20 bg-[#02101D]/85 p-4"
                    >
                      <p className="font-mono-tech text-xs font-bold text-[#F2A658]">
                        0{idx + 1}.{' '}
                        {isId ? limitation.titleId : limitation.titleEn}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#EAF1F8]/90 sm:text-sm">
                        {isId ? limitation.bodyId : limitation.bodyEn}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Band 5: Authentic Thesis Summary Evidence Gallery */}
        <section
          aria-labelledby="ir-evidence-heading"
          className="relative py-16 sm:py-24"
        >
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="mb-10">
              <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#FF6C65]">
                {isId ? '05. Bukti Grafik & Tabel Dokumen Penelitian' : '05. Authentic Research Report Charts & Tables'}
              </p>
              <h2
                id="ir-evidence-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl"
              >
                {isId
                  ? 'Visualisasi Evaluasi nDCG@5 & Alur Kerja dari Dokumen Asli'
                  : 'Verified nDCG@5 Charts, Statistical Table & Workflow Evidence'}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {data.publicEvidence.map((ev, idx) => (
                <ImmersiveEvidenceFrame
                  key={ev.id}
                  evidence={ev}
                  accentVariant={idx % 2 === 0 ? 'cobalt' : 'coral'}
                />
              ))}
            </div>

            {/* Bottom Navigation */}
            <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#8AB9DC]/18 pt-8">
              <Link
                href="/projects/ecommerce-database-management"
                className="inline-flex items-center gap-2 font-mono-tech text-xs text-[#9AB0C4] hover:text-[#EAF1F8]"
              >
                <ArrowLeft className="h-4 w-4 text-[#FF6C65]" aria-hidden="true" />
                <span>
                  {isId
                    ? 'Studi Kasus Sebelumnya: Manajemen Basis Data E-Commerce'
                    : 'Previous Case Study: E-Commerce Database Management'}
                </span>
              </Link>

              <Link
                href="/#selected-work"
                className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold text-[#FF6C65] hover:text-[#B8E1F5]"
              >
                <span>
                  {isId ? 'Kembali ke Semua Proyek Pilihan' : 'Back to All Selected Work'}
                </span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
