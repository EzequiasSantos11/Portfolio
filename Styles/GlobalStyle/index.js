import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #ff6a00;
  }
  * {
    color: #333;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  
  html,
  body {
    font-family: 'Roboto', 'Poppins', sans-serif;
    
  }
  h1,
  h2,
  h3,
  h4,
  h5{
    color: var(--primary);
  }
  button,
  a {
    color: black;
  }
`;

export default GlobalStyle;
