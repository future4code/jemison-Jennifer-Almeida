import React from 'react';
import './App.css';
import foto from './img/me.png';
import logoUfmg from './img/ufmg.jpg';
import evoluir from './img/evoluir.png';
import fae from './img/fae.png';
import labenu from './img/labenu.jpg';
import email from './img/email.png';
import endereco from './img/endereco.png';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <section className='header'></section>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={foto}
          nome="Jennifer Perucci "
          descricao="Oi, eu sou a Jennifer! Uma bióloga e  mestranda em educação. Atualmente, me aventurando no desafio do mundo tech."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png"
          texto="Ver mais"
        />
      </div>
      <div className="page-section-contato">
        <CardPequeno
          imagem={email}
          endereco="Email:"
          descricao=" jenniferperucci@hotmail.com"
        />
        <CardPequeno
          imagem={endereco}
          endereco=" Endereço:"
          descricao=" Rua das Flores nº 100- RJ"
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={logoUfmg}
          nome="Universidade Federal de Minas Gerais"
          descricao="Licenciatura em Ciências Biológicas- 2019"
        />

        <CardGrande
          imagem={evoluir}
          nome="Evoluir atendimento integrados"
          descricao="Professora Multidisciplinar- 2019/2021."
        />
        <CardGrande
          imagem={fae}
          nome="Faculdade de Educação da UFMG"
          descricao="Mestranda em Educação e Movimentos Sociais- 2020/2022."
        />
        <CardGrande
          imagem={labenu}
          nome="Labenu"
          descricao="Desenvolvimento WEb Full Stack- 2022/2023."
        />
      </div>



      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <div className='controle-midias'>
          <ImagemButton
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
            texto="Facebook"
          />

          <ImagemButton
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
            texto="Twitter"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
