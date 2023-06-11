'use client';

import { usePathname } from 'next/navigation';

import { FlagsFooter } from '../flags/flags-footer';

export function Footer({ dict, lang }) {
  const pathname = usePathname();

  return (
    <>
      {(pathname === '/en' || pathname === '/es') && (
        <div className="fixed bottom-0 left-0 z-50 h-16 w-full bg-neutral-800 shadow-[0_10px_10px_15px_rgba(0,0,0,0.4)] lg:h-24">
          <FlagsFooter lang={lang} />
        </div>
      )}
    </>
  );
}
