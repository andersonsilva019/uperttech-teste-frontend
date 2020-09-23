import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root{
    height: 100vh;
    width: 100vw;
  }

  body, input, button {
    font-family: 'Montserrat', serif;
  }

  #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html {
    font-size: 62.5%;
  }
`;
