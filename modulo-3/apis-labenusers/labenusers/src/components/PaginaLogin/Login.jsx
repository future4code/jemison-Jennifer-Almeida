import React, { useEffect, useState } from "react";
import axios from "axios";



function Login() {
  // Variaveis API 
  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
  const serviceHeaders = { headers: { Authorization: 'jennifer-perucci-jemison' } }



  const [inputNome, setInputNome] = useState('');
  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }

  const [inputEmail, setInputEmail] = useState('');
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value)
  }


  // Requisição Post 
  const body = {
    name: inputNome,
    email: inputEmail
  }


  const criarNovoUsuario = (e) => {
    e.preventDefault();

    axios.post(url, body, serviceHeaders).then((response) => {
      setInputNome(response.data)
      setInputEmail(response.data)

      alert("Novo usuário criado com sucesso")
    })
      .catch((error) => {
        alert("Algo deu errado!Insira os dados novamente")

      })



  }







  return (
    <div className="Principal">
      <div>
        <button >Trocar de Tela</button>
      </div>

      <form>
        <input placeholder="Nome" type="text" value={inputNome} onChange={handleInputNome} />
        <input placeholder="E-mail" type="text" value={inputEmail} onChange={handleInputEmail} />
        <button onClick={() => criarNovoUsuario}>Criar Usúario</button>
      </form>
      <div>
        <h3>Procurar Usuário</h3>
      </div>
      <form>
        <input placeholder="Nome exato para busca" type="text"  />
      </form>
      <button>Salvar Edição</button>


    </div>


  );
}

export default Login;
