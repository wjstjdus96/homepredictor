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
  const setDateFormat =(str:string) => {
    const date = new Date(str)
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${year}.${month}.${day} ${hours}:${minutes}`
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
  return (
    <ResultBarBodyTemplate title="관련뉴스" scrollRef={scrollRef}>
      <RelatedNewsContainer>
        <RelatedNewsHeader>
          <DataTypeText idx={0} selectedIdx={selectedIdx} onClick={setDataSim}>•정확도순</DataTypeText>
          <DataTypeText idx={1} selectedIdx={selectedIdx} onClick={setDataDate}>•최신순</DataTypeText>
        </RelatedNewsHeader>
        {newsData.slice(0, 4).map((el:News) => {
          return (
            <NewsContentDiv>
              <h3>{el.title.replace(/<\/?b>|&quot;/g, '')}</h3>
              <p>{el.description.slice(0, 50).replace(/<\/?b>|&quot;/g, '')}...</p>
              <div>
                <span>{setDateFormat(el.pubDate)}</span>
              </div>
            </NewsContentDiv>
          )
        })}
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
const NewsContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 22%;
  padding: 1%;
  margin: 1% 0;
  h3{
    font-size: 0.75em;
  }
  p{
    font-size: 0.5em;
  }
  div{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    span{
      font-size: 0.35em;
      color: ${props => props.theme.colors.grayFont};
    }
  }
`
