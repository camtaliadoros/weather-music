'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Artist } from '../_models';

const track = {
  name: '',
  artists: [{ id: '', name: '' }],
  id: '',
};

type TrackData = {
  name: string;
  artists: Artist[];
  id: string;
};

type SpotifyContext = {
  deviceId?: string;
  setDeviceId?: Dispatch<SetStateAction<string>>;
  currentTrack: TrackData;
  setCurrentTrack?: Dispatch<SetStateAction<TrackData>>;
};

export const SpotifyPlayerContext = createContext<SpotifyContext>({
  deviceId: '',
  currentTrack: track,
});

export const SpotifyPlayerContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [deviceId, setDeviceId] = useState('');
  const [currentTrack, setCurrentTrack] = useState<TrackData>(track);

  return (
    <SpotifyPlayerContext.Provider
      value={{ deviceId, setDeviceId, currentTrack, setCurrentTrack }}
    >
      {children}
    </SpotifyPlayerContext.Provider>
  );
};
