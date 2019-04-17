import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    background: ${props => props.theme.background};
    font-size: 62.5%;
  }

  body {
    color: white;
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;;
    margin: 0;
    padding: 0;
  }

  .ReactModal__Body--open {
    overflow: hidden;
  }
`;

export default GlobalStyle;
