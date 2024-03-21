import styled from "styled-components";
import ResultBarHead from "./ResultBarHead";
import { useState } from "react";
import ResultBarSearch from "./ResultBarSearch";
import ResultBarMenu from "./ResultBarMenu";
import PredictedPrice from "./PredictedPrice/PredictedPrice";
import Traffic from "./Traffic/Traffic";
import Facilities from "./Facilities/Facilities";
import RelatedNews from "./RelatedNews/RelatedNews";

export default function ResultBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ResultBarContainer>
      {isOpen && <ResultBarSearch />}
      <ResultBarHead
        apartmentName={"현대아파트"}
        apartmentAdd={"서울특별시 영등포구 당산로 95"}
        setIsOpen={setIsOpen}
      />
      <ResultBarMenu />
      <ResultBodyBox>
        <PredictedPrice />
        <Traffic />
        <Facilities />
        <RelatedNews />
      </ResultBodyBox>
    </ResultBarContainer>
  );
}

const ResultBarContainer = styled.section`
  height: 100%;
  width: 20vw;
`;

const ResultBodyBox = styled.div``;
