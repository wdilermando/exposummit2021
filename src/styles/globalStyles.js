import { createGlobalStyle } from 'styled-components';
import ck1 from '../assets/images/ck1.png';

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
  .inputLabel {
    background-color: #225C9C !important;
    color:#fff;
    font-weight: 700;
  }

  .inputLabel::placeholder {
    color: white;
  }
  .form-group input::placeholder{
    color:#225C9C;
    font-weight: 700;
  }
  .custom-checkbox label{
    color:#225C9C !important;
  }
`;

export default GlobalStyle;
