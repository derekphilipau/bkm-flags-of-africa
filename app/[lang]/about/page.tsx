import { colors as colorsEn } from '@/data/colors-en';
import { colors as colorsEs } from '@/data/colors-es';
import { getDictionary } from '@/get-dictionary';

import { BkmLogo } from '@/components/bkm-logo';

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const colors = lang === 'es' ? colorsEs : colorsEn;

  return (
    <section className="container mb-24 grid items-center gap-6 pt-6 pb-8">
      <h2 className="text-4xl font-semibold lg:text-6xl">About</h2>
      <p className="mb-8  font-serif text-2xl font-normal ">
        {dict['home.text1']}
      </p>
      <p className="mb-8  font-serif text-2xl font-normal ">
        {dict['home.text2']}
      </p>

      <h2 className="my-4 text-4xl font-semibold lg:text-6xl">Flag Colors</h2>
      {colors.map((color) => (
        <div key={color.name}>
          <h3
            className={`my-8 text-2xl font-semibold lg:text-4xl ${color.cssColor}`}
          >
            {color.name}
          </h3>
          <p className="font-serif text-2xl font-normal text-neutral-300 ">
            {color.text}
          </p>
        </div>
      ))}

      <BkmLogo />
    </section>
  );
}
