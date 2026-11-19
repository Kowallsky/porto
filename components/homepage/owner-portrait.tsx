'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const OWNER_PORTRAIT_PATH = '/assets/portrait/owner-portrait.jpg';
const BACKUP_PORTRAIT_PATH = '/assets/aistudio/1000390614.jpg_67d02c0b.jpeg';

interface OwnerPortraitProps {
  dropDelaySec?: number;
  dropDurationSec?: number;
}

export function OwnerPortrait({
  dropDelaySec = 1.9,
}: OwnerPortraitProps) {
  const [portraitSrc, setPortraitSrc] = useState<string>(OWNER_PORTRAIT_PATH);
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1, y: 0, rotate: 0 }
          : { opacity: 0, y: -520, rotate: -5.5 }
      }
      animate={
        shouldReduceMotion
          ? { opacity: 1, y: 0, rotate: 0 }
          : {
              opacity: 1,
              y: 0,
              rotate: [
                -5.5,
                4.2,
                -2.8,
                1.9,
                -1.1,
                0.6,
                -0.3,
                0.2,
                -0.2,
                0.15,
                -0.1,
                0,
              ],
            }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              opacity: {
                delay: dropDelaySec,
                duration: 0.25,
                ease: 'easeOut',
              },
              y: {
                delay: dropDelaySec,
                type: 'spring',
                stiffness: 105,
                damping: 12.5,
                mass: 1.1,
              },
              rotate: {
                delay: dropDelaySec,
                duration: 4.8,
                times: [
                  0, 0.18, 0.34, 0.48, 0.6, 0.72, 0.81, 0.88, 0.93, 0.96, 0.98,
                  1,
                ],
                ease: 'easeInOut',
              },
            }
      }
      style={{ transformOrigin: '50% -260px' }}
      className="relative flex w-full max-w-[360px] flex-col items-center"
    >
      {/* =================================================================== */}
      {/* Seamless Lanyard / Strap & Metallic Clasp Assembly                  */}
      {/* Seamlessly integrates with the midnight navy & royal blue atmosphere*/}
      {/* Extends upward beyond the top of the hero viewport                  */}
      {/* =================================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
      >
        {/* Seamless Lanyard Ribbon with Soft Azure glow & Royal Blue woven core */}
        <div className="relative h-[520px] w-4 overflow-hidden rounded-t-sm border-x border-[#4169E1]/30 bg-gradient-to-b from-[#011622] via-[#021F2D] to-[#002147] shadow-[0_8px_24px_rgba(2,31,45,0.95)]">
          {/* Central Soft Azure / Royal Blue woven reflective cord accent */}
          <div className="mx-auto h-full w-[2px] bg-gradient-to-b from-[#4169E1]/40 via-[#B8E1F5]/70 to-[#4169E1]/80 shadow-[0_0_8px_rgba(184,225,245,0.35)]" />
          {/* Subtle micro-stitch texture */}
          <div className="absolute inset-y-0 left-[2px] w-[1px] border-l border-dashed border-[#B8E1F5]/25 opacity-70" />
          <div className="absolute inset-y-0 right-[2px] w-[1px] border-r border-dashed border-[#B8E1F5]/25 opacity-70" />
        </div>

        {/* Lanyard Crimp / Metal Clamp */}
        <div className="h-3 w-5 rounded-b-sm border border-[#B8E1F5]/40 bg-gradient-to-b from-[#002147] via-[#072B40] to-[#021F2D] shadow-md" />

        {/* Metallic Swivel Ring with Soft Azure rim highlight */}
        <div className="-mt-0.5 h-3 w-3.5 rounded-full border-2 border-[#B8E1F5]/65 bg-[#021F2D]/90 shadow-[0_0_6px_rgba(184,225,245,0.3)]" />

        {/* Brushed Titanium Lobster Clasp / Badge Clip holding the card slot */}
        <div className="-mt-1 -mb-3.5 flex flex-col items-center">
          <div className="h-5 w-2.5 rounded-sm border border-[#B8E1F5]/60 bg-gradient-to-b from-[#B8E1F5]/50 via-[#4169E1]/40 to-[#021F2D] shadow-[0_4px_12px_rgba(0,0,0,0.7)]" />
          <div className="h-2 w-1.5 rounded-b-sm border border-[#B8E1F5]/50 bg-[#021F2D]" />
        </div>
      </div>

      {/* =================================================================== */}
      {/* Premium Vertical ID Card Holder (Cocard Frame)                      */}
      {/* =================================================================== */}
      <div className="relative flex w-full max-w-[360px] flex-col rounded-2xl border border-[#B8E1F5]/30 bg-gradient-to-b from-[#072B40]/90 via-[#002147]/95 to-[#021F2D]/95 p-2.5 pt-6 shadow-[0_28px_70px_rgba(2,18,28,0.85),0_0_80px_rgba(65,105,225,0.42)] backdrop-blur-md">
        {/* Subtle outer specular card rim highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
        />

        {/* Top Center ID Card Punch Slot Hole */}
        <div
          aria-hidden="true"
          className="mx-auto mb-2.5 h-2 w-12 rounded-full border border-[#B8E1F5]/30 bg-[#01131C] shadow-inner"
        />

        {/* Inner Portrait Window — Preserves Photograph & Facial Identity 100% */}
        <div className="relative flex aspect-[3/4] w-full items-end justify-center overflow-hidden rounded-xl border border-[#B8E1F5]/20 bg-gradient-to-b from-[#021F2D]/90 via-[#002147]/95 to-[#4169E1]/75">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portraitSrc}
            alt="Kowallskyy — Data Analyst + AI Automation Engineer"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              if (portraitSrc !== BACKUP_PORTRAIT_PATH) {
                setPortraitSrc(BACKUP_PORTRAIT_PATH);
              }
            }}
            className={`h-full w-full object-cover object-[center_15%] transition-opacity duration-500 contrast-[1.02] brightness-[0.98] ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Subtle Diagonal ID Card Holder Gloss Reflection */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.09]"
          />

          {/* Subtle Atmospheric Blue Gradient Harmonization at the bottom edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#002147]/90 via-[#002147]/30 to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
