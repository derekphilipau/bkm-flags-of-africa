import Image from 'next/image';
import { countries as countriesEn } from '@/data/countries-en';
import { countries as countriesEs } from '@/data/countries-es';
import type { Locale } from '@/i18n-config';
import Link from 'next/link';

export function Flags({ color, info, lang }: { color?: string; info?: boolean; lang: Locale }) {
  const countries = lang === 'es' ? countriesEs : countriesEn;

  let filteredCountries = countries;
  if (color) {
    filteredCountries = countries.filter((country) =>
      country.colors.includes(color)
    );
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
            >
              <Link href={`${lang}/flag/${country.code}/${country.name}`}>
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
              </Link>
            </div>
          )
      )}
    </section>
  );
}
