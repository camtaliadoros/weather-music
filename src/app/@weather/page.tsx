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
          <p>The current temperature in {weatherData.location} is</p>
          <p> {weatherData.temperature}&deg;C</p>
          <p>Feels like: {weatherData.feelsLike}&deg;C</p>
          <p>Weather condition: {weatherData.condition}</p>
        </div>
      )}
    </>
  );
}
