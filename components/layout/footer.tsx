import Link from 'next/link';
import { getDictionary } from '@/dictionaries/dictionaries';

import type { NavItem } from '@/types/nav';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';

export function Footer() {
  const dict = getDictionary(); // en

  return (
    <div className="container p-6">
      <div className="mt-10 md:flex md:items-center md:justify-between md:space-x-6">
        <div>
          <Link
            href="/"
            className="mb-2 flex items-center space-x-2 text-xl font-bold"
          >
            {dict['site.title']}
          </Link>
          <p className="text-xs">{dict['footer.text']}</p>
        </div>
        <div className="mt-6 md:mt-0">
          <h5 className="mb-2 text-lg">{dict['footer.marketing.text']}</h5>
        </div>
      </div>
      <nav className="mt-6 mb-10 flex gap-6" aria-label="Main menu">
        <Link
          href="/about"
          className="flex items-center text-lg font-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-100 sm:text-sm"
        >
          {dict['nav.about']}
        </Link>
      </nav>
    </div>
  );
}
