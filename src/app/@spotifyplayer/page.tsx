'use client';

import { faBackward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons/faForward';
import { useContext, useEffect, useState } from 'react';
import { SpotifyContext } from '../_contexts/SpotifyAuthContextProvider';
import { SpotifyPlayerContext } from '../_contexts/SpotifyPlayerContext';
import TrackControlIcon from '@/components/trackControlIcon';

const track = {
  name: '',
  album: {
    images: [{ url: '' }],
  },
  artists: [{ name: '' }],
};

export default function SpotifyPlayer() {
  const [userPlayer, setUserPlayer] = useState(undefined);
  const [isPaused, setIsPaused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(track);

  const { accessToken, userType } = useContext(SpotifyContext);
  const { setDeviceId } = useContext(SpotifyPlayerContext);

  useEffect(() => {
    if (accessToken) {
      const script = document.createElement('script');
      script.src = 'https://sdk.scdn.co/spotify-player.js';
      script.async = true;

      document.body.appendChild(script);

      window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new window.Spotify.Player({
          name: 'Web Playback SDK',
          getOAuthToken: (cb) => {
            cb(accessToken);
          },
          volume: 0.5,
        });

        player.addListener('ready', ({ device_id }) => {
          console.log('Ready with Device ID', device_id);
          setDeviceId(device_id);
        });

        player.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
        });

        player.addListener('player_state_changed', (state) => {
          if (!state) {
            return;
          }

          setCurrentTrack(state.track_window.current_track);
          setIsPaused(state.paused);

          player.getCurrentState().then((state) => {
            !state ? setIsActive(false) : setIsActive(true);
          });
        });

        player.connect();

        setUserPlayer(player);
      };
    }
  }, [accessToken]);

  if (userType !== 'premium' || !userType) {
    return <p>You need a premium account to access the player</p>;
  }

  return (
    <div className='flex flex-col justify-center items-center h-full py-8'>
      <div className='h-1/3 flex items-center'>
        <TrackControlIcon
          icon={faBackward}
          action={() => userPlayer.previousTrack()}
        />

        {isPaused ? (
          <TrackControlIcon
            icon={faPlay}
            action={() => userPlayer.togglePlay()}
          />
        ) : (
          <TrackControlIcon
            icon={faPause}
            action={() => userPlayer.togglePlay()}
          />
        )}

        <TrackControlIcon
          icon={faForward}
          action={() => userPlayer.nextTrack()}
        />
      </div>
      <div className='h-2/3 flex flex-col items-center justify-center'>
        <h5>{currentTrack.name}</h5>
        <h6>{currentTrack.artists[0].name}</h6>
      </div>
    </div>
  );
}
