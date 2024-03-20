import styled from "styled-components";

export default function Header() {
  return (
    <HeaderLayout>
      <h2>Home Predictor</h2>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  height: 7vh;
  display: flex;
  align-items: center;

  h2 {
    color: white;
    margin-left: 1rem;
    font-weight: 700;
  }
`;
