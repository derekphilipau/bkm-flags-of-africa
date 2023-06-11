import Link from 'next/link';

import { Icons } from '@/components/icons';
import LocaleSwitcher from '@/components/locale/locale-switcher';

export function MainNav({ dict }) {
  return (
    <div className="p-4 text-africamaps">
      <div>
        <Link
          href="/"
          className="text-8xl font-bold uppercase hover:text-neutral-100"
        >
          {dict['site.title']}
        </Link>
      </div>
      <nav
        className="flex flex-wrap gap-x-2 lg:mt-12 lg:block lg:gap-x-8"
        aria-label="Main menu"
      >
        <Link
          href="/"
          className="my-2 flex cursor-pointer items-center rounded-md p-3 text-xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100 lg:my-4 lg:w-full lg:text-3xl"
        >
          <Icons.flag className="mr-2 h-6 w-6 lg:mr-4 lg:h-8 lg:w-8" />
          {dict['nav.flags']}
        </Link>
        <Link
          href="/timeline"
          className="my-2 flex cursor-pointer items-center rounded-md p-3 text-xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100 lg:my-4 lg:w-full lg:text-3xl"
        >
          <Icons.hourglass className="mr-2 h-6 w-6 lg:mr-4 lg:h-8 lg:w-8" />
          {dict['nav.timeline']}
        </Link>
        <Link
          href="/map"
          className="my-2 flex cursor-pointer items-center rounded-md p-3 text-xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100 lg:my-4 lg:w-full lg:text-3xl"
        >
          <Icons.map className="mr-2 h-6 w-6 lg:mr-4 lg:h-8 lg:w-8" />
          {dict['nav.map']}?
        </Link>
        <Link
          href="/about"
          className="my-2 flex cursor-pointer items-center rounded-md p-3 text-xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100 lg:my-4 lg:w-full lg:text-3xl"
        >
          <Icons.helpCircle className="mr-2 h-6 w-6 lg:mr-4 lg:h-8 lg:w-8" />
          {dict['nav.about']}
        </Link>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
