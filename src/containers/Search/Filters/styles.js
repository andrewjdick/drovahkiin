import styled from "styled-components";
import { media } from "media.js";

export const FiltersWrapper = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1em;
  background-color: white;
  z-index: 1;

  display: ${({ isMobileNavigationOpen }) =>
    isMobileNavigationOpen ? "block" : "none"};

  ${media.desktop`
    flex: 1 1 25%;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100%;
    max-width: 400px;
  `};
`;

export const FilterWrapper = styled.div`
  padding: 1em 0;

  ${media.tablet`
    max-width: 50%;
  `};
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

export const SubmitButton = styled.input`
  appearance: none;
  padding: 10px 20px;
  transition: all 400ms;
  border: 1px solid black;

  &:hover {
    background-color: whitesmoke;
    box-shadow: rgb(228, 227, 227) 0px 2px 4px;
  }

  ${media.desktop`
    display: none;
  `};
`;
