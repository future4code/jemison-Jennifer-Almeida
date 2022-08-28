
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from './../hooks/useForm';
import { BASE_URL } from '../Components/pages/constants/constants';
import {Container, Title, Form, Buttons,} from './style'
import saturno from './../img/saturno.png'

function ApplicationFormPage() {

  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  }

  const { form, onChange } = useForm({
    name:"",
    age: "",
    applicationText:"",
    profession:"",
    country:""
  })
  const id = ''

  const registration = () => {
    axios.post(`${BASE_URL}trips/${id}/apply`, form)
      .then((response) => {
        form(response.data)

      }).catch((error) => {
        console.log(error.response, "Deu ruim")
      })
  }


  return (
    <div>
      
      <Container>
        <Title >
          <h1>Página de Fomulário</h1><img src={saturno}></img>
        </Title >
        <Form>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nome"
            value={form && form.name}
            onChange={onChange}
            required
            pattern="/^[a-zA-Z0-9]+$/"
          />
          <input
            id="age"
            name="age"
            type="number"
            placeholder="Idade"
            value={form && form.age}
            onChange={onChange}
            required
          />
          <input
            id="applicationText"
            name="applicationText"
            type="text"
            placeholder="Descrição"
            value={form && form.applicationText}
            onChange={onChange}
            required
          />
          <input
            id="country"
            name="country"
            type="text"
            placeholder="País"
            value={form && form.country}
            onChange={onChange}
            required
          />

        </Form>
        <Buttons>
        <button onClick={goToHome}>Voltar</button>
        <button onClick={registration}>Enviar</button>
        </Buttons>
      </Container>
    </div>
  );
}

export default ApplicationFormPage;
