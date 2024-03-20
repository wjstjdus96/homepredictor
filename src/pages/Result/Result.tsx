import styled from "styled-components";
import Header from "../../components/Header/Header";
import ResultMap from "../../components/ResultMap/ResultMap";

export default function Result() {
  return (
    <ResultLayout>
      <Header />
      <ResultBodyBox>
        <ResultMap />
      </ResultBodyBox>
    </ResultLayout>
  );
}

const ResultLayout = styled.div``;

const ResultBodyBox = styled.main`
  display: flex;
`;
