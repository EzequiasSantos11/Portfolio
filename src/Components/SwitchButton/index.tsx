import { useState } from "react";
import { Container } from "./styles";
import {ImageSolIcon} from "../Images";

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
      <ImageSolIcon  />
      <img className="lua" src="/luaIcon.png" alt="" />
    </Container>
  )
}
