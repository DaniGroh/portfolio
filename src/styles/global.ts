import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  -webkit-font-smoothing: antialiased;
}

  html,
  body {
    min-height: 100vh;
    height: 100vh;
    line-height: 1.3;
    background-image: linear-gradient(to left, ${theme.colors.white}, ${theme.colors.lightGrey});
    background: ${theme.colors.gray900};
    color: ${theme.colors.gray300};
}

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${theme.colors.gray300};
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  /* --------- */
  /*Scrollbar   */
  /* --------- */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${theme.colors.gray700};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.grey};
    border-radius: 12px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(148, 148, 148, 0.911);
    border-radius: 12px;
  }
`;
export default GlobalStyle;
