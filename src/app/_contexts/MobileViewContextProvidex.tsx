'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

type MobileViewContextType = {
  view: string;
  setView?: Dispatch<SetStateAction<string>>;
};

export const MobileViewContext = createContext<MobileViewContextType>({
  view: 'weather',
});

export default function MobileViewContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [view, setView] = useState('weather');

  return (
    <MobileViewContext.Provider value={{ view, setView }}>
      {children}
    </MobileViewContext.Provider>
  );
}
