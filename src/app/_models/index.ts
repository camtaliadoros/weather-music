import { Temperature } from '@/util/weatherCodes';

export interface Location {
  latitude: number | null;
  longitude: number | null;
}

export interface WeatherData {
  location: string;
  temperature: number;
  tempFeeling: Temperature;
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

export type AccessToken = {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
};

export type PlaylistResponse = {
  id: string;
};

export type TrackData = {
  name: string;
  artists: Artist[];
  id: string;
};
