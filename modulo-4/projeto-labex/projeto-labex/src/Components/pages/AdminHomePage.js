import React from "react";
import { useNavigate } from 'react-router-dom';

function AdminHomePage() {

  const navigate=useNavigate();

  const goToViagensOk = () => {
    navigate("/admin/trips/:id")
  }

  const LastPage = () => {
    navigate(-1)
  }

  const logout = () =>{
    navigate("/")
  }

  const criarNovaViagem = () =>{
    navigate("/admin/trips/create")
  }
  return (
    <div>
      <h1>Página do Administrador</h1>
      <button onClick={goToViagensOk}>Viagens existentes </button>
      <button onClick={LastPage}>Voltar</button>
      <button onClick={criarNovaViagem}>Criar Viagem</button>
      <button onClick={logout}>Logout</button>
     
    </div>
  );
}

export default AdminHomePage;
