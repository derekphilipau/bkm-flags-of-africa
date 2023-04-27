import { flags } from '@/data/flags';

import { Flag } from '@/components/flags/flag';
import { PageWrapper } from '@/components/page-wrapper';

export default async function Page({ params }) {
  const flagId = params.id[0];
  const flag = flags.find((flag) => flag.id === flagId);
  console.log('found', flag);

  return (
    <PageWrapper className="overflow-hidden">
      <div className="p-6">
        <Flag flag={flag} />
      </div>
    </PageWrapper>
  );
}
