'use client';

import Track from '@/components/track';
import Loading from '@/components/loading';
import { endpoints } from '@/util/util';
import { useContext, useEffect, useState } from 'react';
import { SpotifyContext } from '../_contexts/SpotifyAuthContextProvider';
import { Artist, PlaylistResponse, TrackObject } from '../_models';
import Button from '@/components/button';
import { WeatherContext } from '../_contexts/WeatherContextProvider';
import { weatherCodes } from '@/util/weatherCodes';
import { strict } from 'assert';

export default function Playlist() {
  const [playlist, setPlaylist] = useState<TrackObject[]>();
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [playlistSaveMessage, setPlaylistSaveMessage] = useState<string | null>(
    null
  );

  const { accessToken, userId, userType, deviceId } =
    useContext(SpotifyContext);
  const { weatherData } = useContext(WeatherContext);

  useEffect(() => {
    if (accessToken && weatherData) {
      const fetchTrackRecommendations = async () => {
        // Request user's top 5 artists
        const topArtistsJson = await fetch(
          `${endpoints.spotify}/me/top/artists?limit=5`,
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

          // Find Spotify Attributes matched against weather condition (code) and temperature feeling
          const { tempFeeling, conditionCode } = weatherData;

          const weatherConditionAttributes =
            weatherCodes[conditionCode].playlistSettings[tempFeeling];

          // Spotify Track Attributes
          const params = {
            limit: String(20),
            seed_artists: artistsIds,
            target_acousticness: String(
              weatherConditionAttributes.acousticness
            ),
            target_danceability: String(
              weatherConditionAttributes.danceability
            ),
            target_energy: String(weatherConditionAttributes.energy),
            target_valence: String(weatherConditionAttributes.valence),
          };

          const fetchParams = new URLSearchParams(params);

          // Request 20 recommended tracks based on seed artists
          const tracksJson = await fetch(
            `${endpoints.spotify}/recommendations?${fetchParams}`,
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
  }, [accessToken, weatherData]);

  const handleTrackClick = async (trackIndex: number) => {
    // Create array from clicked on track onwards
    const tracksToPlay = playlist?.slice(trackIndex);

    // Isolate track URIs
    const tracksUris = tracksToPlay?.map((track) => track.uri);

    // Start playing track clicked on

    try {
      const playResponse = await fetch(
        `${endpoints.spotify}/me/player/play?device_id=${deviceId}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            uris: tracksUris,
          }),
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handlePlaylistButtonClick = async () => {
    setButtonLoading(true);

    try {
      // Create new playlist
      const playlistName = 'Beateorology';
      const responseJson = await fetch(
        `${endpoints.spotify}/users/${userId}/playlists`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: playlistName }),
        }
      );
      const createdPlaylistData =
        (await responseJson.json()) as PlaylistResponse;
      const playlistId = createdPlaylistData.id;

      // Isolate track URIs
      const tracksUris = playlist?.map((track) => track.uri);

      // Add tracks to playlist
      const addTracksJson = await fetch(
        `${endpoints.spotify}/playlists/${playlistId}/tracks`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uris: tracksUris }),
        }
      );
      setButtonLoading(false);
      setPlaylistSaveMessage('Your playlist has been created successfully');
    } catch (e) {
      setButtonLoading(false);
      setPlaylistSaveMessage(
        'There was an error creating the playlist. Please try again later.'
      );
      setTimeout(() => {
        setPlaylistSaveMessage(null);
      }, 5000);
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
          playlist.map((track, i) =>
            userType === 'premium' ? (
              <button
                key={track.id}
                onClick={() => handleTrackClick(i)}
                className='flex items-center w-full py-4 hover:bg-chalk hover:bg-opacity-10 transition'
              >
                <Track key={track.id} trackData={track} />
              </button>
            ) : (
              <Track key={track.id} trackData={track} />
            )
          )
        ) : (
          <p>No tracks found</p>
        )}
      </div>

      {playlistSaveMessage ? (
        <div className='h-16 flex items-center justify-center'>
          <p className='text-chalk m-0'>{playlistSaveMessage}</p>
        </div>
      ) : (
        <Button
          label='Add this playlist to your Spotify'
          onClickAction={handlePlaylistButtonClick}
          loading={buttonLoading}
        />
      )}
    </div>
  );
}
