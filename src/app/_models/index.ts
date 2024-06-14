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
