import styled from "styled-components";
import Header from "../../components/Header/Header";
import ResultMap from "../../components/ResultMap/ResultMap";
import ResultBar from "../../components/ResultBar/ResultBar";

export default function Result() {
  return (
    <ResultLayout>
      <Header />
      <ResultBodyBox>
        <ResultBar />
        <ResultMap lat={33.5563} lng={126.79581} />
      </ResultBodyBox>
    </ResultLayout>
  );
}

const ResultLayout = styled.div``;

const ResultBodyBox = styled.main`
  display: flex;
`;
