import { TrackObject } from '@/app/_models';

export default function Track({ trackData }: { trackData: TrackObject }) {
  const artistsArr = trackData.artists;
  const trackName = trackData.name;

  // Isolate artists names
  const artistNamesArr = artistsArr.map((artist) => artist.name);

  // Join in comma separated string
  const artistsLine = artistNamesArr.join(', ');

  return (
    <button className='flex items-center w-full py-4 hover:bg-chalk hover:bg-opacity-10 transition'>
      <div className='m-4'>
        <div className='play-icon'></div>
      </div>

      <div className='flex flex-col items-start'>
        <p className='font-semibold mb-1 text-left'>{trackName}</p>

        <p className='mb-0 text-left'>{artistsLine}</p>
      </div>
    </button>
  );
}
