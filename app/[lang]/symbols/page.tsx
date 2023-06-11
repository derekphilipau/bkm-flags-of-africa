import { getDictionary } from '@/get-dictionary';

import { BkmLogo } from '@/components/bkm-logo';
import { Flags } from '@/components/flags/flags';
import { Icons } from '@/components/icons';

export default async function Page({ params: { lang }, searchParams }) {
  const dict = await getDictionary(lang);
  const color = searchParams?.color;

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
    <div className="mb-24">
      {color && <h2 className={getColorClass(color)}>{getColorName(color)}</h2>}
      <div className="px-4">
        <h1 className="mb-4 flex pl-3 text-6xl font-bold lg:mt-6 lg:pl-0 lg:text-8xl">
          <Icons.star className="mr-2 h-6 w-6 lg:mr-4 lg:h-24 lg:w-24" /> Star
        </h1>
        <p className="mb-8 text-2xl text-neutral-300 lg:text-4xl">
          In general, the star symbol on African country flags often represents
          unity, freedom, and aspirations for a brighter future. The star can
          signify the unity of diverse peoples or regions within a nation,
          coming together to work towards common goals. It can also symbolize
          the struggle for independence and the sacrifices made by those who
          fought for freedom. Furthermore, the star serves as a beacon of hope
          and progress, shining light on the path towards a prosperous and
          harmonious future for the nation. While each African country may have
          slight variations in the interpretation of the star, these themes of
          unity, freedom, and aspirations are common threads that run through
          the symbolism across the continent.
        </p>
      </div>
      <Flags color={color} info={true} lang={lang} />
      <BkmLogo />
    </div>
  );
}
