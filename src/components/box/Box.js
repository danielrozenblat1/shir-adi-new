import { useEffect } from "react";
import styles from "./Box.module.css";

const Box = (props) => {
  useEffect(() => {
    // ScrollReveal code commented out as in original
    // Can be uncommented when ScrollReveal is properly imported
  }, []);

  return (
    <div className={styles.box}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.icon}>
        <img 
          src={props.icon} 
          alt={props.title} 
          className={styles.image}
        />
      </div>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
};

export default Box;
