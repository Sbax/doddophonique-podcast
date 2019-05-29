import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    background: ${theme.mainBg};
    color: ${theme.text};
  }

  a {
    color: ${theme.accent};
    text-decoration: none;
  }
`;

export default GlobalStyle;
