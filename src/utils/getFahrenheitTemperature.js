export const toFahrenheitScale = (celciusTemp) => {
  let toFahrenheitTemp = (celciusTemp * 9/5) + 32;
  return toFahrenheitTemp;
}