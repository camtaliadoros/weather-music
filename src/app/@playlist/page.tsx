'use client';

import Track from '@/components/Track';
import { useContext, useEffect, useState } from 'react';
import { SpotifyContext } from '../_contexts/SpotifyAuthContextProvider';
import { Artist, TrackObject } from '../_models';

export default function Playlist() {
  const [playlist, setPlaylist] = useState<TrackObject[]>();

  const { accessToken } = useContext(SpotifyContext);

  useEffect(() => {
    if (accessToken) {
      const fetchTrackRecommendations = async () => {
        // Request user's top 5 artists
        const topArtistsJson = await fetch(
          'https://api.spotify.com/v1/me/top/artists?limit=5',
          {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

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
      };
      fetchTrackRecommendations();
    }
  }, [accessToken]);

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
