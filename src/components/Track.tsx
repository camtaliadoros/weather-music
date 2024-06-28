import { TrackObject } from '@/app/_models';
import { lineArtistsNames } from '@/util/util';

export default function Track({ trackData }: { trackData: TrackObject }) {
  const artistsArr = trackData.artists;
  const trackName = trackData.name;

  const artistsLine = lineArtistsNames(artistsArr);

  return (
    <>
      <div className='m-4'>
        <div className='play-icon'></div>
      </div>

      <div className='flex flex-col items-start'>
        <p className='font-semibold mb-1 text-left'>{trackName}</p>

        <p className='mb-0 text-left'>{artistsLine}</p>
      </div>
    </>
  );
}
