import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileNavDock from '@/components/layout/MobileNavDock';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.meta.siteUrl),
  title: {
    default: 'MLA Bakaji Thakor | Official Portal | Kalol (Gandhinagar), Gujarat',
    template: '%s | MLA Bakaji Thakor (Kalol)',
  },
  description: siteConfig.meta.description,
  keywords: [
    'Bakaji Thakor',
    'બકાજી ઠાકોર',
    'MLA Bakaji Thakor',
    'Kalol MLA',
    'કલોલ ધારાસભ્ય',
    'Gandhinagar Gujarat MLA',
    'Jan Sunwai Kalol',
    'Kalol Development Works',
    'Gujarat Legislative Assembly',
  ],
  authors: [{ name: 'Office of MLA Bakaji Thakor' }],
  creator: 'MLA Bakaji Thakor Secretariat',
  publisher: 'Office of MLA Bakaji Thakor',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'MLA Bakaji Thakor | Official Citizen Portal - Kalol (Gandhinagar)',
    description: siteConfig.meta.description,
    url: siteConfig.meta.siteUrl,
    siteName: 'MLA Bakaji Thakor Official',
    locale: 'gu_IN',
    alternateLocale: ['en_IN', 'hi_IN'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLA Bakaji Thakor | Official Portal - Kalol',
    description: siteConfig.meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bakaji Thakor',
    alternateName: 'બકાજી ઠાકોર',
    jobTitle: 'Member of Legislative Assembly (MLA)',
    worksFor: {
      '@type': 'GovernmentOrganization',
      name: 'Gujarat Legislative Assembly (ગુજરાત વિધાનસભા)',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kalol, Gandhinagar',
      addressRegion: 'Gujarat',
      postalCode: '382721',
      addressCountry: 'IN',
    },
    url: siteConfig.meta.siteUrl,
    sameAs: [
      siteConfig.socials.facebook,
      siteConfig.socials.twitter,
      siteConfig.socials.instagram,
      siteConfig.socials.youtube,
    ],
  };

  return (
    <html lang="gu" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-saffron-100 selection:text-saffron-800">
        <LanguageProvider>
          {/* Top Notice / Announcement Bar */}
          <div className="bg-navy-950 text-sand-100 py-1.5 px-4 text-xs font-medium border-b border-navy-800/80">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-gujarati text-[13px]">
                  સત્તાવાર જનસંપર્ક કાર્યાલય (કલોલ): સોમ-શનિ સવારે ૯ થી સાંજે ૬ | હેલ્પલાઇન: {siteConfig.offices[0].helpline}
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-slate-300">
                <span>કલોલ • છત્રાલ • સાઇજ (ગાંધીનગર જિલ્લો)</span>
                <span className="text-saffron-400 font-semibold">ગુજરાત વિધાનસભા</span>
              </div>
            </div>
          </div>

          <Navbar />
          
          <main className="flex-grow pb-16 md:pb-0">
            {children}
          </main>

          <Footer />
          <MobileNavDock />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
