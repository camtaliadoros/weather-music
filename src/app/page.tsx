import { WeatherContextProvider } from './_contexts/WeatherContextProvider';
import { Weather } from './_weather/Weather';

export default function Home() {
  return (
    <>
      <WeatherContextProvider>
        <Weather />
      </WeatherContextProvider>
    </>
  );
}
