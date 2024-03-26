import React from "react";
import styled from "styled-components";

const RESULT_TAB = [
  { idx: 0, name: "거래예측가" },
  { idx: 1, name: "교통" },
  { idx: 2, name: "주변시설" },
  { idx: 3, name: "주변뉴스" },
];

interface IResultBarMenu {
  scrollRef: any;
  tabMenuIdx: number;
}

export default function ResultBarMenu({
  scrollRef,
  tabMenuIdx,
}: IResultBarMenu) {
  const onClickTabMenu = (menu: number) => {
    console.log(menu);
    scrollRef.current[menu]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ResultBarMenuContainer>
      {RESULT_TAB.map(({ idx, name }) => (
        <ResultBarMenuItem
          key={idx}
          isActive={idx == tabMenuIdx}
          onClick={() => onClickTabMenu(idx)}
        >
          {name}
        </ResultBarMenuItem>
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
`;

const ResultBarMenuItem = styled.span<{ isActive: boolean }>`
  font-size: x-small;
  font-weight: 700;
  color: ${(props) => (props.isActive ? "black" : props.theme.colors.grayFont)};
  cursor: pointer;
  &.active {
    color: red;
  }
`;
