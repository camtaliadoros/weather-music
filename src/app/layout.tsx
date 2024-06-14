import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { WeatherContextProvider } from './_contexts/WeatherContextProvider';
import { Column } from '@/components/column';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  weather,
}: {
  children: React.ReactNode;
  weather: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <WeatherContextProvider>
        <body className={`${openSans.className} h-screen`}>
          <main className='w-full text-center grid-cols-1 h-screen'>
            {children}
            <div className='grid grid-cols-2'>
              <Column>{weather}</Column>
              <Column>
                <p>Spotify goes here</p>
              </Column>
            </div>
            <div className='h-32 justify-self-end'>Player goes here</div>
          </main>
        </body>
      </WeatherContextProvider>
    </html>
  );
}
