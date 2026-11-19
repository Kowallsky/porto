import React from 'react';
import type { Metadata } from 'next';
import { UsLawFirmsCaseStudyView } from '@/components/project-details/case-study-views';

export const metadata: Metadata = {
  title: 'US Immigration Law Firms Data Collection — Kowallskyy Case Study',
  description:
    'Freelance data collection and web scraping case study combining Sulekha and Google Maps sources, cross-source integration, and manual verification to prepare a 500-record dataset.',
};

export default function UsLawFirmsCaseStudyPage() {
  return <UsLawFirmsCaseStudyView />;
}
