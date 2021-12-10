import React from "react";
import styles from "./ButtonTwo.module.css"; // Import css modules stylesheet as styles

const ButtonTwo = () => {
  return (
    <div>
      <button className={styles.button}>Hover Me</button>
    </div>
  );
};

export default ButtonTwo;
