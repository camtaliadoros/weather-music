export const convertKelvinToCelsius = (tempKelvin: number) => {
  const tempCelsius = Math.round(tempKelvin - 273.15);

  return tempCelsius;
};
