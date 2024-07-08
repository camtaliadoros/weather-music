'use client';

import { Button } from '@/components/button';
import { useContext, useState } from 'react';
import { MobileViewContext } from './_contexts/MobileViewContextProvidex';

export default function Home() {
  const [label, setLabel] = useState('View your playlist');
  const { view, setView } = useContext(MobileViewContext);

  const togglePlaylistWeatherButtonClick = () => {
    if (view === 'weather') {
      setLabel('View weather forecast');
      setView?.('playlist');
    } else {
      setLabel('View your playlist');
      setView?.('weather');
    }
  };

  return (
    <Button
      classes='mx-4 md:hidden'
      label={label}
      onClickAction={togglePlaylistWeatherButtonClick}
      loading={false}
    />
  );
}
