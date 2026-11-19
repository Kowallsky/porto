import type { Metadata } from 'next';
import { SemanticRetrievalCaseStudyView } from '@/components/project-details/sql-and-ir-case-study-views';

export const metadata: Metadata = {
  title: 'Running Shoes Semantic Retrieval — IR Thesis Case Study | Kowallskyy',
  description:
    'Undergraduate Informatics thesis research comparing lexical TF-IDF (5,394 terms) and Sentence Embedding (all-MiniLM-L6-v2, 384 dimensions) across 475 running shoe documents and 30 queries using nDCG@5.',
};

export default function SemanticRetrievalRunningShoesPage() {
  return <SemanticRetrievalCaseStudyView />;
}
