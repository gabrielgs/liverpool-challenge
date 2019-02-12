import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    background-color: #f5f5f5;
  }

  a {
    text-decoration: none;
    display: block;
  }

  img {
    vertical-align: middle;
  }
`;

export {
  GlobalStyle
}
