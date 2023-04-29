'use client';

import { useRouter } from 'next/navigation';
import { timeline } from '@/data/timeline';

import { Icons } from './icons';

export function TimelineFooter() {
  const router = useRouter();

  function clickYear(year?: number) {
    if (!year) {
      return router.push('/timeline');
    }
    router.push(`/timeline#timeline-${year}`);
  }

  // Get unique years in timeline:
  const years = [...new Set(timeline.map((country) => country.year))];

  return (
    <div className="h-full px-6">
      <div className="relative h-full antialiased">
        <div className="absolute top-1/2 hidden h-1 w-full -translate-y-1/2 bg-blue-300 sm:block"></div>
        <div className="flex h-full w-full flex-col items-center justify-between sm:flex-row">
          {years.map((year) => (
            <div
              onClick={() => clickYear(year)}
              className="z-10 flex cursor-pointer items-center justify-center rounded-full border-white bg-blue-600 text-[8px] font-bold text-opacity-0 transition duration-300 hover:scale-300 text-blue-600 hover:text-white h-6 w-6 border-2"
            >
              {year}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
