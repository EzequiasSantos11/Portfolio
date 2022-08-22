import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10rem;
  width: 100%;
  background: #e9e9e9;
  strong{
    font-size: 18px;
  }
  span{
    margin: 10px auto;
  }
  .sotialmideas{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 80%;
    a{
      font-size: 24px;
    }
    .face{
      svg{
        fill: blue;
        font-size: 28px;
      }
    }
    .link{
      svg{
        fill: blue;
      }
    }
    .insta{
      svg{
        fill: brown;
      }
    }
  }
`;