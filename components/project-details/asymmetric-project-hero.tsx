'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowDown } from 'lucide-react';
import type { EvidenceItem } from '@/lib/portfolio-data';
import { useLocalizedPortfolio } from '@/lib/language-context';
import { ImmersiveEvidenceFrame } from './evidence-lightbox';

interface AsymmetricProjectHeroProps {
  projectIndex: string;
  contextLabel: string;
  title: string;
  shortSummary: string;
  tools: string[];
  metadataItems: { label: string; value: string; note?: string }[];
  heroEvidence?: EvidenceItem;
  customVisualSlot?: React.ReactNode;
  primarySectionAnchor?: string;
  primarySectionLabel?: string;
}

export function AsymmetricProjectHero({
  projectIndex,
  contextLabel,
  title,
  shortSummary,
  tools,
  metadataItems,
  heroEvidence,
  customVisualSlot,
  primarySectionAnchor = '#process-section',
  primarySectionLabel = 'Explore Workflow & Evidence',
}: AsymmetricProjectHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const { isId } = useLocalizedPortfolio();

  return (
    <section className="relative overflow-x-clip bg-gradient-to-b from-[#021F2D] via-[#002147] to-[#061B33] pt-[100px] pb-16 sm:pt-[116px] sm:pb-20">
      {/* Side-oriented Cobalt focal glow framing hero evidence */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 right-0 h-[560px] w-[560px] rounded-full bg-radial from-[#4169E1]/24 via-[#1E4D8C]/26 to-transparent blur-3xl"
      />
      {/* Restrained lower-left warm Coral ambient edge glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 left-1/4 h-[380px] w-[440px] rounded-full bg-radial from-[#FF6C65]/9 via-[#2878A8]/12 to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Back to Selected Work Link */}
        <div className="mb-8">
          <Link
            href="/#selected-work"
            className="inline-flex items-center gap-2 font-mono-tech text-xs text-[#9AB0C4] transition-colors duration-200 hover:text-[#B8E1F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E1F5]"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-[#FF6C65]" aria-hidden="true" />
            <span>
              {isId ? 'Kembali ke Proyek Pilihan' : 'Back to Selected Work'}
            </span>
          </Link>
        </div>

        {/* Asymmetric Two-Column Hero Split */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Editorial Narrative & Context (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
            className="lg:col-span-5 lg:pr-4"
          >
            <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs text-[#FF6C65]">
              <span>
                {isId ? `Studi Kasus ${projectIndex}` : `Case Study ${projectIndex}`}
              </span>
              <span aria-hidden="true" className="text-[#B8E1F5]/30">
                ·
              </span>
              <span className="text-[#B8E1F5]">{contextLabel}</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#F0EFEA] sm:text-4xl lg:text-5xl leading-[1.08] [text-wrap:balance]">
              {title}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-[#A3B8CC]">
              {shortSummary}
            </p>

            {/* Unboxed Metadata Tool Line (Zero-Pill Discipline) */}
            <div className="mt-6 border-t border-[#B8E1F5]/12 pt-4">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.08em] text-[#9AB0C4]">
                {isId
                  ? 'Tumpukan Teknologi & Perangkat yang Digunakan'
                  : 'Demonstrated Stack & Tools'}
              </p>
              <p className="mt-1.5 font-mono-tech text-xs leading-relaxed text-[#F0EFEA]/90">
                {tools.join(' · ')}
              </p>
            </div>

            {/* Action Anchor */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={primarySectionAnchor}
                className="inline-flex items-center gap-2 rounded-sm bg-[#FF6C65] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-[#021F2D] shadow-[0_4px_20px_rgba(255,108,101,0.3)] transition-all duration-200 hover:bg-[#ff827c] hover:shadow-[0_6px_26px_rgba(255,108,101,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0EFEA] whitespace-nowrap shrink-0"
              >
                <span>{primarySectionLabel}</span>
                <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Offset Visual Focal Anchor with Gentle Floating Motion (7 cols) */}
          <motion.div
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : 28,
              y: shouldReduceMotion ? 0 : 20,
              rotate: shouldReduceMotion ? 0 : 1.4,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-7 lg:mt-4"
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? { y: 0, rotate: 0 }
                  : { y: [0, -6, 0], rotate: [0, 0.45, 0, -0.45, 0] }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 6.4, repeat: Infinity, ease: 'easeInOut' }
              }
            >
              {heroEvidence ? (
                <ImmersiveEvidenceFrame
                  evidence={heroEvidence}
                  priority={true}
                  accentVariant="cobalt"
                />
              ) : (
                customVisualSlot
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Full-Width Translucent Blue Glass Metadata Strip Below Hero Split */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metadataItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#B8E1F5]/16 bg-[#062238]/75 p-5 backdrop-blur-md shadow-[0_12px_32px_rgba(1,9,17,0.45)]"
            >
              <p className="font-mono-tech text-xs text-[#B8E1F5]">
                {item.label}
              </p>
              <p className="mt-2 font-mono-tech text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl">
                {item.value}
              </p>
              {item.note && (
                <p className="mt-1.5 text-xs leading-relaxed text-[#9AB0C4]">
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
