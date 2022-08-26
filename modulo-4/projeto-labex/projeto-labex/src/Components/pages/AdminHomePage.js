import React from "react";
import { useNavigate } from 'react-router-dom';
import useRequestDataTrips from "../../hooks/useRequestDataTrips";
import { BASE_URL } from "./constants/constants";

function AdminHomePage() {

  const [data, isLoading] = useRequestDataTrips(`${BASE_URL}trips`)
  const myTrips = data && data.trips.map((trip) => {
    return (
      <div key={trip.id}>
        <div onClick={() => { goToTravelOk(trip.id) }}>
       <span>{trip.name}</span>
      </div> 
      </div >
    )
})


const navigate = useNavigate();

const goToTravelOk = (id) => {
  navigate(`/admin/trips/${id}`)
}

/*const LastPage = () => {
  navigate(-1)
}

const logout = () => {
  navigate("/")
}

const createNewTravel = () => {
  navigate("/admin/trips/create")
}*/
return (
  <div>
    <h1>Página do Administrador</h1>
    {isLoading && <h3>"Carregando as próximas viagens..."</h3>}
    {!isLoading && data && data.trips.length > 0 && myTrips}
    {!isLoading && data && data.trips.length === 0 && <h3>"Ocorreu um erro durante a requisição!"</h3>}

  </div>
);
}

export default AdminHomePage;
/*
<button onClick={goToTravelOk}>Viagens existentes </button>
      <button onClick={LastPage}>Voltar</button>
      <button onClick={createNewTravel}>Criar Viagem</button>
      <button onClick={logout}>Logout</button> */