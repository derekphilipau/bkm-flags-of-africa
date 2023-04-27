import { Flag } from '@/components/flags/flag';
import { PageWrapper } from '@/components/page-wrapper';

export default async function Page({ params }) {
  const countryCode = params.id[0];

  return (
    <PageWrapper className="overflow-hidden">
      <div className="mb-24 p-6">
        <Flag countryCode={countryCode} />
      </div>
    </PageWrapper>
  );
}
