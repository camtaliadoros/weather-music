import { TrackObject } from '@/app/_models';

export default function Track({ trackData }: { trackData: TrackObject }) {
  const artists = trackData.artists;
  const trackName = trackData.name;

  return (
    <>
      <p>{trackName}</p>
      {artists.map((artist) => (
        <p key={artist.id}>{artist.name}</p>
      ))}
    </>
  );
}
