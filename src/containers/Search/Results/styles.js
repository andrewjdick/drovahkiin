import styled from "styled-components";

export const ResultsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0.5em;
  overflow: auto;
`;

export const ResultsAvailable = styled.h1`
  padding: 0.5em;
  font-size: 2rem;
  line-height: 2.5rem;
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  transition: opacity 200ms ease-out;
`;

export const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1em;
  margin-top: 1em;
`;

export const PaginationButton = styled.input`
  appearance: none;
  margin: 1em;
  padding: 10px 20px;
  transition: all 400ms;
  border: 1px solid black;

  &:hover:not(:disabled) {
    background-color: whitesmoke;
    box-shadow: rgb(228, 227, 227) 0px 2px 4px;
  }

  &:disabled {
    border: none;
    opacity: 0.75;
  }
`;

export const PaginationText = styled.span`
  flex: 1 1 100%;
  text-align: center;
`;
