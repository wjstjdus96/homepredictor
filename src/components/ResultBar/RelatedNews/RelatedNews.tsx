import styled from "styled-components";
import ResultBarBodyTemplate from "../ResultBarBodyTemplate";
import { IResultBodyTemplate } from "../PredictedPrice/PredictedPrice";
import { BooleanLiteral } from "typescript";
import { useState, useEffect } from "react";
import { addressState } from "../../../pages/Home/State/AddressState";
import { useRecoilValue } from "recoil";
import axios from "axios";

interface Selected{
  idx: number;
  selectedIdx: number;
}
interface News{
  [key: string]: string;
}

export default function RelatedNews({ scrollRef }: IResultBodyTemplate) {
  const [selectedIdx, setSelectedIdx] = useState<number>(0)
  const [dataType, setDataType] = useState<string>('sim')
  const [newsData, setNewsData] = useState<News[]>([])
  const address = useRecoilValue(addressState).split(' ')[1]
  const setDataSim = () => {
    setSelectedIdx(0)
    setDataType('sim')
  }
  const setDataDate = () => {
    setSelectedIdx(1)
    setDataType('date')
  }
  useEffect(() => {
    axios.get(
      'http://localhost:5000/search',
      {
        params: {
          query: `${address} 부동산`,
          sort:dataType
        },
      }
    ).then(res => setNewsData(res.data.items))
  }, [dataType, address])
  console.log(newsData)
  return (
    <ResultBarBodyTemplate title="관련뉴스" scrollRef={scrollRef}>
      <RelatedNewsContainer>
        <RelatedNewsHeader>
          <DataTypeText idx={0} selectedIdx={selectedIdx} onClick={setDataSim}>•정확도순</DataTypeText>
          <DataTypeText idx={1} selectedIdx={selectedIdx} onClick={setDataDate}>•최신순</DataTypeText>
        </RelatedNewsHeader>
      </RelatedNewsContainer>
    </ResultBarBodyTemplate>
  );
}

const RelatedNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
`;
const RelatedNewsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 7%;
  padding: 1%;
`
const DataTypeText = styled.span<Selected>`
  width: 25%;
  font-size: 0.5em;
  text-align: center;
  color: ${props => props.selectedIdx === props.idx ? 
  props.theme.colors.primary : props.theme.colors.grayFont};
  transition: 0.3s ease;
  cursor: pointer;
`
