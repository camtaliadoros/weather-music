import MobileViewContextProvider from './MobileViewContextProvidex';
import SpotifyAuthContextProvider from './SpotifyAuthContextProvider';
import SpotifyPlayerContextProvider from './SpotifyPlayerContextProvider';
import { WeatherContextProvider } from './WeatherContextProvider';

export default function Contexts({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WeatherContextProvider>
      <SpotifyAuthContextProvider>
        <SpotifyPlayerContextProvider>
          <MobileViewContextProvider>{children}</MobileViewContextProvider>
        </SpotifyPlayerContextProvider>
      </SpotifyAuthContextProvider>
    </WeatherContextProvider>
  );
}
