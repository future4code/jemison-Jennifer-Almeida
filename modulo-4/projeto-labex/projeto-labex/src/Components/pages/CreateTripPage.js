import React from 'react'
import { useForm } from './../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from './constants/constants'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useNavigate } from 'react-router-dom'



function CreateTrip() {
  useProtectedPage();

  const [form, onChange, clear] = useForm({ name: "", planet: "", date: "" })
  const navigate = useNavigate()
  const returnPage = () =>{
    navigate (-1)
  }
  const newTrips = (e) => {
    e.preventDefault()
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: "",
      durationInDays: 100
    }
    console.log(body)

    axios.post(`${BASE_URL}trips`, body, { headers: { auth: localStorage.getItem("token") } })
      .then((response) => {
        alert("Viagem cadastrada com sucesso!")
        clear();
      }).catch((error) => {
        console.log(error)
      })
  }


  return (
    <div>
      <div>
        <h1>Cadastrar Nova Viagem</h1>
      </div>
      <div>
        <form onSubmit={newTrips}>
          <label>Nome: </label>
          <input
            type='text'
            nome='name'
            value={form.name}
            id='name'
            onChange={onChange}
            required
          />
          <label>Destino: </label>
          <input
            type='text'
            nome='planet'
            value={form.planet}
            id='planet'
            onChange={onChange}
            required
          />
          <label>Data: </label>
          <input
            type='text'
            nome='date'
            value={form.date}
            id='date'
            onChange={onChange}
            required
            pattern='^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/'
            title='Insira uma data.'
          />
          
          <button onSubmit={newTrips}>Enviar</button>
          <button onClick={returnPage }>Voltar</button>
        </form>

      </div>

    </div>
  );
}

export default CreateTrip;
