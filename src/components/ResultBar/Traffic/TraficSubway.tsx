import React from "react";
import TrafficItem, { ITrafficItem } from "./TrafficItem";
import { FaSubway } from "react-icons/fa";
import styled from "styled-components";
import { smallSectionContainer } from "../../../styles/GlobalStyles";

interface ITraficSubway {
  subwayInfo: ITrafficItem[];
}

export default function TraficSubway({ subwayInfo }: ITraficSubway) {
  return (
    <TraficSubwayContainer>
      <div>
        <FaSubway />
        <h5>지하철역</h5>
      </div>
      {subwayInfo &&
        subwayInfo.map((item) => (
          <TrafficItem
            name={item.name}
            distance={item.distance}
            line={item.line}
          />
        ))}
    </TraficSubwayContainer>
  );
}

const TraficSubwayContainer = styled.div`
  ${smallSectionContainer}
  h5 {
    color: #80bcbd;
  }
`;
