import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px){
    height: 100%;
    padding-top: 4rem;
  }
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  .background{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    position: relative;
    width: 100%;
    height: 100%;
    .text{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 65%;
      width: 65%;
      z-index: 98;
      padding: 0 24px;
      margin-top: 40px;
      border-radius: 16px;
      background: rgba(0, 0, 0, 0.4);
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border: 1px solid rgba(234, 47, 155, 0.3);
      h1{
        font-size: 24px;
      }
      p{
        font-weight: 600;
        font-size: 18px;
        color: white;
        z-index: 98;
        margin-top: 10px;
        line-height: 25 px;
      }
      .sotial-mideas{
        display: flex;
        justify-content: space-around;
        height: 60px;
        width: 50%;
        margin-top: 20px;
        a{
          svg{
            position: initial;
            height: 100%;
            width: 100%;
          }
        }
      }
    }
    img{
      height: 100%;
      width: 100%;
      position: absolute;
    }
  }
  @media (max-width: 800px){
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  width: 90%;
  margin-top: 40px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  height: 280px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  transform: scale(0.9);
  &:hover{
    transform: scale(1);
    box-shadow: 0 0 10px rgb(99, 32, 99);
  }
  >h2{
    margin-left: 40px;
  }
  >p{
    font-weight: 700;
    margin-top: 20px;
    width: 70%;
  }
  >span{
    position: absolute;
    text-align: center;
    bottom: 20px;
    left: 0;
    right: 0;
  }
`;
