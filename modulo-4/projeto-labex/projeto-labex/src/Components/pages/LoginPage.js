
import React from "react";
import { useNavigate } from 'react-router-dom';




function LoginPage() {

  const navigate=useNavigate();

  const goToPainelAdm = () => {
    navigate("/admin/trips/list")
  }

  const goToLogin = () => {
    navigate(-1)
  }
  return (
    <div>
      <h1>PÁGINA DE LOGIN</h1>
      <button onClick={goToLogin}>Voltar</button>
      <button onClick={goToPainelAdm}>Entrar</button>
     
    </div>
  );
}

export default LoginPage;
