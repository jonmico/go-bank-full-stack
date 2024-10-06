import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  ul,
  ol {
    list-style: none;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1, h2, h3, h4,
  button, input, label {
    line-height: 1.1;
  }

  input,
  button,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
  }
`;
