import {Container} from "./buttonStyle";
import Link from "next/link";

type PropsButton ={
  textButton: string,
  type?: string,
  link?: string,
}

export function Button({link, textButton}: PropsButton){
  return(
    <Container>
      <a target={"_blank"} href={link}>{textButton}</a>
    </Container>
  )
}