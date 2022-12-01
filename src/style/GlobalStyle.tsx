import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    ${reset}
    // 아래에 전역 스타일 추가
    @font-face {
        font-family: 'NeoDunggeunmo';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    html {
        background-color: ${theme.colors.bg};
        color: white;
        font-family: 'NeoDunggeunmo';
        
        /* 1rem = 10px */
        font-size: 62.5%;
    }
`;

export default GlobalStyle;
