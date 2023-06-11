'use client';

import { useRouter } from 'next/navigation';
import { countries as countriesEn } from '@/data/countries-en';
import { countries as countriesEs } from '@/data/countries-es';
import type { Locale } from '@/i18n-config';

import { Button } from '@/components/ui/button';
import { Icons } from '../icons';

export function FlagNav({
  countryCode,
  isFromTimeline,
  lang,
  dict
}: {
  countryCode: string;
  isFromTimeline?: boolean;
  lang: Locale;
  dict: any;
}) {
  const router = useRouter();

  const countries = lang === 'es' ? countriesEs : countriesEn;

  const countryIndex = countries.findIndex(
    (country) => country.code === countryCode
  );

  const country = countries[countryIndex];
  console.log('xxx lang: ' + lang, country, countryCode);

  function goPrevious() {
    const previousIndex =
      countryIndex === 0 ? countries.length - 1 : countryIndex - 1;
    const previousCountryCode = countries[previousIndex].code;
    router.push(`/flag/${previousCountryCode}`);
  }

  function goHome() {
    if (isFromTimeline) {
      router.push('/timeline');
      return;
    }
    router.push('/');
  }

  function goNext() {
    const newIndex =
      countryIndex === countries.length - 1 ? 0 : countryIndex + 1;
    const newCountryCode = countries[newIndex].code;
    router.push(`/flag/${newCountryCode}`);
  }

  return (
    <>
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
    </>
  );
}
