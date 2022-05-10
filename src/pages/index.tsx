import { useEffect, useState } from "react"
import { Container, Apresentation, Choece, Portifolio } from "../../Styles/HomeStyle"
import { Button } from "../Components/Button"
import { ImagesWhatsApp } from "../Components/Images";



export default function Home(){
  const [on, setOn] = useState(false);
  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > window.innerHeight-200){
        setOn(true);
      }else{
        setOn(false);
      }
    }
    window.addEventListener('scroll',scrollListener);
    return ()=>{
      window.removeEventListener('scroll', scrollListener);
    }
  },[]);
  return(
    <Container>
      <Apresentation>
        <div className="wrapper">
          <div className="textApresentation">
            <span>Ezequias Santos</span>
            <h1>Desenvolvimento front end de qualidade!</h1>
            <p>Seu site profissional feito por um profissional</p>
            <a target={"_blank"} href="https://wa.link/l0y6hz">
              <Button textButton="Entrar em contato" />
              <ImagesWhatsApp/>
            </a>
          </div>
          <span className="base"></span>
        </div>
        <img src="/cat.png" alt="" />
      </Apresentation>
      <Choece className={on ? "animado" : ""}>
        <h2>Escolha a melhor estratégia para sua marca!</h2>
        <div className="cards">
          <div className="card card1">
            <h3>React.js</h3>
            <p>o React.js é um framework moderno e ultilizado por grandes empresas como Facebook, Walmart, instagram etc. Contudo o React.js é apenas uma ferramenta, uma estratégia de desenvolvimento padronizado, para sites escaláveis e responsivos. Ter um desenvolvedor que entende dessa ferramenta na sua equipe fará toda a diferença no desenvolvimento web.</p>
            <a href="">
              <Button textButton="saiba mais"/>
            </a>
          </div>
          <div className="card card2">
            <h3>Next.js</h3>
            <p>Caso você queira dar um passo a mais e viu que precisa de algo que complemente o React.js para que seu site possa suprir uma alta demanda de páginas criadas dinâmicamentes como em um e-commerce por exemplo. O Nex.js é uma ferramenta que pode ser adicionada ao React.js e assim dando alguns super poderes além dos já citados. com ele seu site terá uma dinâmica mais acertiva e produtiva.</p>
            <a href="">
              <Button textButton="saiba mais"/>
            </a>
          </div>
          <div className="card card3">
            <h3>Node.js</h3>
            <p>Agora você já escolheu entre React.js e Next.js, porém seu site precisa de dados do back-end, um local para armazenar e distribuir os dados de seus usuários. Com um backend bem estruturado é possível salvar dados de uma pessoa e ajudála a escolher produtos em sua loja on-line por exemplo, ou você pode simplesmente querer cadastrar usuários, alunos, produtos etc. Tudo isso é possível com o Node.js</p>
            <a href="">
              <Button textButton="saiba mais"/>
            </a>
          </div>
        </div>
      </Choece>
      <Portifolio >
        <h2>Alguns dos projetos em que trabalhei!</h2>
        <div className="wrapper">
          <div className="card">
            <div className="textCard">
              <h3>Projeto ToDoDev!</h3>
              <p>O projeto ToDoDev ou TDD é um projeto de uma dashboard em construção, com a intenção de servir de apoio ao desinvolvimento de alguns Dev's. Com esta dashboard o Dev pode criar, editar e excluir listas de afazeres. Este projeto ainda não tem uma versão mobile 100% responsiva, pois ainda está em desenvolvimento.</p>
              <a target={"_blank"} href="https://ezequias-todo-dev.vercel.app/deashboard">Visitar ToDoDev</a>
            </div>
            <img src="/portifolio/ToDoDevs.png" alt="" />
          </div>

          <div className="card">
            <img src="/portifolio/Dashboard.png" alt="" />
            <div className="textCard">
              <h3>DevFinanças!</h3>
              <p>Assim como a anterior esta também é uma dashboard em construção que em breve terá sua versão mobile, porém o diferencial aqui é que esta dashboard é mais voltada a ajudar freelancers e Dev's que estão no mercado, a se organizarem com suas finanças em geral!</p>
              <a target={"_blank"} href="https://dev-financas.vercel.app/">Visitar o DevFinanças</a>
            </div>
          </div>

          <div className="card">
            <div className="textCard">
              <h3>MusicStore!</h3>
              <p>Quem não gosta de ouvir suas músicas favoritas enquanto esta desenvolvendo, não é mesmo? Pensando nisso eu criei o MusicStore, um clone do Spotify com algumas funções diferentes e a mais, este projeto ainda está em desenvolvimento, mas vale a pena dar um pulinho nele de vez em quando pois muito em breve estará 100% funcional. Esse sim tem versão mobile.</p>
              <a target={"_blank"} href="https://ezequias-music-store.vercel.app/">Visitar MusicStore</a>
            </div>
            <img src="/portifolio/MusicStore.png" alt="" />
          </div>

          <div className="card">
            <img src="/portifolio/NinjaMail.png" alt="" />
            <div className="textCard">
              <h3>Ninja Mail!</h3>
              <p>Talvez oque você precisa é apenas de um site bem estruturado clean e responsivo, que passe a mensagem e que cumpra seu propósito. Esse projeto tem tudo isso e um pouco mais, confira e comprove a qualidade do meu trabalho!</p>
              <a target={"_blank"} href="https://ninja-mail-by-ezequiassantos.vercel.app/">Visitar Ninja Mail</a>
            </div>
          </div>
        </div>
      </Portifolio>
    </Container> 
  )
}