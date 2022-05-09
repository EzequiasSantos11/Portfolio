import {Container} from "./buttonStyle";

type PropsButton ={
  textButton: string,
}

export function Button(textButton: PropsButton){
  return(
    <Container>
      {textButton.textButton}
    </Container>
  )
}