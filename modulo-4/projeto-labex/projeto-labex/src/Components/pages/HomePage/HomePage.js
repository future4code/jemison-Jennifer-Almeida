import React from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Header, Section, SectionTitle, ControlButtons } from './style'
import galaxia from './../img/galaxia.jpg'

function HomePage() {
  const navigate = useNavigate()

  const goToTravelLists = () => {
    navigate("/list/trips")
  }

  const goToLogin = () => {
    navigate("/login")
  }
//<img src={galaxia}></img>
  return (
    <Container>

        <Header>
          <Section>
            <SectionTitle>
              <h1>Labex</h1>
            </SectionTitle>
            <ControlButtons >
              <button onClick={goToTravelLists}>Lista de Viagens</button>
              <button onClick={goToLogin}>Área  de Adm</button>
            </ControlButtons >
          </Section>
        </Header>
      
    </Container>
  );
}

export default HomePage;


