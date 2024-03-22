import styled from 'styled-components'

import Header from '../../components/Header/Header'
import { SearchBar } from './Components/SearchBar'
import { FirstSection } from './Components/FirstSection'
import { SecondSection } from './Components/SecondSection'
import { ThirdSection } from './Components/ThirdSection'

export default function Home() {
  return (
    <>
      <MainContainer>
        <Header></Header>
        <SearchBarDiv>
          <SearchBar></SearchBar>
        </SearchBarDiv>
      </MainContainer>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
    </>
  )
}

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
const SearchBarDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 95%;
`