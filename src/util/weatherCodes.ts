type SpotifyTrackSettings = {
  acousticness: number;
  danceability: number;
  energy: number;
  valence: number;
};
export type Temperature = 'cold' | 'mild' | 'warm' | 'hot';

type PlaylistSettings = Record<Temperature, SpotifyTrackSettings>;

interface WeatherCodeEntry {
  day: string;
  night: string;
  icon: number;
  playlistSettings: PlaylistSettings;
}

interface WeatherCodes {
  [key: number]: WeatherCodeEntry;
}

export const weatherCodes: WeatherCodes = {
  1000: {
    day: 'Sunny',
    night: 'Clear',
    icon: 113,
    playlistSettings: {
      cold: {
        acousticness: 0.8,
        danceability: 0.3,
        energy: 0.4,
        valence: 0.5,
      },
      mild: {
        acousticness: 0.5,
        danceability: 0.5,
        energy: 0.6,
        valence: 0.7,
      },
      warm: {
        acousticness: 0.3,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.8,
      },
      hot: {
        acousticness: 0.2,
        danceability: 0.8,
        energy: 0.9,
        valence: 0.9,
      },
    },
  },
  1003: {
    day: 'Partly cloudy',
    night: 'Partly cloudy',
    icon: 116,
    playlistSettings: {
      cold: {
        acousticness: 0.7,
        danceability: 0.3,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.6,
      },
      warm: {
        acousticness: 0.4,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.7,
      },
      hot: {
        acousticness: 0.3,
        danceability: 0.7,
        energy: 0.8,
        valence: 0.8,
      },
    },
  },
  1006: {
    day: 'Cloudy',
    night: 'Cloudy',
    icon: 119,
    playlistSettings: {
      cold: {
        acousticness: 0.8,
        danceability: 0.2,
        energy: 0.3,
        valence: 0.3,
      },
      mild: {
        acousticness: 0.7,
        danceability: 0.3,
        energy: 0.4,
        valence: 0.4,
      },
      warm: {
        acousticness: 0.6,
        danceability: 0.4,
        energy: 0.5,
        valence: 0.5,
      },
      hot: {
        acousticness: 0.4,
        danceability: 0.5,
        energy: 0.6,
        valence: 0.6,
      },
    },
  },
  1009: {
    day: 'Overcast',
    night: 'Overcast',
    icon: 122,
    playlistSettings: {
      cold: {
        acousticness: 0.9,
        danceability: 0.2,
        energy: 0.2,
        valence: 0.2,
      },
      mild: {
        acousticness: 0.8,
        danceability: 0.3,
        energy: 0.3,
        valence: 0.3,
      },
      warm: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      hot: {
        acousticness: 0.5,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
    },
  },
  1030: {
    day: 'Mist',
    night: 'Mist',
    icon: 143,
    playlistSettings: {
      cold: {
        acousticness: 0.85,
        danceability: 0.2,
        energy: 0.2,
        valence: 0.2,
      },
      mild: {
        acousticness: 0.75,
        danceability: 0.3,
        energy: 0.3,
        valence: 0.3,
      },
      warm: {
        acousticness: 0.65,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      hot: {
        acousticness: 0.55,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
    },
  },
  1063: {
    day: 'Patchy rain possible',
    night: 'Patchy rain possible',
    icon: 176,
    playlistSettings: {
      cold: {
        acousticness: 0.8,
        danceability: 0.3,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.5,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.6,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.5,
        danceability: 0.6,
        energy: 0.7,
        valence: 0.7,
      },
    },
  },
  1066: {
    day: 'Patchy snow possible',
    night: 'Patchy snow possible',
    icon: 179,
    playlistSettings: {
      cold: {
        acousticness: 0.9,
        danceability: 0.2,
        energy: 0.3,
        valence: 0.3,
      },
      mild: {
        acousticness: 0.8,
        danceability: 0.3,
        energy: 0.4,
        valence: 0.4,
      },
      warm: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.5,
        valence: 0.5,
      },
      hot: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.6,
        valence: 0.6,
      },
    },
  },
  1069: {
    day: 'Patchy sleet possible',
    night: 'Patchy sleet possible',
    icon: 182,
    playlistSettings: {
      cold: {
        acousticness: 0.85,
        danceability: 0.3,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.75,
        danceability: 0.4,
        energy: 0.5,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.65,
        danceability: 0.5,
        energy: 0.6,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.55,
        danceability: 0.6,
        energy: 0.7,
        valence: 0.7,
      },
    },
  },
  1072: {
    day: 'Patchy freezing drizzle possible',
    night: 'Patchy freezing drizzle possible',
    icon: 185,
    playlistSettings: {
      cold: {
        acousticness: 0.9,
        danceability: 0.2,
        energy: 0.3,
        valence: 0.3,
      },
      mild: {
        acousticness: 0.8,
        danceability: 0.3,
        energy: 0.4,
        valence: 0.4,
      },
      warm: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.5,
        valence: 0.5,
      },
      hot: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.6,
        valence: 0.6,
      },
    },
  },
  1087: {
    day: 'Thundery outbreaks possible',
    night: 'Thundery outbreaks possible',
    icon: 200,
    playlistSettings: {
      cold: {
        acousticness: 0.7,
        danceability: 0.3,
        energy: 0.6,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.6,
        danceability: 0.4,
        energy: 0.7,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.5,
        danceability: 0.5,
        energy: 0.8,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.4,
        danceability: 0.6,
        energy: 0.9,
        valence: 0.7,
      },
    },
  },
  1114: {
    day: 'Blowing snow',
    night: 'Blowing snow',
    icon: 227,
    playlistSettings: {
      cold: {
        acousticness: 0.9,
        danceability: 0.2,
        energy: 0.3,
        valence: 0.3,
      },
      mild: {
        acousticness: 0.8,
        danceability: 0.3,
        energy: 0.4,
        valence: 0.4,
      },
      warm: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.5,
        valence: 0.5,
      },
      hot: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.6,
        valence: 0.6,
      },
    },
  },
  1117: {
    day: 'Blizzard',
    night: 'Blizzard',
    icon: 230,
    playlistSettings: {
      cold: {
        acousticness: 0.9,
        danceability: 0.2,
        energy: 0.3,
        valence: 0.2,
      },
      mild: {
        acousticness: 0.8,
        danceability: 0.3,
        energy: 0.4,
        valence: 0.3,
      },
      warm: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.5,
        valence: 0.4,
      },
      hot: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.6,
        valence: 0.5,
      },
    },
  },
  1135: {
    day: 'Fog',
    night: 'Fog',
    icon: 248,
    playlistSettings: {
      cold: {
        acousticness: 0.8,
        danceability: 0.3,
        energy: 0.3,
        valence: 0.2,
      },
      mild: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.3,
      },
      warm: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.4,
      },
      hot: {
        acousticness: 0.5,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.5,
      },
    },
  },
  1147: {
    day: 'Freezing fog',
    night: 'Freezing fog',
    icon: 260,
    playlistSettings: {
      cold: {
        acousticness: 0.9,
        danceability: 0.2,
        energy: 0.3,
        valence: 0.2,
      },
      mild: {
        acousticness: 0.8,
        danceability: 0.3,
        energy: 0.4,
        valence: 0.3,
      },
      warm: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.5,
        valence: 0.4,
      },
      hot: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.6,
        valence: 0.5,
      },
    },
  },
  1150: {
    day: 'Patchy light drizzle',
    night: 'Patchy light drizzle',
    icon: 263,
    playlistSettings: {
      cold: {
        acousticness: 0.8,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.7,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.6,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.5,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.7,
      },
    },
  },
  1153: {
    day: 'Light drizzle',
    night: 'Light drizzle',
    icon: 266,
    playlistSettings: {
      cold: {
        acousticness: 0.8,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.7,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.6,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.5,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.7,
      },
    },
  },
  1168: {
    day: 'Freezing drizzle',
    night: 'Freezing drizzle',
    icon: 281,
    playlistSettings: {
      cold: {
        acousticness: 0.9,
        danceability: 0.3,
        energy: 0.3,
        valence: 0.2,
      },
      mild: {
        acousticness: 0.8,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.3,
      },
      warm: {
        acousticness: 0.7,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.4,
      },
      hot: {
        acousticness: 0.6,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.5,
      },
    },
  },
  1171: {
    day: 'Heavy freezing drizzle',
    night: 'Heavy freezing drizzle',
    icon: 284,
    playlistSettings: {
      cold: {
        acousticness: 0.9,
        danceability: 0.3,
        energy: 0.3,
        valence: 0.2,
      },
      mild: {
        acousticness: 0.8,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.3,
      },
      warm: {
        acousticness: 0.7,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.4,
      },
      hot: {
        acousticness: 0.6,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.5,
      },
    },
  },
  1180: {
    day: 'Patchy light rain',
    night: 'Patchy light rain',
    icon: 293,
    playlistSettings: {
      cold: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.5,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.4,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.7,
      },
    },
  },
  1183: {
    day: 'Light rain',
    night: 'Light rain',
    icon: 296,
    playlistSettings: {
      cold: {
        acousticness: 0.6,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.5,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.4,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.3,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.7,
      },
    },
  },
  1186: {
    day: 'Moderate rain at times',
    night: 'Moderate rain at times',
    icon: 299,
    playlistSettings: {
      cold: {
        acousticness: 0.5,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.4,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.3,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.2,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.7,
      },
    },
  },
  1189: {
    day: 'Moderate rain',
    night: 'Moderate rain',
    icon: 302,
    playlistSettings: {
      cold: {
        acousticness: 0.4,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.3,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.2,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.1,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.7,
      },
    },
  },
  1192: {
    day: 'Heavy rain at times',
    night: 'Heavy rain at times',
    icon: 305,
    playlistSettings: {
      cold: {
        acousticness: 0.3,
        danceability: 0.3,
        energy: 0.3,
        valence: 0.3,
      },
      mild: {
        acousticness: 0.2,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      warm: {
        acousticness: 0.1,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      hot: {
        acousticness: 0.05,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
    },
  },
  1195: {
    day: 'Heavy rain',
    night: 'Heavy rain',
    icon: 308,
    playlistSettings: {
      cold: {
        acousticness: 0.2,
        danceability: 0.2,
        energy: 0.2,
        valence: 0.2,
      },
      mild: {
        acousticness: 0.1,
        danceability: 0.3,
        energy: 0.3,
        valence: 0.3,
      },
      warm: {
        acousticness: 0.05,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      hot: {
        acousticness: 0.01,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
    },
  },
  1198: {
    day: 'Light freezing rain',
    night: 'Light freezing rain',
    icon: 311,
    playlistSettings: {
      cold: {
        acousticness: 0.4,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.3,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.2,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.1,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.7,
      },
    },
  },
  1201: {
    day: 'Moderate or heavy freezing rain',
    night: 'Moderate or heavy freezing rain',
    icon: 314,
    playlistSettings: {
      cold: {
        acousticness: 0.3,
        danceability: 0.3,
        energy: 0.3,
        valence: 0.3,
      },
      mild: {
        acousticness: 0.2,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      warm: {
        acousticness: 0.1,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      hot: {
        acousticness: 0.05,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
    },
  },
  1204: {
    day: 'Light sleet',
    night: 'Light sleet',
    icon: 317,
    playlistSettings: {
      cold: {
        acousticness: 0.4,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.3,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.2,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.1,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.7,
      },
    },
  },
  1207: {
    day: 'Moderate or heavy sleet',
    night: 'Moderate or heavy sleet',
    icon: 320,
    playlistSettings: {
      cold: {
        acousticness: 0.3,
        danceability: 0.3,
        energy: 0.3,
        valence: 0.3,
      },
      mild: {
        acousticness: 0.2,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      warm: {
        acousticness: 0.1,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      hot: {
        acousticness: 0.05,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
    },
  },
  1210: {
    day: 'Patchy light snow',
    night: 'Patchy light snow',
    icon: 323,
    playlistSettings: {
      cold: {
        acousticness: 0.4,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.3,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.2,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.1,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.7,
      },
    },
  },
  1213: {
    day: 'Light snow',
    night: 'Light snow',
    icon: 326,
    playlistSettings: {
      cold: {
        acousticness: 0.5,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.4,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.3,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.2,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.7,
      },
    },
  },
  1216: {
    day: 'Patchy moderate snow',
    night: 'Patchy moderate snow',
    icon: 329,
    playlistSettings: {
      cold: {
        acousticness: 0.6,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.5,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.4,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.3,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.7,
      },
    },
  },
  1219: {
    day: 'Moderate snow',
    night: 'Moderate snow',
    icon: 332,
    playlistSettings: {
      cold: {
        acousticness: 0.6,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      mild: {
        acousticness: 0.5,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      warm: {
        acousticness: 0.4,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
      hot: {
        acousticness: 0.3,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.7,
      },
    },
  },
  1222: {
    day: 'Patchy heavy snow',
    night: 'Patchy heavy snow',
    icon: 335,
    playlistSettings: {
      cold: {
        acousticness: 0.7,
        danceability: 0.3,
        energy: 0.3,
        valence: 0.3,
      },
      mild: {
        acousticness: 0.6,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      warm: {
        acousticness: 0.5,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      hot: {
        acousticness: 0.4,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
    },
  },
  1225: {
    day: 'Heavy snow',
    night: 'Heavy snow',
    icon: 338,
    playlistSettings: {
      cold: {
        acousticness: 0.7,
        danceability: 0.3,
        energy: 0.3,
        valence: 0.3,
      },
      mild: {
        acousticness: 0.6,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.4,
      },
      warm: {
        acousticness: 0.5,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.5,
      },
      hot: {
        acousticness: 0.4,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.6,
      },
    },
  },
  1237: {
    day: 'Ice pellets',
    night: 'Ice pellets',
    icon: 350,
    playlistSettings: {
      cold: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.3,
      },
      mild: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.4,
      },
      warm: {
        acousticness: 0.5,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.5,
      },
      hot: {
        acousticness: 0.4,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.6,
      },
    },
  },
  1240: {
    day: 'Light rain shower',
    night: 'Light rain shower',
    icon: 353,
    playlistSettings: {
      cold: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.4,
        valence: 0.5,
      },
      mild: {
        acousticness: 0.5,
        danceability: 0.6,
        energy: 0.5,
        valence: 0.6,
      },
      warm: {
        acousticness: 0.4,
        danceability: 0.7,
        energy: 0.6,
        valence: 0.7,
      },
      hot: {
        acousticness: 0.3,
        danceability: 0.8,
        energy: 0.7,
        valence: 0.8,
      },
    },
  },
  1243: {
    day: 'Moderate or heavy rain shower',
    night: 'Moderate or heavy rain shower',
    icon: 356,
    playlistSettings: {
      cold: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.3,
        valence: 0.3,
      },
      mild: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.4,
        valence: 0.4,
      },
      warm: {
        acousticness: 0.5,
        danceability: 0.6,
        energy: 0.5,
        valence: 0.5,
      },
      hot: {
        acousticness: 0.4,
        danceability: 0.7,
        energy: 0.6,
        valence: 0.6,
      },
    },
  },
  1246: {
    day: 'Torrential rain shower',
    night: 'Torrential rain shower',
    icon: 359,
    playlistSettings: {
      cold: {
        acousticness: 0.8,
        danceability: 0.3,
        energy: 0.2,
        valence: 0.2,
      },
      mild: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.3,
        valence: 0.3,
      },
      warm: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.4,
        valence: 0.4,
      },
      hot: {
        acousticness: 0.5,
        danceability: 0.6,
        energy: 0.5,
        valence: 0.5,
      },
    },
  },
  1249: {
    day: 'Light sleet showers',
    night: 'Light sleet showers',
    icon: 362,
    playlistSettings: {
      cold: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.3,
        valence: 0.3,
      },
      mild: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.4,
        valence: 0.4,
      },
      warm: {
        acousticness: 0.5,
        danceability: 0.6,
        energy: 0.5,
        valence: 0.5,
      },
      hot: {
        acousticness: 0.4,
        danceability: 0.7,
        energy: 0.6,
        valence: 0.6,
      },
    },
  },
  1252: {
    day: 'Moderate or heavy sleet showers',
    night: 'Moderate or heavy sleet showers',
    icon: 365,
    playlistSettings: {
      cold: {
        acousticness: 0.8,
        danceability: 0.3,
        energy: 0.2,
        valence: 0.2,
      },
      mild: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.3,
        valence: 0.3,
      },
      warm: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.4,
        valence: 0.4,
      },
      hot: {
        acousticness: 0.5,
        danceability: 0.6,
        energy: 0.5,
        valence: 0.5,
      },
    },
  },
  1255: {
    day: 'Light snow showers',
    night: 'Light snow showers',
    icon: 368,
    playlistSettings: {
      cold: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.3,
        valence: 0.3,
      },
      mild: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.4,
        valence: 0.4,
      },
      warm: {
        acousticness: 0.5,
        danceability: 0.6,
        energy: 0.5,
        valence: 0.5,
      },
      hot: {
        acousticness: 0.4,
        danceability: 0.7,
        energy: 0.6,
        valence: 0.6,
      },
    },
  },
  1258: {
    day: 'Moderate or heavy snow showers',
    night: 'Moderate or heavy snow showers',
    icon: 371,
    playlistSettings: {
      cold: {
        acousticness: 0.8,
        danceability: 0.3,
        energy: 0.2,
        valence: 0.2,
      },
      mild: {
        acousticness: 0.7,
        danceability: 0.4,
        energy: 0.3,
        valence: 0.3,
      },
      warm: {
        acousticness: 0.6,
        danceability: 0.5,
        energy: 0.4,
        valence: 0.4,
      },
      hot: {
        acousticness: 0.5,
        danceability: 0.6,
        energy: 0.5,
        valence: 0.5,
      },
    },
  },
  1261: {
    day: 'Light showers of ice pellets',
    night: 'Light showers of ice pellets',
    icon: 374,
    playlistSettings: {
      cold: {
        acousticness: 0.8,
        danceability: 0.4,
        energy: 0.3,
        valence: 0.2,
      },
      mild: {
        acousticness: 0.7,
        danceability: 0.5,
        energy: 0.4,
        valence: 0.3,
      },
      warm: {
        acousticness: 0.6,
        danceability: 0.6,
        energy: 0.5,
        valence: 0.4,
      },
      hot: {
        acousticness: 0.5,
        danceability: 0.7,
        energy: 0.6,
        valence: 0.5,
      },
    },
  },
  1264: {
    day: 'Moderate or heavy showers of ice pellets',
    night: 'Moderate or heavy showers of ice pellets',
    icon: 377,
    playlistSettings: {
      cold: {
        acousticness: 0.9,
        danceability: 0.3,
        energy: 0.2,
        valence: 0.1,
      },
      mild: {
        acousticness: 0.8,
        danceability: 0.4,
        energy: 0.3,
        valence: 0.2,
      },
      warm: {
        acousticness: 0.7,
        danceability: 0.5,
        energy: 0.4,
        valence: 0.3,
      },
      hot: {
        acousticness: 0.6,
        danceability: 0.6,
        energy: 0.5,
        valence: 0.4,
      },
    },
  },
  1273: {
    day: 'Patchy light rain with thunder',
    night: 'Patchy light rain with thunder',
    icon: 386,
    playlistSettings: {
      cold: {
        acousticness: 0.4,
        danceability: 0.5,
        energy: 0.5,
        valence: 0.3,
      },
      mild: {
        acousticness: 0.5,
        danceability: 0.4,
        energy: 0.4,
        valence: 0.3,
      },
      warm: {
        acousticness: 0.6,
        danceability: 0.6,
        energy: 0.6,
        valence: 0.4,
      },
      hot: {
        acousticness: 0.5,
        danceability: 0.7,
        energy: 0.7,
        valence: 0.5,
      },
    },
  },
  1276: {
    day: 'Moderate or heavy rain with thunder',
    night: 'Moderate or heavy rain with thunder',
    icon: 389,
    playlistSettings: {
      cold: {
        acousticness: 0.3,
        danceability: 0.4,
        energy: 0.6,
        valence: 0.2,
      },
      mild: {
        acousticness: 0.4,
        danceability: 0.3,
        energy: 0.5,
        valence: 0.2,
      },
      warm: {
        acousticness: 0.4,
        danceability: 0.5,
        energy: 0.7,
        valence: 0.3,
      },
      hot: {
        acousticness: 0.3,
        danceability: 0.6,
        energy: 0.8,
        valence: 0.4,
      },
    },
  },
  1279: {
    day: 'Patchy light snow with thunder',
    night: 'Patchy light snow with thunder',
    icon: 392,
    playlistSettings: {
      cold: {
        acousticness: 0.6,
        danceability: 0.3,
        energy: 0.4,
        valence: 0.2,
      },
      mild: {
        acousticness: 0.5,
        danceability: 0.4,
        energy: 0.5,
        valence: 0.3,
      },
      warm: {
        acousticness: 0.4,
        danceability: 0.5,
        energy: 0.6,
        valence: 0.4,
      },
      hot: {
        acousticness: 0.3,
        danceability: 0.6,
        energy: 0.7,
        valence: 0.5,
      },
    },
  },
  1282: {
    day: 'Moderate or heavy snow with thunder',
    night: 'Moderate or heavy snow with thunder',
    icon: 395,
    playlistSettings: {
      cold: {
        acousticness: 0.7,
        danceability: 0.2,
        energy: 0.3,
        valence: 0.1,
      },
      mild: {
        acousticness: 0.6,
        danceability: 0.3,
        energy: 0.4,
        valence: 0.2,
      },
      warm: {
        acousticness: 0.5,
        danceability: 0.4,
        energy: 0.5,
        valence: 0.3,
      },
      hot: {
        acousticness: 0.4,
        danceability: 0.5,
        energy: 0.6,
        valence: 0.4,
      },
    },
  },
};
