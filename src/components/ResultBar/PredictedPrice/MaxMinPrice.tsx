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

const MaxMinPriceContainer = styled.div`
  background-color: rgba(${(props) => props.theme.colors.primaryRGB}, 0.1);
  border-radius: 20px;
  padding: 10px 23px 15px;
  margin-bottom: 10px;

  & > span {
    font-size: 11px;
  }
`;

const MaxMinPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;
