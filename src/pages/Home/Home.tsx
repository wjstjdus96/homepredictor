import styled from 'styled-components'

import { SearchBar } from './Components/SearchBar'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1591900888562-85e594570023?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center center;
  margin: 0;
`
const TopTitleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  height: 5%;
  padding: 1.5% 2.5%;
  background-color: rgba(0,0,0,0);
  h1{
    color: white;
    font-weight: bold;
    font-size: 36px;
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }
`
const SearchBarDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 95%;
`
export default function Home() {
  return (
    <MainContainer>
      <TopTitleDiv>
        <h1>HomePredictor</h1>
      </TopTitleDiv>
      <SearchBarDiv>
        <SearchBar></SearchBar>
      </SearchBarDiv>
    </MainContainer>
  )
}
