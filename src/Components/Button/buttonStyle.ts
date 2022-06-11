import styled from "styled-components";


export const Container = styled.button`
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  height: 45px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  background: #1769FF;
  box-shadow: 0 0 20px #80ACF7;
  transform: scale(1.08);
  color: #FFF;
  a{
    
    color: #FFF;
  }
  &:hover{
    transition: all .2s ease-in-out;
    transform: scale(1.1);
  }
`;