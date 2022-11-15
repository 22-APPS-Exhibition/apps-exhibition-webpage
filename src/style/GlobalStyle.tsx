import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    ${reset}
    // 아래에 전역 스타일 추가
    html {
        font-family: 'Apple Sandoll Gothic Neo';
        background-color: ${theme.colors.bg};
    }
`;

export default GlobalStyle;
