import styled from "styled-components";


export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
  width: 100%;
  background: blue;
  position: fixed;
  top: 0;
  z-index: 999;
  .user-info{
    display: flex;
    align-items: center;
    img {
      max-width: 50px;
      border-radius: 100%;
      margin-right: 16px;
    }
    h1 {
      margin: 0;
    }
  }
  nav{
    display: flex;
    ul{
      display: flex;
      li{
        a{
          font-size: 18px;
          margin: 0 10px;
        }
      }
    }
  }
`;