import { BkmLogo } from '@/components/bkm-logo';
import { Flags } from '@/components/flags/flags';
import { PageWrapper } from '@/components/page-wrapper';

export default async function Page({ params, searchParams }) {
  const color = searchParams?.color;

  function getColorClass(color) {
    const cls = 'pl-3 lg:pl-0 text-6xl lg:text-8xl lg:mt-6 font-bold mb-4 ';
    switch (color) {
      case 'red':
        return cls + 'text-red-600';
      case 'orange':
        return cls + 'text-orange-600';
      case 'yellow':
        return cls + 'text-yellow-400';
      case 'green':
        return cls + 'text-green-600';
      case 'blue':
        return cls + 'text-blue-600';
      case 'black':
        return cls + 'text-white';
      case 'white':
        return cls + 'text-white';
    }
  }

  function getColorName(color) {
    return color.charAt(0).toUpperCase() + color.slice(1);
  }

  return (
    <PageWrapper className="overflow-hidden">
      <div className="mb-24">
        {color && (
          <h2 className={getColorClass(color)}>{getColorName(color)}</h2>
        )}
        <Flags color={color} info={true} />
        <BkmLogo />
      </div>
    </PageWrapper>
  );
}
