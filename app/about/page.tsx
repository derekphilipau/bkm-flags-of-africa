import Link from 'next/link';
import { getDictionary } from '@/dictionaries/dictionaries';

import { BkmLogo } from '@/components/bkm-logo';

export default function Page() {
  const dict = getDictionary();

  return (
    <section className="container mb-24 grid items-center gap-6 pt-6 pb-8 md:py-10">
      <h2 className="my-4 text-6xl font-semibold lg:text-8xl">About</h2>
      <p className="mb-8 text-2xl text-neutral-300 lg:text-4xl">
        {dict['home.text1']}
      </p>
      <p className="mb-8 text-2xl text-neutral-300 lg:text-4xl">
        {dict['home.text2']}
      </p>
      <h2 className="text-6xl font-semibold text-red-600 lg:text-8xl">Red</h2>
      <p className="mb-8 text-2xl text-neutral-300 lg:text-4xl">
        Often symbolizes the blood shed during the struggle for independence or
        freedom, as well as bravery and valor. It can also represent the
        strength, unity, and determination of the people.
      </p>

      <h2 className="my-4 text-6xl font-semibold text-green-600 lg:text-8xl">
        Green
      </h2>
      <p className="mb-8 text-2xl text-neutral-300 lg:text-4xl">
        Typically represents agriculture, natural resources, and the lush
        vegetation found across the continent. It can also signify growth, hope,
        and progress for the nation.
      </p>

      <h2 className="my-4 text-6xl font-semibold text-blue-600 lg:text-8xl">
        Blue
      </h2>
      <p className="mb-8 text-2xl text-neutral-300 lg:text-4xl">
        Commonly symbolizes water, the sky, or the sea, which are important
        features for many African countries. It can also signify peace,
        stability, and tranquility.
      </p>

      <h2 className="text-6xl font-semibold text-yellow-400 lg:text-8xl">
        Yellow
      </h2>
      <p className="my-4 mb-8 text-2xl text-neutral-300 lg:text-4xl">
        Frequently represents the sun, warmth, and light. It can also symbolize
        wealth, prosperity, and mineral resources found in the country.
      </p>

      <h2 className="my-4 text-6xl font-semibold text-white lg:text-8xl">
        White
      </h2>
      <p className="mb-8 text-2xl text-neutral-300 lg:text-4xl">
        Often signifies peace, purity, and unity. It can also represent harmony
        and the peaceful coexistence of different ethnic groups within the
        country.
      </p>

      <h2 className="my-4 text-6xl font-semibold text-black lg:text-8xl">
        Black
      </h2>
      <p className="mb-8 text-2xl text-neutral-300 lg:text-4xl">
        Typically symbolizes the people and their identity, as well as the
        African continent itself. It can also represent strength, resilience,
        and determination.
      </p>

      <Link href="https://brooklynmuseum.org">
        <BkmLogo className="mt-20 w-96 fill-neutral-600" />
      </Link>
    </section>
  );
}
