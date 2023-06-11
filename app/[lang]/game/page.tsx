import { BkmLogo } from '@/components/bkm-logo';
import { Flags } from '@/components/flags/flags';
import { FlagQuestion } from '@/components/game/flag-question';
import { Icons } from '@/components/icons';
import { PageWrapper } from '@/components/page-wrapper';

export default async function Page({ params, searchParams }) {
  const questionNumber = searchParams?.i;
  const currentScore = searchParams?.s;

  return (
    <PageWrapper className="overflow-hidden">
      <FlagQuestion />
      <BkmLogo />
    </PageWrapper>
  );
}
