import styled from "styled-components";


export const Header = styled.header`
  display: flex;
  width: 100%;
  .wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    width: 100%;
    padding-left: 4%;
    padding-right: 8.4%;
    background: #FFF;
    &.fixed{
      box-shadow: 0 0 8px rgba(23,105,255,0.4);
    }
    position: fixed;
    top: 0;
    z-index: 999999;
    .menuIcon{
      display: none;
    }
    .backLog{
      position: fixed;
      background: rgba(0,0,0,0.4);
      height: 100vh;
      width: 100vw;
      top: 5rem;
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
        color: #000;
      }
    }
    @media (max-width: 800px) {
      justify-content: space-between;
      padding: 0 20px;
      height: 5rem;
      .menuIcon{
        display: flex;
        cursor: pointer;
      }
    }
    nav{
      display: flex;
      align-items: center;
      z-index: 999;
      ul{
        display: flex;
        li{
         padding: 2px;
          align-items: center;
         border-radius: 4px;
          a{
            height: 100%;
             align-items: center;
            font-size: 18px;
            margin: 0 10px;
            color: #000;
          }
          .button{
            padding: 8px 10px;
            border-radius: 20px;
            color: #1769FF;
            font-weight: 800;
          }
          &.active{
            background: #1769FF;
             align-items: center;
            a{
             align-items: center;
              color: #fff;
            }
          }
        }
      }
    
      @media (max-width: 800px) {
        position: absolute;
        flex-direction: column;
        background: #FFF;
        top: 5rem;
        width: 15rem;
        height: 20rem;
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
  }
`;
