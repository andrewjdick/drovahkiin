import styled, { css } from "styled-components";
import { media } from "media.js";

export const ResultContainer = styled.div`
  flex: 1 0 100%;

  ${media.tablet`
    max-width: 50%;
  `};

  ${media.desktop`
    max-width: 33%;
  `};
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1 0 100%;
  margin: 0.5em;
  padding: 0.5em;
  height: 250px;
  transition: all 500ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
  cursor: pointer;
  background-color: rgb(245, 245, 245);

  ${({ bgImage }) => css`
    background-image: url(${bgImage});
    background-size: 75%;
    background-position: center;
    background-repeat: no-repeat;
  `};

  &:hover {
    background-size: 80%;
    box-shadow: rgb(228, 227, 227) 0px 2px 4px;
  }
`;

export const CarInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const CarPrice = styled.span`
  flex: 0 1 100%;
  text-align: right;
`;

export const CarBrand = styled.span`
  flex: 0 1 100%;
  color: rgb(0, 30, 255);
  font-size: 1rem;
`;

export const CarModel = styled.span``;
