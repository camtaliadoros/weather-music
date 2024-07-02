import { SpotifyContext } from '@/app/_contexts/SpotifyAuthContextProvider';
import { TrackObject } from '@/app/_models';
import { lineArtistsNames } from '@/util/util';
import { useContext } from 'react';

export default function Track({ trackData }: { trackData: TrackObject }) {
  const artistsArr = trackData.artists;
  const trackName = trackData.name;

  // Get artist names into a single comma-separated line
  const artistsLine = lineArtistsNames(artistsArr);

  const { userType } = useContext(SpotifyContext);

  return (
    <>
      {userType === 'premium' && (
        <div className='m-4'>
          <div className='play-icon'></div>
        </div>
      )}

      <div className='flex flex-col items-start py-2'>
        <p className='font-semibold mb-1 text-left'>{trackName}</p>

        <p className='mb-0 text-left'>{artistsLine}</p>
      </div>
    </>
  );
}
