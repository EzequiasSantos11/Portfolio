import { Container, Apresentation, Choece } from "../../Styles/HomeStyle"
import { Button } from "../Components/Button"



export default function Home(){
  return(
    <Container>
      <Apresentation>
        <div className="wrapper">
          <div className="textApresentation">
            <span>Ezequias Santos</span>
            <h1>Desenvolvimento front end de qualidade!</h1>
            <p>Seu site profissional feito por um proficional</p>
            <a>
              <Button textButton="teste" />
            </a>
          </div>
          <span className="base"></span>
        </div>
        <img src="/cat.png" alt="" />
      </Apresentation>
      <Choece>
        <h2>Escolha a melhor estratégia para sua marca!</h2>
        <div className="cards">
          <div className="card">
            <h3>React.js</h3>
            <p>o React.js é um framework moderno e ultilizado por grandes empresas como Facebook, Walmart, instagram etc. Contudo o React.js é apenas uma ferramenta, uma estratégia de desenvolvimento padronizado, para sites escalaveis e responsivos. Ter um desenvolvedor que entende dessa ferramenta na sua equipe fará toda a diferença no desenvolvimento web.</p>
            <a href="">
              <Button textButton="saiba mais"/>
            </a>
          </div>
          <div className="card">
            <h3>Next.js</h3>
            <p>Caso você queira dar um passo a mais e viu que precisa de algo que complemente o React.js para que seu site possa suprir uma alta demanda de páginas criadas dinâmicamentes como em um e-commerce por exemplo. O Nex.js é uma ferramenta que pode ser adicionada ao React.js e assim dando alguns super poderes além dos já citados. com ele seu site terá uma dinâmica mais acertiva e produtiva.</p>
            <a href="">
              <Button textButton="saiba mais"/>
            </a>
          </div>
          <div className="card">
            <h3>Node.js</h3>
            <p>Agora você já escolheu entre React.js e Next.js, porém seu site precisa de dados do back-end, um local para armazenar e distribuir os dados de seus usuários. Com um backend bem estruturado é possível salvar dados de uma pessoa e ajudála a escolher produtos em sua loja on-line por exemplo, ou você pode simplesmente querer cadastrar usuários, alunos, produtos etc. Tudo isso é possível com o Node.js</p>
            <a href="">
              <Button textButton="saiba mais"/>
            </a>
          </div>
        </div>
      </Choece>
    </Container> 
  )
}