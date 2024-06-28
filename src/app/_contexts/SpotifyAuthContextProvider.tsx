'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { AccessToken, WeatherData } from '../_models';

export const SpotifyContext = createContext<{
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string | undefined>>;
  error: string | null;
  setError?: Dispatch<SetStateAction<string | null>>;
}>({ error: null });

export const SpotifyContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);

  return (
    <SpotifyContext.Provider
      value={{ accessToken, setAccessToken, error, setError }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};
