import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/GlobalStyles";

export default function ResultBarSearch() {
  return (
    <ResultBarSearchContainer>
      <input />
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
  }
`;
