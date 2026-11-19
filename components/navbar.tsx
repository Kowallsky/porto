'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Menu,
  X,
  ArrowUpRight,
  Home,
  Code2,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { LiveClock } from '@/components/live-clock';
import { useLanguage } from '@/lib/language-context';
import { instrumentalPlayer } from '@/lib/instrumental-player';

interface NavbarProps {
  variant?: 'homepage-v3' | 'project-detail';
}

export function Navbar({ variant = 'homepage-v3' }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(() =>
    instrumentalPlayer.getPlayingState()
  );
  const shouldReduceMotion = useReducedMotion();
  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  const isHomepage = pathname === '/' || variant === 'homepage-v3';
  const isId = language === 'id';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        menuContainerRef.current &&
        !menuContainerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const navLinks = [
    {
      index: '01',
      label: isId ? 'Proyek' : 'Projects',
      href: isHomepage ? '#selected-work' : '/#selected-work',
    },
    {
      index: '02',
      label: isId ? 'Tentang' : 'About',
      href: isHomepage ? '#about' : '/#about',
    },
    {
      index: '03',
      label: isId ? 'Pengalaman' : 'Experience',
      href: isHomepage ? '#experience' : '/#experience',
    },
    {
      index: '04',
      label: isId ? 'Kapabilitas' : 'Capabilities',
      href: isHomepage ? '#capabilities' : '/#capabilities',
    },
    {
      index: '05',
      label: isId ? 'Kontak' : 'Contact',
      href: isHomepage ? '#contact' : '/#contact',
    },
  ];

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      const target = document.getElementById('selected-work');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleToggleMusic = () => {
    const playing = instrumentalPlayer.toggle();
    setIsPlayingMusic(playing);
  };

  // Show the floating bottom dock when scrolling on the homepage, or always on project detail pages
  const showBottomDock = isHomepage ? scrolled : true;

  return (
    <>
      {/* =================================================================== */}
      {/* TOP NAVBAR — Stationary at the top on Homepage, sticky on Details   */}
      {/* =================================================================== */}
      <header
        ref={menuContainerRef}
        className={
          isHomepage
            ? 'absolute top-0 inset-x-0 z-40 w-full bg-transparent transition-opacity duration-300'
            : 'sticky top-0 inset-x-0 z-40 w-full border-b border-[#B8E1F5]/12 bg-[#021F2D]/88 backdrop-blur-xl transition-colors duration-300'
        }
      >
        <div className="relative mx-auto flex max-w-[1440px] items-center justify-between bg-transparent px-4 py-3.5 sm:px-8 sm:py-4 lg:px-12">
          {/* Left — Brand Identity */}
          <div className="flex items-center shrink-0 z-10">
            <Link
              href="/"
              className="text-sm sm:text-base font-extrabold uppercase tracking-[0.14em] text-[#F0EFEA] transition-opacity duration-200 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E1F5] whitespace-nowrap"
            >
              KOWALLSKYY.
            </Link>
          </div>

          {/* Center — Visually Centered Live Digital Clock (Asia/Jakarta 24h) */}
          <div className="pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <LiveClock />
          </div>

          {/* Right — Hamburger Menu */}
          <div className="flex items-center shrink-0 z-10">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="navigation-menu-panel"
              aria-label={
                menuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-sm border border-transparent bg-transparent text-[#F0EFEA]/85 transition-all duration-200 hover:bg-[#F0EFEA]/5 hover:text-[#F0EFEA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E1F5]"
            >
              {menuOpen ? (
                <X className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Refined Dropdown / Overlay Navigation Panel */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="navigation-menu-panel"
              aria-label="Site Navigation"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-0 left-0 top-full border-b border-[#B8E1F5]/20 bg-[#021F2D]/95 backdrop-blur-xl shadow-2xl"
            >
              <div className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-5 sm:gap-4">
                  {navLinks.map((item) => (
                    <Link
                      key={item.index}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between rounded-md border border-[#B8E1F5]/10 bg-[#002147]/50 px-4 py-3.5 transition-all duration-200 hover:border-[#B8E1F5]/40 hover:bg-[#4169E1]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8E1F5]"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono-tech text-[11px] text-[#B8E1F5]/70">
                          {item.index}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#F0EFEA] group-hover:text-[#B8E1F5]">
                          {item.label}
                        </span>
                      </div>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-[#B8E1F5]/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF6C65]"
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* =================================================================== */}
      {/* FLOATING BOTTOM DOCK NAVBAR (Middle & Bottom of the Screen)         */}
      {/* Pulls out with a seamless transition when scrolling starts          */}
      {/* [ Home ]  [ < > ]  |  [ EN | ID ]  |  [ Speaker (Instrumental) ]    */}
      {/* =================================================================== */}
      <AnimatePresence>
        {showBottomDock && (
          <motion.nav
            aria-label="Floating Quick Navigation & Language Dock"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 72, scale: 0.9 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 72, scale: 0.9 }
            }
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 24,
            }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="flex items-center gap-4 sm:gap-5 rounded-full border border-white/10 bg-[#0A0E17]/92 px-5 py-2.5 backdrop-blur-2xl shadow-[0_18px_50px_rgba(0,0,0,0.85),0_0_24px_rgba(65,105,225,0.18)]">
              {/* 1. Home Icon -> Homepage */}
              <Link
                href="/"
                onClick={handleHomeClick}
                aria-label={isId ? 'Beranda' : 'Homepage'}
                title={isId ? 'Beranda' : 'Homepage'}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#EAF1F8]/85 transition-all duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
              >
                <Home className="h-5 w-5" aria-hidden="true" />
              </Link>

              {/* 2. Code Icon (< >) -> Projects Section */}
              <Link
                href={isHomepage ? '#selected-work' : '/#selected-work'}
                onClick={handleProjectsClick}
                aria-label={isId ? 'Bagian Proyek' : 'Projects Section'}
                title={isId ? 'Bagian Proyek' : 'Projects Section'}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#EAF1F8]/85 transition-all duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
              >
                <Code2 className="h-5 w-5" aria-hidden="true" />
              </Link>

              {/* Left Vertical Divider */}
              <div
                aria-hidden="true"
                className="h-6 w-px bg-white/12 shrink-0"
              />

              {/* 3. Language Segmented Pill Toggle (EN | ID) */}
              <div
                role="group"
                aria-label="Language selector"
                className="relative flex items-center rounded-full border border-white/12 bg-[#060911] p-1"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  aria-pressed={language === 'en'}
                  className={`relative z-10 rounded-full px-3.5 py-1 text-xs font-extrabold tracking-wider uppercase transition-colors duration-200 focus-visible:outline-none ${
                    language === 'en'
                      ? 'text-white'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {language === 'en' && (
                    <motion.span
                      layoutId="dock-active-language-pill"
                      transition={{
                        type: 'spring',
                        stiffness: 360,
                        damping: 28,
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-[#3B82F6] shadow-[0_2px_12px_rgba(59,130,246,0.6)]"
                    />
                  )}
                  EN
                </button>

                <button
                  type="button"
                  onClick={() => setLanguage('id')}
                  aria-pressed={language === 'id'}
                  className={`relative z-10 rounded-full px-3.5 py-1 text-xs font-extrabold tracking-wider uppercase transition-colors duration-200 focus-visible:outline-none ${
                    language === 'id'
                      ? 'text-white'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {language === 'id' && (
                    <motion.span
                      layoutId="dock-active-language-pill"
                      transition={{
                        type: 'spring',
                        stiffness: 360,
                        damping: 28,
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-[#3B82F6] shadow-[0_2px_12px_rgba(59,130,246,0.6)]"
                    />
                  )}
                  ID
                </button>
              </div>

              {/* Right Vertical Divider */}
              <div
                aria-hidden="true"
                className="h-6 w-px bg-white/12 shrink-0"
              />

              {/* 4. Speaker Icon -> Instrumental Song Toggle */}
              <button
                type="button"
                onClick={handleToggleMusic}
                aria-pressed={isPlayingMusic}
                aria-label={
                  isPlayingMusic
                    ? isId
                      ? 'Hentikan musik instrumental'
                      : 'Pause instrumental music'
                    : isId
                      ? 'Putar musik instrumental'
                      : 'Play instrumental music'
                }
                title={
                  isPlayingMusic
                    ? isId
                      ? 'Musik Instrumental Aktif (Klik untuk Jeda)'
                      : 'Instrumental Playing (Click to Pause)'
                    : isId
                      ? 'Putar Lagu Instrumental'
                      : 'Play Instrumental Song'
                }
                className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] ${
                  isPlayingMusic
                    ? 'bg-[#3B82F6]/20 text-[#60A5FA] shadow-[0_0_16px_rgba(59,130,246,0.45)]'
                    : 'text-[#EAF1F8]/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                {isPlayingMusic ? (
                  <Volume2 className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <VolumeX className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
