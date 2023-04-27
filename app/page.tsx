import { Flags } from '@/components/flags/flags';
import { PageWrapper } from '@/components/page-wrapper';

export default async function Page({ params, searchParams }) {
  const color = searchParams?.color;
  const info = searchParams?.info ? true : false;
  console.log('my color is ' + color);
  return (
    <PageWrapper className="overflow-hidden">
      <Flags color={color} info={info} />
    </PageWrapper>
  );
}
