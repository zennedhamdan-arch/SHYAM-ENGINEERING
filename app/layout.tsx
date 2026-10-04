import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import { site } from '@/lib/site';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://shyam-engineering.example';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.company.name} — Heavy Equipment & Construction Materials in Kigali, Rwanda`,
    template: `%s | ${site.company.name}`,
  },
  description:
    'Shyam Engineering Equipment Ltd provides reliable heavy machinery and quality construction materials to support infrastructure, real estate and development projects across Rwanda.',
  openGraph: {
    type: 'website',
    siteName: site.company.name,
    title: `${site.company.name} — Heavy Equipment & Construction Materials`,
    description:
      'Reliable heavy machinery and quality construction materials for infrastructure, real estate and development projects across Rwanda.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1376,
        height: 768,
        alt: 'Excavator and wheel loader working on a road construction site in the Rwandan hills at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.company.name} — Heavy Equipment & Construction Materials`,
    description:
      'Reliable heavy machinery and quality construction materials for projects across Rwanda.',
    images: ['/images/hero.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy-950"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
