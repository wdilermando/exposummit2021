import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x:hidden;
    font-family: 'Cabin', sans-serif;
    text-rendering: optimizeLegibility;  
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  .bg-expo {
    background-color: #F8633B;
    box-shadow: 0px 5px 10px 0px #0000001a;
  }
  .links-menu a {
      color: white !important;
  }
`;

export default GlobalStyle;
