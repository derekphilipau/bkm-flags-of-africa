import { colors as colorsEn } from '@/data/colors-en';
import { colors as colorsEs } from '@/data/colors-es';
import { symbols as symbolsEn } from '@/data/symbols-en';
import { symbols as symbolsEs } from '@/data/symbols-es';
import { getDictionary } from '@/get-dictionary';

import { BkmLogo } from '@/components/bkm-logo';
import { Flags } from '@/components/flags/flags';

export default async function Page({ params: { lang }, searchParams }) {
  const dict = await getDictionary(lang);
  const colors = lang === 'es' ? colorsEs : colorsEn;
  const symbols = lang === 'es' ? symbolsEs : symbolsEn;

  const color = searchParams?.color;
  const symbol = searchParams?.symbol;
  const symbolInfo = symbols.find((s) => s.id === symbol);
  const colorInfo = colors.find((c) => c.id === color);

  return (
    <div className="mb-24 lg:py-6 lg:pr-4">
      {color && (
        <>
          <h2
            className={`text-4xl font-semibold lg:text-6xl ${colorInfo?.cssColor}`}
          >
            {colorInfo?.name}
          </h2>
          <p className="mt-6 mb-8 font-serif text-2xl font-normal text-neutral-300">
            {colorInfo?.text}
          </p>
        </>
      )}
      {symbol && symbol !== 'all' && (
        <>
          <h2 className="text-4xl font-semibold lg:text-6xl">
            {symbolInfo?.name}
          </h2>
          {symbolInfo && (
            <p className="mt-6 mb-8 font-serif text-2xl font-normal text-neutral-300">
              {symbolInfo?.text}
            </p>
          )}
        </>
      )}
      <Flags color={color} info={true} lang={lang} />
      <BkmLogo />
    </div>
  );
}
