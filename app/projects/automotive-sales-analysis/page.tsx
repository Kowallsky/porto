import React from 'react';
import type { Metadata } from 'next';
import { AutomotiveCaseStudyView } from '@/components/project-details/case-study-views';

export const metadata: Metadata = {
  title: 'Automotive Sales Analysis — Kowallskyy Case Study',
  description:
    'Bootcamp descriptive data analytics case study covering separate Excel Trade-In analysis, BigQuery SQL querying, Python exploratory analysis, and an interactive Power BI sales dashboard.',
};

export default function AutomotiveSalesAnalysisPage() {
  return <AutomotiveCaseStudyView />;
}
