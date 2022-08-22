import { Container } from "./styles";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import {AiOutlineFacebook} from "react-icons/ai";


export function Footer(){
  return(
    <Container>
      <strong>&copy; Feito por | Ezequais Santos</strong>
      <span>Desenvolvedor front-end React.js / Next.js</span>
      <div className="sotialmideas">
        <a target={"_blank"} href="https://facebook.com/ezequias16" className="face"><AiOutlineFacebook/></a>
        <a target={"_blank"} href="https://www.linkedin.com/in/ezequias-dev/" className="link"><BsLinkedin/></a>
        <a target={"_blank"} href="https://www.instagram.com/ezequias.dev/" className="insta"><BsInstagram/></a>
      </div>
    </Container>
  )
}