import React, { useState } from 'react';
import './App.css';
import LogoLabenu from "./LabZap.svg";
import { Container, AreaLaranja, Cabecalho, AreaMensagem, Rodape, Mensagem, Formulario, Chat } from "./style";


function App() {
  const [inputNome, setInputNome] = useState("");
  const [mensagem, setMensagem] = useState([]);
  const [inputMensagem, setInputMensagem] = useState("");

  const handleInputMensagem = (e) => {
    setInputMensagem(e.target.value)
  };

  const handleInputNome = (e) => {
    setInputNome(e.target.value)

  };

  const mensagemAdicionada = (e) => {

    e.preventDefault();

    const mensagemInserida = { nome: inputNome, mensagem: inputMensagem };
    const enviarNovaMensagem = [...mensagem, mensagemInserida];
    setMensagem(enviarNovaMensagem);
    setInputNome("");
    setInputMensagem("");
  };

  const exibirMensagens = mensagem.map((mensagens, index) => {
    return (
      <Mensagem key={index}>
        <b>{mensagens.nome}</b>
        <p>{mensagens.mensagem}</p>
      </Mensagem>
    )

  });

  return (
    <Container>
      <Cabecalho><img src={LogoLabenu} alt="Labenu" /></Cabecalho>
      <AreaLaranja />
      <AreaMensagem>
        <Chat>{exibirMensagens}</Chat>
        <Formulario>
          <label>Nome:</label>
          <input type="text" id="nome" name="nome"
            value={inputNome}
            onChange={handleInputNome}
          />
          <label>Mensagem:</label>
          <input type="text" id="mensagem" name="mensagem"
            value={inputMensagem}
            onChange={handleInputMensagem}
          />
          <button onClick={mensagemAdicionada}>Enviar Mensagem</button>
        </Formulario>
      </AreaMensagem>
      <AreaLaranja />
      <Rodape>Copyright © 2022 Labenu All rights reserved. R. Pais Leme, 215, Conjunto 820 Pinheiros. CEP 05424-150 </Rodape>
    </Container>
  );
}

export default App;


