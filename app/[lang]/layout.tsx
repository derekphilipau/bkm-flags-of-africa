import { EB_Garamond, Oswald } from 'next/font/google';

import './globals.css';
import { Footer } from '@/components/layout/footer';
import { MainNav } from '@/components/layout/main-nav';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { i18n } from '@/i18n-config';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Flags of Africa',
    template: '%s | Flags of Africa',
  },
  description: 'Flags of Africa',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: {
    lang: Locale
  }
}) {
  const lang = params.lang || i18n.defaultLocale;
  const dict = await getDictionary(lang);

  return (
    <html lang="en" className={`${ebGaramond.className} ${oswald.className}`} suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-neutral-800 font-sans text-neutral-50 antialiased">
        <div className="lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <MainNav dict={dict} lang={lang} />
        </div>
        <div className="lg:pl-72">
          <main className="">{children}</main>
        </div>
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}


