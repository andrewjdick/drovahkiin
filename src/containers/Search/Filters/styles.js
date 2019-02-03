import styled from "styled-components";
import { media } from "media.js";

export const FiltersWrapper = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1em;
  background-color: white;
  z-index: 1;

  display: ${({ isMobileNavigationOpen }) =>
    isMobileNavigationOpen ? "block" : "none"};

  ${media.desktop`
    flex: 0 1 25%;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100%;
  `};
`;

export const FilterWrapper = styled.div`
  padding: 1em 0;
  max-width: 50%;
`;

export const MultiFilterWrapper = styled(FilterWrapper)`
  display: flex;
  flex-direction: column;
`;

export const MultiFilterLabel = styled.label`
  margin-bottom: 0.5em;
  font-weight: bold;
`;

export const MultiFilterInputs = styled.div`
  display: flex;

  * + * {
    input,
    label {
      margin-left: 1rem;
    }
  }
`;
