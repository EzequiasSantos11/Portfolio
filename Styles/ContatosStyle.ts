import styled, {keyframes} from "styled-components";

export const AnimationMobile = keyframes`
  0%{
    bottom: 40px;
    transform: rotate(90deg);
    opacity: 0;
  }
  50%{
    bottom: 20px;
    transform: rotate(90deg);

    opacity: 1;
  }
  100%{
    bottom: 10px;
    transform: rotate(90deg);
    opacity: 0;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 100%;
    padding-top: 2rem;
    align-items: center;
  }
  `;

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  position: relative;
  img{
    width: 100%;
    height: 100%;
  }
  .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    background: rgba( 0, 0, 0, .5);
    h1{
      font-size: 2rem;
      color: #FFF;
    }
    h2{
      font-size: 1.5rem;
      width: 70%;
      margin: 3rem 0;
      color: ${props => props.theme.colors.secondary};
    }
    .sotialIcons{
      display: flex;
      width: 50%;
      margin-top: 1rem;
      justify-content: space-around;
      svg{
        cursor: pointer;
        &:hover{
          transform: scale(1.2);
        }
        transition: all .4s;
      }
    }
  }
  @media (max-width: 800px) {
    width: 90%;
    height: 100vh;
    .wrapper{
      h1{
        text-align: center;
        width: 90%;
        margin: 0 auto;
      }
      h2{
        margin: 40px auto;
      }
      .sotialIcons{
        width: 80%;
      }
    }
    &::before{
      content: ">";
      color: ${props => props.theme.colors.titleColor};
      display: flex;
      font-size: 40px;
      font-weight: 1000;
      padding: 1px 8px;
      text-align: center;
      border-radius: 50%;
      position: absolute;
      bottom: 10px;
      animation: ${AnimationMobile} 1s infinite;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 100%;
  padding-top: 7rem;
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    h2{
      font-size: 20px;
      width: 50%;
      text-align: center;
      color: ${props => props.theme.colors.titleColor};
    }
    .input{
      display: flex;
      flex-direction: column;
      width: 50%;
      position: relative;
      margin-top: 40px;
      input{
        background: transparent;
        border: 1px solid rgba( 23, 105, 255, 0.7);
        color: #020203;
        height: 50px;
        border-radius: 20px;
        font-size: 18px;
        font-weight: 800;
        padding: 0 10%;
        outline: none;
      }
      #name{
        text-transform: capitalize;
      }
      #email{
        text-transform: lowercase;
      }
      label{
        position: absolute;
        font-size: 16px;
        left: 20px;
        top: -10px;
        background: #FFF;
        color: #020203;
        padding: 0 10px;
        font-weight: 800;
      }
      textarea{
        background: transparent;
        border: 1px solid rgba( 23, 105, 255, 0.7);
        color: #020203;
        border-radius: 10px;
        outline: none;
        padding-left: 20px;
        padding-top: 20px;
        font-size: 18px;
      }
     
    }
    button{
      width: 20%;
      height: 40px;
      font-size: 16px;
      border-radius: 20px;
      margin: 0 auto;
      margin-top: 20px;
    }
  }
  @media (max-width: 800px) {
    width: 90%;
    height: 100vh;
    padding-bottom: 2rem;
    form{
      h2{
        width: 90%;
      }
      .input{
        width: 80%;
        margin-top: 20px;
        input{
          font-size: 14px;
          height: 40px;
        }
        label{
          font-size: 12px;
        }
        textarea{
          height: 130px;
        }
      }
      button{
        width: 50%;
      }
    }
  }
`;