import styled from "styled-components";


export const Container = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.titleColor};
  outline: none;
  border: none;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
`;