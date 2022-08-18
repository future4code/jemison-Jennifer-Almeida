import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from '../../img/logo.jpeg';
import { Container, DivButton, Header } from '../pages/stylesMatchs';

function TelaMatchs(props) {
  const { photo, name, age, handleMatchs } = props

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno";

  const [matches, setmatches] = useState([])

  // GET Matches
  const getMatches = () => {
    axios.get(`${baseUrl} + /matches`)
      .then((response) => {
        setmatches(response.data.matches)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getMatches()
  }, [])

  // PUT Clear = Limpar os matchs 
  const putClear = () => {
    axios.put(`${baseUrl} + /clear`)
      .then((response) => {
        getMatches()
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
          {matches.map(match => {
            return <div><img src={match.photo} style={{ width: '32px' }}></img><p>{match.name}</p></div>
          })}
        </div>
        <DivButton>
          <button onClick={handleDelete}>Deletar</button>
        </DivButton>
      </Container>
    </div>
  );
}

export default TelaMatchs;