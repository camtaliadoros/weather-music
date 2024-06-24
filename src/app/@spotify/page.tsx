'use client';

import Track from '@/components/Track';
import { getAccessToken, redirectToAuthCodeFlow } from '@/util/spotifyAuth';
import { useEffect, useState } from 'react';

export default function Spotify() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const [playlist, setPlaylist] = useState();

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
        const topArtists = await topArtistsJson.json();

        const artistsIds = topArtists.items
          .map((artist) => artist.id)
          .toString();

        const tracksJson = await fetch(
          `https://api.spotify.com/v1/recommendations?limit=20&seed_artists=${artistsIds}`,
          {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        const tracks = await tracksJson.json();
        setPlaylist(tracks);
        console.log(tracks);
      }
    };

    getSpotifyAccess();
  }, [code]);

  return (
    <>
      <h2>Playlist</h2>
    </>
  );
}
