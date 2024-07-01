'use client';

import { getAccessToken, redirectToAuthCodeFlow } from '@/util/spotifyAuth';
import { endpoints } from '@/util/util';
import {
  MutableRefObject,
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react';

type ProfileDataType = {
  product: string | null;
};

export const SpotifyContext = createContext<{
  accessToken?: string;
  error: string | null;
  userType: string | null;
}>({ error: null, userType: null });

export const SpotifyContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [accessToken, setAccessToken] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [userType, setUserType] = useState<string | null>(null);

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

    if (accessToken) {
      const getUserProfileData = async () => {
        try {
          const profileJson = await fetch(endpoints.spotify, {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
          });

          const profileData = (await profileJson.json()) as ProfileDataType;
          setUserType(profileData.product);
        } catch (e) {
          console.log('Could not retrieve user data');
        }
      };
      getUserProfileData();
    }
  }, [code, accessToken]);

  return (
    <SpotifyContext.Provider value={{ accessToken, error, userType }}>
      {children}
    </SpotifyContext.Provider>
  );
};
