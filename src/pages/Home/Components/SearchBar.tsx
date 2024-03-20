import styled from "styled-components"
import { useState, useEffect } from "react"
import axios from "axios"

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 80px;
    @media (max-width: 600px){
        height: 60px;
    }
    margin-top: 7.5%;
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
export const SearchBar = () => {
    return (
        <SearchBarContainer>
            <SearchBarMainDiv>
                <SearchContent type='text' placeholder="주소, 건물명 등을 입력하세요"></SearchContent>
                <SearchButton>
                    <SearchImg src={`${process.env.PUBLIC_URL}/img/search.png`}></SearchImg>
                </SearchButton>
            </SearchBarMainDiv>
        </SearchBarContainer>
    )
}