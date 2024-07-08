import { SpotifyContext } from '@/app/_contexts/SpotifyAuthContextProvider';
import { TrackObject } from '@/app/_models';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { TrackArtists } from './trackArtists';
import { TrackControlIcon } from './trackControlIcon';
import { TrackName } from './trackName';
import { SpotifyPlayerContext } from '@/app/_contexts/SpotifyPlayerContextProvider';

export const Track = ({ trackData }: { trackData: TrackObject }) => {
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
      <div className='flex flex-col items-start'>
        <TrackName track={trackName} />
        <TrackArtists artists={artistsArr} />
      </div>
    </>
  );
};
