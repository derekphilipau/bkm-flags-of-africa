'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { countries } from '@/data/countries';
import { getDictionary } from '@/dictionaries/dictionaries';

export function Flags({ color, info }: { color?: string; info?: boolean }) {
  const dict = getDictionary();
  const router = useRouter();

  let filteredCountries = countries;
  if (color) {
    filteredCountries = countries.filter((country) =>
      country.colors.includes(color)
    );
  }

  function clickFlag(countryId: string) {
    router.push(`/flag/${countryId}`);
  }

  return (
    <section
      className={`sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ${
        info ? '' : 'gap-1'
      }`}
    >
      {filteredCountries.map(
        (country, index) =>
          country?.code && (
            <div
              className={`cursor-pointer hover:bg-neutral-700 ${
                info ? 'p-3' : ''
              }`}
              key={index}
              onClick={() => clickFlag(country.code)}
            >
              <div className="relative">
                <Image
                  src={`/img/flags/${country.code}.svg`}
                  className="h-72 object-cover sm:h-36 md:h-36 lg:h-36 xl:h-40"
                  alt=""
                  width={500}
                  height={500}
                />
                {!info && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center p-4 text-3xl font-semibold text-black opacity-0 duration-300 hover:bg-white/70 hover:opacity-100">
                    {country?.name}
                  </div>
                )}
              </div>
              {info && (
                <div className="mb-4 mt-2 text-base font-bold text-white">
                  <h3 className="text-xl">{country?.name}</h3>
                  <p className="text-neutral-300">{country?.summary}</p>
                </div>
              )}
            </div>
          )
      )}
    </section>
  );
}
