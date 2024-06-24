'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { WeatherData } from '../_models';

export const WeatherContext = createContext<{
  weatherData?: WeatherData;
  setWeatherData?: Dispatch<SetStateAction<WeatherData | undefined>>;
  error: string | null;
  setError?: Dispatch<SetStateAction<string | null>>;
}>({ error: null });

export const WeatherContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>();
  const [error, setError] = useState<string | null>(null);

  return (
    <WeatherContext.Provider
      value={{ weatherData, setWeatherData, error, setError }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
