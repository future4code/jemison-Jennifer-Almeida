import Home from './Components/pages/Home'
import {GlobalStyle} from './GlobalStyle'
import React, { useState } from 'react';
import TelaMatchs from './Components/pages/TelaMatchs';

function TelaPrincipal() {

 const [pagina, setPagina] = useState("Home")
 const handleTrocaTela = () =>{
   setPagina("TelaMatch")
 }
 const handleMatchs = () =>{
 // getMatchs()
  setPagina("Home")
}
 switch (pagina) {
   case "Home": 
   return (
    <div className="Principal">
     <GlobalStyle/>
     <Home handleTrocaTela={handleTrocaTela}/>
    </div>
  )

  case "TelaMatch" : 
  return (
    <div className="Principal">
     <GlobalStyle/>
     <TelaMatchs handleMatchs={handleMatchs}/>
    </div>
  )

  default: 
  console.log("Deu ruim!")
  break
 }

  
}

export default TelaPrincipal ;
