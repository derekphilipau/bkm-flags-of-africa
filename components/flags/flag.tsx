import Image from 'next/image';
import { countries as countriesEn } from '@/data/countries-en';
import { countries as countriesEs } from '@/data/countries-es';
import type { Locale } from '@/i18n-config';

import { AfricaMap } from '../africa-map';
import { BkmLogo } from '../bkm-logo';
import { FlagNav } from './flag-nav';

export function Flag({
  countryCode,
  isFromTimeline,
  lang,
  dict,
}: {
  countryCode: string;
  isFromTimeline?: boolean;
  lang: Locale;
  dict: any;
}) {
  const countries = lang === 'es' ? countriesEs : countriesEn;

  const countryIndex = countries.findIndex(
    (country) => country.code === countryCode
  );

  const country = countries[countryIndex];

  return (
    <section className="">
      <div className="relative mt-0">        
        <FlagNav countryCode={countryCode} isFromTimeline={isFromTimeline} lang={lang} dict={dict} />
        <div className="pt-4 lg:pt-0">
          {country?.code && (
            <div className="flex w-full flex-wrap justify-center lg:justify-start">
              <div className="overflow-hidden">
                <Image
                  src={`/img/flags/${country.code}.svg`}
                  className="aspect-4/3 object-cover "
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          )}
          <div className="my-8 flex w-full flex-wrap items-start gap-x-4 lg:flex-nowrap">
            <div>
              <h1 className="mb-2 text-6xl font-bold lg:text-8xl">
                {country?.name}
              </h1>
              <p className="my-6 font-serif text-2xl font-normal italic lg:text-2xl">
                {country?.colorText}
              </p>
            </div>
            <div className="w-48 flex-none overflow-hidden lg:w-48">
              <AfricaMap countryCode={country?.code} className="w-full pt-4" />
            </div>
          </div>
          <div className="max-w-screen-lg">
            <h2 className="mt-4 mb-6 text-4xl font-bold lg:text-6xl">
              {dict['flag.independence']}
            </h2>
            <h5 className="my-6 font-serif text-2xl font-normal italic lg:text-2xl">
              {country?.date}
            </h5>
            <p className="font-serif text-2xl font-normal text-neutral-300 lg:text-2xl">
              {country?.text}
            </p>
            <h2 className="mt-8 mb-6 text-4xl font-bold lg:text-6xl">
              {dict['flag.about']}
            </h2>
            <p className="font-serif text-2xl font-normal text-neutral-300 lg:text-2xl">
              {country?.flagText}
            </p>
          </div>
        </div>
      </div>
      <BkmLogo />
    </section>
  );
}
