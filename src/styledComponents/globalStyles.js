import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:200,300,400,700');

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${props => props.theme.colors.bg2};
    padding: 0;
    margin: 0;
    line-height: 1.5;
    font-family: 'Titillium Web', sans-serif;
    color: ${props => props.theme.colors.text};
  }

  h1 {
    font-size: 1.3rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  input, textarea {
    font-size: 1rem;
    font-family: inherit;
    line-height: 1.5;
    resize: none;
    border-radius: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .error-message {
    background-color: rgba(99,0,0,.2);
    padding: .5em;
    border-radius: 5px;
    border: 1px solid rgb(99,0,0);
  }
`;

export default GlobalStyle;
