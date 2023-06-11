'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n, localeNames } from '@/i18n-config';

import { Icons } from '../icons';

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const currentLocale = pathName.split('/')?.[1] || i18n.defaultLocale;

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <>
      {i18n.locales.map((locale) => {
        if (locale === currentLocale) return null;
        return (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            className="my-2 flex cursor-pointer items-center rounded-md p-3 text-xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100 lg:my-4 lg:w-full lg:text-3xl"
          >
            <Icons.languages className="mr-2 h-6 w-6 lg:mr-4 lg:h-8 lg:w-8" />
            {localeNames[locale]}
          </Link>
        );
      })}
    </>
  );
}
