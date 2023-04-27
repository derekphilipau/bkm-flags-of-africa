'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { getDictionary } from '@/dictionaries/dictionaries';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function MainNav() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dict = getDictionary();

  function clickInfo() {
    const info = searchParams?.get('info');
    const color = searchParams?.get('color');
    const params: string[] = [];
    if (color) params.push(`color=${color}`);
    if (!info) params.push(`info=true`);
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
      <nav className="flex lg:mt-12 lg:block" aria-label="Main menu">
        <div
          onClick={() => clickInfo()}
          className="my-4 flex w-full cursor-pointer items-center justify-center rounded-md py-4 text-4xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100"
        >
          <Icons.info className="mr-4 h-10 w-10" />
          {dict['nav.info']}
        </div>
        <Link
          href="/map"
          className="my-4 flex w-full cursor-pointer items-center justify-center rounded-md py-4 text-4xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100"
        >
          <Icons.map className="mr-4 h-10 w-10" />
          {dict['nav.map']}
        </Link>
        <Link
          href="/about"
          className="my-4 flex w-full cursor-pointer items-center justify-center rounded-md py-4 text-4xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100"
        >
          <Icons.helpCircle className="mr-4 h-10 w-10" />
          {dict['nav.about']}
        </Link>
        <Link
          href="/?lang=es"
          className="my-4 hidden w-full cursor-pointer items-center justify-center rounded-md py-4 text-4xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100 lg:flex"
        >
          Español
        </Link>
        <Link
          href="/?lang=zh"
          className="my-4 hidden w-full cursor-pointer items-center justify-center rounded-md py-4 text-4xl font-semibold transition-colors hover:bg-neutral-700 hover:text-neutral-100 lg:flex"
        >
          中文
        </Link>
      </nav>
    </div>
  );
}
