import styled from "styled-components";

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  .background{
    display: flex;
    object-fit: cover;
    position: relative;
    width: 100%;
    height: 100%;
    img{
      height: 100%;
      width: 100%;
      position: absolute;
    }
  }
`;

export const Wrapper = styled.div`
  display: grid;
  width: 90%;
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