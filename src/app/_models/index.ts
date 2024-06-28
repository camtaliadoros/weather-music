export interface Location {
  latitude: number | null;
  longitude: number | null;
}

export interface WeatherData {
  location: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  conditionCode: number;
  isDay: boolean;
}

export type Artist = {
  id: string;
  name: string;
};

export type ExternalUrls = {
  spotify: string;
};

export type ExternalIds = {
  isrc: string;
};

export type TrackObject = {
  available_markets: string[];
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  uri: string;
  artists: Artist[];
};
