'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { colors } from '@/data/colors-en';

import { BirdIcon } from '../bird-icon';
import { Icons } from '../icons';

const flagSymbols = [
  {
    id: 'star',
    icon: <Icons.star className="h-6 w-6 lg:h-14 lg:w-14" />,
  },
  {
    id: 'weapons',
    icon: <Icons.sword className="h-6 w-6 lg:h-14 lg:w-14" />,
  },
  {
    id: 'tools',
    icon: <Icons.hammer className="h-6 w-6 lg:h-14 lg:w-14" />,
  },
  {
    id: 'animals',
    icon: <Icons.cat className="h-6 w-6 lg:h-14 lg:w-14" />,
  },
  {
    id: 'books',
    icon: <Icons.book className="h-6 w-6 lg:h-14 lg:w-14" />,
  },
  {
    id: 'structures',
    icon: <Icons.castle className="h-6 w-6 lg:h-14 lg:w-14" />,
  },
  {
    id: 'nature',
    icon: <Icons.mountainSnow className="h-6 w-6 lg:h-14 lg:w-14" />,
  },
  {
    id: 'shapes',
    icon: <Icons.circle className="h-6 w-6 lg:h-14 lg:w-14" />,
  },
];

export function FlagsFooter({ lang }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentColor = searchParams.get('color');
  const currentSymbol = searchParams.get('symbol');

  function clickColor(colorName?: string) {
    if (!colorName || colorName === currentColor) {
      return router.push(`/${lang}`);
    }
    router.push(`/${lang}/?color=${colorName}`);
  }

  function clickSymbol(symbolName?: string) {
    if (!symbolName || symbolName === currentSymbol) {
      return router.push(`/${lang}/?symbol=all`);
    }
    router.push(`/${lang}/?symbol=${symbolName}`);
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
              key={symbol.id}
              className={`flex h-full w-full cursor-pointer items-center justify-center ${
                currentSymbol === symbol.id
                  ? 'text-white'
                  : 'text-africamaps hover:text-white'
              }`}
              onClick={() => clickSymbol(symbol.id)}
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
              key={colorGroup.id}
              className="flex h-16 w-full lg:h-24"
              onClick={() => clickColor(colorGroup.id)}
            >
              {colorGroup.values.map((color, index) => (
                <div
                  key={index}
                  className="h-full w-full cursor-pointer"
                  style={{ backgroundColor: color }}
                />
              ))}
              {currentColor === colorGroup.id && (
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
