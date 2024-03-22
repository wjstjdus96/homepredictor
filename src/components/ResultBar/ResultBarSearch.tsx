import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/GlobalStyles";
import { FaSearch } from "react-icons/fa";

export default function ResultBarSearch() {
  return (
    <ResultBarSearchContainer>
      <FaSearch />
      <input placeholder="주소, 건물명 등을 입력하세요" />
    </ResultBarSearchContainer>
  );
}

const ResultBarSearchContainer = styled.div`
  ${flexCenter}
  padding: 15px ${(props) => props.theme.padding.searchBar} 0;
  position: relative;

  input {
    width: 100%;
    height: 30px;
    border-radius: 20px;
    border: 3px solid ${(props) => props.theme.colors.primary};
    padding-left: 2rem;
    font-size: small;
    &::placeholder {
      color: ${(props) => props.theme.colors.primary};
    }
    &:focus {
      outline: none;
    }
  }

  svg {
    position: absolute;
    left: 1.3rem;
    color: ${(props) => props.theme.colors.primary};
  }
`;
