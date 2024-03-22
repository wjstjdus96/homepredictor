import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/GlobalStyles";

interface IResultBarHead {
  apartmentName: string;
  apartmentAdd: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ResultBarHead({
  apartmentName,
  apartmentAdd,
  setIsOpen,
}: IResultBarHead) {
  return (
    <ResultBarHeadContainer>
      <SearchTitleBox>
        <h5>{apartmentName}</h5>
        <p>{apartmentAdd}</p>
      </SearchTitleBox>
      <SearchButton onClick={() => setIsOpen((prev) => !prev)}>
        <img src={`${process.env.PUBLIC_URL}/img/search.png`} />
      </SearchButton>
    </ResultBarHeadContainer>
  );
}

const ResultBarHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px ${(props) => props.theme.padding.searchBar};
`;

const SearchTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  p {
    font-size: x-small;
  }
`;

const SearchButton = styled.button`
  ${flexCenter}
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 15px;
  height: 25px;
  width: 40px;
  cursor: pointer;
  img {
    width: 10px;
    height: 10px;
  }
`;
