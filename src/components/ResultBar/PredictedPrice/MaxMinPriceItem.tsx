import styled from "styled-components";
import { IPrice } from "./PredictedHead";

interface IMaxMinPriceItem {
  name: string;
  item: IPrice;
}

export default function MaxMinPriceItem({ name, item }: IMaxMinPriceItem) {
  return (
    <MaxMinPriceItemContainer>
      <h6>{name}</h6>
      <div>{item.month}</div>
    </MaxMinPriceItemContainer>
  );
}

const MaxMinPriceItemContainer = styled.div`
  display: flex;
`;
