import styled from "styled-components";
import { media } from "media.js";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  max-height: calc(100vh - 75px);
  overflow: hidden;

  ${media.desktop`
    flex-direction: row;
    flex-wrap: wrap;
    max-height: none;
    overflow: auto;
  `};
`;
