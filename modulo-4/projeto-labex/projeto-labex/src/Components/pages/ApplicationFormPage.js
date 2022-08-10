
import { useNavigate } from 'react-router-dom';

function ApplicationFormPage() {

  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  }

  
  
  return (
    <div>
     <h1>Página de Fomulário</h1>
     <button onClick={goToHome}>Voltar</button>
     <button>Enviar</button>

    </div>
  );
}

export default ApplicationFormPage;
