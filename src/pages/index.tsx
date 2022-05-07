import { Container, Apresentation } from "../../Styles/HomeStyle"



export default function Home(){
  return(
    <Container>
      <Apresentation>
        <div className="textApresentation">
          <span>Ezequias Santos</span>
          <h1>Desenvolvimento front end de qualidade!</h1>
          <p>Seu site profissional feito por um proficional</p>
          <button>Saiba Mais</button>
        </div>
      </Apresentation>
    </Container> 
  )
}