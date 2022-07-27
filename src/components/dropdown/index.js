import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";

export const Dropdown = ({
  title,
  items,
  setItem,
  isInline,
  hasReset
}) => {
  const dropWrap = useRef(null);
  const [opened, setOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleChange = (item) => {
    setOpened(false);
    setSelectedItem(item);
    setItem(item);
  };

  const resetFilter = () => {
    setOpened(false);
    setSelectedItem("-");
    setItem(null);
  };


  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (opened && dropWrap.current && !dropWrap.current.contains(e.target)) {
        setOpened(false);
      }
    };
    
    

      document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [opened]);

  useEffect(()=>{

    if(!hasReset && items){
      setSelectedItem(items[0].value);
    }else{
      setSelectedItem('-');
    }
  },[hasReset, items])

  return (
    <div className={`${styles.container} ${isInline && styles.container_inline}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.select_box} ref={dropWrap}>
        <div
          className={`${styles.options_container} ${opened ? styles.active : ""
            }`}
        >
        
        {
            hasReset && <div className={styles.option} onClick={() => resetFilter()}>
            <input type="radio" name="category" />
            <label>-</label>
          </div> 
        }

          {
            items?.map((element, index) => {
              return (
                <div
                  className={styles.option}
                  key={index}
                  onClick={() => handleChange(element.value)}
                >
                  <input type="radio" name="category" />
                  <label>{element.value}</label>
                </div>
              );
            })
          }
        </div>
        <div className={styles.selected} onClick={() => setOpened(!opened)}>
          {selectedItem}
        </div>
      </div>
    </div>
  );
};
