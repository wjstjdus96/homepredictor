import styled from "styled-components";
import ResultBarHead from "./ResultBarHead";
import { useState, useRef, useEffect } from "react";
import ResultBarSearch from "./ResultBarSearch";
import ResultBarMenu from "./ResultBarMenu";
import PredictedPrice from "./PredictedPrice/PredictedPrice";
import Traffic from "./Traffic/Traffic";
import Facilities from "./Facilities/Facilities";
import RelatedNews from "./RelatedNews/RelatedNews";

export default function ResultBar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLElement[] | null[]>([]);
  const tabMenuRef = useRef<HTMLElement[] | null[]>([]);
  const [tabMenuIdx, setTabMenuIdx] = useState(100);

  useEffect(() => {
    scrollRef.current[tabMenuIdx]?.scrollIntoView({ behavior: "smooth" });
  }, [scrollRef, tabMenuIdx]);

  useEffect(() => {
    var resultBody = document.getElementById("resultBody");
    const changeTabMenuStyle = () => {
      scrollRef.current.forEach((ref, idx) => {
        const targetTop = ref?.offsetTop! - ref?.offsetHeight!;
        const scrollTop = resultBody?.scrollTop!;
        if (targetTop < scrollTop) {
          tabMenuRef.current.forEach((ref, tabIdx) => {
            if (idx == tabIdx) {
              ref!.className += " active";
            } else {
              ref!.className = ref!.className.replace(" active", "");
            }
          });
        }
      });
    };
    resultBody!.addEventListener("scroll", changeTabMenuStyle);
    return () => {
      resultBody!.removeEventListener("scroll", changeTabMenuStyle);
    };
  }, [scrollRef]);

  return (
    <ResultBarContainer>
      {isOpen && <ResultBarSearch />}
      <ResultBarHead
        apartmentName={"현대아파트"}
        apartmentAdd={"서울특별시 영등포구 당산로 95"}
        setIsOpen={setIsOpen}
      />
      <ResultBarMenu tabMenuRef={tabMenuRef} setTabMenu={setTabMenuIdx} />
      <ResultBodyBox id="resultBody">
        <PredictedPrice
          scrollRef={(ref: any) => (scrollRef.current[0] = ref)}
        />
        <Traffic scrollRef={(ref: any) => (scrollRef.current[1] = ref)} />
        <Facilities scrollRef={(ref: any) => (scrollRef.current[2] = ref)} />
        <RelatedNews scrollRef={(ref: any) => (scrollRef.current[3] = ref)} />
      </ResultBodyBox>
    </ResultBarContainer>
  );
}

const ResultBarContainer = styled.section`
  height: 100%;
  width: 20vw;
  display: flex;
  flex-direction: column;
`;

const ResultBodyBox = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
