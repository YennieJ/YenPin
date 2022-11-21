import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
}
html{
height: 100vh;
padding:0;
margin:0;
}
body {
height: 100vh;
padding:0;
margin: 0;
  }

  #root{
height: 100vh;
padding: 20px 10px;
  }

`;

export default GlobalStyle;
