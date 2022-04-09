import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  heigth: 6rem;
  background: blue;
  img {
    max-width: 50px;
    border-radius: 100%;
    margin-right: 16px;
  }
  h1 {
    margin: 0;
  }
`;
