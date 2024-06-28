'use client';

import { weatherCodes } from '@/util/weatherCodes';
import { createContext, useEffect, useState } from 'react';
import { WeatherData } from '../_models';

export const WeatherContext = createContext<{
  weatherData?: WeatherData;
  error: string | null;
  loading: boolean;
  iconCode?: number;
}>({ error: null, loading: true });

export const WeatherContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [iconCode, setIconCode] = useState<number | undefined>();

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

              const weatherCode = weatherRes.conditionCode;

              const weatherCodeData = weatherCodes[weatherCode];

              setIconCode(weatherCodeData.icon);
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

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        error,
        loading,
        iconCode,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
