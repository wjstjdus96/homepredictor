import React from "react";
import styled from "styled-components";

interface IResultBarHead {
  apartmentName: string;
  apartmentAdd: string;
}

export default function ResultBarHead({
  apartmentName,
  apartmentAdd,
}: IResultBarHead) {
  return (
    <ResultBarHeadContainer>
      <SearchTitleBox>
        <h5>{apartmentName}</h5>
        <p>{apartmentAdd}</p>
      </SearchTitleBox>
      <button>검색</button>
    </ResultBarHeadContainer>
  );
}

const ResultBarHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px ${(props) => props.theme.padding.searchBar};
`;

const SearchTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  p {
    font-size: x-small;
  }
`;
