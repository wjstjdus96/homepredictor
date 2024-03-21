import styled from "styled-components";
import ResultBarHead from "./ResultBarHead";
import { useState } from "react";
import ResultBarSearch from "./ResultBarSearch";

export default function ResultBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ResultBarLayout>
      {isOpen && <ResultBarSearch />}
      <ResultBarHead
        apartmentName={"현대아파트"}
        apartmentAdd={"서울특별시 영등포구 당산로 95"}
        setIsOpen={setIsOpen}
      />
    </ResultBarLayout>
  );
}

const ResultBarLayout = styled.section`
  height: 100%;
  width: 20vw;
`;
