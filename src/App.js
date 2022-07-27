import './App.css';
import { useState , useEffect} from "react";
import { Dropdown } from "./components/dropdown";
import { availableDates ,temperatureScales} from './utils/getAvailableDate';
import { Card } from "./components/card";

function App() {

  const [date, setDate] = useState(null);
  const [temperatureScale, setTemperatureScale]= useState('Celcius');

  return (
    <div className="App">
      <div className="dropdownFilters" >
        <Dropdown title="Select Date" items={availableDates()} setItem={setDate} hasReset />
        <Dropdown title="Temperature Scale" items={temperatureScales()} setItem={setDate} />
      </div>
      <Card/>
    </div>
  );
}

export default App;
