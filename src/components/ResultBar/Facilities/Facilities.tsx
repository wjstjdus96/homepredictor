import styled from "styled-components";
import ResultBarBodyTemplate from "../ResultBarBodyTemplate";
import { IResultBodyTemplate } from "../PredictedPrice/PredictedPrice";

export default function Facilities({ scrollRef }: IResultBodyTemplate) {
  return (
    <ResultBarBodyTemplate title="주변시설" scrollRef={scrollRef}>
      <FacilitiesContainer></FacilitiesContainer>
    </ResultBarBodyTemplate>
  );
}

const FacilitiesContainer = styled.div`
  height: 20rem;
`;
