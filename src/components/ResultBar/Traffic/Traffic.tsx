import styled from "styled-components";
import ResultBarBodyTemplate from "../ResultBarBodyTemplate";

export default function Traffic() {
  return (
    <ResultBarBodyTemplate title="교통">
      <TrafficContainer></TrafficContainer>
    </ResultBarBodyTemplate>
  );
}

const TrafficContainer = styled.div`
  height: 20rem;
`;
