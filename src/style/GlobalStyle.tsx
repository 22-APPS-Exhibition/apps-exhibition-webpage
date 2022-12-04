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
    @media all and (max-width: 120rem){
	//브라우저 창 width가 1024px보다 작아지는 순간부터 적용
	//태블릿
        html {
            font-size: 40%
        }
    }
    @media all and (max-width: 80rem){
        //브라우저 창 width가 768px보다 작아지는 순간부터 적용
        //모바일
        html {
            font-size: 20%
        }
    }
    @media all and (max-width: 40rem){
        //브라우저 창 width가 768px보다 작아지는 순간부터 적용
        //모바일
        html {
            font-size: 10%
        }
    }
`;

export default GlobalStyle;
