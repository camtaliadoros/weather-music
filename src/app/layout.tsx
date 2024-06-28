import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { WeatherContextProvider } from './_contexts/WeatherContextProvider';
import { Column } from '@/components/column';
import { Suspense } from 'react';
import { SpotifyContextProvider } from './_contexts/SpotifyAuthContextProvider';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beateorology',
  description: 'Music for the weather',
};

export default function RootLayout({
  children,
  weather,
  playlist,
  player,
}: {
  children: React.ReactNode;
  weather: React.ReactNode;
  playlist: React.ReactNode;
  player: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <WeatherContextProvider>
        <body className={`${openSans.className} h-screen`}>
          <main className='flex flex-col w-full text-center h-screen'>
            {children}
            <div className='grid grid-cols-1 lg:grid-cols-2 h-3/5 content-center'>
              <Column>{weather}</Column>
              <Column>{playlist}</Column>
            </div>
            <div className='h-1/5 justify-self-end'>{player}</div>
          </main>
        </body>
      </WeatherContextProvider>
    </html>
  );
}
