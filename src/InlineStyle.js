import React from "react";

const InlineStyle = () => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#0ea5e9",
          border: "none",
          color: "white",
          borderRadius: "0.5rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        Hover Me
      </button>
      <p
        style={{
          color: "green",
          background: "lightGreen",
          padding: "0.5rem 1rem",
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ab
        exercitationem soluta, consequatur obcaecati suscipit numquam dolorem,
        dignissimos quas nobis error repellat minus sed accusamus placeat, rerum
        illum magnam aspernatur?
      </p>
    </div>
  );
};

export default InlineStyle;
