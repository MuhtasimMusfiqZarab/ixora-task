import './App.css';
import { useState } from "react";
import { Dropdown } from "./components/dropdown";
import  availableDates  from './utils/getAvailableDate';
import  temperatureScales  from "./utils/getTemperatureScales";
import { Card } from "./components/card";

function App() {

  const [date, setDate] = useState(null);
  const [temperatureScale, setTemperatureScale]= useState('Celcius');

  return (
    <div className="App">
      <div className="dropdownFilters" >
        <Dropdown title="Select Date" items={availableDates} setItem={setDate} hasReset />
        <Dropdown title="Temp Scale" items={temperatureScales} setItem={setTemperatureScale} />
      </div>
      { date && <Card date={date} temperatureScale={temperatureScale} />}
    </div>
  );
}

export default App;
