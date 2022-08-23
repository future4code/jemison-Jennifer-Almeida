
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { BASE_URL } from './constants/constants';

function ApplicationFormPage() {

  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  }

  const { form, onChange } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""
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
      <div className='Header'>

      </div>
      <div className='Container'>
        <div>
          <h1>Página de Fomulário</h1>
        </div>
        <form onSubmit={registration}>
          <label htmlFor="Nome">Nome:</label>
          <input
            id="name"
            name="nome"
            type="text"
            placeholder="Nome"
            value={form && form.name}
            onChange={onChange}
            required
            pattern="/^[a-zA-Z0-9]+$/"
          />
        </form>
        <button onClick={goToHome}>Voltar</button>
        <button>Enviar</button>
      </div>
    </div>
  );
}

export default ApplicationFormPage;
