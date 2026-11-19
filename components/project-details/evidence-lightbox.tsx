'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Maximize2, X, ZoomIn, ZoomOut, ShieldAlert } from 'lucide-react';
import type { EvidenceItem } from '@/lib/portfolio-data';
import { useLocalizedPortfolio } from '@/lib/language-context';

interface ImmersiveEvidenceFrameProps {
  evidence: EvidenceItem;
  priority?: boolean;
  accentVariant?: 'cobalt' | 'amber' | 'coral' | 'burgundy' | 'crimson';
}

export function ImmersiveEvidenceFrame({
  evidence,
  priority = false,
  accentVariant = 'cobalt',
}: ImmersiveEvidenceFrameProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { isId } = useLocalizedPortfolio();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) {
        setLightboxOpen(false);
        setZoomed(false);
      }
    };
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  const glowGradient =
    accentVariant === 'amber'
      ? 'from-[#F2A658]/16 via-[#0A2D4D]/25 to-transparent'
      : accentVariant === 'coral' || accentVariant === 'crimson'
        ? 'from-[#FF6C65]/16 via-[#0A2D4D]/25 to-transparent'
        : 'from-[#4169E1]/20 via-[#002147]/25 to-transparent';

  return (
    <>
      <figure className="group relative overflow-hidden rounded-xl border border-[#B8E1F5]/16 bg-[#051B2E] transition-colors duration-200 hover:border-[#B8E1F5]/35 shadow-[0_18px_46px_rgba(1,9,17,0.5)]">
        {/* Restrained ambient glow behind evidence */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${glowGradient} opacity-80`}
        />

        {/* Top attribution bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#B8E1F5]/12 bg-[#02121F]/90 px-4 py-3 sm:px-6">
          <div>
            <p className="font-mono-tech text-xs text-[#B8E1F5]">
              {evidence.taskOrSourceLabel}
            </p>
            <h3 className="mt-0.5 text-sm font-semibold text-[#F0EFEA] sm:text-base">
              {evidence.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label={
              isId
                ? `Tinjau ${evidence.title} dalam layar penuh`
                : `Inspect ${evidence.title} in fullscreen lightbox`
            }
            className="inline-flex items-center gap-2 rounded-md border border-[#B8E1F5]/20 bg-[#062238] px-3 py-1.5 text-xs font-medium text-[#F0EFEA] transition-colors duration-200 hover:border-[#B8E1F5]/55 hover:bg-[#0A2E4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E1F5] whitespace-nowrap shrink-0"
          >
            <Maximize2 className="h-3.5 w-3.5 text-[#B8E1F5]" aria-hidden="true" />
            <span>{isId ? 'Tinjau Bukti' : 'Inspect Evidence'}</span>
          </button>
        </div>

        {/* Original Screenshot Container — never cropped */}
        <div
          onClick={() => setLightboxOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setLightboxOpen(true);
            }
          }}
          aria-label={
            isId
              ? `Buka tampilan layar penuh ${evidence.title}`
              : `Open fullscreen view of ${evidence.title}`
          }
          className="relative z-10 cursor-zoom-in bg-[#010A12] p-3 sm:p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#B8E1F5]"
        >
          <div className="relative mx-auto overflow-hidden rounded-lg border border-[#B8E1F5]/12 bg-[#020E18]">
            <Image
              src={evidence.src}
              alt={evidence.alt}
              width={1400}
              height={850}
              priority={priority}
              referrerPolicy="no-referrer"
              className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* Layered Caption: Observed Evidence vs. Interpretation */}
        <figcaption className="relative z-10 border-t border-[#B8E1F5]/12 bg-[#02121F]/90 px-4 py-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.08em] text-[#B8E1F5]">
                {isId ? 'Apa yang Ditampilkan Bukti' : 'What the Evidence Shows'}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[#F0EFEA]/90 sm:text-sm">
                {evidence.observedFacts}
              </p>
            </div>
            <div>
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.08em] text-[#9AB0C4]">
                {isId ? 'Interpretasi Analitik' : 'Analytical Interpretation'}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[#A3B8CC] sm:text-sm">
                {evidence.analyticalInterpretation}
              </p>
            </div>
          </div>

          {evidence.scopeNote && (
            <div className="mt-3.5 flex items-start gap-2 border-t border-[#B8E1F5]/10 pt-3 text-xs text-[#E9EEF3]/90">
              <ShieldAlert
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F2A658]"
                aria-hidden="true"
              />
              <span>{evidence.scopeNote}</span>
            </div>
          )}
        </figcaption>
      </figure>

      {/* Accessible Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`lightbox-title-${evidence.id}`}
            className="fixed inset-0 z-50 flex flex-col bg-[#010910]/95 backdrop-blur-md"
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between gap-4 border-b border-[#B8E1F5]/14 bg-[#02121F] px-4 py-3.5 sm:px-8">
              <div className="min-w-0">
                <p className="font-mono-tech text-xs text-[#B8E1F5] truncate">
                  {evidence.taskOrSourceLabel}
                </p>
                <h2
                  id={`lightbox-title-${evidence.id}`}
                  className="text-sm font-bold text-[#F0EFEA] sm:text-base truncate"
                >
                  {evidence.title}
                </h2>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setZoomed((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#B8E1F5]/20 bg-[#062238] px-3 py-2 text-xs font-medium text-[#F0EFEA] transition-colors hover:border-[#B8E1F5]/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E1F5] whitespace-nowrap"
                >
                  {zoomed ? (
                    <>
                      <ZoomOut className="h-4 w-4 text-[#B8E1F5]" aria-hidden="true" />
                      <span>{isId ? 'Sesuaikan Layar' : 'Fit to Screen'}</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="h-4 w-4 text-[#B8E1F5]" aria-hidden="true" />
                      <span>{isId ? 'Ukuran Asli' : 'Actual Scale'}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setLightboxOpen(false);
                    setZoomed(false);
                  }}
                  aria-label={
                    isId
                      ? 'Tutup peninjau bukti layar penuh'
                      : 'Close fullscreen evidence viewer'
                  }
                  className="inline-flex items-center gap-1.5 rounded-sm bg-[#FF6C65] px-3.5 py-2 text-xs font-bold text-[#021F2D] transition-colors hover:bg-[#ff827c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0EFEA] whitespace-nowrap"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                  <span>{isId ? 'Tutup (ESC)' : 'Close (ESC)'}</span>
                </button>
              </div>
            </div>

            {/* Lightbox Image Viewport */}
            <div
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setLightboxOpen(false);
                  setZoomed(false);
                }
              }}
              className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: shouldReduceMotion ? 1 : 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: shouldReduceMotion ? 1 : 0.97, opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
                className={
                  zoomed
                    ? 'min-w-[1100px] max-w-none'
                    : 'w-full max-w-6xl'
                }
              >
                <Image
                  src={evidence.src}
                  alt={evidence.alt}
                  width={1600}
                  height={1000}
                  referrerPolicy="no-referrer"
                  className="h-auto w-full rounded-lg border border-[#B8E1F5]/16 bg-[#020E18] object-contain shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Lightbox Footer Caption */}
            <div className="border-t border-[#B8E1F5]/14 bg-[#02121F] px-4 py-4 sm:px-8">
              <div className="mx-auto max-w-6xl grid grid-cols-1 gap-4 md:grid-cols-2 text-xs sm:text-sm">
                <div>
                  <span className="font-mono-tech text-xs text-[#B8E1F5] uppercase">
                    {isId ? 'Bukti yang Diamati: ' : 'Observed Evidence: '}
                  </span>
                  <span className="text-[#F0EFEA]/90">{evidence.observedFacts}</span>
                </div>
                <div>
                  <span className="font-mono-tech text-xs text-[#9AB0C4] uppercase">
                    {isId ? 'Interpretasi: ' : 'Interpretation: '}
                  </span>
                  <span className="text-[#A3B8CC]">{evidence.analyticalInterpretation}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
