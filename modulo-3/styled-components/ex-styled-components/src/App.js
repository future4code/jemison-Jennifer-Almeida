import React from 'react';
import './App.css';
import LabZap from './img/LabZap.svg';
import { Header,DivPai, Logo } from './style';


function App() {
  return (
    <DivPai>
      <Header>
        <Logo src={LabZap} className="App-logo" alt="Imagem logo Labenu" />
      </Header>
      <section className='Container'>
        <div className='faixas-laterais'>
          <span></span>
          <span></span>
        </div>

      </section>
    </DivPai>
  );
}

export default App;
