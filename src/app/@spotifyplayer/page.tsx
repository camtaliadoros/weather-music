'use client';

import { TrackArtists } from '@/components/trackArtists';
import TrackControlIcon from '@/components/trackControlIcon';
import { TrackName } from '@/components/trackName';
import { faBackward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons/faForward';
import { useContext, useEffect, useState } from 'react';
import { SpotifyContext } from '../_contexts/SpotifyAuthContextProvider';
import { SpotifyPlayerContext } from '../_contexts/SpotifyPlayerContext';
import { TrackData } from '../_models';

type DeviceId = {
  device_id: string;
};

type State = {
  track_window: TrackWindow;
  paused: boolean;
};

type TrackWindow = {
  current_track: TrackData;
};

export default function SpotifyPlayer() {
  const [userPlayer, setUserPlayer] = useState<SpotifyPlayer | undefined>(
    undefined
  );

  const { accessToken, userType } = useContext(SpotifyContext);
  const { setDeviceId, currentTrack, setCurrentTrack, isPaused, setIsPaused } =
    useContext(SpotifyPlayerContext);

  useEffect(() => {
    if (accessToken) {
      const script = document.createElement('script');
      script.src = 'https://sdk.scdn.co/spotify-player.js';
      script.async = true;

      document.body.appendChild(script);

      window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new window.Spotify.Player({
          name: 'Beateorology Player',
          getOAuthToken: (cb) => {
            cb(accessToken);
          },
          volume: 0.5,
        });

        player.addListener('ready', ({ device_id }: DeviceId) => {
          setDeviceId?.(device_id);
        });

        player.addListener('not_ready', ({ device_id }: DeviceId) => {
          console.log('Device ID has gone offline', device_id);
        });

        player.addListener('player_state_changed', (state: State) => {
          console.log(state);
          if (!state) {
            return;
          }

          const trackData = {
            name: state.track_window.current_track.name,
            artists: state.track_window.current_track.artists,
            id: state.track_window.current_track.id,
          };

          setCurrentTrack?.(trackData);
          setIsPaused?.(state.paused);
        });

        player.connect();

        setUserPlayer(player);
      };
    }
  }, [accessToken, setDeviceId, setCurrentTrack, setIsPaused]);

  if (userType !== 'premium' || !userType) {
    return <p>You need a premium account to access the player</p>;
  }

  return (
    <div className='flex flex-col justify-center items-center h-full py-8'>
      <div className='h-1/3 flex items-center'>
        <TrackControlIcon
          icon={faBackward}
          action={() => userPlayer?.previousTrack()}
        />

        {isPaused ? (
          <TrackControlIcon
            icon={faPlay}
            action={() => userPlayer?.togglePlay()}
          />
        ) : (
          <TrackControlIcon
            icon={faPause}
            action={() => userPlayer?.togglePlay()}
          />
        )}

        <TrackControlIcon
          icon={faForward}
          action={() => userPlayer?.nextTrack()}
        />
      </div>
      <div className='h-2/3 flex flex-col items-center justify-center'>
        <TrackName track={currentTrack.name} />
        <TrackArtists artists={currentTrack.artists} />
      </div>
    </div>
  );
}
