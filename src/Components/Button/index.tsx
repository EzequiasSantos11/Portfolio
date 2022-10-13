import {Container} from "./buttonStyle";
import { ButtonHTMLAttributes } from "react";

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  textButton: string,
  link?: string,
}

export function Button({link, textButton, ...rest }: PropsButton){
  return(
    <Container {...rest}>
      <a target={"_blank"} href={link}>{textButton}</a>
    </Container>
  )
}