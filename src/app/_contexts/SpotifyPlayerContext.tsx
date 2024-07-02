'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

type SpotifyContext = {
  deviceId?: string;
  setDeviceId?: Dispatch<SetStateAction<string>>;
};

export const SpotifyPlayerContext = createContext<SpotifyContext>({
  deviceId: '',
});

export const SpotifyPlayerContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [deviceId, setDeviceId] = useState('');

  return (
    <SpotifyPlayerContext.Provider value={{ deviceId, setDeviceId }}>
      {children}
    </SpotifyPlayerContext.Provider>
  );
};
