import Image from 'next/image';
import Link from 'next/link';
import { countries as countriesEn } from '@/data/countries-en';
import { countries as countriesEs } from '@/data/countries-es';
import { getDictionary } from '@/get-dictionary';

import { BkmLogo } from '@/components/bkm-logo';

export default async function Page({ params: { lang }, searchParams }) {
  const dict = await getDictionary(lang);
  const countries = lang === 'es' ? countriesEs : countriesEn;

  const countriesByYear = {};
  countries.forEach((country) => {
    if (country.year) {
      if (!countriesByYear[country.year]) {
        countriesByYear[country.year] = [];
      }
      countriesByYear[country.year].push(country);
    }
  });

  return (
    <div className="mb-24 lg:py-6 lg:pr-4">
      <div className="px-4 lg:px-0">
        <h2 className="text-4xl font-semibold lg:text-6xl">
          {dict['timeline.title']}
        </h2>
        <p className="mt-6 mb-8 font-serif text-2xl font-normal text-neutral-300">
          {dict['timeline.text']}
        </p>
      </div>
      <div className="w-full">
        <div className="relative text-sm antialiased">
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 bg-blue-300 lg:block"></div>
          {Object.keys(countriesByYear).map((year, index) => (
            <div className="mt-6 lg:mt-0 lg:mb-4" key={index}>
              <div className="sticky top-6 mb-6 grid w-full grid-cols-1">
                <div className="flex w-full justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-africamaps  text-4xl font-bold text-black shadow-lg lg:translate-y-0">
                    <a href={`#timeline-${year}`}>{year}</a>
                  </div>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 content-start gap-x-16 gap-y-4 lg:grid-cols-2">
                {countriesByYear[year].map((country, index) => (
                  <Link
                    href={`/flag/${country.code}/${country.name}?timeline=true`}
                    key={index}
                  >
                    <div className="w-full cursor-pointer rounded-lg bg-neutral-700 p-4 shadow hover:bg-neutral-600">
                      <div className="w-32">
                        <Image
                          src={`/img/flags/${country.code}.svg`}
                          className="aspect-4/3 object-cover"
                          alt=""
                          width={800}
                          height={800}
                        />
                      </div>
                      <h3 className="my-4 text-4xl font-bold lg:text-6xl">
                        {country.name}
                      </h3>
                      <h5 className="my-4 text-2xl italic text-neutral-300 lg:text-4xl">
                        {country.date}
                      </h5>
                      <p className="my-4 font-serif text-xl font-normal text-neutral-300 lg:text-2xl">
                        {country.text}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <BkmLogo />
    </div>
  );
}
