type TrackNameProps = {
  track: string;
};

export const TrackName = ({ track }: TrackNameProps) => {
  return <h5 className='font-semibold mb-1 text-left'>{track}</h5>;
};
