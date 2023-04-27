import { countries } from '@/data/countries';

import { Flag } from '@/components/flags/flag';
import { PageWrapper } from '@/components/page-wrapper';

export default async function Page({ params }) {
  const countryCode = params.id[0];
  const country = countries.find((country) => country.code === countryCode);

  return (
    <PageWrapper className="overflow-hidden">
      <div className="p-6 mb-24">
        <Flag country={country} />
      </div>
    </PageWrapper>
  );
}
