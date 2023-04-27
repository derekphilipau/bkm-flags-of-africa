import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '@/dictionaries/dictionaries';

import { PageWrapper } from '@/components/page-wrapper';
import { buttonVariants } from '@/components/ui/button';

export default function Page() {
  const dict = getDictionary();

  return (
    <PageWrapper className="overflow-hidden">
      <section className="relative">
        <div className="flex h-screen justify-end">
          <Image
            src="/img/Map_of_Africa_with_flags.svg"
            alt=""
            height={800}
            width={800}
          />
        </div>
      </section>
    </PageWrapper>
  );
}
