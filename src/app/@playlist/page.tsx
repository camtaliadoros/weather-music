'use client';

import Track from '@/components/Track';
import { useContext, useEffect, useState } from 'react';
import { SpotifyContext } from '../_contexts/SpotifyAuthContextProvider';
import { Artist, TrackObject } from '../_models';
import Loading from '@/components/loading';
import { endpoints } from '@/util/util';

export default function Playlist() {
  const [playlist, setPlaylist] = useState<TrackObject[]>();
  const [loading, setLoading] = useState(true);

  const { accessToken } = useContext(SpotifyContext);

  useEffect(() => {
    if (accessToken) {
      const fetchTrackRecommendations = async () => {
        // Request user's top 5 artists
        const topArtistsJson = await fetch(
          `${endpoints.spotify}/top/artists?limit=5`,
          {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        const topArtists = (await topArtistsJson.json()) as { items: Artist[] };

        if (topArtists) {
          const artists = topArtists.items;

          // Map top artists data into array of ids
          const artistsIds = artists.map((artist) => artist.id).toString();

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

  const handleClick = async (trackIndex: number) => {
    // Create array from clicked on track onwards
    const tracksToPlay = playlist?.slice(trackIndex);

    // Isolate track URIs
    const tracksUris = tracksToPlay?.map((track) => track.uri);

    // Start playing track clicked on

    try {
      const playResponse = await fetch(`${endpoints.spotify}/player/play`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uris: tracksUris,
        }),
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='flex flex-col h-full w-1/2 text-wrap'>
      <h2 className='text-xl font-bold mb-6'>Playlist</h2>
      <div className='h-full overflow-scroll'>
        {playlist ? (
          playlist.map((track, i) => (
            <button
              key={track.id}
              onClick={() => handleClick(i)}
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
