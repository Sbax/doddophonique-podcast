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

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    color: ${theme.secondary};
    text-decoration: none;

    transition: color 300ms ease-in-out;

    &:hover {
      color: ${theme.primary};
    }
  }

  h1 {
    font-weight: bold;
  }

  p {
    line-height: 1.2rem;
  }
`;

export default GlobalStyle;
