import Image from 'next/image';
import { getDictionary } from '@/get-dictionary';

export default async function Page({ params: { lang }, searchParams }) {
  const dict = await getDictionary(lang);

  return (
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
  );
}
