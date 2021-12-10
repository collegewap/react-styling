import React from "react";
import styles from "./Paragraph.module.css"; // Import css modules stylesheet as styles

const Paragraph = () => {
  return (
    <div>
      <p className={styles.paragraph}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ab
        exercitationem soluta, consequatur obcaecati suscipit numquam dolorem,
        dignissimos quas nobis error repellat minus sed accusamus placeat, rerum
        illum magnam aspernatur?
      </p>
    </div>
  );
};

export default Paragraph;
