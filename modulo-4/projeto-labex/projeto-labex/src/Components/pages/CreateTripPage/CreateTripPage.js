import React from 'react'
import { useForm } from '../../../hooks/useForm'
import axios from 'axios'
import { BASE_URL } from './../constants/constants'
import { useProtectedPage } from './../../../hooks/useProtectedPage'
import { useNavigate } from 'react-router-dom'
import { Container, Title, ControlForms, Form, FormsContainer, ControlButton } from './style'




function CreateTrip() {
  useProtectedPage();

  const [form, onChange, clear] = useForm({ name: "", planet: "", date: "", description: "", durationInDays: 0 })
  const navigate = useNavigate()
  const returnPage = () => {
    navigate(-1)
  }
  const newTrips = (e) => {
    e.preventDefault()
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
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
    <Container>
      <Title>
        <h1>Cadastrar Nova Viagem</h1>
      </Title>
      <ControlForms>
        <Form>
          <FormsContainer>
            <input
              type="text"
              placeholder='Nome'
              name='name'
              value={form.name}
              id='name'
              onChange={onChange}
              required />
          </FormsContainer>
          <FormsContainer>
            <select name="Planets" id="Planets">
              <option value="a">Escolha um planeta</option>
              <option value="Mercurio">Mercúrio</option>
              <option value="Vênus">Vênus</option>
              <option value="Terra">Terra</option>
              <option value="Marte">Marte</option>
              <option value="Júpiter">Júpiter</option>
              <option value="Saturno">Saturno</option>
              <option value="Urano">Urano</option>
              <option value="Netuno">Netuno</option>
            </select>
          </FormsContainer>
          <FormsContainer>
            <input
              type='number'
              placeholder='Data'
              nome='date'
              value={form.date}
              id='date'
              onChange={onChange}
              required
              pattern='^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/'
              title='Insira uma data.'
            />
          </FormsContainer>
          <FormsContainer>
          <input
            type='text'
            placeholder='Descrição'
            nome='description'
            value={form.description}
            id='description'
            onChange={onChange}
            required
          />
          </FormsContainer>
          <FormsContainer>
          <input
            type='number'
            placeholder='DurationInDays'
            name='durationInDays'
            value={form.durationInDays}
            id='durationInDays'
            onChange={onChange}
            required
          />
          </FormsContainer>

          <ControlButton>
            <button onSubmit={newTrips}>Enviar</button>
            <button onClick={returnPage}>Voltar</button>
          </ControlButton>
        </Form>

      </ControlForms>

    </Container>
  );
}

export default CreateTrip;
