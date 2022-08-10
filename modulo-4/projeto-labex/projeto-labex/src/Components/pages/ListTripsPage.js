
import { useNavigate } from 'react-router-dom';

function ListTripPages() {

  const navigate = useNavigate()

  const goToApplicationForms = () => {
    navigate("/trips/application")
  }

  const goToLastPage = () => {
    navigate(-1)
  }
  return (
    <div>
     <h1>Lista de Viagens</h1>
     <button onClick={goToApplicationForms}>Cadastre-se</button>
     <button onClick={goToLastPage}>Voltar</button>
    </div>
  );
}

export default ListTripPages;
