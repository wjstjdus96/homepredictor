import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

//공통 스타일 컴포넌트 추가
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
