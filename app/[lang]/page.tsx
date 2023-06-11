import { colors as colorsEn } from '@/data/colors-en';
import { colors as colorsEs } from '@/data/colors-es';
import { flagSymbols } from '@/data/symbols';

import { BkmLogo } from '@/components/bkm-logo';
import { Flags } from '@/components/flags/flags';
import { PageWrapper } from '@/components/page-wrapper';
import { getDictionary } from '@/get-dictionary';

export default async function Page({ params: { lang }, searchParams }) {
  const dict = await getDictionary(lang)
  const colors = lang === 'es' ? colorsEs : colorsEn;

  const color = searchParams?.color;
  const symbol = searchParams?.symbol;
  const flagSymbol = flagSymbols.find((s) => s.name === symbol);
  const colorInfo = colors.find((c) => c.name === color);

  return (
    <PageWrapper className="overflow-hidden">
      <div className="mb-24">
        {color && (
          <>
            <h2
              className={`mb-4 pl-3 text-6xl font-bold lg:mt-6 lg:pl-0 lg:text-8xl ${colorInfo?.cssColor}`}
            >
              {color}
            </h2>
            <p className="mb-8 text-2xl text-neutral-300 lg:text-4xl">
              {colorInfo?.text}
            </p>
          </>
        )}
        {symbol && symbol !== 'all' && (
          <>
            <h2 className="mb-4 pl-3 text-6xl font-bold text-white lg:mt-6 lg:pl-0 lg:text-8xl">
              {symbol}
            </h2>
            {flagSymbol && (
              <p className="mb-8 text-2xl text-neutral-300 lg:text-4xl">
                {flagSymbol.text}
              </p>
            )}
          </>
      )}
        <Flags color={color} info={true} lang={lang} />
        <BkmLogo />
      </div>
    </PageWrapper>
  );
}