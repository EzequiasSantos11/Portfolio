import { useEffect, useState } from "react"
import Link from "next/link";
import { Container, Apresentation, Choece, Portifolio } from "../../Styles/HomeStyle"
import { Button } from "../Components/Button"
import { ImagesGithub, ImagesWhatsApp } from "../Components/Images";
import { Footer } from "../Components/Footer";
import { BsWhatsapp } from "react-icons/bs";



export default function Home() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > window.innerHeight - 200) {
        setOn(true);
      } else {
        setOn(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  return (
    <Container>
      <Apresentation id="Home">
        <img src="/portifolio/programer.jpg" alt="" />
        <div className="right">
          <div className="textApresentation">
            <h1>Olá, eu sou o Ezequias Santos</h1>
            <h2>Desenvolvedor front-end React.js e Next.js!</h2>
            <p>Atualmente focado em construir uma carreira sólida no mundo da programação, busco superar desafios a cada dia e me destacar no mercado de trabalho.</p>
              <Link href="/#projetos">
                <a>
                 <Button textButton="Veja meu trabalho"/>
                </a>
              </Link>
          </div>
        </div>
      </Apresentation>
      <Choece id="skils" className={on ? "animado" : ""}>
        <h2>Minhas skils incluem</h2>
        <div className="cards">
          <div className="card card1">
            <h3>React.js</h3>
            <p>React.js é uma ferramenta/estratégia de desenvolvimento padronizado, para sites escaláveis e responsivos. </p>
          </div>
          <div className="card card2">
            <h3>Next.js</h3>
            <p>Para que seu site possa suprir uma alta demanda de páginas criadas dinâmicamente, como por exemplo em um e-commerce, o Next.js é a solução!</p>
          </div>
          <div className="card card3">
            <h3>API REST</h3>
            <p>A utilização de API's nos sites hoje em dia é um item imprecendível, já que o que mais importa nos sites são os dados que ele fornece e caso você precise pegar esses dados de um Backend essa é a solução.</p>
            
          </div>
        </div>
      </Choece>
      <Portifolio id="projetos">
        <h2>Projetos em que trabalhei</h2>
        <div className="wrapper">
          <div className="card">
            <img src="/portifolio/ToDoDevs.png" alt="" />
            <div className="text">
              <h3>Dev finanças</h3>
              <p>Uma deashboard estática ainda em desenvolvimento, ela ainda terá uma versão mobile e será usada para controle de finanças.</p>
              <Button link="https://dev-financas.vercel.app/" textButton="Visitar site"/>              
              <span className="separator"></span>
              <a target="_blank" href="https://github.com/ezequiassantos11/Project-Dashboard">Ver no Github</a>
            </div>
          </div>
          <div className="card">
            <img src="/portifolio/MusicStore.png" alt="" />
            <div className="text">
              <h3>Music Store</h3>
              <p>Aplicativo também em desenvolvimento. É um clone não totalmente fiel ao spotfy, já que a ideia é deixá-lo com minha cara.</p>
              <Button link="https://ezequias-music-store.vercel.app/" textButton="Visitar site" />
              <a target="_blank" href="https://github.com/ezequiassantos11/Music-Store">Ver no Github</a>
            </div>
          </div>
          <div className="card">
            <img src="/portifolio/NinjaMail.png" alt="" />
            <div className="text">
              <h3>Ninja-mail</h3>
              <p>Site no estilo landing page, criado para promover um serviço de campanhas por email.</p>
              <Button link="https://ninja-mail-by-ezequiassantos.vercel.app/" textButton="Visitar site"/>
              <a className="separator"></a>
              <a target="_blank" href="https://github.com/ezequiassantos11/ninja-mail-by-ezequiassantos">Ver no Github</a>
            </div>
          </div>
        </div>
      </Portifolio>
      <Footer/>
      <a target={"_blank"} href="https://contate.me/ezequiassantos-frontend" className="zap zap1"><BsWhatsapp/></a>
      <a href="https://contate.me/ezequiassantos-frontend" className="zap zap2"><BsWhatsapp/></a>
    </Container>
  )
}