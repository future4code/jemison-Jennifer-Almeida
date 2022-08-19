
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
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: ''
  })
  const id = "NoIFVcOiSgTKTIPVZwXS"
  const registration = () => {
    axios.post(`${BASE_URL}trips ${id} apply`)
      .then((response) => {
        form(response.data)

      }).catch((error) => {
        console.log(error.response, "Deu ruim")
      })
  }

  const registrationForm = form.apply && form.apply((forms) =>{
    return <div>
<h4>Nome:</h4><p>{forms.name}</p>

    </div>

  })

  return (
    <div>
      <h1>Página de Fomulário</h1>
      {registrationForm}
      <button onClick={goToHome}>Voltar</button>
      <button>Enviar</button>

    </div>
  );
}

export default ApplicationFormPage;
