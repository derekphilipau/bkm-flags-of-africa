'use client';

import { useRouter } from 'next/navigation';

import { Icons } from '../icons';

const flagColors = [
  {
    name: 'white',
    color: '#ffffff',
  },
  {
    name: 'red',
    color: '#ef4444',
  },
  {
    name: 'red',
    color: '#b91c1c',
  },
  {
    name: 'red',
    color: '#7f1d1d',
  },
  {
    name: 'orange',
    color: '#ea580c',
  },
  {
    name: 'orange',
    color: '#9a3412',
  },
  {
    name: 'yellow',
    color: '#fde047',
  },
  {
    name: 'yellow',
    color: '#eab308',
  },
  {
    name: 'yellow',
    color: '#ca8a04',
  },
  {
    name: 'green',
    color: '#22c55e',
  },
  {
    name: 'green',
    color: '#15803d',
  },
  {
    name: 'green',
    color: '#166534',
  },
  {
    name: 'blue',
    color: '#60a5fa',
  },
  {
    name: 'blue',
    color: '#2563eb',
  },
  {
    name: 'blue',
    color: '#1e40af',
  },
  {
    name: 'black',
    color: '#000000',
  },
];

export function Spectrum() {
  const router = useRouter();

  function clickColor(colorName?: string) {
    if (!colorName) {
      return router.push('/');
    }
    router.push(`/?color=${colorName}`);
  }

  return (
    <div className="flex h-24 w-full ">
      <div
        className="flex h-full w-full cursor-pointer items-center justify-center"
        onClick={() => clickColor()}
      >
        <Icons.circleSlashed className="h-12 w-12" />
      </div>
      {flagColors.map((color) => (
        <div
          key={color.color}
          className="h-full w-full cursor-pointer"
          style={{ backgroundColor: color.color }}
          onClick={() => clickColor(color.name)}
        />
      ))}
    </div>
  );
}
