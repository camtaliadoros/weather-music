'use client';

import Button from '@/components/button';
import { useState } from 'react';

const weatherView = {
  label: 'View your playlist',
  classes: 'translate-y-full',
};

const playlistView = {
  label: 'View weather forecast',
  classes: '',
};

export default function Home() {
  const [buttonView, setButtonView] = useState('weather');
  const [label, setLabel] = useState('View your playlist');

  const togglePlaylistWeatherButtonClick = () => {
    if (buttonView === 'weather') {
      setLabel('View weather forecast');
      setButtonView('playlist');
    } else {
      setLabel('View your playlist');
      setButtonView('weather');
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
