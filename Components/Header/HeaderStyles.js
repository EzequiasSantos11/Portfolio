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
  .menuIcon{
    display: none;
  }
  
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
  @media (max-width: 800px) {
    justify-content: space-between;
    padding: 0 20px;
    .menuIcon{
      display: flex;
      cursor: pointer;
      svg{
        fill: white;
      }
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
   
    @media (max-width: 800px) {
      position: absolute;
      background: #121214;
      top: 4rem;
      width: 8rem;
      height: 150px;
      padding-left: 10px;
      border-bottom-left-radius: 20px;
      transition: all .5s;
      ul{
        flex-direction: column;
        height: 100%;
        justify-content: center;
        li{
          height: 40px;
          a{
            height: 100%;
          }
        }
      }
    }
  }
`;