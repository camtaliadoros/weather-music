'use client';

import Image from 'next/image';
import { Loading } from '../../components/loading';
import { useContext } from 'react';
import { WeatherContext } from '../_contexts/WeatherContextProvider';

export default function Weather() {
  const { weatherData, error, loading, iconCode } = useContext(WeatherContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {error && <p>Error: {error}</p>}
      {weatherData && (
        <div className='text-chalk w-full flex flex-col items-center'>
          {iconCode && (
            <Image
              src={`https://cdn.weatherapi.com/weather/64x64/${
                weatherData.isDay ? 'day' : 'night'
              }/${iconCode}.png`}
              alt={`illustration of ${weatherData.condition} weather`}
              width={64}
              height={64}
            />
          )}
          <p className='text-sm lg:text-base'>{weatherData.condition}</p>
          <p className='text-sm lg:text-base'>
            The current temperature in {weatherData.location} is
          </p>
          <p className='text-xl lg:text-4xl font-bold'>
            {' '}
            {weatherData.temperature}&deg;C
          </p>
          <p className='text-sm lg:text-base'>
            Feels like:{' '}
            <span className='font-bold'>{weatherData.feelsLike}&deg;C</span>
          </p>
        </div>
      )}
    </>
  );
}
