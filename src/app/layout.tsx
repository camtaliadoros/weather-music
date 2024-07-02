import { Column } from '@/components/column';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { SpotifyContextProvider } from './_contexts/SpotifyAuthContextProvider';
import { WeatherContextProvider } from './_contexts/WeatherContextProvider';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beateorology',
  description: 'Music for the weather',
};

export default function RootLayout({
  children,
  weather,
  playlist,
  spotifyplayer,
}: {
  children: React.ReactNode;
  weather: React.ReactNode;
  playlist: React.ReactNode;
  spotifyplayer: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <WeatherContextProvider>
        <SpotifyContextProvider>
          <body className={`${openSans.className} h-screen`}>
            <main className='flex flex-col w-full text-center h-screen'>
              {children}
              <div className='grid grid-cols-1 lg:grid-cols-2 h-3/5 content-center'>
                <Column>{weather}</Column>
                <Column>{playlist}</Column>
              </div>
              <div className='h-1/5 justify-self-end'>{spotifyplayer}</div>
            </main>
          </body>
        </SpotifyContextProvider>
      </WeatherContextProvider>
    </html>
  );
}
