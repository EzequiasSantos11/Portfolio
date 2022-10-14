import { FormEvent, useState } from "react";
import { api } from "../../helpers/api";
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();


    if(data.name === "" || data.email === "" || data.message === ""){
      return;
    }else{
      api.post("", {
        name: data.name,
        email: data.email,
        message: data.message,
        access_key: "e598c07f-e14d-493b-97d0-baa520484956"
      }).then(function (response) {
        if(response.status === 200){
          alert("Mensagem enviada com sucesso!");
          setData({}as DataProps);
          click();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    
    }
  }

  return(
    <Container >
      <span onClick={click}></span>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <i onClick={click}>X</i>
        <h1>Deiche uma mensagem e retornarei o mais rápido possível!</h1>
        <div className="input name">
          <label htmlFor="">*Nome:</label>
          <input value={data.name} onChange={(e) =>handleChange('name', e.currentTarget.value)} type="text" required/>
        </div>
        <div className="input email">
          <label htmlFor="">*Email:</label>
          <input value={data.email} onChange={(e) =>handleChange('email', e.currentTarget.value)} type="email" name="" id="" required/>
        </div>
        <div className="input message">
          <label htmlFor="">*Mensagem:</label>
          <textarea value={data.message} onChange={(e) =>handleChange('message', e.currentTarget.value)} name="" id="" cols={30} rows={8} required></textarea>
        </div>
        <button type="submit" >Enviar</button>
      </form>
    </Container>

  )
}