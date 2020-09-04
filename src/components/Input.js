import React from "react";
import styled from "styled-components";

const Input = ({ name, children, placeholder, ...rest }) => (
  <Wrapper>
    <Label htmlFor={name}>
      <span>{children}</span>
      <ActualInput
        name={name}
        id={name}
        placeholder={placeholder || "Type here"}
        {...rest}
      />
    </Label>
  </Wrapper>
);

export default Input;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1rem 1rem 1rem;
  margin-bottom: 1rem;

  &:focus-within {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Label = styled.label`
  span {
    display: block;
    font-size: 14px;
    opacity: 0.5;
    color: inherit;
    font-family: inherit;
    //  margin-bottom: 10px;
  }
`;

const ActualInput = styled.input`
  display: block;
  font-size: 16px;
  border: none;
  color: inherit;
  opacity: 1;
  font-family: inherit;
  width: 100%;
  background-color: transparent;
`;
