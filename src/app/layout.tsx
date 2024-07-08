import { Column } from '@/components/column';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { WeatherContextProvider } from './_contexts/WeatherContextProvider';
import './globals.css';
import dynamic from 'next/dynamic';

const openSans = Open_Sans({ subsets: ['latin'] });

const SpotifyPlayerContextProvider = dynamic(
  () => import('./_contexts/SpotifyPlayerContextProvider'),
  {
    ssr: false,
  }
);

const SpotifyAuthContextProvider = dynamic(
  () => import('./_contexts/SpotifyAuthContextProvider'),
  {
    ssr: false,
  }
);

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
      <body className={`${openSans.className}`}>
        <WeatherContextProvider>
          <SpotifyAuthContextProvider>
            <SpotifyPlayerContextProvider>
              <main className='flex flex-col justify-between w-full text-center h-screen'>
                <div className='flex items-center justify-center py-4 xl:py-8'>
                  <h1 className='h-1/6 lg:h-1/5 font-thin  text-chalk text-xl md:text-2xl lg:text-3xl 2xl:text-5xl'>
                    Beateorology
                  </h1>
                </div>
                <div className='h-4/6 lg:h-3/5 w-screen flex overflow-hidden md:grid md:grid-cols-2 md:content-center'>
                  <Column>{weather}</Column>
                  <Column>{playlist}</Column>
                </div>
                {children}

                <div className='justify-self-end h-1/6 lg:h-1/5'>
                  {spotifyplayer}
                </div>
              </main>
            </SpotifyPlayerContextProvider>
          </SpotifyAuthContextProvider>
        </WeatherContextProvider>
      </body>
    </html>
  );
}
