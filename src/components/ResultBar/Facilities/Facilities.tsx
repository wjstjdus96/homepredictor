import styled from "styled-components";
import ResultBarBodyTemplate from "../ResultBarBodyTemplate";

export default function Facilities() {
  return (
    <ResultBarBodyTemplate title="주변시설">
      <FacilitiesContainer></FacilitiesContainer>
    </ResultBarBodyTemplate>
  );
}

const FacilitiesContainer = styled.div`
  height: 20rem;
`;
