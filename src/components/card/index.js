import React from "react";
import styles from "./styles.module.scss";
import  availableDates  from "../../utils/getAvailableDate";
import { getWeatherReport} from "../../utils/getWeatherReport";
import {toFahrenheitScale} from "../../utils/getFahrenheitTemperature";

export const Card = ({date, temperatureScale}) => {

  let currentDateObject =  availableDates.find((data)=> data.value === date );
  let weatherReport = getWeatherReport(currentDateObject.temperature);
  
  return (
    <div className={styles.widget}>
      <div className={styles.weatherIcon}>
        { weatherReport =='HOT' && <i className="wi wi-day-sunny"></i>}
        { weatherReport =='SUNNY' && <i className="wi wi-day-cloudy"></i>}
        { weatherReport =='COLD' && <i className="wi wi-snowflake-cold"></i>}
      </div>
      <div className={styles.weatherInfo}>
        <div className={styles.temperature}>
          {temperatureScale=="Fahrenheit" ? <span>
            {toFahrenheitScale(currentDateObject.temperature)}&deg;F
          </span>:
          <span>
            {currentDateObject.temperature}&deg;C
          </span>
        }
        </div>
        <div className={styles.description}>    
          <div className={styles.weatherCondition}>
            {weatherReport}
          </div> 
        </div>
      </div>  
      <div className={styles.date}>{date}</div>
    </div>
  )
}