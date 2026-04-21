import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
    background: ${theme.colors.gray900};
    color: ${theme.colors.gray300};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${theme.colors.gray300};
  }

  body, input, textarea, button {
    font: 400 1rem Inter, Roboto, sans-serif;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.gray900};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray600};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.gray500};
  }
`;

export default GlobalStyle as React.ComponentType;
