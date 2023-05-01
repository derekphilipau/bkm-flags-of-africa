import { flagSymbols } from '@/data/symbols';

import { BkmLogo } from '@/components/bkm-logo';
import { Flags } from '@/components/flags/flags';
import { PageWrapper } from '@/components/page-wrapper';

export default async function Page({ params, searchParams }) {
  const color = searchParams?.color;
  const symbol = searchParams?.symbol;
  const flagSymbol = flagSymbols.find((s) => s.name === symbol);

  function getColorClass(color) {
    const cls = 'pl-3 lg:pl-0 text-6xl lg:text-8xl lg:mt-6 font-bold mb-4 ';
    switch (color) {
      case 'red':
        return cls + 'text-red-600';
      case 'orange':
        return cls + 'text-orange-600';
      case 'yellow':
        return cls + 'text-yellow-400';
      case 'green':
        return cls + 'text-green-600';
      case 'blue':
        return cls + 'text-blue-600';
      case 'black':
        return cls + 'text-white';
      case 'white':
        return cls + 'text-white';
    }
  }

  function getColorName(color) {
    return color.charAt(0).toUpperCase() + color.slice(1);
  }

  return (
    <PageWrapper className="overflow-hidden">
      <div className="mb-24">
        {color && (
          <h2 className={getColorClass(color)}>{getColorName(color)}</h2>
        )}
        {symbol && symbol !== 'all' && (
          <>
            <h2 className="pl-3 lg:pl-0 text-6xl lg:text-8xl lg:mt-6 font-bold mb-4 text-white">
              {symbol}
            </h2>
            {flagSymbol && (
              <p className="mb-8 text-2xl text-neutral-300 lg:text-4xl">
                {flagSymbol.text}
              </p>
            )}
          </>
        )}
        <Flags color={color} info={true} />
        <BkmLogo />
      </div>
    </PageWrapper>
  );
}
