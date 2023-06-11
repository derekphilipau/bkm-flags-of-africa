import { getDictionary } from '@/get-dictionary';
import { i18n } from '@/i18n-config';

import { Flag } from '@/components/flags/flag';

export default async function Page({ params, searchParams }) {
  const lang = params?.lang || i18n.defaultLocale;
  const dict = await getDictionary(lang);
  const countryCode = params.slug[0];
  const isFromTimeline = searchParams?.timeline === 'true';

  return (
    <div className="mb-4 px-6 lg:py-6">
      <Flag
        countryCode={countryCode}
        isFromTimeline={isFromTimeline}
        lang={lang}
        dict={dict}
      />
    </div>
  );
}
