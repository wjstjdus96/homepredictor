import { useEffect, useState } from "react";
import styled from "styled-components";
import { temp_size_data } from "../../../consts/tempData";
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
  const [activeBtn, setActiveBtn] = useState<number>();

  const onClickSquare = (
    max: IPrice,
    min: IPrice,
    size: number,
    idx: number
  ) => {
    setMaxPredicted(max);
    setMinPredicted(min);
    setSize(size);
    setActiveBtn(idx);
  };

  useEffect(() => {
    const firstSize = temp_size_data[0];
    onClickSquare(firstSize.max, firstSize.min, firstSize.size, 0);
  }, []);

  return (
    <>
      <SizeButtonBox>
        {temp_size_data.map((item, idx) => (
          <SizeButton
            onClick={() => onClickSquare(item.max, item.min, item.size, idx)}
            isActive={activeBtn == idx}
          >
            {item.size}평
          </SizeButton>
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
  padding: 0 3px;
  margin-bottom: 25px;
  display: grid;
  column-gap: 12px;
  row-gap: 9px;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
`;

const SizeButton = styled.button<{ isActive: boolean }>`
  padding: 3px 7px;
  font-size: 10px;
  border: 1px solid rgba(${(props) => props.theme.colors.primaryRGB}, 0.4);
  border-radius: 5px;
  background-color: ${(props) =>
    props.isActive ? `rgba(${props.theme.colors.primaryRGB},0.4)` : "white"};

  font-weight: ${(props) => (props.isActive ? "600" : "500")};
  color: ${(props) => (props.isActive ? "white" : "black")};
`;
