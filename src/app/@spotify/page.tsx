'use client';

import Track from '@/components/Track';
import { getAccessToken, redirectToAuthCodeFlow } from '@/util/spotifyAuth';
import { useEffect, useState } from 'react';
import { Artist, TrackObject } from '../_models';

export default function Spotify() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const [playlist, setPlaylist] = useState<TrackObject[]>();

  useEffect(() => {
    const getSpotifyAccess = async () => {
      if (!code) {
        redirectToAuthCodeFlow();
      } else {
        const accessToken = await getAccessToken(code);
        const topArtistsJson = await fetch(
          'https://api.spotify.com/v1/me/top/artists?limit=5',
          {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        // Request user's top 5 artists
        const topArtists = (await topArtistsJson.json()) as { items: Artist[] };

        // Map top artists data into array of ids
        const artistsIds = topArtists.items
          .map((artist) => artist.id)
          .toString();

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
    };

    getSpotifyAccess();
  }, [code]);

  return (
    <div className='h-full'>
      <h2>Playlist</h2>
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
