import { v4 as uuidv4 } from 'uuid';
export const availableDates = () => {
  let dates =[{
    id: uuidv4(),
    value:"16/07/2022",
    temperature: "17.7"
  },{
    id: uuidv4(),
    value: "17/07/2022",
    temperature: "18.7"
  },
  {
    id: uuidv4(),
    value:"18/07/2022",
    temperature: "19.7"
  }];

  return dates;
}