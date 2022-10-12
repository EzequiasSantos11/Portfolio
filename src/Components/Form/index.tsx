import { FormEvent, useState } from "react";
import { Container } from "./styles";

interface PropsForm{
  click: ()=>void;
}

interface DataProps{
  name: string,
  email: string,
  message: string
}

export function Form({click}: PropsForm){
  const [ data, setData ] = useState({
    name: "",
    email: "",
    message: ""
  } as DataProps);

  const handleChange = (field: string, value: any) => {
    setData({ ...data, [field]: value });
  };
  console.log(data.message);

  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(data.name === "" || data.email === "" || data.message === ""){
      return;
    }else{
      click();
    }
  }
  return(
    <Container>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <h1>Deiche uma mensagem e retornarei o mais rápido possível!</h1>
        <div className="input name">
          <label htmlFor="">Nome:</label>
          <input value={data.name} onChange={(e) =>handleChange('name', e.currentTarget.value)} type="text" required/>
        </div>
        <div className="input email">
          <label htmlFor="">Email:</label>
          <input value={data.email} onChange={(e) =>handleChange('email', e.currentTarget.value)} type="email" name="" id="" required/>
        </div>
        <div className="input message">
          <label htmlFor="">Mensagem:</label>
          <textarea value={data.message} onChange={(e) =>handleChange('message', e.currentTarget.value)} name="" id="" cols={30} rows={8} required></textarea>
        </div>
        <button type="submit" >Enviar</button>
      </form>
    </Container>

  )
}