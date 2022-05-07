import { useState } from "react";
import { Container } from "./styles";
import {ImagesSolIcon} from "../Images";

type PropsSwitch ={
  toggleTheme: ()=>void,
}


export function SwitchButton({toggleTheme}: PropsSwitch){
  const [onToggleTheme, setOnToggleTheme] = useState(false);
  const Toggle = ()=>{
    setOnToggleTheme(!onToggleTheme);
    toggleTheme();
  }
  return(
    <Container className="switch" onClick={Toggle}>
      <span className={onToggleTheme ? "off" : ""}></span>
      <ImagesSolIcon  />
      <img className="lua" src="/luaIcon.png" alt="" />
    </Container>
  )
}