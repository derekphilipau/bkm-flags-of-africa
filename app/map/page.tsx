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
        <div className="h-screen w-full">
          <Image src="/img/Map_of_Africa_with_flags.svg" alt="" fill={true} />
        </div>
      </section>
    </PageWrapper>
  );
}
