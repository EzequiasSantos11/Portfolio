import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Header } from "./HeaderStyles";
import {ImageMenuMobile} from "../Images";
import Link from "next/link";



type PropsHeader ={
  toggleTheme: ()=>void,
  scroll: boolean,
}

const HeaderComponent = ({toggleTheme, scroll}: PropsHeader)=>{
  const [showMenu, setShowMenu] = useState(false);
  const [path, setpath] = useState("");
  const { asPath } =  useRouter();
  useEffect(()=>{
    setpath(asPath);
  },[asPath])
  return(
    <Header>
      <div className={scroll ? "wrapper fixed" : "wrapper"}>
        <div className="user-info">
          <img src="https://github.com/ezequiassantos11.png" alt="minha foto de perfil" />
          <h1>Ezequias Santos</h1>
        </div>
        <nav style={{right: showMenu ? '0': '-20rem'}}>
          <ul>
            <li className={ path === "/#" ? "active" : ""} onClick={ () => setShowMenu(false) }>
              <Link href="/#">
                <a>Home</a>
              </Link>
            </li>
            <li className={ path === "/#phases" ? "active" : ""} onClick={ () => setShowMenu(false) }>
              <Link href="/#phases">
                <a>Etapas da criação</a>
              </Link>
            </li>
            <li className={ path === "/#portfolio" ? "active" : ""} onClick={ () => setShowMenu(false) }>
              <Link href="/#portfolio">
                <a>Portfólio</a>
              </Link>
            </li>
            <li className={ path === "/#planos" ? "active" : ""} onClick={ () => setShowMenu(false) }>
              <Link href="/#planos">
                <a>Planos</a>
              </Link>
            </li>
            <li className={ path === "/blog/" || path === "/#blog" ? "active" : ""} onClick={ () => setShowMenu(false) }>
              <Link href={"/blog"}>
                <a className="button">Blog</a>
              </Link>
            </li>
          </ul>
          {/* <SwitchButton toggleTheme={toggleTheme}/> */}
        </nav>
        <div className="menuIcon" onClick={ () => setShowMenu(!showMenu) }>
          <ImageMenuMobile />
        </div>
        <span className="backLog" style={{display: showMenu ? "flex" : "none"}} onClick={() => setShowMenu(!showMenu)}></span>
      </div>
  </Header>
  )
}

export default HeaderComponent;