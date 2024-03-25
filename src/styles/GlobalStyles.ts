import { createGlobalStyle, css, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

//공통 스타일 컴포넌트 추가
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const descLeft = css`
  h2 {
    width: 100%;
    color: black;
    font-size: 3em;
    margin-bottom: 25px;
    text-align: left;
    @media (max-width: 600px) {
      font-size: 2em;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    p {
      margin: 1px 0;
      color: #828282;
      text-align: left;
      @media (max-width: 600px) {
        font-size: 0.75em;
      }
    }
  }
`;
export const descRight = css`
  h2 {
    width: 100%;
    color: black;
    font-size: 3em;
    margin-bottom: 25px;
    text-align: right;
    @media (max-width: 600px) {
      font-size: 2em;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    p {
      margin: 1px 0;
      color: #828282;
      text-align: right;
      @media (max-width: 600px) {
        font-size: 0.75em;
      }
    }
  }
`;
export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
