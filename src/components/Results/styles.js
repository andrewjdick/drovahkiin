import styled from "styled-components";

export const ResultsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 0.5em;
  overflow: auto;
`;

export const ResultWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  margin-top: 1em;
`;

export const PaginationButton = styled.input`
  margin: 1em;
  padding: 10px 20px;
`;
