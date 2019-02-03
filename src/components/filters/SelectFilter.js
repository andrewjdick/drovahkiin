import React from "react";
import { arrayOf, shape, string } from "prop-types";
import { StyledWrapper, StyledLabel } from "./styles";

export const SelectFilter = ({ label, options, ...inputProps }) => (
  <StyledWrapper>
    <StyledLabel>{label}</StyledLabel>
    <select {...inputProps}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </StyledWrapper>
);

SelectFilter.propTypes = {
  label: string,
  options: arrayOf(
    shape({
      value: string,
      label: string
    })
  )
};
