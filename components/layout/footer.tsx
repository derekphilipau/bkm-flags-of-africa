'use client';

import { usePathname } from 'next/navigation';

import { Spectrum } from '@/components/flags/spectrum';
import { TimelineFooter } from '../timeline-footer';

export function Footer() {
  const pathname = usePathname();

  return (
    <>
      {pathname === '/' && (
        <div className="fixed bottom-0 left-0 z-50 h-24 w-full bg-neutral-800 shadow-[0_10px_10px_15px_rgba(0,0,0,0.4)]">
          <Spectrum />
        </div>
      )}
      {pathname === '/timeline' && (
        <div className="hidden lg:block fixed bottom-0 left-0 z-50 h-24 w-full bg-neutral-800 shadow-[0_10px_10px_15px_rgba(0,0,0,0.4)]">
          <TimelineFooter />
        </div>
      )}
    </>
  );
}
