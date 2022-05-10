import styled from "styled-components";


export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 4rem;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  position: fixed;
  top: 0;
  z-index: 999;
  .menuIcon{
    display: none;
  }
  .backLog{
    position: fixed;
    background: rgba(0,0,0,0.4);
    height: 100vh;
    width: 100vw;
    top: 4rem;
    left: 0;
    z-index: 998;
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
      color: white;
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
    align-items: center;
    z-index: 999;
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
      flex-direction: column;
      background: ${props => props.theme.colors.primary};
      top: 4rem;
      width: 10rem;
      height: 15rem;
      padding: 20px 0;
      border-bottom-left-radius: 20px;
      transition: all .5s;
      ul{
        flex-direction: column;
        height: 80%;
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