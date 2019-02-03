import styled, { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "media.js";

export const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  html {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  body, div#root {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
		font-weight: 400;
		line-height: 1.2rem;
    width: 100%;
    height: 100%;
    
    ${media.tablet`
      font-size: 1.2rem;
		  font-weight: 400;
		  line-height: 1.6rem;
    `}
  }

`;

export const AppWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  ${media.desktop`
    flex-direction: row;
  `};
`;
