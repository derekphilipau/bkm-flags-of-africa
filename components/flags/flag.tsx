'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { countries as countriesEn } from '@/data/countries-en';
import { countries as countriesEs } from '@/data/countries-es';
import { getDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';

import { Button } from '@/components/ui/button';
import { AfricaMap } from '../africa-map';
import { BkmLogo } from '../bkm-logo';
import { Icons } from '../icons';
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
        <div className="lg:justify-normal flex w-full items-center justify-between gap-x-2 lg:absolute lg:right-0 lg:top-0 lg:w-fit">
          <FlagNav countryCode={countryCode} isFromTimeline={isFromTimeline} lang={lang} dict={dict} />
        </div>
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
              <p className="my-6 text-2xl italic lg:text-3xl">
                {country?.colorText}
              </p>
            </div>
            <div className="w-48 flex-none overflow-hidden lg:w-48">
              <style jsx global>{`
                #country-${country?.code} {
                  fill: white;
                }
              `}</style>
              <AfricaMap className="w-full pt-4" />
            </div>
          </div>
          <div className="max-w-screen-lg">
            <h2 className="mt-4 mb-6 text-4xl font-bold lg:text-6xl">
              Independence
            </h2>
            <h5 className="my-6 text-2xl italic lg:text-3xl">
              {country?.date}
            </h5>
            <p className="text-2xl text-neutral-300 lg:text-3xl">
              {country?.text}
            </p>
            <h2 className="mt-8 mb-6 text-4xl font-bold lg:text-6xl">
              About the Flag
            </h2>
            <p className="text-2xl text-neutral-300 lg:text-3xl">
              {country?.flagText}
            </p>
          </div>
        </div>
      </div>
      <BkmLogo />
    </section>
  );
}
