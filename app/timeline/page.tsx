import Image from 'next/image';
import { timeline } from '@/data/timeline';
import { getDictionary } from '@/dictionaries/dictionaries';

import { BkmLogo } from '@/components/bkm-logo';

export default function Page() {
  const dict = getDictionary();

  return (
    <div className="mb-24 grid items-center gap-6 pt-6 pb-8 lg:py-10">
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

          {timeline.map((country, index) => (
            <div className="mt-6 lg:mt-0 lg:mb-12" key={index}>
              <div className="flex flex-col items-center lg:flex-row">
                <div
                  className={`mx-auto flex w-full items-center ${
                    index % 2 ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`w-full lg:w-1/2 ${
                      index % 2 ? 'lg:pl-14' : 'lg:pr-14'
                    }`}
                  >
                    <div className="rounded bg-neutral-700 p-4 shadow">
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
                  </div>
                </div>
                <div className="absolute left-1/2 flex h-20 w-20 -translate-y-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-500 text-3xl font-bold lg:translate-y-0">
                  <a href={`#timeline-${country.year}`}>{country.year}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BkmLogo />
    </div>
  );
}
