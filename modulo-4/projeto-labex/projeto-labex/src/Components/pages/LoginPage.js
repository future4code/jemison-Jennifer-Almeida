import React from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import  axios from 'axios';
import { BASE_URL } from './constants/constants'

function LoginPage() {

  const navigate = useNavigate();

  const goToPainelAdm = () => {
    navigate("/admin/trips/list")
  }

  const goToLogin = () => {
    navigate(-1)
  }

  const [body, onChange] = useForm({ email:"", password:"" })
  
   

  const loginOk = (e) => {
    e.preventDefault()
    axios.post(`${BASE_URL}login`, body)
    .then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.log("Deu ruim!")
    })
  }



  return (
    <div>
      <div>
        <h1>PÁGINA DE LOGIN</h1>
      </div>
      <form onSubmit={loginOk}>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          value={body.email}
          onChange={onChange}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <label htmlFor="password">Senha:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
          value={body.password}
          onChange={onChange}
          required
          pattern="^.{3,}"
        />
        <div>
          <button onClick={loginOk ? goToPainelAdm:"Insira os dados para Login."}>Entrar</button>
          <button onClick={goToLogin}>Voltar</button>
        </div>
      </form>


    </div>
  );
}

export default LoginPage;
