'use client';

import { MobileViewContext } from '@/app/_contexts/MobileViewContextProvidex';
import { useContext } from 'react';

export const Column = ({ children }: { children: React.ReactNode }) => {
  const { view } = useContext(MobileViewContext);

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-0 min-w-full md:w-1/2 transition ${
        view === 'playlist' ? 'mobile-view-playlist' : null
      }`}
    >
      {children}
    </div>
  );
};
