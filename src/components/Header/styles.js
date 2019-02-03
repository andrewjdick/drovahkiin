import styled from "styled-components";
import { media } from "media.js";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

export const HeaderInnerWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1em;
`;

export const MobileNav = styled.div`
  cursor: pointer;

  ${media.desktop`
    display: none;
  `}
`;
