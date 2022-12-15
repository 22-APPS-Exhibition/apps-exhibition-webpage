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
  @media all and (max-width: 1450px) {
    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
    html {
      font-size: 7px;
    }
  }
  @media all and (max-width: 1024px) {
    //브라우저 창 width가 1024px보다 작아지는 순간부터 적용
    //태블릿
    html {
      font-size: 5px;
    }
  }
  @media all and (max-width: 768px) {
    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    html {
      font-size: 4px;
    }
  }
  @media all and (max-width: 425px) {
    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    html {
      font-size: 2px;
    }
  }
  @media all and (max-width: 320px) {
    //브라우저 창 width가 768px보다 작아지는 순간부터 적용
    //모바일
    html {
      font-size: 1px;
    }
  }
`;

export default GlobalStyle;
