'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  FileSpreadsheet,
  Database,
  Terminal,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AsymmetricProjectHero } from '@/components/project-details/asymmetric-project-hero';
import { GlassFlashCardDeck } from '@/components/project-details/glass-flash-cards';
import { InteractiveProcessVisualizer } from '@/components/project-details/interactive-process-visualizer';
import { LangflowWorkflowDiagram } from '@/components/project-details/langflow-workflow-diagram';
import { ImmersiveEvidenceFrame } from '@/components/project-details/evidence-lightbox';
import { useLocalizedPortfolio } from '@/lib/language-context';

export function AutomotiveCaseStudyView() {
  const { isId, automotiveCaseStudy: data } = useLocalizedPortfolio();

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip bg-[#061B33] text-[#EAF1F8]">
      <Navbar variant="project-detail" />

      <main className="relative flex-1 bg-[linear-gradient(180deg,#061B33_0%,#021F2D_32%,#002147_68%,#061B33_100%)]">
        {/* 1. Asymmetric Project Hero */}
        <AsymmetricProjectHero
          projectIndex="01"
          contextLabel={`${data.contextLabel} · ${data.period}`}
          title={data.title}
          shortSummary={data.shortSummary}
          tools={data.tools}
          metadataItems={data.task4Kpis}
          heroEvidence={data.heroEvidence}
          primarySectionAnchor="#workstreams"
          primarySectionLabel={
            isId
              ? 'Tinjau 4 Alur Kerja Bootcamp'
              : 'Inspect 4 Bootcamp Workstreams'
          }
        />

        {/* Band 1: Overview — Organic Midnight & Steel Blue Atmosphere */}
        <section
          aria-labelledby="overview-heading"
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
                  {isId ? '01. Ringkasan Proyek' : '01. Project Overview'}
                </p>
                <h2
                  id="overview-heading"
                  className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl"
                >
                  {isId
                    ? 'Konteks & Tujuan Analitik'
                    : 'Context & Analytical Objectives'}
                </h2>
                <p className="mt-3 font-mono-tech text-xs text-[#9AB0C4]">
                  {isId
                    ? 'Penyelenggara: KarirNex · Periode Kegiatan: 2–9 Juli 2026'
                    : 'Organizer: KarirNex · Activity Period: 2–9 July 2026'}
                </p>
              </div>

              <div className="space-y-6 lg:col-span-8">
                <p className="text-base leading-relaxed text-[#F0EFEA]/90">
                  {isId
                    ? 'Diselesaikan selama Bootcamp Data Analyst KarirNex, proyek ini mencakup empat latihan praktis yang memeriksa data transaksi otomotif menggunakan Microsoft Excel, Google BigQuery, Python (Google Colab), dan Microsoft Power BI.'
                    : 'Completed during the KarirNex Data Analyst Bootcamp, this project comprises four practical exercises examining automotive transaction data across Microsoft Excel, Google BigQuery, Python (Google Colab), and Microsoft Power BI.'}
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-[#B8E1F5]/14 bg-[#051B2E]/75 p-5">
                    <p className="font-mono-tech text-xs uppercase tracking-[0.08em] text-[#B8E1F5]">
                      {isId ? 'Tujuan Utama' : 'Core Objectives'}
                    </p>
                    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-[#A3B8CC] sm:text-sm">
                      <li>
                        ·{' '}
                        {isId
                          ? 'Mengeksplorasi pola transaksi otomotif di setiap tugas latihan'
                          : 'Explore automotive transaction patterns within each assigned exercise'}
                      </li>
                      <li>
                        ·{' '}
                        {isId
                          ? 'Mempraktikkan pemrosesan data, kueri, dan agregasi di empat perangkat'
                          : 'Practice data processing, querying, and aggregation across four tools'}
                      </li>
                      <li>
                        ·{' '}
                        {isId
                          ? 'Memeriksa kinerja penjualan lintas kategori, cabang, produk, dan metode pembayaran'
                          : 'Examine sales performance across categories, branches, products, and payment methods'}
                      </li>
                      <li>
                        ·{' '}
                        {isId
                          ? 'Mengembangkan dashboard Power BI interaktif untuk mengomunikasikan hasil Task 4'
                          : 'Develop an interactive Power BI dashboard to communicate Task 4 results'}
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-[#F2A658]/30 bg-[#062035]/80 p-5">
                    <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.08em] text-[#F2A658]">
                      <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>
                        {isId
                          ? 'Batas Asal-Usul Dataset'
                          : 'Dataset Lineage Boundary'}
                      </span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-[#E9EEF3]/90 sm:text-sm">
                      {data.scopeClarification}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Band 2: Flash Cards + Workstreams */}
        <section className="relative py-16 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-atmospheric-grid opacity-50"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/3 -right-24 h-[560px] w-[580px] rounded-full bg-radial from-[#4169E1]/18 via-[#1E4D8C]/16 to-transparent blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-[1440px] space-y-24 px-5 sm:px-8 lg:px-12">
            <GlassFlashCardDeck
              sectionIndex="02"
              heading={
                isId
                  ? 'Temuan Dashboard Power BI Task 4'
                  : 'Task 4 Power BI Dashboard Findings'
              }
              subheading={
                isId
                  ? 'Seluruh metrik dalam dek ini berasal secara eksklusif dari latihan dashboard Power BI Task 4 (98 transaksi, total penjualan Rp26,02 Miliar).'
                  : 'All metrics in this deck derive exclusively from the Task 4 Power BI dashboard exercise (98 transactions, Rp26.02 Billion total sales).'
              }
              cards={data.flashCards}
            />

            <div id="workstreams" className="scroll-mt-24">
              <InteractiveProcessVisualizer
                sectionIndex="03"
                heading={
                  isId
                    ? 'Empat Alur Kerja Bootcamp Terpisah'
                    : 'Four Separate Bootcamp Workstreams'
                }
                subheading={
                  isId
                    ? 'Pilih setiap tugas di bawah untuk meninjau perangkat yang digunakan, aktivitas terdokumentasi, temuan terverifikasi dalam lingkup latihan tersebut, dan bukti tangkapan layar asli.'
                    : "Select each task below to inspect the tool applied, documented activities, verified findings within that exercise's scope, and the original screenshot evidence."
                }
                scopeBannerText={data.scopeClarification}
                nodes={data.tasks}
                defaultSelectedIndex={3}
              />
            </div>
          </div>
        </section>

        {/* Band 3: Summary Tables + Next Case Study */}
        <section
          aria-labelledby="tables-heading"
          className="relative py-16 sm:py-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/4 h-[380px] w-[460px] rounded-full bg-radial from-[#4169E1]/12 via-transparent to-transparent blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-10 right-12 h-[300px] w-[360px] rounded-full bg-radial from-[#FF6C65]/8 via-transparent to-transparent blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-[1440px] space-y-16 px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#FF6C65]">
                  {isId
                    ? '04. Distribusi Terverifikasi Task 4 & Kesimpulan'
                    : '04. Verified Task 4 Distributions & Takeaways'}
                </p>
                <h2
                  id="tables-heading"
                  className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl"
                >
                  {isId
                    ? 'Tabel Ringkasan & Pembelajaran Proyek'
                    : 'Summary Tables & Project Learnings'}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#A3B8CC]">
                  {isId
                    ? 'Ringkasan deskriptif distribusi dashboard Task 4 beserta poin pembelajaran utama dari latihan bootcamp.'
                    : 'Descriptive summary of the Task 4 dashboard distributions alongside key takeaways from the bootcamp exercises.'}
                </p>

                <div className="mt-6 space-y-3 rounded-xl border border-[#B8E1F5]/14 bg-[#051B2E]/80 p-6">
                  <p className="font-mono-tech text-xs uppercase tracking-[0.08em] text-[#B8E1F5]">
                    {isId ? 'Pembelajaran Proyek' : 'Project Takeaways'}
                  </p>
                  {data.takeaways.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-[#F0EFEA]/90 sm:text-sm"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6C65]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabular Breakdowns */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
                {/* Top 5 Products Table */}
                <div className="rounded-xl border border-[#B8E1F5]/14 bg-[#02111D]/90 p-6">
                  <h3 className="font-mono-tech text-xs uppercase tracking-[0.08em] text-[#B8E1F5]">
                    {isId
                      ? 'Task 4 — 5 Produk Teratas Berdasarkan Penjualan'
                      : 'Task 4 — Top 5 Products by Sales'}
                  </h3>
                  <table className="mt-4 w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-[#B8E1F5]/14 font-mono-tech text-[11px] text-[#9AB0C4]">
                        <th className="pb-2">{isId ? 'Peringkat' : 'Rank'}</th>
                        <th className="pb-2">{isId ? 'Produk' : 'Product'}</th>
                        <th className="pb-2 text-right">
                          {isId ? 'Penjualan' : 'Sales'}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#B8E1F5]/10 font-mono-tech">
                      <tr>
                        <td className="py-2.5 text-[#F2A658]">01</td>
                        <td className="py-2.5 font-sans text-[#F0EFEA]">Toyota Avanza 1.5 G CVT</td>
                        <td className="py-2.5 text-right text-[#F0EFEA]">Rp2.9 B</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 text-[#F2A658]">02</td>
                        <td className="py-2.5 font-sans text-[#F0EFEA]">Honda BR-V 1.5 E CVT</td>
                        <td className="py-2.5 text-right text-[#F0EFEA]">Rp2.8 B</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 text-[#F2A658]">03</td>
                        <td className="py-2.5 font-sans text-[#F0EFEA]">Mitsubishi Xpander Ultimate</td>
                        <td className="py-2.5 text-right text-[#F0EFEA]">Rp2.6 B</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 text-[#F2A658]">04</td>
                        <td className="py-2.5 font-sans text-[#F0EFEA]">Daihatsu Xenia 1.5 R CVT</td>
                        <td className="py-2.5 text-right text-[#F0EFEA]">Rp2.4 B</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 text-[#F2A658]">05</td>
                        <td className="py-2.5 font-sans text-[#F0EFEA]">Toyota Rush 1.5 G</td>
                        <td className="py-2.5 text-right text-[#F0EFEA]">Rp2.1 B</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Payment Method & Transaction Status Tables */}
                <div className="space-y-6">
                  <div className="rounded-xl border border-[#B8E1F5]/14 bg-[#02111D]/90 p-6">
                    <h3 className="font-mono-tech text-xs uppercase tracking-[0.08em] text-[#B8E1F5]">
                      {isId
                        ? 'Task 4 — Pangsa Metode Pembayaran'
                        : 'Task 4 — Payment Method Share'}
                    </h3>
                    <table className="mt-3 w-full text-left text-xs sm:text-sm">
                      <tbody className="divide-y divide-[#B8E1F5]/10 font-mono-tech">
                        <tr>
                          <td className="py-2 font-sans text-[#F0EFEA]">Kredit</td>
                          <td className="py-2 text-right text-[#F2A658]">40.8%</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-sans text-[#F0EFEA]">Cash + Trade In</td>
                          <td className="py-2 text-right text-[#F0EFEA]">32.7%</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-sans text-[#F0EFEA]">Cash</td>
                          <td className="py-2 text-right text-[#F0EFEA]">19.4%</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-sans text-[#F0EFEA]">Kredit + Trade In</td>
                          <td className="py-2 text-right text-[#F0EFEA]">7.1%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="rounded-xl border border-[#B8E1F5]/14 bg-[#02111D]/90 p-6">
                    <h3 className="font-mono-tech text-xs uppercase tracking-[0.08em] text-[#B8E1F5]">
                      {isId
                        ? 'Task 4 — Status Transaksi (Total 98)'
                        : 'Task 4 — Transaction Status (98 Total)'}
                    </h3>
                    <table className="mt-3 w-full text-left text-xs sm:text-sm">
                      <tbody className="divide-y divide-[#B8E1F5]/10 font-mono-tech">
                        <tr>
                          <td className="py-2 font-sans text-[#F0EFEA]">Completed</td>
                          <td className="py-2 text-right text-[#F0EFEA]">88</td>
                          <td className="py-2 text-right text-[#F2A658]">89.8%</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-sans text-[#F0EFEA]">Cancelled</td>
                          <td className="py-2 text-right text-[#F0EFEA]">7</td>
                          <td className="py-2 text-right text-[#9AB0C4]">7.1%</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-sans text-[#F0EFEA]">Refund</td>
                          <td className="py-2 text-right text-[#F0EFEA]">3</td>
                          <td className="py-2 text-right text-[#9AB0C4]">3.1%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Case Study Navigation */}
            <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-[#B8E1F5]/18 bg-[#051D31]/80 p-6 backdrop-blur-md sm:flex-row sm:items-center sm:p-8">
              <div>
                <p className="font-mono-tech text-xs text-[#B8E1F5]">
                  {isId ? 'Studi Kasus Berikutnya · 02' : 'Next Case Study · 02'}
                </p>
                <h3 className="mt-1 text-lg font-bold text-[#F0EFEA] sm:text-xl">
                  {isId
                    ? 'Pengumpulan Data & Web Scraping Firma Hukum Imigrasi AS'
                    : 'US Immigration Law Firms Data Collection & Scraping'}
                </h3>
              </div>
              <Link
                href="/projects/us-law-firms-data-collection"
                className="inline-flex items-center gap-2 rounded-sm bg-[#FF6C65] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-[#021F2D] shadow-[0_4px_20px_rgba(255,108,101,0.3)] transition-all duration-200 hover:bg-[#ff827c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0EFEA] whitespace-nowrap shrink-0"
              >
                <span>{isId ? 'Lihat Studi Kasus' : 'View Case Study'}</span>
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

export function UsLawFirmsCaseStudyView() {
  const { isId, usLawFirmsCaseStudy: data } = useLocalizedPortfolio();
  const sample1Evidence = data.workflowStages[3].evidence!;
  const sample2Evidence = data.workflowStages[2].evidence!;

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip bg-[#061B33] text-[#EAF1F8]">
      <Navbar variant="project-detail" />

      <main className="relative flex-1 bg-[linear-gradient(180deg,#061B33_0%,#021F2D_32%,#002147_68%,#061B33_100%)]">
        {/* 1. Asymmetric Project Hero */}
        <AsymmetricProjectHero
          projectIndex="02"
          contextLabel={data.contextLabel}
          title={data.title}
          shortSummary={data.shortSummary}
          tools={data.tools}
          metadataItems={data.metricsComparison}
          heroEvidence={data.heroEvidence}
          primarySectionAnchor="#workflow-stages"
          primarySectionLabel={
            isId
              ? 'Tinjau Alur Kerja Pengumpulan 4-Tahap'
              : 'Inspect 4-Stage Collection Workflow'
          }
        />

        {/* Band 1: Overview */}
        <section
          aria-labelledby="law-overview-heading"
          className="relative py-16 sm:py-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-16 h-[460px] w-[520px] rounded-full bg-radial from-[#5B9BD5]/18 via-[#2878A8]/12 to-transparent blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#FF6C65]">
                  {isId
                    ? '01. Ringkasan Proyek & Ruang Lingkup'
                    : '01. Project Overview & Scope'}
                </p>
                <h2
                  id="law-overview-heading"
                  className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl"
                >
                  {isId
                    ? 'Pengumpulan Direktori Multi-Sumber & Tinjauan'
                    : 'Multi-Source Directory Collection & Review'}
                </h2>
                <p className="mt-3 font-mono-tech text-xs text-[#9AB0C4]">
                  {isId ? 'Peran' : 'Role'}: {data.role}
                </p>
              </div>

              <div className="space-y-6 lg:col-span-8">
                <p className="text-base leading-relaxed text-[#F0EFEA]/90">
                  {isId
                    ? 'Klien membutuhkan spreadsheet terstruktur berisi 500 firma hukum imigrasi AS yang melayani komunitas India. Karena tidak ada satu pun direktori yang menyediakan detail bisnis lengkap dan terverifikasi untuk semua kolom target, alur kerja ini menggabungkan scraping berbasis lokasi dari Sulekha (~500 baris sumber) dengan daftar tambahan dari Google Maps (438 baris sumber), diikuti oleh integrasi lintas sumber dan peninjauan manual pada kolom yang belum terkonfirmasi.'
                    : 'The client required a structured spreadsheet of 500 US immigration law firms serving the Indian community. Because no single directory provided complete and verified business details across all target fields, the workflow combined location-based scraping from Sulekha (~500 source records) with supplementary listings from Google Maps (438 source records), followed by cross-source integration and manual review of unconfirmed fields.'}
                </p>

                <div className="rounded-xl border border-[#F2A658]/30 bg-[#062035]/80 p-5">
                  <div className="flex items-start gap-3">
                    <ShieldAlert
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#F2A658]"
                      aria-hidden="true"
                    />
                    <p className="text-xs leading-relaxed text-[#E9EEF3]/90 sm:text-sm">
                      {data.privacyNotice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Band 2: Flash Cards + 4-Stage Workflow */}
        <section className="relative py-16 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-atmospheric-grid opacity-50"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/3 -right-24 h-[560px] w-[580px] rounded-full bg-radial from-[#4169E1]/18 via-[#1E4D8C]/16 to-transparent blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-[1440px] space-y-24 px-5 sm:px-8 lg:px-12">
            <GlassFlashCardDeck
              sectionIndex="02"
              heading={
                isId
                  ? 'Ruang Lingkup Deliverable, Volume Sumber & Keputusan Teknis'
                  : 'Deliverable Scope, Source Volumes & Technical Decisions'
              }
              subheading={
                isId
                  ? 'Tinjau bagaimana jumlah pengumpulan sumber berkaitan dengan target 500 baris dan bagaimana hambatan CAPTCHA pada Sulekha ditangani melalui alur kerja human-in-the-loop.'
                  : 'Inspect how source collection counts relate to the 500-record target and how CAPTCHA friction on Sulekha was handled via a human-in-the-loop workflow.'
              }
              cards={data.flashCards}
            />

            <div id="workflow-stages" className="scroll-mt-24">
              <InteractiveProcessVisualizer
                sectionIndex="03"
                heading={
                  isId
                    ? 'Alur Kerja Pengumpulan, Integrasi & Pengiriman Empat Tahap'
                    : 'Four-Stage Collection, Integration & Delivery Workflow'
                }
                subheading={
                  isId
                    ? 'Pilih setiap tahap untuk meninjau metode pengumpulan, pembedaan volume sumber, dan bukti tangkapan layar yang telah disanitasi (`sulekha`, `maps`, `sample2`, dan `sample1`).'
                    : 'Select each stage to inspect the collection method, source volume distinction, and sanitized screenshot evidence (`sulekha`, `maps`, `sample2`, and `sample1`).'
                }
                scopeBannerText={
                  isId
                    ? 'Volume pengumpulan sumber (~500 baris Sulekha dan 438 baris Google Maps) merupakan input non-aditif yang digunakan untuk integrasi dan komparasi lintas sumber menuju hasil akhir 500 baris bagi klien.'
                    : 'Source collection volumes (~500 Sulekha records and 438 Google Maps records) are non-additive inputs used for cross-source integration and comparison toward the 500-record final client deliverable.'
                }
                nodes={data.workflowStages}
                defaultSelectedIndex={0}
              />
            </div>
          </div>
        </section>

        {/* Band 3: Paired Final Sample Dataset & Next Case Study */}
        <section
          aria-labelledby="sample-dataset-heading"
          className="relative py-16 sm:py-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/4 h-[380px] w-[460px] rounded-full bg-radial from-[#4169E1]/12 via-transparent to-transparent blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-8 right-10 h-[300px] w-[360px] rounded-full bg-radial from-[#FF6C65]/8 via-transparent to-transparent blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-[1440px] space-y-12 px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#FF6C65]">
                  {isId
                    ? '04. Dataset Sampel Akhir yang Disanitasi (`sample1` & `sample2`)'
                    : '04. Sanitized Final Sample Dataset (`sample1` & `sample2`)'}
                </p>
                <h2
                  id="sample-dataset-heading"
                  className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl"
                >
                  {isId
                    ? 'Sampel Portofolio 10-Baris di Seluruh 15 Kolom Skema'
                    : '10-Record Portfolio Sample Across 15 Schema Columns'}
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-[#A3B8CC]">
                {isId
                  ? '`sample1` dan `sample2` menampilkan dua potongan kolom horizontal dari dataset sampel 10-baris yang sama (`Sample_10_Firms` / `Batch 1`), memperlihatkan struktur hasil akhir Excel 500-baris sembari menjaga privasi dataset lengkap klien.'
                  : '`sample1` and `sample2` represent two horizontal column views of the same 10-record sanitized sample dataset (`Sample_10_Firms` / `Batch 1`), illustrating the structure of the 500-record Excel deliverable while keeping the full client dataset private.'}
              </p>
            </div>

            {/* 15-Column Schema Bar */}
            <div className="rounded-xl border border-[#B8E1F5]/14 bg-[#051B2E]/80 p-6">
              <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.08em] text-[#B8E1F5]">
                <FileSpreadsheet className="h-4 w-4 text-[#F2A658]" aria-hidden="true" />
                <span>
                  {isId
                    ? 'Skema Workbook Sampel 15-Kolom Teraudit'
                    : 'Audited 15-Column Sample Workbook Schema'}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
                {data.schemaColumns.map((col) => (
                  <div
                    key={col}
                    className="rounded border border-[#B8E1F5]/12 bg-[#02111D]/90 px-3 py-2 font-mono-tech text-xs text-[#F0EFEA]/90"
                  >
                    {col}
                  </div>
                ))}
              </div>
            </div>

            {/* Paired Sample1 & Sample2 Evidence Frames */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <ImmersiveEvidenceFrame
                evidence={sample1Evidence}
                accentVariant="cobalt"
              />
              <ImmersiveEvidenceFrame
                evidence={sample2Evidence}
                accentVariant="amber"
              />
            </div>

            {/* Previous / Next Case Study Navigation */}
            <div className="flex flex-col items-stretch justify-between gap-4 rounded-xl border border-[#B8E1F5]/18 bg-[#051D31]/80 p-6 backdrop-blur-md sm:flex-row sm:items-center sm:p-8">
              <Link
                href="/projects/automotive-sales-analysis"
                className="inline-flex items-center gap-2 font-mono-tech text-xs font-semibold uppercase tracking-[0.08em] text-[#9AB0C4] transition-colors hover:text-[#B8E1F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E1F5]"
              >
                <ArrowLeft className="h-4 w-4 text-[#FF6C65]" aria-hidden="true" />
                <span>
                  {isId
                    ? '01. Analisis Penjualan Otomotif'
                    : '01. Automotive Sales Analysis'}
                </span>
              </Link>

              <Link
                href="/projects/ai-data-analyst-agent"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#FF6C65] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-[#021F2D] shadow-[0_4px_20px_rgba(255,108,101,0.3)] transition-all duration-200 hover:bg-[#ff827c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0EFEA] whitespace-nowrap"
              >
                <span>
                  {isId
                    ? 'Berikutnya: 03. Agen Analis Data AI'
                    : 'Next: 03. AI Data Analyst Agent'}
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

export function AiAgentCaseStudyView() {
  const { isId, aiAgentCaseStudy: data } = useLocalizedPortfolio();
  const outputEvidence = data.publicEvidence[0];
  const datasetEvidence = data.publicEvidence[1];
  const workflowEvidence = data.publicEvidence[2];

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip bg-[#061B33] text-[#EAF1F8]">
      <Navbar variant="project-detail" />

      <main className="relative flex-1 bg-[linear-gradient(180deg,#061B33_0%,#021F2D_32%,#002147_68%,#061B33_100%)]">
        {/* 1. Asymmetric Project Hero */}
        <AsymmetricProjectHero
          projectIndex="03"
          contextLabel={data.contextLabel}
          title={data.title}
          shortSummary={data.shortSummary}
          tools={data.tools}
          metadataItems={data.datasetStats}
          heroEvidence={outputEvidence}
          primarySectionAnchor="#langflow-architecture"
          primarySectionLabel={
            isId
              ? 'Tinjau Diagram Langflow 6-Tahap'
              : 'Inspect 6-Stage Langflow Diagram'
          }
        />

        {/* Band 1: Overview */}
        <section
          aria-labelledby="ai-overview-heading"
          className="relative py-16 sm:py-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-16 h-[460px] w-[520px] rounded-full bg-radial from-[#5B9BD5]/18 via-[#2878A8]/12 to-transparent blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#FF6C65]">
                  {isId
                    ? '01. Ringkasan Proyek & Ruang Lingkup'
                    : '01. Project Overview & Scope'}
                </p>
                <h2
                  id="ai-overview-heading"
                  className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl"
                >
                  {isId
                    ? 'Sintesis Ulasan LLM Berurutan di Langflow'
                    : 'Sequential LLM Review Synthesis in Langflow'}
                </h2>
                <p className="mt-3 font-mono-tech text-xs text-[#9AB0C4]">
                  Platform: {data.platform} · Input: `laptop_online_review.csv`
                </p>
              </div>

              <div className="space-y-6 lg:col-span-8">
                <p className="text-base leading-relaxed text-[#F0EFEA]/90">
                  {isId
                    ? 'Platform e-commerce mengumpulkan ulasan pelanggan tak terstruktur dalam jumlah besar yang memakan waktu jika dibaca dan disintesis secara manual. Proyek ini mengeksplorasi bagaimana pipeline Langflow berurutan—menggabungkan templat prompt terstruktur dengan `gemini-3.1-flash-lite` dan `gemini-2.5-flash`—dapat memproses dataset CSV ulasan elektronik konsumen untuk menghasilkan ringkasan eksekutif berbahasa Indonesia formal, daftar tindak lanjut per departemen, serta label klasifikasi sentimen.'
                    : 'E-commerce platforms accumulate large volumes of unstructured customer reviews that are time-consuming to read and synthesize manually. This project explores how a sequential Langflow pipeline—combining structured prompt templates with `gemini-3.1-flash-lite` and `gemini-2.5-flash`—can process a CSV dataset of consumer-electronics reviews to generate a formal Bahasa Indonesia executive summary, departmental action items, and a sentiment classification label.'}
                </p>

                <div className="rounded-xl border border-[#F2A658]/30 bg-[#062035]/80 p-5">
                  <div className="flex items-start gap-3">
                    <ShieldAlert
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#F2A658]"
                      aria-hidden="true"
                    />
                    <p className="text-xs leading-relaxed text-[#E9EEF3]/90 sm:text-sm">
                      {data.architectureBoundary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Band 2: Langflow Architecture + Flash Cards */}
        <section className="relative py-16 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-atmospheric-grid opacity-50"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/3 -right-24 h-[560px] w-[580px] rounded-full bg-radial from-[#4169E1]/18 via-[#1E4D8C]/16 to-transparent blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-[1440px] space-y-24 px-5 sm:px-8 lg:px-12">
            {/* Custom Native 6-Stage Interactive Langflow Workflow Diagram */}
            <div
              id="langflow-architecture"
              aria-labelledby="workflow-heading"
              className="scroll-mt-24 space-y-6"
            >
              <div>
                <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#FF6C65]">
                  {isId
                    ? '02. Arsitektur Alur Kerja (Diagram Interaktif Rekonstruksi)'
                    : '02. Workflow Architecture (Reconstructed Interactive Diagram)'}
                </p>
                <h2
                  id="workflow-heading"
                  className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl"
                >
                  {isId
                    ? 'Pipeline Prompt-dan-LLM Berurutan Enam Tahap'
                    : 'Six-Stage Sequential Prompt-and-LLM Pipeline'}
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#A3B8CC]">
                  {isId
                    ? 'Tangkapan layar kanvas Langflow asli di bawah menampilkan enam node sekuensial secara utuh dengan proporsi asli. Gunakan penjelajah tahap interaktif di bawahnya untuk meninjau koneksi input/output, pemilihan model, dan konfigurasi prompt pada setiap tahap.'
                    : 'The actual Langflow workflow canvas below displays all six connected sequential nodes at native proportions. Use the interactive stage breakdown beneath it to inspect input/output connections, model selection, and prompt configuration for each stage.'}
                </p>
              </div>

              {workflowEvidence && (
                <ImmersiveEvidenceFrame
                  evidence={workflowEvidence}
                  accentVariant="cobalt"
                />
              )}

              <LangflowWorkflowDiagram nodes={data.langflowNodes} />
            </div>

            {/* Translucent Blue Flash Cards */}
            <GlassFlashCardDeck
              sectionIndex="03"
              heading={
                isId
                  ? 'Iterasi Prompt Engineering & Audit Dataset'
                  : 'Prompt Engineering Iteration & Dataset Audit'
              }
              subheading={
                isId
                  ? 'Jelajahi perbaikan validasi templat JSON kurung kurawal bersarang di Langflow, karakteristik CSV multi-kategori 1.001 baris teraudit, dan lima kriteria sintesis.'
                  : 'Explore the Langflow nested-brace JSON template validation fix, the audited 1,001-record multi-category CSV characteristics, and the five synthesis criteria.'
              }
              cards={data.flashCards}
            />
          </div>
        </section>

        {/* Band 3: Dataset Schema & Rating Distribution + Evidence */}
        <section
          aria-labelledby="evidence-heading"
          className="relative py-16 sm:py-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/4 h-[380px] w-[460px] rounded-full bg-radial from-[#4169E1]/12 via-transparent to-transparent blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-8 right-10 h-[300px] w-[360px] rounded-full bg-radial from-[#FF6C65]/8 via-transparent to-transparent blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-[1440px] space-y-12 px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#FF6C65]">
                  {isId
                    ? '04. Dataset Input Teraudit & Output Representatif'
                    : '04. Audited Input Dataset & Representative Output'}
                </p>
                <h2
                  id="evidence-heading"
                  className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl"
                >
                  {isId
                    ? 'Karakteristik Dataset & Bukti Respons yang Dihasilkan'
                    : 'Dataset Characteristics & Generated Response Evidence'}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#A3B8CC]">
                  {isId
                    ? 'Meskipun bernama `laptop_online_review.csv`, dataset 1.001 baris teraudit ini mencakup ulasan pelanggan lintas laptop, smartphone, dan peralatan rumah tangga—selaras dengan rekomendasi lintas kategori pada tangkapan layar output yang dihasilkan.'
                    : 'Despite the filename `laptop_online_review.csv`, the audited 1,001-row dataset includes customer reviews across laptops, smartphones, and household appliances—matching the cross-category recommendations in the generated output screenshot.'}
                </p>
              </div>

              {/* Schema & Descriptive Rating Distribution Cards */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
                <div className="rounded-xl border border-[#B8E1F5]/14 bg-[#02111D]/90 p-5">
                  <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.08em] text-[#B8E1F5]">
                    <Database className="h-3.5 w-3.5 text-[#F2A658]" aria-hidden="true" />
                    <span>
                      {isId
                        ? 'Skema CSV (`laptop_online_review.csv`)'
                        : 'CSV Schema (`laptop_online_review.csv`)'}
                    </span>
                  </div>
                  <ul className="mt-3.5 space-y-2 font-mono-tech text-xs text-[#F0EFEA]/90">
                    <li>
                      1. `Unnamed: 0` —{' '}
                      {isId
                        ? 'Kolom indeks sumber (0 hingga 1000)'
                        : 'Source index column (0 to 1000)'}
                    </li>
                    <li>
                      2. `Product_name` —{' '}
                      {isId
                        ? '108 item elektronik konsumen unik'
                        : '108 unique consumer-electronics items'}
                    </li>
                    <li>
                      3. `Review` —{' '}
                      {isId
                        ? 'Teks ulasan pelanggan tak terstruktur'
                        : 'Unstructured customer review text'}
                    </li>
                    <li>
                      4. `Rating` —{' '}
                      {isId
                        ? 'Rating bintang bilangan bulat (1 hingga 5)'
                        : 'Integer star rating (1 to 5)'}
                    </li>
                  </ul>
                  <p className="mt-4 border-t border-[#B8E1F5]/10 pt-3 text-xs text-[#9AB0C4]">
                    {isId
                      ? 'Kelengkapan teraudit: 1.001 baris, 0 nilai kosong (missing values), 0 baris duplikat persis.'
                      : 'Audited completeness: 1,001 rows, 0 missing values, 0 exact duplicate rows.'}
                  </p>
                </div>

                <div className="rounded-xl border border-[#B8E1F5]/14 bg-[#02111D]/90 p-5">
                  <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.08em] text-[#B8E1F5]">
                    <Terminal className="h-3.5 w-3.5 text-[#FF6C65]" aria-hidden="true" />
                    <span>
                      {isId
                        ? 'Jumlah Rating Bintang Deskriptif'
                        : 'Descriptive Star Rating Counts'}
                    </span>
                  </div>
                  <div className="mt-3.5 space-y-2 font-mono-tech text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#F0EFEA]">5 Stars (★★★★★)</span>
                      <span className="text-[#F2A658]">
                        {isId ? '640 baris' : '640 records'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#F0EFEA]">4 Stars (★★★★☆)</span>
                      <span className="text-[#F0EFEA]">
                        {isId ? '238 baris' : '238 records'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#F0EFEA]">3 Stars (★★★☆☆)</span>
                      <span className="text-[#9AB0C4]">
                        {isId ? '58 baris' : '58 records'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#F0EFEA]">2 Stars (★★☆☆☆)</span>
                      <span className="text-[#9AB0C4]">
                        {isId ? '8 baris' : '8 records'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#F0EFEA]">1 Star (★☆☆☆☆)</span>
                      <span className="text-[#FF6C65]">
                        {isId ? '57 baris' : '57 records'}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 border-t border-[#B8E1F5]/10 pt-2.5 text-[11px] text-[#9AB0C4]">
                    {isId
                      ? 'Catatan: Distribusi rating bintang merupakan metadata input deskriptif dan berbeda dari klasifikasi sentimen teks oleh LLM.'
                      : 'Note: Star rating distribution is descriptive input metadata and is distinct from LLM text sentiment classification.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Public Evidence Frames */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <ImmersiveEvidenceFrame
                evidence={datasetEvidence}
                accentVariant="cobalt"
              />
              <ImmersiveEvidenceFrame
                evidence={outputEvidence}
                accentVariant="coral"
              />
            </div>

            {/* Previous / Back to Selected Work Navigation */}
            <div className="flex flex-col items-stretch justify-between gap-4 rounded-xl border border-[#B8E1F5]/18 bg-[#051D31]/80 p-6 backdrop-blur-md sm:flex-row sm:items-center sm:p-8">
              <Link
                href="/projects/us-law-firms-data-collection"
                className="inline-flex items-center gap-2 font-mono-tech text-xs font-semibold uppercase tracking-[0.08em] text-[#9AB0C4] transition-colors hover:text-[#B8E1F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E1F5]"
              >
                <ArrowLeft className="h-4 w-4 text-[#FF6C65]" aria-hidden="true" />
                <span>
                  {isId
                    ? '02. Pengumpulan Data Firma Hukum AS'
                    : '02. US Law Firms Data Collection'}
                </span>
              </Link>

              <Link
                href="/#selected-work"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#B8E1F5]/25 bg-[#02121F] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-[#F0EFEA] transition-colors hover:border-[#B8E1F5]/60 hover:bg-[#072136] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E1F5] whitespace-nowrap"
              >
                <span>
                  {isId
                    ? 'Kembali ke Semua Proyek Pilihan'
                    : 'Return to All Selected Work'}
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
