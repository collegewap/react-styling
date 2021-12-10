import React from "react";
import styles from "./ButtonOne.module.css"; // Import css modules stylesheet as styles

const ButtonOne = () => {
  return (
    <div>
      <button className={styles.button}>Hover Me</button>
    </div>
  );
};

export default ButtonOne;
