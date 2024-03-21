import styled from "styled-components";
import ResultBarBodyTemplate from "../ResultBarBodyTemplate";
import { IResultBodyTemplate } from "../PredictedPrice/PredictedPrice";

export default function RelatedNews({ scrollRef }: IResultBodyTemplate) {
  return (
    <ResultBarBodyTemplate title="관련뉴스" scrollRef={scrollRef}>
      <RelatedNewsContainer></RelatedNewsContainer>
    </ResultBarBodyTemplate>
  );
}

const RelatedNewsContainer = styled.div`
  height: 20rem;
`;
