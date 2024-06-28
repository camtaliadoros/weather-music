'use client';

import { getAccessToken, redirectToAuthCodeFlow } from '@/util/spotifyAuth';
import { createContext, useEffect, useState } from 'react';

export const SpotifyContext = createContext<{
  accessToken?: string;
  error: string | null;
}>({ error: null });

export const SpotifyContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);

  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  useEffect(() => {
    try {
      const getSpotifyAccess = async () => {
        if (!accessToken) {
          if (!code) {
            redirectToAuthCodeFlow();
          } else {
            const token = await getAccessToken(code);
            if (token) {
              window.history.replaceState(undefined, '', '/');
              setAccessToken?.(token);
            }
          }
        }
      };
      getSpotifyAccess();
    } catch (e) {
      setError('Could not access your Spotify account, please try again');
    }
  }, [code, accessToken]);

  return (
    <SpotifyContext.Provider value={{ accessToken, error }}>
      {children}
    </SpotifyContext.Provider>
  );
};
