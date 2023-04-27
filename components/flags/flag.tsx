'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { countries } from '@/data/countries';
import { getDictionary } from '@/dictionaries/dictionaries';

import { Button } from '@/components/ui/button';
import { Icons } from '../icons';

export function Flag({ countryCode }: { countryCode: string }) {
  const dict = getDictionary();
  const router = useRouter();

  const countryIndex = countries.findIndex(
    (country) => country.code === countryCode
  );

  const country = countries[countryIndex];

  function goPrevious() {
    const previousIndex =
      countryIndex === 0 ? countries.length - 1 : countryIndex - 1;
    const previousCountryCode = countries[previousIndex].code;
    router.push(`/flag/${previousCountryCode}`);
  }

  function goNext() {
    const newIndex =
      countryIndex === countries.length - 1 ? 0 : countryIndex + 1;
    const newCountryCode = countries[newIndex].code;
    router.push(`/flag/${newCountryCode}`);
  }

  function goHome() {
    router.push('/');
  }

  return (
    <section className="">
      <div className="relative">
        {country?.code && (
          <div className="w-full overflow-hidden">
            <Image
              src={`/img/flags/${country.code}.svg`}
              className="cursor-pointer object-cover"
              alt=""
              width={500}
              height={500}
            />
          </div>
        )}
        <h1 className="mt-4 mb-2 text-6xl font-bold">{country?.name}</h1>
        <p className="mb-8 text-3xl text-neutral-300">{country?.summary}</p>
        <p className="text-2xl text-neutral-300">{country?.description}</p>
        <div className="absolute right-0 top-0 flex gap-x-2">
          <Button
            onClick={() => goPrevious()}
            className="min-w-0 px-0 py-8"
            aria-label="Previous flag"
          >
            <Icons.chevronLeft className="mx-4 h-12 w-12 text-africamaps" />
          </Button>
          <Button
            onClick={() => goHome()}
            className="min-w-0 px-0 py-8"
            aria-label="Previous flag"
          >
            <Icons.chevronUp className="mx-4 h-12 w-12 text-africamaps" />
          </Button>
          <Button
            onClick={() => goNext()}
            className="min-w-0 px-0 py-8"
            aria-label="Previous flag"
          >
            <Icons.chevronRight className="mx-4 h-12 w-12 text-africamaps" />
          </Button>
        </div>
      </div>
    </section>
  );
}
