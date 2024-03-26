import React from "react";
import styled from "styled-components";

interface IResultBarBodyTemplate {
  children: React.ReactNode;
  title: string;
  scrollRef: any;
}

export default function ResultBarBodyTemplate({
  children,
  title,
  scrollRef,
}: IResultBarBodyTemplate) {
  return (
    <ResultBodyTemplateContainer ref={scrollRef}>
      <h5>{title}</h5>
      {children}
    </ResultBodyTemplateContainer>
  );
}

const ResultBodyTemplateContainer = styled.section`
  padding: 15px ${(props) => props.theme.padding.searchBar} 25px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grayFont};

  h5 {
    margin-bottom: 15px;
  }
`;
