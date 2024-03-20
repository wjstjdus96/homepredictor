import styled from "styled-components";

export default function Header() {
  return (
    <HeaderLayout>
      <h2>Home Predictor</h2>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.header`
  background-color: #378ce7;
  height: 7vh;
  display: flex;
  align-items: center;
  h2 {
    color: white;
    margin-left: 1rem;
  }
`;
