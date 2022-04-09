import styled from "styled-components";


export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 4rem;
  width: 100%;
  background: #121214;
  position: fixed;
  top: 0;
  z-index: 999;
  .user-info{
    display: flex;
    align-items: center;
    img {
      width: 40px;
      border-radius: 100%;
      margin-right: 8px;
    }
    h1 {
      font-size: 18px;
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
          color: white;
        }
      }
    }
  }
`;