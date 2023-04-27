import { Flags } from '@/components/flags/flags';
import { PageWrapper } from '@/components/page-wrapper';

export default async function Page({ params, searchParams }) {
  const color = searchParams?.color;
  const info = searchParams?.info ? true : false;
  return (
    <PageWrapper className="overflow-hidden">
      <div className="mb-24">
        <Flags color={color} info={info} />
      </div>
    </PageWrapper>
  );
}
