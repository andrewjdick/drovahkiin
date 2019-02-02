import styled, { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "media.js";

export const GlobalStyles = createGlobalStyle`
  ${reset};

  html {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  body, div#root {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    font-size: 1rem;
		font-weight: 400;
		line-height: 1.2rem;
    background-color: whitesmoke;
    width: 100%;
    height: 100%;
    

    ${media.tablet`
      font-size: 1.2rem;
		  font-weight: 400;
		  line-height: 1.6rem;
    `}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: serif;
  }

`;

export const AppWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
`;
