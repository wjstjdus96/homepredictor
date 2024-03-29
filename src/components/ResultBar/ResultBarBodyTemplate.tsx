import React from "react";
import styled from "styled-components";

interface IResultBarBodyTemplate {
  children: React.ReactNode;
  title: string;
  scrollRef: any;
  margin?: string;
}

export default function ResultBarBodyTemplate({
  children,
  title,
  scrollRef,
  margin,
}: IResultBarBodyTemplate) {
  return (
    <ResultBodyTemplateContainer ref={scrollRef} margin={margin}>
      <h5>{title}</h5>
      {children}
    </ResultBodyTemplateContainer>
  );
}

const ResultBodyTemplateContainer = styled.section<{ margin?: string }>`
  padding: 15px ${(props) => props.theme.padding.searchBar} 25px;
  border-bottom: 1px solid ${(props) => props.theme.colors.grayFont};

  h5 {
    margin-bottom: ${(props) => (props.margin ? props.margin : "15px")};
  }
`;
