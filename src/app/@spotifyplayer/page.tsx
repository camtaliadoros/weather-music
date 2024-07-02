'use client';

import React, { useState, useEffect, useContext } from 'react';
import { SpotifyContext } from '../_contexts/SpotifyAuthContextProvider';
import { SpotifyPlayerContext } from '../_contexts/SpotifyPlayerContext';

const track = {
  name: '',
  album: {
    images: [{ url: '' }],
  },
  artists: [{ name: '' }],
};

export default function SpotifyPlayer() {
  const [userPlayer, setUserPlayer] = useState(undefined);
  const [is_paused, setPaused] = useState(false);
  const [is_active, setActive] = useState(false);
  const [current_track, setTrack] = useState(track);

  const { accessToken } = useContext(SpotifyContext);
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

          setTrack(state.track_window.current_track);
          setPaused(state.paused);

          player.getCurrentState().then((state) => {
            !state ? setActive(false) : setActive(true);
          });
        });

        player.connect();

        setUserPlayer(player);
      };
    }
  }, [accessToken]);

  return (
    <>
      <div className='container'>
        <div className='main-wrapper'>
          <div className='now-playing__side'>
            <div className='now-playing__name'>{current_track.name}</div>

            <div className='now-playing__artist'>
              {current_track.artists[0].name}
            </div>
          </div>
          <button
            className='btn-spotify'
            onClick={() => {
              userPlayer.previousTrack();
            }}
          >
            &lt;&lt;
          </button>

          <button
            className='btn-spotify'
            onClick={() => {
              userPlayer.togglePlay();
            }}
          >
            {is_paused ? 'PLAY' : 'PAUSE'}
          </button>

          <button
            className='btn-spotify'
            onClick={() => {
              userPlayer.nextTrack();
            }}
          >
            &gt;&gt;
          </button>
        </div>
      </div>
    </>
  );
}
