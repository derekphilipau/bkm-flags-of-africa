'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { colors } from '@/data/colors-en';

import { BirdIcon } from '../bird-icon';
import { Icons } from '../icons';

const flagSymbols = [
  {
    name: 'Star',
    icon: <Icons.star className="h-6 w-6 lg:h-14 lg:w-14" />,
  },
  {
    name: 'Stripes',
    icon: <Icons.alignJustify className="h-6 w-6 lg:h-14 lg:w-14" />,
  },
  {
    name: 'Vertical',
    icon: <Icons.alignJustify className="h-6 w-6 rotate-90 lg:h-14 lg:w-14" />,
  },
  {
    name: 'Circle',
    icon: <Icons.circle className="h-6 w-6 lg:h-14 lg:w-14" />,
  },
  {
    name: 'Crescent',
    icon: <Icons.moon className="h-6 w-6 lg:h-14 lg:w-14" />,
  },
  {
    name: 'Sword',
    icon: <Icons.slice className="h-6 w-6 lg:h-14 lg:w-14" />,
  },
  {
    name: 'Bird',
    icon: <BirdIcon className="h-6 w-6 lg:h-14 lg:w-14" />,
  },
];

export function FlagsColorFooter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentColor = searchParams.get('color');
  const currentSymbol = searchParams.get('symbol');

  function clickColor(colorName?: string) {
    if (!colorName || colorName === currentColor) {
      return router.push('/');
    }
    router.push(`/?color=${colorName}`);
  }

  function clickSymbol(symbolName?: string) {
    if (!symbolName || symbolName === currentSymbol) {
      return router.push('/?symbol=all');
    }
    router.push(`/?symbol=${symbolName}`);
  }

  return (
    <div className="flex h-16 w-full lg:h-24">
      {currentSymbol && (
        <div className="flex h-full w-full cursor-pointer items-center justify-center">
          <div
            className="flex h-full w-full cursor-pointer items-center justify-center text-africamaps hover:text-white"
            onClick={() => clickColor()}
          >
            <Icons.palette className="h-6 w-6 lg:h-14 lg:w-14" />
          </div>
          {flagSymbols.map((symbol) => (
            <div
              key={symbol.name}
              className={`flex h-full w-full cursor-pointer items-center justify-center ${
                currentSymbol === symbol.name
                  ? 'text-white'
                  : 'text-africamaps hover:text-white'
              }`}
              onClick={() => clickSymbol(symbol.name)}
            >
              {symbol.icon}
            </div>
          ))}
        </div>
      )}
      {!currentSymbol && (
        <>
          <div
            className="flex h-full w-full cursor-pointer items-center justify-center"
            onClick={() => clickSymbol('all')}
          >
            <Icons.star className="h-6 w-6 lg:h-14 lg:w-14" />
          </div>
          {colors.map((colorGroup) => (
            <div
              key={colorGroup.name}
              className="flex h-16 w-full lg:h-24"
              onClick={() => clickColor(colorGroup.name)}
            >
              {colorGroup.values.map((color, index) => (
                <div
                  key={index}
                  className="h-full w-full cursor-pointer"
                  style={{ backgroundColor: color }}
                />
              ))}
              {currentColor === colorGroup.name && (
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
            </div>
          ))}
        </>
      )}
    </div>
  );
}
