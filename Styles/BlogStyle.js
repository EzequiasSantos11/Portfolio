import styled from "styled-components";

export const Container = styled.section`
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
      text-align: center;
      width: 80%;
      max-width: 500px;
      z-index: 98;
      padding:  24px;
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
        font-size: 14px;
        color: white;
        width: 80%;
        margin: 10px 0;
      }
      .sotial-mideas{
        display: flex;
        justify-content: space-around;
        height: 60px;
        width: 80%;
        a{
          svg{
            position: initial;
            height: 100%;
            width: 40px;
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
 
`;

export const Title = styled.h1`
  margin-top: 40px;
  font-size: 34px;
  color: ${props => props.theme.colors.titleColor};
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
  justify-content: center;
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
    font-size: 20px;
    width: 90%;
    text-align: center;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.titleColor};
  }
  >p{
    font-family: 'Poppins', sans-serif;
    width: 80%;
    font-size: 14px;
    margin: 20px 0;
    font-weight: 600;
    color: ${props => props.theme.colors.textColor}
  }
  >span{
    position: absolute;
    bottom: 20px;
    text-align: center;
    opacity: 0.6;
    color: ${props => props.theme.colors.secondary}
  }
  @media (max-width: 800px) {
    &:hover{
      transform: scale(0.9);
      box-shadow: 0 0 10px rgb(99, 32, 99); 
    }
  }
`;
export const Anuncio = styled.div`
  display: flex;
  width: 70%;
  height: 100px;
  margin-top: 60px;
`;