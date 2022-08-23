import {useNavigate} from 'react-router-dom';
import {useProtectedPage} from '../../hooks/useProtectedPage';
import { BASE_URL } from './constants/constants';
import useRequestDataTrips  from './../../hooks/useRequestDataTrips'


function TripDetails() {

  useProtectedPage()
  onbeforeunload = function () {
    localStorage.removeItem("token");
  }

  const navigate = useNavigate();
  const goToAdmPage = () => {
    navigate("/admin/trips/list")
  }

  
  const id = ""

  const [data, isLoading] = useRequestDataTrips(`${BASE_URL}/trip/${id}`)
  

  const allMyTrips=data&&data.trips.map((trip) => {
    return (
      <div key={trip.id}>
        <div>
          <p>name={trip.name}</p>
        </div>
        <div>
          <p>planet={trip.planet}</p>
        </div>
        <div>
          <p>date={trip.date}</p>
        </div>
      </div>
    )
  })


  return (
    <div>
      <div>
        <h1>Próximas Viagens</h1>
      </div>
      <div>
        {isLoading && <h3>"Carregando as próximas viagens..."</h3>}
        {!isLoading&&data&&data.trips&&allMyTrips}
        {!isLoading&&data&&data.trips&& <h3>"Ocorreu um erro durante a requisição!"</h3>}
        <button onClick={goToAdmPage}>Voltar</button>

      </div>
    </div>
  );
}

export default TripDetails;
