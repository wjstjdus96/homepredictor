import { useEffect, useState } from "react";
import styled from "styled-components";
import { temp_data } from "../../../consts/tempData";
import MaxMinPrice from "./MaxMinPrice";

export interface IPrice {
  month: string;
  price: number;
}

interface IPredictedHead {
  setSize: React.Dispatch<React.SetStateAction<number>>;
}

function PredictedHead({ setSize }: IPredictedHead) {
  const [maxPredicted, setMaxPredicted] = useState<IPrice>();
  const [minPredicted, setMinPredicted] = useState<IPrice>();

  const onClickSquare = (max: IPrice, min: IPrice, size: number) => {
    setMaxPredicted(max);
    setMinPredicted(min);
    setSize(size);
  };

  return (
    <>
      <SizeButtonBox>
        {temp_data.map((item) => (
          <button onClick={() => onClickSquare(item.max, item.min, item.size)}>
            {item.size}
          </button>
        ))}
      </SizeButtonBox>
      {maxPredicted && minPredicted && (
        <MaxMinPrice maxPredicted={maxPredicted} minPredicted={minPredicted} />
      )}
    </>
  );
}

export default PredictedHead;

const SizeButtonBox = styled.div`
  button {
  }
`;
