import { BkmLogo } from '@/components/bkm-logo';
import { FlagQuestion } from '@/components/game/flag-question';

export default async function Page({ params, searchParams }) {
  const questionNumber = searchParams?.i;
  const currentScore = searchParams?.s;

  return (
    <div className="mb-4 px-6 lg:py-6">
      <FlagQuestion />
      <BkmLogo />
    </div>
  );
}
