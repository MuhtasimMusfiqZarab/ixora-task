import { v4 as uuidv4 } from 'uuid';

export const temperatureScales = () => {

  let scales = [{
    id: uuidv4(),
    value :'Celcius'
  },{
    id: uuidv4(),
    value: 'Fahrenheit'
  }]

  return scales;

}