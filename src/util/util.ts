import { Artist } from '@/app/_models';

export const lineArtistsNames = (artistsArr: Artist[]) => {
  // Isolate artists names
  const artistNamesArr = artistsArr.map((artist) => artist.name);

  // Join in comma separated string
  const artistsLine = artistNamesArr.join(', ');

  return artistsLine;
};

export const endpoints = {
  spotify: 'https://api.spotify.com/v1/me',
} as const;
