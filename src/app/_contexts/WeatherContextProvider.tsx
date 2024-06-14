'use client';

import { createContext, useEffect, useState } from 'react';
import { WeatherData } from '../_models';
import { getWeatherForecast } from '../_util/getWeatherForecast';

export const WeatherContext = createContext<{
  weatherData?: WeatherData;
  error: string | null;
}>({ error: null });

export const WeatherContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
    <WeatherContext.Provider value={{ weatherData, error }}>
      {children}
    </WeatherContext.Provider>
  );
};
