import styled from "styled-components";
import { IPrice } from "./PredictedHead";
import { calPriceUnit } from "../../../utils/calPriceUnit";

interface IMaxMinPriceItem {
  name: string;
  item: IPrice;
}

export default function MaxMinPriceItem({ name, item }: IMaxMinPriceItem) {
  return (
    <MaxMinPriceItemContainer>
      <p>{name}</p>
      <PriceBox>
        <p>{calPriceUnit(item.price)}</p>
        <p>{item.month}</p>
      </PriceBox>
    </MaxMinPriceItemContainer>
  );
}

const MaxMinPriceItemContainer = styled.div`
  display: flex;
  gap: 8px;

  & > p {
    font-size: small;
    font-weight: 600;
  }
`;

const PriceBox = styled.div`
  & > p:first-child {
    font-size: small;
  }
  & > p:last-child {
    font-size: x-small;
    color: ${(props) => props.theme.colors.grayFont};
    padding-left: 2px;
    margin-top: 2px;
  }
`;
