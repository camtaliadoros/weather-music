'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Artist, TrackData } from '../_models';

const track = {
  name: '',
  artists: [{ id: '', name: '' }],
  id: '',
};

type SpotifyContext = {
  deviceId?: string;
  setDeviceId?: Dispatch<SetStateAction<string>>;
  currentTrack: TrackData;
  setCurrentTrack?: Dispatch<SetStateAction<TrackData>>;
  isPaused: boolean;
  setIsPaused?: Dispatch<SetStateAction<boolean>>;
};

export const SpotifyPlayerContext = createContext<SpotifyContext>({
  deviceId: '',
  currentTrack: track,
  isPaused: false,
});

export const SpotifyPlayerContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [deviceId, setDeviceId] = useState('');
  const [currentTrack, setCurrentTrack] = useState<TrackData>(track);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <SpotifyPlayerContext.Provider
      value={{
        deviceId,
        setDeviceId,
        currentTrack,
        setCurrentTrack,
        isPaused,
        setIsPaused,
      }}
    >
      {children}
    </SpotifyPlayerContext.Provider>
  );
};
