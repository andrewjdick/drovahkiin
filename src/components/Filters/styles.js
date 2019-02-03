import styled from "styled-components";
import { media } from "media.js";

export const FiltersWrapper = styled.aside`
  flex: 0 1 25%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  min-height: 100%;

  ${media.tablet`
    flex: 1;
    max-width: 350px;
  `};
`;

export const FilterWrapper = styled.div`
  padding: 1em 0;
`;

export const MultiFilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em 0;

  * + * {
    margin-right: 10px;
  }
`;

export const MultiFilterLabel = styled.label`
  flex: 1 1 100%;
  margin-bottom: 0.5em;
`;
