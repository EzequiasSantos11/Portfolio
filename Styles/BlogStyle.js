import styled, { keyframes } from "styled-components";


const AnimateMain = keyframes`
  from{
    transform: translateY(-20rem);
    opacity: 0;
  }to{
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  
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
  @media (max-width: 800px){
    height: 100%;
    padding-top: 4rem;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh; 
  background: #251533;
  position: relative;
  h1{
    font-size: 2rem;
    animation: ${AnimateMain} 2s forwards;
    color: #F1F2F1;
    margin-bottom: 20px;
    font-weight: 800;
    z-index: 999;
  }
  p{
    text-align: center;
    animation: ${AnimateMain} 1.5s forwards;
    font-size: 1.375rem;
    line-height: 1.3;
    color: #F1F2F1;
    width: 50%;
    z-index: 999;
    margin-bottom: 20px;
  }
  img{
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: .1;
  }
  .sotialMideas{
    display: flex;
    align-items: center;
    padding: 0;
    z-index: 999;

    a{
      svg{
        cursor: pointer;
        font-size: 40px;
      }
      &.first{
        animation: ${AnimateMain} .5s forwards;
      }
      &.second{
        animation: ${AnimateMain} .8s forwards;
      }
      &.tirst{
        animation: ${AnimateMain} 1s forwards;
      }
    }
  }
  @media (max-width: 800px){
    height: 65vh;
    h1{
      font-size: 1.5rem;
    }
    p{
      font-size: 16px;
      width: 80%;
    }
  }
`;

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  height: 100%;
  width: 90%;
  margin: 40px 0;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;



export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 420px;
  width: 100%;
  max-width: 420px;
  box-shadow:  0 0 10px #0070f3;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  transform: scale(0.98);
  overflow: hidden;
  &:hover{
    transform: scale(1);
  }
  .image{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;
    position: relative;
    background: #251533;
    >h2{
      font-size: 20px;
      width: 90%;
      text-align: center;
      font-weight: 700;
      font-family: 'Poppins', sans-serif;
      color: #F2F2F2;
      position: absolute;
    }
    img{
      display: flex;
      height: 100%;
      width: 100%;
      object-fit: cover;
      opacity: 0.8;
    }
  }
  >p{
    font-family: 'Poppins', sans-serif;
    width: 80%;
    font-size: 14px;
    margin: 20px 0;
    font-weight: 600;
    color: #020203;
  }
  >span{
    position: absolute;
    bottom: 20px;
    text-align: center;
    opacity: 0.9;
    color: rgb(23,105,255);
  }
  @media (max-width: 800px) {
    &:hover{
      transform: scale(0.98);
    }
  }
`;
