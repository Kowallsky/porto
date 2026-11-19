'use client';

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react';

interface MaskRevealHeadingProps {
  id?: string;
  as?: 'h2' | 'h3';
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

/**
 * Typography mask reveal component for section headings.
 * Slides the heading upward from a clipped overflow mask on scroll into view,
 * while respecting prefers-reduced-motion.
 */
export function MaskRevealHeading({
  id,
  as: Component = 'h2',
  className = '',
  children,
  delay = 0,
}: MaskRevealHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <span className="block overflow-hidden py-0.5">
      <motion.span
        initial={{
          y: shouldReduceMotion ? 0 : '105%',
          opacity: shouldReduceMotion ? 1 : 0,
        }}
        whileInView={{
          y: '0%',
          opacity: 1,
        }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.65,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="block"
      >
        <Component id={id} className={className}>
          {children}
        </Component>
      </motion.span>
    </span>
  );
}

interface SceneTransitionBridgeProps {
  variant:
    | 'hero-to-petrol'
    | 'petrol-to-cobalt'
    | 'cobalt-to-petrol-slate'
    | 'slate-to-interactive-cobalt'
    | 'cobalt-to-warm-coral';
}

/**
 * Scroll-linked atmospheric bridge between consecutive visual scenes.
 * Evolves radial light positions, color temperature, and subtle geometric
 * horizon streaks using GPU-friendly transforms and opacity.
 */
export function SceneTransitionBridge({ variant }: SceneTransitionBridgeProps) {
  const bridgeRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: bridgeRef,
    offset: ['start end', 'end start'],
  });

  const driftX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [-48, 0, 48]
  );
  const driftY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [28, 0, -28]
  );
  const orbScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [1, 1, 1] : [0.85, 1.12, 0.9]
  );
  const orbOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    shouldReduceMotion ? [0.6, 0.6, 0.6] : [0.2, 0.85, 0.25]
  );

  const gradientConfig: Record<
    SceneTransitionBridgeProps['variant'],
    {
      primaryOrb: string;
      secondaryOrb: string;
      alignClass: string;
    }
  > = {
    'hero-to-petrol': {
      primaryOrb: 'from-[#126078]/28 via-[#103B50]/22 to-transparent',
      secondaryOrb: 'from-[#5B9BD5]/16 via-[#2878A8]/12 to-transparent',
      alignClass: 'justify-start pl-[8%]',
    },
    'petrol-to-cobalt': {
      primaryOrb: 'from-[#1E4D8C]/30 via-[#002147]/24 to-transparent',
      secondaryOrb: 'from-[#4169E1]/18 via-[#E97845]/8 to-transparent',
      alignClass: 'justify-end pr-[10%]',
    },
    'cobalt-to-petrol-slate': {
      primaryOrb: 'from-[#103B50]/30 via-[#061B33]/25 to-transparent',
      secondaryOrb: 'from-[#5B9BD5]/16 via-[#126078]/14 to-transparent',
      alignClass: 'justify-center',
    },
    'slate-to-interactive-cobalt': {
      primaryOrb: 'from-[#4169E1]/24 via-[#1E4D8C]/22 to-transparent',
      secondaryOrb: 'from-[#126078]/18 via-[#E8A34A]/8 to-transparent',
      alignClass: 'justify-start pl-[14%]',
    },
    'cobalt-to-warm-coral': {
      primaryOrb: 'from-[#FF6C65]/16 via-[#1E4D8C]/22 to-transparent',
      secondaryOrb: 'from-[#E8A34A]/12 via-[#4169E1]/16 to-transparent',
      alignClass: 'justify-end pr-[12%]',
    },
  };

  const cfg = gradientConfig[variant];

  return (
    <div
      ref={bridgeRef}
      aria-hidden="true"
      className={`pointer-events-none relative -my-12 flex h-28 w-full items-center overflow-visible ${cfg.alignClass}`}
    >
      <motion.div
        style={{
          x: driftX,
          y: driftY,
          scale: orbScale,
          opacity: orbOpacity,
        }}
        className={`h-[340px] w-[620px] rounded-full bg-radial ${cfg.primaryOrb} blur-3xl`}
      />
      <motion.div
        style={{
          x: useTransform(driftX, (v) => -v * 0.7),
          scale: orbScale,
          opacity: orbOpacity,
        }}
        className={`-ml-32 h-[260px] w-[480px] rounded-full bg-radial ${cfg.secondaryOrb} blur-3xl`}
      />
    </div>
  );
}
