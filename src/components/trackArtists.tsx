import { Artist } from '@/app/_models';

type TrackArtistsProps = {
  artists: Artist[] | { name: string }[];
};

export const TrackArtists = ({ artists }: TrackArtistsProps) => {
  // Isolate artists names
  const artistNamesArr = artists.map((artist) => artist.name);

  // Join in comma separated string
  const artistsLine = artistNamesArr.join(', ');

  return <h6 className='mb-0 text-left font-light'>{artistsLine}</h6>;
};
