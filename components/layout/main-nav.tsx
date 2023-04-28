'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries/dictionaries';

import { Icons } from '@/components/icons';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

export function MainNav() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dict = getDictionary();
  const info = searchParams?.get('info');
  const color = searchParams?.get('color');

  function clickInfo(checked) {
    const params: string[] = [];
    if (color) params.push(`color=${color}`);
    if (checked) params.push(`info=true`);
    const url = `/?${params.join('&')}`;
    router.push(url);
  }

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
        className="flex flex-wrap gap-x-8 lg:mt-12 lg:block"
        aria-label="Main menu"
      >
        <Link
          href="/"
          className="my-4 flex cursor-pointer items-center rounded-md p-4 text-4xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100 lg:w-full"
        >
          <Icons.home className="mr-4 h-10 w-10" />
          {dict['nav.home']}
        </Link>
        <Link
          href="/timeline"
          className="my-4 flex cursor-pointer items-center rounded-md p-4 text-4xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100 lg:w-full"
        >
          <Icons.hourglass className="mr-4 h-10 w-10" />
          {dict['nav.timeline']}
        </Link>
        <Link
          href="/map"
          className="my-4 flex cursor-pointer items-center rounded-md p-4 text-4xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100 lg:w-full"
        >
          <Icons.map className="mr-4 h-10 w-10" />
          {dict['nav.map']}
        </Link>
        <Link
          href="/about"
          className="my-4 flex cursor-pointer items-center rounded-md p-4 text-4xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100 lg:w-full"
        >
          <Icons.helpCircle className="mr-4 h-10 w-10" />
          {dict['nav.about']}
        </Link>
        {pathname === '/' && (
          <div className="my-4 flex items-center justify-center rounded-md py-4 text-4xl font-semibold transition-colors lg:w-full">
            <Switch
              id="switch-info"
              onCheckedChange={(checked) => clickInfo(checked)}
              checked={info}
              aria-labelledby={`label-${name}`}
            />
            <Label
              htmlFor="switch-info"
              id="label-switch-info"
              className="ml-4 text-4xl font-semibold leading-none hover:text-neutral-100 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {dict['nav.info']}
            </Label>
          </div>
        )}

        {/*
        <Link
          href="/?lang=es"
          className="my-4 hidden w-full cursor-pointer items-center rounded-md py-4 text-4xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100 lg:flex"
        >
          Español
        </Link>
        <Link
          href="/?lang=zh"
          className="my-4 hidden w-full cursor-pointer items-center rounded-md py-4 text-4xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100 lg:flex"
        >
          中文
        </Link>
  */}
      </nav>
    </div>
  );
}
