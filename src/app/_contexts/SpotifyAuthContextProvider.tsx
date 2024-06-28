'use client';

import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { AccessToken, WeatherData } from '../_models';
import { getAccessToken, redirectToAuthCodeFlow } from '@/util/spotifyAuth';

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
        if (!code && !accessToken) {
          redirectToAuthCodeFlow();
        } else {
          const token = await getAccessToken(code);
          window.history.replaceState(undefined, '', '/');
          setAccessToken?.(token);
        }
      };
      getSpotifyAccess();
    } catch (e) {
      setError('Could not access your Spotify account, please try again');
    }
  }, []);

  return (
    <SpotifyContext.Provider value={{ accessToken, error }}>
      {children}
    </SpotifyContext.Provider>
  );
};
