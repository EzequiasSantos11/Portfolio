import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  from{
    transform: translateY(-100vh);
    opacity: 0;
  }to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba( 0, 0, 0, 0.3 );
  position: fixed;
  top: 0;
  flex-shrink: 0;
  z-index: 9999999;
  span{
    display: flex;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: 50%;
    max-width: 480px;
    background: #F1F1F1;
    border-radius: 8px;
    box-shadow: 0 0 6px rgba( 0, 0, 0, 0.4 );
    gap: 15px;
    background: #1769FF;
    animation: ${Animation} .6s forwards;
    position: relative;
    i{
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 18px;
      color: #F1F1F1;
      cursor: pointer;
    }
    h1{
      width: 80%;
      text-align: center;
      color: #F1F1F1;
    }
    .input{
      display: flex;
      flex-direction: column;
      width: 60%;
      label{
        font-size: 18px;
        margin-bottom: 5px;
        color: #FFF;
      }
      input{
        height: 35px;
        border: none;
        border-radius: 4px;
        background: #f5f5f5;
        outline: none;
        padding: 0 20px;
        font-size: 14px;
      }
      textarea{
        border: none;
        border-radius: 4px;
        background: #f5f5f5;
        outline: none;
        padding: 0 20px;
        padding-top: 10px;
        font-size: 14px;
      }
    }
    button{
      height: 40px;
      font-size: 16px;
      width: 40%;
      margin: 0 auto;
      margin-top: 8px;
      padding: 0;
      border: 1px solid #F1F1F1;
      outline: none;
      border-radius: 20px;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 700;
      background: #1769FF;
      transform: scale(1.08);
      color: #FFF;
      a{
        
        color: #FFF;
      }
      &:hover{
        transition: all .2s ease-in-out;
        box-shadow: 0 0 20px #80ACF7;
        transform: scale(1.1);
      }
    }
    @media (max-width: 800px) {
      height: 70%;
      min-height: 450px;
      width: 90%;
      h1{
        font-size: 18px;
      }
      .input{
        label{
          font-size: 16px;
        }
        input{
          height: 28px;
        }
        textarea{
          height: 80px;
        }
      }
    }
  }
`;