import React from "react";
import styled from "styled-components";

const RESULT_TAB = [
  { idx: 0, name: "거래예측가" },
  { idx: 1, name: "교통" },
  { idx: 2, name: "주변시설" },
  { idx: 3, name: "주변뉴스" },
];

interface IResultBarMenu {
  tabMenuRef: any;
  setTabMenu: React.Dispatch<React.SetStateAction<number>>;
}

export default function ResultBarMenu({
  tabMenuRef,
  setTabMenu,
}: IResultBarMenu) {
  return (
    <ResultBarMenuContainer>
      {RESULT_TAB.map(({ idx, name }) => (
        <span
          key={idx}
          ref={(ref) => (tabMenuRef.current[idx] = ref)}
          onClick={() => {
            setTabMenu(idx);
          }}
        >
          {name}
        </span>
      ))}
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
    cursor: pointer;
  }
`;
