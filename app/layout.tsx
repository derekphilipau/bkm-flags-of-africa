import { PT_Sans, PT_Sans_Narrow } from 'next/font/google';

import { Footer } from '@/components/layout/footer';
import { SiteHeader } from '@/components/layout/site-header';
import './globals.css';
import { Spectrum } from '@/components/flags/spectrum';
import { MainNav } from '@/components/layout/main-nav';

// If loading a variable font, you don't need to specify the font weight
/*
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
*/

const ptSans = PT_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '700'],
});

const ptSansNarrow = PT_Sans_Narrow({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '700'],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ptSansNarrow.className} suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-neutral-800 font-sans text-neutral-50 antialiased">
        <div>
          <div className=" lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <MainNav />
          </div>
          <div className="lg:pl-72">
            <main className="">{children}</main>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 z-50 h-24 w-full bg-neutral-800 shadow-[0_10px_10px_15px_rgba(0,0,0,0.4)]">
          <Spectrum />
        </div>
      </body>
    </html>
  );
}
