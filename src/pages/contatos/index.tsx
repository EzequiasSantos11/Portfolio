import { ImagesWhatsApp, ImagesInstagram, ImagesLinkedin } from "../../Components/Images";
import { Container, Apresentation, Form } from "../../../Styles/ContatosStyle";
import { useState } from "react";
import { Button } from "../../Components/Button";

interface PropsData {
  name: string,
  email: string,
  subject: string,
  honeypot: string,
  message: string,
  accessKey: string,
}


export default function Contatos(props) {
  //useState para setar infos do formulário.
  const [contact, setContact] = useState<PropsData>({
    name: '',
    email: '',
    subject: 'StaticForms - Contact Form',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '', 
    accessKey: `${props.accessKey}`  // get your access key from https://www.staticforms.xyz
  });
  //handleInput seta o setContact com as infos do form.
  const handleInput = e => setContact({ ...contact, [e.target.name]: [e.target.value] });
  //handleSubmit envia as infos para o servidor que manda para o meu email.
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const data = await fetch("https://api.staticforms.xyz/submit",{
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {'Content-Type': 'application/json'}
      });
      const json = await data.json()
      if(json.success){
        alert("Sucesso! Muito obrigado pelo seu contato!")
      }else{
        alert("Algo deu errado :( tente novamente ou entre em contato por uma de minhas redes sociais!")
      }
    }catch{
      alert("Problemas no servidor :( entre em contato comigo por uma de minhas redes sociais!")
    }
  }
  return (
    <Container>
      <Apresentation className="apresentation">
        <div className="wrapper">
          <h1>Vamos trabalhar juntos?</h1>
          <h2>Fique a vontade para entrar em contato comigo por uma de minhas redes sociais.</h2>
          <div className="sotialIcons">
            <a target={"_blank"} href="https://contate.me/ezequiassantos">
              <ImagesWhatsApp />
            </a>
            <a href="https://www.instagram.com/ezequias.dev/" target={"_blank"}>
              <ImagesInstagram />
            </a>
            <a href="https://www.linkedin.com/in/ezequias-dev" target={"_blank"}>
              <ImagesLinkedin />
            </a>
          </div>
        </div>
        <img src="/portifolio/contact.jpg" alt="" />
      </Apresentation>
      <Form className="form">
        <form onSubmit={handleSubmit}>
          <h2>Se preferir pode preencher este formulário e eu entro em contato com você!</h2>
          <div className="input">
            <label>Seu Nome</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="fulano(a) de tal" 
              onChange={handleInput}
              value={contact.name}
            />
          </div>
          <div className="input">
            <label htmlFor="">Seu e-mail</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="exemplo@email.com" 
              onChange={handleInput}
              value={contact.email}
            />
          </div>
          <div className="input textarea">
            <label htmlFor="">Sua mensagem</label>
            <textarea name="message" onChange={handleInput} value={contact.message} id="mensagem" placeholder="Se possível diga o motivo do seu contato, seja para contratação CLT ou Freelancer!" cols={30} rows={7}></textarea>
          </div>
          <div className='control' style={{display: "none"}}>
            <input
              type='text'
              name='honeypot'
              style={{ display: 'none' }}
              onChange={handleInput}
            />
            <input
              type='hidden'
              name='subject'
              onChange={handleInput}
            />
          </div>
          <Button textButton="enviar" type="submit" />
        </form>
      </Form>
    </Container>
  )
}

function getServerSideProps(){
  return{
    props:{
      accessKey: process.env.NEXT_PUBLIC_ACCESS_KEY
    }
  }
}