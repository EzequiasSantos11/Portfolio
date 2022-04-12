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
  footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5rem;
    margin-top: 40px;
    h4{
      margin-bottom: 10px;
    }
    span{
      color: ${props => props.theme.colors.secondary};
    }
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
        color: wheat;
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

export const Title = styled.h1`
  margin-top: 40px;
  font-size: 34px;
`;

export const Wrapper = styled.div`
  display: grid;
  width: 90%;
  max-width: 990px;
  margin: 0 auto;
  margin-top: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;



export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  height: 300px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: ${props => props.theme.title === "light" ? "0 0 10px rgba(0, 0, 0, 0.5)" : "0 0 10px #0070f3"};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  transform: scale(0.9);
  &:hover{
    transform: scale(1.0);
    box-shadow: 0 0 10px rgb(99, 32, 99);
  }
  >h2{
    width: 100%;
    text-align: center;
  }
  >p{
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    margin-top: 20px;
    width: 80%;
    color: ${props => props.theme.colors.textColor}
  }
  >span{
    position: absolute;
    text-align: center;
    bottom: 20px;
    left: 0;
    right: 0;
    color: ${props => props.theme.colors.secondary}
  }
`;
