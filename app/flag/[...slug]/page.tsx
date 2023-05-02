import { Flag } from '@/components/flags/flag';
import { PageWrapper } from '@/components/page-wrapper';

export default async function Page({ params, searchParams }) {
  const countryCode = params.slug[0];
  const isFromTimeline = searchParams?.timeline === 'true';

  return (
    <PageWrapper className="overflow-hidden">
      <div className="mb-4 p-6">
        <Flag countryCode={countryCode} isFromTimeline={isFromTimeline} />
      </div>
    </PageWrapper>
  );
}
