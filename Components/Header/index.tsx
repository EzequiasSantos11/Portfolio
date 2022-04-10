import { Header } from "./HeaderStyles";
import {ImagesMenuMobile} from "../Images";
import { useState } from "react";

type HeaderComponentProps ={
  name: string,
  avatar_url: string
}

export function HeaderComponent({name, avatar_url}:HeaderComponentProps){
  const [showMenu, setShowMenu] = useState(false);
  return(
    <Header>
      <div className="user-info">
        <img src={avatar_url} alt="" />
        <h1>{name}</h1>
      </div>
      <nav style={{right: showMenu ? '0': '-20rem'}}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="/contatos">Contatos</a>
          </li>
        </ul>
      </nav>
      <div className="menuIcon" onClick={ () => setShowMenu(!showMenu) }>
        <ImagesMenuMobile/>
      </div>
  </Header>
  )
}