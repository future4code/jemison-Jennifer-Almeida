import React from "react";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate()

  const goToListaDeViagens = () => {
    navigate("/list/trips")
  }

  const goToLogin = () => {
    navigate("/login")
  }

  return (
    <div>
      <h1>Labex</h1>
      <button onClick={goToListaDeViagens}>Lista de Viagens</button>
      <button onClick={goToLogin}>Área  de Adm</button>
    </div>
  );
}

export default HomePage;


