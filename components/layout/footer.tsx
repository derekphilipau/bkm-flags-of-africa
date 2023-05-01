'use client';

import { usePathname } from 'next/navigation';

import { FlagsFooter } from '../flags/flags-footer';
import { SymbolsFooter } from '../symbols-footer';

export function Footer() {
  const pathname = usePathname();

  return (
    <>
      {pathname === '/' && (
        <div className="fixed bottom-0 left-0 z-50 h-16 w-full bg-neutral-800 shadow-[0_10px_10px_15px_rgba(0,0,0,0.4)] lg:h-24">
          <FlagsFooter />
        </div>
      )}
      {pathname === '/symbols' && (
        <div className="fixed bottom-0 left-0 z-50 hidden h-24 w-full bg-neutral-800 shadow-[0_10px_10px_15px_rgba(0,0,0,0.4)] lg:block">
          <SymbolsFooter />
        </div>
      )}
    </>
  );
}
