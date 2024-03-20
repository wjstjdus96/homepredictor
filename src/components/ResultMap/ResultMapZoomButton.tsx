import styled from "styled-components";
import { flexCenter } from "../../styles/GlobalStyles";

interface IResultMapZoomButton {
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

export default function ResultMapZoomButton({
  setLevel,
}: IResultMapZoomButton) {
  return (
    <ZoomButtonLayout>
      <button onClick={() => setLevel((prev) => prev - 1)}>+</button>
      <button onClick={() => setLevel((prev) => prev + 1)}>-</button>
    </ZoomButtonLayout>
  );
}

const ZoomButtonLayout = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 1;
  display: flex;
  flex-direction: column;

  button {
    ${flexCenter}
    width: 1.6rem;
    height: 1.6rem;
    font-size: 1rem;
  }
`;
