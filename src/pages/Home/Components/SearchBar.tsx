import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addressState } from "../State/AddressState";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { useSearch } from "../../../hooks/useSearch";

export interface HouseInfo {
  id: number;
  address: string;
}
interface Hover{
  idx?:number;
  hoveredIdx?:number;
  mouseOverEnabled?:boolean;
}

const boldMatchingSubstring = (str: string, substr: string) => {
  const index = str.indexOf(substr);
  if (index !== -1) {
    return (
      <span>
        {str.substring(0, index)}
        <HighLightSpan>{substr}</HighLightSpan>
        {str.substring(index + substr.length)}
      </span>
    );
  }
  return str;
};

export const SearchBar = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number>(-1)
  const { address, selectedTownData, typeAddress } = useSearch();
  const setClickedAddress = useSetRecoilState(addressState);
  const scrollDivRef = useRef<any>(null);
  const [mouseOverEnabled, setMouseOverEnabled] = useState<boolean>(true)
  const navigate = useNavigate();
  const showBuildingInfo = (id: number, address: string) => {
    setClickedAddress(address);
    navigate(`/result/${id}`);
  };

  useEffect(() => {
    const handleKeyDown = (e:KeyboardEvent) => {
      setMouseOverEnabled(false)
      if (e.key === 'ArrowDown') {
        if(hoveredIdx < 0){
          setHoveredIdx(0)
        } else if(hoveredIdx === selectedTownData.length - 1) {
          setHoveredIdx(selectedTownData.length - 1)
        } else {
          setHoveredIdx(hoveredIdx + 1)
        }
      } else if(e.key === 'ArrowUp'){
        if(hoveredIdx === 0){
          setHoveredIdx(0)
        } else {
          setHoveredIdx(hoveredIdx - 1)
        }
      }
    };

    // 키보드 이벤트 리스너 등록
    window.addEventListener('keydown', handleKeyDown);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hoveredIdx]); // 의존성 배열이 빈 배열이므로 한 번만 실행됨

  const itemHeight = 40; // SearchResultContent의 높이 가정
  const visibleItemCount = Math.round((window.innerHeight * 0.6)/46);
  useEffect(() => {
    const scrollDiv = scrollDivRef.current;
    if (scrollDiv) {
      const scrollToIdx = hoveredIdx - visibleItemCount + 1;
      const scrollAmount = scrollToIdx * itemHeight;
      scrollDiv.scrollTop = scrollAmount;
    }
  }, [hoveredIdx]);

  return (
    <SearchBarContainer>
      <SearchBarMainDiv>
        <SearchContent
          type="text"
          placeholder="주소, 건물명 등을 입력하세요"
          onChange={typeAddress}
        ></SearchContent>
        <SearchButton>
          <img
            src={`${process.env.PUBLIC_URL}/img/search.png`}
            alt="Searchbar"
          ></img>
        </SearchButton>
      </SearchBarMainDiv>
      {address.length > 0 ? (
        <SearchResultDiv>
          {selectedTownData !== null && selectedTownData.length > 0 ? (
            <ScrollDiv ref={scrollDivRef} onScroll={() => setMouseOverEnabled(false)}>
              {selectedTownData.map((el: HouseInfo, idx: number) => (
                <SearchResultContent
                  key={idx}
                  idx={idx}
                  hoveredIdx={hoveredIdx}
                  mouseOverEnabled={mouseOverEnabled}
                  onClick={() => showBuildingInfo(el.id, el.address)}
                  onMouseOver={() => {
                    setMouseOverEnabled(true)
                  }}
                >
                  {boldMatchingSubstring(el.address, address)}
                </SearchResultContent>
              ))}
            </ScrollDiv>
          ) : (
            <NoResearchContent>검색 결과가 없습니다</NoResearchContent>
          )}
        </SearchResultDiv>
      ) : (
        ""
      )}
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100px;
  @media (max-width: 600px) {
    height: 80px;
  }
  margin-top: 7.5%;
  @media (max-width: 600px) {
    margin-top: 20%;
  }
  padding: 5px;
  border: 6px solid white;
  border-radius: 100px;
`;
const SearchBarMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100% - 10px);
  height: 70px;
  @media (max-width: 600px) {
    height: 50px;
  }
  background: linear-gradient(
    to right,
    #ffffff 0%,
    #ffffff 88%,
    ${(props) => props.theme.colors.primary} 88%,
    ${(props) => props.theme.colors.primary} 100%
  );
  border-radius: 100px;
`;
const SearchContent = styled.input`
  display: flex;
  align-items: center;
  width: 88%;
  height: 100%;
  padding: 0 30px;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0.5);
  border: 0;
  outline: none;
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 0 100px 100px 0;
  &:hover {
    background-color: #2b77c9;
  }
  img {
    width: 40px;
    height: 40px;
    @media (max-width: 600px) {
      width: 20px;
      height: 20px;
    }
  }
`;
const SearchResultDiv = styled.div`
  position: absolute;
  top: 105px;
  @media (max-width: 600px) {
    top: 85px;
  }
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 60vh;
  padding: 10px 30px;
  background-color: white;
  border-radius: 50px;
`;
const ScrollDiv = styled.div`
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-thumb {
    background: #c2c2c2;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #969696;
  }
`;
const SearchResultContent = styled.div<Hover>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 5px 0;
  margin: 3px 0;
  color: rgba(0, 0, 0, 0.75);
  font-size: 18px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
  font-weight: ${props => (props.idx === props.hoveredIdx && !props.mouseOverEnabled) && 'bold'};
  transition: color 0.25s ease;
  overflow: hidden;
  cursor: pointer;
  &:hover{
    font-weight: ${props => props.mouseOverEnabled ? 'bold' : ''};
  }
`;
const NoResearchContent = styled(SearchResultContent)`
  font-weight: 400;
`;
const HighLightSpan = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;
