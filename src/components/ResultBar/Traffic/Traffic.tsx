import styled from "styled-components";
import ResultBarBodyTemplate from "../ResultBarBodyTemplate";
import { IResultBodyTemplate } from "../PredictedPrice/PredictedPrice";
import { useState } from "react";
import { temp_traffic_data } from "../../../consts/tempData";
import TraficBus from "./TraficBus";
import TraficSubway from "./TraficSubway";
import { useEffect } from "react";

export default function Traffic({ scrollRef }: IResultBodyTemplate) {
  const [trafficInfo, setTrafficInfo] = useState<any>(temp_traffic_data);

  return (
    <ResultBarBodyTemplate title="교통" scrollRef={scrollRef}>
      <TrafficContainer>
        <TraficBus busInfo={trafficInfo.bus} />
        <TraficSubway subwayInfo={trafficInfo.subway} />
      </TrafficContainer>
    </ResultBarBodyTemplate>
  );
}

const TrafficContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
