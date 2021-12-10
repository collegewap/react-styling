import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Paragraph = styled.p`
  color: green;
  background: lightGreen;
  padding: 0.5rem 1rem;
`;

const StyledComponents = () => {
  return (
    <div>
      <Button>Normal Button</Button>
      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ab
        exercitationem soluta, consequatur obcaecati suscipit numquam dolorem,
        dignissimos quas nobis error repellat minus sed accusamus placeat, rerum
        illum magnam aspernatur?
      </Paragraph>
      <Button primary>Primary Button</Button>
    </div>
  );
};

export default StyledComponents;
