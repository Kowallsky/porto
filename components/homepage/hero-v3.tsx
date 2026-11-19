'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { useLocalizedPortfolio } from '@/lib/language-context';
import { OwnerPortrait } from '@/components/homepage/owner-portrait';
import { TypingText } from '@/components/homepage/typing-text';

export function HeroV3() {
  const { identity, isId } = useLocalizedPortfolio();

  return (
    <section
      aria-label="Hero Introduction"
      className="relative min-h-screen w-full overflow-x-clip bg-[#021F2D] pt-[68px] flex flex-col justify-between"
    >
      {/* =================================================================== */}
      {/* V3.0 Cinematic Blue Atmospheric Gradient Layers                     */}
      {/* Top: Ocean Navy (#021F2D) -> Mid: Oxford Blue (#002147)             */}
      {/* Center: Cobalt Blue (#1E4D8C) illumination behind portrait          */}
      {/* Lower: Royal Blue (#4169E1) + Soft Azure (#B8E1F5) Radial Bloom     */}
      {/* Bottom Bridge: Organic transition into Midnight Navy (#061B33)      */}
      {/* =================================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#021F2D] via-[#002147] to-[#061B33]"
      />

      {/* Central Cobalt Blue Illumination Around the Portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[18%] left-1/2 -translate-x-1/2 h-[480px] w-[620px] rounded-full bg-radial from-[#1E4D8C]/45 via-[#123C69]/25 to-transparent blur-3xl"
      />

      {/* Rising Royal Blue & Soft Azure Atmospheric Bloom in Lower Third */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[6%] mx-auto h-[460px] w-[95%] max-w-[1280px] rounded-full bg-radial from-[#B8E1F5]/45 via-[#4169E1]/55 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[14%] mx-auto h-[340px] w-[70%] max-w-[860px] rounded-full bg-radial from-[#4169E1]/65 via-[#002147]/40 to-transparent blur-2xl"
      />

      {/* Organic Bottom Atmospheric Veil Bridging Hero into About's Petrol/Midnight Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-28 h-64 bg-gradient-to-t from-[#08263A] via-[#061B33]/82 to-transparent z-0"
      />

      {/* Main Editorial Composition Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-between px-5 pt-4 pb-6 sm:px-8 sm:pt-6 lg:px-12 lg:pt-6">
        {/* =============================================================== */}
        {/* Upper & Lower Editorial Text Blocks + Central Owner Portrait    */}
        {/* =============================================================== */}
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-6 my-auto">
          {/* Left Column (Upper-Left & Lower-Left Editorial Annotations on Desktop) */}
          <div className="flex flex-col justify-between space-y-8 lg:col-span-4 lg:h-[480px] z-20">
            {/* Upper-Left Block — Professional Identity (Staggered Typing Animation) */}
            <div className="max-w-md">
              <TypingText
                as="p"
                text={identity.heroAnnotations.upperLeft.line1}
                startDelayMs={150}
                durationMs={500}
                className="font-mono-tech text-xl sm:text-2xl md:text-[26px] font-bold uppercase tracking-[0.14em] text-[#F0EFEA]"
              />
              <TypingText
                as="p"
                text={identity.heroAnnotations.upperLeft.line2}
                startDelayMs={500}
                durationMs={600}
                className="mt-1 font-mono-tech text-sm sm:text-base font-medium uppercase tracking-[0.12em] text-[#B8E1F5]"
              />
            </div>

            {/* Lower-Left Block — Working Philosophy (Moved higher + clearer larger font) */}
            <div className="max-w-sm lg:-translate-y-10">
              <TypingText
                as="p"
                text={identity.heroAnnotations.lowerLeft.heading}
                startDelayMs={500}
                durationMs={450}
                className="font-mono-tech text-xs sm:text-sm font-medium uppercase tracking-[0.14em] text-[#B8E1F5]"
              />
              <TypingText
                as="p"
                text={identity.heroAnnotations.lowerLeft.line1}
                startDelayMs={800}
                durationMs={600}
                className="mt-2 font-mono-tech text-sm sm:text-base font-bold leading-snug uppercase tracking-[0.08em] text-[#F0EFEA]"
              />
              <TypingText
                as="p"
                text={identity.heroAnnotations.lowerLeft.body}
                startDelayMs={1250}
                durationMs={650}
                className="mt-2 font-mono-tech text-sm sm:text-[15px] leading-relaxed tracking-[0.03em] text-[#F0EFEA]/90"
              />
            </div>
          </div>

          {/* Center Column — Central Hanging Cocard Portrait Focal Point (Positioned Higher) */}
          <div className="relative mx-auto -mt-2 flex w-full max-w-[360px] flex-col items-center justify-center sm:max-w-[400px] lg:col-span-4 lg:-mt-12 lg:max-w-none z-10">
            <OwnerPortrait dropDelaySec={1.9} />
          </div>

          {/* Right Column (Upper-Right Summary & Lower-Right CTAs on Desktop) */}
          <div className="flex flex-col justify-between space-y-8 lg:col-span-4 lg:h-[480px] lg:items-end lg:text-right z-20">
            {/* Upper-Right Block — Professional Summary (Moved lower + clearer larger font) */}
            <div className="max-w-sm lg:translate-y-10">
              <TypingText
                as="p"
                text={identity.heroAnnotations.upperRight.heading}
                startDelayMs={300}
                durationMs={800}
                showCursor={true}
                keepCursorAfterComplete={false}
                cursorClassName="bg-[#B8E1F5]"
                className="font-mono-tech text-sm sm:text-base font-semibold leading-snug uppercase tracking-[0.1em] text-[#B8E1F5]"
              />
              <TypingText
                as="p"
                text={identity.heroAnnotations.upperRight.body}
                startDelayMs={650}
                durationMs={950}
                showCursor={true}
                keepCursorAfterComplete={false}
                cursorClassName="bg-[#FF6C65]"
                className="mt-2.5 font-mono-tech text-sm sm:text-[15px] leading-relaxed tracking-[0.04em] text-[#F0EFEA]/95"
              />
            </div>

            {/* Lower-Right Block — Calls to Action */}
            <div className="w-full max-w-md -translate-y-2 lg:-translate-y-12">
              <TypingText
                as="p"
                text={isId ? 'NAVIGASI PORTOFOLIO' : 'PORTFOLIO NAVIGATION'}
                startDelayMs={950}
                durationMs={450}
                className="font-mono-tech text-xs sm:text-sm font-medium uppercase tracking-[0.14em] text-[#B8E1F5]"
              />
              <div className="mt-3.5 flex flex-wrap items-center gap-3 lg:justify-end">
                <Link
                  href={identity.primaryCta.href}
                  style={{
                    animation: 'widgetFadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.25s both',
                  }}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-sm bg-[#FF6C65] px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#021F2D] shadow-[0_4px_20px_rgba(255,108,101,0.3)] transition-all duration-300 ease-out hover:bg-[#ff827c] hover:shadow-[0_8px_30px_rgba(255,108,101,0.65)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0EFEA] whitespace-nowrap shrink-0"
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:tracking-[0.11em]">{identity.primaryCta.label}</span>
                  <ArrowDownRight className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:scale-110" aria-hidden="true" />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 bg-white/10 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </Link>

                <Link
                  href={identity.secondaryCta.href}
                  style={{
                    animation: 'widgetFadeSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.4s both',
                  }}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-sm border border-[#B8E1F5]/40 bg-[#F0EFEA] px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#021F2D] shadow-[0_4px_16px_rgba(2,31,45,0.4)] transition-all duration-300 ease-out hover:border-[#B8E1F5] hover:bg-[#B8E1F5] hover:shadow-[0_8px_26px_rgba(184,225,245,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65] whitespace-nowrap shrink-0"
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:tracking-[0.11em]">{identity.secondaryCta.label}</span>
                  <ArrowUpRight className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110" aria-hidden="true" />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 bg-white/15 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =============================================================== */}
        {/* Oversized Bottom Headline Anchored Along the Lower Hero Edge    */}
        {/* Synchronized with the Cocard Drop (1900ms start, 950ms landing) */}
        {/* =============================================================== */}
        <div className="relative z-30 mt-2 pt-0 sm:mt-3 lg:-mt-2 lg:pb-10 flex flex-col items-center">
          <TypingText
            as="h1"
            text="SATYA ISKANDAR"
            startDelayMs={1900}
            durationMs={950}
            showCursor={true}
            keepCursorAfterComplete={false}
            cursorClassName="bg-[#FF6C65]"
            className="w-full text-center font-extrabold uppercase tracking-[-0.035em] text-[#F0EFEA] text-[clamp(2.5rem,7.2vw,7.5rem)] leading-[0.94] drop-shadow-[0_8px_32px_rgba(2,31,45,0.75)] [text-wrap:balance]"
          />
          <TypingText
            as="p"
            text={
              isId
                ? 'KOMPLEKSITAS ADALAH AWAL SAYA. KEJELASAN ADALAH YANG SAYA BANGUN'
                : 'COMPLEXITY IS WHERE I START. CLARITY IS WHAT I BUILD'
            }
            startDelayMs={2900}
            durationMs={950}
            showCursor={true}
            keepCursorAfterComplete={true}
            cursorClassName="bg-[#FF6C65]"
            className="mt-1.5 w-full text-center font-mono-tech text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[0.18em] text-[#FF6C65] drop-shadow-[0_4px_16px_rgba(2,31,45,0.85)]"
          />
        </div>
      </div>
    </section>
  );
}

