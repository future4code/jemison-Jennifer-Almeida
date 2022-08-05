import React, { useEffect } from "react";
import axios from "axios";
import logo from '../../img/logo.jpeg';


function TelaMatchs(props) {
  const { photo, name, age, } = props

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno";

  const [matchs, setmatchs] = useState([])

  // GET Matches
  const getMatchs = () => {
    axios.get(`${baseUrl} + /matches`)
      .then((response) => {
        setmatchs(response.date.matchs)
      })
      .catch((err) => {
        console.log(err)

      })
  }

  useEffect(() => {
    postChoosePerson()
    getMatchs()
    putClear()
  }, [])
const handleMatchs = () =>{
  getMatchs()
}

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


  return (
    <div className="Principal">
      <div>
        <h1>AstroMatch</h1>
        <button onClick={handleMatchs} type="button"><img src={logo}/></button>
      </div>
      <div>
        <li></li>
      </div>
      <button>Deletar</button>
    </div>
  );
}

export default TelaMatchs;

  // map no get, para percorrer o array