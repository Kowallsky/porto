'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  FileSpreadsheet,
  Terminal,
  Cpu,
  FileText,
  Sparkles,
  MessageSquare,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';
import type { LangflowStageNode } from '@/lib/portfolio-data';
import { useLocalizedPortfolio } from '@/lib/language-context';

interface LangflowWorkflowDiagramProps {
  nodes: LangflowStageNode[];
}

export function LangflowWorkflowDiagram({ nodes }: LangflowWorkflowDiagramProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { isId } = useLocalizedPortfolio();

  const activeNode = nodes[selectedIndex] ?? nodes[0];

  const getNodeIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FileSpreadsheet className="h-4 w-4" aria-hidden="true" />;
      case 1:
        return <Terminal className="h-4 w-4" aria-hidden="true" />;
      case 2:
        return <Cpu className="h-4 w-4" aria-hidden="true" />;
      case 3:
        return <FileText className="h-4 w-4" aria-hidden="true" />;
      case 4:
        return <Sparkles className="h-4 w-4" aria-hidden="true" />;
      default:
        return <MessageSquare className="h-4 w-4" aria-hidden="true" />;
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-[#B8E1F5]/14 bg-[#02101B] p-5 shadow-[0_20px_50px_rgba(1,9,17,0.5)] sm:p-8">
      {/* Subtle upper-left Steel Blue wash inside pipeline canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-radial from-[#2D5B88]/20 via-transparent to-transparent blur-3xl"
      />

      {/* Diagram Header */}
      <div className="relative z-10 flex flex-col justify-between gap-4 border-b border-[#B8E1F5]/12 pb-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono-tech text-xs text-[#FF6C65]">
            {isId
              ? 'Pipeline Langflow Interaktif Rekonstruksi · 6 Node Berurutan'
              : 'Interactive Reconstructed Langflow Pipeline · 6 Sequential Nodes'}
          </p>
          <h3 className="mt-1 text-lg font-bold text-[#F0EFEA] sm:text-xl">
            Read File → Sentiment Prompt → Gemini 3.1 Flash Lite → Summary Prompt → Gemini 2.5 Flash → Chat Output
          </h3>
        </div>
        <span className="font-mono-tech text-xs text-[#9AB0C4] shrink-0">
          {isId
            ? 'Pilih node mana pun untuk meninjau parameter tahap'
            : 'Select any node to inspect stage parameters'}
        </span>
      </div>

      {/* Desktop Horizontal & Mobile Vertical Connected Node Flow */}
      <div
        role="tablist"
        aria-label={
          isId
            ? 'Alur kerja berurutan enam tahap Langflow'
            : 'Six-stage Langflow sequential workflow'
        }
        className="relative z-10 mt-7 grid grid-cols-1 gap-3 lg:grid-cols-6 lg:gap-2.5"
      >
        {nodes.map((node, index) => {
          const isSelected = index === selectedIndex;
          const isHovered = index === hoveredIndex;
          const isConnectorHighlighted =
            isSelected ||
            isHovered ||
            selectedIndex === index + 1 ||
            hoveredIndex === index + 1;

          return (
            <div key={node.id} className="flex flex-col lg:flex-row lg:items-stretch">
              <button
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`langflow-node-detail-${node.id}`}
                id={`langflow-node-tab-${node.id}`}
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                className={`group flex flex-1 flex-col justify-between rounded-lg border p-3.5 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65] ${
                  isSelected
                    ? 'border-[#FF6C65]/80 bg-[#062238] shadow-[0_0_24px_rgba(255,108,101,0.14)]'
                    : 'border-[#B8E1F5]/12 bg-[#041727]/80 hover:border-[#B8E1F5]/35 hover:bg-[#062238]/75'
                }`}
              >
                <div>
                  {/* Top Row: Stage Number + Icon */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`font-mono-tech text-xs font-semibold ${
                        isSelected ? 'text-[#FF6C65]' : 'text-[#9AB0C4]'
                      }`}
                    >
                      {isId ? `Tahap ${node.stageNumber}` : `Stage ${node.stageNumber}`}
                    </span>
                    <span
                      className={`rounded p-1 transition-colors ${
                        isSelected
                          ? 'bg-[#FF6C65]/20 text-[#FF6C65]'
                          : 'bg-[#020E18] text-[#9AB0C4] group-hover:text-[#B8E1F5]'
                      }`}
                    >
                      {getNodeIcon(index)}
                    </span>
                  </div>

                  {/* Node Title */}
                  <h4 className="mt-2.5 text-sm font-bold leading-snug text-[#F0EFEA]">
                    {node.title}
                  </h4>

                  {/* Component Type */}
                  <p className="mt-1 font-mono-tech text-[11px] text-[#9AB0C4]">
                    {node.componentType}
                  </p>

                  {/* Short Role (Always visible so diagram is understandable without clicking) */}
                  <p className="mt-2.5 text-xs leading-relaxed text-[#F0EFEA]/85">
                    {node.shortRole}
                  </p>
                </div>

                {/* Bottom Technical Identifier */}
                <div className="mt-3.5 border-t border-[#B8E1F5]/10 pt-2">
                  <span className="font-mono-tech block truncate text-[11px] text-[#B8E1F5]">
                    {node.badgeText}
                  </span>
                </div>
              </button>

              {/* SVG / Directional Connector to Next Stage */}
              {index < nodes.length - 1 && (
                <>
                  {/* Desktop Horizontal Connector */}
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex items-center justify-center px-0.5"
                  >
                    <ArrowRight
                      className={`h-4 w-4 transition-colors duration-200 ${
                        isConnectorHighlighted
                          ? 'text-[#FF6C65]'
                          : 'text-[#244766]'
                      }`}
                    />
                  </div>

                  {/* Mobile Vertical Connector */}
                  <div
                    aria-hidden="true"
                    className="flex lg:hidden items-center justify-center py-1"
                  >
                    <ArrowDown
                      className={`h-4 w-4 transition-colors duration-200 ${
                        isConnectorHighlighted
                          ? 'text-[#FF6C65]'
                          : 'text-[#244766]'
                      }`}
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Stage Inspector Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          id={`langflow-node-detail-${activeNode.id}`}
          role="tabpanel"
          aria-labelledby={`langflow-node-tab-${activeNode.id}`}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -6 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
          className="relative z-10 mt-6 rounded-lg border border-[#B8E1F5]/14 bg-[#051C2F] p-5 sm:p-6"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs">
                <span className="text-[#FF6C65]">
                  {isId ? `TAHAP ${activeNode.stageNumber}` : `STAGE ${activeNode.stageNumber}`}
                </span>
                <span aria-hidden="true" className="text-[#B8E1F5]/30">
                  ·
                </span>
                <span className="text-[#B8E1F5]">{activeNode.componentType}</span>
                <span aria-hidden="true" className="text-[#B8E1F5]/30">
                  ·
                </span>
                <span className="text-[#9AB0C4]">{activeNode.badgeText}</span>
              </div>

              <h4 className="mt-2 text-lg font-bold text-[#F0EFEA] sm:text-xl">
                {activeNode.title}
              </h4>

              <p className="mt-2.5 text-sm leading-relaxed text-[#F0EFEA]/90">
                {activeNode.detailedDescription}
              </p>
            </div>

            <div className="rounded-md border border-[#B8E1F5]/12 bg-[#020F1A] p-4 lg:col-span-5">
              <p className="font-mono-tech text-xs uppercase tracking-[0.08em] text-[#9AB0C4]">
                {isId
                  ? 'Konfigurasi Komponen yang Diamati'
                  : 'Observed Component Configuration'}
              </p>
              <ul className="mt-3 space-y-2">
                {activeNode.technicalParameters.map((param, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 font-mono-tech text-xs leading-relaxed text-[#F0EFEA]/90"
                  >
                    <span aria-hidden="true" className="text-[#FF6C65]">
                      ›
                    </span>
                    <span>{param}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
