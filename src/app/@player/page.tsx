'use client';

import { useContext, useEffect, useState } from 'react';
import { TrackObject } from '../_models';
import { lineArtistsNames } from '@/util/util';
import { SpotifyContext } from '../_contexts/SpotifyAuthContextProvider';

type CurrentlyPlaying = {
  progress_ms: number;
  is_playing: boolean;
  item: TrackObject;
};

type NowPlayingTrackData = {
  progress: number;
  isPlaying: boolean;
  trackName: string;
  artists: string;
};

export default function Player() {
  const [playingNow, setPlayingNow] = useState<
    string | NowPlayingTrackData | undefined
  >();
  const [error, setError] = useState<string | null>(null);

  const { accessToken } = useContext(SpotifyContext);

  useEffect(() => {
    const getCurrentlyPlaying = async () => {
      if (accessToken) {
        try {
          const currentlyPlayingJson = await fetch(
            'https://api.spotify.com/v1/me/player/currently-playing',
            {
              method: 'GET',
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          );
          if (currentlyPlayingJson) {
            const currentlyPlaying =
              (await currentlyPlayingJson.json()) as CurrentlyPlaying;

            const playingData = {
              trackName: currentlyPlaying.item?.name,
              artists: lineArtistsNames(currentlyPlaying.item.artists),
              progress: currentlyPlaying.progress_ms,
              isPlaying: currentlyPlaying.is_playing,
            };

            setPlayingNow(playingData);
          } else {
            setPlayingNow('Nothing playing right now');
          }
          setError(null);
        } catch (e) {
          setError('There was an error connecting to the Spotify Player');
        }
      }
    };

    getCurrentlyPlaying();
  }, [accessToken]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <p>Now Playing:</p>
      <p>{playingNow && playingNow.trackName}</p>
      <p>{playingNow && playingNow.artists}</p>
    </>
  );
}
