import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

//`normalize`로 기본 css 초기화
const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    margin: 0;
    overflow: hidden;
    height: 100%;
  }
  ul{
    list-style: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
