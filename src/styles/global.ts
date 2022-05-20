import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`



  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #2d3436;
  }

  html {
    font-size: 62.5%;


  }

  html, body, #__next {
    min-height: 100%;
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400px;
    background-color: #fafafa;

  }


`;

export default GlobalStyles;
