export const getWeatherReport = (temperature) => {

  if(temperature <= 15){
    return "COLD";
  }else if(temperature > 15 && temperature <= 30){
    return "SUNNY";
  }
  
  return "HOT";
  
}