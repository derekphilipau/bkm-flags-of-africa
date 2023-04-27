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
    <section className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {filteredCountries.map(
        (country, index) =>
          country?.code && (
            <div
              className="cursor-pointer"
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
