import styled from "styled-components";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import ResultMapZoomButton from "./ResultMapZoomButton";

interface IResultMap {
  lat: number;
  lng: number;
}

export default function ResultMap({ lat, lng }: IResultMap) {
  const [level, setLevel] = useState(3);

  return (
    <MapLayout>
      <Map
        center={{ lat, lng }}
        style={{ width: "100%", height: "100%" }}
        level={level}
      >
        <MapMarker position={{ lat, lng }} />
      </Map>
      <ResultMapZoomButton setLevel={setLevel} />
    </MapLayout>
  );
}

const MapLayout = styled.div`
  height: 100%;
  width: 80vw;
  position: relative;
`;
