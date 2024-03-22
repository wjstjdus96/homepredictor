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
export const descLeft = css`
  h1{
        width: 100%;
        color: black;
        font-size: 3em;
        margin-bottom: 25px;
        text-align: left;
    }
    div{
        display: flex;
        flex-direction: column;
        width: 100%;
        p{
            margin: 1px 0;
            color: #828282;
            text-align: left;
        }
    }
`
export const descRight = css`
  h1{
        width: 100%;
        color: black;
        font-size: 3em;
        margin-bottom: 25px;
        text-align: right;
    }
    div{
        display: flex;
        flex-direction: column;
        width: 100%;
        p{
            margin: 1px 0;
            color: #828282;
            text-align: right;
        }
    }
`