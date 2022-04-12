import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  h1{
    margin: 40px auto;
    font-weight: 900;
    font-size: 2rem;
    width: 60%;
  }
  .content-article{
    width: 70%;
    max-width: 990px;
    margin: 0 auto;
    object-fit: cover;
    img{
      width: 100%;
      height: 300px;
    }
    h1{
      margin: 1rem auto;
    }
    p{
      font-size: 18px;
      margin: 40px auto;
      color: ${props => props.theme.colors.textColor};
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
      color: ${props => props.theme.colors.secondary};
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