import React from "react";
import { useNavigate } from 'react-router-dom';
import useRequestDataTrips from "./../../../hooks/useRequestDataTrips"
import { BASE_URL } from "./../constants/constants"
import rocket from './../../../img/rocket.png'
import {Header, Container, Title, ContainerTrips, Trips,TripsId, Footer, ControlButtons} from './style'

function AdminHomePage() {

  const [data, isLoading] = useRequestDataTrips(`${BASE_URL}trips`)
  const myTrips = data && data.trips.map((trip) => {
    return (
      <ContainerTrips key={trip.id}>
        <Trips onClick={() => { goToTravelOk(trip.id) }}>
          <TripsId >{trip.name}</TripsId >
        </Trips>
      </ContainerTrips >
    )
  })


  const navigate = useNavigate();

  const goToTravelOk = (id) => {
    navigate(`/admin/trips/${id}`)
  }

  const LastPage = () => {
    navigate(-1)
  }
  
  const logout = () => {
    navigate("/")
  }
  
  const createNewTravel = () => {
    navigate("/admin/trips/create")
  }
  return (
    <Container>
      <Header></Header>
      <Title>
        <h1>Página do Administrador</h1><img src={rocket}></img>
      </Title>
      {isLoading && <h3>"Carregando as próximas viagens..."</h3>}
      {!isLoading && data && data.trips.length > 0 && myTrips}
      {!isLoading && data && data.trips.length === 0 && <h3>"Ocorreu um erro durante a requisição!"</h3>}
      <ControlButtons>
        <button onClick={LastPage}>Voltar</button>
        <button onClick={createNewTravel}>Criar Viagem</button>
        <button onClick={logout}>Logout</button>
      </ControlButtons>
      <Footer></Footer>
    </Container>
  );
}

export default AdminHomePage;
