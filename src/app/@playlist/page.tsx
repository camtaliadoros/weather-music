'use client';

import Track from '@/components/Track';
import { useContext, useEffect, useState } from 'react';
import { SpotifyContext } from '../_contexts/SpotifyAuthContextProvider';
import { Artist, TrackObject } from '../_models';
import Loading from '@/components/loading';

export default function Playlist() {
  const [playlist, setPlaylist] = useState<TrackObject[]>();
  const [loading, setLoading] = useState(true);

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
          setLoading(false);
        }
      };
      fetchTrackRecommendations();
    }
  }, [accessToken]);

  const handleClick = async (trackUri: string) => {
    const url = new URL('https://api.spotify.com/v1/me/player/queue');
    url.search = new URLSearchParams({ uri: trackUri }).toString();

    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='flex flex-col h-full w-1/2 text-wrap'>
      <h2 className='text-xl font-bold mb-6'>Playlist</h2>
      <div className='h-full overflow-scroll'>
        {playlist ? (
          playlist.map((track) => (
            <button
              key={track.id}
              onClick={() => handleClick(track.uri)}
              className='flex items-center w-full py-4 hover:bg-chalk hover:bg-opacity-10 transition'
            >
              <Track key={track.id} trackData={track} />
            </button>
          ))
        ) : (
          <p>No tracks found</p>
        )}
      </div>
    </div>
  );
}
