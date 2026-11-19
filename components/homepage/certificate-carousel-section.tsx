'use client';

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  FileText,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Layers,
} from 'lucide-react';
import { useLocalizedPortfolio } from '@/lib/language-context';
import {
  CERTIFICATES_DATA,
  type CertificateItem,
} from '@/data/certificates-data';

const TOTAL_CERTIFICATES = CERTIFICATES_DATA.length;

/**
 * Returns the shortest signed circular distance from `virtualCenter` to `itemIndex`
 * within the range [-TOTAL/2, +TOTAL/2).
 */
function getCircularOffset(itemIndex: number, virtualCenter: number, total: number): number {
  let diff = itemIndex - virtualCenter;
  diff = ((((diff + total / 2) % total) + total) % total) - total / 2;
  return diff;
}

export function CertificateCarouselSection() {
  const shouldReduceMotion = useReducedMotion();
  const { isId } = useLocalizedPortfolio();

  // Logical active index (0 .. TOTAL_CERTIFICATES - 1)
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Live pointer drag state (in pixels)
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragDeltaX, setDragDeltaX] = useState<number>(0);

  // Viewport tier for responsive 3D spacing ('mobile' | 'tablet' | 'desktop')
  const [viewportTier, setViewportTier] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  // Expanded modal state
  const [expandedCertIndex, setExpandedCertIndex] = useState<number | null>(null);
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Pointer tracking refs
  const pointerStartXRef = useRef<number | null>(null);
  const pointerStartYRef = useRef<number | null>(null);
  const pointerStartTimeRef = useRef<number>(0);
  const hasDraggedRef = useRef<boolean>(false);

  useEffect(() => {
    const updateViewportTier = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setViewportTier('mobile');
      } else if (width < 1024) {
        setViewportTier('tablet');
      } else {
        setViewportTier('desktop');
      }
    };
    updateViewportTier();
    window.addEventListener('resize', updateViewportTier, { passive: true });
    return () => window.removeEventListener('resize', updateViewportTier);
  }, []);

  const wrapIndex = useCallback((idx: number) => {
    return ((idx % TOTAL_CERTIFICATES) + TOTAL_CERTIFICATES) % TOTAL_CERTIFICATES;
  }, []);

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => wrapIndex(prev - 1));
  }, [wrapIndex]);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => wrapIndex(prev + 1));
  }, [wrapIndex]);

  const openExpandedModal = useCallback((certIdx: number) => {
    setExpandedCertIndex(certIdx);
    setActivePageIndex(0);
    setIsZoomed(false);
  }, []);

  const closeExpandedModal = useCallback(() => {
    setExpandedCertIndex(null);
    setIsZoomed(false);
  }, []);

  const goToModalPrevious = useCallback(() => {
    setExpandedCertIndex((prev) => {
      if (prev === null) return null;
      const nextIdx = wrapIndex(prev - 1);
      setActiveIndex(nextIdx);
      setActivePageIndex(0);
      setIsZoomed(false);
      return nextIdx;
    });
  }, [wrapIndex]);

  const goToModalNext = useCallback(() => {
    setExpandedCertIndex((prev) => {
      if (prev === null) return null;
      const nextIdx = wrapIndex(prev + 1);
      setActiveIndex(nextIdx);
      setActivePageIndex(0);
      setIsZoomed(false);
      return nextIdx;
    });
  }, [wrapIndex]);

  // Keyboard navigation for expanded modal & carousel
  useEffect(() => {
    if (expandedCertIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeExpandedModal();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToModalPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToModalNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedCertIndex, closeExpandedModal, goToModalPrevious, goToModalNext]);

  // Lock body scroll while expanded modal is open
  useEffect(() => {
    if (expandedCertIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [expandedCertIndex]);

  // Card step sensitivity in pixels for dragging 1 full certificate slot
  const dragStepPx =
    viewportTier === 'mobile' ? 190 : viewportTier === 'tablet' ? 240 : 280;

  // Pointer drag handlers on the 3D stage
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only primary mouse button or touch/pen
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    pointerStartXRef.current = e.clientX;
    pointerStartYRef.current = e.clientY;
    pointerStartTimeRef.current = performance.now();
    hasDraggedRef.current = false;
    setIsDragging(true);
    setDragDeltaX(0);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || pointerStartXRef.current === null || pointerStartYRef.current === null) {
      return;
    }
    const dx = e.clientX - pointerStartXRef.current;
    const dy = e.clientY - pointerStartYRef.current;

    if (Math.abs(dx) > 6) {
      hasDraggedRef.current = true;
    }

    // If vertical scroll dominates on touch before horizontal drag starts, release drag
    if (!hasDraggedRef.current && Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 12) {
      pointerStartXRef.current = null;
      pointerStartYRef.current = null;
      setIsDragging(false);
      setDragDeltaX(0);
      return;
    }

    setDragDeltaX(dx);
  };

  const finishDrag = useCallback(() => {
    if (!isDragging) return;
    const elapsedMs = Math.max(1, performance.now() - pointerStartTimeRef.current);
    const velocityPxPerMs = dragDeltaX / elapsedMs;

    // Combine displacement and velocity to determine how many certificates to advance
    const projectedDelta = dragDeltaX + velocityPxPerMs * 130;
    let indexShift = -Math.round(projectedDelta / dragStepPx);

    // Ensure a quick flick of > 42px advances at least 1 item
    if (indexShift === 0 && Math.abs(dragDeltaX) > 42) {
      indexShift = dragDeltaX < 0 ? 1 : -1;
    }

    // Clamp single-gesture jump to [-3, 3] for controlled feel
    indexShift = Math.max(-3, Math.min(3, indexShift));

    if (indexShift !== 0) {
      setActiveIndex((prev) => wrapIndex(prev + indexShift));
    }

    pointerStartXRef.current = null;
    pointerStartYRef.current = null;
    setIsDragging(false);
    setDragDeltaX(0);
  }, [isDragging, dragDeltaX, dragStepPx, wrapIndex]);

  const handleCertificateClick = (certIndex: number) => {
    if (hasDraggedRef.current) return;
    if (certIndex === activeIndex) {
      openExpandedModal(certIndex);
    } else {
      setActiveIndex(certIndex);
    }
  };

  // Virtual center index during live dragging
  const virtualCenter = activeIndex - dragDeltaX / dragStepPx;
  const activeCertificate: CertificateItem = CERTIFICATES_DATA[activeIndex];
  const expandedCertificate: CertificateItem | null =
    expandedCertIndex !== null ? CERTIFICATES_DATA[expandedCertIndex] : null;

  /**
   * Computes 3D Coverflow / Character-Selection spatial transform for any continuous offset `d`.
   */
  const computeCardTransform = (d: number) => {
    const absD = Math.abs(d);
    const sign = d === 0 ? 0 : d > 0 ? 1 : -1;

    // Horizontal spacing per tier
    const baseSpread =
      viewportTier === 'mobile' ? 128 : viewportTier === 'tablet' ? 205 : 275;
    const secondarySpread =
      viewportTier === 'mobile' ? 198 : viewportTier === 'tablet' ? 340 : 475;
    const farSpread =
      viewportTier === 'mobile' ? 240 : viewportTier === 'tablet' ? 430 : 620;

    let x = 0;
    if (absD <= 1) {
      x = d * baseSpread;
    } else if (absD <= 2) {
      x = sign * (baseSpread + (absD - 1) * (secondarySpread - baseSpread));
    } else {
      x = sign * (secondarySpread + (absD - 2) * (farSpread - secondarySpread));
    }

    // Scale: center is 1.0, neighbors step down smoothly
    const scale = Math.max(0.48, 1 - absD * 0.165);

    // 3D rotation & vertical lift (character-selection coverflow)
    const rotateY = shouldReduceMotion
      ? 0
      : -sign * Math.min(42, absD * 26);
    const rotateZ = shouldReduceMotion
      ? 0
      : sign * Math.min(4.2, absD * 1.6);
    const y = shouldReduceMotion ? 0 : Math.min(28, absD * 10);

    // Opacity: visible up to |d| <= 3.1 on desktop, |d| <= 2.3 on tablet/mobile
    const maxVisibleOffset =
      viewportTier === 'desktop' ? 3.25 : viewportTier === 'tablet' ? 2.4 : 1.85;

    let opacity = 1;
    if (absD <= 0.25) {
      opacity = 1;
    } else if (absD <= 1) {
      opacity = 0.72 - (absD - 0.25) * 0.12;
    } else if (absD <= 2) {
      opacity = 0.63 - (absD - 1) * 0.25;
    } else if (absD <= maxVisibleOffset) {
      opacity = Math.max(0, 0.38 - (absD - 2) * 0.32);
    } else {
      opacity = 0;
    }

    const zIndex = Math.max(1, Math.round(40 - absD * 10));

    return {
      x,
      y,
      scale,
      rotateY,
      rotateZ,
      opacity,
      zIndex,
      isVisible: opacity > 0.01,
    };
  };

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative scroll-mt-20 pt-20 pb-8 sm:pt-28 sm:pb-12"
    >
      {/* Feathered Deep Blue & Cobalt Atmospheric Stage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-24 inset-x-0 mask-atmosphere-blend bg-[linear-gradient(170deg,rgba(2,31,45,0.92)_0%,rgba(0,33,71,0.9)_45%,rgba(6,27,51,0.95)_100%)]"
      />
      {/* Subtle architectural coordinate grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-atmospheric-grid opacity-55"
      />
      {/* Center stage spotlight behind the active 3D certificate */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[540px] w-[780px] rounded-full bg-radial from-[#4169E1]/24 via-[#1E4D8C]/20 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[460px] rounded-full bg-radial from-[#FF6C65]/14 via-[#E97845]/8 to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono-tech text-xs uppercase tracking-[0.16em] text-[#FF6C65]">
            {isId
              ? '05. SERTIFIKASI & PEMBELAJARAN'
              : '05. CERTIFICATIONS & LEARNING'}
          </p>
          <h2
            id="certifications-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-4xl lg:text-5xl [text-wrap:balance]"
          >
            {isId
              ? 'Bukti Pembelajaran Berkelanjutan.'
              : 'Proof of Continuous Learning.'}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#8AB9DC] sm:text-base">
            {isId
              ? 'Koleksi sertifikasi, pelatihan, dan pengalaman belajar yang mencerminkan pengembangan berkelanjutan saya di bidang analitik data, AI, dan teknologi.'
              : 'A collection of certifications, training, and learning experiences that reflect my continuous development in data analytics, AI, and technology.'}
          </p>
        </div>

        {/* =============================================================== */}
        {/* 3D INFINITE COVERFLOW / CHARACTER-SELECTION STAGE               */}
        {/* =============================================================== */}
        <div className="mt-10 sm:mt-14">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label={
              isId
                ? 'Karusel sertifikasi 3D interaktif'
                : 'Interactive 3D certifications carousel'
            }
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishDrag}
            onPointerCancel={finishDrag}
            onPointerLeave={finishDrag}
            style={{ perspective: '1400px' }}
            className={`relative mx-auto flex h-[340px] sm:h-[420px] lg:h-[470px] w-full select-none items-center justify-center overflow-visible touch-pan-y ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {/* Subtle elliptical stage floor reflection */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 h-10 w-[320px] sm:w-[520px] rounded-full bg-radial from-[#4169E1]/28 via-[#002147]/20 to-transparent blur-xl"
            />

            {CERTIFICATES_DATA.map((cert, idx) => {
              const offset = getCircularOffset(idx, virtualCenter, TOTAL_CERTIFICATES);
              const {
                x,
                y,
                scale,
                rotateY,
                rotateZ,
                opacity,
                zIndex,
                isVisible,
              } = computeCardTransform(offset);

              const isCenter = idx === activeIndex && Math.abs(dragDeltaX) < dragStepPx * 0.45;
              const coverPage = cert.pages[0];

              return (
                <motion.div
                  key={cert.id}
                  initial={false}
                  animate={{
                    x,
                    y,
                    scale,
                    rotateY,
                    rotateZ,
                    opacity,
                  }}
                  transition={
                    isDragging || shouldReduceMotion
                      ? { duration: 0 }
                      : {
                          type: 'spring',
                          stiffness: 250,
                          damping: 28,
                          mass: 0.85,
                        }
                  }
                  style={{
                    zIndex,
                    transformStyle: 'preserve-3d',
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                  className="absolute flex items-center justify-center"
                >
                  <button
                    type="button"
                    onClick={() => handleCertificateClick(idx)}
                    aria-label={
                      isCenter
                        ? isId
                          ? `Perbesar sertifikat ${cert.title}`
                          : `Inspect certificate ${cert.title}`
                        : isId
                          ? `Pilih sertifikat ${cert.index}: ${cert.title}`
                          : `Select certificate ${cert.index}: ${cert.title}`
                    }
                    className={`group relative flex flex-col overflow-hidden rounded-2xl border text-left transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65] ${
                      isCenter
                        ? 'border-[#FF6C65]/80 bg-gradient-to-b from-[#0A2C52] via-[#002147] to-[#021826] shadow-[0_28px_70px_rgba(2,8,18,0.85),0_0_38px_rgba(255,108,101,0.2)]'
                        : 'border-[#8AB9DC]/25 bg-gradient-to-b from-[#061B33]/95 to-[#021624]/95 shadow-[0_18px_45px_rgba(1,8,18,0.7)] hover:border-[#8AB9DC]/50'
                    } w-[285px] sm:w-[430px] lg:w-[520px]`}
                  >
                    {/* Top Index & Organization Bar */}
                    <div className="flex items-center justify-between border-b border-[#8AB9DC]/15 bg-[#021626]/90 px-3.5 py-2 sm:px-4 sm:py-2.5">
                      <div className="flex items-center gap-2 font-mono-tech text-[11px] sm:text-xs">
                        <span
                          className={`font-bold ${
                            isCenter ? 'text-[#FF6C65]' : 'text-[#8AB9DC]'
                          }`}
                        >
                          {cert.index}
                        </span>
                        <span aria-hidden="true" className="text-[#8AB9DC]/35">
                          ·
                        </span>
                        <span className="truncate max-w-[165px] sm:max-w-[260px] text-[#B8E1F5]">
                          {cert.organizationShort}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 font-mono-tech text-[10px] text-[#8AB9DC]">
                        {cert.pages.length > 1 && (
                          <span className="inline-flex items-center gap-1 text-[#E8A34A]">
                            <Layers className="h-3 w-3" aria-hidden="true" />
                            <span>{cert.pages.length}P</span>
                          </span>
                        )}
                        <span
                          className={`inline-flex items-center gap-1 transition-colors ${
                            isCenter
                              ? 'text-[#FF6C65] group-hover:text-[#EAF1F8]'
                              : 'text-[#8AB9DC]/70'
                          }`}
                        >
                          <Maximize2 className="h-3 w-3" aria-hidden="true" />
                          <span className="hidden sm:inline">
                            {isCenter
                              ? isId
                                ? 'Periksa'
                                : 'Inspect'
                              : ''}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Certificate Document Preview Stage (Preserves Original Document Aspect Ratio) */}
                    <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-[#021220] p-2.5 sm:p-3.5">
                      {/* Ambient back-glow behind portrait/landscape document */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-radial from-[#1E4D8C]/25 via-transparent to-transparent"
                      />

                      <div className="relative h-full w-full overflow-hidden rounded-lg bg-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
                        <Image
                          src={coverPage.imageUrl}
                          alt={`${cert.title} — ${cert.organization}`}
                          fill
                          sizes="(max-width: 640px) 285px, (max-width: 1024px) 430px, 520px"
                          referrerPolicy="no-referrer"
                          draggable={false}
                          className={` transition-transform duration-500 ${
                            cert.orientation === 'portrait'
                              ? 'object-contain bg-[#041628] p-1'
                              : 'object-contain bg-white'
                          } ${isCenter ? 'group-hover:scale-[1.02]' : ''}`}
                        />
                      </div>

                      {/* Subtle hover overlay on the active center certificate */}
                      {isCenter && (
                        <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between rounded-lg border border-[#FF6C65]/40 bg-[#021626]/90 px-3 py-1.5 opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100">
                          <span className="font-mono-tech text-[11px] font-medium text-[#EAF1F8]">
                            {isId
                              ? 'Klik untuk memeriksa dokumen asli ukuran penuh'
                              : 'Click to inspect full-size original document'}
                          </span>
                          <Maximize2
                            className="h-3.5 w-3.5 text-[#FF6C65]"
                            aria-hidden="true"
                          />
                        </div>
                      )}
                    </div>

                    {/* Compact Bottom Caption on Card */}
                    <div className="flex items-center justify-between gap-2 border-t border-[#8AB9DC]/12 bg-[#031728]/95 px-3.5 py-2.5 sm:px-4">
                      <p className="truncate text-xs font-bold text-[#EAF1F8] sm:text-sm">
                        {isId ? cert.titleId : cert.title}
                      </p>
                      <span className="shrink-0 font-mono-tech text-[10px] text-[#8AB9DC]">
                        {isId ? cert.dateLabelId.split('·')[0] : cert.dateLabel.split('·')[0]}
                      </span>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* =============================================================== */}
          {/* CAROUSEL NAVIGATION CONTROLS & INFINITE LOOP PROGRESS BAR       */}
          {/* =============================================================== */}
          <div className="mt-2 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3 sm:gap-5">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label={
                  isId ? 'Sertifikat sebelumnya' : 'Previous certificate'
                }
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#8AB9DC]/25 bg-[#021F2D]/85 text-[#EAF1F8] shadow-[0_8px_24px_rgba(2,10,20,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FF6C65] hover:bg-[#123C69]/75 hover:text-[#FF6C65] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65]"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              {/* Current Certificate Index & Interactive Step Nodes */}
              <div className="flex items-center gap-3 rounded-xl border border-[#8AB9DC]/20 bg-[#021626]/85 px-4 py-2.5 backdrop-blur-md">
                <span className="font-mono-tech text-xs font-bold text-[#FF6C65]">
                  {activeCertificate.index}
                </span>
                <span
                  aria-hidden="true"
                  className="font-mono-tech text-xs text-[#8AB9DC]/50"
                >
                  /
                </span>
                <span className="font-mono-tech text-xs text-[#B8E1F5]">
                  {String(TOTAL_CERTIFICATES).padStart(2, '0')}
                </span>

                <div
                  role="tablist"
                  aria-label={
                    isId ? 'Pilih nomor sertifikat' : 'Select certificate index'
                  }
                  className="ml-2 hidden sm:flex items-center gap-1.5"
                >
                  {CERTIFICATES_DATA.map((item, idx) => {
                    const isCurrent = idx === activeIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        role="tab"
                        aria-selected={isCurrent}
                        aria-label={`${item.index} — ${item.title}`}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65] ${
                          isCurrent
                            ? 'w-6 bg-[#FF6C65]'
                            : 'w-2 bg-[#8AB9DC]/30 hover:bg-[#8AB9DC]/70'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={goToNext}
                aria-label={
                  isId ? 'Sertifikat berikutnya' : 'Next certificate'
                }
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#8AB9DC]/25 bg-[#021F2D]/85 text-[#EAF1F8] shadow-[0_8px_24px_rgba(2,10,20,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FF6C65] hover:bg-[#123C69]/75 hover:text-[#FF6C65] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65]"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* =============================================================== */}
          {/* COMPACT ACTIVE CERTIFICATE INFORMATION PANEL                    */}
          {/* =============================================================== */}
          <div className="mx-auto mt-3 max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCertificate.id}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : -8,
                }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
                className="relative overflow-hidden rounded-2xl border border-[#8AB9DC]/22 bg-gradient-to-br from-[#002147]/80 via-[#061B33]/90 to-[#021F2D]/90 p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(2,10,20,0.6)]"
              >
                {/* Top subtle Signal Coral & Royal Blue accent line */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#4169E1]/50 via-[#FF6C65]/70 to-[#E8A34A]/50"
                />

                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                  <div className="space-y-2.5 lg:max-w-2xl">
                    {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
                    <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs text-[#8AB9DC]">
                      <span className="font-bold text-[#FF6C65]">
                        {activeCertificate.index} / {String(TOTAL_CERTIFICATES).padStart(2, '0')}
                      </span>
                      <span aria-hidden="true" className="text-[#8AB9DC]/35">
                        ·
                      </span>
                      <span className="text-[#B8E1F5]">
                        {activeCertificate.organization}
                      </span>
                      <span aria-hidden="true" className="text-[#8AB9DC]/35">
                        ·
                      </span>
                      <span>
                        {isId
                          ? activeCertificate.dateLabelId
                          : activeCertificate.dateLabel}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-[#EAF1F8] sm:text-2xl">
                      {isId ? activeCertificate.titleId : activeCertificate.title}
                    </h3>

                    <p className="font-mono-tech text-xs text-[#E8A34A]">
                      {isId
                        ? activeCertificate.secondaryMetaId
                        : activeCertificate.secondaryMeta}
                      {' · '}
                      <span className="text-[#8AB9DC]">
                        {activeCertificate.credentialRef}
                      </span>
                    </p>

                    <p className="pt-1 text-sm leading-relaxed text-[#EAF1F8]/80">
                      {isId
                        ? activeCertificate.descriptionId
                        : activeCertificate.description}
                    </p>
                  </div>

                  {/* Primary Inspection Actions */}
                  <div className="flex shrink-0 flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => openExpandedModal(activeIndex)}
                      className="inline-flex items-center gap-2 rounded-sm bg-[#FF6C65] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-[#021F2D] shadow-[0_4px_20px_rgba(255,108,101,0.35)] transition-all duration-200 hover:bg-[#ff827c] hover:shadow-[0_6px_28px_rgba(255,108,101,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAF1F8]"
                    >
                      <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>
                        {isId ? 'Periksa Dokumen' : 'Inspect Document'}
                      </span>
                    </button>

                    <a
                      href={activeCertificate.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm border border-[#8AB9DC]/30 bg-[#021F2D]/80 px-4 py-2.5 font-mono-tech text-xs font-medium text-[#EAF1F8] transition-colors duration-200 hover:border-[#B8E1F5] hover:bg-[#123C69]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E1F5]"
                    >
                      <FileText className="h-3.5 w-3.5 text-[#B8E1F5]" aria-hidden="true" />
                      <span>{isId ? 'Buka PDF Asli' : 'Open Original PDF'}</span>
                      <ExternalLink className="h-3 w-3 text-[#8AB9DC]" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* EXPANDED CERTIFICATE DOCUMENT INSPECTION MODAL                      */}
      {/* =================================================================== */}
      <AnimatePresence>
        {expandedCertificate && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="expanded-certificate-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
            onClick={closeExpandedModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#010C18]/88 p-3 sm:p-6 lg:p-8 backdrop-blur-xl"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.94,
                y: shouldReduceMotion ? 0 : 14,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.96,
                y: shouldReduceMotion ? 0 : 10,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.26,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-[#8AB9DC]/30 bg-gradient-to-b from-[#061B33] via-[#031526] to-[#02101D] shadow-[0_32px_90px_rgba(0,0,0,0.85)]"
            >
              {/* Modal Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#8AB9DC]/18 bg-[#021626]/95 px-4 py-3.5 sm:px-6">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs text-[#8AB9DC]">
                    <span className="font-bold text-[#FF6C65]">
                      {expandedCertificate.index} / {String(TOTAL_CERTIFICATES).padStart(2, '0')}
                    </span>
                    <span aria-hidden="true" className="text-[#8AB9DC]/40">
                      ·
                    </span>
                    <span className="truncate text-[#B8E1F5]">
                      {expandedCertificate.organization}
                    </span>
                    <span aria-hidden="true" className="text-[#8AB9DC]/40">
                      ·
                    </span>
                    <span>
                      {isId
                        ? expandedCertificate.dateLabelId
                        : expandedCertificate.dateLabel}
                    </span>
                  </div>
                  <h3
                    id="expanded-certificate-title"
                    className="mt-1 truncate text-base font-bold text-[#EAF1F8] sm:text-lg"
                  >
                    {isId ? expandedCertificate.titleId : expandedCertificate.title}
                  </h3>
                </div>

                {/* Header Controls: Multi-page Switcher, Zoom, Original PDF, Close */}
                <div className="flex flex-wrap items-center gap-2">
                  {expandedCertificate.pages.length > 1 && (
                    <div className="flex items-center gap-1 rounded-lg border border-[#8AB9DC]/25 bg-[#061B33] p-1">
                      {expandedCertificate.pages.map((page, pIdx) => {
                        const isPageActive = pIdx === activePageIndex;
                        return (
                          <button
                            key={page.pageNumber}
                            type="button"
                            onClick={() => setActivePageIndex(pIdx)}
                            className={`rounded-md px-2.5 py-1 font-mono-tech text-xs transition-colors ${
                              isPageActive
                                ? 'bg-[#FF6C65] font-bold text-[#021F2D]'
                                : 'text-[#8AB9DC] hover:text-[#EAF1F8]'
                            }`}
                          >
                            {isId ? `Hal ${page.pageNumber}` : `Page ${page.pageNumber}`}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setIsZoomed((z) => !z)}
                    aria-label={
                      isZoomed
                        ? isId
                          ? 'Sesuaikan ukuran layar'
                          : 'Fit to screen'
                        : isId
                          ? 'Perbesar ukuran dokumen'
                          : 'Zoom document'
                    }
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#8AB9DC]/25 bg-[#061B33] px-3 font-mono-tech text-xs text-[#EAF1F8] transition-colors hover:border-[#B8E1F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65]"
                  >
                    {isZoomed ? (
                      <>
                        <ZoomOut className="h-3.5 w-3.5 text-[#FF6C65]" aria-hidden="true" />
                        <span className="hidden sm:inline">
                          {isId ? 'Sesuaikan Layar' : 'Fit View'}
                        </span>
                      </>
                    ) : (
                      <>
                        <ZoomIn className="h-3.5 w-3.5 text-[#B8E1F5]" aria-hidden="true" />
                        <span className="hidden sm:inline">
                          {isId ? 'Perbesar Detail' : 'Zoom Detail'}
                        </span>
                      </>
                    )}
                  </button>

                  <a
                    href={expandedCertificate.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#8AB9DC]/25 bg-[#061B33] px-3 font-mono-tech text-xs text-[#B8E1F5] transition-colors hover:border-[#B8E1F5] hover:text-[#EAF1F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65]"
                  >
                    <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="hidden sm:inline">PDF</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={closeExpandedModal}
                    aria-label={isId ? 'Tutup tampilan sertifikat' : 'Close certificate view'}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#8AB9DC]/25 bg-[#061B33] text-[#EAF1F8] transition-colors hover:border-[#FF6C65] hover:text-[#FF6C65] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65]"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Modal Document Inspection Viewport */}
              <div className="relative flex-1 overflow-auto bg-[#010B15] p-4 sm:p-6">
                {(() => {
                  const currentPage =
                    expandedCertificate.pages[activePageIndex] ||
                    expandedCertificate.pages[0];

                  return (
                    <div className="mx-auto flex min-h-full items-center justify-center">
                      <div
                        style={{
                          aspectRatio: `${currentPage.width} / ${currentPage.height}`,
                        }}
                        className={`relative overflow-hidden rounded-lg bg-white shadow-[0_24px_60px_rgba(0,0,0,0.75)] transition-all duration-300 ${
                          isZoomed
                            ? 'w-[1150px] max-w-none'
                            : expandedCertificate.orientation === 'portrait'
                              ? 'max-h-[70vh] w-auto max-w-full'
                              : 'max-h-[70vh] w-full max-w-4xl'
                        }`}
                      >
                        <Image
                          src={currentPage.imageUrl}
                          alt={`${expandedCertificate.title} — ${
                            isId ? currentPage.labelId : currentPage.labelEn
                          }`}
                          width={currentPage.width}
                          height={currentPage.height}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-contain"
                          priority
                        />
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Modal Footer Navigation (Infinite Previous / Next + Credential Details) */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#8AB9DC]/18 bg-[#021626]/95 px-4 py-3 sm:px-6">
                <button
                  type="button"
                  onClick={goToModalPrevious}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#8AB9DC]/25 bg-[#061B33] px-3.5 py-2 font-mono-tech text-xs font-medium text-[#EAF1F8] transition-colors hover:border-[#FF6C65] hover:text-[#FF6C65] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65]"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  <span>{isId ? 'Sebelumnya' : 'Previous'}</span>
                </button>

                <div className="text-center font-mono-tech text-xs text-[#8AB9DC]">
                  <span className="text-[#B8E1F5]">
                    {expandedCertificate.credentialRef}
                  </span>
                  {expandedCertificate.pages.length > 1 && (
                    <span>
                      {' · '}
                      {isId
                        ? expandedCertificate.pages[activePageIndex]?.labelId
                        : expandedCertificate.pages[activePageIndex]?.labelEn}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={goToModalNext}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#8AB9DC]/25 bg-[#061B33] px-3.5 py-2 font-mono-tech text-xs font-medium text-[#EAF1F8] transition-colors hover:border-[#FF6C65] hover:text-[#FF6C65] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65]"
                >
                  <span>{isId ? 'Berikutnya' : 'Next'}</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
