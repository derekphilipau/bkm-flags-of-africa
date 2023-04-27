'use client';

import { useRouter } from 'next/navigation';

import { Icons } from '../icons';

const flagColors = [
  {
    name: 'white',
    color: '#ffffff',
  },
  {
    name: 'white',
    color: '#f5f5f5',
  },
  {
    name: 'white',
    color: '#eaeaea',
  },
  {
    name: 'white',
    color: '#d9d9d9',
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
    name: 'red',
    color: '#f05252',
  },
  {
    name: 'red',
    color: '#e32626',
  },
  {
    name: 'red',
    color: '#c21818',
  },
  {
    name: 'red',
    color: '#a51a1a',
  },
  {
    name: 'red',
    color: '#9c1f1f',
  },
  {
    name: 'red',
    color: '#841e1e',
  },
  {
    name: 'red',
    color: '#6a2020',
  },
  {
    name: 'red',
    color: '#581b1b',
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
    name: 'orange',
    color: '#f16a1d',
  },
  {
    name: 'orange',
    color: '#d6530a',
  },
  {
    name: 'orange',
    color: '#b8460e',
  },
  {
    name: 'orange',
    color: '#ff7a33',
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
    name: 'yellow',
    color: '#ffd32a',
  },
  {
    name: 'yellow',
    color: '#f4c425',
  },
  {
    name: 'yellow',
    color: '#d9b006',
  },
  {
    name: 'yellow',
    color: '#ebdd3d',
  },
  {
    name: 'yellow',
    color: '#b69400',
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
    name: 'green',
    color: '#2ad573',
  },
  {
    name: 'green',
    color: '#1e9a4b',
  },
  {
    name: 'green',
    color: '#0f8c3a',
  },
  {
    name: 'green',
    color: '#29e08d',
  },
  {
    name: 'green',
    color: '#0c7a31',
  },
  {
    name: 'green',
    color: '#126e42',
  },
  {
    name: 'green',
    color: '#1a5a3a',
  },
  {
    name: 'green',
    color: '#104c28',
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
    name: 'blue',
    color: '#4b9cf9',
  },
  {
    name: 'blue',
    color: '#2f74e7',
  },
  {
    name: 'blue',
    color: '#0f5edc',
  },
  {
    name: 'blue',
    color: '#73b0ff',
  },
  {
    name: 'blue',
    color: '#1947c1',
  },
  {
    name: 'blue',
    color: '#153c9e',
  },
  {
    name: 'blue',
    color: '#1a338b',
  },
  {
    name: 'blue',
    color: '#102767',
  },
  {
    name: 'black',
    color: '#0d0d0d',
  },
  {
    name: 'black',
    color: '#1a1a1a',
  },
  {
    name: 'black',
    color: '#1e1e1e',
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
    <div className="flex h-24 w-full">
      <div
        className="flex h-full w-full cursor-pointer items-center justify-center"
        onClick={() => clickColor()}
      >
        <Icons.circleSlashed className="h-12 w-12 mx-4" />
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
