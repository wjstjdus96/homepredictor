import styled from "styled-components";
import ResultBarBodyTemplate from "../ResultBarBodyTemplate";
import PredictedHead from "./PredictedHead";
import { useState } from "react";

export interface IResultBodyTemplate {
  scrollRef: any;
}

export default function PredictedPrice({ scrollRef }: IResultBodyTemplate) {
  const [size, setSize] = useState<number>(0);

  return (
    <ResultBarBodyTemplate title="거래예측가" scrollRef={scrollRef}>
      <PredictedHead setSize={setSize} />
    </ResultBarBodyTemplate>
  );
}
