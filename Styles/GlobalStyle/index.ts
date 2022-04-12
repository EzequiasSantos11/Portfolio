import {createGlobalStyle} from   'styled-components';

export default createGlobalStyle`
  * {
    color: #333;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  body{
    font-size: 14px;
    font-family: 'Roboto', 'Poppins', sans-serif;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textColor};
    h1, h2, h3, h4{
      color: ${props => props.theme.colors.titleColor};
    }
  }
`;

