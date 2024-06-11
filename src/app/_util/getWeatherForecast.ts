import { Location, WeatherData } from '../_models';
import { convertKelvinToCelsius } from './utilities';

export const getWeatherForecast = async (location: Location) => {
  const { latitude, longitude } = location;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
  );
  const responseJson = await response.json();

  const weatherData: WeatherData = {
    location: responseJson.name,
    temperature: convertKelvinToCelsius(responseJson.main.temp),
    feelsLike: convertKelvinToCelsius(responseJson.main.feels_like),
    condition: responseJson.weather[0].main,
  };

  return weatherData;
};
