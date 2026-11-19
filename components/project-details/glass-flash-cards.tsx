'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { FlashCardItem } from '@/lib/portfolio-data';
import { useLocalizedPortfolio } from '@/lib/language-context';

interface GlassFlashCardDeckProps {
  sectionIndex?: string;
  heading: string;
  subheading?: string;
  cards: FlashCardItem[];
}

export function GlassFlashCardDeck({
  sectionIndex = '02',
  heading,
  subheading,
  cards,
}: GlassFlashCardDeckProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const shouldReduceMotion = useReducedMotion();
  const { isId } = useLocalizedPortfolio();
  const touchStartX = useRef<number | null>(null);

  const totalCards = cards.length;
  const activeCard = cards[activeIndex] ?? cards[0];

  const goToIndex = (nextIndex: number) => {
    if (nextIndex === activeIndex) return;
    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveIndex((nextIndex + totalCards) % totalCards);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalCards);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;
    if (Math.abs(deltaX) > 48) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section
      aria-label={heading}
      onKeyDown={handleKeyDown}
      className="relative"
    >
      {/* Center-focused Cobalt radial ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[75%] rounded-full bg-radial from-[#4169E1]/14 via-[#002147]/15 to-transparent blur-3xl"
      />

      {/* Header Row with Controls & Progress */}
      <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono-tech text-xs uppercase tracking-[0.12em] text-[#FF6C65]">
            {sectionIndex}.{' '}
            {isId
              ? 'Kartu Ringkasan Temuan & Ruang Lingkup'
              : 'Key Findings & Scope Flash Cards'}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#F0EFEA] sm:text-3xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#A3B8CC]">
              {subheading}
            </p>
          )}
        </div>

        {/* Previous / Next Controls & Progress Counter */}
        <div className="flex items-center gap-3 shrink-0">
          <span
            aria-live="polite"
            className="font-mono-tech text-xs text-[#B8E1F5] px-2"
          >
            {isId ? 'Kartu' : 'Card'} {activeIndex + 1} / {totalCards}
          </span>

          <button
            type="button"
            onClick={handlePrev}
            aria-label={isId ? 'Kartu sebelumnya' : 'Previous flash card'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#B8E1F5]/18 bg-[#051B2E]/80 text-[#F0EFEA] transition-all duration-200 hover:border-[#B8E1F5]/45 hover:bg-[#0A2D4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E1F5]"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label={isId ? 'Kartu berikutnya' : 'Next flash card'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#B8E1F5]/18 bg-[#051B2E]/80 text-[#F0EFEA] transition-all duration-200 hover:border-[#B8E1F5]/45 hover:bg-[#0A2D4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E1F5]"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Direct Card Selector Tabs (Accessible Keyboard & Click Navigation) */}
      <div
        role="tablist"
        aria-label={isId ? 'Pilih kartu temuan' : 'Select finding card'}
        className="relative z-10 mt-6 flex flex-wrap gap-2"
      >
        {cards.map((card, index) => {
          const isSelected = index === activeIndex;
          return (
            <button
              key={card.id}
              role="tab"
              type="button"
              aria-selected={isSelected}
              aria-controls={`flash-card-panel-${card.id}`}
              id={`flash-card-tab-${card.id}`}
              onClick={() => goToIndex(index)}
              className={`rounded-md border px-3.5 py-2 text-left text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E1F5] whitespace-nowrap shrink-0 ${
                isSelected
                  ? 'border-[#B8E1F5]/50 bg-[#0A2E4F]/85 text-[#F0EFEA] shadow-[0_6px_18px_rgba(2,18,34,0.45)]'
                  : 'border-[#B8E1F5]/12 bg-[#041625]/70 text-[#9AB0C4] hover:border-[#B8E1F5]/30 hover:text-[#F0EFEA]'
              }`}
            >
              <span
                className={`font-mono-tech mr-1.5 text-[11px] ${
                  isSelected ? 'text-[#FF6C65]' : 'text-[#B8E1F5]/75'
                }`}
              >
                0{index + 1}
              </span>
              <span>{card.title}</span>
            </button>
          );
        })}
      </div>

      {/* Translucent Blue Glass Flash-Card Viewport */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative z-10 mt-4 overflow-hidden rounded-xl border border-[#B8E1F5]/18 bg-gradient-to-br from-[#062238]/90 via-[#04192B]/90 to-[#092C4D]/65 p-6 backdrop-blur-md shadow-[0_24px_56px_rgba(1,9,17,0.55)] sm:p-8 lg:p-10"
      >
        {/* Subtle top highlight line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#B8E1F5]/35 to-transparent"
        />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeCard.id}
            id={`flash-card-panel-${activeCard.id}`}
            role="tabpanel"
            aria-labelledby={`flash-card-tab-${activeCard.id}`}
            custom={direction}
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : direction * 36,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : direction * -36,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start"
          >
            {/* Left Column: Primary Value & Headline */}
            <div className="lg:col-span-5">
              <p className="font-mono-tech text-xs text-[#B8E1F5]">
                {activeCard.category}
              </p>

              {activeCard.primaryValue && (
                <p className="mt-3 font-mono-tech text-3xl font-semibold tracking-tight text-[#F2A658] sm:text-4xl">
                  {activeCard.primaryValue}
                </p>
              )}

              <h3 className="mt-3 text-xl font-bold leading-snug text-[#F0EFEA] sm:text-2xl">
                {activeCard.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#A3B8CC]">
                {activeCard.description}
              </p>
            </div>

            {/* Right Column: Verified Bullet Points & Attribution */}
            <div className="flex flex-col justify-between rounded-lg border border-[#B8E1F5]/12 bg-[#02111D]/85 p-5 sm:p-6 lg:col-span-7">
              <div>
                <p className="font-mono-tech text-xs uppercase tracking-[0.08em] text-[#B8E1F5]">
                  {isId
                    ? 'Rincian Terdokumentasi & Ruang Lingkup'
                    : 'Documented Details & Scope'}
                </p>
                <ul className="mt-3.5 space-y-2.5">
                  {activeCard.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#F0EFEA]/90"
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono-tech mt-0.5 text-xs text-[#FF6C65]"
                      >
                        —
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-[#B8E1F5]/10 pt-3.5 text-xs text-[#9AB0C4]">
                <span className="font-mono-tech">{activeCard.attribution}</span>
                <span className="font-mono-tech text-[11px] text-[#B8E1F5]/70">
                  {isId
                    ? 'Gunakan tombol panah, geser, atau klik tab untuk meninjau kartu'
                    : 'Use arrow keys, swipe, or buttons to inspect cards'}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
