import React from "react";
import styled from "styled-components";

export default function ResultBarMenu() {
  return (
    <ResultBarMenuContainer>
      <span>거래예측가</span>
      <span>교통</span>
      <span>주변시설</span>
      <span>관련뉴스</span>
    </ResultBarMenuContainer>
  );
}

const ResultBarMenuContainer = styled.div`
  padding: 4px ${(props) => props.theme.padding.searchBar};
  display: flex;
  gap: 10px;
  border-top: 2px solid ${(props) => props.theme.colors.grayFont};
  border-bottom: 2px solid ${(props) => props.theme.colors.grayFont};

  span {
    font-size: x-small;
    font-weight: 700;
    color: ${(props) => props.theme.colors.grayFont};
  }
`;
