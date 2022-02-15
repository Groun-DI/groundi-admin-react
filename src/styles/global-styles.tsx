import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

//`normalize`로 기본 css 초기화
const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    margin: 0;
    width:100%;
    height: 100%;
  }
  ul{
    list-style: none;
  }
  * {
    box-sizing: border-box;
  }
  input:focus { outline: none; }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
`;

export default GlobalStyle;
