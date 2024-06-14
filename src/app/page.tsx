import { WeatherContextProvider } from './_contexts/WeatherContextProvider';
import { Location } from './_location/Location';

export default function Home() {
  return (
    <>
      <WeatherContextProvider>
        <Location />
      </WeatherContextProvider>
    </>
  );
}
