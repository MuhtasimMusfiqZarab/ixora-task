
export const formatTemperature = (temperature, temperatureScale) => {
  let toFahrenheitTemp = (celciusTemp * 9/5) + 32;
  return toFahrenheitTemp;
}