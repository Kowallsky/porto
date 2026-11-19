import type { Metadata } from 'next';
import { EcommerceDatabaseCaseStudyView } from '@/components/project-details/sql-and-ir-case-study-views';

export const metadata: Metadata = {
  title: 'E-Commerce Database Management — SQL Case Study | Kowallskyy',
  description:
    'Collaborative Database Programming final project (Universitas AMIKOM Yogyakarta, 2024) implementing a 6-table relational e-commerce schema, SQL functions, stored procedures, triggers, composite BTREE indexes, views, and RBAC.',
};

export default function EcommerceDatabaseManagementPage() {
  return <EcommerceDatabaseCaseStudyView />;
}
