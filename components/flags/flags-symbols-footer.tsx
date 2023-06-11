'use client';

import { useRouter } from 'next/navigation';
import { countries } from '@/data/countries-en';

import { Icons } from '../icons';

export function FlagsSymbolsFooter() {
  const router = useRouter();

  return (
    <div className="h-full px-6">
      <div className="flex h-full w-full flex-col items-center justify-between px-6 sm:flex-row">
        <div>
          <Icons.star className="mr-2 h-6 w-6 lg:mr-4 lg:h-14 lg:w-14" />
        </div>
        <div>
          <Icons.alignJustify className="mr-2 h-6 w-6 lg:mr-4 lg:h-14 lg:w-14" />
        </div>
        <div>
          <Icons.alignJustify className="mr-2 h-6 w-6 rotate-90 lg:mr-4 lg:h-14 lg:w-14" />
        </div>
        <div>
          <Icons.circle className="mr-2 h-6 w-6 lg:mr-4 lg:h-14 lg:w-14" />
        </div>
        <div>
          <Icons.moon className="mr-2 h-6 w-6 lg:mr-4 lg:h-14 lg:w-14" />
        </div>
        <div>
          <Icons.slice className="mr-2 h-6 w-6 lg:mr-4 lg:h-14 lg:w-14" />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6 lg:mr-4 lg:h-14 lg:w-14"
          >
            <path d="M16 7h.01"></path>
            <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path>
            <path d="m20 7 2 .5-2 .5"></path>
            <path d="M10 18v3"></path>
            <path d="M14 17.75V21"></path>
            <path d="M7 18a6 6 0 0 0 3.84-10.61"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
