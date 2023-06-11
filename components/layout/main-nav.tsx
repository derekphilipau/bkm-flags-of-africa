import Link from 'next/link';

import { Icons } from '@/components/icons';
import LocaleSwitcher from '@/components/locale/locale-switcher';

export function MainNav({ dict, lang }) {

  return (
    <div className="p-4 text-africamaps">
      <div>
        <Link
          href={`/${lang}`}
          className={`${lang === 'en' ? 'text-7xl' : 'text-6xl'} font-bold uppercase hover:text-white`}
        >
          {dict['site.title']}
        </Link>
      </div>
      <nav
        className="flex flex-wrap gap-x-2 lg:mt-6 lg:block lg:gap-x-8"
        aria-label="Main menu"
      >
        <Link
          href={`/${lang}`}
          className="my-2 flex cursor-pointer items-center rounded-md p-3 text-xl font-semibold transition-colors hover:bg-neutral-700 hover:text-white lg:my-4 lg:w-full lg:text-3xl"
        >
          <Icons.flag className="mr-2 h-6 w-6 lg:mr-4 lg:h-8 lg:w-8" />
          {dict['nav.flags']}
        </Link>
        <Link
          href={`/${lang}/timeline`}
          className="my-2 flex cursor-pointer items-center rounded-md p-3 text-xl font-semibold transition-colors hover:bg-neutral-700 hover:text-white lg:my-4 lg:w-full lg:text-3xl"
        >
          <Icons.hourglass className="mr-2 h-6 w-6 lg:mr-4 lg:h-8 lg:w-8" />
          {dict['nav.timeline']}
        </Link>
        <Link
          href={`/${lang}/map`}
          className="my-2 flex cursor-pointer items-center rounded-md p-3 text-xl font-semibold transition-colors hover:bg-neutral-700 hover:text-white lg:my-4 lg:w-full lg:text-3xl"
        >
          <Icons.map className="mr-2 h-6 w-6 lg:mr-4 lg:h-8 lg:w-8" />
          {dict['nav.map']}?
        </Link>
        <Link
          href={`/${lang}/about`}
          className="my-2 flex cursor-pointer items-center rounded-md p-3 text-xl font-semibold transition-colors hover:bg-neutral-700 hover:text-white lg:my-4 lg:w-full lg:text-3xl"
        >
          <Icons.helpCircle className="mr-2 h-6 w-6 lg:mr-4 lg:h-8 lg:w-8" />
          {dict['nav.about']}
        </Link>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
