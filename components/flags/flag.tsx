'use client';

import Image from 'next/image';
import { getDictionary } from '@/dictionaries/dictionaries';

export function Flag({ flag }: { flag: any }) {
  const dict = getDictionary();
  console.log('my flag', flag);
  return (
    <section className="">
      {flag?.image && (
        <Image
          src={flag?.image}
          className="cursor-pointer object-cover"
          alt=""
          width={500}
          height={500}
        />
      )}
      <h1 className="mt-4 mb-2 text-6xl font-bold">{flag?.name}</h1>
      <p className="mb-8 text-3xl text-neutral-300">{flag?.summary}</p>
      <p className="text-2xl text-neutral-300">{flag?.description}</p>
    </section>
  );
}
