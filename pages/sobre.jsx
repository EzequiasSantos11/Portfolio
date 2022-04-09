import React from "react";
import Link from "next/link";

function Title (props){
 return(
  <h1 style={{color: props.color}}>{props.children}</h1>
 )
}

export default function Sobre(){
 return(
   <div>
    <header>
     <Title color="red">Sobre este blog</Title>
     <img src="..." />
    </header>
    <Link href="/">
     <a >Voltar para a home</a>
    </Link>
   </div>
 );
}