'use client';

import { useContext, useEffect, useState } from 'react';
import { TrackObject } from '../_models';
import { endpoints, lineArtistsNames } from '@/util/util';
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
  uri: string;
};

export default function Player() {
  const [playingNow, setPlayingNow] = useState<
    NowPlayingTrackData | undefined
  >();
  const [error, setError] = useState<string | null>(null);

  const { accessToken, userType } = useContext(SpotifyContext);

  useEffect(() => {
    const getCurrentlyPlaying = async () => {
      if (accessToken) {
        try {
          const currentlyPlayingJson = await fetch(
            `${endpoints.spotify}/player/currently-playing`,
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
              uri: currentlyPlaying.item.uri,
            };

            setPlayingNow(playingData);
          } else {
            setPlayingNow(undefined);
          }
          setError(null);
        } catch (e) {
          setError('There was an error connecting to the Spotify Player');
        }
      }
    };

    getCurrentlyPlaying();
  }, [accessToken]);

  if (userType !== 'premium' || !userType) {
    return <p>You need a premium account to access the player</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <button>
        <div className='play-icon'></div>
      </button>
      <div>
        {playingNow ? (
          <div>
            <h3>Now Playing:</h3>
            <p>{playingNow && playingNow.trackName}</p>
            <p>{playingNow && playingNow.artists}</p>
          </div>
        ) : (
          <p>Nothing playing right now</p>
        )}
      </div>
    </>
  );
}
