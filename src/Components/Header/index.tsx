import { Header } from "./HeaderStyles";
import {ImagesMenuMobile} from "../Images";
import { useState } from "react";
import Link from "next/link";
import { SwitchButton } from "../SwitchButton";

type PropsHeader ={
  toggleTheme: ()=>void,
}

const HeaderComponent = ({toggleTheme}: PropsHeader)=>{
  const [showMenu, setShowMenu] = useState(false);
  return(
    <Header>
      <div className="user-info">
        <img src="https://github.com/ezequiassantos11.png" alt="minha foto de perfil" />
        <h1>Ezequias Santos</h1>
      </div>
      <nav style={{right: showMenu ? '0': '-20rem'}}>
        <ul>
          <li  onClick={ () => setShowMenu(false) }>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li onClick={ () => setShowMenu(false) }>
            <Link href={"/blog"}>
              <a>Blog</a>
            </Link>
          </li>
          <li onClick={ () => setShowMenu(false) }>
            <Link href={"/Sobre"}>
              <a>Sobre</a>
            </Link>
          </li>
          <li onClick={ () => setShowMenu(false) }>
            <Link href="/contatos">
              <a >Contatos</a>
            </Link>
          </li>
        </ul>
        <SwitchButton toggleTheme={toggleTheme}/>
      </nav>
      <div className="menuIcon" onClick={ () => setShowMenu(!showMenu) }>
        <ImagesMenuMobile />
      </div>
      <span className="backLog" style={{display: showMenu ? "flex" : "none"}} onClick={() => setShowMenu(!showMenu)}></span>
  </Header>
  )
}

export default HeaderComponent;