import React from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { Container,ControlForms,TitleLogin, ContainerForm, StyleButtons } from './style'

function LoginPage() {

  const navigate = useNavigate();

  const goToAdmPage = () => {
    navigate("/admin/trips/list")
  }

  const goToLogin = () => {
    navigate(-1)
  }

  const [body, onChange, clear] = useForm({ email: "", password: "" })



  const loginOk = (e) => {
    e.preventDefault()
    axios.post(`${BASE_URL}login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        goToAdmPage()
        clear();
      }).catch((error) => {
        console.log("Deu ruim!", error.response)
      })

  }



  return (
    <Container>
      <ControlForms>
      <TitleLogin>
        <h1>Login</h1>
      </TitleLogin>
      <ContainerForm onSubmit={loginOk}>
        <label htmlFor="email">E-mail: </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          value={body.email}
          onChange={onChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Insira um e-mail"
          required
        />
        <label htmlFor="password">Senha: </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
          value={body.password}
          onChange={onChange}
          pattern="^.{3,}"
          title="Insira no mínimo 3 caracteres"
          required
        />
        <StyleButtons>
          <button onClick={loginOk}>Entrar</button>
          <button onClick={goToLogin}>Voltar</button>
        </StyleButtons>
      </ContainerForm>
    </ControlForms>
    </Container >
  );
}

export default LoginPage;
