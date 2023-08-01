import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100vh;
    height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;
export default GlobalStyle;
