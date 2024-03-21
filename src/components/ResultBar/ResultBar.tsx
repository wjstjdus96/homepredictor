import styled from "styled-components";
import ResultBarHead from "./ResultBarHead";

export default function ResultBar() {
  return (
    <ResultBarLayout>
      <ResultBarHead
        apartmentName={"현대아파트"}
        apartmentAdd={"서울특별시 영등포구 당산로 95"}
      />
    </ResultBarLayout>
  );
}

const ResultBarLayout = styled.section`
  height: 100%;
  width: 20vw;
`;
