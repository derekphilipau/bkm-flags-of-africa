import Link from 'next/link';
import { getDictionary } from '@/dictionaries/dictionaries';

import { buttonVariants } from '@/components/ui/button';

export default function Page() {
  const dict = getDictionary();

  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex flex-col items-start gap-2">
        <p className="mb-8 text-4xl text-neutral-300">{dict['home.text1']}</p>
        <p className="text-4xl text-neutral-300">{dict['home.text2']}</p>
      </div>
    </section>
  );
}
