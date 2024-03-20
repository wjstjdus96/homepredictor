import styled from "styled-components"
import { useState, useEffect } from "react"
import axios from "axios"

import { Town, townData } from "../DummyData/DummyData"

const SearchBarContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 80px;
    @media (max-width: 600px){
        height: 60px;
    }
    margin-top: 7.5%;
    @media (max-width: 600px){
        margin-top: 20%;
    }
    padding: 5px;
    border: 6px solid white;
    border-radius: 100px;
`
const SearchBarMainDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: calc(100% - 10px);
    height: 70px;
    @media (max-width: 600px){
        height: 50px;
    }
    background: linear-gradient(to right, #ffffff 0%, #ffffff 88%, #378CE7 88%, #378CE7 100%);
    border-radius: 100px;
`
const SearchContent = styled.input`
    display: flex;
    align-items: center;
    width: 80%;
    height: 100%;
    padding: 0 4%;
    background-color: rgba(0,0,0,0);
    color: rgba(0,0,0,0.5);
    border: 0;
    outline: none;
    font-size: 16px;
    @media (max-width: 600px){
        font-size: 14px;
    }
`
const SearchButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12%;
    height: 100%;
    background-color: #378CE7;
    border-radius: 0 100px 100px 0;
    &:hover{
        background-color: #2b77c9;
    }
`
const SearchImg = styled.img`
    width: 40px;
    height: 40px;
    @media (max-width: 600px){
        width: 20px;
        height: 20px;
    }
`
const SearchResultDiv = styled.div`
    position: absolute;
    top: 105px;
    @media (max-width: 600px){
        top: 85px;
    }
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 60px);
    max-height: 500px;
    padding: 10px 30px;
    background-color: white;
    border-radius: 50px;
`
const ScrollDiv = styled.div`
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(0,0,0,0)
    }

    &::-webkit-scrollbar-thumb {
        background: #c2c2c2;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #969696;
    }
`
const SearchResultContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 5px 0;
    color: rgba(0,0,0,0.75);
    font-size: 18px;
    @media (max-width: 600px){
        font-size: 14px;
    }
    &:hover{
        font-weight: bold;
    }
    transition: color 0.25s ease;
    overflow:hidden;
`
const NoResearchContent = styled(SearchResultContent)`
    &:hover{
        font-weight: 400;
    }
`
const HighLightSpan = styled.span`
    font-weight: bold;
    color: #378CE7;
`
export const SearchBar = () => {
    const [address, setAddress] = useState<string>('')
    const [selectedTownData, setSelectedTownData] = useState<Town[]>([])
    const typeAddress = (e: any) => {
        setAddress(e.target.value)
        setSelectedTownData(townData.filter(el => el.town.includes(e.target.value)))
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

    return (
        <SearchBarContainer>
            <SearchBarMainDiv>
                <SearchContent
                    type='text' placeholder="주소, 건물명 등을 입력하세요"
                    onChange={typeAddress}
                ></SearchContent>
                <SearchButton>
                    <SearchImg src={`${process.env.PUBLIC_URL}/img/search.png`}></SearchImg>
                </SearchButton>
            </SearchBarMainDiv>
            {address.length > 0 ? (
                <SearchResultDiv>
                    {selectedTownData.length > 0 ? (
                        <ScrollDiv>
                            {selectedTownData.map(el => (
                                <SearchResultContent>
                                    {boldMatchingSubstring(el.town, address)}
                                </SearchResultContent>
                            ))}
                        </ScrollDiv>
                        ) : (
                            <NoResearchContent>검색 결과가 없습니다</NoResearchContent>
                        )}
                </SearchResultDiv>
                ) : ''}
        </SearchBarContainer>
    )
}