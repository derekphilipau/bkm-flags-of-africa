'use client';

import Image from 'next/image';
import { getDictionary } from '@/dictionaries/dictionaries';

export function Flag({ country }: { country: any }) {
  const dict = getDictionary();
  return (
    <section className="">
      {country?.code && (
        <div className="w-full overflow-hidden">
          <Image
            src={`/img/flags/${country.code}.svg`}
            className="cursor-pointer object-cover"
            alt=""
            width={500}
            height={500}
          />
        </div>
      )}
      <h1 className="mt-4 mb-2 text-6xl font-bold">{country?.name}</h1>
      <p className="mb-8 text-3xl text-neutral-300">{country?.summary}</p>
      <p className="text-2xl text-neutral-300">{country?.description}</p>
    </section>
  );
}
