import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";

interface IResultMap {
  lat: number;
  lng: number;
}

export default function ResultMap({ lat, lng }: IResultMap) {
  return (
    <MapLayout>
      <Map center={{ lat, lng }} style={{ width: "100%", height: "100%" }}>
        <MapMarker position={{ lat, lng }} />
      </Map>
    </MapLayout>
  );
}

const MapLayout = styled.div`
  height: 100vh;
  width: 80vw;
`;
