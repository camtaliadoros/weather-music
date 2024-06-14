'use client';

import { useContext } from 'react';
import { WeatherContext } from '../_contexts/WeatherContextProvider';

export default function Weather() {
  const { weatherData, error } = useContext(WeatherContext);

  return (
    <>
      {error && <p>Error: {error}</p>}
      {weatherData && (
        <div className='text-chalk w-full'>
          <p>{weatherData.condition}</p>
          <p>The current temperature in {weatherData.location} is</p>
          <p className='text-4xl font-bold'> {weatherData.temperature}&deg;C</p>
          <p>
            Feels like:{' '}
            <span className='font-bold'>{weatherData.feelsLike}&deg;C</span>
          </p>
        </div>
      )}
    </>
  );
}
