
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './constants/constants';
import { useRequestData } from '../../hooks/useRequestData'




function ListTripPages() {

  const [data, isLoadingTrip, errorTrip] = useRequestData(`${BASE_URL}trips`)
  console.log(data)

  const navigate = useNavigate()

  const goToApplicationForms = () => {
    navigate("/trips/application")
  }

  const goToLastPage = () => {
    navigate(-1)
  }

  const travelList = data.trips && data.trips.map((trip) => {
    return <div>
     <h4>Nome:</h4><p>{trip.name}</p>
     <h4>Descrição:</h4><p>{trip.description}</p> 
     <h4>Planeta:</h4> <p>{trip.planet}</p> 
     <h4>Duração:</h4><p>{trip.durationInDays}</p> 
     <h4>Data:</h4><p>{trip.date}</p>
  
  </div>
})




  return (
    <div>
      <div>
        <h1>Lista de Viagens</h1>
      </div>
      <div>
        {isLoadingTrip && <h5>Carregando Lista de Viagens...</h5>}
        {!isLoadingTrip && errorTrip && <h5>Ocorreu um erro!</h5>}
        {!isLoadingTrip && data && travelList}
      </div>
      <button onClick={goToApplicationForms}>Cadastre-se</button>
      <button onClick={goToLastPage}>Voltar</button>
    </div>
  );
}

export default ListTripPages;
