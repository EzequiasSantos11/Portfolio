import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  width: 60px;
  border-radius: 20px;
  background: ${props => props.theme.colors.secondary};
  position: relative;
  padding: 0 8px;
  svg{
    height: 20px;
    width: 20px;
    margin: 0;
    fill: yellow;
    left: 0;
  }
  .lua{
    position: absolute;
    right: 4px;
    z-index: 1;
    height: 20px;
    margin: 0;
  }
  span{
    display: flex;
    content: "";
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
    margin-left: -8px;
    transition: all .6s ease;
    background: ${props => props.theme.colors.primary};
    border: 2px solid white;
  }
  .off{
    margin-left: 25px;
  }
`;