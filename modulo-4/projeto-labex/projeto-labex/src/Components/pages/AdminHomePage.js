import React from "react";
import { useNavigate } from 'react-router-dom';

function AdminHomePage() {

  const navigate=useNavigate();

  const goToTravelOk = () => {
    navigate("/admin/trips/:id")
  }

  const LastPage = () => {
    navigate(-1)
  }

  const logout = () =>{
    navigate("/")
  }

  const createNewTravel = () =>{
    navigate("/admin/trips/create")
  }
  return (
    <div>
      <h1>Página do Administrador</h1>
      <button onClick={goToTravelOk}>Viagens existentes </button>
      <button onClick={LastPage}>Voltar</button>
      <button onClick={createNewTravel}>Criar Viagem</button>
      <button onClick={logout}>Logout</button>
     
    </div>
  );
}

export default AdminHomePage;
