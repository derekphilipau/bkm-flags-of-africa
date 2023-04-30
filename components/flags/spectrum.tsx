'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { Icons } from '../icons';

const flagColors = [
  {
    color: 'white',
    values: [
      '#fff',
      '#eee',
      '#fffdfd',
      '#fffdff',
      '#fffefe',
      '#ffffff',
      '#eee',
      '#ffffff',
    ],
  },
  {
    color: 'red',
    values: [
      '#b00',
      '#b10c0c',
      '#bc0000',
      '#be0027',
      '#c00',
      '#c1272d',
      '#c4111b',
      '#c70000',
      '#cd2a3e',
      '#ce1021',
      '#ce1126',
      '#cf0921',
      '#d21034',
      '#d40000',
      '#d80000',
      '#d92223',
      '#da121a',
      '#de0000',
      '#de2010',
      '#de2110',
      '#de3108',
      '#de3908',
      '#de3929',
      '#e1392d',
      '#e32118',
      '#e70013',
      '#ee2737',
      '#ef2118',
      '#f00',
      '#f31509',
      '#f41408',
      '#fc3d32',
      '#ff0000',
    ],
  },
  {
    color: 'orange',
    values: [
      '#e05206',
      '#ef7d00',
      '#f7d618',
      '#ff9a00',
      '#ffb915',
      '#ffc400',
      '#ffc621',
      '#ffca00',
      '#ffcd00',
      '#ffce00',
      '#ffce08',
      '#ffd200',
      '#ffd600',
      '#ffd900',
      '#ffe300',
      '#ffe700',
      '#ffec00',
      '#fff300',
    ],
  },
  {
    color: 'yellow',
    values: [
      '#c09300',
      '#e5be01',
      '#f3e295',
      '#fad201',
      '#fc0',
      '#fcd116',
      '#fcd955',
      '#fcdd09',
      '#fe0',
      '#ff0',
      '#FFD700',
      '#fffefe',
    ],
  },
  {
    color: 'green',
    values: [
      '#006233',
      '#006400',
      '#006b3f',
      '#007847',
      '#007a39',
      '#007a3d',
      '#007a5e',
      '#007e3a',
      '#090',
      '#008753',
      '#009543',
      '#009a00',
      '#009a3b',
      '#009e49',
      '#00a04d',
      '#00ca00',
      '#00cd00',
      '#060',
      '#078930',
      '#0b7226',
      '#0c0',
      '#0db02b',
      '#118600',
      '#12ad2b',
      '#20603d',
      '#21873b',
      '#239e46',
      '#298c08',
      '#319400',
      '#35a100',
      '#36a100',
      '#38a100',
      '#3e9a00',
    ],
  },
  {
    color: 'blue',
    values: [
      '#000067',
      '#0000cd',
      '#000c8a',
      '#00209f',
      '#009',
      '#003d88',
      '#006',
      '#006bc6',
      '#006dbc',
      '#0073ce',
      '#007fff',
      '#00a1de',
      '#00cbff',
      '#00f',
      '#09f',
      '#0f47af',
      '#151f6d',
      '#181f6d',
      '#3662a2',
      '#3b5aa3',
      '#3e5eb9',
      '#40a6ff',
      '#69f',
    ],
  },
  {
    color: 'black',
    values: ['#333', '#000', '#111', '#000000', '#222'],
  },
];

export function Spectrum() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentColor = searchParams.get('color');

  function clickColor(colorName?: string) {
    if (!colorName) {
      return router.push('/');
    }
    router.push(`/?color=${colorName}`);
  }

  return (
    <div className="flex h-16 w-full lg:h-24">
      {currentColor && (
        <div
          className="flex h-full w-full cursor-pointer items-center justify-center"
          onClick={() => clickColor()}
        >
          <Icons.circleSlashed className="mx-4 h-8 w-8 lg:h-12 lg:w-12" />
        </div>
      )}
      {flagColors.map((colorGroup) => (
        <Link
          href={`/?color=${colorGroup.color}`}
          key={colorGroup.color}
          className="flex h-16 w-full lg:h-24"
        >
          {colorGroup.values.map((color, index) => (
            <div
              key={index}
              className="h-full w-full cursor-pointer"
              style={{ backgroundColor: color }}
            />
          ))}
          {currentColor === colorGroup.color && (
            <div className="relative z-10">
              <div className="absolute top-2 right-2">
                {currentColor === 'white' ||
                currentColor === 'orange' ||
                currentColor === 'yellow' ? (
                  <Icons.pipette className="h-6 w-6 text-black lg:h-10 lg:w-10" />
                ) : (
                  <Icons.pipette className="h-6 w-6 text-white lg:h-10 lg:w-10" />
                )}
              </div>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
