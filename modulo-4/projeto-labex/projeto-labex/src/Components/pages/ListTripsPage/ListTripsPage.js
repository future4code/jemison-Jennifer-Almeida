
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/constants';
import { useRequestData } from '../../../hooks/useRequestData'
import { Header, Container, Title, Borderbox, Trip, ControlTrips, Buttons } from './styles'





function ListTripsPages() {

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
    return <Trip>
      <ControlTrips>
        <h4>Nome:</h4><p>{trip.name}</p>
      </ControlTrips>
      <ControlTrips>
        <h4>Descrição:</h4><p>{trip.description}</p>
      </ControlTrips>
      <ControlTrips>
        <h4>Planeta:</h4> <p>{trip.planet}</p>
      </ControlTrips>
      <ControlTrips>
        <h4>Duração:</h4><p>{trip.durationInDays}</p>
      </ControlTrips>
      <ControlTrips>
        <h4>Data:</h4><p>{trip.date}</p>
      </ControlTrips>

    </Trip>
  })




  return (
    <Container>
      <Header>
      </Header>
      <Borderbox>
        <Title>
          <h1>Lista de Viagens</h1>
        </Title>
        <div>
          {isLoadingTrip && <h5>Carregando Lista de Viagens...</h5>}
          {!isLoadingTrip && errorTrip && <h5>Ocorreu um erro!</h5>}
          {!isLoadingTrip && data && travelList}
        </div>
        <Buttons>
        <button onClick={goToApplicationForms}>Cadastre-se</button>
        <button onClick={goToLastPage}>Voltar</button>
        </Buttons>
      </Borderbox>
    </Container>
  );
}

export default ListTripsPages;
