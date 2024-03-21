import styled from "styled-components";
import ResultBarBodyTemplate from "../ResultBarBodyTemplate";

export default function RelatedNews() {
  return (
    <ResultBarBodyTemplate title="관련뉴스">
      <RelatedNewsContainer></RelatedNewsContainer>
    </ResultBarBodyTemplate>
  );
}

const RelatedNewsContainer = styled.div`
  height: 20rem;
`;
