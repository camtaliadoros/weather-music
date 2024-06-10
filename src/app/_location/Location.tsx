'use client';

import { useState } from 'react';

interface Location {
  latitude: number | null;
  longitude: number | null;
}

export default function Location() {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState<string | null>(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser');
    }
  };

  return (
    <div>
      <button
        className='bg-chalk text-black px-3 py-2 rounded hover:bg-gray-200 transition'
        onClick={getLocation}
      >
        Get Location
      </button>
      {error && <p>Error: {error}</p>}
      {location.latitude && location.longitude && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
}
