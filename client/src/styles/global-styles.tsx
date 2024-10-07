import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --text: #e0d6fb;
    --background: #0b0325;
    --primary: #9f81f3;
    --secondary: #9f0f62;
    --accent: #ed3b5b;

    --text-50: #ede8fd;
    --text-100: #dcd1fa;
    --text-200: #b8a2f6;
    --text-300: #9574f1;
    --text-400: #7245ed;
    --text-500: #4f17e8;
    --text-600: #3f12ba;
    --text-700: #2f0e8b;
    --text-800: #1f095d;
    --text-900: #10052e;
    --text-950: #080217;

    --background-50: #ece7fd;
    --background-100: #dad0fb;
    --background-200: #b5a1f7;
    --background-300: #9071f4;
    --background-400: #6b42f0;
    --background-500: #4613ec;
    --background-600: #380fbd;
    --background-700: #2a0b8e;
    --background-800: #1c085e;
    --background-900: #0e042f;
    --background-950: #070218;

    --primary-50: #ede8fd;
    --primary-100: #dcd0fb;
    --primary-200: #b8a2f6;
    --primary-300: #9573f2;
    --primary-400: #7144ee;
    --primary-500: #4e16e9;
    --primary-600: #3e11bb;
    --primary-700: #2f0d8c;
    --primary-800: #1f095d;
    --primary-900: #10042f;
    --primary-950: #080217;

    --secondary-50: #fde8f4;
    --secondary-100: #fbd0e9;
    --secondary-200: #f6a2d3;
    --secondary-300: #f273bd;
    --secondary-400: #ee44a7;
    --secondary-500: #e91691;
    --secondary-600: #bb1174;
    --secondary-700: #8c0d57;
    --secondary-800: #5d093a;
    --secondary-900: #2f041d;
    --secondary-950: #17020f;

    --accent-50: #fde8ec;
    --accent-100: #fbd0d8;
    --accent-200: #f6a2b1;
    --accent-300: #f2738a;
    --accent-400: #ee4463;
    --accent-500: #e9163c;
    --accent-600: #bb1130;
    --accent-700: #8c0d24;
    --accent-800: #5d0918;
    --accent-900: #2f040c;
    --accent-950: #170206;
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
    background-color: var(--background);
    color: var(--text)
  }

  input,
  button,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
  }
`;
