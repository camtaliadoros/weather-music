import { SpotifyContext } from '@/app/_contexts/SpotifyAuthContextProvider';
import { TrackObject } from '@/app/_models';
import { useContext, useEffect } from 'react';
import { TrackArtists } from './trackArtists';
import { TrackName } from './trackName';
import TrackControlIcon from './trackControlIcon';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { SpotifyPlayerContext } from '@/app/_contexts/SpotifyPlayerContext';

export default function Track({ trackData }: { trackData: TrackObject }) {
  const artistsArr = trackData.artists;
  const trackName = trackData.name;

  const { userType } = useContext(SpotifyContext);
  const { currentTrack, isPaused } = useContext(SpotifyPlayerContext);

  return (
    <>
      {userType === 'premium' && (
        <div className='m-4'>
          {trackData.id === currentTrack.id && !isPaused ? (
            <TrackControlIcon icon={faPause} action={undefined} />
          ) : (
            <TrackControlIcon icon={faPlay} action={undefined} />
          )}
        </div>
      )}
      <div className='flex flex-col items-start py-2'>
        <TrackName track={trackName} />
        <TrackArtists artists={artistsArr} />
      </div>
    </>
  );
}
