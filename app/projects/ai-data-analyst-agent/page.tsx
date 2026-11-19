import React from 'react';
import type { Metadata } from 'next';
import { AiAgentCaseStudyView } from '@/components/project-details/case-study-views';

export const metadata: Metadata = {
  title: 'AI Data Analyst Agent — Kowallskyy Case Study',
  description:
    'IBM / Hacktiv8 Langflow case study transforming multi-category consumer-electronics customer reviews into sentiment-oriented insights, summaries, and action items using Gemini 3.1 Flash Lite and Gemini 2.5 Flash.',
};

export default function AiDataAnalystAgentPage() {
  return <AiAgentCaseStudyView />;
}
