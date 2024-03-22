import styled from "styled-components";
import { IPrice } from "./PredictedHead";
import MaxMinPriceItem from "./MaxMinPriceItem";

interface IMaxMinPrice {
  maxPredicted: IPrice;
  minPredicted: IPrice;
}

export default function MaxMinPrice({
  maxPredicted,
  minPredicted,
}: IMaxMinPrice) {
  return (
    <MaxMinPriceContainer>
      <span>3개월 간 예측가</span>
      <MaxMinPriceBox>
        <MaxMinPriceItem name="최고가" item={maxPredicted} />
        <MaxMinPriceItem name="최저가" item={minPredicted} />
      </MaxMinPriceBox>
    </MaxMinPriceContainer>
  );
}

const MaxMinPriceContainer = styled.div``;

const MaxMinPriceBox = styled.div``;
