import styled from "styled-components";
import ResultBarBodyTemplate from "../ResultBarBodyTemplate";

export interface IResultBodyTemplate {
  scrollRef: any;
}

export default function PredictedPrice({ scrollRef }: IResultBodyTemplate) {
  return (
    <ResultBarBodyTemplate title="거래예측가" scrollRef={scrollRef}>
      <PredictedPriceContainer></PredictedPriceContainer>
    </ResultBarBodyTemplate>
  );
}

const PredictedPriceContainer = styled.div`
  height: 20rem;
`;
