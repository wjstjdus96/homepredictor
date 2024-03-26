import styled from "styled-components";
import ResultBarBodyTemplate from "../ResultBarBodyTemplate";
import { IResultBodyTemplate } from "../PredictedPrice/PredictedPrice";

export default function Traffic({ scrollRef }: IResultBodyTemplate) {
  return (
    <ResultBarBodyTemplate title="교통" scrollRef={scrollRef}>
      <TrafficContainer></TrafficContainer>
    </ResultBarBodyTemplate>
  );
}

const TrafficContainer = styled.div``;
