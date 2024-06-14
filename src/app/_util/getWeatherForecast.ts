import { Location, WeatherData } from '../_models';

export const getWeatherForecast = async (location: Location) => {
  const { latitude, longitude } = location;
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?q=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );
  const responseJson = await response.json();

  const weatherData: WeatherData = {
    location: responseJson.location.name,
    temperature: responseJson.current.temp_c,
    feelsLike: responseJson.current.feelslike_c,
    condition: responseJson.current.condition.text,
  };

  return weatherData;
};
