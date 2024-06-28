'use client';

import Track from '@/components/Track';
import { getAccessToken, redirectToAuthCodeFlow } from '@/util/spotifyAuth';
import { useContext, useEffect, useState } from 'react';
import { AccessToken, Artist, TrackObject } from '../_models';
import { SpotifyContext } from '../_contexts/SpotifyAuthContextProvider';
import { useRouter } from 'next/navigation';

export default function Playlist() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const [playlist, setPlaylist] = useState<TrackObject[]>();

  const { accessToken, setAccessToken } = useContext(SpotifyContext);

  useEffect(() => {
    const getSpotifyAccess = async () => {
      if (!code && !accessToken) {
        redirectToAuthCodeFlow();
      } else {
        const token = await getAccessToken(code);
        window.history.replaceState(undefined, '', '/');
        setAccessToken?.(token);

        const topArtistsJson = await fetch(
          'https://api.spotify.com/v1/me/top/artists?limit=5',
          {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        // Request user's top 5 artists
        const topArtists = (await topArtistsJson.json()) as { items: Artist[] };

        if (topArtists) {
          const artists = topArtists.items;
          // Map top artists data into array of ids
          const artistsIds = artists?.map((artist) => artist.id).toString();

          // Request 20 recommended tracks based on seed artists
          const tracksJson = await fetch(
            `https://api.spotify.com/v1/recommendations?limit=20&seed_artists=${artistsIds}`,
            {
              method: 'GET',
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          );
          const tracksList = (await tracksJson.json()) as {
            tracks: TrackObject[];
          };
          setPlaylist(tracksList.tracks);
        }
      }
    };

    getSpotifyAccess();
  }, [code]);

  return (
    <div className='flex flex-col h-full w-1/2 text-wrap'>
      <h2 className='text-xl font-bold mb-6'>Playlist</h2>
      <div className='h-full overflow-scroll'>
        {playlist ? (
          playlist.map((track) => <Track key={track.id} trackData={track} />)
        ) : (
          <p>No tracks found</p>
        )}
      </div>
    </div>
  );
}
