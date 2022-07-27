import React from "react";
import styles from "./styles.module.scss";

export const Card = ({temperature, date}) => {
  
  return (
    <div className={styles.widget}>
      <div className={styles.weatherIcon}><i className="wi wi-day-sunny"></i></div>
      <div className={styles.weatherInfo}>
        <div className={styles.temperature}><span>25&deg;c</span></div>
        <div className={styles.description}>    
          <div className={styles.weatherCondition}>SUNNY</div> 
        </div>
      </div>  
      <div className={styles.date}>1st Jan</div>
    </div>
  )
}