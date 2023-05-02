import Image from 'next/image';
import Link from 'next/link';
import { countries } from '@/data/countries';
import { getDictionary } from '@/dictionaries/dictionaries';

import { BkmLogo } from '@/components/bkm-logo';

export default function Page() {
  const dict = getDictionary();

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
    <div className="mb-24 lg:py-6  lg:pr-4">
      <div className="px-4 lg:px-0">
        <h2 className="text-6xl font-semibold lg:text-8xl">
          Timeline of Independence
        </h2>
        <p className="mt-4 mb-8 text-4xl text-neutral-300">
          The timeline presented here offers a glimpse into the journey of each
          of Africa’s fifty-four nations toward independence as well as the
          aftermath of decolonization in the decades that followed.
        </p>
      </div>
      <div className="w-full">
        <div className="relative text-sm antialiased">
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 bg-blue-300 lg:block"></div>
          {Object.keys(countriesByYear).map((year, index) => (
            <div className="mt-6 lg:mt-0 lg:mb-4" key={index}>
              <div className="sticky top-2 mb-6 grid w-full grid-cols-1">
                <div className="flex w-full justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-blue-500 text-4xl font-bold lg:translate-y-0">
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
                      <p className="my-4 text-xl text-neutral-300 lg:text-2xl">
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
