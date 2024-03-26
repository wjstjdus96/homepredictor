import React from "react";
import TrafficItem, { ITrafficItem } from "./TrafficItem";
import styled from "styled-components";
import { FaBus } from "react-icons/fa";
import { smallSectionContainer } from "../../../styles/GlobalStyles";

interface ITraficBus {
  busInfo: ITrafficItem[];
}

export default function TraficBus({ busInfo }: ITraficBus) {
  return (
    <TraficBusContainer>
      <div>
        <FaBus />
        <h5>버스정류장</h5>
      </div>
      {busInfo &&
        busInfo.map((item) => (
          <TrafficItem name={item.name} distance={item.distance} />
        ))}
    </TraficBusContainer>
  );
}

const TraficBusContainer = styled.div`
  ${smallSectionContainer}
  h5 {
    color: #fc819e;
  }
`;
