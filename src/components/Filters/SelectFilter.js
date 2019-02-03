import React from "react";
import { StyledWrapper, StyledLabel } from "./styles";

export const SelectFilter = ({ label, options, selected, ...inputProps }) => (
  <StyledWrapper>
    <StyledLabel>{label}</StyledLabel>
    <select {...inputProps} defaultValue={selected}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </StyledWrapper>
);
