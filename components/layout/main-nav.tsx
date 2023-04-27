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
      <div className="mt-12">
        <nav className="" aria-label="Main menu">
          <div
            onClick={() => clickInfo()}
            className="my-8 flex cursor-pointer items-center text-4xl font-semibold hover:text-neutral-100"
          >
            <Icons.info className="mr-4 h-10 w-10" />
            {dict['nav.info']}
          </div>
          <Link
            href="/map"
            className="my-8 flex items-center text-4xl font-semibold hover:text-neutral-100"
          >
            <Icons.map className="mr-4 h-10 w-10" />
            {dict['nav.map']}
          </Link>
          <Link
            href="/about"
            className="my-8 flex items-center text-4xl font-semibold hover:text-neutral-100"
          >
            <Icons.helpCircle className="mr-4 h-10 w-10" />
            {dict['nav.about']}
          </Link>
          <div className="my-8 flex items-start text-4xl">
            <div className="flex items-start">
              <Icons.languages className="mr-4 h-10 w-10" />
            </div>
            <div>
              <Link
                href="/?lang=en"
                className="flex items-center text-4xl font-semibold hover:text-neutral-100"
              >
                English
              </Link>
              <Link
                href="/?lang=es"
                className="mt-4 flex items-center text-4xl font-semibold hover:text-neutral-100"
              >
                Español
              </Link>
              <Link
                href="/?lang=zh"
                className="mt-4 flex items-center text-4xl font-semibold hover:text-neutral-100"
              >
                中文
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="-ml-4 text-2xl font-bold hover:bg-transparent focus:ring-0 md:hidden"
            aria-label="Open Menu"
          >
            <Icons.menu className="mr-4 h-5 w-5" />
            <span className="font-bold">{dict['site.title']}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={24}
          className="w-[300px] overflow-scroll"
        >
          <DropdownMenuLabel>
            <Link href="/" className="flex items-center">
              {dict['site.title']}
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link role="button" href="/about">
              {dict['nav.info']}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link role="button" href="/about">
              {dict['nav.about']}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
