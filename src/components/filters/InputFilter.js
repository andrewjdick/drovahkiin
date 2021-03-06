import React from "react";
import { string } from "prop-types";
import { StyledWrapper, StyledLabel, StyledInput } from "./styles";

export const InputFilter = ({ id, label, ...inputProps }) => (
  <StyledWrapper>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    <StyledInput id={id} {...inputProps} />
  </StyledWrapper>
);

InputFilter.propTypes = {
  id: string,
  label: string
};
