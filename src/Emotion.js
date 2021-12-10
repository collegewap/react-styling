// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const color = "white";

const Emotion = () => {
  return (
    <div>
      <button
        css={css`
          margin: 0.5em 1em;
          padding: 0.25em 1em;
          cursor: pointer;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          border: none;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover Me
      </button>
      <p
        css={css`
          color: green;
          background: lightGreen;
          padding: 0.5rem 1rem;
        `}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ab
        exercitationem soluta, consequatur obcaecati suscipit numquam dolorem,
        dignissimos quas nobis error repellat minus sed accusamus placeat, rerum
        illum magnam aspernatur?
      </p>
    </div>
  );
};

export default Emotion;
