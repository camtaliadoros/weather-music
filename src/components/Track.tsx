import { SpotifyContext } from '@/app/_contexts/SpotifyAuthContextProvider';
import { TrackObject } from '@/app/_models';
import { useContext } from 'react';
import { TrackArtists } from './trackArtists';
import { TrackName } from './trackName';
import TrackControlIcon from './trackControlIcon';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Track({ trackData }: { trackData: TrackObject }) {
  const artistsArr = trackData.artists;
  const trackName = trackData.name;

  const { userType } = useContext(SpotifyContext);

  return (
    <>
      {userType === 'premium' && (
        <div className='m-4'>
          <TrackControlIcon icon={faPlay} action={undefined} />
        </div>
      )}
      <div className='flex flex-col items-start py-2'>
        <TrackName track={trackName} />
        <TrackArtists artists={artistsArr} />
      </div>
    </>
  );
}
