interface Window {
  onSpotifyWebPlaybackSDKReady: () => void;
  Spotify: {
    Player: new (options: SpotifyPlayerOptions) => SpotifyPlayer;
  };
}

interface SpotifyPlayerOptions {
  name: string;
  getOAuthToken: (cb: (token: string) => void) => void;
  volume?: number;
}

interface SpotifyPlayer {
  connect: () => Promise<boolean>;
  addListener: (string, cb) => void;
  connect: () => void;
  previousTrack: () => void;
  togglePlay: () => void;
  nextTrack: () => void;
}
