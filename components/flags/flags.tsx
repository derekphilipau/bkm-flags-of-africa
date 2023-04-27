'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { flags } from '@/data/flags';
import { getDictionary } from '@/dictionaries/dictionaries';

export function Flags({ color, info }: { color?: string; info?: boolean }) {
  const dict = getDictionary();
  const router = useRouter();

  let filteredFlags = flags;
  if (color) {
    console.log(color);
    filteredFlags = flags.filter((flag) => flag.colors.includes(color));
  }
  console.log(filteredFlags);

  function clickFlag(flagId: string) {
    router.push(`/flag/${flagId}`);
  }

  return (
    <section className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {filteredFlags.map(
        (flag, index) =>
          flag.image && (
            <div
              className="cursor-pointer"
              key={index}
              onClick={() => clickFlag(flag.id)}
            >
              <div className="relative">
                <Image
                  src={flag?.image}
                  className="h-72 object-cover sm:h-36 md:h-36 lg:h-36 xl:h-40"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              {info && (
                <div className="mb-4 mt-2 text-base font-bold text-white">
                  <h3 className="text-lg">{flag?.name}</h3>
                  {flag?.summary}
                </div>
              )}
            </div>
          )
      )}
    </section>
  );
}
