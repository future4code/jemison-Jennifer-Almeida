import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from '../../img/logo.jpeg';
import { Container, DivButton, Header } from '../pages/stylesMatchs';

function TelaMatchs(props) {
  const { photo, name, age, handleMatchs } = props

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno";

  const [matchs, setmatchs] = useState([])

  // GET Matches
  const getMatchs = () => {
    axios.get(`${baseUrl} + /matches`)
      .then((response) => {
        setmatchs(response.data.matchs)
      })
      .catch((err) => {
        console.log(err)

      })
  }

  useEffect(() => {
    // postChoosePerson()
    getMatchs()
    putClear()
  }, [])



  // PUT Clear = Limpar os matchs 
  const putClear = () => {
    axios.put(`${baseUrl} + /clear`)
      .then((response) => {
        getMatchs(response.date.matchs)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const handleDelete = () => {
    putClear()
  }

  return (
    <div className="Principal">
      <Container>
        <Header>
          <h1>AstroMatch</h1>
          <button onClick={() => handleMatchs("Home")} type="button"><img src={logo} /></button>
        </Header>
        <div>
          <ul></ul>
        </div>
        <DivButton>
        <button onClick={handleDelete}>Deletar</button>
        </DivButton>
      </Container>
    </div>
  );
}

export default TelaMatchs;

  // map no get, para percorrer o array