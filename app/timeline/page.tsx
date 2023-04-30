import Image from 'next/image';
import Link from 'next/link';
import { timeline } from '@/data/timeline';
import { getDictionary } from '@/dictionaries/dictionaries';

import { BkmLogo } from '@/components/bkm-logo';

export default function Page() {
  const dict = getDictionary();

  return (
    <div className="container mb-24 grid items-center gap-6 pt-6 pb-8 md:py-10">
      <h2 className="text-6xl font-semibold lg:text-8xl">
        Timeline of Independence
      </h2>
      <p className="mt-4 mb-8 text-4xl text-neutral-300">
        The timeline presented here offers a glimpse into the journey of each of
        Africa’s fifty-four nations toward independence as well as the aftermath
        of decolonization in the decades that followed.
      </p>
      <div className="w-full ">
        <div className="relative text-sm antialiased">
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 bg-blue-300 md:block"></div>

          {timeline.map((country, index) => (
            <div className="mt-6 md:mt-0 md:mb-12">
              <div className="flex flex-col items-center md:flex-row">
                <div
                  className={`mx-auto flex w-full items-center ${
                    index % 2 ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 ? 'md:pl-14' : 'md:pr-14'
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
                      <h3 className="my-4 text-6xl font-bold">
                        {country.name}
                      </h3>
                      <h5 className="my-4 text-4xl italic text-neutral-300">
                        {country.date}
                      </h5>
                      <p className="my-4 text-2xl text-neutral-300">
                        {country.text}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 flex h-20 w-20 -translate-y-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-500 text-3xl font-bold md:translate-y-0">
                  <a href={`#timeline-${country.year}`}>{country.year}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link href="https://brooklynmuseum.org">
        <BkmLogo className="mt-20 w-96 fill-neutral-400" />
      </Link>
    </div>
  );
}
