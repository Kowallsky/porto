'use client';

import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react';
import {
  Check,
  Send,
  BarChart3,
  Workflow,
  Linkedin,
  Instagram,
  Music2,
  MessageCircle,
} from 'lucide-react';
import { useLocalizedPortfolio } from '@/lib/language-context';
import { FloatingTechEcosystem } from '@/components/homepage/floating-tech-ecosystem';
import { ChronologicalExperienceTimeline } from '@/components/homepage/chronological-experience-timeline';
import { CertificateCarouselSection } from '@/components/homepage/certificate-carousel-section';
import { CapabilitiesZigzagSection } from '@/components/homepage/capabilities-zigzag-section';
import { SelectedWorkShowcase } from '@/components/homepage/selected-work-showcase';

export function HomepageSections() {
  const shouldReduceMotion = useReducedMotion();
  const {
    isId,
    capabilityPillars,
  } = useLocalizedPortfolio();
  const [selectedTopicIndex, setSelectedTopicIndex] = useState<string>('01');
  const [customMessage, setCustomMessage] = useState<string>('');
  const [copiedTopic, setCopiedTopic] = useState(false);

  const selectedPillar =
    capabilityPillars.find((p) => p.index === selectedTopicIndex) ||
    capabilityPillars[0];

  // Section refs for scroll-driven scene transitions
  const aboutRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  // Scene 1: About scroll progress
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ['start end', 'end start'],
  });
  const aboutFloatLeftY = useTransform(
    aboutProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [50, -70]
  );
  const aboutFloatRightY = useTransform(
    aboutProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [70, -90]
  );
  const aboutFloatRotate = useTransform(
    aboutProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-10, 8]
  );
  const aboutBgGlowY = useTransform(
    aboutProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [36, -36]
  );

  // Scene 5: Contact ambient warm glow scroll scale
  const { scrollYProgress: contactProgress } = useScroll({
    target: contactRef,
    offset: ['start end', 'end end'],
  });
  const contactWarmGlowScale = useTransform(
    contactProgress,
    [0, 0.7, 1],
    shouldReduceMotion ? [1, 1, 1] : [0.88, 1.06, 1.02]
  );

  const handleCopyBrief = () => {
    const trimmedMessage = customMessage.trim();
    const baseText = isId
      ? `Halo Kowallskyy — Saya ingin berdiskusi mengenai ${selectedPillar.title}.`
      : `Hello Kowallskyy — I am reaching out regarding ${selectedPillar.title}.`;
    const briefText = trimmedMessage
      ? `${baseText}\n\n${trimmedMessage}`
      : baseText;
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(briefText);
      setCopiedTopic(true);
      setTimeout(() => setCopiedTopic(false), 2500);
    }
  };

  return (
    <div className="relative overflow-x-clip bg-[#061B33] text-[#EAF1F8]">
      {/* =================================================================== */}
      {/* SHARED CONTINUOUS PAGE-LEVEL ATMOSPHERIC FOUNDATION                 */}
      {/* One Continuous Canvas, Multiple Distinct Blue Color Temperatures:   */}
      {/* Petrol/Teal (About) -> Oxford/Cobalt (Work) -> Quiet Ocean/Midnight */}
      {/* (Experience) -> Steel/Petrol (Capabilities) -> Warm Blue (Contact)  */}
      {/* =================================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#08263A_0%,#103B50_11%,#0A2942_22%,#002147_35%,#0E3360_46%,#021F2D_58%,#061B33_67%,#103B50_78%,#0A2646_89%,#061B33_100%)]"
      />

      {/* Cross-Section Atmospheric Bridge 1: Hero -> About (Petrol & Teal Blue) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[2%] -left-28 h-[820px] w-[860px] rounded-full bg-radial from-[#126078]/34 via-[#103B50]/26 to-transparent blur-3xl animate-ambient-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[9%] right-[-8%] h-[720px] w-[760px] rounded-full bg-radial from-[#2878A8]/28 via-[#5B9BD5]/14 to-transparent blur-3xl animate-ambient-reverse"
      />

      {/* Cross-Section Atmospheric Bridge 2: About -> Selected Work (Petrol into Oxford/Cobalt) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[22%] left-[18%] h-[780px] w-[920px] rounded-full bg-radial from-[#1E4D8C]/32 via-[#002147]/28 to-transparent blur-3xl animate-ambient-pulse"
      />

      {/* Cross-Section Atmospheric Bridge 3: Selected Work -> Experience (Cobalt into Quiet Ocean Navy) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[48%] right-[14%] h-[740px] w-[840px] rounded-full bg-radial from-[#021F2D]/60 via-[#061B33]/40 to-transparent blur-3xl"
      />

      {/* Cross-Section Atmospheric Bridge 4: Experience -> Capabilities -> Tech Stack (Petrol & Steel Blue) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[68%] left-[-6%] h-[820px] w-[880px] rounded-full bg-radial from-[#103B50]/38 via-[#126078]/22 to-transparent blur-3xl animate-ambient-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[76%] right-[-4%] h-[760px] w-[800px] rounded-full bg-radial from-[#1E4D8C]/30 via-[#5B9BD5]/16 to-transparent blur-3xl animate-ambient-reverse"
      />

      {/* =================================================================== */}
      {/* SECTION 01: ABOUT — Petrol / Teal Atmosphere                        */}
      {/* Midnight Navy (#061B33) foundation, Petrol Blue (#103B50) & Teal    */}
      {/* Blue (#126078) atmospheric wash, Ocean Blue (#2878A8) & Soft Steel  */}
      {/* Blue (#5B9BD5) highlights, feathered top/bottom crossfade           */}
      {/* =================================================================== */}
      <section
        ref={aboutRef}
        id="about"
        aria-labelledby="about-heading"
        className="relative scroll-mt-20 py-24 sm:py-32"
      >
        {/* Feathered Petrol & Teal Blue Section Atmosphere (overlaps adjacent sections) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-y-24 inset-x-0 mask-atmosphere-blend bg-[linear-gradient(135deg,rgba(6,27,51,0.88)_0%,rgba(16,59,80,0.82)_44%,rgba(18,96,120,0.56)_76%,rgba(6,27,51,0.9)_100%)]"
        />
        {/* Subtle diagonal technical scanline texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-y-12 inset-x-0 bg-atmospheric-diagonal opacity-70"
        />
        {/* Scroll-linked Teal Blue & Ocean Blue left-side illumination */}
        <motion.div
          aria-hidden="true"
          style={{ y: aboutBgGlowY }}
          className="pointer-events-none absolute top-4 left-[-6%] h-[560px] w-[680px] rounded-full bg-radial from-[#126078]/42 via-[#2878A8]/24 to-transparent blur-3xl"
        />
        {/* Upper-right Soft Steel Blue & Petrol Blue atmospheric highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-12 right-[4%] h-[460px] w-[560px] rounded-full bg-radial from-[#5B9BD5]/22 via-[#103B50]/28 to-transparent blur-3xl animate-ambient-reverse"
        />
        {/* Subtle diagonal light streak bridging Hero into About */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/4 h-[360px] w-[720px] -rotate-12 bg-gradient-to-r from-transparent via-[#5B9BD5]/14 to-transparent blur-2xl"
        />

        {/* Scroll-Driven Peripheral Floating Element 1 (Upper-Right Margin) */}
        <motion.div
          aria-hidden="true"
          style={{ y: aboutFloatRightY, rotate: aboutFloatRotate }}
          className="pointer-events-none hidden xl:flex absolute top-10 right-8 z-0 items-center gap-2.5 rounded-2xl border border-[#8AB9DC]/16 bg-[#021F2D]/60 px-4 py-2.5 backdrop-blur-md shadow-[0_14px_34px_rgba(1,8,18,0.5)] opacity-75"
        >
          <BarChart3 className="h-4 w-4 text-[#FF6C65]" />
          <span className="font-mono-tech text-[11px] text-[#B8E1F5]">
            Python · SQL · Power BI
          </span>
        </motion.div>

        {/* Scroll-Driven Peripheral Floating Element 2 (Lower-Left Margin) */}
        <motion.div
          aria-hidden="true"
          style={{ y: aboutFloatLeftY }}
          className="pointer-events-none hidden xl:flex absolute bottom-6 left-8 z-0 -rotate-6 items-center gap-2.5 rounded-2xl border border-[#5B9BD5]/16 bg-[#002147]/55 px-4 py-2.5 backdrop-blur-md shadow-[0_14px_34px_rgba(1,8,18,0.5)] opacity-75"
        >
          <Workflow className="h-4 w-4 text-[#E8A34A]" />
          <span className="font-mono-tech text-[11px] text-[#EAF1F8]/85">
            {isId ? 'Agen LLM · Alur Kerja n8n' : 'LLM Agents · n8n Workflows'}
          </span>
        </motion.div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Section Index & Label — Glides in from left */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
              className="lg:col-span-4"
            >
              <p className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#FF6C65]">
                {isId ? '01. Tentang' : '01. About'}
              </p>
              <h2
                id="about-heading"
                className="mt-3 text-4xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-5xl lg:text-[56px] xl:text-[64px] leading-[1.05] [text-wrap:balance]"
              >
                {isId ? 'Siapa Saya ?' : 'Who Am I ?'}
              </h2>
              <p className="mt-4 font-mono-tech text-xs text-[#8AB9DC]">
                {isId
                  ? 'Universitas AMIKOM Yogyakarta · Informatika'
                  : 'Universitas AMIKOM Yogyakarta · Informatics'}
              </p>
              <p className="mt-1 font-mono-tech text-xs text-[#B8E1F5]">
                GPA : 3.6/4.0 Cum Laude
              </p>
            </motion.div>

            {/* Editorial Narrative — Staggered directional reveal */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : 0.08,
              }}
              className="space-y-8 lg:col-span-8"
            >
              <p className="text-lg font-medium leading-relaxed text-[#EAF1F8]/95 sm:text-xl">
                {isId
                  ? 'Analis Data karier awal dengan latar belakang Informatika, berfokus pada analisis data, pemodelan prediktif, pemrosesan data terstruktur, dan otomasi alur kerja berbasis AI.'
                  : 'An early-career Data Analyst with an Informatics background, focused on data analysis, predictive modeling, structured data processing, and AI-powered workflow automation.'}
              </p>

              <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2">
                <motion.div
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -4, rotate: -0.6 }
                  }
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="relative overflow-hidden rounded-xl border border-[#8AB9DC]/18 bg-gradient-to-br from-[#002147]/65 via-[#061B33]/80 to-[#021F2D]/75 p-6 backdrop-blur-md shadow-[0_16px_40px_rgba(2,12,24,0.45)]"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5B9BD5]/50 to-transparent"
                  />
                  <h3 className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#B8E1F5]">
                    {isId ? 'Fondasi Analitik' : 'Analytical Foundation'}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#EAF1F8]/80">
                    {isId
                      ? 'Berlandaskan studi Informatika di Universitas AMIKOM Yogyakarta, dengan pengalaman langsung dalam pengumpulan data, pembersihan data, analisis eksploratif, dan business intelligence menggunakan Python, SQL, Excel, dan Power BI. Juga mengeksplorasi analitik prediktif dan peramalan deret waktu (time-series forecasting) melalui proyek machine learning.'
                      : 'Grounded in Informatics studies at Universitas AMIKOM Yogyakarta, with hands-on experience in data collection, cleaning, exploratory analysis, and business intelligence using Python, SQL, Excel, and Power BI. Also exploring predictive analytics and time-series forecasting through machine learning projects.'}
                  </p>
                </motion.div>

                <motion.div
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -4, rotate: 0.6 }
                  }
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="relative overflow-hidden rounded-xl border border-[#5B9BD5]/18 bg-gradient-to-bl from-[#123C69]/50 via-[#061B33]/80 to-[#002147]/70 p-6 backdrop-blur-md shadow-[0_16px_40px_rgba(2,12,24,0.45)]"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B8E1F5]/45 to-transparent"
                  />
                  <h3 className="font-mono-tech text-xs uppercase tracking-[0.1em] text-[#B8E1F5]">
                    {isId ? 'Arah Otomasi AI' : 'AI Automation Direction'}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#EAF1F8]/80">
                    {isId
                      ? 'Mengeksplorasi integrasi LLM, agen AI, dan platform otomasi seperti n8n untuk membangun alur kerja terstruktur, menyederhanakan operasi data, dan mendukung proses bisnis yang lebih efisien.'
                      : 'Exploring the integration of LLMs, AI agents, and automation platforms such as n8n to build structured workflows, streamline data operations, and support more efficient business processes.'}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 02: SELECTED WORK — Premium Editorial Five-Project Showcase */}
      {/* =================================================================== */}
      <SelectedWorkShowcase />

      {/* =================================================================== */}
      {/* SECTION 03: EXPERIENCE & EDUCATION — Interactive Scroll Timeline    */}
      {/* "LET'S GO BACK IN TIME." — Chronological Journey (2026 -> 2022)     */}
      {/* =================================================================== */}
      <ChronologicalExperienceTimeline />

      {/* =================================================================== */}
      {/* SECTION 04: CAPABILITIES — Asymmetric Zigzag Flow Composition       */}
      {/* =================================================================== */}
      <CapabilitiesZigzagSection />

      {/* =================================================================== */}
      {/* SEPARATED SECTION: TECHNOLOGY ECOSYSTEM — Interactive Floating Stage*/}
      {/* Deep Petrol, Steel & Cobalt technical stage bridging to Contact     */}
      {/* =================================================================== */}
      <section
        id="technology-ecosystem"
        aria-labelledby="technology-ecosystem-heading"
        className="relative scroll-mt-20 py-20 sm:py-28"
      >
        {/* Feathered Deep Technical Stage Atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-y-24 inset-x-0 mask-atmosphere-blend bg-[linear-gradient(165deg,rgba(16,59,80,0.58)_0%,rgba(0,33,71,0.88)_48%,rgba(6,27,51,0.94)_100%)]"
        />
        {/* Ambient Cobalt, Steel Blue & Teal glow framing the Technology Ecosystem stage */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[620px] w-[860px] rounded-full bg-radial from-[#1E4D8C]/32 via-[#103B50]/24 to-transparent blur-3xl animate-ambient-pulse"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-12 left-[6%] h-[420px] w-[480px] rounded-full bg-radial from-[#5B9BD5]/18 via-transparent to-transparent blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#FF6C65]">
              {isId ? 'Ekosistem Teknologi' : 'Technology Ecosystem'}
            </p>
            <h2
              id="technology-ecosystem-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-[#EAF1F8] sm:text-3xl"
            >
              {isId ? 'Tumpukan Teknis' : 'Technical Stack'}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#8AB9DC]">
              {isId
                ? 'Jelajahi bahasa pemrograman, platform analitik, pustaka web scraping, dan alat otomasi AI yang digunakan di seluruh proyek saya.'
                : 'Explore the languages, analytics platforms, scraping libraries, and AI automation tools used across my projects.'}
            </p>
          </div>

          <FloatingTechEcosystem />
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 05: CERTIFICATIONS & LEARNING — Infinite 3D Carousel        */}
      {/* =================================================================== */}
      <CertificateCarouselSection />

      {/* =================================================================== */}
      {/* SECTION 05: CONTACT — Warm Blue Contrast Atmosphere                 */}
      {/* Deep Midnight Navy (#061B33) foundation, Oxford (#002147) & Cobalt  */}
      {/* (#1E4D8C) undertones + restrained Signal Coral (#FF6C65), Burnt     */}
      {/* Orange (#E97845) & Muted Amber (#E8A34A) focal horizon glow         */}
      {/* =================================================================== */}
      <section
        ref={contactRef}
        id="contact"
        aria-labelledby="contact-heading"
        className="relative scroll-mt-20 pt-8 pb-0 sm:pt-12 sm:pb-0"
      >
        {/* Feathered Warm Blue Contrast Atmosphere blending smoothly into final page background (#061B33) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 bottom-0 inset-x-0 bg-[linear-gradient(180deg,rgba(6,27,51,0)_0%,rgba(0,33,71,0.75)_38%,rgba(18,60,105,0.4)_72%,rgba(6,27,51,1)_100%)]"
        />
        {/* Left-center Oxford, Royal Blue & Cobalt atmospheric glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-8 left-[4%] h-[420px] w-[580px] rounded-full bg-radial from-[#4169E1]/20 via-[#1E4D8C]/18 to-transparent blur-3xl animate-ambient-slow"
        />
        {/* Warm Signal Coral, Burnt Orange & Muted Amber focal ambient glow */}
        <motion.div
          aria-hidden="true"
          style={{ scale: contactWarmGlowScale }}
          className="pointer-events-none absolute top-1/2 right-[6%] -translate-y-1/2 h-[440px] w-[520px] rounded-full bg-radial from-[#FF6C65]/16 via-[#E97845]/10 to-transparent blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 right-[22%] h-[320px] w-[420px] rounded-full bg-radial from-[#E8A34A]/10 via-[#1E4D8C]/14 to-transparent blur-3xl animate-ambient-reverse"
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* Seamless Page-Ending Contact Container (no bottom border, extends to bottom edge) */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-t-2xl rounded-b-none border-t border-x border-b-0 border-[#8AB9DC]/22 bg-[linear-gradient(180deg,rgba(0,33,71,0.84)_0%,rgba(6,27,51,0.92)_60%,rgba(6,27,51,1)_100%)] px-8 pt-10 pb-10 backdrop-blur-xl sm:px-12 sm:pt-14 sm:pb-12 lg:px-16 lg:pt-16 lg:pb-14"
          >
            {/* Subtle dual-tone top highlight bar */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#4169E1]/50 via-[#B8E1F5]/40 to-[#FF6C65]/60"
            />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <motion.p
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: shouldReduceMotion ? 0 : 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-mono-tech text-xs uppercase tracking-[0.14em] text-[#FF6C65]"
                >
                  {isId ? '06. Kontak' : '06. Contact'}
                </motion.p>
                <motion.h2
                  id="contact-heading"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.55,
                    delay: shouldReduceMotion ? 0 : 0.24,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-3 text-3xl font-extrabold tracking-tight text-[#EAF1F8] sm:text-4xl [text-wrap:balance]"
                >
                  {isId
                    ? 'Mari Berkolaborasi dalam Proyek Data & Alur Kerja AI.'
                    : 'Let’s Work Together on Data & AI Workflow Projects.'}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.55,
                    delay: shouldReduceMotion ? 0 : 0.34,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-4 max-w-xl text-sm leading-relaxed text-[#EAF1F8]/80 sm:text-base"
                >
                  {isId
                    ? 'Tersedia untuk peran analitik data entry-level / junior serta kolaborasi freelance yang mencakup web scraping terstruktur, pembersihan data, analisis SQL/Python, pelaporan Power BI, dan integrasi alur kerja Langflow/LLM.'
                    : 'Available for entry-level / junior data analytics roles and freelance engagements involving structured web scraping, data cleaning, SQL/Python analysis, Power BI reporting, and Langflow/LLM workflow integration.'}
                </motion.p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  {[
                    {
                      href: 'https://www.linkedin.com/in/satya-iskandar',
                      label: 'LinkedIn',
                      title: 'LinkedIn',
                      hoverClasses: 'hover:border-[#4169E1] hover:text-[#B8E1F5] focus-visible:ring-[#B8E1F5]',
                      icon: <Linkedin className="h-5 w-5" aria-hidden="true" />,
                    },
                    {
                      href: 'https://www.tiktok.com/@k0wallskyy',
                      label: 'TikTok',
                      title: 'TikTok',
                      hoverClasses: 'hover:border-[#FF6C65] hover:text-[#FF6C65] focus-visible:ring-[#FF6C65]',
                      icon: <Music2 className="h-5 w-5" aria-hidden="true" />,
                    },
                    {
                      href: 'https://www.instagram.com/satya.iskandar/',
                      label: 'Instagram',
                      title: 'Instagram',
                      hoverClasses: 'hover:border-[#E97845] hover:text-[#E97845] focus-visible:ring-[#E97845]',
                      icon: <Instagram className="h-5 w-5" aria-hidden="true" />,
                    },
                    {
                      href: 'https://wa.me/6281392959499',
                      label: 'WhatsApp',
                      title: 'WhatsApp (081392959499)',
                      hoverClasses: 'hover:border-[#21A366] hover:text-[#B8E1F5] focus-visible:ring-[#B8E1F5]',
                      icon: <MessageCircle className="h-5 w-5" aria-hidden="true" />,
                    },
                  ].map((social, idx) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.title}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.45,
                        delay: shouldReduceMotion ? 0 : 0.42 + idx * 0.09,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#8AB9DC]/25 bg-[#021F2D]/85 text-[#EAF1F8] shadow-[0_6px_20px_rgba(2,12,24,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#123C69]/75 focus-visible:outline-none focus-visible:ring-2 ${social.hoverClasses}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Interactive Project Inquiry Scope Selector */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : 0.34,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative rounded-xl border border-[#8AB9DC]/18 bg-[#021626]/85 p-6 sm:p-8 lg:col-span-5 shadow-[0_16px_40px_rgba(2,10,20,0.5)]"
              >
                <p className="font-mono-tech text-xs uppercase tracking-[0.08em] text-[#B8E1F5]">
                  {isId ? 'Hubungi Saya' : 'hit me up'}
                </p>

                <div
                  role="radiogroup"
                  aria-label={
                    isId
                      ? 'Pilih area fokus kolaborasi'
                      : 'Select collaboration focus area'
                  }
                  className="mt-4 space-y-2"
                >
                  {capabilityPillars.map((pillar) => {
                    const active = selectedTopicIndex === pillar.index;
                    return (
                      <button
                        key={pillar.index}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => setSelectedTopicIndex(pillar.index)}
                        className={`flex w-full items-center justify-between rounded-md border px-3.5 py-2.5 text-left text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6C65] ${
                          active
                            ? 'border-[#FF6C65]/80 bg-[#123C69]/55 text-[#EAF1F8]'
                            : 'border-[#8AB9DC]/14 bg-[#061B33]/80 text-[#8AB9DC] hover:border-[#8AB9DC]/35 hover:text-[#EAF1F8]'
                        }`}
                      >
                        <span>{pillar.title}</span>
                        <span
                          className={`font-mono-tech text-[11px] ${
                            active ? 'text-[#FF6C65]' : 'text-[#B8E1F5]/70'
                          }`}
                        >
                          {pillar.index}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4">
                  <textarea
                    rows={3}
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder={
                      isId
                        ? 'Tulis pesan, detail proyek, atau apa saja di sini...'
                        : 'Write your message, project details, or anything here...'
                    }
                    aria-label={
                      isId
                        ? 'Tulis pesan kolaborasi'
                        : 'Write collaboration message'
                    }
                    className="w-full resize-y rounded-md border border-[#8AB9DC]/20 bg-[#061B33]/90 px-3.5 py-2.5 text-xs leading-relaxed text-[#EAF1F8] placeholder-[#8AB9DC]/55 transition-colors duration-200 focus:border-[#FF6C65]/80 focus:outline-none focus:ring-1 focus:ring-[#FF6C65]"
                  />
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[#FF6C65] px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#021F2D] shadow-[0_4px_24px_rgba(255,108,101,0.35)] transition-all duration-200 hover:bg-[#ff827c] hover:shadow-[0_6px_30px_rgba(255,108,101,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAF1F8]"
                  >
                    {copiedTopic ? (
                      <>
                        <Check className="h-4 w-4" aria-hidden="true" />
                        <span>
                          {isId
                            ? 'Pesan Kolaborasi Disalin ke Papan Klip'
                            : 'Inquiry Brief Copied to Clipboard'}
                        </span>
                      </>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>
                          {isId ? 'mulai percakapan' : 'start conversation'}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Integrated Bottom Footer Metadata Inside Contact Container */}
            <motion.footer
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : 0.68,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-[#8AB9DC]/12 pt-6 font-mono-tech text-[11px] text-[#9AB0C4]/85 sm:mt-16 sm:flex-row sm:items-center"
            >
              <p>made in piyung © 2026</p>
              <p className="text-[#9AB0C4]/75">
                {isId
                  ? 'Fondasi Analitik Data · Diferensiasi Alur Kerja AI'
                  : 'Data Analytics Foundation · AI Workflow Differentiation'}
              </p>
            </motion.footer>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
