'use client';

import { useContext } from 'react';
import { WeatherContext } from '../_contexts/WeatherContextProvider';

export const Location = () => {
  const { weatherData, error } = useContext(WeatherContext);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {weatherData && (
        <div className='text-chalk'>
          <p>
            The current temperature in {weatherData.location} is{' '}
            {weatherData.temperature}&deg;C
          </p>
          <p>Feels like: {weatherData.feelsLike}&deg;C</p>
          <p>Weather condition: {weatherData.condition}</p>
        </div>
      )}
    </div>
  );
};
