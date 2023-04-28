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
    <div className="h-full px-4">
      <div className="relative h-full text-sm antialiased">
        <div className="absolute top-1/2 hidden h-1 w-full -translate-y-1/2 bg-blue-300 sm:block"></div>
        <div className="flex h-full w-full flex-col items-center justify-between sm:flex-row">
          {years.map((year) => (
            <div
              onClick={() => clickYear(year)}
              className="z-10 flex cursor-pointer items-center justify-center rounded-full lg:border-2 xl:border-4 border-white bg-blue-600 text-2xl font-bold hover:bg-blue-500 lg:h-12 lg:w-12 lg:text-base xl:h-16 xl:w-16 xl:text-xl"
            >
              {year}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
