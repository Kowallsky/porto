'use client';

import React from 'react';
import { useLocalizedPortfolio } from '@/lib/language-context';

export function Footer() {
  const { isId } = useLocalizedPortfolio();

  return (
    <footer className="relative bg-[#061B33] text-[#8AB9DC]">
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pt-4 pb-24 sm:px-8 sm:pt-6 sm:pb-28 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-4 text-xs text-[#9AB0C4] sm:flex-row sm:items-center">
          <p>
            made in piyung © 2026
          </p>
          <p className="font-mono-tech text-[11px] text-[#9AB0C4]/80">
            {isId
              ? 'Fondasi Analitik Data · Diferensiasi Alur Kerja AI'
              : 'Data Analytics Foundation · AI Workflow Differentiation'}
          </p>
        </div>
      </div>
    </footer>
  );
}
