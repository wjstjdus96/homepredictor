import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../../styles/GlobalStyles";

export interface ITrafficItem {
  name: string;
  distance: number;
  line?: string;
}

export default function TrafficItem({ name, distance, line }: ITrafficItem) {
  const selectSubwayColor = (line: string) => {
    if (line === "1") return "#0d3692";
    else if (line === "2") return "#33a23d";
    else if (line === "3") return "#fe5d10";
    else if (line === "4") return "#00a2d1";
    else if (line === "5") return "#8b50a4";
    else if (line === "6") return "#c55c1d";
    return "";
  };

  return (
    <TrafficItemContainer>
      {line && (
        <SubwayLineBox lineColor={selectSubwayColor(line)}>
          {line}호선
        </SubwayLineBox>
      )}
      <h6>{name}</h6>
      <p>{distance}m</p>
    </TrafficItemContainer>
  );
}

const TrafficItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  & > h6 {
    font-size: 11px;
    font-weight: 500;
  }
  & > p:last-child {
    font-size: 9px;
    color: ${(props) => props.theme.colors.grayFont};
  }
`;

const SubwayLineBox = styled.span<{ lineColor: string }>`
  ${flexCenter}
  font-size: 9px;
  padding: 1px 5px;
  border-radius: 10px;
  color: white;
  background-color: ${(props) => props.lineColor};
`;
