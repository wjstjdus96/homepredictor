import styled from "styled-components";
import ResultBarBodyTemplate from "../ResultBarBodyTemplate";

export default function PredictedPrice() {
  return (
    <ResultBarBodyTemplate title="거래예측가">
      <PredictedPriceContainer></PredictedPriceContainer>
    </ResultBarBodyTemplate>
  );
}

const PredictedPriceContainer = styled.div`
  height: 20rem;
`;
