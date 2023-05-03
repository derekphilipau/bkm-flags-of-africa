'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { countries, type Country } from '@/data/countries';
import { getDictionary } from '@/dictionaries/dictionaries';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Icons } from '../icons';

export function FlagQuestion({}: {}) {
  const router = useRouter();

  const answerCountryIndex = -1;
  const answerCountry = countries[Math.floor(Math.random() * countries.length)];
  let randomCountries: Country[] = [answerCountry];

  while (randomCountries.length < 3) {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[randomIndex];
    if (randomCountries.find((country) => country?.code === randomCountry.code))
      continue;
    randomCountries.push(randomCountry);
  }
  randomCountries = randomCountries.sort(() => Math.random() - 0.5);

  function checkboxChange(country: Country) {}

  function goNext() {
    const newIndex = 1;
    const newCountryCode = countries[newIndex].code;
    router.push(`/game/${newCountryCode}`);
  }

  return (
    <section className="">
      <div className="relative mt-0">
        <div className="lg:justify-normal flex w-full items-center justify-between gap-x-2 lg:absolute lg:right-0 lg:top-0 lg:w-fit">
          <Button
            onClick={() => goNext()}
            className="min-w-0 px-0 py-8"
            aria-label="Previous flag"
          >
            <Icons.chevronRight className="mx-4 h-12 w-12 text-africamaps" />
          </Button>
        </div>
        <div className="pt-4 lg:pt-0 flex flex-wrap w-full">
          {randomCountries.map((country) => (
            <div className="w-full overflow-hidden">
              <Checkbox
                id={`option-${country}`}
                onCheckedChange={(checked) => checkboxChange(country)}
                aria-labelledby={`terms-label-${country}`}
              />
              <Label
                htmlFor={`terms-${country}`}
                id={`terms-label-${country}`}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                test
              </Label>
              <Image
                src={`/img/flags/${country.code}.svg`}
                className="aspect-4/3 object-cover "
                alt=""
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
        {answerCountryIndex > -1 && (
          <div className="pt-4 lg:pt-0">
            {answerCountry?.code && (
              <div className="w-full overflow-hidden">
                <Image
                  src={`/img/flags/${answerCountry.code}.svg`}
                  className="aspect-4/3 object-cover "
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            )}
            <h1 className="mt-4 mb-2 text-6xl font-bold lg:text-8xl">
              {answerCountry?.name}
            </h1>
            <p className="mt-8 mb-12 text-3xl italic text-neutral-300 lg:text-5xl">
              {answerCountry?.colorText}
            </p>
            <h2 className="mt-4 mb-2 text-4xl font-bold lg:text-6xl">
              About the Flag
            </h2>
            <p className="text-2xl text-neutral-300 lg:text-3xl">
              {answerCountry?.flagText}
            </p>
            <h2 className="mt-8 mb-6 text-4xl font-bold lg:text-6xl">
              Independence
            </h2>
            <h5 className="my-6 text-3xl italic text-neutral-300 lg:text-5xl">
              {answerCountry.date}
            </h5>
            <p className="text-2xl text-neutral-300 lg:text-2xl">
              {answerCountry.text}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
