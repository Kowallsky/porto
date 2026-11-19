import type { Metadata } from 'next';
import { Manrope, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/language-context';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kowallskyy — Data & AI Automation Engineer',
  description:
    'Turning Data Into Intelligence. Building analytical solutions and intelligent workflows through data, AI, and automation.',
  openGraph: {
    title: 'Kowallskyy — Data & AI Automation Engineer',
    description:
      'Turning Data Into Intelligence. Building analytical solutions and intelligent workflows through data, AI, and automation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kowallskyy — Data & AI Automation Engineer',
    description:
      'Turning Data Into Intelligence. Building analytical solutions and intelligent workflows through data, AI, and automation.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${ibmPlexMono.variable} dark`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#061B33] text-[#EAF1F8] antialiased selection:bg-[#4169E1]/35 selection:text-[#EAF1F8]"
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
