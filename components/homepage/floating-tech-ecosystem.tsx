'use client';

import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useReducedMotion,
} from 'motion/react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocalizedPortfolio } from '@/lib/language-context';
import {
  Code2,
  Database,
  FileSpreadsheet,
  BarChart3,
  Cpu,
  Globe,
  Bot,
  Workflow,
  Sparkles,
  Terminal,
  Layers,
  Braces,
  Server,
  SearchCode,
  Compass,
  RotateCcw,
  GripHorizontal,
} from 'lucide-react';

export interface TechTileConfig {
  id: string;
  name: string;
  category: 'Data Analytics' | 'Web Scraping' | 'AI & Automation' | 'Development';
  monogram: string;
  badgeBg: string;
  badgeText: string;
  glowColor: string;
  borderAccent: string;
  icon: React.ComponentType<{ className?: string }>;
  /** Desktop percentage position within the interactive stage */
  xPct: number;
  yPct: number;
  /** Mobile percentage position within the interactive stage */
  mobileXPct: number;
  mobileYPct: number;
  /** Depth layer controls size, blur, and z-index */
  depth: 'foreground' | 'midground' | 'background';
  /** Initial resting tilt in degrees */
  rotate: number;
  /** Independent floating oscillation parameters */
  floatY: number;
  floatX: number;
  floatRotate: number;
  floatScale: number;
  duration: number;
  delay: number;
}

const TECH_ECOSYSTEM_TILES: TechTileConfig[] = [
  // ================= DATA ANALYTICS =================
  {
    id: 'python',
    name: 'Python',
    category: 'Data Analytics',
    monogram: 'PY',
    badgeBg: 'from-[#3776AB] to-[#FFD43B]',
    badgeText: 'text-[#061B33]',
    glowColor: 'rgba(55, 118, 171, 0.45)',
    borderAccent: 'border-[#5B9BD5]/40',
    icon: Terminal,
    xPct: 9,
    yPct: 15,
    mobileXPct: 8,
    mobileYPct: 8,
    depth: 'foreground',
    rotate: -8,
    floatY: -13,
    floatX: 7,
    floatRotate: 4,
    floatScale: 1.03,
    duration: 5.4,
    delay: 0.1,
  },
  {
    id: 'pandas',
    name: 'Pandas',
    category: 'Data Analytics',
    monogram: 'pd',
    badgeBg: 'from-[#2A1B6E] via-[#4169E1] to-[#FFCA00]',
    badgeText: 'text-[#EAF1F8]',
    glowColor: 'rgba(65, 105, 225, 0.4)',
    borderAccent: 'border-[#8AB9DC]/35',
    icon: Layers,
    xPct: 24,
    yPct: 8,
    mobileXPct: 42,
    mobileYPct: 5,
    depth: 'midground',
    rotate: 6,
    floatY: 11,
    floatX: -6,
    floatRotate: -3.5,
    floatScale: 1.025,
    duration: 6.2,
    delay: 0.7,
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    category: 'Data Analytics',
    monogram: 'XLS',
    badgeBg: 'from-[#107C41] to-[#21A366]',
    badgeText: 'text-[#EAF1F8]',
    glowColor: 'rgba(33, 163, 102, 0.38)',
    borderAccent: 'border-[#21A366]/40',
    icon: FileSpreadsheet,
    xPct: 6,
    yPct: 46,
    mobileXPct: 6,
    mobileYPct: 26,
    depth: 'midground',
    rotate: -11,
    floatY: -10,
    floatX: 8,
    floatRotate: 5,
    floatScale: 1.02,
    duration: 5.9,
    delay: 1.2,
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Data Analytics',
    monogram: 'SQL',
    badgeBg: 'from-[#00758F] to-[#38BDF8]',
    badgeText: 'text-[#021F2D]',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    borderAccent: 'border-[#B8E1F5]/40',
    icon: Database,
    xPct: 19,
    yPct: 33,
    mobileXPct: 72,
    mobileYPct: 9,
    depth: 'foreground',
    rotate: 7,
    floatY: 14,
    floatX: -7,
    floatRotate: -4,
    floatScale: 1.035,
    duration: 4.8,
    delay: 0.4,
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    category: 'Data Analytics',
    monogram: 'PBI',
    badgeBg: 'from-[#F2C811] to-[#E8A34A]',
    badgeText: 'text-[#061B33]',
    glowColor: 'rgba(242, 200, 17, 0.42)',
    borderAccent: 'border-[#E8A34A]/45',
    icon: BarChart3,
    xPct: 12,
    yPct: 74,
    mobileXPct: 10,
    mobileYPct: 72,
    depth: 'foreground',
    rotate: 9,
    floatY: -12,
    floatX: 6,
    floatRotate: -4.5,
    floatScale: 1.03,
    duration: 5.1,
    delay: 0.9,
  },
  {
    id: 'bigquery',
    name: 'Google BigQuery',
    category: 'Data Analytics',
    monogram: 'BQ',
    badgeBg: 'from-[#4285F4] to-[#B8E1F5]',
    badgeText: 'text-[#061B33]',
    glowColor: 'rgba(66, 133, 244, 0.42)',
    borderAccent: 'border-[#5B9BD5]/40',
    icon: SearchCode,
    xPct: 27,
    yPct: 68,
    mobileXPct: 40,
    mobileYPct: 76,
    depth: 'midground',
    rotate: -6,
    floatY: 10,
    floatX: -8,
    floatRotate: 3.5,
    floatScale: 1.02,
    duration: 6.5,
    delay: 1.5,
  },

  // ================= WEB SCRAPING & DATA COLLECTION =================
  {
    id: 'beautifulsoup',
    name: 'BeautifulSoup',
    category: 'Web Scraping',
    monogram: 'BS4',
    badgeBg: 'from-[#2878A8] to-[#B8E1F5]',
    badgeText: 'text-[#021F2D]',
    glowColor: 'rgba(40, 120, 168, 0.4)',
    borderAccent: 'border-[#8AB9DC]/35',
    icon: Code2,
    xPct: 40,
    yPct: 10,
    mobileXPct: 68,
    mobileYPct: 25,
    depth: 'background',
    rotate: -9,
    floatY: -9,
    floatX: 5,
    floatRotate: 3,
    floatScale: 1.02,
    duration: 7.1,
    delay: 0.3,
  },
  {
    id: 'scrapy',
    name: 'Scrapy',
    category: 'Web Scraping',
    monogram: 'SC',
    badgeBg: 'from-[#60A839] to-[#8AB9DC]',
    badgeText: 'text-[#061B33]',
    glowColor: 'rgba(96, 168, 57, 0.35)',
    borderAccent: 'border-[#8AB9DC]/30',
    icon: Compass,
    xPct: 57,
    yPct: 9,
    mobileXPct: 16,
    mobileYPct: 86,
    depth: 'background',
    rotate: 11,
    floatY: 11,
    floatX: -6,
    floatRotate: -4,
    floatScale: 1.025,
    duration: 6.8,
    delay: 1.1,
  },
  {
    id: 'selenium',
    name: 'Selenium',
    category: 'Web Scraping',
    monogram: 'SE',
    badgeBg: 'from-[#43B02A] to-[#5B9BD5]',
    badgeText: 'text-[#061B33]',
    glowColor: 'rgba(67, 176, 42, 0.35)',
    borderAccent: 'border-[#5B9BD5]/35',
    icon: Globe,
    xPct: 38,
    yPct: 80,
    mobileXPct: 70,
    mobileYPct: 74,
    depth: 'background',
    rotate: -7,
    floatY: -11,
    floatX: 6,
    floatRotate: 4,
    floatScale: 1.02,
    duration: 6.4,
    delay: 1.8,
  },

  // ================= AI & AUTOMATION =================
  {
    id: 'n8n',
    name: 'n8n Automation',
    category: 'AI & Automation',
    monogram: 'n8n',
    badgeBg: 'from-[#FF6C65] to-[#E97845]',
    badgeText: 'text-[#061B33]',
    glowColor: 'rgba(255, 108, 101, 0.48)',
    borderAccent: 'border-[#FF6C65]/50',
    icon: Workflow,
    xPct: 74,
    yPct: 14,
    mobileXPct: 8,
    mobileYPct: 56,
    depth: 'foreground',
    rotate: 8,
    floatY: -14,
    floatX: -7,
    floatRotate: -4.5,
    floatScale: 1.035,
    duration: 5.0,
    delay: 0.2,
  },
  {
    id: 'gemini',
    name: 'LLM Model',
    category: 'AI & Automation',
    monogram: 'GEM',
    badgeBg: 'from-[#4169E1] via-[#8AB9DC] to-[#FF6C65]',
    badgeText: 'text-[#061B33]',
    glowColor: 'rgba(65, 105, 225, 0.5)',
    borderAccent: 'border-[#B8E1F5]/50',
    icon: Sparkles,
    xPct: 84,
    yPct: 28,
    mobileXPct: 70,
    mobileYPct: 56,
    depth: 'foreground',
    rotate: -7,
    floatY: 13,
    floatX: 8,
    floatRotate: 4,
    floatScale: 1.03,
    duration: 4.9,
    delay: 0.6,
  },
  {
    id: 'aistudio',
    name: 'Google AI Studio',
    category: 'AI & Automation',
    monogram: 'AIS',
    badgeBg: 'from-[#1E4D8C] via-[#4169E1] to-[#B8E1F5]',
    badgeText: 'text-[#EAF1F8]',
    glowColor: 'rgba(65, 105, 225, 0.4)',
    borderAccent: 'border-[#8AB9DC]/40',
    icon: Bot,
    xPct: 75,
    yPct: 46,
    mobileXPct: 48,
    mobileYPct: 88,
    depth: 'midground',
    rotate: 10,
    floatY: -10,
    floatX: -6,
    floatRotate: -3.5,
    floatScale: 1.025,
    duration: 5.8,
    delay: 1.4,
  },
  {
    id: 'langflow',
    name: 'Langflow',
    category: 'AI & Automation',
    monogram: 'LF',
    badgeBg: 'from-[#E97845] to-[#FF6C65]',
    badgeText: 'text-[#061B33]',
    glowColor: 'rgba(233, 120, 69, 0.42)',
    borderAccent: 'border-[#E97845]/45',
    icon: Cpu,
    xPct: 58,
    yPct: 78,
    mobileXPct: 76,
    mobileYPct: 87,
    depth: 'midground',
    rotate: -8,
    floatY: 12,
    floatX: 7,
    floatRotate: 4,
    floatScale: 1.03,
    duration: 5.5,
    delay: 0.8,
  },

  // ================= DEVELOPMENT =================
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Development',
    monogram: 'N',
    badgeBg: 'from-[#EAF1F8] to-[#8AB9DC]',
    badgeText: 'text-[#061B33]',
    glowColor: 'rgba(234, 241, 248, 0.35)',
    borderAccent: 'border-[#EAF1F8]/35',
    icon: Braces,
    xPct: 86,
    yPct: 58,
    mobileXPct: 38,
    mobileYPct: 20,
    depth: 'midground',
    rotate: -9,
    floatY: -11,
    floatX: 6,
    floatRotate: -4,
    floatScale: 1.02,
    duration: 6.1,
    delay: 1.0,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Development',
    monogram: 'TS',
    badgeBg: 'from-[#3178C6] to-[#5B9BD5]',
    badgeText: 'text-[#EAF1F8]',
    glowColor: 'rgba(49, 120, 198, 0.45)',
    borderAccent: 'border-[#5B9BD5]/45',
    icon: Code2,
    xPct: 73,
    yPct: 72,
    mobileXPct: 24,
    mobileYPct: 62,
    depth: 'foreground',
    rotate: 6,
    floatY: 12,
    floatX: -7,
    floatRotate: 3.5,
    floatScale: 1.03,
    duration: 5.3,
    delay: 0.5,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Development',
    monogram: 'TW',
    badgeBg: 'from-[#38BDF8] to-[#2878A8]',
    badgeText: 'text-[#021F2D]',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    borderAccent: 'border-[#B8E1F5]/40',
    icon: Layers,
    xPct: 87,
    yPct: 80,
    mobileXPct: 56,
    mobileYPct: 64,
    depth: 'background',
    rotate: 12,
    floatY: -9,
    floatX: 5,
    floatRotate: -3,
    floatScale: 1.02,
    duration: 6.9,
    delay: 1.6,
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Development',
    monogram: 'PG',
    badgeBg: 'from-[#336791] to-[#8AB9DC]',
    badgeText: 'text-[#EAF1F8]',
    glowColor: 'rgba(51, 103, 145, 0.4)',
    borderAccent: 'border-[#8AB9DC]/35',
    icon: Server,
    xPct: 26,
    yPct: 84,
    mobileXPct: 82,
    mobileYPct: 40,
    depth: 'background',
    rotate: -10,
    floatY: 10,
    floatX: -5,
    floatRotate: 3.5,
    floatScale: 1.02,
    duration: 6.7,
    delay: 1.3,
  },
];

const CATEGORY_LABELS_ID: Record<string, string> = {
  All: 'Semua',
  'Data Analytics': 'Analitik Data',
  'Web Scraping': 'Web Scraping',
  'AI & Automation': 'AI & Otomasi',
  Development: 'Pengembangan',
};

interface DraggableTechTileProps {
  tile: TechTileConfig;
  stageRef: React.RefObject<HTMLDivElement | null>;
  isMobile: boolean;
  isDimmed: boolean;
  isId: boolean;
  shouldReduceMotion: boolean | null;
}

function DraggableTechTile({
  tile,
  stageRef,
  isMobile,
  isDimmed,
  isId,
  shouldReduceMotion,
}: DraggableTechTileProps) {
  const [isDragging, setIsDragging] = useState(false);
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  const IconComponent = tile.icon;

  const depthScale =
    tile.depth === 'foreground'
      ? 'scale-95 sm:scale-105 z-30'
      : tile.depth === 'midground'
        ? 'scale-90 sm:scale-95 z-20'
        : 'scale-85 sm:scale-90 opacity-85 z-10';

  const posLeft = isMobile
    ? `${Math.min(tile.mobileXPct, 62)}%`
    : `${tile.xPct}%`;
  const posTop = isMobile ? `${tile.mobileYPct}%` : `${tile.yPct}%`;

  const localizedCategory = isId
    ? CATEGORY_LABELS_ID[tile.category] || tile.category
    : tile.category;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = 14;
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      dragY.set(dragY.get() - step);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      dragY.set(dragY.get() + step);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      dragX.set(dragX.get() - step);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      dragX.set(dragX.get() + step);
    }
  };

  // Suspend automatic floating while dragging; resume smoothly on release
  const shouldFloat = !shouldReduceMotion && !isDragging;

  return (
    <motion.div
      drag
      dragConstraints={stageRef}
      dragElastic={0.22}
      dragMomentum={true}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${tile.name} — ${localizedCategory}. ${
        isId
          ? 'Geser dengan mouse/sentuhan atau gunakan tombol panah.'
          : 'Drag with mouse/touch or nudge with arrow keys.'
      }`}
      whileHover={{
        scale: 1.1,
        rotate: 0,
        zIndex: 40,
      }}
      whileDrag={{
        scale: 1.16,
        rotate: tile.rotate > 0 ? 3 : -3,
        zIndex: 45,
        cursor: 'grabbing',
      }}
      initial={{
        opacity: 0,
        scale: 0.72,
        rotate: tile.rotate,
      }}
      whileInView={{
        opacity: isDimmed ? 0.22 : 1,
        scale: isDimmed ? 0.85 : 1,
        rotate: tile.rotate,
      }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        type: 'spring',
        stiffness: 210,
        damping: 20,
      }}
      style={{
        left: posLeft,
        top: posTop,
        x: dragX,
        y: dragY,
      }}
      className={`group absolute cursor-grab active:cursor-grabbing touch-none rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65] ${depthScale} transition-opacity duration-300`}
    >
      {/* Independent Zero-Gravity Floating Oscillation Wrapper (suspended while dragging) */}
      <motion.div
        animate={
          shouldFloat
            ? {
                y: [0, tile.floatY, 0, -tile.floatY * 0.6, 0],
                x: [0, tile.floatX, 0, -tile.floatX * 0.6, 0],
                rotate: [
                  0,
                  tile.floatRotate,
                  0,
                  -tile.floatRotate * 0.7,
                  0,
                ],
                scale: [1, tile.floatScale, 1, 0.985, 1],
              }
            : {
                y: 0,
                x: 0,
                rotate: 0,
                scale: 1,
              }
        }
        transition={
          shouldFloat
            ? {
                duration: tile.duration,
                delay: tile.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : {
                duration: 0.2,
                ease: 'easeOut',
              }
        }
        style={{
          boxShadow: isDragging
            ? `0 24px 48px -6px ${tile.glowColor}, 0 12px 24px rgba(1, 8, 18, 0.88)`
            : `0 16px 36px -8px ${tile.glowColor}, 0 6px 16px rgba(1, 8, 18, 0.75)`,
        }}
        className={`relative flex items-center gap-2.5 sm:gap-3 rounded-2xl border ${tile.borderAccent} bg-gradient-to-br from-[#082442]/92 via-[#051A30]/95 to-[#021222]/95 px-3 py-2.5 sm:px-4 sm:py-3 backdrop-blur-xl transition-colors duration-200 group-hover:border-[#EAF1F8]/60`}
      >
        {/* Top specular glass reflection */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
        />

        {/* Recognizable Brand Color Emblem Tile */}
        <div
          className={`flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-br ${tile.badgeBg} ${tile.badgeText} shadow-inner`}
        >
          <IconComponent className="h-4 w-4 sm:h-4.5 sm:w-4.5 opacity-90" />
          <span className="font-mono-tech text-[9px] font-extrabold leading-none tracking-tighter mt-0.5">
            {tile.monogram}
          </span>
        </div>

        {/* Technology Name & Category Subtitle */}
        <div className="pr-1">
          <p className="text-xs sm:text-sm font-bold tracking-tight text-[#EAF1F8] whitespace-nowrap">
            {tile.name}
          </p>
          <p className="font-mono-tech text-[10px] text-[#8AB9DC] whitespace-nowrap">
            {localizedCategory}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FloatingTechEcosystem() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const { isId } = useLocalizedPortfolio();
  const [resetKey, setResetKey] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Scroll-driven scene entrance & exit transitions
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start end', 'end start'],
  });

  const stageScale = useTransform(
    scrollYProgress,
    [0, 0.22, 0.82, 1],
    shouldReduceMotion ? [1, 1, 1, 1] : [0.91, 1, 1, 0.94]
  );
  const stageOpacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.86, 1],
    shouldReduceMotion ? [1, 1, 1, 1] : [0.25, 1, 1, 0.4]
  );
  const centerTitleY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduceMotion ? [0, 0, 0] : [32, 0, -28]
  );

  const categories = [
    'All',
    'Data Analytics',
    'Web Scraping',
    'AI & Automation',
    'Development',
  ];

  return (
    <motion.div
      ref={stageRef}
      style={{
        scale: stageScale,
        opacity: stageOpacity,
      }}
      className="relative w-full rounded-3xl border border-[#8AB9DC]/18 bg-gradient-to-b from-[#061B33]/92 via-[#002147]/95 to-[#103B50]/75 p-5 sm:p-8 lg:p-10 shadow-[0_32px_90px_rgba(1,8,18,0.75)] overflow-hidden"
    >
      {/* Top specular highlight rim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4169E1]/70 to-transparent"
      />

      {/* Ambient Cobalt, Royal Blue & Teal Blue space lighting inside the toolkit stage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[620px] rounded-full bg-radial from-[#1E4D8C]/35 via-[#002147]/25 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-10 h-[300px] w-[360px] rounded-full bg-radial from-[#FF6C65]/12 via-[#E8A34A]/8 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-12 h-[320px] w-[380px] rounded-full bg-radial from-[#126078]/28 via-[#5B9BD5]/12 to-transparent blur-3xl"
      />

      {/* Stage Header & Interactive Controls Bar */}
      <div className="relative z-20 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-[#8AB9DC]/16 bg-[#021322]/85 p-1 backdrop-blur-md">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-md px-3 py-1.5 font-mono-tech text-[11px] font-medium transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65] ${
                  isSelected
                    ? 'bg-[#4169E1] text-[#EAF1F8] shadow-[0_4px_14px_rgba(65,105,225,0.45)]'
                    : 'text-[#8AB9DC] hover:bg-[#123C69]/40 hover:text-[#EAF1F8]'
                }`}
              >
                {isId ? CATEGORY_LABELS_ID[cat] || cat : cat}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-1.5 font-mono-tech text-[11px] text-[#8AB9DC]">
            <GripHorizontal className="h-3.5 w-3.5 text-[#FF6C65]" aria-hidden="true" />
            <span>
              {isId
                ? 'Tahan & geser ikon apa pun'
                : 'Grab & drag any floating tile'}
            </span>
          </span>
          <button
            type="button"
            onClick={() => setResetKey((prev) => prev + 1)}
            className="inline-flex items-center gap-1.5 rounded-md border border-[#8AB9DC]/20 bg-[#021322]/80 px-3 py-1.5 font-mono-tech text-[11px] font-medium text-[#B8E1F5] transition-colors duration-200 hover:border-[#B8E1F5]/50 hover:bg-[#123C69]/50 hover:text-[#EAF1F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65] whitespace-nowrap shrink-0"
          >
            <RotateCcw className="h-3 w-3 text-[#FF6C65]" aria-hidden="true" />
            <span>{isId ? 'Atur Ulang Posisi' : 'Reset Layout'}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Floating Stage */}
      <div
        key={resetKey}
        className="relative mt-4 min-h-[560px] sm:min-h-[600px] lg:min-h-[640px] w-full select-none"
      >
        {/* Central Editorial Focal Typography (Non-blocking pointer-events-none, without "My Tools") */}
        <motion.div
          style={{ y: centerTitleY }}
          className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center"
        >
          <div className="max-w-lg rounded-2xl border border-[#8AB9DC]/10 bg-[#041526]/65 px-6 py-6 backdrop-blur-md shadow-[0_16px_50px_rgba(1,8,18,0.65)]">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#FF6C65]">
              {isId
                ? 'Ekosistem Teknis Interaktif'
                : 'Interactive Technical Ecosystem'}
            </p>
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#8AB9DC]">
              {isId
                ? 'Teknologi terverifikasi yang diterapkan pada analitik bootcamp, proyek freelance web scraping, pipeline LLM Langflow, dan pengembangan aplikasi. Geser ikon mana pun untuk menjelajah.'
                : 'Verified technologies applied across bootcamp analytics, freelance web scraping, Langflow LLM pipelines, and full-stack delivery. Drag any tile to explore.'}
            </p>
          </div>
        </motion.div>

        {/* Scattered Floating & Draggable Technology Tiles */}
        {TECH_ECOSYSTEM_TILES.map((tile) => {
          const isDimmed =
            activeCategory !== 'All' && tile.category !== activeCategory;

          return (
            <DraggableTechTile
              key={tile.id}
              tile={tile}
              stageRef={stageRef}
              isMobile={isMobile}
              isDimmed={isDimmed}
              isId={isId}
              shouldReduceMotion={shouldReduceMotion}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
