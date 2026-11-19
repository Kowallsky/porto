'use client';

import React, { createContext, useContext, useState } from 'react';
import {
  PORTFOLIO_IDENTITY,
  FEATURED_PROJECTS,
  EXPERIENCE_AND_EDUCATION,
  CAPABILITY_PILLARS,
  AUTOMOTIVE_CASE_STUDY,
  US_LAW_FIRMS_CASE_STUDY,
  ECOMMERCE_DB_CASE_STUDY,
  AI_AGENT_CASE_STUDY,
  SEMANTIC_RETRIEVAL_CASE_STUDY,
} from './portfolio-data';
import {
  PORTFOLIO_IDENTITY_ID,
  FEATURED_PROJECTS_ID,
  EXPERIENCE_AND_EDUCATION_ID,
  CAPABILITY_PILLARS_ID,
  AUTOMOTIVE_CASE_STUDY_ID,
  US_LAW_FIRMS_CASE_STUDY_ID,
  ECOMMERCE_DB_CASE_STUDY_ID,
  AI_AGENT_CASE_STUDY_ID,
  SEMANTIC_RETRIEVAL_CASE_STUDY_ID,
} from './portfolio-data-id';

export type Language = 'en' | 'id';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useLocalizedPortfolio() {
  const { language } = useLanguage();
  const isId = language === 'id';

  return {
    language,
    isId,
    identity: isId ? PORTFOLIO_IDENTITY_ID : PORTFOLIO_IDENTITY,
    featuredProjects: isId ? FEATURED_PROJECTS_ID : FEATURED_PROJECTS,
    experienceAndEducation: isId
      ? EXPERIENCE_AND_EDUCATION_ID
      : EXPERIENCE_AND_EDUCATION,
    capabilityPillars: isId ? CAPABILITY_PILLARS_ID : CAPABILITY_PILLARS,
    automotiveCaseStudy: isId ? AUTOMOTIVE_CASE_STUDY_ID : AUTOMOTIVE_CASE_STUDY,
    usLawFirmsCaseStudy: isId
      ? US_LAW_FIRMS_CASE_STUDY_ID
      : US_LAW_FIRMS_CASE_STUDY,
    ecommerceDbCaseStudy: isId
      ? ECOMMERCE_DB_CASE_STUDY_ID
      : ECOMMERCE_DB_CASE_STUDY,
    aiAgentCaseStudy: isId ? AI_AGENT_CASE_STUDY_ID : AI_AGENT_CASE_STUDY,
    semanticRetrievalCaseStudy: isId
      ? SEMANTIC_RETRIEVAL_CASE_STUDY_ID
      : SEMANTIC_RETRIEVAL_CASE_STUDY,
  };
}
