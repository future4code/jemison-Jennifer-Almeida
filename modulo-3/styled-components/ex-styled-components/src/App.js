import React from 'react';
import './App.css';
import LabZap from './img/LabZap.svg';
import {
  Header, DivPai, Logo, ContainerCentral, FaixasLaranjas, Conteudo, Remetente, Mensagem
  , BotaoEnviar,Footer
} from './style';


function App() {
  return (
    <DivPai>
      <Header>
        <Logo src={LabZap} className="App-logo" alt="Imagem logo Labenu" />
      </Header>

      <ContainerCentral>
        <FaixasLaranjas />
        <Conteudo>
          <Remetente>
            <label>Remetente: </label>
            <input type="text"></input>
          </Remetente>
          <Mensagem>
            <label>Mensagem: </label>
            <input type="text"></input>
          </Mensagem>
          <BotaoEnviar>
            <button>Enviar </button>
          </BotaoEnviar>
        </Conteudo>
        <FaixasLaranjas />
      </ContainerCentral>
      <Footer>
        <p>  Copyrigth &copy; 2022 Labenu All rights reserved. R Paris Leme, 215, Conjunto 820 Pinheiros - CEP: 05424-150</p>

      </Footer>
    </DivPai>
  );
}

export default App;
