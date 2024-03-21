import React from "react";
import styled from "styled-components";

interface IResultBarBodyTemplate {
  children: React.ReactNode;
  title: string;
}

export default function ResultBarBodyTemplate({
  children,
  title,
}: IResultBarBodyTemplate) {
  return (
    <ResultBodyTemplateContainer>
      <h5>{title}</h5>
      {children}
    </ResultBodyTemplateContainer>
  );
}

const ResultBodyTemplateContainer = styled.section`
  padding: 15px ${(props) => props.theme.padding.searchBar};
  border-bottom: 1px solid ${(props) => props.theme.colors.grayFont};
`;
