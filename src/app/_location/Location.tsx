'use client';

import { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { getWeatherForecast } from '../_util/getWeatherForecast';
import { WeatherData } from '../_models';

export const Location = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          getWeatherForecast(location).then((data) => setWeatherData(data));
          setError(null);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser');
    }
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}

      {/* <GooglePlacesAutocomplete apiKey='AIzaSyC7CRMGidfgMRFxUD5Q1cAN00XO17fdHi4' /> */}
      {weatherData && (
        <div className='text-chalk'>
          <p>You are in {weatherData.location}</p>
          <p>The current temperature is {weatherData.temperature}&deg;C</p>
          <p>It feels like {weatherData.feelsLike}&deg;C</p>
          <p>Weather condition: {weatherData.condition}</p>
        </div>
      )}
    </div>
  );
};
