'use client';

import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../_contexts/WeatherContextProvider';
import { WeatherData } from '../_models';
import Loading from './loading';

export default function Weather() {
  const { weatherData, setWeatherData, setError, error } =
    useContext(WeatherContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          const fetchData = async () => {
            try {
              const res = await fetch(
                `/api/fetchWeatherData?longitude=${location.longitude}&latitude=${location.latitude}`
              );
              const result = await res.json();

              const weatherRes: WeatherData = {
                location: result.location.name,
                temperature: result.current.temp_c,
                feelsLike: result.current.feelslike_c,
                condition: result.current.condition.text,
                conditionCode: result.current.condition.code,
                isDay: result.current.is_day === 1,
              };

              setWeatherData?.(weatherRes);
            } catch (e) {
              console.log(e);
            } finally {
              setLoading(false);
            }
          };

          fetchData();

          setError?.(null);
        },
        (error) => {
          setError?.(error.message);
          setLoading(false);
        }
      );
    } else {
      setError?.('Geolocation is not supported by this browser');
      setLoading(false);
    }
  }, [setError, setWeatherData]);

  if (loading) {
    return <Loading />;
  }

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
