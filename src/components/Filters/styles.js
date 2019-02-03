import styled from "styled-components";

export const FiltersWrapper = styled.aside`
  flex: 0 1 25%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  min-height: 100%;
`;

export const FilterWrapper = styled.div`
  padding: 1em 0;
`;

export const MultiFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0;
`;

export const MultiFilterLabel = styled.label`
  margin-bottom: 0.5em;
  font-weight: bold;
`;

export const MultiFilterInputs = styled.div`
  display: flex;
`;
