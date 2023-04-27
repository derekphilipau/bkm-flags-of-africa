import Link from 'next/link';
import { getDictionary } from '@/dictionaries/dictionaries';

import { buttonVariants } from '@/components/ui/button';

export default function Page() {
  const dict = getDictionary();

  return (
    <section className="container mb-24 grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="">
        <h2 className="text-8xl font-semibold">About</h2>
        <p className="mb-8 text-4xl text-neutral-300">{dict['home.text1']}</p>
        <p className="mb-8 text-4xl text-neutral-300">{dict['home.text2']}</p>
        <h2 className="text-8xl font-semibold text-red-600">Red</h2>
        <p className="mb-8 text-4xl text-neutral-300">
          Often symbolizes the blood shed during the struggle for independence
          or freedom, as well as bravery and valor. It can also represent the
          strength, unity, and determination of the people.
        </p>

        <h2 className="text-8xl font-semibold text-green-600">Green</h2>
        <p className="mb-8 text-4xl text-neutral-300">
          Typically represents agriculture, natural resources, and the lush
          vegetation found across the continent. It can also signify growth,
          hope, and progress for the nation.
        </p>

        <h2 className="text-8xl font-semibold text-blue-600">Blue</h2>
        <p className="mb-8 text-4xl text-neutral-300">
          Commonly symbolizes water, the sky, or the sea, which are important
          features for many African countries. It can also signify peace,
          stability, and tranquility.
        </p>

        <h2 className="text-8xl font-semibold text-yellow-400">Yellow</h2>
        <p className="mb-8 text-4xl text-neutral-300">
          Frequently represents the sun, warmth, and light. It can also
          symbolize wealth, prosperity, and mineral resources found in the
          country.
        </p>

        <h2 className="text-8xl font-semibold text-white">White</h2>
        <p className="mb-8 text-4xl text-neutral-300">
          Often signifies peace, purity, and unity. It can also represent
          harmony and the peaceful coexistence of different ethnic groups within
          the country.
        </p>

        <h2 className="text-8xl font-semibold text-black">Black</h2>
        <p className="mb-8 text-4xl text-neutral-300">
          Typically symbolizes the people and their identity, as well as the
          African continent itself. It can also represent strength, resilience,
          and determination.
        </p>
      </div>
    </section>
  );
}
