import styled from "styled-components";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface CurrentPage {
  curpage: string;
}

export default function Header() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [curPage, setCurPage] = useState("/");
  const onClickLogo = () => {
    navigate("/");
  };

  useEffect(() => {
    setCurPage(location);
  }, [location]);

  return (
    <HeaderLayout curpage={curPage}>
      <h2 onClick={onClickLogo}>Home Predictor</h2>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.header<CurrentPage>`
  background-color: ${(props) =>
    props.curpage === "/" ? "rgba(0,0,0,0)" : props.theme.colors.primary};
  height: 7vh;
  display: flex;
  align-items: center;

  h2 {
    color: white;
    margin-left: 1rem;
    font-weight: 700;
    cursor: pointer;
  }
`;
