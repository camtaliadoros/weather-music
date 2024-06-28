'use client';

import { getAccessToken, redirectToAuthCodeFlow } from '@/util/spotifyAuth';
import { useEffect, useState } from 'react';

type Artist = {
  id: string;
  name: string;
};

type ExternalUrls = {
  spotify: string;
};

type ExternalIds = {
  isrc: string;
};

type Image = {
  height: number;
  url: string;
  width: number;
};

type Track = {
  available_markets: string[];
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  uri: string;
};

export default function Spotify() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const [playlist, setPlaylist] = useState<Track[]>();

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
        const topArtists = (await topArtistsJson.json()) as { items: Artist[] };

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
        const tracksList = (await tracksJson.json()) as { tracks: Track[] };
        setPlaylist(tracksList.tracks);
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
