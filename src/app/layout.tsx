import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { WeatherContextProvider } from './_contexts/WeatherContextProvider';
import { Column } from '@/components/column';
import { Suspense } from 'react';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beateorology',
  description: 'Music for the weather',
};

export default function RootLayout({
  children,
  weather,
  spotify,
}: {
  children: React.ReactNode;
  weather: React.ReactNode;
  spotify: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <WeatherContextProvider>
        <body className={`${openSans.className} h-screen`}>
          <main className='w-full text-center grid-cols-1 h-screen'>
            {children}
            <div className='grid grid-cols-1 lg:grid-cols-2 h-3/5 content-center'>
              <Column>{weather}</Column>
              <Column>{spotify}</Column>
            </div>
            <div className='h-1/5 justify-self-end'>Player goes here</div>
          </main>
        </body>
      </WeatherContextProvider>
    </html>
  );
}
