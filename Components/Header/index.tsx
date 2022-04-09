import { Header } from "./HeaderStyles";

type HeaderComponentProps ={
  name: string,
  avatar_url: string
}

export function HeaderComponent({name, avatar_url}:HeaderComponentProps){
  return(
    <Header>
      <div className="user-info">
        <img src={avatar_url} alt="" />
        <h1>{name}</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Contatos</a>
          </li>
        </ul>
      </nav>
  </Header>
  )
}