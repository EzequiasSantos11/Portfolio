import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  .tumb{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;
    position: relative;
    background: #251533;
    >img{
      opacity: .4;
      width: 100%;
      height: 100%;
    }
    .nitda{
      display: flex;
      position: absolute;
      opacity: 1;
      width: 60%;
      height: 60%;
    }
  }
  h1{
    margin: 40px auto;
    font-weight: 900;
    font-size: 2rem;
    width: 60%;
    text-align: center;
  }
  .content-article{
    width: 60%;
    max-width: 990px;
    margin: 0 auto;
    object-fit: cover;
    img{
      width: 100%;
      height: 400px;
    }
    h1{
      margin: 1rem auto;
    }
    p{
      font-size: 1.2rem;
      line-height: 1.6;
      margin: 40px auto;
      
    }
    a{
      color: blue;
      &::before{
        content: "Link -->";
        color: black;
        margin-right: 20px;
        cursor: default;
      }
    }
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
      color: #111;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    h1{
      width: 90%;
    }
    .content-article{
      width: 90%;
    }
  }

`;