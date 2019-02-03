import React from "react";
import { StyledWrapper, StyledLabel, StyledInput } from "./styles";

export const InputFilter = ({ id, label, onFilterChange, ...inputProps }) => (
  <StyledWrapper>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    <StyledInput id={id} {...inputProps} />
  </StyledWrapper>
);

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
