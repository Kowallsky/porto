'use client';

import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react';
import {
  Database,
  Filter,
  BarChart3,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Globe,
  Table2,
} from 'lucide-react';
import { useLocalizedPortfolio } from '@/lib/language-context';

export function CapabilitiesZigzagSection() {
  const shouldReduceMotion = useReducedMotion();
  const { isId, capabilityPillars } = useLocalizedPortfolio();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 25%'],
  });

  // Progressive path drawing for the 3 zigzag connectors (01->02, 02->03, 03->04)
  const path1Progress = useTransform(
    scrollYProgress,
    [0.05, 0.35],
    shouldReduceMotion ? [1, 1] : [0, 1]
  );
  const path2Progress = useTransform(
    scrollYProgress,
    [0.28, 0.62],
    shouldReduceMotion ? [1, 1] : [0, 1]
  );
  const path3Progress = useTransform(
    scrollYProgress,
    [0.55, 0.88],
    shouldReduceMotion ? [1, 1] : [0, 1]
  );

  // Subtle scroll parallax for the 4 asymmetric panels
  const panel1Y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [18, -14]
  );
  const panel2Y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [34, -22]
  );
  const panel3Y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [22, -16]
  );
  const panel4Y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [18, -10]
  );

  const p01 = capabilityPillars[0];
  const p02 = capabilityPillars[1];
  const p03 = capabilityPillars[2];
  const p04 = capabilityPillars[3];

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="relative scroll-mt-20 py-24 sm:py-32 lg:py-36"
    >
      {/* Feathered Deep Midnight, Petrol Blue & Steel Blue Technical Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-28 inset-x-0 mask-atmosphere-blend bg-[linear-gradient(142deg,rgba(6,27,51,0.92)_0%,rgba(16,59,80,0.78)_38%,rgba(30,77,140,0.48)_74%,rgba(6,27,51,0.94)_100%)]"
      />
      {/* Subtle dot-matrix texture for structured technical contrast */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-atmospheric-dots opacity-60"
      />
      {/* Upper-right Petrol & Steel Blue ambient illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 right-[2%] h-[560px] w-[640px] rounded-full bg-radial from-[#5B9BD5]/22 via-[#103B50]/26 to-transparent blur-3xl animate-ambient-slow"
      />
      {/* Lower-left Cobalt & Ocean Navy ambient illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 -left-16 h-[540px] w-[620px] rounded-full bg-radial from-[#1E4D8C]/26 via-[#021F2D]/30 to-transparent blur-3xl animate-ambient-reverse"
      />
      {/* Lower-right Warm Signal Coral & Burnt Orange concluding glow behind Node 04 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-[4%] h-[460px] w-[540px] rounded-full bg-radial from-[#FF6C65]/15 via-[#E97845]/10 to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* ================================================================= */}
        {/* SECTION HEADER & PIPELINE JOURNEY INDICATOR                       */}
        {/* ================================================================= */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#FF6C65]">
              {isId ? '04. Kapabilitas' : '04. Capabilities'}
            </p>
            <h2
              id="capabilities-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-4xl lg:text-[42px]"
            >
              {isId ? 'Apa yang Dapat Saya Bantu' : 'What I Can Help You With'}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#8AB9DC] sm:text-base">
              {isId
                ? 'Solusi praktis di bidang pengumpulan data, analitik, dan otomasi berbasis AI.'
                : 'Practical solutions across data collection, analytics, and AI-powered automation.'}
            </p>
          </div>

          {/* Connected Journey Flow Legend */}
          <div className="flex flex-wrap items-center gap-2 font-mono-tech text-[11px] text-[#8AB9DC]">
            <span className="text-[#FF6C65]">01</span>
            <span>{isId ? 'Koleksi' : 'Collection'}</span>
            <ArrowRight className="h-3 w-3 text-[#5B9BD5]" aria-hidden="true" />
            <span className="text-[#E8A34A]">02</span>
            <span>{isId ? 'Pemrosesan' : 'Processing'}</span>
            <ArrowRight className="h-3 w-3 text-[#5B9BD5]" aria-hidden="true" />
            <span className="text-[#4169E1]">03</span>
            <span>{isId ? 'Analisis' : 'Analysis'}</span>
            <ArrowRight className="h-3 w-3 text-[#FF6C65]" aria-hidden="true" />
            <span className="text-[#FF6C65]">04</span>
            <span className="text-[#EAF1F8]">
              {isId ? 'Otomasi AI' : 'AI Automation'}
            </span>
          </div>
        </div>

        {/* ================================================================= */}
        {/* ASYMMETRIC ZIGZAG FLOW CANVAS                                     */}
        {/* 01 Upper-Left -> 02 Upper-Right -> 03 Lower-Left -> 04 Lower-Right*/}
        {/* ================================================================= */}
        <div className="relative mt-14 sm:mt-20">
          {/* =============================================================== */}
          {/* DESKTOP CURVED ZIGZAG SVG CONNECTOR LAYER (BEHIND NODES)        */}
          {/* =============================================================== */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 1520"
            fill="none"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full lg:block"
          >
            <defs>
              <linearGradient id="zigzagGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5B9BD5" stopOpacity="0.85" />
                <stop offset="55%" stopColor="#FF6C65" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#E8A34A" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="zigzagGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E8A34A" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#5B9BD5" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#4169E1" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="zigzagGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4169E1" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#E97845" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FF6C65" stopOpacity="0.95" />
              </linearGradient>
              <filter id="connectorGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Base muted guide tracks */}
            <path
              d="M 460 205 C 610 205, 560 335, 690 335"
              stroke="rgba(138, 185, 220, 0.18)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <path
              d="M 760 545 C 760 675, 340 625, 340 770"
              stroke="rgba(138, 185, 220, 0.18)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            {/* Connector 03 -> 04 routed through the open space above repositioned Card 04 */}
            <path
              d="M 488 860 C 645 860, 735 885, 735 975"
              stroke="rgba(138, 185, 220, 0.24)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />

            {/* Animated Connector 01 -> 02 (Upper-Left to Upper-Right) */}
            <motion.path
              d="M 460 205 C 610 205, 560 335, 690 335"
              stroke="url(#zigzagGrad1)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#connectorGlow)"
              style={{ pathLength: path1Progress }}
            />

            {/* Animated Connector 02 -> 03 (Diagonal Sweep Upper-Right to Lower-Left) */}
            <motion.path
              d="M 760 545 C 760 675, 340 625, 340 770"
              stroke="url(#zigzagGrad2)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#connectorGlow)"
              style={{ pathLength: path2Progress }}
            />

            {/* Animated Connector 03 -> 04 (Lower-Left sweeping cleanly into Lower-Right Top Rim) */}
            <motion.path
              d="M 488 860 C 645 860, 735 885, 735 975"
              stroke="url(#zigzagGrad3)"
              strokeWidth="2.75"
              strokeLinecap="round"
              filter="url(#connectorGlow)"
              style={{ pathLength: path3Progress }}
            />

            {/* Connector Anchor Terminals & Midpoint Direction Nodes */}
            <circle cx="460" cy="205" r="5" fill="#5B9BD5" />
            <circle cx="578" cy="270" r="4" fill="#FF6C65" />
            <circle cx="690" cy="335" r="5" fill="#E8A34A" />

            <circle cx="760" cy="545" r="5" fill="#E8A34A" />
            <circle cx="550" cy="655" r="4.5" fill="#FF6C65" />
            <circle cx="340" cy="770" r="5" fill="#4169E1" />

            <circle cx="488" cy="860" r="5" fill="#4169E1" />
            <circle cx="662" cy="884" r="4.5" fill="#E97845" />
            <circle cx="735" cy="975" r="5.5" fill="#FF6C65" />
          </svg>

          {/* =============================================================== */}
          {/* ZIGZAG ROW 1: 01 (UPPER-LEFT) & 02 (UPPER-RIGHT WIDER PANEL)    */}
          {/* =============================================================== */}
          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
            {/* ------------------------------------------------------------- */}
            {/* CAPABILITY 01: DATA COLLECTION & WEB SCRAPING (UPPER-LEFT)    */}
            {/* Medium-width visual panel (lg:col-span-5)                     */}
            {/* ------------------------------------------------------------- */}
            <motion.article
              style={{ y: panel1Y }}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -28, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              onMouseEnter={() => setHoveredIndex('01')}
              onMouseLeave={() => setHoveredIndex(null)}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.52, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl border transition-colors duration-300 lg:col-span-5 ${
                hoveredIndex === '01'
                  ? 'border-[#5B9BD5]/60 shadow-[0_26px_64px_rgba(2,12,26,0.75)]'
                  : 'border-[#5B9BD5]/25 shadow-[0_20px_50px_rgba(2,10,22,0.58)]'
              } bg-[linear-gradient(155deg,rgba(2,31,45,0.92)_0%,rgba(0,33,71,0.86)_55%,rgba(6,27,51,0.95)_100%)] p-6 sm:p-8 backdrop-blur-xl`}
            >
              {/* Top Steel Blue & Signal Coral Rim */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#FF6C65]/70 via-[#5B9BD5]/65 to-transparent"
              />

              {/* Header Kicker */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 font-mono-tech text-xs">
                  <span className="font-bold text-[#FF6C65]">01</span>
                  <span aria-hidden="true" className="text-[#8AB9DC]/40">
                    ·
                  </span>
                  <span className="uppercase tracking-[0.12em] text-[#B8E1F5]">
                    {isId ? 'Tahap Akuisisi Data' : 'Data Acquisition Stage'}
                  </span>
                </div>
                <Globe className="h-4 w-4 text-[#5B9BD5]" aria-hidden="true" />
              </div>

              <h3 className="mt-3 text-xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-2xl">
                {p01.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-[#EAF1F8]/82">
                {p01.summary}
              </p>

              {/* Bespoke Visual Detail: Web Source Extraction Micro-Artifact */}
              <div className="mt-5 rounded-xl border border-[#8AB9DC]/16 bg-[#021422]/90 p-3.5 font-mono-tech text-[11px]">
                <div className="flex items-center justify-between border-b border-[#8AB9DC]/12 pb-2 text-[#8AB9DC]">
                  <span className="flex items-center gap-1.5 text-[#B8E1F5]">
                    <Database className="h-3 w-3 text-[#FF6C65]" aria-hidden="true" />
                    <span>
                      {isId ? 'Ekstraksi Sumber Publik' : 'Public Source Extraction'}
                    </span>
                  </span>
                  <span className="text-[10px] text-[#5B9BD5]">
                    Sulekha · LawInfo · Maps
                  </span>
                </div>
                <div className="mt-2.5 space-y-1.5 text-[10px]">
                  <div className="flex items-center justify-between text-[#EAF1F8]/90">
                    <span className="truncate">record_01: US_Law_Firm_Listing</span>
                    <span className="text-[#5B9BD5]">200 OK · Parsed</span>
                  </div>
                  <div className="flex items-center justify-between text-[#8AB9DC]">
                    <span className="truncate">fields: Firm · State · Phone · URL</span>
                    <span className="text-[#FF6C65]">Verified [500]</span>
                  </div>
                </div>
              </div>

              {/* Supporting Capabilities */}
              <ul className="mt-5 space-y-2 border-t border-[#8AB9DC]/12 pt-4">
                {p01.capabilities.map((cap, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-[#EAF1F8]/88 sm:text-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono-tech mt-0.5 text-xs text-[#FF6C65]"
                    >
                      —
                    </span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              {/* Relevant Technologies (Unboxed Typography) */}
              <div className="mt-5 border-t border-[#8AB9DC]/12 pt-4 font-mono-tech text-xs">
                <span className="text-[#8AB9DC]">
                  {isId ? 'Teknologi: ' : 'Technologies: '}
                </span>
                <span className="text-[#B8E1F5]">
                  {p01.technologies.join(' · ')}
                </span>
              </div>
            </motion.article>

            {/* Mobile / Tablet Curved Connector 01 -> 02 */}
            <div
              aria-hidden="true"
              className="flex flex-col items-center justify-center py-1 lg:hidden"
            >
              <svg className="h-14 w-24" viewBox="0 0 96 56" fill="none">
                <path
                  d="M 24 4 C 24 28, 72 28, 72 52"
                  stroke="#FF6C65"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle cx="24" cy="4" r="3.5" fill="#5B9BD5" />
                <circle cx="72" cy="52" r="3.5" fill="#E8A34A" />
              </svg>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* CAPABILITY 02: DATA PROCESSING & TRANSFORMATION (UPPER-RIGHT) */}
            {/* Wider panel with staggered downward offset (lg:col-span-7)    */}
            {/* ------------------------------------------------------------- */}
            <motion.article
              style={{ y: panel2Y }}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 32, y: shouldReduceMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              onMouseEnter={() => setHoveredIndex('02')}
              onMouseLeave={() => setHoveredIndex(null)}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-2xl border transition-colors duration-300 lg:col-span-7 lg:mt-24 ${
                hoveredIndex === '02'
                  ? 'border-[#E8A34A]/65 shadow-[0_28px_68px_rgba(2,12,26,0.78)]'
                  : 'border-[#E8A34A]/30 shadow-[0_22px_54px_rgba(2,10,22,0.62)]'
              } bg-[linear-gradient(140deg,rgba(16,59,80,0.88)_0%,rgba(0,33,71,0.88)_52%,rgba(6,27,51,0.96)_100%)] p-6 sm:p-8 lg:p-9 backdrop-blur-xl`}
            >
              {/* Top Muted Amber & Signal Coral Rim */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#E8A34A]/75 via-[#FF6C65]/65 to-[#5B9BD5]/50"
              />

              {/* Header Kicker — Highlights Newly Introduced Core Transformation Stage */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 font-mono-tech text-xs">
                  <span className="font-bold text-[#FF6C65]">02</span>
                  <span aria-hidden="true" className="text-[#8AB9DC]/40">
                    ·
                  </span>
                  <span className="uppercase tracking-[0.12em] text-[#E8A34A]">
                    {isId
                      ? 'Tahap Inti Pemrosesan & Transformasi'
                      : 'Core Pipeline Transformation Stage'}
                  </span>
                </div>
                <Filter className="h-4 w-4 text-[#E8A34A]" aria-hidden="true" />
              </div>

              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-3xl">
                {p02.title}
              </h3>

              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-[#EAF1F8]/85 sm:text-base">
                {p02.summary}
              </p>

              {/* Bespoke Visual Detail: Raw-to-Clean Data Transformation Pipeline */}
              <div className="mt-6 grid grid-cols-1 gap-3 rounded-xl border border-[#8AB9DC]/18 bg-[#021524]/90 p-4 font-mono-tech text-[11px] sm:grid-cols-11 sm:items-center">
                {/* Raw Unstructured Fragment */}
                <div className="space-y-1.5 rounded-lg border border-[#FF6C65]/20 bg-[#061B33]/80 p-3 sm:col-span-5">
                  <p className="text-[10px] uppercase tracking-[0.08em] text-[#FF6C65]">
                    {isId ? 'Input Mentah & Terfragmentasi' : 'Raw & Fragmented Input'}
                  </p>
                  <p className="truncate text-[#8AB9DC]">
                    {`{ phone: "(212) 555-0199 ", city: "NY / New York" }`}
                  </p>
                  <p className="truncate text-[#8AB9DC]/75">
                    {`{ rev: "Rp 26.02B*", status: null, dup: true }`}
                  </p>
                </div>

                {/* Transformation Indicator */}
                <div className="flex items-center justify-center py-1 sm:col-span-1">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E8A34A]/40 bg-[#103B50]/70 text-[#E8A34A]">
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </div>

                {/* Normalized & Validated Output */}
                <div className="space-y-1.5 rounded-lg border border-[#5B9BD5]/25 bg-[#002147]/80 p-3 sm:col-span-5">
                  <p className="flex items-center justify-between text-[10px] uppercase tracking-[0.08em] text-[#B8E1F5]">
                    <span>
                      {isId ? 'Skema Bersih & Tervalidasi' : 'Clean & Validated Schema'}
                    </span>
                    <CheckCircle2 className="h-3 w-3 text-[#E8A34A]" aria-hidden="true" />
                  </p>
                  <p className="truncate text-[#EAF1F8]">
                    {`phone: "+1-212-555-0199" · state: "NY"`}
                  </p>
                  <p className="truncate text-[#B8E1F5]">
                    {`deduplicated · missing_handled · schema_ok`}
                  </p>
                </div>
              </div>

              {/* Supporting Capabilities in a 2-column layout for the wider panel */}
              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 border-t border-[#8AB9DC]/12 pt-5 sm:grid-cols-2">
                {p02.capabilities.map((cap, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-[#EAF1F8]/90 sm:text-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono-tech mt-0.5 text-xs text-[#E8A34A]"
                    >
                      —
                    </span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              {/* Relevant Technologies */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-[#8AB9DC]/12 pt-4 font-mono-tech text-xs">
                <div>
                  <span className="text-[#8AB9DC]">
                    {isId ? 'Teknologi: ' : 'Technologies: '}
                  </span>
                  <span className="text-[#B8E1F5]">
                    {p02.technologies.join(' · ')}
                  </span>
                </div>
                <span className="text-[11px] text-[#E8A34A]">
                  <Table2 className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
                  {isId ? 'Siap untuk Analisis Hilir' : 'Ready for Downstream Analysis'}
                </span>
              </div>
            </motion.article>
          </div>

          {/* =============================================================== */}
          {/* DIAGONAL ZIGZAG BRIDGE CALLOUT (02 UPPER-RIGHT -> 03 LOWER-LEFT)*/}
          {/* =============================================================== */}
          <div
            aria-hidden="true"
            className="relative z-10 my-4 flex items-center justify-center lg:my-8"
          >
            <div className="flex items-center gap-3 rounded-full border border-[#8AB9DC]/20 bg-[#021626]/85 px-4 py-1.5 font-mono-tech text-[11px] text-[#8AB9DC] backdrop-blur-md shadow-[0_10px_28px_rgba(2,10,20,0.5)]">
              <span className="h-2 w-2 rounded-full bg-[#E8A34A]" />
              <span>
                {isId
                  ? 'Alur Data Terstruktur: Pemrosesan → Analisis & Pelaporan'
                  : 'Structured Pipeline Flow: Data Processing → Analysis & Reporting'}
              </span>
              <span className="h-2 w-2 rounded-full bg-[#4169E1]" />
            </div>
          </div>

          {/* =============================================================== */}
          {/* ZIGZAG ROW 2: 03 (LOWER-LEFT) & 04 (LOWER-RIGHT PROMINENT PANEL)*/}
          {/* =============================================================== */}
          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
            {/* ------------------------------------------------------------- */}
            {/* CAPABILITY 03: DATA ANALYSIS & REPORTING (LOWER-LEFT)         */}
            {/* Medium-width analytical panel (lg:col-span-5)                 */}
            {/* ------------------------------------------------------------- */}
            <motion.article
              style={{ y: panel3Y }}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -28, y: shouldReduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              onMouseEnter={() => setHoveredIndex('03')}
              onMouseLeave={() => setHoveredIndex(null)}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.52, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl border transition-colors duration-300 lg:col-span-5 ${
                hoveredIndex === '03'
                  ? 'border-[#4169E1]/65 shadow-[0_26px_64px_rgba(2,12,26,0.75)]'
                  : 'border-[#4169E1]/30 shadow-[0_20px_50px_rgba(2,10,22,0.58)]'
              } bg-[linear-gradient(150deg,rgba(0,33,71,0.92)_0%,rgba(30,77,140,0.52)_52%,rgba(6,27,51,0.95)_100%)] p-6 sm:p-8 backdrop-blur-xl`}
            >
              {/* Top Royal Blue & Steel Blue Rim */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#4169E1]/80 via-[#B8E1F5]/55 to-transparent"
              />

              {/* Header Kicker */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 font-mono-tech text-xs">
                  <span className="font-bold text-[#FF6C65]">03</span>
                  <span aria-hidden="true" className="text-[#8AB9DC]/40">
                    ·
                  </span>
                  <span className="uppercase tracking-[0.12em] text-[#B8E1F5]">
                    {isId ? 'Tahap Wawasan & BI' : 'Analytical & BI Stage'}
                  </span>
                </div>
                <BarChart3 className="h-4 w-4 text-[#4169E1]" aria-hidden="true" />
              </div>

              <h3 className="mt-3 text-xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-2xl">
                {p03.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-[#EAF1F8]/82">
                {p03.summary}
              </p>

              {/* Bespoke Visual Detail: Analytical Chart & SQL Query Micro-Composition */}
              <div className="mt-5 space-y-2.5 rounded-xl border border-[#8AB9DC]/16 bg-[#021424]/90 p-3.5 font-mono-tech text-[11px]">
                <div className="flex items-center justify-between text-[10px] text-[#8AB9DC]">
                  <span className="text-[#B8E1F5]">
                    SELECT category, SUM(sales) GROUP BY 1
                  </span>
                  <span className="text-[#FF6C65]">KPI · Power BI</span>
                </div>

                {/* Mini Bar Visual Fragment (from Task 4 Automotive Sales Evidence) */}
                <div className="space-y-1.5 pt-1">
                  <div>
                    <div className="flex justify-between text-[10px] text-[#EAF1F8]">
                      <span>MPV Category</span>
                      <span className="text-[#B8E1F5]">Rp9.2 B</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-[#061B33]">
                      <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-[#4169E1] to-[#5B9BD5]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] text-[#8AB9DC]">
                      <span>SUV Category</span>
                      <span>Rp7.8 B</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-[#061B33]">
                      <div className="h-full w-[72%] rounded-full bg-[#5B9BD5]/65" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Supporting Capabilities */}
              <ul className="mt-5 space-y-2 border-t border-[#8AB9DC]/12 pt-4">
                {p03.capabilities.map((cap, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-[#EAF1F8]/88 sm:text-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono-tech mt-0.5 text-xs text-[#4169E1]"
                    >
                      —
                    </span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              {/* Relevant Technologies */}
              <div className="mt-5 border-t border-[#8AB9DC]/12 pt-4 font-mono-tech text-xs">
                <span className="text-[#8AB9DC]">
                  {isId ? 'Teknologi: ' : 'Technologies: '}
                </span>
                <span className="text-[#B8E1F5]">
                  {p03.technologies.join(' · ')}
                </span>
              </div>
            </motion.article>

            {/* Mobile / Tablet Curved Connector 03 -> 04 */}
            <div
              aria-hidden="true"
              className="flex flex-col items-center justify-center py-1 lg:hidden"
            >
              <svg className="h-14 w-24" viewBox="0 0 96 56" fill="none">
                <path
                  d="M 24 4 C 24 28, 72 28, 72 52"
                  stroke="#FF6C65"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle cx="24" cy="4" r="3.5" fill="#4169E1" />
                <circle cx="72" cy="52" r="3.5" fill="#FF6C65" />
              </svg>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* CAPABILITY 04: AI INTEGRATION & WORKFLOW AUTOMATION           */}
            {/* Wider, visually prominent concluding panel (lg:col-span-7)    */}
            {/* ------------------------------------------------------------- */}
            <motion.article
              style={{ y: panel4Y }}
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 32, y: shouldReduceMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              onMouseEnter={() => setHoveredIndex('04')}
              onMouseLeave={() => setHoveredIndex(null)}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-2xl border transition-colors duration-300 lg:col-span-7 lg:mt-48 xl:mt-52 ${
                hoveredIndex === '04'
                  ? 'border-[#FF6C65]/75 shadow-[0_30px_74px_rgba(2,10,22,0.82),0_0_40px_rgba(255,108,101,0.16)]'
                  : 'border-[#FF6C65]/35 shadow-[0_24px_60px_rgba(2,10,22,0.68)]'
              } bg-[linear-gradient(138deg,rgba(30,77,140,0.52)_0%,rgba(0,33,71,0.9)_48%,rgba(2,31,45,0.96)_100%)] p-6 sm:p-8 lg:p-9 backdrop-blur-xl`}
            >
              {/* Top Signal Coral & Burnt Orange Concluding Highlight Rim */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#FF6C65] via-[#E97845] to-[#4169E1]"
              />

              {/* Header Kicker */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 font-mono-tech text-xs">
                  <span className="font-bold text-[#FF6C65]">04</span>
                  <span aria-hidden="true" className="text-[#8AB9DC]/40">
                    ·
                  </span>
                  <span className="uppercase tracking-[0.12em] text-[#FF6C65]">
                    {isId
                      ? 'Tahap Puncak: Agen AI & Otomasi Alur Kerja'
                      : 'Culminating Stage: AI Agents & Workflow Automation'}
                  </span>
                </div>
                <Workflow className="h-4 w-4 text-[#FF6C65]" aria-hidden="true" />
              </div>

              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-3xl">
                {p04.title}
              </h3>

              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-[#EAF1F8]/85 sm:text-base">
                {p04.summary}
              </p>

              {/* Bespoke Visual Detail: Sequential Prompt & LLM Agent Node Pipeline */}
              <div className="mt-6 rounded-xl border border-[#FF6C65]/22 bg-[#021322]/90 p-4 font-mono-tech text-[11px]">
                <div className="mb-3 flex items-center justify-between text-[10px] text-[#8AB9DC]">
                  <span className="flex items-center gap-1.5 text-[#EAF1F8]">
                    <Sparkles className="h-3 w-3 text-[#FF6C65]" aria-hidden="true" />
                    <span>
                      {isId
                        ? 'Arsitektur Alur Kerja Sekuensial LLM'
                        : 'Sequential LLM Workflow Architecture'}
                    </span>
                  </span>
                  <span className="text-[#FF6C65]">Langflow · Gemini · n8n</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  <div className="rounded-lg border border-[#8AB9DC]/18 bg-[#061B33]/90 p-2.5">
                    <p className="text-[10px] text-[#8AB9DC]">NODE 01</p>
                    <p className="mt-0.5 font-semibold text-[#EAF1F8]">CSV / Data Input</p>
                  </div>
                  <div className="rounded-lg border border-[#5B9BD5]/25 bg-[#002147]/90 p-2.5">
                    <p className="text-[10px] text-[#5B9BD5]">NODE 02</p>
                    <p className="mt-0.5 font-semibold text-[#EAF1F8]">Multi-Stage Prompt</p>
                  </div>
                  <div className="rounded-lg border border-[#E97845]/35 bg-[#123C69]/65 p-2.5">
                    <p className="text-[10px] text-[#E8A34A]">NODE 03</p>
                    <p className="mt-0.5 font-semibold text-[#EAF1F8]">LLM Processing</p>
                  </div>
                  <div className="rounded-lg border border-[#FF6C65]/45 bg-[#021F2D]/95 p-2.5">
                    <p className="text-[10px] text-[#FF6C65]">NODE 04</p>
                    <p className="mt-0.5 font-semibold text-[#EAF1F8]">Structured Output</p>
                  </div>
                </div>
              </div>

              {/* Supporting Capabilities in a 2-column grid */}
              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 border-t border-[#8AB9DC]/12 pt-5 sm:grid-cols-2">
                {p04.capabilities.map((cap, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-[#EAF1F8]/90 sm:text-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono-tech mt-0.5 text-xs text-[#FF6C65]"
                    >
                      —
                    </span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              {/* Relevant Technologies */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-[#8AB9DC]/12 pt-4 font-mono-tech text-xs">
                <div>
                  <span className="text-[#8AB9DC]">
                    {isId ? 'Teknologi: ' : 'Technologies: '}
                  </span>
                  <span className="text-[#B8E1F5]">
                    {p04.technologies.join(' · ')}
                  </span>
                </div>
                <span className="text-[11px] text-[#FF6C65]">
                  {isId ? 'Dibuktikan pada: ' : 'Evidenced in: '}
                  {p04.evidencedIn}
                </span>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
