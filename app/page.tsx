import React from 'react';
import { Navbar } from '@/components/navbar';
import { HeroV3 } from '@/components/homepage/hero-v3';
import { HomepageSections } from '@/components/homepage/homepage-sections';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#061B33] text-[#EAF1F8]">
      <Navbar variant="homepage-v3" />
      <main className="flex-1">
        <HeroV3 />
        <HomepageSections />
      </main>
    </div>
  );
}
