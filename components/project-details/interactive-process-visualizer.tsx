'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ShieldAlert, CheckCircle2, Layers } from 'lucide-react';
import type { ProcessNode } from '@/lib/portfolio-data';
import { useLocalizedPortfolio } from '@/lib/language-context';
import { ImmersiveEvidenceFrame } from './evidence-lightbox';

interface InteractiveProcessVisualizerProps {
  sectionIndex?: string;
  heading: string;
  subheading: string;
  scopeBannerText: string;
  nodes: ProcessNode[];
  defaultSelectedIndex?: number;
}

export function InteractiveProcessVisualizer({
  sectionIndex = '03',
  heading,
  subheading,
  scopeBannerText,
  nodes,
  defaultSelectedIndex = 0,
}: InteractiveProcessVisualizerProps) {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);
  const shouldReduceMotion = useReducedMotion();
  const { isId } = useLocalizedPortfolio();

  const activeNode = nodes[selectedIndex] ?? nodes[0];

  return (
    <section aria-label={heading} className="space-y-8">
      {/* Section Header */}
      <div>
        <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#FF6C65]">
          {sectionIndex}.{' '}
          {isId
            ? 'Penjelajah Proses & Bukti Interaktif'
            : 'Interactive Process & Evidence Explorer'}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl">
          {heading}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#A3B8CC]">
          {subheading}
        </p>
      </div>

      {/* Mandatory Data-Integrity / Scope Separation Callout */}
      <div className="rounded-lg border border-[#F2A658]/30 bg-[#062035]/80 px-5 py-4 text-xs leading-relaxed text-[#E9EEF3] sm:text-sm">
        <div className="flex items-start gap-3">
          <ShieldAlert
            className="mt-0.5 h-4 w-4 shrink-0 text-[#F2A658]"
            aria-hidden="true"
          />
          <p>{scopeBannerText}</p>
        </div>
      </div>

      {/* Connected Interactive Process Node Timeline */}
      <div
        role="tablist"
        aria-label={
          isId
            ? 'Tahapan proses atau alur kerja analitik'
            : 'Process steps or analytical workstreams'
        }
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        {nodes.map((node, index) => {
          const isSelected = index === selectedIndex;
          return (
            <button
              key={node.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`process-panel-${node.id}`}
              id={`process-tab-${node.id}`}
              onClick={() => setSelectedIndex(index)}
              className={`group relative flex flex-col justify-between rounded-xl border p-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E1F5] ${
                isSelected
                  ? 'border-[#B8E1F5]/55 bg-gradient-to-b from-[#0C3458]/80 to-[#041828] shadow-[0_14px_34px_rgba(2,18,34,0.6)]'
                  : 'border-[#B8E1F5]/12 bg-[#031422]/85 hover:border-[#B8E1F5]/30 hover:bg-[#051D31]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-mono-tech text-xs font-semibold ${
                      isSelected ? 'text-[#FF6C65]' : 'text-[#9AB0C4]'
                    }`}
                  >
                    {node.stepNumber}
                  </span>
                  <span className="font-mono-tech text-[11px] text-[#B8E1F5]/80 truncate">
                    {node.toolOrPlatform}
                  </span>
                </div>

                <h3 className="mt-2.5 text-sm font-bold text-[#F0EFEA] sm:text-base">
                  {node.title}
                </h3>
                <p className="mt-1 text-xs text-[#9AB0C4]">{node.subtitle}</p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[#B8E1F5]/10 pt-2.5 text-[11px] font-mono-tech">
                <span className={isSelected ? 'text-[#B8E1F5]' : 'text-[#9AB0C4]'}>
                  {isSelected
                    ? isId
                      ? 'Tampilan Aktif'
                      : 'Active View'
                    : isId
                      ? 'Pilih untuk Meninjau'
                      : 'Select to Inspect'}
                </span>
                <span aria-hidden="true" className="text-[#F0EFEA]/60">
                  →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Progressive Detail Panel + Associated Evidence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          id={`process-panel-${activeNode.id}`}
          role="tabpanel"
          aria-labelledby={`process-tab-${activeNode.id}`}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}
          className="space-y-8 rounded-xl border border-[#B8E1F5]/14 bg-[#031320]/85 p-5 sm:p-8 shadow-[0_18px_48px_rgba(1,9,17,0.5)]"
        >
          {/* Node Summary & Metadata */}
          <div className="flex flex-col justify-between gap-4 border-b border-[#B8E1F5]/10 pb-6 lg:flex-row lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs text-[#FF6C65]">
                <span>{activeNode.stepNumber}</span>
                <span aria-hidden="true" className="text-[#B8E1F5]/30">
                  ·
                </span>
                <span className="text-[#B8E1F5]">{activeNode.toolOrPlatform}</span>
              </div>
              <h3 className="mt-1.5 text-xl font-bold text-[#F0EFEA] sm:text-2xl">
                {activeNode.title}
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#A3B8CC]">
                {activeNode.summary}
              </p>
            </div>
          </div>

          {/* Activities & Verified Findings Split */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Activities Performed */}
            <div className="rounded-lg border border-[#B8E1F5]/12 bg-[#020E18]/90 p-5">
              <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.08em] text-[#B8E1F5]">
                <Layers className="h-3.5 w-3.5 text-[#B8E1F5]" aria-hidden="true" />
                <span>
                  {isId ? 'Aktivitas Terdokumentasi' : 'Documented Activities'}
                </span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {activeNode.activities.map((activity, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-[#F0EFEA]/90 sm:text-sm"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono-tech mt-0.5 text-xs text-[#B8E1F5]"
                    >
                      0{idx + 1}.
                    </span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verified Findings & Scope Boundary */}
            <div className="flex flex-col justify-between rounded-lg border border-[#B8E1F5]/12 bg-[#020E18]/90 p-5">
              <div>
                <div className="flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.08em] text-[#B8E1F5]">
                  <CheckCircle2
                    className="h-3.5 w-3.5 text-[#FF6C65]"
                    aria-hidden="true"
                  />
                  <span>
                    {isId
                      ? 'Temuan Terverifikasi dalam Lingkup Ini'
                      : 'Verified Findings Within This Scope'}
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {activeNode.verifiedFindings.map((finding, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-[#F0EFEA]/90 sm:text-sm"
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono-tech mt-0.5 text-xs text-[#FF6C65]"
                      >
                        —
                      </span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 border-t border-[#B8E1F5]/10 pt-3.5 text-xs leading-relaxed text-[#9AB0C4]">
                <span className="font-mono-tech font-medium text-[#B8E1F5]">
                  {isId ? 'Batas Ruang Lingkup: ' : 'Scope Boundary: '}
                </span>
                {activeNode.scopeBoundary}
              </div>
            </div>
          </div>

          {/* Task-Specific Evidence Frame */}
          {activeNode.evidence && (
            <div className="pt-2">
              <ImmersiveEvidenceFrame
                evidence={activeNode.evidence}
                accentVariant="cobalt"
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
