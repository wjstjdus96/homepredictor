import styled from "styled-components"
import { useState, useEffect } from "react"

import { descLeft, descRight } from "../../styles/GlobalStyles";
import { Description } from "../../pages/Home/Components/FirstSection";

interface Props{
    info: Description;
    idx: number;
}
interface Idx{
    idx: number;
}
export const Describe = ({info, idx}:Props) => {
    

    return (
        <DescribeCotainer idx={idx}>
            <DescDiv idx={idx}>
                <h1>
                    {info.title.map(el => <>{el}<br/></>)}
                </h1>
                <div>
                    {info.desc.map(el => <p>{el}</p>)}
                </div>
            </DescDiv>
            <ImgDiv>
                <img src={`${process.env.PUBLIC_URL}/img/${info.img_src}`} alt='Graph'></img>
            </ImgDiv>
        </DescribeCotainer>
    )
}

export const DescribeCotainer = styled.div<Idx>`
    display: flex;
    flex-direction: ${props => props.idx % 2 === 0 ? 'row' : 'row-reverse'};
    justify-content: center;
    width: 80%;
    height: 500px;
    margin: 3% auto;
    @media (max-width: 1280px){
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const ImgDiv = styled.div`
    width: 500px;
    height: 500px;
    @media (max-width: 600px){
        width: 400px;
        height: 400px;
    }
    img{
        width: 100%;
        height: 100%;
    }
`
const DescDiv = styled.div<Idx>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 500px;
    @media (max-width: 1280px){
        ${descLeft}
        height: auto;
    }
    @media (max-width: 600px){
        width: 400px;
    }
    @media (min-width: 1281px){
        ${props => props.idx % 2 === 0 ? descLeft : descRight};
    }
`