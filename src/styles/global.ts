import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

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
    background-image: linear-gradient(to left, ${theme.colors.white}, ${theme.colors.lightGrey});
}

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  /* --------- */
  /*Scrollbar   */
  /* --------- */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${theme.colors.lightGrey};
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
