import Link from 'next/link';
import { countries as countriesEn } from '@/data/countries-en';
import { countries as countriesEs } from '@/data/countries-es';
import type { Locale } from '@/i18n-config';

import { Icons } from '../icons';

export function FlagNav({
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

  const homeLink = isFromTimeline ? `/${lang}/timeline` : `/${lang}/`;
  const previousIndex =
    countryIndex === 0 ? countries.length - 1 : countryIndex - 1;
  const previousCountryCode = countries[previousIndex].code;
  const previousLink = `/${lang}/flag/${previousCountryCode}`;
  const nextIndex =
    countryIndex === countries.length - 1 ? 0 : countryIndex + 1;
  const nextCountryCode = countries[nextIndex].code;
  const nextLink = `/${lang}/flag/${nextCountryCode}`;

  return (
    <div className="lg:justify-normal flex w-full items-center justify-between gap-x-2 lg:absolute lg:right-0 lg:top-0 lg:w-fit">
      <Link
        href={previousLink}
        className="inline-flex min-w-0 items-center justify-center rounded-md bg-neutral-800 px-0 py-4 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50"
        aria-label={dict['nav.previous']}
      >
        <Icons.chevronLeft className="mx-4 h-12 w-12 text-africamaps" />
      </Link>
      <Link
        href={homeLink}
        className="inline-flex min-w-0 items-center justify-center rounded-md bg-neutral-800 px-0 py-4 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50"
        aria-label={dict['nav.up']}
      >
        <Icons.chevronUp className="mx-4 h-12 w-12 text-africamaps" />
      </Link>
      <Link
        href={nextLink}
        className="inline-flex min-w-0 items-center justify-center rounded-md bg-neutral-800 px-0 py-4 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50"
        aria-label={dict['nav.next']}
      >
        <Icons.chevronRight className="mx-4 h-12 w-12 text-africamaps" />
      </Link>
    </div>
  );
}
