'use client';

import { useEffect } from 'react';

export default function Spotify() {
  console.log('here');
  useEffect(() => {
    const fetchSpotifyAccess = async () => {
      const response = await fetch('/api/getSpotifyAccessToken', {
        method: 'POST',
      });

      const data = await response.json();

      console.log(data);
    };

    fetchSpotifyAccess();
  }, []);

  return <h2>Hello</h2>;
}
