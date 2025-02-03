import React from 'react';
import styles from './Can.module.css';

const Can = ({ text, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img 
          src={icon} 
          alt="icon" 
          className={styles.image}
        />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Can;