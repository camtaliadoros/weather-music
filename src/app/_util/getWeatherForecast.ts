import { Location } from '../_models';
import { convertKelvinToCelsius } from './utilities';

export const getWeatherForecast = async (location: Location) => {
  const { latitude, longitude } = location;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cfebdc2287f175a7d1c167020255efac`
  );
  const responseJson = await response.json();

  const weatherData = {
    location: responseJson.name,
    temperature: convertKelvinToCelsius(responseJson.main.temp),
    feelsLike: convertKelvinToCelsius(responseJson.main.feels_like),
    condition: responseJson.weather[0].main,
  };

  return weatherData;
};
