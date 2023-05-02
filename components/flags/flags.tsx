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

  function clickFlag(countryCode: string, countryName: string) {
    router.push(`/flag/${countryCode}/${countryName}`);
  }

  return (
    <section
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 ${
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
              onClick={() => clickFlag(country.code, country.name)}
            >
              <div className="relative">
                <Image
                  src={`/img/flags/${country.code}.svg`}
                  className="aspect-4/3 object-cover "
                  alt=""
                  width={800}
                  height={800}
                />

                {!info && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center p-4 text-3xl font-semibold text-black opacity-0 duration-300 hover:bg-white/70 hover:opacity-100">
                    {country?.name}
                  </div>
                )}
              </div>
              {info && (
                <div className="mt-2 text-base font-bold text-white">
                  <h3 className="text-2xl">{country?.name}</h3>
                  <p className="text-lg text-neutral-300">
                    {country?.colorText}
                  </p>
                </div>
              )}
            </div>
          )
      )}
    </section>
  );
}
